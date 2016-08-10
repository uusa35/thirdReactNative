/**
 * Created by usamaahmed on 8/4/16.
 */
import React , { Component } from 'react';
import { View , Text , ListView } from 'react-native';

export default class TodoListView extends Component {

    constructor(props, content) {
        super(props, content);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state({
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        })
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text>{rowData}</Text>}
            />
        );
    }

}
