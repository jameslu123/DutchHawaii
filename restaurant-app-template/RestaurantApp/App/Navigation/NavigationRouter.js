import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors, Metrics, ApplicationStyles } from '../Themes/'
import I18n from '../I18n/I18n.js'
import { View, Text} from 'react-native'
//import I18n from 'ex-react-native-i18n'

// screens identified by the router
import MenuList from '../Containers/Menu'
import FoodListPerCategory from '../Containers/FoodListPerCategory'
import ProductScreen from '../Containers/ProductScreen'
import CartAndCheckout from '../Containers/CartAndCheckout'
import SubmitScreen from '../Containers/SubmitScreen'
import Contact from '../Containers/Contact'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    console.log('start to render NavigationRouter')

    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer}>
          {/*}<Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>

            <Scene initial key='menuList' component={MenuList} title='Menu'  renderLeftButton={NavItems.hamburgerButton} renderRightButton={NavItems.cartButton} />
            <Scene key='foodList' component={FoodListPerCategory} title='FoodListPerCategory'  renderRightButton={NavItems.cartButton} />
            <Scene key='productScreen' component={ProductScreen} title='Product Screen'  renderRightButton={NavItems.cartButton} />
            <Scene key='cartandcheckout' component={CartAndCheckout} title='Order' />
            <Scene key='submitScreen' component={SubmitScreen} title='Submit' />
            <Scene key='contact' component={Contact} title='Contact' />

          </Scene> */}
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
