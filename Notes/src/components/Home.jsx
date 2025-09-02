import React from "react";
import { LuNotepadText } from "react-icons/lu";
import { Link } from 'react-router-dom'
import './Home.css'
function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to NoteApp <LuNotepadText /> </h1>
            <p>Take notes, stay organized, and never forget what's important.</p>
            <div className="home-buttons">
                <Link>
                    <button>Get Started</button>
                </Link>
                <Link>
                    <button> View Notes</button>
                </Link>


            </div>


        </div>
    )

}

export default Home;