import * as actionTypes from '../actions/types';
import postActions from '../actions/postActions';
import navActions from '../actions/navActions';

let navReducer = function (navigator = {index: 0, routeAction: 'HOME', routeName: 'home', post: ''}, action) {
    switch (action.type) {
        case actionTypes.NAV_SELECT_HOME :
            return Object.assign({}, {
                index: action.index,
                routeName: action.routeName,
                routeAction: action.routeAction,
                post: ''
            });

        case actionTypes.NAV_SELECT_POST_SHOW :
            return (dispatch) => {
                dispatch(postActions.postShow(action.post))
                return dispatch(navActions.updateNav(action.index, action.routeName,action.post));
            }

        case actionTypes.NAV_UPDATE :
            return Object.assign({}, {
                index: action.index,
                routeName: action.routeName,
                post: post
            });

        default :
            return navigator;
    }
}

export default navReducer;