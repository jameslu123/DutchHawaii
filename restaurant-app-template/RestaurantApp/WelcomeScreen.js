import React, { Component } from 'react';
import { View, Text } from 'react-native';

class WelcomeScreen extends Component {
  static navigationOptions = {
      title: 'WelcomeScreen',
    };

  render() {
    return (
      <View>
        <Text>Welcome</Text>
        <Text>WelCome</Text>
        <Text>WelCome</Text>
      </View>
    );
  }

}
export default WelcomeScreen;
