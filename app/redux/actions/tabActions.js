import * as actionTypes from '../actions/types';

let tabActions = {

    selectTab: function (index,routeName,route) {
        return {
            type : actionTypes.TAB_SELECT,
            index,
            routeName,
            route
        }
    }
}

export default tabActions;