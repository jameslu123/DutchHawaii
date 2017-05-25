import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/CartActionButtonStyle'

export default class CartActionButton extends React.Component {

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

  constructor (props) {
    super(props)
  }

  render () {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
    )
  }
}
