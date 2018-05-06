import React from "react";
import { View } from "react-native";

export class ImageRenderer extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(newProps) {
    return this.props.imageUrl !== newProps.imageUrl;
  }
  onLoad = () => {
      if (this.imageRef) {
      this.imageRef.style.opacity = 1;
    }
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
          onLoad={this.onLoad}
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
     objectFit: "cover",
     opacity: 0
  },
  container: {
     flex: 1,
     margin: 3,
     backgroundColor: "lightgrey"
  }
};
