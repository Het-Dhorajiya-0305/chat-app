import React, { useState, useEffect, useRef } from 'react'
import { IoSendSharp } from "react-icons/io5";

import './chat.css'
import Sender, { Reciever } from './chatBox';

function Chat() {
    const [message, setMessage] = useState("");
    const [messageslist, setmessagelist] = useState([]);
    const [flag, setflag] = useState(true);
    const messagesEndRef = useRef(null);

    function handleClick() {
        const tempUser = flag ? "sender" : "receiver";
        const msg = {
            message: message,
            user: tempUser
        }
        setflag(!flag);
        setmessagelist([...messageslist, msg]);
        setMessage("")
    }
    function onchange(e) {

        setMessage(e.target.value);
    }

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messageslist]);

    console.log(messageslist);
    return (
        <div className="chat">
            <div className="left">
                <div className='people-heading'>people</div>
                <div className="people_list">
                    <div className="even" id='people'>het dhorajiya</div>
                    <div className="odd" id='people'>het dhorajiya</div>
                    <div className="even" id='people'>het dhorajiya</div>
                    <div className="odd" id='people'>het dhorajiya</div>
                    <div className="even" id='people'>het dhorajiya</div>
                    <div className="odd" id='people'>het dhorajiya</div>
                    <div className="even" id='people'>het dhorajiya</div>
                    <div className="odd" id='people'>het dhorajiya</div>
                    <div className="even" id='people'>het dhorajiya</div>
                    <div className="odd" id='people'>het dhorajiya</div>
                    <div className="even" id='people'>het dhorajiya</div>
                    <div className="odd" id='people'>het dhorajiya</div>
                    <div className="even" id='people'>het dhorajiya</div>
                    <div className="odd" id='people'>het dhorajiya</div>
                    <div className="even" id='people'>het dhorajiya</div>
                </div>
            </div>
            <div className="right">
                <div className="right-top">
                    <div className="chat-people-name">
                        <span>het dhorajiya</span>
                    </div>
                </div>
                <div className="right-middle">
                    <div className="messages">
                            {
                                messageslist.map((mes, index) => {
                                    return mes.user === "sender" ? (
                                        <Sender
                                            key={index}
                                            user={mes.user}
                                            message={mes.message}
                                        />
                                    ) : (
                                        <Reciever
                                            key={index}
                                            user={mes.user}
                                            message={mes.message}
                                        />
                                    );
                                })
                            }
                            <div ref={messagesEndRef} />
                    </div>
                    <div className="send">
                        <button className="sendbtn">
                            <IoSendSharp
                                size={37}
                                onClick={handleClick}
                                className='send-btn'
                            >
                            </IoSendSharp>
                        </button>
                        <input
                            type="text"
                            className='input-send'
                            value={message}
                            onChange={(e) => {
                                onchange(e);
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat
