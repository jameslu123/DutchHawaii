import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'
var rowheight=55;
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.titlePadding
  },
  row:{
    height:rowheight,
    backgroundColor: Colors.rowColor,
    flexDirection: 'row',
    padding: 7,
    borderRadius:0,
    borderWidth:0,
    borderBottomWidth:1,
    borderColor:Colors.border,
    margin:0,
    flexDirection: 'row',
  },
  nameAndInfoPart:{
    flexDirection: 'column',
    flex:4,
    //backgroundColor:"red"
  },
  pricePart:{
    flex:1,
    alignItems:'center',
  },
  cartPart:{
    flex:1,
    alignItems:'center',
  },
  actionButton:{
    backgroundColor:Colors.background,
    //width:rowheight-11,
    height:rowheight-14,
    borderRadius:2,
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    padding:2
  },

  actionButtonCart:{
    //width:rowheight-11,
    height:rowheight-14,
    borderRadius:2,
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    padding:10
  },

  actionButtonView:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },


  title:{
    //backgroundColor:"red",
    flex:3,
    fontWeight: "300",
    fontSize: 14,
  },
  subTitle:{
    //backgroundColor:"red",
    flex:2,
    fontWeight: "300",
    fontSize: 13,
    color:Colors.secondTextColor
  },
  price:{
    //backgroundColor:"blue",
    flex:1,
    color:Colors.secondTextColor,
    fontSize: 13,
    textAlign:"center"
  },
})
