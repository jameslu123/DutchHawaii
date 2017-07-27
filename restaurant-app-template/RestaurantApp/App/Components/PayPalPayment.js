// @flow

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { View, Text,WebView } from 'react-native'
import styles from './Styles/PayPalPaymentStyle'
import PayPalAPI from '../Services/PayPal'
import Config from '../Config/App'
import { connect } from 'react-redux'


export  class PayPalPayment extends React.Component {

  constructor(props) {
      super(props)
      this.paypalapi=PayPalAPI.create();
      this.access_token = "";
      this.state = {url: 'https://www.paypal.com'}
      this.shouldCheckURL = true // use to make sure accept or cancel only execute once.
  }

  static propTypes = {
      closePopUp: PropTypes.func.isRequired,
      setPaymentStatus: PropTypes.func.isRequired,
  };

  componentDidMount() {

     console.log(this.props.userInfo);
      const setPaymentDetails = (json, access_token) => {
          this.executeURL = json.links[2].href // execute => store accept payment request
          this.access_token = access_token
          this.setState({
              url: json.links[1].href, //approval_url => user accept payment request
          })
      }
      //STEP 1 -- Start by getting the Access token
      this.paypalapi.getAccessToken((token)=>{
        //Save the token locally and start getting the payment URLS
        this.access_token = token;

        //Set up the items
        const items = [] //cart items
        var subTotal=0;
        (this.props.items||[]).map((item,i) => {
          items.push({
              name: item.name,
              quantity: item.qty,
              price: item.price,
              tax: ((item.price/100)*Config.tax)+"",
              sku: '/',
              currency: Config.paypal.currency
          })
          subTotal+=(item.qty*item.price);
        })

        //shipingInfo
        var item_list={items: items};
        if(Config.includeShippingInfo){
          shipingInfo={
            recipient_name: this.props.userInfo.name,
            country_code: Config.paypal.country_code,
            postal_code: Config.paypal.postal_code,
            city: Config.paypal.city,
            line1: this.props.userInfo.address,
            phone: this.props.userInfo.phone,
            state:Config.paypal.state,
          }
          console.log(shipingInfo);
          item_list.shipping_address=shipingInfo;
        }


        //Now build the order
        order = [
            {


                amount: {
                    total: (subTotal+((subTotal/100)*Config.tax))+"",
                    currency: Config.paypal.currency,
                    details: {
                        subtotal:subTotal,
                        tax: ((subTotal/100)*Config.tax),
                        shipping:0

                    }
                },
                payment_options: {allowed_payment_method: 'INSTANT_FUNDING_SOURCE'},
                item_list: item_list,


            }
        ];



        //Compose the payment info
        payment_element = {
            intent: 'sale',
            "note_to_payer": this.props.note,
            redirect_urls: {
                return_url: Config.paypal.return_url,
                cancel_url: Config.paypal.cancel_url,
            },
            payer: {
                payment_method: 'paypal'
            },
            transactions: order,
        }

        console.log(payment_element);

        //STEP 2 - GET the payment url
        this.paypalapi.getPaymentURLs(token,JSON.stringify(payment_element),(execute,approval_url)=>{
          this.execute = execute;
          this.setState({
              url: approval_url
          })
        })


      })
  }

  render () {
    return (
      <WebView
        source={{uri: this.state.url}}
        style={{flex: 1}}
        onNavigationStateChange={this._onNavigationStateChange.bind(this)}
        javaScriptEnabled={true}
        startInLoadingState={true}
      />
    )
  }

   getParameterByName(name, url) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


  _onNavigationStateChange(webViewState) {
      if(!this.processed){
        const url = webViewState.url
        console.log(url);
        if (url.indexOf(Config.paypal.return_url)>-1) {
            this.processed = true
            var payerId=this.getParameterByName("PayerID",url);
            console.log(payerId);

            //STEP 3 - Aprouve the payment
            this.paypalapi.executePayment(payerId,this.execute,this.access_token,(response)=>{
              if (response.data.state == 'approved') {
                  this.props.setPaymentStatus(response.data.state)
                  this.props.closePopUp()
              } else {
                  console.log(response);

              }
            })

        } else if (url.indexOf(Config.paypal.cancel_url)>-1) {
            this.processed = false
            this.props.setPaymentStatus("canceled")
            this.props.closePopUp()
        }
      }
  }


}


const mapStateToProps = (state) => {
  return {
    items: state.cart.items,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PayPalPayment)

// // Prop type warnings
// PayPalPayment.propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired
// }
//
// // Defaults for props
// PayPalPayment.defaultProps = {
//   someSetting: false
// }
