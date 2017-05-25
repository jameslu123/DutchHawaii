import React, { Component } from 'react';
import { View, Text, Platform} from 'react-native';
import { Button } from 'react-native-elements';


class HomeScreen extends Component {
  static navigationOptions = {
      title: 'Home',
      header: ({ navigate }) => {
      return {
        right: (
          <Button
            title="WelcomeScreen"
            onPress={() => navigate('welcome')}
            backgroundColor="rgba(0,0,0,0)"
            color="rgba(0, 122, 255, 1)"
          />
        ),
        style: {
          marginTop: Platform.OS === 'android' ? 24 : 0
        }
      };
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
      </View>
    );
  }

}

export default HomeScreen;
