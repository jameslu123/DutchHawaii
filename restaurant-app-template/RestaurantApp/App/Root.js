import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import DebugSettings from './Config/DebugSettings'
import NavigationRouter from './Navigation/NavigationRouter'

// Styles
import styles from './Containers/Styles/RootStyle'

export default class Root extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  componentWillMount () {
    const { dispatch } = this.props.store
  }

  renderApp () {
    console.disableYellowBox = !DebugSettings.yellowBox
    return (
      <Provider store={this.props.store}>
        <View style={styles.applicationView}>
          <StatusBar
            barStyle='light-content'
          />
          <NavigationRouter />
          {/*<NavigationRouter />*/}
        </View>
      </Provider>
    )
  }

  render () {
    return this.renderApp()
  }
}
