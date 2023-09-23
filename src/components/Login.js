import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState({ password: "", email: "" });

  function handleChange(e) {
    const { name, value } = e && e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(login);
    setLogin({ email: "", password: "" });
  }

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          className="form-input"
          id="email"
          name="email"
          type="email"
          placeholder="Enter your Email"
          value={login.email}
          onChange={handleChange}
        />
        <label htmlFor="password" className="form-label">
          Password:
        </label>
        <input
          className="form-input"
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={login.password}
          onChange={handleChange}
        />
        <button className="form-button login" type="submit">
          Login
        </button>
        <button className="form-button register">
          <Link to="/signup">Register</Link>
        </button>
      </form>
    </div>
  );
};
export default Login;
