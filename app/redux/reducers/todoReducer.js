import * as actionTypes from '../actions/types';

let todoReducer = function (todos = [], action) {
    switch (action.type) {
        case actionTypes.todo_INDEX :
            return Object.assign(
                action.todos.map((todo) => {
                    return {
                        id: todo.id,
                        title: todo.title,
                        body: todo.body,
                        code: todo.code,
                        img_url : todo.img_url,
                        user_id: todo.user_id,
                        closed: todo.closed,
                        created_at: todo.created_at,
                        updated_at: todo.updated_at
                    }
                }), ...todos);
        case actionTypes.todo_CREATE :
            return [{id: action.id, title: action.title, body: action.body}, ...todos];
        default :
            return todos;
    }

}

export default todoReducer;