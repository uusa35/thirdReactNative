import * as actionTypes from '../actions/types';

let propertiesReducer = function (properties = {isLoading: false, counter: 0}, action) {
    switch (action.type) {
        case actionTypes.COUNTER_INCREASE :
            return Object.assign({}, {
                counter: action.counter + 1
            }, ...properties);
        case actionTypes.ENABLE_LOADING :
            return Object.assign({}, {
                isLoading: true
            }, ...properties);
        case actionTypes.DISABLE_LOADING :
            return Object.assign({}, {
                isLoading: false
            }, ...properties);

        default :
            return properties;
    }

}

export default propertiesReducer;