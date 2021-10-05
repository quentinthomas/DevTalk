import { Avatar } from '@material-ui/core';
import React from 'react'
import './Message.css';

function Message() {
    return (
        < div className="message">
            <Avatar />
            <div className="message__info">
                <h4>
                    <span className="message__timestamp">
                        
                    </span>

                    
                </h4>
            </div>
            
        </div>
    )
}

export default Message
