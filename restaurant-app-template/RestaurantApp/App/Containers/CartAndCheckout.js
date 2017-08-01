import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'
import CartRow from '../Components/CartRow'
import CartTotal from '../Components/CartTotal'
import RoundedButton from '../Components/RoundedButton'
import I18n from '../I18n/I18n.js'
import { Button, Icon } from 'react-native-elements';

// Styles
import styles from './Styles/CartAndCheckoutStyle'

class CartAndCheckout extends React.Component {

   constructor (props) {
     super(props)
     this.state = {}
   }

   static propTypes = {
     items: PropTypes.array,
   }

   setQty = (index,qty) => {
     console.log("I:"+index+" Qty:"+qty);
     console.log(this.props);
     this.props.updateCart(index,qty);
   }

  render () {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        {(this.props.items||[]).map((itemElement,i) => (
          <CartRow key={itemElement.id} action={this.setQty} index={i} element={itemElement} />
        ))}
        <CartTotal items={this.props.items||[]} />
        <Button
            backgroundColor="rgba(0,0,0,0)"
            color="rgba(0, 122, 255, 1)"
            title={I18n.t('continueToCheckout')}
            onPress={() => navigate('CardForm')} />
      </ScrollView>
    )
  }
}

CartAndCheckout.propTypes = {
  updateCart: PropTypes.func,
}

const mapStateToProps = (state) => {
  return {
    items: state.cart.items,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCart: (index,qty) => dispatch(Actions.updateCart(index,qty)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartAndCheckout)
