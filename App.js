/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import HomerController from './Src/Controllers/HomeController';

export default class App extends Component<{}> {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Router>
          <Scene
              key="root"
              hideNavBar="false"
          >
            <Scene
                key="HomerController"
                component={HomerController}
                panHandlers={ null }
                initial
            />

          </Scene>
        </Router>
    );
  }
}
