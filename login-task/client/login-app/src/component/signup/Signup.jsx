import React, { useState } from "react";
import loginimg from "../../assets/loginpage/loginimg.png";
import arrowimg from "../../assets/loginpage/arrow-right-circle.png";
import { Link, useNavigate } from "react-router-dom";
import { axiosPost } from "../../../axiosServices";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");

  const navigate = useNavigate();
  // handle resiger submit
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axiosPost("/register", { username, email, password });
      setUsername("");
      setEmail("");
      setPassword("");
      if (res.status === 200) {
        setRegisterMessage("login successfull");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className="login-conatiner">
        <div className="login-leftcol">
          <img src={loginimg}></img>
          <div className="img-content">
            <h1>Welcome back </h1>
            <h1>to SS Platform</h1>
            <div className="arrow-img">
              <p>Log in to start your day </p>
              <img src={arrowimg}></img>
            </div>
          </div>
        </div>
        <div className="login-rightcol">
          <div className="login-rightcol-container">
            <div className="form-title">
              <h1>Register New Account</h1>
              <p>
                Already Registered?{" "}
                <span>
                  <Link to="/">Login In</Link>
                </span>
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-inputfield">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Enter your name here "
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                ></input>
              </div>
              <div className="form-inputfield">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your name here "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div className="form-inputfield">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
              <button
                type="submit"
                className={username ? "activebtnclr" : "login-btn"}
              >
                Register
              </button>
              <div>
                {registerMessage && (
                  <h1 className="login-successful">Register Sucessfull...!</h1>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
