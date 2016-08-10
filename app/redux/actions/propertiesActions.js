import * as actionTypes from '../actions/types';

let propertiesActions = {

    increaseCount(currentCounter) {
        return {
            type: actionTypes.COUNTER_INCREASE,
            counter: currentCounter
        }

    },
    enableLoadingView: function () {
        return {
            type: actionTypes.ENABLE_LOADING,
            isLoading: true

        }
    },
    disableLoadingView: function () {
        return {
            type: actionTypes.DISABLE_LOADING,
            isLoading: false,
        }
    },
}

export default propertiesActions;