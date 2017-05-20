import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './Styles/MenuCategoryRowStyle'
import ProgressiveImage from './ProgressiveImage'
import { Images } from '../Themes'

export default class MenuCategoryRow extends React.Component {

   // Prop type warnings
   static propTypes = {
     title: React.PropTypes.string.isRequired,
     description: React.PropTypes.string.isRequired
   }

   // Defaults for props
   //static defaultProps = {
   //   someSetting: false
   //}

  render () {
    return (
      <View style={styles.row}>


        <ProgressiveImage

          defaultSource={Images.logo}
          source='https://upload.wikimedia.org/wikipedia/commons/c/cc/ESC_large_ISS022_ISS022-E-11387-edit_01.JPG'
          thumbnail='http://i.imgur.com/eVAFUhj.png'
        />
        

      </View>

    )
  }
}
