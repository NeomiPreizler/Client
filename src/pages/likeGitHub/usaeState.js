import React, { useState } from "react";

function UseState() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showUsername, setShowUsername] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setShowUsername(true);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setShowPassword(true);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data (e.g. submit to a server)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} required />
      </label>
      {showUsername && (
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} required />
        </label>
      )}
      {showPassword && (
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </label>
      )}
      <button type="submit">Register</button>
    </form>
  );
}
export default UseState;