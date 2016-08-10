import * as actionTypes from '../actions/types';

let postReducer = function (posts = [], action) {
    switch (action.type) {
        case actionTypes.POST_INDEX :
            return Object.assign(
                action.posts.map((post) => {
                    return {
                        id: post.id,
                        title: post.title,
                        body: post.body,
                        code: post.code,
                        img_url: post.img_url,
                        user_id: post.user_id,
                        closed: post.closed,
                        created_at: post.created_at,
                        updated_at: post.updated_at
                    }
                }), ...posts);

        case actionTypes.POST_CREATE :
            return [{id: action.id, title: action.title, body: action.body}, ...posts];

        case actionTypes.POST_SHOW :
            return Object.assign({}, [action.post]);
        default :
            return posts;
    }

}

export default postReducer;