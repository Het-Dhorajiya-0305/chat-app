import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {

    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    return (

        <div id='home'>
            <div className="background">
                <div className="shape1"></div>
                <div className="shape2"></div>
            </div>
            <form action="" method="get">
                <h1>login page</h1>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        placeholder="Name"
                        type="text"
                        onChange={(event) => setName(event.target.value)}
                        required
                        id='name'
                    />
                </div>
                <div>
                    <label htmlFor="room">Room</label>
                    <input
                        placeholder="Room"
                        type="text"
                        onChange={(event) => setRoom(event.target.value)}
                        required
                        id='room'
                    />
                </div>
                <Link
                    onClick={(e) => (!name || !room ? e.preventDefault() : null)}
                    to={`/chat?name=${name}&room=${room}`}
                >
                    <button type="submit" id='submit-btn'>
                        Sign In
                    </button>
                </Link>
            </form>
        </div>

    )
}

export default Home
