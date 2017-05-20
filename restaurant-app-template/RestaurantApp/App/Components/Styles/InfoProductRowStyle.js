import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'
var rowheight=45;
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.titlePadding
  },
  rowInfo:{
    height:rowheight,
    backgroundColor: Colors.rowColor,
    flexDirection: 'row',
    borderRadius:0,
    borderWidth:0,
    borderBottomWidth:1,
    borderColor:Colors.border,
    margin:0,
    padding:7,
  },
  titleInfo:{
    //backgroundColor:"red",
    flex:3,
    fontWeight: "300",
    fontSize: 14,
    padding:5,


  },
  descriptionInfo:{
    //backgroundColor:"blue",
    flex:1,
    padding:5,
    textAlign:'right',
    fontWeight: "300",
    fontSize: 14,
    color:Colors.secondTextColor
  },
})
