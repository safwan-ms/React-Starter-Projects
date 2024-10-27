import React, { useState } from "react";
import "../style.css";

const Form = () => {
  // UseStates for Input
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // UseStates for invalid input
  const [errorUser, setErrorUser] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  // UseStates for Color according to their input value
  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  // Submit Button Functionality
  const validate = (e) => {
    e.preventDefault();

    // UserName Conditions
    if (user.length > 8) {
      setErrorUser("");
      setUserColor("green");
    } else {
      setErrorUser("The username must contain a minimum of 8 characters.");
      setUserColor("red");
    }
    if (user == "") {
      setErrorUser("Kindly provide a Username");
    }

    // Email Conditions
    if (email.includes("@gmail.com")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("The email must contain a @gmail");
      setEmailColor("red");
    }
    if (email == "") {
      setErrorEmail("Kindly provide a Email");
    }

    // Password Conditions
    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setPasswordColor("red");
      setErrorPassword(
        "The password must contain atleast 8 characters or numbers"
      );
    }
    if (password == "") {
      setErrorPassword("Kindly provide a password");
    }

    // Confirm Password Conditions
    if (confirmPassword === password) {
      setConfirmPasswordColor("green");
      setErrorConfirmPassword("");
    } else {
      setConfirmPasswordColor("red");
      setErrorConfirmPassword(
        "Confirmed password does not match. Please try again."
      );
    }
    // If confirm password is empty
    if (confirmPassword === "") {
      setConfirmPasswordColor("red");
      setErrorConfirmPassword("Kindly provide a confirmation password");
    }
  };

  return (
    <div className="card">
      <div className="card-image"></div>
      <form>
        {/* UserName Input */}
        <input
          type="text"
          placeholder="Enter Your Name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          style={{ borderColor: userColor }}
        />
        <div className="error">{errorUser}</div>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ borderColor: emailColor }}
        />
        <div className="error">{errorEmail} </div>

        {/* Password Input   */}
        <input
          type="password"
          placeholder="Set Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ borderColor: passwordColor }}
        />
        <div className="error">{errorPassword}</div>

        {/* Confirm Password Input */}
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{ borderColor: confirmPasswordColor }}
        />
        <div className="error">{errorConfirmPassword}</div>

        {/* Validation Button */}
        <button className="submit-btn" onClick={validate}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
