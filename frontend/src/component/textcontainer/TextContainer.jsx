import React from 'react'
import './textcontainer.css'
import onlineIcon from '../../assets/onlineIcon.png'


function TextContainer({ users }) {
    return (
        <div className="textcontainer">
            {
                users
                    ? (
                        <div>
                            <h1>People currently chatting:</h1>
                            <div className="activeContainer">
                                <h2>
                                    {users.map(({ name }) => (
                                        <div key={name} className="activeItem">
                                            {name}
                                            <img alt="Online Icon" src={onlineIcon} />
                                        </div>
                                    ))}
                                </h2>
                            </div>
                        </div>
                    )
                    : null
            }
        </div>
    )
}

export default TextContainer
