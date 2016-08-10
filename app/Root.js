import React , { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../app/redux/store';
import App from '../app/App';
import { initialState }  from '../app/constants';



let store = configureStore(initialState);

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}