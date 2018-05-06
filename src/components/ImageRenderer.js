import React from "react";
import { View } from "react-native";

export class ImageRenderer extends React.Component {
  shouldComponentUpdate(newProps) {
    return this.props.imageUrl !== newProps.imageUrl;
  }
  render() {
    return (
        <img
          ref={ref => {
            this.imageRef = ref;
          }}
          src={this.props.imageUrl}
          style={styles.image}
        />
    );
  }
}
const styles = {
  image: {
     height: "100%",
     width: "100%",
     objectFit: "cover"
  },
  container: {
     flex: 1,
     margin: 3,
     backgroundColor: "lightgrey"
  }
};
