import React, { Component } from "react";

const Header = props => {
    return (
        <header className="py-3 header-sub border-bottom">
            <div className="container">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-4 pt-1">
                        <h1>YOUR NEXT SESSION</h1>
                        <h2 className="text-brighter-blue">Computer Science: Recursion</h2>
                        <h3 className="text-sm-muted">10 people attending - 3 spots left</h3>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                        <span className="font-weight-bold">Monday, April 6 @ 6:30PM</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header