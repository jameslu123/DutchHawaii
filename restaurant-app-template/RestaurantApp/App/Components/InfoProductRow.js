import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import styles from './Styles/InfoProductRowStyle'

export default class InfoProductRow extends React.Component {

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
      <View style={styles.rowInfo}>
        <Text style={styles.titleInfo}>{this.props.name}</Text>
        <Text style={styles.descriptionInfo}>{this.props.value}</Text>
      </View>
    )
  }
}
