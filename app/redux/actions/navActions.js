import * as actionTypes from '../actions/types';

let navActions = {

    selectNavPostIndex: function (index, routeName, post = '') {
        return {
            type: actionTypes.NAV_SELECT_HOME,
            index,
            routeName,
            post
        }
    },

    selectNavPostShow: function (index, routeName, post) {
        return {
            type: actionTypes.NAV_SELECT_POST_SHOW,
            index: index,
            routeName: actionTypes.POST_SHOW,
            post
        }
    },

    updateNav: function (index, routeName) {
        return {
            type: actionTypes.NAV_UPDATE,
            index: index,
            routeName: routeName,
            post: ''
        }
    }
}

export default navActions;