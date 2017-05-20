import Expo from 'expo'
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';
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
import WelcomeScreen from './WelcomeScreen'
import HomeScreen from './HomeScreen'

//import Button from 'react-native-button';

const store = configureStore()

class App extends React.Component {
  render() {
    const MainNavigator = StackNavigator({
      //Home: {screen: MenuList},
      // {
      //   screen: DrawerNavigator({
      //     Menu: {screen : StackNavigator({
      //       menulist: {screen: MenuList},
      //       foodList: {screen: FoodListPerCategory},
      //       product: {screen: ProductScreen}
      //     },{
      //       initialRoutName: MenuList
      //     })},
      //     SideBar: {screen: NavigationDrawer}
      //   })
      // },
      // Checkout: {
      //   screen: StackNavigator({
      //     Cart: {screen: CartAndCheckout},
      //     Order: {screen: SubmitScreen}
      //   })
      // }
      home: {screen: MenuList},
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
