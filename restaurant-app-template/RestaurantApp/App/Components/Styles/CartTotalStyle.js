import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  row:{
    height:120,
    backgroundColor: Colors.rowColor,
    flexDirection: 'column',
    padding: 0,
    borderRadius:3,
    borderWidth:1,
    borderColor:Colors.border,
    margin:15,
    marginBottom:7,
    flex:1
  },
  element:{
    padding:7,
    flex:1,
    flexDirection: 'row',
    borderColor:Colors.border,
    borderBottomWidth:1,
    alignItems:"center"
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


  titleInfoTotal:{
    //backgroundColor:"red",
    flex:3,
    fontWeight: "bold",
    fontSize: 14,
    padding:5,
  },
  descriptionInfoTotal:{
    //backgroundColor:"blue",
    flex:1,
    padding:5,
    textAlign:'right',
    fontWeight: "bold",
    fontSize: 14,
  },
})
