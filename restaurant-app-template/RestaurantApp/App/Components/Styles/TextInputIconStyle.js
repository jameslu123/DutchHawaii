import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  rootView:{
      padding: 0,
      backgroundColor: Colors.rowColor,
      height:45,
      borderRadius:3,
      borderWidth:1,
      borderColor:Colors.border,
      marginLeft:10,
      marginRight:10,
      marginTop:10,
      marginBottom:0,
      flexDirection: 'row',
      flex:1,
    },
    iconView:{
      flex:1,
      alignItems:"center",
      justifyContent:"center"
    },
    textView:{
      flexDirection: 'column',
      flex:6,
    },
    textStyle:{
      height:45,
    },
    icon:{

    }


})
