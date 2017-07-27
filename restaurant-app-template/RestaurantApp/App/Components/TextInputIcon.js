import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text,Image,TextInput } from 'react-native'
import styles from './Styles/TextInputIconStyle'
import { Colors, Metrics, ApplicationStyles } from '../Themes/'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class TextInputIcon extends React.Component {

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

  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render () {
    return (
      <View style={styles.rootView}>
        <View style={styles.iconView}>
          <Icon name={this.props.icon}
            size={23}
            color={Colors.accentColor}
            />
        </View>
        <View style={styles.textView}>
          <TextInput
            style={styles.textStyle}
            placeholderTextColor={"#ababab"}
            {...this.props}/>
        </View>

      </View>
    )
  }
}
