import {StyleSheet,Dimensions} from 'react-native'
import { Metrics, Colors } from '../../Themes/'
const {width, height, scale} = Dimensions.get("window")

export default StyleSheet.create({
  navButtonLeft: {
    //marginTop: Metrics.doubleBaseMargin,
    marginLeft: Metrics.baseMargin,
    backgroundColor: Colors.transparent,
    width: Metrics.icons.medium
  },
  navButtonRight: {
    //marginTop: Metrics.doubleBaseMargin+2,
    marginRight: Metrics.baseMargin,
    backgroundColor: Colors.transparent,
    width: Metrics.icons.medium,
  },
  navButtonHolder: {
    backgroundColor: Colors.transparent,
    width:Metrics.icons.medium,
    marginLeft:width-Metrics.icons.medium-10
  },


})
