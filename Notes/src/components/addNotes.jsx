import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../actions/addApi";
import Navbar from "./Navbar";
import './add.css';

function Add() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const token = useSelector((state) => state.login.access);


    if (!token) {
        alert("User is not logged in.");
        return;
    }


    const dispatch = useDispatch();

    const handleAddNote = (e) => {
        e.preventDefault();
        if (!title || !description) {
            alert("Both title and description are required.");
            return;
        }
        else {
            alert("Successfully added")
        }
        const noteData = {
            title: title,
            description: description,
        };

        dispatch(addNote(token, noteData));
        setTitle("");
        setDescription("");
    };

    return (
        <>
            <Navbar />
            <div className="full-page-note">
                <form onSubmit={handleAddNote} className="note-form">
                    <h2>Add Your Note</h2>
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
                    <button type="submit">Save Note</button>
                </form>
            </div>
        </>
    );
}

export default Add;
