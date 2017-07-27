import React from 'react'
import PropTypes from 'prop-types'
import { View, Text,TouchableOpacity } from 'react-native'
import styles from './Styles/CartRowStyle'
import Config from '../Config/App'
import CartActionButton from  '../Components/CartActionButton'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors, Metrics, ApplicationStyles } from '../Themes/'

export default class CartRow extends React.Component {

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

  render () {
    return (
      <View style={styles.row}>
        <View style={styles.topPart}>
          <View style={styles.infoPart}>
            <Text style={styles.title} >{this.props.element.name}</Text>
            <Text style={styles.description}>{this.props.element.description}</Text>
          </View>
          <View style={styles.pricePart}>
            <Text style={styles.price}>{Config.priceToPriceWithCurrency(this.props.element.price*this.props.element.qty)}</Text>
          </View>
        </View>
        <View style={styles.bottomPart}>
          <View style={styles.qtyPart}>
            <TouchableOpacity onPress={()=>{this.props.action(this.props.index,-1)}}>
              <CartActionButton text="-"  />
            </TouchableOpacity>
            <Text style={styles.qtyText}>{this.props.element.qty}</Text>
            <TouchableOpacity onPress={()=>{this.props.action(this.props.index,1)}}>
              <CartActionButton text="+" />
            </TouchableOpacity>
          </View>
          <View style={styles.deletePart}>
            <TouchableOpacity onPress={()=>{this.props.action(this.props.index,0)}}>
              <Icon name='trash-o' size={20} color={Colors.textColor} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
