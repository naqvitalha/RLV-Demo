import React from 'react';
import { Platform, View } from 'react-native';
import { Image } from './ImageWeb.js';

const isIOS = Platform.OS === 'ios';

export class ImageRenderer extends React.Component {
  shouldComponentUpdate(newProps) {
    return this.props.imageUrl !== newProps.imageUrl;
  }
  componentWillUpdate() {
    //On iOS while recycling till the new image is loaded the old one remains visible. This forcefully hides the old image.
    //It is then made visible onLoad
    //Will not be invoked on Android and Web
    if (isIOS && this.imageRef) {
      this.imageRef.setNativeProps({
        opacity: 0,
      });
    }
  }
  handleOnLoad = () => {
    if (isIOS && this.imageRef) {
      this.imageRef.setNativeProps({
        opacity: 1,
      });
    }
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          margin: 3,
        }}>
        <Image
          ref={ref => {
            this.imageRef = ref;
          }}
          style={{
            flex: 1,
          }}
          onLoad={this.handleOnLoad}
          defaultSource={{ uri: 'https://img1a.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png', scale: 0.2}}
          source={{ uri: this.props.imageUrl }}
        />
      </View>
    );
  }
}
