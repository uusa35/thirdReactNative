/**
 * Created by usamaahmed on 8/1/16.
 */
import * as actions from './redux/actions/types';
export const rootURL = 'http://tickets.app/api/';
export const postRoute = 'http://tickets.app/api/post/';
export const initialState = {
    posts: [],
    properties: {
        counter: 0,
        isLoading: false,
    },
    tabs: {
        index: 0,
        route: 'home',
        routeName: 'Home'
    }
};
