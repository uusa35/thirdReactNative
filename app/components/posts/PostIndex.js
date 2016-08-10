import React , { Component } from 'react';
import { Provider } from 'redux';
import { View , Text , ListView} from 'react-native';
import styles from '../styles/main';
import PostItem from '../posts/PostItem';
import * as actions from '../../redux/actions/types';


export default class PostIndex extends Component {


    constructor(props, content) {
        super(props, content);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = ({ dataSource : ds.cloneWithRows(this.props.posts)});
    }

    _renderPostRow(post) {
        return (<PostItem key={post.id} post={post} {...this.props}/>);
    }


    render() {
        return (
            <ListView style={styles.postListView} dataSource={this.state.dataSource} enableEmptySections={true}
                      renderRow={(post) => { return this._renderPostRow(post)}} {...this.props}/>

        );
    }
}
//
//
//{this.props.posts.map((post) => {
//    return <PostItem key={post.id} post={post} postAction={this.props.postActions.postFetch}/>
//}) }
//getInitialState: function () {
//
//}
//,
//
//render: function () {
//    return (
//        <ListView
//            dataSource={this.state.dataSource}
//            renderRow={(rowData) => <Text>{rowData}</Text>}
//        />
//    );
//}
//,