import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image, Animated, View } from 'react-native'
import { Images } from '../Themes'
import styles from './Styles/ProgressiveImageStyle'


export default class ProgressiveImage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      thumbnailOpacity: new Animated.Value(0)
    }
  }

  static propTypes = {
    thumbnail: PropTypes.string,
    source: PropTypes.string,
    style: PropTypes.number
  }

  // Defaults for props
  static defaultProps = {
     style:styles.progressiveImage
  }

  mainImageLoad = () => {
    window.requestAnimationFrame((time) => {
      Animated.timing(this.state.thumbnailOpacity, {
        toValue: 0,
        duration: 250
      }).start()
    })
  }

  onThumbnailLoad = () => {
    Animated.timing(this.state.thumbnailOpacity, {
      toValue: 1,
      duration: 250
    }).start()
  }

  handleImage () {
    if (this.props.source || this.props.thumbnail) {
      return (
        <View>
          <Animated.Image
            resizeMode={'cover'}
            style={[{position: 'absolute'}, this.props.style]}
            source={{uri: this.props.source}}
            onLoad={this.mainImageLoad} />
          <Animated.Image
            resizeMode={'cover'}
            style={[{opacity: this.state.thumbnailOpacity}, this.props.style]}
            source={{uri: this.props.thumbnail}}
            onLoad={this.onThumbnailLoad} />
        </View>
      )
    } else {
      return (
        <Image style={this.props.style} resizeMode={'contain'} />
      )
    }
  }

  render () {
    return (
      <View
        width={this.props.style.width}
        height={this.props.style.height}
        backgroundColor={'#CCC'}
      >
      {this.handleImage()}
      </View>
    )
  }
}
