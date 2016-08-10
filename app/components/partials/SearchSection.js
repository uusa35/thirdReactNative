/**
 * Created by usamaahmed on 8/1/16.
 */
import React , { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
} from 'react-native'
import styles from '../styles/main';

export default class SearchSection extends Component {

    constructor(props) {
        super(props);
        this.state = {isSearching: false, searchInput: null}
    }

    handleSearchInputChange(e) {

        this.setState({searchInput: e});

    }

    searchPressed() {

        this.props.searchPressed(this.state.searchInput);
    }

    render() {
        return (
            <View style={this.props.searchSection}>
<TextInput
  style={{
    height: 30, 
    width: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.5)",
  }}
  placeholder={'Type here'}
  placeholderTextColor={"rgba(198,198,204,1)"}
  onChangeText={(text) => {this.setState({text})}}
  onSubmitEditing={() => {this.setState({text: ''})}}
  value={(this.state && this.state.text) || ''}
/>
                <TextInput placeholder="search items here ..." style={styles.searchInput}
                           value={this.state.searchInput} onChangeText={this.handleSearchInputChange.bind(this)}/>

                <TouchableHighlight onPress={this.searchPressed.bind(this)} style={{ marginTop: 10}}
                                    style={styles.searchBtn}>
                    <Text>search</Text>
                </TouchableHighlight>

            </View>
        );
    }
}