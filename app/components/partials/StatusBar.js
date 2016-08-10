/**
 * Created by usamaahmed on 8/1/16.
 */
import React , { Component } from 'react';
import { TouchableHighlight , Text  } from 'react-native';
import NavigationBar from 'react-native-navbar';
import styles from '../styles/main';

export default class StatusBar extends Component {

    handleClick() {
        console.log('back');
        this.props.navigator.pop();
    }

    doForward() {
        console.log('forward clicked');
    }

    doBackward() {
        console.log('backword clicked');
    }
    render() {
        var navigator = this.props.navigator;
        var leftButtonConfig = {
            title: 'Back',
            handler: function onNext() {
                navigator.pop();
            }
        }
        return (
            <NavigationBar
                title={{ title: 'article Id : '+ this.props.post.id, tintColor: 'black' }}
                leftButton={leftButtonConfig}
                statusBar={{ tintColor: "white" }}
            />

        );
    }
}

//<TouchableHighlight style={styles.statusBar} onPress={this.handleClick.bind(this)}>
//    <Text>..Back..</Text>
//</TouchableHighlight>