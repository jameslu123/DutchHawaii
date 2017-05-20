import React, { PropTypes } from 'react'
import { ScrollView, Text,Alert } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'
import TextInputIcon from '../Components/TextInputIcon'
import I18n from '../I18n/I18n.js'
import Config from '../Config/App'
import RoundedButton from '../Components/RoundedButton'

// Styles
import styles from './Styles/ContactStyle'

class Contact extends React.Component {

  constructor(props) {
   super(props);
   this.state = {
     name: null,
     phone:null,
     email:null,
     notes:null};
 }

 static propTypes = {
   name: PropTypes.string,
   phone: PropTypes.string,
   email: PropTypes.string,
   notes: PropTypes.string,
 }

 handleChangeName = (text) => {
   this.setState({ name: text })
 }

 handleChangeEmail = (text) => {
   this.setState({ email: text.toLowerCase() })
 }

 handleChangePhone = (text) => {
   this.setState({ phone: text })
 }

 handleChangeNotes = (text) => {
   this.setState({ notes: text })
 }

 goBack=()=>{
   NavigationActions.pop();
   console.log("POP");
 }


 /**
 * This createas the actual email text
 */
 composeOrder=()=>{
   var message="";
   message+="Name:    "+this.state.name+"\n";
   message+="Phone:   "+this.state.phone+"\n";
   message+="Notes:   "+this.state.notes+"\n";
   return message;
 }

 /**
 * Precheck For the order send
 */
 submitOrder=()=>{
   if(this.state.name!=null&&this.state.email!=null&&this.state.phone!=null&&this.state.notes!=null){
     //It is ok
     var message=this.composeOrder();
     console.log(message);
     this.sengGridSend(message)
   }else{
     Alert.alert(
       I18n.t('missingInformation'),
       I18n.t('missingInfo')
     );
   }

 }


 /**
 * SEND GRID SEND
 */
 sengGridSend=(message)=>{
   fetch('https://api.sendgrid.com/v3/mail/send', {
       method: 'POST',
       headers: {
         'Authorization':'Bearer '+Config.SENDGRID_API_KEY,
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
     "personalizations": [
       {
         "to": [
           {
             "email": Config.sendToEmail
           }
         ],
         "subject": "New mail from "+this.state.name
       }
     ],
     "from": {
       "email": this.state.email
     },
     "content": [
       {
         "type": "text",
         "value": message
       }
     ]
   })
 }).then((response)=>{
   Alert.alert(
     I18n.t('mailReceived'),
     I18n.t('mailMessage')
   );
   this.goBack();
 })

 }


  render () {
    return (
      <ScrollView style={styles.container}>
        <TextInputIcon onChangeText={this.handleChangeName} ref='name' icon="user" placeholder={I18n.t('name')}></TextInputIcon>
        <TextInputIcon onChangeText={this.handleChangeEmail} ref='email' icon="envelope-o" placeholder={I18n.t('email')}></TextInputIcon>
        <TextInputIcon onChangeText={this.handleChangePhone} icon="phone" placeholder={I18n.t('phone')}></TextInputIcon>
        <TextInputIcon onChangeText={this.handleChangeNotes} icon="pencil-square-o" placeholder={I18n.t('message')}></TextInputIcon>
        <RoundedButton onPress={this.submitOrder}>
          {I18n.t('send')}
        </RoundedButton>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
