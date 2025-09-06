import { combineReducers } from 'redux';
import RegisterReducer from './RegisAuth';
import LoginReducer from './LoginAuth';
import notesReducer from './add';
import noteListReducer from './noteList';

const rootReducer = combineReducers({
    register: RegisterReducer,
    login: LoginReducer,
    notesAdd: notesReducer,
    notesList: noteListReducer
});

export default rootReducer;
