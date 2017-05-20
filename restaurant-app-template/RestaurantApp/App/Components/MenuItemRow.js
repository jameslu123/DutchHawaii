import React from 'react'
import { View, Text, Image,TouchableHighlight } from 'react-native'
import styles from './Styles/MenuItemRowStyle'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { Colors, Metrics, ApplicationStyles } from '../Themes/'


export default class MenuItemRow extends React.Component {

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

  constructor(props){
    super(props)

    console.log(this.props);
  }

  render () {
    return (
      <TouchableHighlight underlayColor={Colors.background} onPress={() => {
          NavigationActions.productScreen({title:this.props.data.name,data:this.props.data});
        }}>
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
