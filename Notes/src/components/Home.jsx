import React from "react";
import { LuNotepadText } from "react-icons/lu";
import { Link } from 'react-router-dom'
import './Home.css'
import Navbar from './Navbar';
function Home() {
    return (
        <div className="page-container">
            <Navbar />
            <div className="home-container">
                <h1>Welcome to NoteApp <LuNotepadText /></h1>
                <p>Take notes, stay organized, and never forget what's important.</p>
                <div className="home-buttons">
                    <Link to="/notes"><button>Add Note</button></Link>
                    <Link to="/NoteList"><button>View Notes</button></Link>
                </div>
            </div>
        </div>
    )

}

export default Home;