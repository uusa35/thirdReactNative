import React , { Component } from 'react';
import { View , Text , Image } from 'react-native';
import styles from '../styles/main';
import _ from 'lodash'

export default class PostShow extends Component {

    constructor(props, content) {
        super(props, content);
    }

    render() {
        return (
            <View style={styles.postShow} key={this.props.post.id}>
                <Text style={styles.postRowTitle}>title : {_.capitalize(this.props.post.title)}</Text>
                <Image source={{ uri : this.props.post.img_url}} style={{ height: 60}}/>
                <Text>body: {this.props.post.body}</Text>
            </View>
        );
    }

}