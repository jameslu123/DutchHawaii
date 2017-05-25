import { Metrics, Colors, Fonts } from '../../Themes'

export default {
  text: {
    ...Fonts.style.h5,
    color: Colors.secondTextColor,
    marginVertical: Metrics.baseMargin+5
  },
  rootView:{
    flexDirection: 'row',
    flex:1,
    borderWidth:0,
    borderBottomWidth:0.5,
    borderColor:Colors.border
  },
  iconView:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  textView:{
    flexDirection: 'column',
    flex:6,
    paddingLeft:20
  },
}
