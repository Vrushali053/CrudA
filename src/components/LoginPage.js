// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const LoginPage = ({ onLogin }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (username === "admin" && password === "admin") {
//       onLogin();
//       navigate("/users");
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div style={{ marginTop: "100px", textAlign: "center" }}>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" /><br /><br />
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" /><br /><br />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      onLogin();
      navigate("/users");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2 className="login-title">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            required
          />
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
