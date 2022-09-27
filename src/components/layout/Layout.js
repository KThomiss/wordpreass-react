import HomePage from "../home/HomePage";
import LoginPage from "../login/LoginPage";
import DashboardPage from "../dashboard/DashBoardPage";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

function Layout() {
  const [auth, setAuth] = useContext(AuthContext);
  /* const navigate = useNavigate();  replaced useHistory()?*/

  function logout() {
    setAuth(null);
    /* navigate("/"); */
  }

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink end to="/">
              Home
            </NavLink>
          </li>
          {auth ? (
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink> | <button onClick={logout}>Log out</button>
            </li>
          ) : (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
        </ul>
      </nav>
      <Routes>
        <Route path="/" exact element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
      </Routes>
    </Router>
  );
}

export default Layout;
