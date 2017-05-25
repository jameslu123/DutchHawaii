import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './Styles/NavItemsStyle'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors, Metrics } from '../Themes'

const toggleDrawer = () => {
  NavigationActions.refresh({
    key: 'drawer',
    open: value => !value
  })
}


const openCart = () => {
  NavigationActions.cartandcheckout();
}

export default {
  backButton () {
    return (
      <TouchableOpacity onPress={NavigationActions.pop}>
        <Icon name='angle-left'
          size={Metrics.icons.medium}
          color={Colors.snow}
          style={styles.navButtonLeft}
        />
      </TouchableOpacity>
    )
  },

  cartButton () {
    return (
      <TouchableOpacity   style={styles.navButtonHolder} onPress={openCart} >
        <Icon name='shopping-cart'
          size={Metrics.icons.medium}
          color={Colors.snow}
          style={styles.navButtonRight}
        />
      </TouchableOpacity>
    )
  },


  hamburgerButton () {
    return (
      <TouchableOpacity onPress={toggleDrawer}>
        <Icon name='bars'
          size={Metrics.icons.medium}
          color={Colors.snow}
          style={styles.navButtonLeft}
        />
      </TouchableOpacity>
    )
  }

}
