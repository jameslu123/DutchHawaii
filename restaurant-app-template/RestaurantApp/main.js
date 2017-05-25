import Expo from 'expo'
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator, DrawerItems} from 'react-navigation';
import configureStore from './App/Store/Store';
import { Provider } from 'react-redux';

// screens identified by the router
import MenuList from './App/Containers/Menu';
import FoodListPerCategory from './App/Containers/FoodListPerCategory';
import ProductScreen from './App/Containers/ProductScreen';
import CartAndCheckout from './App/Containers/CartAndCheckout';
import SubmitScreen from './App/Containers/SubmitScreen';
import Contact from './App/Containers/Contact';
import NavigationDrawer from './App/Navigation/NavigationDrawer';
import MenuItemRow from './App/Components/MenuItemRow';

//import Button from 'react-native-button';

const store = configureStore()

class App extends React.Component {
  render() {
    const MainNavigator = StackNavigator({
      // Home:
      // {
      //   screen: DrawerNavigator({
      //     menulist: {screen: MenuList},
      //     //Menu: {screen: MenuList},
      //     SideBar: {screen: NavigationDrawer}
      //   })
      // },
      Menu: {screen: MenuList},
      foodList: {screen: FoodListPerCategory},
      item:{screen: MenuItemRow},
      product: {screen: ProductScreen},
      Cart: {screen: CartAndCheckout},
      Order: {screen: SubmitScreen}

      //welcome: {screen: WelcomeScreen}
    });

    console.log('start to render tab')
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
