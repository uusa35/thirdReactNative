/**
 * Created by usamaahmed on 8/2/16.
 */
import React , { Component} from 'react';
import styles from '../../components/styles/main';
import {ActivityIndicator , Text , View} from 'react-native'

export default class LoadingLayer extends Component {
    constructor(props, content) {
        super(props, content);
        this.state = ({ animating: true});
    }

    componentWillUnMount() {
        this.setState({animating: false});
    }

    render() {
        return (
            <View style={styles.loadingSnippet}>
                <ActivityIndicator
                    animating={this.state.animating}
                    style={styles.loadingProgressBar}
                    size="large"
                />
                <Text style={{ justifyContent : 'center'}}>Loading ...</Text>
            </View>

        );
    }
}

//<Image style={this.props.loadStyle}
//       source={require('../../assets/images/file.gif')}/>