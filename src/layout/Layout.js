import React, { Fragment, useContext } from "react";
import logo from "../assets/img/logo.png";
import logged from "../assets/img/logged-user.jpg";
import { NavLink, useHistory } from "react-router-dom";
import AuthContext from "../store/auth-context";

const Layout = (props) => {
  const authCtx = useContext(AuthContext)
  const history = useHistory();

  const logout = () => {
    authCtx.logout();
    history.replace("/login");
  };
  const width = 300;
  const height = 50;
  return (
    <Fragment>
      {/* <!-- start: header --> */}
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

        {/* <!-- start: search & user box --> */}
        <div className="header-right">
          <span className="separator"></span>

          <span className="separator"></span>

          <div id="userbox" className="userbox">
            <a href="#" data-bs-toggle="dropdown">
              <figure className="profile-picture">
                <img src={logged} alt="User" className="rounded-circle" />
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
          <button className="btn btn-sm btn-outline-danger" onClick={logout}>
            Logout
          </button>
        </div>
        {/* <!-- end: search & user box --> */}
      </header>
      {/* <!-- end: header --> */}

      <div className="inner-wrapper">
        {/* <!-- start: sidebar --> */}
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
                    <NavLink to="/admin" className="nav-link">
                      <i className="bx bx-home-alt" aria-hidden="true"></i>
                      <span>Dashboard</span>
                    </NavLink>
                  </li>
                  <li className="nav-parent nav-expanded nav-active">
                    <a className="nav-link" href="#">
                      <i className="fas fa-user" aria-hidden="true"></i>
                      <span>Users</span>
                    </a>
                    <ul className="nav nav-children">
                      <li>
                        <NavLink
                          to="/admin/list-users"
                          href="admin-list-users.html"
                          className="nav-link"
                        >
                          View Users
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/admin/register-user" className="nav-link">
                          Add User
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-parent nav-active">
                    <a className="nav-link" href="#">
                      <i className="fas fa-dollar-sign" aria-hidden="true"></i>
                      <span>Payments</span>
                    </a>
                    <ul className="nav nav-children">
                      <li>
                        <a href="admin-list-payments.html" className="nav-link">
                          View Payments
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-parent nav-active">
                    <a className="nav-link" href="#">
                      <i className="fas fa-poll-h" aria-hidden="true"></i>
                      <span>Exam</span>
                    </a>
                    <ul className="nav nav-children">
                      <li>
                        <a href="admin-create-exam.html" className="nav-link">
                          Create Exam
                        </a>
                      </li>
                      <li>
                        <a href="admin-list-exams.html" className="nav-link">
                          View Exams
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-parent">
                    <a className="nav-link" href="#">
                      <i className="bx bx-file" aria-hidden="true"></i>
                      <span>Result</span>
                    </a>
                    <ul className="nav nav-children">
                      <ul className="nav nav-children">
                        <li>
                          <a className="nav-link" href="pages-signup.html">
                            Create Result
                          </a>
                        </li>
                        <li>
                          <a className="nav-link" href="pages-signin.html">
                            View Results
                          </a>
                        </li>
                      </ul>
                    </ul>
                  </li>
                  <li className="nav-parent">
                    <a className="nav-link" href="#">
                      <i className="far fa-check-square" aria-hidden="true"></i>
                      <span>Badges</span>
                    </a>
                    <ul className="nav nav-children">
                      <li>
                        <a href="admin-create-badge.html" className="nav-link">
                          Create Badges
                        </a>
                      </li>
                      <li>
                        <a href="admin-list-badge.html" className="nav-link">
                          View Badges
                        </a>
                      </li>
                    </ul>
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
        {/* <!-- end: sidebar --> */}

        {/* main content goes below */}
        {props.children}
      </div>
    </Fragment>
  );
};

export default Layout;
