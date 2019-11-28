import React, { Component } from "react";
import Button from '../ui/Button'

const Header = props => {
    return (
        <header className="py-3 header-sub">
            <div className="container">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-5 pt-1">
                        <span className="notice">Remember, Thursday is a holiday! Don’t forget to submit your answers to the latest survey</span>
                    </div>
                    <div className="col-3 d-flex justify-content-end align-items-center"></div>
                </div>
            </div>

        </header>
    )
}

export default Header