import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  row:{
    height:120,
    backgroundColor: Colors.rowColor,
    flexDirection: 'column',
    padding: 7,
    borderRadius:3,
    borderWidth:1,
    borderColor:Colors.border,
    margin:15,
    marginBottom:7,
    flex:1
  },

  topPart:{
    flex:10,
    flexDirection: 'row',
    borderColor:Colors.border,
    borderBottomWidth:1
  },
  bottomPart:{
    flex:8,
    flexDirection: 'row',
  },


  infoPart:{
    flex:3,
    justifyContent:"center",
    marginLeft:10,
  },
  pricePart:{
    flex:1,
    justifyContent:"center",
  },

  qtyPart:{
    flex:3,
    marginLeft:-10,
    //justifyContent:"center",
    flexDirection: 'row',
  },
  deletePart:{
    flex:1,
    justifyContent:"center",
    "alignItems": "center",
  },


  title:{
    flex:2,
    fontWeight: 'bold',
    color:Colors.textColor,
  },
  description:{
    flex:3,
    color:Colors.secondTextColor,
    fontSize:12,
    //backgroundColor:"red"
  },
  price:{
    fontWeight: 'bold',
    marginTop:0,
    color:Colors.textColor,
    "alignItems": "center",
    "justifyContent": "flex-start"
  },
  qtyText:{
    paddingTop:15,
    fontWeight: 'bold',
  }
})
