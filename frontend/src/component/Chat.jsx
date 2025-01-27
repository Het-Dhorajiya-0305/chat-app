import React, { useState } from 'react'
import { IoSendSharp } from "react-icons/io5";

import './chat.css'

function Chat() {
    const [message,setMessage]=useState("");
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
                    <div className="right-middle">
                        <div className="messages">
                            <div id="message" className='float-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quo, ipsam officia quos, unde autem doloribus voluptatem doloremque libero sint earum perferendis repellat dignissimos id, quidem reprehenderit modi! Doloremque, sint?</div>
                            <div id="message" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, quidem.</div>
                            <div id="message">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, quidem.</div>
                            <div id="message">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, quidem.</div>
                            <div id="message">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, quidem.</div>
                            <div id="message">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, quidem.</div>
                            <div id="message">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, quidem.</div>
                            <div id="message">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, quidem.</div> 
                        </div>
                        <div className="send">
                            <button className="sendbtn"><IoSendSharp size={37} onClick={()=>setMessage("")}></IoSendSharp></button>
                            <input type="text" name="" id="" className='input-send' value={message} onChange={(e)=>setMessage(e.target.value)}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat
