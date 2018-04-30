import React from 'react';
import { Text, TouchableOpacity } from 'react-native-web';

export class ViewSelector extends React.Component {
  constructor(props) {
    super(props);
    this.currentView = 0;
  } 
  shouldComponentUpdate(newProps) {
    return this.props.viewType !== newProps.viewType;
  }
  onPressHandler = () => {
    this.currentView = (this.currentView + 1) % 4;
    this.props.viewChange(this.currentView);
  };
  render() {
    return (
      <TouchableOpacity
        style={{
          height: 40,
          backgroundColor: 'lightgrey',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
        onPress={this.onPressHandler}>
        <Text>Change View Type: {this.props.viewType}</Text>
      </TouchableOpacity>
    );
  }
}
