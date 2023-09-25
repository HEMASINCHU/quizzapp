import { NavLink, Outlet } from "react-router-dom";
const NavBar = () => {
  const Styles = ({ isActive }) => (isActive ? "activecomp" : "");
  return (
    <nav className="navbar">
      <NavLink className={Styles} to="/home">
        Home
      </NavLink>
      <NavLink className={Styles} to="/">
        Login
      </NavLink>
      <NavLink className={Styles} to="/signup">
        Signup
      </NavLink>
      <br />
      <Outlet />
    </nav>
  );
};
export default NavBar;
