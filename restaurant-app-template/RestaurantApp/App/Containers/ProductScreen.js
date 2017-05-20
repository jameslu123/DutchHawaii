
import React, { PropTypes } from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { Colors, Metrics} from '../Themes/'
import InfoProductRow from '../Components/InfoProductRow'
import AddToCartRow from '../Components/AddToCartRow'
import I18n from '../I18n/I18n.js'
import Config from '../Config/App'


// Styles
import styles from './Styles/ProductScreen'

class ProductScreen extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  render() {
  return (
    <ParallaxScrollView
                    backgroundColor={Colors.background}
                    contentBackgroundColor={Colors.background}
                    parallaxHeaderHeight={350}
                    renderBackground={() => (
                        <View style={{marginTop: Metrics.navBarHeight}}>
                            <Image style={styles.thePhoto} source={{uri: this.props.data.photo}}  />
                        </View>
                    )}
                    renderForeground={() => (
                           <View style={styles.infoPanel}>
                                <View style={styles.infoHolder}>
                                    <Text style={styles.nameInfo}>{this.props.data.name}</Text>

                                </View>
                            </View>
                          )}>
                    <View>
                      <Text style={styles.descriptionInfo}>{this.props.data.description }</Text>
                      {Object.keys(this.props.data.info||{}).map((section,i) => (
                        <InfoProductRow  key={i} name={section} value={this.props.data.info[section]} />
                      ))}
                      <Text style={styles.headerLabel} >{I18n.t('variants')}</Text>
                      {(this.props.data.prices||[]).map((section,i) => (
                        <AddToCartRow key={i} data={section} productName={this.props.data.name} value={Config.priceToPriceWithCurrency(section.price_value)} />
                      ))}
                    </View>
                </ParallaxScrollView>
  );
}


}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen)
