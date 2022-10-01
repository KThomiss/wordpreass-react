import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

function Layout() {
  const [auth, setAuth] = useContext(AuthContext);

  const navigate = useNavigate();
  function logout() {
    setAuth(null);
    navigate("/");
  }

  return (
    <nav>
      <ul className="header-ul">
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
  );
}

export default Layout;
