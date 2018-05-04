import React from "react";
import { View } from "react-native";

export class ImageRenderer extends React.Component {
  constructor(props) {
    super(props);
    this.id = 1;
  }
  shouldComponentUpdate(newProps) {
    return this.props.imageUrl !== newProps.imageUrl;
  }
  componentWillUpdate() {
    if (this.imageRef) {
      this.imageRef.style.opacity = 0;
    }
  }
  onLoad = () => {
      if (this.imageRef) {
      this.imageRef.style.opacity = 1;
    }
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          margin: 3,
          backgroundColor: "lightgrey"
        }}
      >
        <img
          ref={ref => {
            this.imageRef = ref;
          }}
          src={this.props.imageUrl}
          onLoad={this.onLoad}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover"
          }}
        />
      </View>
    );
  }
}
