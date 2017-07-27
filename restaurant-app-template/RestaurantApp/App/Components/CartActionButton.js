import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/CartActionButtonStyle'

export default class CartActionButton extends React.Component {

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
        <View style={styles.container}>
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
    )
  }
}
