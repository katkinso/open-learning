import React, { Component } from "react";


const Header = props => {
    return (
       <header className="py-3 header-sub border-bottom">
        <div className="container">
            <div className="row flex-nowrap justify-content-between align-items-center"></div>
            <div className="col-4 pt-1"></div>
            <div className="col-4 d-flex justify-content-end align-items-center"></div>          
        </div>
       </header>
    )
}

export default Header