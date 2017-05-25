
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import stripe from 'tipsi-stripe'
//import { Button, Icon } from 'react-native-elements';
import Button from '../Components/Button'
import testID from '../Utils/testID'

// stripe.init({
//   publishable_key: <your_stripe_publishable_key>,
// });
// const theme = {
//   primaryBackgroundColor: <hex_color>,
//   secondaryBackgroundColor: <hex_color>,
//   primaryForegroundColor: <hex_color>,
//   secondaryForegroundColor: <hex_color>,
//   accentColor: <hex_color>,
//   errorColor: <hex_color>
// };

export default class CardFormScreen extends Component {
  state = {
    loading: false,
    token: null,
  }

  handleCardPayPress = async () => {
    try {
      this.setState({
        loading: true,
        token: null,
      })
      const token = await stripe.paymentRequestWithCardForm({
        smsAutofillDisabled: true, // iOS only
        requiredBillingAddressFields: 'full',
      })

      console.log('Result:', token) // eslint-disable-line no-console
      this.setState({
        loading: false,
        token,
      })
    } catch (error) {
      console.log('Error:', error) // eslint-disable-line no-console
      this.setState({
        loading: false,
      })
    }
  }

  render() {
    const { loading, token } = this.state

    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Card Form Example
        </Text>
        <Text style={styles.instruction}>
          Click button to show Card Form dialog.
        </Text>
        <Button
          text="Enter you card and pay"
          loading={loading}
          onPress={this.handleCardPayPress}
          {...testID('cardFormButton')}
        />
        <View
          style={styles.token}
          {...testID('cardFormToken')}>
          {token &&
            <Text style={styles.instruction}>
              Token: {token.tokenId}
            </Text>
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instruction: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  token: {
    height: 20,
  },
})
