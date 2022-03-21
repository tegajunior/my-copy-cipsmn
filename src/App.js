import { Fragment, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthContext from "./store/auth-context";
import Signup from "./pages/users/Signup";
import ListUsers from "./pages/admin/ListUsers";
import Login from "./pages/common/Login";
import ViewUser from "./pages/admin/ViewUser";
import AdminDashboard from "./pages/admin/Dashboard";
import UserDashboard from "./pages/users/Dashboard";
import AdminRegisterUser from "./pages/admin/AdminRegisterUser";
import UserCerts from './pages/users/Certs'

function App() {
  // let url = '/app.bundle.js';
  // useEffect(() => {
  //   const scriptFile = document.createElement('script');
  //   scriptFile.type = 'text/javascript';
  //   scriptFile.src = url;
  //   scriptFile.async = true;
  //   document.body.appendChild(scriptFile);
  // }, [url]);
  const authCtx = useContext(AuthContext)

  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/admin" exact>
          {authCtx.isLoggedIn && <AdminDashboard />}
          {!authCtx.isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route path="/admin/register-user">
          {authCtx.isLoggedIn && <AdminRegisterUser />}
          {!authCtx.isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route path="/admin/list-users" exact>
          {authCtx.isLoggedIn && <ListUsers />}
          {!authCtx.isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route path="/admin/view-user/:id" exact>
        {authCtx.isLoggedIn && <ViewUser />}
        {!authCtx.isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route path="/user" exact>
          {authCtx.isLoggedIn && <UserDashboard />}
          {!authCtx.isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route path="/user/certs" exact>
          {authCtx.isLoggedIn && <UserCerts />}
          {!authCtx.isLoggedIn && <Redirect to="/login" />}
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
