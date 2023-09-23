import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [login, setLogin] = useState({ password: "", email: "", username: "" });

  function handleChange(e) {
    const { name, value } = e && e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(login);
    setLogin({ username: "", email: "", password: "" });
  }

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" className="form-label">
          UserName
        </label>
        <input
          className="form-input"
          id="username"
          name="username"
          type="username"
          placeholder="Enter your Username"
          value={login.username}
          onChange={handleChange}
        />
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
          SignUp
        </button>
        <button className="form-button register">
          <Link to="/">login</Link>
        </button>
      </form>
    </div>
  );
};
export default Signup;
