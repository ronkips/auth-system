import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // Sending the users credentials to the Node.js server
  const postSignUpDetails = () => {
    fetch("http://localhost:5000/api/register", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        tel,
        username
      }),

      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })

      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ email, username, tel, password });
    postSignUpDetails();
    setEmail("");
    setTel("");
    setUsername("");
    setPassword("");
  };
  const gotoLoginPage = () => navigate("/");

  return (
    <div className="signup__container">
      <h2>Sign up </h2>
      <form className="signup__form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="tel">Phone Number</label>
        <input
          type="tel"
          name="tel"
          id="tel"
          value={tel}
          required
          onChange={(e) => setTel(e.target.value)}
        />
        <label htmlFor="tel">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          minLength={8}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="signupBtn">SIGN UP</button>
        <p>
          Already have an account?{" "}
          <span className="link" onClick={gotoLoginPage}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
