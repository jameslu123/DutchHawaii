import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import styles from './Styles/MenuItemRowStyle'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { Colors, Metrics, ApplicationStyles } from '../Themes/'


export default class MenuItemRow extends React.Component {

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

  constructor(props){
    super(props)
    console.log('item '+ JSON.stringify(this.props));
  }

  render () {
    const { navigate } = this.props.navigation;
    return (
      <TouchableHighlight
        underlayColor={Colors.background}
        onPress={() => navigate('product', {title:this.props.data.name,data:this.props.data})}
      >
        <View style={styles.row}>
          <Image style={styles.thumb} source={{ uri: this.props.data.photo }} />
          <View style={styles.info}>
            <Text numberOfLines={1} style={styles.title}>{this.props.data.name}</Text>
            <Text numberOfLines={2} style={styles.description}>{this.props.data.description}</Text>
            <Text numberOfLines={1} style={styles.price}>{this.props.data.price}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}
