import React, { Component } from "react";
import SessionListItem from "./SessionListItem";

const SessionList = props => {

    const { sessions, userSessions } = props;
    
    return (
        <div className="container course-list mt-5">
            {sessions.map((session, index) => {

                return (
                    <SessionListItem 
                        index={index}
                        key={session.id} 
                        session={session} 
                        isRegistered={userSessions.includes(session.id)} 
                    />
                    )
                }
            )}
        </div>
    )
}

export default SessionList