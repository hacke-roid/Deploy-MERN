import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Main = () => {
  const [textData, setTextData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTextData({ ...textData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(textData);
    axios
      .post(
        "http://localhost:5500",
        {
          username,
          password,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log("Success:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error.response || error.message);
      });
  };

  const { username, password } = textData;

  return (
    <div>
      <section>
        <h1>Register Page</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <br />
            <input
              type="text"
              placeholder="Username"
              onChange={handleInputChange}
              name="username"
              value={username}
            />
            <br />
            <label>Password</label>
            <br />
            <input
              type="password"
              placeholder="Password"
              onChange={handleInputChange}
              name="password"
              value={password}
            />
            <br />
            <button type="submit">Login</button>
          </form>
          <Link to="/register">Register</Link>
        </div>
      </section>
    </div>
  );
};

export default Main;
