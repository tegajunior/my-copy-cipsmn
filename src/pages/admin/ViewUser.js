import React, { useState, useEffect, useCallback, useContext } from 'react';
import AuthContext from "../../store/auth-context";
import { useParams } from 'react-router-dom';
import axios from '../../default_axios';
import Layout from '../../layout/Layout';

const ViewUser = () => {
  const authCtx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({});
  const params = useParams();
  const id = +params.id;

  const getUser = useCallback(() => {
    setIsLoading(true);
    axios
      .get(`admin/user/view/${id}`, {
        headers: {
          Authorization: `Bearer ${authCtx.token}`,
        },
      })
      .then((response) => {
        setIsLoading(false);
        if (response.status === 201 || response.status === 200) {
          setUser(response.data[0]);
        } else {
          throw new Error('Something went wrong');
        }
      })
      .catch((err) => {
        alert('Something went wrong, please try again')
      });
  }, [id, authCtx.token]);

  useEffect(() => {
    try {
      getUser();
    } catch (error) {
      alert("Something went wrong");
    }
  }, [getUser]);

  if (isLoading) {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <h3>Loading...</h3>
      </div>
    );
  }
  return (
    <section className="body">
      <Layout>
        <section role="main" className="content-body">
          <header className="page-header">
            <h2>User Profile</h2>
          </header>

          {/* <!-- start: page --> */}

          <div className="row">
            <div className="col-lg-12 col-xl-8">
              <div className="tabs">
                <ul className="nav nav-tabs tabs-primary">
                  <li className="nav-item active">
                    <button
                      className="nav-link"
                      data-bs-target="#overview"
                      data-bs-toggle="tab"
                    >
                      Overview
                    </button>
                  </li>
                </ul>
                <div className="tab-content">
                  <div id="overview" className="tab-pane active">
                    <div className="p-3">
                      <h4 className="mb-3 font-weight-semibold text-dark">
                        User Details
                      </h4>

                      <section className="simple-compose-box mb-3">
                        <div className="timeline timeline-simple mt-3 mb-3">
                          <div className="tm-body">
                            <ol className="tm-items">
                              <li>
                                <div className="tm-box">
                                  <p className="text-muted mb-0">
                                    <strong>NAME</strong>
                                  </p>
                                  <p>
                                    <span className="text-primary">
                                      {user.firstname + ' ' + user.lastname}
                                    </span>
                                  </p>
                                </div>
                              </li>
                              <li>
                                <div className="tm-box">
                                  <p className="text-muted mb-0">
                                    <strong>EMAIL</strong>
                                  </p>
                                  <p>{user.email}</p>
                                </div>
                              </li>
                              <li>
                                <div className="tm-box">
                                  <p className="text-muted mb-0">
                                    <strong>ADDRESS</strong>
                                  </p>
                                  <p>{user.address}</p>
                                </div>
                              </li>
                              <li>
                                <div className="tm-box">
                                  <p className="text-muted mb-0">
                                    <strong>PHONE</strong>
                                  </p>
                                  <p>{user.phone}</p>
                                </div>
                              </li>
                              <li>
                                <div className="tm-box">
                                  <p className="text-muted mb-0">
                                    <strong>ACCOUNT TYPE</strong>
                                  </p>
                                  <p>{+user.account_type === 1 ? 'Regular' : 'Conversion'}</p>
                                </div>
                              </li>
                            </ol>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end: page --> */}
        </section>
      </Layout>
    </section>
  );
};

export default ViewUser;
