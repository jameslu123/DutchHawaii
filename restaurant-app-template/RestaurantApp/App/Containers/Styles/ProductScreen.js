import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window")
import { Colors, Metrics} from '../../Themes/'

export default StyleSheet.create({
    "container": {
        "flex": 1
    },
    "thePhoto": {
        "width": width,
        "height":  width-150
    },
    "infoPanel": {
        "height": width-150,
        "flex": 1,
        "alignItems": "center",
        "justifyContent": "flex-end"
    },
    "infoHolder": {
        "alignItems": "center",
        "backgroundColor": "rgba(255,255,255,0.7)",
        "padding": 15,
        //width:width,
    },
    "nameInfo": {
        "fontWeight": "300",
        "fontSize": 18,
    },
    "priceInfo": {
        "fontSize": 14,
        "textAlign": "center",
        "color": Colors.secondTextColor,
        "fontWeight": "300",
        "paddingTop": 5,
    },
    "descriptionInfo": {
        "color": Colors.secondTextColor,
        "fontWeight": "300",
        "fontSize": 13,
        "padding": 10,
        "textAlign": "center"
    },
    "headerLabel":{
      margin:10,
      textAlign:"center",
      "fontWeight": "300",
      "fontSize": 14,
      "color": Colors.secondTextColor,
    },

});
