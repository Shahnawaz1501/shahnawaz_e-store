import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [emailValidationTimeout, setEmailValidationTimeout] = useState(null); // Define emailValidationTimeout

  const maxAttempts = 5;

  const ValidateUser = () => {
    fetch("https://api.escuelajs.co/api/v1/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    ValidateUser();
  }, []);

  const handleEmailChange = (event) => {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    clearTimeout(emailValidationTimeout);

    if (!emailRegex.test(enteredEmail)) {
      setEmailValidationTimeout(
        setTimeout(() => {
          toast.error("Invalid Email");
        }, 5000)
      );
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      toast.success("Login successful");
      navigate("/");
    } else {
      setLoginAttempts((prevAttempts) => prevAttempts + 1);
      toast.error("Invalid Email or Password");

      if (loginAttempts >= maxAttempts - 1) {
        toast.error("Maximum login attempts reached");
      }
    }
    // setEmail("");
    setPassword("");
  };

  return (
    <div>
      <div id="loginform">
        <h2 id="headerTitle">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <label>Email Address*</label>
            <input
              type="text"
              placeholder="Enter Email Address"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="row">
            <label>Password*</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="forgotP">
            <span className="forgot-password">
              <a href="#">Forgot Password?</a>
            </span>
            <span className="remember-me">
              <input type="checkbox" id="remember-me" name="remember-me" />{" "}
              Remember Me
            </span>
          </div>
          <div id="button" className="row">
            <button>Login</button>
          </div>
        </form>
        <ToastContainer />
        <OtherMethods />
      </div>
    </div>
  );
}

const OtherMethods = () => (
  <div id="alternativeLogin">
    <label>Or sign in with:</label>
    <div id="iconGroup">
      <div className="social-icons">
        <a href="https://www.facebook.com">
          <div className="icon">
            <FaFacebookF size={14} />
          </div>
        </a>
        <a href="https://www.instagram.com">
          <div className="icon">
            <FaInstagram size={14} />
          </div>
        </a>
      </div>
    </div>
  </div>
);

export default Login;
