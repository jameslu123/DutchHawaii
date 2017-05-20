import Expo from 'expo'
import './App/Config/ReactotronConfig'
import configureStore from './App/Store/Store'
import React, { PropTypes } from 'react'
import { View, StatusBar, Text} from 'react-native'
import Root from './App/Root'

import { Provider } from 'react-redux'
import DebugSettings from './App/Config/DebugSettings'
//import NavigationRouter from './App/Navigation/NavigationRouter'

// Styles
import styles from './App/Containers/Styles/RootStyle'

// Handling store here to avoid hot-reloading issues
const store = configureStore()

class App extends React.Component {
  render () {
    console.log('start to render app')
    return <Root {...this.props} store={store} />
  }

  // render () {
  //   console.log('start to main')
  //   return (
  //     <View style={styles.container}>
  //       <Text>Open up main.js to start working on your app!</Text>
  //     </View>
  //   );
  //   //return this.renderApp()
  // }
}

// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

//AppRegistry.registerComponent('RestaurantApp', () => RNBase)
//AppRegistry.registerComponent('main', () => RNBase);
Expo.registerRootComponent(App);
