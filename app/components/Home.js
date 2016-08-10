import React , { Component } from 'react';
import { View , Text , TouchableHighlight , ScrollView , Image , Navigator } from 'react-native';
import styles from '../components/styles/main';
import StatusBar from '../components/partials/StatusBar';
import PostIndex from '../components/posts/PostIndex';
import SearchSection from '../components/partials/SearchSection';
import LoadingLayer from '../components/partials/LoadingLayer';

export default class Home extends Component {

    constructor(props, content) {
        super(props, content);
    }

    render() {
        return (
            <View style={{ backgroundColor : 'white'}}>
                {
                    (this.props.properties.isLoading) ?
                        <LoadingLayer loadStyle={styles.imageLoading}/> :
                        <PostIndex {...this.props}/>
                }
            </View>
        );
    }
}

