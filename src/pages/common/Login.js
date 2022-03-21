import React, {useState, useContext} from 'react';
import AuthContext from '../../store/auth-context';
import logo from '../../assets/img/logo.png';
import axios from '../../default_axios';
import { NavLink, useHistory } from 'react-router-dom';


const Login = () => {
  const authCtx = useContext(AuthContext)
  const history = useHistory()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isWrongCredentials, setIsWrongCredentials] = useState(false);
  const [loginIsSuccess, setLoginIsSuccess] = useState(false)

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  }
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  }
  const onSubmitHandler = (e) => {
    setIsWrongCredentials(false);
    setLoginIsSuccess(true);
    e.preventDefault();
    if (username === '' || password === '') {
      return;
    }
    const data = {
      email: username,
      password
    }
    axios.post('user/login', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response.status === 200 || response.status === 201) {
        authCtx.login(response.data.access_token)
        setLoginIsSuccess(true)
        setTimeout(() => {
          if (response.data.user_type === 1) {
            history.replace("/admin")
          } else {
            history.replace("/user")
          }
        }, 1000);
      } else {
        alert('Something went wrong')
        return
      }
    }).catch(err => {
      setIsWrongCredentials(true);
    })
  }
  let formIsInvalid = password === '' || username === '' ? true : false;
  return (
    <section className="body-sign">
      <div className="center-sign">
        <a href="/" className="logo float-left">
          <img src={logo} height="70" alt="Porto Admin" />
        </a>

        <div className="panel card-sign">
          <div className="card-title-sign mt-3 text-end">
            <h2 className="title text-uppercase font-weight-bold m-0">
              <i className="bx bx-user-circle me-1 text-6 position-relative top-5"></i>{' '}
              Sign In
            </h2>
          </div>
          <div className="card-body">
            {isWrongCredentials && (
              <h5 className="title text-uppercase text-danger font-weight-bold m-0">
                Wrong email or password!
              </h5>
            )}
            {loginIsSuccess && (
              <h5 className="title text-uppercase text-success font-weight-bold m-0">
                Login is successful, redirecting...
              </h5>
            )}
            <form onSubmit={onSubmitHandler}>
              <div className="form-group mb-3">
                <label>Username</label>
                <div className="input-group">
                  <input
                    name="username"
                    type="text"
                    className="form-control form-control-lg"
                    onChange={usernameChangeHandler}
                  />
                  <span className="input-group-text">
                    <i className="bx bx-user text-4"></i>
                  </span>
                </div>
              </div>

              <div className="form-group mb-3">
                <div className="clearfix">
                  <label className="float-left">Password</label>
                  <a href="pages-recover-password.html" className="float-end">
                    Lost Password?
                  </a>
                </div>
                <div className="input-group">
                  <input
                    name="pwd"
                    type="password"
                    className="form-control form-control-lg"
                    onChange={passwordChangeHandler}
                  />
                  <span className="input-group-text">
                    <i className="bx bx-lock text-4"></i>
                  </span>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-8">
                  <div className="checkbox-custom checkbox-default">
                    <input id="RememberMe" name="rememberme" type="checkbox" />
                    <label htmlFor="RememberMe">Remember Me</label>
                  </div>
                </div>
                <div className="col-sm-4 text-end">
                  <button
                    type="submit"
                    className="btn btn-primary mt-2"
                    disabled={formIsInvalid}
                  >
                    Sign In
                  </button>
                </div>
              </div>

              <p className="text-center">
                Don't have an account yet?
                <NavLink to="/signup">Sign Up!</NavLink>
              </p>
            </form>
          </div>
        </div>

        <p className="text-center text-muted mt-3 mb-3">
          &copy; Copyright 2021. All Rights Reserved.
        </p>
      </div>
    </section>
  );
}

export default Login