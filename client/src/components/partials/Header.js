import React, { Component } from "react";
import Button from '../ui/Button'

const Header = props => {

    const user = props.user;

    return (
       <header className="py-2 px-2 header-top">
        <div className="container-fluid">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 p-1">
                <img src="/assets/images/logo.png" width="40px" alt="logo" />
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
                <p>{user.email}</p>
                <p>{user.firstName}</p>
                <Button action={props.logout} type="button" text="logout" />
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header
