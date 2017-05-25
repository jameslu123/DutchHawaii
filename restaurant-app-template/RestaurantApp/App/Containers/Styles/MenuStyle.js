import { StyleSheet,Dimensions } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

const {width, height, scale} = Dimensions.get("window")


export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    //marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  row: {
    flex: 1,
    backgroundColor: Colors.fire,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'center'
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  label: {
    textAlign: 'center',
    color: Colors.snow
  },
  listContent: {
    flex: 1,
    marginTop: Metrics.baseMargin
  },
  "scrollView":{
    flex: 1,
    //marginTop:Metrics.navBarHeight,
  },
  "image": {
        "width": width,
        "height": 160,
    },
    "overlay": {
        "alignItems": "center",
        "justifyContent": "center",
        "backgroundColor": "rgba(0,0,0,0.4)"
    },
    "title": {
        "fontSize": 18,
        "textAlign": "center",
        "lineHeight": 25,
        "fontWeight": "400",
        "color": "white",
        "shadowOffset": {width: 0, height: 0},
        "shadowRadius": 1,
        "shadowColor": "black",
        "shadowOpacity": 0.8
    },
    "description": {
        "opacity": 0.9,
        "fontSize": 13,
        "textAlign": "center",
        "color": "white",
        "paddingTop": 6
    }
})
