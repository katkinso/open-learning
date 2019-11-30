import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom'
import Button from '../ui/Button'
import utils from '../../utils/utils'

const Header = props => {

  if (!utils.checkCookie()) {
      props.history.push({
      pathname: '/authenticate',
      state: { error: "access denied" }
    })
  }

  const user = props.user;

  return (
    <header className="py-2 px-2 header-top">
      <div className="container-fluid">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 p-1">
          <Link to="/dashboard"><img src="/assets/images/logo.png" width="40px" alt="logo" /></Link>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <img src="/assets/images/feathers.png" alt="avatar" className="avatar" />

            <span className="px-2">
              <Link className="text-capitalize font-weight-bold" to={`/profile`}>{user.firstName} {user.lastName}</Link><br></br>
              <span className="text-sm-muted font-weight-bold">{user.email}</span>
            </span>

            <Button action={props.logout} type="button" text="logout" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default withRouter(Header);
