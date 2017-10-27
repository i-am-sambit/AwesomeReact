
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import ReducerIndex from './Src/Model/ReduxModel/Reducer/ReducerIndex';

const store = createStore(ReducerIndex);
export default class AwesomeReact extends Component {

    render() {
        return(
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('AwesomeReact', () => AwesomeReact);
