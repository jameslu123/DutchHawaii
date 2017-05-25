import React, { Component, PropTypes } from 'react'
import { Text, TouchableOpacity,View } from 'react-native'
import styles from './Styles/DrawerButtonStyles'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors, Metrics, ApplicationStyles } from '../Themes/'

class DrawerButton extends Component {
  render () {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
      <View style={styles.rootView}>
        <View style={styles.iconView}>
          <Icon name={this.props.icon}
            size={20}
            color={"#555555"}
            />
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
      </View>
      </TouchableOpacity>
    )
  }
}

DrawerButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}

export default DrawerButton
