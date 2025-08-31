import { combineReducers } from 'redux';
import RegisterReducer from './RegisAuth';
import LoginReducer from './LoginAuth';

const rootReducer = combineReducers({
    auth: RegisterReducer,
});

export default rootReducer;
