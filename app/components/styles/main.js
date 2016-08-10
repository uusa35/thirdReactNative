/**
 * Created by usamaahmed on 8/1/16.
 */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: 'white'
    },
    postsScene: {
        flex: 1,
    },
    searchSection: {
        marginTop: 10,
        backgroundColor: 'lightgrey',
        height: 30,
        flexDirection: 'row',
        padding: 5,
        margin: 1
    },
    searchInput: {
        flex: 0.7,
        borderColor: 'darkgrey'
    },
    searchBtn: {
        flex: 0.3,
        borderWidth: 1
    },
    loadingSnippet: {
        backgroundColor: 'white',
        alignItems : 'center',
        marginBottom : 600,
        marginTop : 300
    },
    statusBar: {
        marginTop: 20,
        backgroundColor: 'pink',
        height: 80,
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
    },
    postIndex: {
        flex: 1,
        padding: 10,
        backgroundColor : 'white'
    },
    postListView: {
        flex: 1,
        height: 750,
        backgroundColor: 'white'
    },
    postItem: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        margin: 1,
        borderBottomColor: 'lightgrey',
        borderBottomWidth : 1,
    },
    postRowTitle: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'black'
    },
    postMoreIcon: {
        height: 30,
        width: 30,
        color: 'green'
    },
    postShow : {
        flex : 1,
        flexDirection : 'column',
        height : 600,
        backgroundColor : 'white',
        padding : 1
    },
    menuSection: {
        flex: 1,
        marginTop : 20,
        flexDirection: 'column',
        alignSelf: 'flex-end',
        width: 250,
        marginBottom: 100,
        backgroundColor: 'lightgrey'
    },
    menuItem: {
        backgroundColor: 'lightgrey',
        color: 'white',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        margin: 10,
        alignItems: 'flex-end',

    }

});

export default styles;