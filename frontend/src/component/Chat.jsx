import React from 'react'
import { IoSendSharp } from "react-icons/io5";

import './chat.css'

function Chat() {
    return (
        <div className="container">
            <div className="card chat-app">
                <div id="plist" className="people-list">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-search"></i></span>
                        </div>
                    </div>
                    <ul className="list-unstyled chat-list mt-2 mb-0">
                        <li className="clearfix">
                            <div className="about">
                                <div className="name">Vincent Porter</div>
                                <div className="status"> <i className="fa fa-circle offline"></i> left 7 mins ago </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="chat">
                    <div className="chat-header clearfix">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="chat-about">
                                    <h6 className="m-b-0">Aiden Chavez</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chat-history">
                        <ul className="m-b-0">
                            <li className="clearfix">
                                <div className="message other-message float-right"> Hi Aiden, how are you? How is the project coming along? </div>
                            </li>

                        </ul>
                    </div>
                    <div className="chat-message clearfix">
                        <div className="input-group mb-0">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><IoSendSharp size={35} />
                                </span>
                            </div>
                            <input type='text' className='form-control' placeholder="Enter text here..."></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Chat
