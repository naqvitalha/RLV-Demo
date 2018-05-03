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
  componentDidMount() {
    let reqId = ++this.id;
    requestIdleCallback(() => {
      if (reqId === this.id && this.imageRef) {
        this.imageRef.src = null;
        this.imageRef.style.opacity = 1;
        this.imageRef.src = this.props.imageUrl;
      }
    });
  }
  componentDidUpdate() {
    let reqId = ++this.id;
    requestIdleCallback(() => {
      if (reqId === this.id && this.imageRef) {
        this.imageRef.src = null;
        this.imageRef.style.opacity = 1;
        this.imageRef.src = this.props.imageUrl;
      }
    });
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
