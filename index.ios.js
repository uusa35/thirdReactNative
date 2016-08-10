
import React, { Component } from 'react';
import Root from './app/Root';
import { AppRegistry } from 'react-native'

class thirdReactNative extends Component {
  render() {
    return (
        <Root />
    );
  }
}


AppRegistry.registerComponent('thirdReactNative', () => thirdReactNative);