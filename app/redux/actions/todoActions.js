import * as actionTypes from '../actions/types';

let todoActions = {
    todoFetch: function (url = '', method = 'GET') {
        return (dispatch) => {
            return fetch(url, {method: method})
                .then(response => response.json())
                .then(json => dispatch(todoActions.todoIndex(json)));
        }
    },
    todoIndex: function (todos) {
        return {
            type: actionTypes.TODO_INDEX,
            todos
        }
    },
}

export default todoActions;