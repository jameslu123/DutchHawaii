import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/CartTotalStyle'
import I18n from '../I18n/I18n.js'
import Config from '../Config/App'

export default class CartTotal extends React.Component {

  // // Prop type warnings
  // static propTypes = {
  //   someProperty: React.PropTypes.object,
  //   someSetting: React.PropTypes.bool.isRequired
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {

    //Calculate subTotal
    var subTotal=0;

    (this.props.items||[]).map((section,i) => {
      subTotal+=(parseFloat(section.qty)*parseFloat(section.price));

    })
    console.log(subTotal)

    //calculate tax
    var tax=((subTotal/100)*Config.tax);

    //Calucalte total
    var TOTAL=subTotal+tax;


    return (



      <View style={styles.row}>
        <View style={styles.element}>
          <Text style={styles.titleInfo}>{I18n.t('subtotal')}:</Text>
          <Text style={styles.descriptionInfo}>{Config.priceToPriceWithCurrency(subTotal)}</Text>
        </View>
        <View style={styles.element}>
          <Text style={styles.titleInfo}>{I18n.t('tax')}:</Text>
          <Text style={styles.descriptionInfo}>{Config.priceToPriceWithCurrency(tax)}</Text>
        </View>
        <View style={styles.element}>
          <Text style={styles.titleInfoTotal}>{I18n.t('total')}:</Text>
          <Text style={styles.descriptionInfoTotal}>{Config.priceToPriceWithCurrency(TOTAL)}</Text>
        </View>
      </View>
    )
  }
}
