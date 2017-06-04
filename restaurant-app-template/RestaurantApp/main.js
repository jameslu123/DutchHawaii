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
import CardFormScreen from './App/Containers/CardFormScreen';
import NavigationDrawer from './App/Navigation/NavigationDrawer';
import MenuItemRow from './App/Components/MenuItemRow';
import ScannerScreen from './App/Containers/ScannerScreen';
import WelcomeScreen from './WelcomeScreen';


//import Button from 'react-native-button';

const store = configureStore()

class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      //Welcome: {screen: WelcomeScreen},
      Scanner: {screen: ScannerScreen},
      Main: {screen: TabNavigator({
      // Home:
      // {
      //   screen: DrawerNavigator({
      //     menulist: {screen: MenuList},
      //     //Menu: {screen: MenuList},
      //     SideBar: {screen: NavigationDrawer}
      //   })
      // },

          Home: {
            screen: StackNavigator({
              Menu: {screen: MenuList},
              foodList: {screen: FoodListPerCategory},
              //item:{screen: MenuItemRow},
              product: {screen: ProductScreen}
            })
          },
          Profile: {screen: Contact},
          Checkout: {
            screen: StackNavigator({
              Cart: {screen: CartAndCheckout},
              CardForm:{screen: CardFormScreen},
              Order: {screen: SubmitScreen}
            })
          }
          //welcome: {screen: WelcomeScreen}
        })
      }
    // },{
    //   navigationOptions:{
    //     tabBar: {visible: false }
    //   },
    //   lazyLoad: true
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
