import React , { Component } from 'react';
import { View , Text , Image, TouchableOpacity , Navigator } from 'react-native';
import styles from '../styles/main';
import _ from 'lodash';
import LoadingLayer from '../partials/LoadingLayer';
import PostShow from '../posts/PostShow'
import StatusBar from '../../components/partials/StatusBar'


export default class PostItem extends Component {

    constructor(props) {
        super(props);
        this.state = ({isLoading: true});
    }

    handleClick(post) {
        this.props.navigator.push({
            routeName: 'POST_SHOW',
            index: 1,
            post: post
        })
    }


    render() {
        {
            return (
                <View style={styles.postItem}>
                    <TouchableOpacity onPress={(event) => this.handleClick(this.props.post)}>
                        <Text style={styles.postRowTitle}>title : {_.capitalize(this.props.post.title)}</Text>
                        <Image source={{ uri : this.props.post.img_url}} style={{ height: 60}}/>
                        <Text>body: {this.props.post.body}</Text>
                    </TouchableOpacity>
                </View>

            );
        }
    }
}

//{ (this.props.navigator.route.index === 0) ? <StatusBar navigator={this.props.navigator}/> : null}