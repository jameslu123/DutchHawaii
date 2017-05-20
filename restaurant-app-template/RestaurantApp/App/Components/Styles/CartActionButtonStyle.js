import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    justifyContent:"center",
    width: 30,
    height: 30,
    //backgroundColor:"red",
    borderRadius:15,
    padding:2,
    borderWidth:1,
    borderColor:Colors.textColor,
    margin:10,
    marginRight:20,
    marginLeft:20
  },
  text:{
    color:Colors.textColor,
    fontSize:12,
    fontWeight:"bold",
    textAlign:"center"
  }
})
