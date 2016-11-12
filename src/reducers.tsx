import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import faq from './modules/faq/reducers';
import section from './modules/sections/reducers';

// turn object of different reducers into single reducer function.
const rootReducer = combineReducers({ faq, section, routing: routerReducer });

export default rootReducer;