import React from 'react';
import { Text, View , Dimensions} from 'react-native';
import Expo, { BarCodeScanner, Permissions } from 'expo';
import { connect } from 'react-redux'


class ScannerScreen extends React.Component {
  state = {
    hasCameraPermission: null,
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
  }

  render() {
    const { hasCameraPermission } = this.state;
    const { navigate } = this.props.navigation;
    console.log('print'+ hasCameraPermission);

    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{flex: 1, width: Dimensions.get("window")}}>
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
        </View>
      );
    }
  }

  _handleBarCodeRead = (data) => {
    console.log(JSON.stringify(data));
    navigate('Menu')
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScannerScreen)
