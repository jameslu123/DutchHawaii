import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Image,Linking,View } from 'react-native'
import styles from './Styles/DrawerContentStyle'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import Config from '../Config/App'

import { Actions as NavigationActions } from 'react-native-router-flux'

class DrawerContent extends Component {

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handlePressComponents = () => {
    this.toggleDrawer()
    NavigationActions.componentExamples()
  }

  handlePressUsage = () => {
    this.toggleDrawer()
    NavigationActions.usageExamples()
  }

  handlePressAPI = () => {
    this.toggleDrawer()
    NavigationActions.apiTesting()
  }

  handlePressTheme = () => {
    this.toggleDrawer()
    NavigationActions.theme()
  }

  handlePressDevice = () => {
    this.toggleDrawer()
    NavigationActions.deviceInfo()
  }

  handlePressCart = () => {
    this.toggleDrawer()
    NavigationActions.cartandcheckout()
  }

  handlePressMenu = () => {
    this.toggleDrawer()
    NavigationActions.menuList()
  }

  handlePressContact = () => {
    this.toggleDrawer()
    NavigationActions.contact()
  }

  handlePressCall = () => {
    this.toggleDrawer()
    console.log("CALL US");
    Linking.canOpenURL('tel:'+Config.telephone).then(supported => {
      if (supported) {
        Linking.openURL('tel:'+Config.telephone);
      } else {
        console.log('Don\'t know how to open URI: ');
      }
    });

  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.logoHolder}>
          <Image source={Images.logo} style={styles.logo} />
        </View>
        <View style={styles.menuHolder}>
            <DrawerButton icon='shopping-basket' text='Menu' onPress={this.handlePressMenu} />
            <DrawerButton icon='shopping-cart' text='Cart' onPress={this.handlePressCart} />
            <DrawerButton icon='envelope' text='Contact' onPress={this.handlePressContact} />
            <DrawerButton icon='phone' text='Call Us' onPress={this.handlePressCall} />
        </View>

        {

          //Enable this ones if you want to extend / debug or learn from this app

          /*<DrawerButton text='Component Examples' onPress={this.handlePressComponents} />
        <DrawerButton text='Usage Examples' onPress={this.handlePressUsage} />
        <DrawerButton text='API Testing' onPress={this.handlePressAPI} />
        <DrawerButton text='Themes' onPress={this.handlePressTheme} />
        <DrawerButton text='Device Info' onPress={this.handlePressDevice} />*/ }


      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: PropTypes.object
}

export default DrawerContent
