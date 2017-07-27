import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/RoundedButtonStyle'

export default class RoundedButton extends React.Component {

  static propTypes = {
    navigator: PropTypes.object,
    text: PropTypes.string,
    onPress: PropTypes.func.isRequired,
    children: PropTypes.string
  }

  getText () {
    const buttonText = this.props.text || this.props.children.toString()
    return buttonText.toUpperCase()
  }

  render () {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.getText()}</Text>
      </TouchableOpacity>
    )
  }
}
