import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom'

const SessionListItem = props => {

    const { session } = props;

    return (
        <div className="container course-list-item">
            <div className="row flex-nowrap justify-content-between align-items-center">
                <div className="col-4 pt-1">

                    {session.name} <br></br>

                </div>
                <div className="col-4 d-flex justify-content-end align-items-center">
                    <Link to={`/session/${session.id}`}><button type="button" className="btn btn-sm btn-outline-secondary">View Session</button></Link>
                </div>
            </div>
        </div>
    )
}

export default SessionListItem

//CSS styles 

// {sessions.catagories.map((category, index) =>  
//     <span key={index}>{category}, </span>
// )}
