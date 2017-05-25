import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.titlePadding
  },

  row:{
    height:120,
    backgroundColor: Colors.rowColor,
    flexDirection: 'row',
    padding: 7,
    borderRadius:3,
    borderWidth:1,
    borderColor:Colors.border,
    margin:10,
  },
  thumb: {
    width: 130,
    height: 106,
    marginRight: 10,
    borderRadius:3,
  },
  info:{
    height:90,
    flexDirection: 'column',
    flex:1,
    //backgroundColor:"green",
    marginTop:10
  },
  title:{
    //backgroundColor:"red",
    flex:1,
    fontWeight: 'bold',
    marginTop:0,
    color:Colors.textColor
  },
  description:{
    //backgroundColor:"blue",
    flex:2,
    color:Colors.secondTextColor
  },
  price:{
    //backgroundColor:"yellow",
    flex:1,
    fontStyle: 'italic',
    color:Colors.textColor
  }
})
