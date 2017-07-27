import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import styles from './Styles/AlertMessageComponentStyle'
import * as Animatable from 'react-native-animatable'
import { Metrics } from '../Themes/'
import Icon from 'react-native-vector-icons/Ionicons'


export default class AlertMessage extends React.Component {

  static propTypes = {
    style: PropTypes.object,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    show: PropTypes.bool
  }

  static defaultProps = {
    show: true
  }

  render () {
    let messageComponent = null
    if (this.props.show) {
      const { title } = this.props
      return (
        <Animatable.View
          style={[styles.container, this.props.style]}
          delay={800}
          animation='bounceIn'
        >
          <View style={styles.contentContainer}>
            <Icon
              name={this.props.icon || 'ios-alert'}
              size={Metrics.icons.large}
              style={styles.icon}
            />
            <Text allowFontScaling={false} style={styles.message}>{title && title.toUpperCase()}</Text>
          </View>
        </Animatable.View>
      )
    }

    return messageComponent
  }
}
