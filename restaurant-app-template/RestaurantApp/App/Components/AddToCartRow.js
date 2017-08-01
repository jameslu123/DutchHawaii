import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableHighlight,Alert } from 'react-native'
import styles from './Styles/AddToCartRowStyle'
import Actions from '../Actions/Creators'
import { connect } from 'react-redux'
import I18n from '../I18n/I18n.js'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors, Metrics, ApplicationStyles } from '../Themes/'
import { generate } from 'shortid'

export class AddToCartRow extends React.Component {

  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  constructor (props) {
    super(props)
  }


  prepareToAddToCart() {
    var newItem={
      name:this.props.productName,
      description:this.props.data.price_name,
      price:this.props.data.price_value,
      item:shortid.generate(),
      qty:1
    }
    console.log(this.props);
    console.log(newItem);
    Alert.alert(
      I18n.t('addedInCart'),
      this.props.productName+", "+this.props.data.price_name+" "+I18n.t('productAdded'),
    )
    this.props.addCart(newItem);
  }


  render () {
    return (
      <View style={styles.row}>
        <View style={styles.nameAndInfoPart}>
          <Text style={styles.title}>{this.props.data.price_name}</Text>
          <Text style={styles.subTitle}>{this.props.data.price_info}</Text>
        </View>
        <View style={styles.pricePart}>
          <TouchableHighlight style={styles.actionButton} onPress={()=>{this.prepareToAddToCart()}}>
            <View style={styles.actionButtonView}>
              <Text style={styles.price}>{this.props.value}</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.cartPart}>
          <TouchableHighlight style={styles.actionButtonCart} onPress={()=>{this.prepareToAddToCart()}}>
            <Icon name='cart-plus' size={20} color={Colors.secondTextColor} />
          </TouchableHighlight>
        </View>


      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCart: (item) => dispatch(Actions.addCart(item)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartRow)
