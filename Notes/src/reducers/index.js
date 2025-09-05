import { combineReducers } from 'redux';
import RegisterReducer from './RegisAuth';
import LoginReducer from './LoginAuth';
import notesReducer from './add';

const rootReducer = combineReducers({
    register: RegisterReducer,
    login: LoginReducer,
    add: notesReducer
});

export default rootReducer;
