import { combineReducer } from 'react-redux';
import { combineReducers } from 'redux';
import productosReducer from './productosReducer';

export default combineReducers({
    productos: productosReducer
})