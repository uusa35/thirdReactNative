import * as actionTypes from '../actions/types';
import { postRoute } from '../../constants';
import propertiesActions from '../../redux/actions/propertiesActions';

let postActions = {
    postIndexFetch: function () {
        return (dispatch) => {
            return fetch(postRoute, {method: 'GET'})
                .then(response => response.json())
                .then((json) => {
                    dispatch(postActions.postIndex(json));
                })
                .catch(error => console.log(error));
        }
    },
    postShowFetch: function (params = 0) {
        var params = (params === 0) ? '' : params;
        console.debug(postRoute + params);
        return (dispatch) => {
            return fetch(postRoute + params, {method: 'GET'})
                .then(response => response.json())
                .then((json) => {
                    dispatch(postActions.postShow(json));
                })
                .catch(error => console.log(error));
        }
    },
    postIndex: function (posts) {
        return {
            type: actionTypes.POST_INDEX,
            posts
        }
    },
    postShow : function (post) {
        return {
            type : actionTypes.POST_SHOW,
            post
        }
    },

    postShow: function (post) {
        return {
            type: actionTypes.POST_SHOW,
            post
        }
    }
}

export default postActions;