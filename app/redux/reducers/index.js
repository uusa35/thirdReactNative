import { combineReducers } from 'redux';
import postReducer from '../reducers/postReducer';
import propertiesReducer from '../reducers/propertiesReducer';
import tabReducer from '../reducers/tabReducer';
import navReducer from '../reducers/navReducer';

const rootReducer = combineReducers({
    posts : postReducer,
    properties : propertiesReducer,
    tabs : tabReducer
})

export default rootReducer;