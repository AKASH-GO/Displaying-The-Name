import "./App.css";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (firstName && lastName) setFullName(`${firstName} ${lastName}`);
  }
  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name: </label>
        <input
          value={firstName}
          type="text"
          id="firstName"
          name="firstName"
          required
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label htmlFor="lastName">Last Name: </label>
        <input
        value={lastName}
          type="text"
          id="lastName"
          name="lastName"
          required
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {fullName && <div>Full Name: {fullName}</div>}
    </div>
  );
}

export default App;