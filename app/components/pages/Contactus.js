/**
 * Created by usamaahmed on 8/4/16.
 */
import React , { Component } from 'react';
import {View,Text,MapView,Image,} from 'react-native'
import styles from '../styles/main';

export default class Aboutus extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ marginTop: 230}}>Contactus</Text>
            </View>
        );
    }
}