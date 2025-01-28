import React from 'react'
import './chat.css'

function Sender({user,message}) {
    return (
        <div className="sender">
            <p>
                {message}
            </p>
        </div>
    )
}

function Reciever({user,message}) {
    return (
        <div className="receiver">
            <p>
                {message}
            </p>
        </div>
    )
}

export default Sender;
export {Reciever};
