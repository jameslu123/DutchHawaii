import React from 'react';
import { Text, View , Dimensions, StyleSheet} from 'react-native';
import Expo, { Constants, BarCodeScanner, Permissions } from 'expo';
import { connect } from 'react-redux'


export default class ScannerScreen extends React.Component {
  state = {
    hasCameraPermission: null,
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={styles.container}>
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={{height: 200, width: 200}}
          />
        </View>
      );
    }
  }

  _handleBarCodeRead = (data) => {
    alert(JSON.stringify(data));
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
