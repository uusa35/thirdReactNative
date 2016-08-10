import React , { Component } from 'react';
import { Navigator , View } from 'react-native';
import * as actions from '../../app/redux/actions/types';
import styles from '../components/styles/main'
import Home from './Home';
import PostShow from '../components/posts/PostShow';
import StatusBar from '../components/partials/StatusBar';

export default class MyNav extends Component {

    constructor(props, content) {
        super(props, content);
    }

    _renderScene(route, navigator) {

        var navigator = {navigator};
        switch (route.routeName) {
            case 'Home' :
                return <Home {...this.props} {...navigator}/>
            case 'POST_SHOW' :
                return <View><StatusBar {...navigator} post={route.post}/><PostShow post={route.post} {...this.props} {...navigator}/></View>;

            default :
                return <Home {...this.props} {...navigator}/>
        }

    }

    render() {
        return (
            <Navigator
                initialRoute={{ routeName : 'Home', index : 0}}
                renderScene={this._renderScene.bind(this)}
                configureScene={(route, routeStack) =>Navigator.SceneConfigs.FloatFromBottom}
            />
        );
    }

}