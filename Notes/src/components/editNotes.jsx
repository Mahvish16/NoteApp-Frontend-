import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editNote } from "../actions/editNotes";
import { noteList } from "../actions/noteList";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import './add.css';

function Edit() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = useSelector((state) => state.login.access);
    const notes = useSelector((state) => state.notesList.notes);
    const loading = useSelector((state) => state.notesList.loading);
    const error = useSelector((state) => state.notesList.error);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (token && (!notes || notes.length === 0)) {
            dispatch(noteList(token));
        }

        if (id && notes?.length) {
            const note = notes.find(n => n.id.toString() === id);
            if (note) {
                setTitle(note.title);
                setDescription(note.description);
            }
        }
    }, [dispatch, token, id, notes]);


    if (!token) {
        return <div>Please log in to edit notes.</div>;
    }

    if (loading) {
        return <div>Loading note...</div>;
    }

    if (!title && !description && !loading) {
        return <div>Note not found.</div>;
    }

    const handleEditNote = (e) => {
        e.preventDefault();

        if (!title || !description) {
            alert("Both title and description are required.");
            return;
        }

        const updatedNoteData = { title, description };

        dispatch(editNote(token, id, updatedNoteData))
            .then(() => {
                alert("Note updated successfully!");
                navigate("/NoteList");
            })
            .catch(() => {
                alert("Failed to update note.");
            });
    };

    return (
        <>
            <Navbar />
            <div className="full-page-note">
                <form onSubmit={handleEditNote} className="note-form">
                    <h2>Edit Your Note</h2>
                    <input
                        type="text"
                        placeholder="Enter note title..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Enter note description..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    <button type="submit">Update Note</button>
                </form>
            </div>
        </>
    );
}

export default Edit;
