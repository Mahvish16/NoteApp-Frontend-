import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import './noteList.css';
import { noteList } from "../actions/noteList";
import { deleteNote } from "../actions/deleteNote";


function NoteList() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const notes = useSelector((state) => state.notesList.notes);
    const error = useSelector((state) => state.notesList.error);
    const token = useSelector((state) => state.login.access);

    useEffect(() => {
        if (token) {
            dispatch(noteList(token));
        }
    }, [dispatch, token]);
    const handleEditClick = (id) => {
        navigate(`/notes/edit/${id}`);
    };
    const handleDeleteClick = (id) => {
        if (window.confirm("Are you sure you want to delete this note?")) {
            dispatch(deleteNote(token, id));
        }
    };



    return (
        <div className="page-wrapper">
            <div className="note-list-container">
                <h2 className="note-list-title">Your Notes</h2>

                {error && <p className="error-text">Error: {error}</p>}

                {notes.length === 0 ? (
                    <p className="empty-message">No notes saved yet.</p>
                ) : (
                    <ul className="note-list">
                        {notes.map((note, index) => (
                            <li key={index} className="note-card">
                                <div className="note-content">
                                    <h3>{note.title}</h3>
                                    <p>{note.description}</p>
                                </div>
                                <div className="note-actions">
                                    <button className="edit-btn" onClick={() => handleEditClick(note.id)}>Edit</button>
                                    <button className="delete-btn" onClick={() => handleDeleteClick(note.id)}>Delete</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );

}

export default NoteList;
