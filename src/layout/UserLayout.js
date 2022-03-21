import React, { Fragment, useContext } from "react";
import logo from "../assets/img/logo.png";
import logged from "../assets/img/logged-user.jpg";
import { NavLink, useHistory } from "react-router-dom";

import AuthContext from "../store/auth-context";

const UserLayout = (props) => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const logout = () => {
    authCtx.logout();
    history.replace("/login");
  };
  const width = 300;
  const height = 50;
  return (
    <Fragment>
      {/* start: header */}
      <header className="header">
        <div className="logo-container">
          <a href="../4.0.0" className="logo">
            <img src={logo} width={width} height={height} alt="Logo" />
          </a>

          <div
            className="d-md-none toggle-sidebar-left"
            data-toggle-class="sidebar-left-opened"
            data-target="html"
            data-fire-event="sidebar-left-opened"
          >
            <i className="fas fa-bars" aria-label="Toggle sidebar"></i>
          </div>
        </div>

        {/* start: search & user box */}
        <div className="header-right">
          <span className="separator"></span>

          <span className="separator"></span>

          <div id="userbox" className="userbox">
            <a href="#" data-bs-toggle="dropdown">
              <figure className="profile-picture">
                <img
                  src={logged}
                  alt="User"
                  className="rounded-circle"
                  data-lock-picture="img/!logged-user.jpg"
                />
              </figure>
              <div
                className="profile-info"
                data-lock-name="John Doe"
                data-lock-email="johndoe@okler.com"
              >
                <span className="name">John Doe Junior</span>
              </div>
            </a>
          </div>
          <button
            className="btn btn-sm btn-outline-danger mr-3"
            onClick={logout}
          >
            Logout
          </button>
        </div>
        {/* end: search & user box  */}
      </header>
      {/* end: header */}
      <div className="inner-wrapper">
        {/* start: aside */}
        <aside id="sidebar-left" className="sidebar-left">
          <div className="sidebar-header">
            <div className="sidebar-title">Navigation</div>
            <div
              className="sidebar-toggle d-none d-md-block"
              data-toggle-class="sidebar-left-collapsed"
              data-target="html"
              data-fire-event="sidebar-left-toggle"
            >
              <i className="fas fa-bars" aria-label="Toggle sidebar"></i>
            </div>
          </div>

          <div className="nano">
            <div className="nano-content">
              <nav id="menu" className="nav-main" role="navigation">
                <ul className="nav nav-main">
                  <li>
                    <NavLink
                      to="/user"
                      className="nav-link"
                      href="file:///C:/cipsmn/user-dashboard.html"
                    >
                      <i className="bx bx-home-alt" aria-hidden="true"></i>
                      <span>Dashboard</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/user/certs"
                      className="nav-link"
                      href="file:///C:/cipsmn/user-certificate.html"
                    >
                      <i className="bx bx-certification" aria-hidden="true"></i>
                      <span>Certificates</span>
                    </NavLink>
                  </li>
                  <li>
                    <a
                      className="nav-link"
                      href="file:///C:/cipsmn/user-payment.html"
                    >
                      <i className="bx bxl-paypal" aria-hidden="true"></i>
                      <span>Payments</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link"
                      href="file:///C:/cipsmn/user-badge.html"
                    >
                      <i className="bx bxs-badge-check" aria-hidden="true"></i>
                      <span>Badge</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link"
                      href="file:///C:/cipsmn/user-donate.html"
                    >
                      <i className="bx bx-donate-blood" aria-hidden="true"></i>
                      <span>Donate</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* <script>
        // Maintain Scroll Position
        if (typeof localStorage !== 'undefined') {
            if (localStorage.getItem('sidebar-left-position') !== null) {
                var initialPosition = localStorage.getItem('sidebar-left-position'),
                    sidebarLeft = document.querySelector('#sidebar-left .nano-content');

                sidebarLeft.scrollTop = initialPosition;
            }
        }
    </script> */}
          </div>
        </aside>
        {/* end: aside */}

        {/* main content goes here */}
        {props.children}
      </div>
    </Fragment>
  );
};

export default UserLayout;
