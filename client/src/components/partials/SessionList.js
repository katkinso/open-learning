import React, { Component } from "react";
import SessionListItem from "./SessionListItem";

const SessionList = props => {

    const { sessions } = props;

    return (
        <div className="container course-list"><br></br><br></br><br></br>
            {sessions.map((session) =>
                <SessionListItem key={session.id} session={session} />
            )}
        </div>
    )
}

export default SessionList