import React , { Component } from 'react';
import { Navigator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux/native';
import {
    actions as routerActions,
    NavBar,
    Route,
    Router,
    Schema,
    TabBar,
    TabRoute
} from 'react-native-router-redux';
import todoActions from '../app/redux/actions/todoActions'
import postActions from '../app/redux/actions/postActions'
import propertiesActions from '../app/redux/actions/propertiesActions'
import tabActions from '../app/redux/actions/tabActions'
import navActions from '../app/redux/actions/navActions'
import ViewContainer from '../app/components/ViewContainer';
import SideMenu from 'react-native-side-menu';
import Menu from '../app/components/partials/Menu'


class App extends Component {

    constructor(props, content) {
        super(props, content);
    }

    render() {
        var menu = <Menu {...this.props}/>;
        return (
            <SideMenu menu={menu}
                      menuPosition="right"
                      touchToClose="true"
                {...this.props}
            >
                <ViewContainer {...this.props}/>
            </SideMenu>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        todoActions: bindActionCreators(todoActions, dispatch),
        postActions: bindActionCreators(postActions, dispatch),
        propertiesActions: bindActionCreators(propertiesActions, dispatch),
        tabActions: bindActionCreators(tabActions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);