import React, { useState, useContext } from "react";
import logo from "../../assets/img/logo.png";
import axios from "../../default_axios.js";
import { NavLink } from "react-router-dom";
import Layout from "../../layout/Layout";
import AuthContext from "../../store/auth-context";

const AdminRegisterUser = () => {
    const authCtx = useContext(AuthContext);

  const [firstname, setFirstName] = useState("");
  // const [firstNameIsTouched, setFirstNameIsTouched] = useState(false);

  const [lastname, setLastName] = useState("");
  // const [lastNameIsTouched, setLastNameIsTouched] = useState(false);

  const [email, setEmail] = useState("");
  // const [emailIsTouched, setEmailIsTouched] = useState(false);

  const [address, setAddress] = useState("");
  // const [addressIsTouched, setAddressIsTouched] = useState(false);

  const [password, setPassword] = useState("");
  // const [passwordIsTouched, setPasswordIsTouched] = useState(false);

  const [confirmed, setPasswordCon] = useState("");
  // const [confirmIsTouched, setConfirmIsTouched] = useState(false);

  const [phone, setPhone] = useState("");
  // const [phoneIsTouched, setPhoneIsTouched] = useState(false);

  const [account_type, setAccountType] = useState(1);
  const [agreeTerms, setAgreeTerms] = useState(false);

  //input change handlers
  const firstNameChangeHandler = (e) => {
    setFirstName(e.target.value.trim());
  };
  // const firstNameBlurHandler = () => {
  //   setFirstNameIsTouched(true)
  // }

  const lastNameChangeHandler = (e) => {
    setLastName(e.target.value.trim());
  };
  // const lastNameBlurHandler = () => {
  //   setLastNameIsTouched(true);
  // }
  const emailChangeHandler = (e) => {
    setEmail(e.target.value.trim());
  };
  // const emailBlurHandler = () => {
  //   setEmailIsTouched(true);
  // }
  const addressChangeHandler = (e) => {
    setAddress(e.target.value.trim());
  };
  // const addressBlurHandler = () => {
  //   setAddressIsTouched(true);
  // }
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value.trim());
  };
  // const passwordBlurHandler = () => {
  //   setPasswordIsTouched(true)
  // }
  const passwordConfirmHandler = (e) => {
    setPasswordCon(e.target.value.trim());
  };
  // const confirmBlurHandler = () => {
  //   setConfirmIsTouched(true);
  // }

  const phoneChangeHandler = (e) => {
    setPhone(e.target.value.trim());
  };
  // const phoneBlurHandler = () => {
  //   setPhoneIsTouched(true)
  // }
  const accountTypeChangeHandler = (e) => {
    setAccountType(e.target.value);
    console.log(e.target.value);
  };
  const agreeTermsHandler = (e) => {
    setAgreeTerms(e.target.checked);
  };

  //submit form handler
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // build up the new user data
    const data = {
      firstname,
      lastname,
      phone,
      address,
      email,
      account_type: String(account_type),
      user_type: "2",
      password,
      confirmed,
    };
    await axios
      .post("admin/user/create", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authCtx.token}`,
        },
      })
      .then((result) => {
        if (result.status === 201 || result.status === 200) {
          alert("Success! You have successfully created a new user");
        } else {
          alert("Something went wrong");
        }
      })
      .catch((err) => {
        alert("Error: " + err.message);
      });
  };
  return (
    <div className="body">
      <Layout>
        <section role="main" className="content-body">
          <section className="body-sign">
            <div className="center-sign">
              <a href="/" className="logo float-left">
                <img src={logo} height="70" alt="Organization Logo" />
              </a>

              <div className="panel card-sign">
                <div className="card-title-sign mt-3 text-end">
                  <h2 className="title text-uppercase font-weight-bold m-0">
                    <i className="bx bx-user-circle me-1 text-6 position-relative top-5"></i>{" "}
                    Sign Up
                  </h2>
                </div>
                <div className="card-body">
                  <form onSubmit={onSubmitHandler}>
                    <div className="form-group mb-3">
                      <label>First Name</label>
                      <input
                        name="name"
                        type="text"
                        className="form-control form-control-lg"
                        onChange={firstNameChangeHandler}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label>Last Name</label>
                      <input
                        name="name"
                        type="text"
                        className="form-control form-control-lg"
                        onChange={lastNameChangeHandler}
                      />
                    </div>

                    <div className="form-group mb-3">
                      <label className="control-label text-lg-end pt-2">
                        Select Account Type
                      </label>
                      <select
                        className="form-control form-control-lg mb-3"
                        onChange={accountTypeChangeHandler}
                      >
                        <option value="2">Conversion</option>
                        <option value="1">Regular</option>
                      </select>
                    </div>

                    <div className="form-group mb-3">
                      <label>Phone</label>
                      <input
                        name="name"
                        type="number"
                        className="form-control form-control-lg"
                        onChange={phoneChangeHandler}
                      />
                    </div>

                    <div className="form-group mb-3">
                      <label>E-mail</label>
                      <input
                        name="email"
                        type="email"
                        className="form-control form-control-lg"
                        onChange={emailChangeHandler}
                      />
                    </div>

                    <div className="form-group mb-3">
                      <label>Adress</label>
                      <input
                        name="name"
                        type="text"
                        className="form-control form-control-lg"
                        onChange={addressChangeHandler}
                      />
                    </div>

                    <div className="form-group mb-0">
                      <div className="row">
                        <div className="col-sm-6 mb-3">
                          <label>Password</label>
                          <input
                            name="pwd"
                            type="password"
                            className="form-control form-control-lg"
                            onChange={passwordChangeHandler}
                          />
                        </div>
                        <div className="col-sm-6 mb-3">
                          <label>Password Confirmation</label>
                          <input
                            name="pwd_confirm"
                            type="password"
                            className="form-control form-control-lg"
                            onChange={passwordConfirmHandler}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-8">
                        <div className="checkbox-custom checkbox-default">
                          <input
                            id="AgreeTerms"
                            name="agreeterms"
                            type="checkbox"
                            checked={agreeTerms}
                            onChange={agreeTermsHandler}
                          />
                          <label htmlFor="AgreeTerms">
                            I agree with <a href="home.html">terms of use</a>
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-4 text-right">
                        <button
                          type="submit"
                          className="btn btn-primary mt-2"
                          disabled={!agreeTerms}
                        >
                          Sign Up
                        </button>
                      </div>
                    </div>

                    <span className="mt-3 mb-3 line-thru text-center text-uppercase">
                      <span>or</span>
                    </span>

                    <p className="text-center">
                      Already have an account?{" "}
                      <NavLink to="/login">Sign In!</NavLink>
                    </p>
                  </form>
                </div>
              </div>

              <p className="text-center text-muted mt-3 mb-3">
                &copy; Copyright 2021. All Rights Reserved.
              </p>
            </div>
          </section>
        </section>
      </Layout>
    </div>
  );
};

export default AdminRegisterUser;
