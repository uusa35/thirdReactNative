/**
 * Created by usamaahmed on 8/9/16.
 */
import React , { Component } from 'react';
import { View , Text } from 'react-native';
import styles from '../styles/main'
export default class Menu extends Component {

    constructor(props, content) {
        super(props, content);
        console.log(this.props);
        this.state = ({ viewMenu : true });
    }

    home() {
        this.props.tabActions.selectTab(0, 'Home', 'home');
    }

    about() {
        this.props.tabActions.selectTab(1, 'Aboutus', 'aboutus');

    }

    contactus() {
        //this.props.menuActions.close();
        this.props.tabActions.selectTab(2, 'Contactus', 'contactus');
    }

    location() {
        //this.props.menuActions.close();
        this.props.tabActions.selectTab(3, 'Location', 'location');
    }

    render() {
        return (
                <View style={styles.menuSection}>
                    <Text style={styles.menuItem}>Menu</Text>
                    <Text style={styles.menuItem} onPress={this.home.bind(this)}>الرئيسية</Text>
                    <Text style={styles.menuItem} onPress={this.about.bind(this)}>معلومات عنا</Text>
                    <Text style={styles.menuItem} onPress={this.contactus.bind(this)}>اتصل بنا</Text>
                    <Text style={styles.menuItem} onPress={this.location.bind(this)}>موقعنا</Text>
                </View>
        );
    }
}