import React from 'react';
import { Platform, View } from 'react-native';
import { Image } from './ImageWeb.js';


export class ImageRenderer extends React.Component {
  shouldComponentUpdate(newProps) {
    return this.props.imageUrl !== newProps.imageUrl;
  }

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
          defaultSource={{ uri: 'https://img1a.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png', scale: 0.2}}
          source={{ uri: this.props.imageUrl }}
        />
      </View>
    );
  }
}
