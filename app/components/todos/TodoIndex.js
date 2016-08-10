import React , { Component } from 'react';
import { View , Text } from 'react-native';
import TodoListView from '../todos/TodoListView';

export default class TodoIndex extends Component {

    constructor(props, content) {
        super(props, content);
    }

    render() {
        return (
            <TodoListView/>
        );
    }

}