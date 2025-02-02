import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './message/Message.jsx';

import './Messages.css';

function Messages({ messages, name }) {
    return (


        <div className="messages">
            {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}

        </div>


    )
}

export default Messages
