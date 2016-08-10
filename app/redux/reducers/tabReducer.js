import * as actionTypes from '../actions/types';

let tabReducer = function (tabs = {index: 0, route: 'home', routeName: 'HOME'}, action) {
    switch (action.type) {
        case actionTypes.TAB_SELECT :
            return Object.assign({}, {
                index: action.index,
                routeName: action.routeName,
                route: action.route
            });

        default :
            return tabs;
    }
}

export default tabReducer;