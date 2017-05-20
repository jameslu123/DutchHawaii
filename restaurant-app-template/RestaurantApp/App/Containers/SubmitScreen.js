import React, { PropTypes } from 'react'
import { ScrollView, Text,Alert, Button,Dimensions } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'
import TextInputIcon from '../Components/TextInputIcon'
import I18n from '../I18n/I18n.js'
import Config from '../Config/App'
import RoundedButton from '../Components/RoundedButton'
import PayPalPayment from '../Components/PayPalPayment'
import * as firebase from 'firebase';

var Modal   = require('react-native-modalbox');

var dateFormat = require('dateformat');

// Styles
import styles from './Styles/SubmitScreenStyle'

class SubmitScreen extends React.Component {
  paypalapi: Object;
  constructor(props) {
   super(props);

   this.ordersFirebase = firebase.database().ref("Orders");
   this.state = {
     swipeToClose:true,
     name: null,
     phone:null,
     email:null,
     address:null,
     notes:null
   };


   /*this.state = {
     swipeToClose:true,
     name: "a",
     phone:"a",
     email:"a",
     address:"a",
     notes:"a"
   };*/
 }

 static propTypes = {
   items: PropTypes.array,
   name: PropTypes.string,
   phone: PropTypes.string,
   email: PropTypes.string,
   address: PropTypes.string,
   notes: PropTypes.string,
 }

 static navigationOptions = {
     title: 'Submit Order',
   };

 handleChangeName = (text) => {
   this.setState({ name: text })
 }

 openPayPalPayment=()=> {
    this.refs.PayPalModal.open();
  }

  onClose =()=> {
    console.log('Modal just closed');
  }

 handleChangeEmail = (text) => {
   this.setState({ email: text.toLowerCase() })
 }

 handleChangePhone = (text) => {
   this.setState({ phone: text })
 }

 handleChangeAddress = (text) => {
   this.setState({ address: text })
 }

 handleChangeNotes = (text) => {
   this.setState({ notes: text })
 }

 goBack=()=>{
   NavigationActions.pop();
   NavigationActions.pop();
   console.log("POP");
 }


 /**
 * This createas the actual email text
 */
 composeOrder=()=>{
   console.log(this.state)
   console.log(this.props.items);

   var message="\n=============\n";
   var subTotal=0;
   (this.props.items||[]).map((section,i) => {
     message+=(section.name+"\n");
     message+=(section.description+"\n");
     message+=("Qty:"+section.qty+"\n");
     message+=("Price:"+section.qty+" x "+Config.priceToPriceWithCurrency(section.price)+"\n");
     message+=("-------------\n");
     subTotal+=(section.qty*section.price);
   })
   message=="\n=============\n";

   //calculate tax
   var tax=((subTotal/100)*Config.tax);

   //Calucalte total
   var TOTAL=subTotal+tax;
   message+=("Subtotal:"+Config.priceToPriceWithCurrency(subTotal)+"\n");
   message+=("Tax:"+Config.priceToPriceWithCurrency(tax)+"\n");

   message+=("TOTAL:"+Config.priceToPriceWithCurrency(TOTAL)+"\n\n\n\n")

   message+="Name:    "+this.state.name+"\n";
   message+="Phone:   "+this.state.phone+"\n";
   message+="Address: "+this.state.address+"\n";
   message+="Notes:   "+this.state.notes+"\n";
   return message;
 }



 /**
 * Precheck For the order send
 */
 submitOrder=()=>{


   if(this.state.name!=null&&this.state.address!=null&&this.state.email!=null&&this.state.phone!=null&&this.state.notes!=null){
     //It is ok
     //Do We accept paypal payments
     if(Config.paypal.acceptPayments){
       this.openPayPalPayment();
     }else{
       this.saveOrderInFirebase()
     }

   }else{

     Alert.alert(
       I18n.t('missingInformation'),
       I18n.t('missingInfo')
     );
   }

 }

 /**
 * SAVE ORDER IN FIREBASE
 */
 saveOrderInFirebase=()=>{
   console.log(this.props.items);
   console.log(this.state);
   var savingObject={items:this.props.items};
   for (var key in this.state) {
      // skip loop if the property is from prototype
      if (!this.state.hasOwnProperty(key)) continue;

      savingObject[key]=this.state[key];

  }
  savingObject.status="new";
  var now = new Date();
  savingObject.date=dateFormat(now, "isoDateTime");
  this.ordersFirebase.push(savingObject);

  var message=this.composeOrder();
  console.log(message);
  this.sengGridSend(message);
 }

  /**
  * SEND GRID SEND
  */
  sengGridSend=(message)=>{
    fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization':'Bearer '+Config.SENDGRID_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
      "personalizations": [
        {
          "to": [
            {
              "email": Config.sendToEmail
            }
          ],
          "subject": "New order from "+this.state.name
        }
      ],
      "from": {
        "email": this.state.email
      },
      "content": [
        {
          "type": "text",
          "value": message
        }
      ]
    })
  }).then((response)=>{
    Alert.alert(
      I18n.t('orderReceived'),
      I18n.t('orderMessage')
    );
    this.props.clearCart();
    this.goBack();
  })

  }




  render () {



    return (
      <ScrollView style={styles.container}>



        <TextInputIcon onChangeText={this.handleChangeName} ref='name' icon="user" placeholder={I18n.t('name')}></TextInputIcon>
        <TextInputIcon onChangeText={this.handleChangeEmail} ref='email' icon="envelope-o" placeholder={I18n.t('email')}></TextInputIcon>
        <TextInputIcon onChangeText={this.handleChangePhone} icon="phone" placeholder={I18n.t('phone')}></TextInputIcon>
        <TextInputIcon onChangeText={this.handleChangeAddress} icon="map-marker" placeholder={I18n.t('address')}></TextInputIcon>
        <TextInputIcon onChangeText={this.handleChangeNotes} icon="pencil-square-o" placeholder={I18n.t('notes')}></TextInputIcon>
        <RoundedButton onPress={this.submitOrder}>
          {I18n.t('submitOrder')}
        </RoundedButton>

        <Modal
          ref='PayPalModal'
          onClosed={this.onClose}
          backdropPressToClose={true}
          backButtonClose={true}
          swipeToClose={true}
          style={styles.modal}
          onClosingState={()=>{this.isOpen=false}}>
          <PayPalPayment
            userInfo={this.state}
            closePopUp={()=>{this.refs.PayPalModal.close()}}
            setPaymentStatus={(payment_status)=>{
              console.log("Status:"+payment_status);
              if(payment_status=="approved"){
                this.saveOrderInFirebase()
              }else if(payment_status=="canceled"){
                //Do nothing

              }else{
                Alert.alert(
                  I18n.t('paymenterror'),
                  I18n.t('paymenterrorreport')
                );
              }
            }}
          />
        </Modal>


      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.cart.items,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(Actions.clearCart()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitScreen)
