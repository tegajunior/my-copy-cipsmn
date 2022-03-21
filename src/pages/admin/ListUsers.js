import React, { useEffect, useState, useCallback, useContext } from 'react';
import AuthContext from "../../store/auth-context";
import axios from '../../default_axios';
import { NavLink } from 'react-router-dom';
import Layout from '../../layout/Layout';

const ListUsers = () => {
  const authCtx = useContext(AuthContext);
  
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchUsers = useCallback(() => {
    setIsLoading(true);
    axios
      .get('admin/user/get', {
        headers: {
          Authorization: `Bearer ${authCtx.token}`,
        },
      })
      .then((response) => {
        setIsLoading(false);
        if (response.status === 201 || response.status === 200) {
          setUsers(response.data);
        } else {
          throw new Error('Something went wrong');
        }
      })
      .catch((err) => {
        alert('Something went wrong, please try again later');
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  useEffect(() => {
    try {
      fetchUsers();
    } catch (error) {}
  }, [fetchUsers]);

  if (isLoading) {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <h3>Loading...</h3>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <h3 className="text-danger">
          There was an error loading the targeted content, please try again
        </h3>
      </div>
    );
  }

  return (
    <section className="body">
      <Layout>
        <section role="main" className="content-body">
          <header className="page-header">
            <h2>List Users</h2>
          </header>
          <div className="row pt-4 mt-1">
            <div className="col-lg-12">
              <div className="col-xl-12">
                <header className="card-header card-header-transparent">
                  <h2 className="card-title">Recent Users</h2>
                </header>
                <div className="card-body">
                  <table className="table table-responsive-md table-striped mb-0">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user, index) => (
                        <tr key={user.id}>
                          <td>{index + 1}</td>
                          <td>{`${user.firstname} ${user.lastname}`}</td>
                          <td>
                            <NavLink
                              to={`/admin/view-user/${user.id}`}
                              className="mb-1 mt-1 me-1 btn btn-primary"
                            >
                              view
                            </NavLink>
                          </td>
                          <td>
                            <NavLink
                              to={`/admin/edit-user/${user.id}`}
                              className="mb-1 mt-1 me-1 btn btn-warning"
                            >
                              edit
                            </NavLink>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="mb-1 mt-1 me-1 btn btn-danger"
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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

export default ListUsers;
