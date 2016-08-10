import { applyMiddleware , compose , createStore } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../redux/reducers/index';
import { initialState }  from '../constants';



let finalCreateStore = compose(applyMiddleware(thunkMiddleware, logger())(createStore));

function configureStore(initialState = {}) {
    return finalCreateStore(rootReducer, initialState);
}

export default configureStore;