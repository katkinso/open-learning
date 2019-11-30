import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom'
import utils from '../../utils/utils'


const SessionListItem = props => {

    const { session, isRegistered, index } = props;

    const time = utils.utcDateToLocalTime(session.dateTime)

    let classInfo = "container course-list-item"
    classInfo += index ? "" : " first";
    classInfo += isRegistered ? classInfo + " isRegistered" : ""

    return (
        <div className={classInfo}>
            <div className="row flex-nowrap justify-content-between align-items-center py-3">

                <div className="col-1 text-center">
                    <p className="font-weight-bold text-uppercase small">{time} </p>

                    {isRegistered ? 
                        <img src="/assets/images/registered.png" width="25px" alt="logo" /> : 
                        <img src="/assets/images/1x1.png" width="25px" alt="" />
                    } 
                </div>
                <div className="col-7">

                    <Link className="small font-weight-bold align-top" 
                    to={`/session/${session.id}`}>
                    {session.name}</Link><br/>

                    <span className="small">
                    Total Spots: {session.totalSpots}
                    </span>
  
                </div>
                <div className="col-4 d-flex justify-content-end align-items-center">
                </div>
            </div>
        </div>
    )
}

export default SessionListItem
