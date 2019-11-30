import React, { Component } from "react";
import utils from '../../utils/utils'
import { Link } from 'react-router-dom'

const Header = props => {

    const { nextSession } = props;

    return (
        <header className="py-3 header-sub border-bottom">
            <div className="container">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-4 pt-1">
                        <h1>YOUR NEXT SESSION</h1>
                        <h2><Link className="text-brighter-blue" to={`/session/${nextSession.id}`}>
                        {nextSession.name}</Link></h2>
                        <h3 className="text-sm-muted">Total Spots: {nextSession.totalSpots}</h3>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                        <span className="font-weight-bold">
                        {utils.utcToLocal(nextSession.dateTime)}
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header