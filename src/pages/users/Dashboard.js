import React, { useState, useEffect, useCallback, useContext } from "react";
import UserLayout from "../../layout/UserLayout";
import axios from "../../default_axios";
import AuthContext from "../../store/auth-context";

const Dashboard = () => {
  const authCtx = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [payments, setPayments] = useState([]);
  const [exams, setExams] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchUser = useCallback(() => {
    setIsLoading(true);
    axios
      .get("user/dashboard", {
        headers: {
          Authorization: `Bearer ${authCtx.token}`,
        },
      })
      .then((response) => {
        setIsLoading(false);

        if (response.status === 200 || response.status === 200) {
          setUser(response.data);
          setPayments(response.data.payment);
          setExams(response.data.exam);
        } else {
          //TODO...error state
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [authCtx.token]);

  useEffect(() => {
    try {
      fetchUser();
    } catch (error) {
      console.log(error);
    }
  }, [fetchUser]);
  return (
    <div className="body">
      <UserLayout>
        <section role="main" className="content-body">
          <header className="page-header">
            <h2>Dashboard</h2>
          </header>
          {!user && isLoading && !isError && <h3>Loading...</h3>}
          {user && !isLoading && !isError && (
            <div>
              <h4 className="pt-4 mb-0 mt-0 font-weight-bold text-dark">
                Welcome! {user.name}
              </h4>
              <p className="mb-3"></p>
              <div className="row">
                <div className="col-md-3">
                  <section className="card">
                    <a href="file:///C:/cipsmn/user-certificate.html">
                      <div
                        className="card-body bg-primary"
                        style={{ textAlign: "center" }}
                      >
                        <h1>Certificate</h1>
                      </div>
                    </a>
                  </section>
                </div>

                <div className="col-md-3">
                  <section className="card">
                    <a href="file:///C:/cipsmn/user-payment.html">
                      <div
                        className="card-body bg-tertiary"
                        style={{ textAlign: "center", color: "#fff" }}
                      >
                        <h1>Payment</h1>
                      </div>
                    </a>
                  </section>
                </div>

                <div className="col-md-3">
                  <section className="card">
                    <a href="file:///C:/cipsmn/user-badge.html">
                      <div
                        className="card-body bg-quaternary"
                        style={{ textAlign: "center", color: "#fff" }}
                      >
                        <h1>Badge</h1>
                      </div>
                    </a>
                  </section>
                </div>

                <div className="col-md-3">
                  <section className="card">
                    <a href="file:///C:/cipsmn/user-donate.html">
                      <div
                        className="card-body bg-primary"
                        style={{ textAlign: "center", color: "#fff" }}
                      >
                        <h1>Donate</h1>
                      </div>
                    </a>
                  </section>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <h4 className="mb-3 font-weight-semibold text-dark">
                    Below are exams you are expected to take.
                  </h4>
                  <div className="m-0">
                    <div className="col-lg-6">
                      <a href="#" className="mb-1 mt-1 me-1 btn btn-danger">
                        Pay for exemption fee
                      </a>
                    </div>
                  </div>
                  <div
                    className="scrollable has-scrollbar"
                    data-plugin-scrollable=""
                    style={{ height: "500px" }}
                  >
                    <div
                      className="scrollable-content"
                      tabIndex="0"
                      style={{ right: "-17px" }}
                    >
                      <div className="card-body">
                      {!isError && !isLoading && exams.length < 1 && (
                          <h3>No exams</h3>
                        )}
                        <div className="table-responsive">
                          {!isError && !isLoading && exams.length > 0 && (
                            <table className="table table-ecommerce-simple table-borderless table-striped mb-1">
                              <thead>
                                <tr>
                                  <th></th>
                                  <th>Exam Name</th>
                                  <th>Price</th>
                                </tr>
                              </thead>
                              <tbody>
                                {exams.map((exam) => (
                                  <tr>
                                    <td>
                                      <a href="#">
                                        <img
                                          src={exam.image}
                                          className="img-fluid"
                                          width="45"
                                          alt="Porto SmartWatch"
                                        />
                                      </a>
                                    </td>
                                    <td>
                                      <a
                                        href="#"
                                        className="font-weight-semibold"
                                      >
                                        {exam.name}
                                      </a>
                                    </td>
                                    <td>${exam.price}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          )}
                        </div>
                      </div>
                      <div
                        className="scrollable scrollable-padding has-scrollbar"
                        data-plugin-scrollable=""
                        style={{ height: "200px" }}
                      >
                        <div
                          className="scrollable-pane"
                          style={{ opacity: 1, visibility: "visible" }}
                        >
                          <div
                            className="scrollable-slider"
                            style={{
                              height: "76px",
                              transform: "translate(0px, 0px)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="scrollable-pane"
                      style={{ opacity: 1, visibility: "visible" }}
                    >
                      <div
                        className="scrollable-slider"
                        style={{
                          height: "123px",
                          transform: "translate(0px, 0px)",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* <!-- end: page --> */}
              </div>

              <div className="row pt-4 mt-1">
                <div className="col-lg-12">
                  <section className="row mb-3">
                    <div className="col-xl-12">
                      <header className="card-header card-header-transparent">
                        <h2 className="card-title">Recent Payments</h2>
                      </header>
                      <div className="card-body">
                        {!isError && !isLoading && payments.length < 1 && (
                          <h3>No payments</h3>
                        )}
                        {!isError && !isLoading && payments.length > 0 && (
                          <table className="table table-responsive-md table-striped mb-0">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Amount</th>
                              </tr>
                            </thead>
                            <tbody>
                              {payments.map((payment, index) => (
                                <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td>{payment.name}</td>
                                  <td>
                                    <span className="badge badge-success">
                                      ₦ {payment.amount}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        )}
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          )}
          {/* <!-- end: page --> */}
        </section>
      </UserLayout>
    </div>
  );
};

export default Dashboard;
