
/**
 * Created by usamaahmed on 8/4/16.
 */
import React , { Component } from 'react';
import {View,Text,MapView,Image} from 'react-native'
import styles from '../styles/main';

export default class Aboutus extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ margin : 100 }}>About Us</Text>
                <Image source={{ uri : 'http://placehold.it/300x300?color=green'}} style={{ height: 60}}/>
            </View>
        );
    }
}