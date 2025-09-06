import { combineReducers } from 'redux';
import RegisterReducer from './RegisAuth';
import LoginReducer from './LoginAuth';
import notesReducer from './add';
import noteListReducer from './noteList';
import editNoteReducer from './editNotes';
import deleteNoteReducer from './delete';

const rootReducer = combineReducers({
    register: RegisterReducer,
    login: LoginReducer,
    notesAdd: notesReducer,
    notesList: noteListReducer,
    editNote: editNoteReducer,
    deleteNote: deleteNoteReducer
});

export default rootReducer;
