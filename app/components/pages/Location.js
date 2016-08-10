/**
 * Created by usamaahmed on 8/4/16.
 */
import React , { Component } from 'react';
import {View,Text,MapView,Image,} from 'react-native'
import styles from '../styles/main';

export default class Location extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Our Location</Text>
            <MapView
              style={{
                height: 600,
                width: 400,
              }}
              onRegionChange={() => {}}
              onRegionChangeComplete={() => {}}
              showsUserLocation={true}
            />
            </View>
        );
    }
}