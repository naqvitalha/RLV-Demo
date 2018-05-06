import React from "react";
import { View } from "react-native";

export class ImageRenderer extends React.Component {
  shouldComponentUpdate(newProps) {
    const isChanged = this.props.imageUrl !== newProps.imageUrl;
    if(this.imageRef && isChanged) {
      this.imageRef.src = undefined;
    }
    return isChanged;
  }
  render() {
    return (
      <View
        style={styles.container}
      >
        <img
          ref={ref => {
            this.imageRef = ref;
          }}
          src={this.props.imageUrl}
          style={styles.image}
        />
      </View>
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
