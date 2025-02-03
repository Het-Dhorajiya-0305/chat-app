import React, { useState, useEffect } from 'react'
import './chat.css'


import io from 'socket.io-client'
import URLSearchParams from '@ungap/url-search-params';
import InfoBar from '../infobar/InfoBar.jsx';
import Input from '../input/Input.jsx';
import Messages from '../messages/Messages.jsx';
import TextContainer from '../textcontainer/TextContainer.jsx';

let socket;

function Chat() {

    const [name, setname] = useState("");
    const [room, setroom] = useState("");
    const [message, setMessage] = useState('');
    const [socketState, setSocketState] = useState()
    const [users, setUsers] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = "http://localhost:3000"
    useEffect(() => {
        const para = new URLSearchParams(window.location.search);
        const name = para.get("name");
        const room = para.get("room");

        setname(name);
        setroom(room);
        socket = io(ENDPOINT);
        
        socket.emit('join', { name, room }, (error) => {
            if (error) {
                alert(error);
            }
        });

        socket.on("disconnect", () => {
            socket = io(ENDPOINT)
            socket.emit('join', {name, room}, (error) => {
                if (error) {
                    alert(error)
                }
            })
        })

        return () => {
            socket.disconnect();
        }

    }, [ENDPOINT, window.location.search])


    useEffect(() => {
        socket.on("message", (message) => {
            setMessages([...messages, message]);

        })

    }, [messages])

    function sendmessage(e) {
        e.preventDefault();
        if (message) {
            socket.emit("sendMessage", message, () => setMessage(''))
        }
    }

    console.log(message)
    console.log(messages)
    return (
        <div className="outer-container">
            <div className="container">
                <InfoBar room={room}></InfoBar>
                <Messages name={name} messages={messages} ></Messages>
                <Input setMessage={setMessage} sendMessage={sendmessage} message={message} ></Input>
            </div>
            <TextContainer users={users}></TextContainer>
        </div>
    )
}

export default Chat
