import React, { useState } from "react";
import "./LoginPage.css";
import loginimg from "../../assets/loginpage/loginimg.png";
import arrowimg from "../../assets/loginpage/arrow-right-circle.png";
import emailpng from "../../assets/dashboard/ic_baseline-mail.png";
import passwordpng from "../../assets/loginpage/carbon_view-off.png";
import { Link, useNavigate } from "react-router-dom";
import {
  axiosGenreateOtp,
  axiosLoginPost,
  axiosVerifyOtp,
} from "../../../axiosServices";
const LoginPage = () => {
  const [validationError, setValidationError] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [passwordInputField, setPasswordInputField] = useState(false);
  const [otpfield, setOtpfield] = useState(false);
  const [forgotpassword, setForgotPassword] = useState(true);
  const [intitialForgotPassword, setIntialForgotPassword] = useState(true);
  const [loginbtn, setLoginbtn] = useState(true);
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // handle password
  const handlePassword = () => {
    setPasswordInputField(true);
    setForgotPassword(!forgotpassword);
    setIntialForgotPassword(false);
    setOtpfield(false);
    setLoginbtn(false);
  };
  //hanlde otp
  const handleOtp = () => {
    setPasswordInputField(false);
    setLoginbtn(true);
    setForgotPassword(!forgotpassword);
    setIntialForgotPassword(true);
  };

  // handleEmailChange

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setValidationError(false);
  };

  const handleOtpfield = async (e) => {
    try {
      const res = await axiosGenreateOtp("/generateOtp", { email });
      setLoginbtn(false);
      setOtpfield(true);
      setIntialForgotPassword(false);
      console.log(res);
    } catch (err) {
      if (err.response.status === 406) {
        setValidationError("You are not a existing user register now..!");
        setTimeout(() => {
          navigate("/signup");
        }, 3000);
      }
      console.log(err);
    }

    console.log("otp clicked");
  };

  function handleOtpChange(e, index) {
    if (isNaN(e.target.value)) return false;
    setOtp([
      ...otp.map((data, indx) => (indx === index ? e.target.value : data)),
    ]);

    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  }

  // hanlde login click

  const handleLoginClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosLoginPost("/login", { email, password });
      console.log(res);

      if (res.status === 200) {
        setLoginMessage("login successfull");
        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);
      }
    } catch (err) {
      console.log("error received");
      if (err.response.status === 500) {
        setValidationError("You are not a existing user register now..!");
        setTimeout(() => {
          navigate("/signup");
        }, 3000);
      } else {
        setValidationError("invalid username or password");
      }
    }
  };

  // handle otp login click:

  const handleOtpLogin = async () => {
    const otpvalue = otp.join("");
    try {
      const res = await axiosVerifyOtp("/verifyOtp", { email, otp: otpvalue });
      if (res.status === 200) {
        setLoginMessage("login successfull");
        setTimeout(() => {
          navigate("/dashboard");
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
              <h1>Log In</h1>
              <p>
                Don’t have an account?{" "}
                <span>
                  <Link to="/signup">Sign up</Link>
                </span>
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-inputfield">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter email here "
                  value={email}
                  onChange={handleEmailChange}
                ></input>
                <div>
                  {" "}
                  <img src={emailpng}></img>
                </div>
              </div>
              {passwordInputField && (
                <>
                  <div className="form-inputfield">
                    <label>Password</label>
                    <input
                      type="password"
                      placeholder="Enter password here"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <div>
                      <img src={passwordpng}></img>
                    </div>
                  </div>

                  <div className="otppassword-btn">
                    <button
                      type="submit"
                      className={email ? "activebtnclr" : "login-btn"}
                      onClick={handleLoginClick}
                    >
                      Login
                    </button>
                    {forgotpassword ? (
                      <p onClick={handlePassword}>Use Password to login</p>
                    ) : (
                      <p onClick={handleOtp}>Forgot password, send OTP</p>
                    )}
                  </div>
                </>
              )}
              {otpfield && (
                <>
                  <div className="otp-inputfield">
                    <label>Otp</label>
                    <div className="otp-box">
                      {otp.map((data, index) => {
                        return (
                          <input
                            type="text"
                            key={index}
                            value={data}
                            maxLength={1}
                            onChange={(e) => handleOtpChange(e, index)}
                          ></input>
                        );
                      })}
                    </div>
                    <div className="otppassword-btn">
                      <button
                        type="submit"
                        className={email ? "activebtnclr" : "login-btn"}
                        onClick={handleOtpLogin}
                      >
                        Login
                      </button>
                      {forgotpassword ? (
                        <p onClick={handlePassword}>Use Password to login</p>
                      ) : (
                        <p onClick={handleOtp}>Forgot password, send OTP</p>
                      )}
                    </div>
                  </div>
                </>
              )}

              <div className="otppassword-btn">
                {loginbtn && (
                  <button
                    type="submit"
                    onClick={handleOtpfield}
                    className={email ? "activebtnclr" : "sendotp-btn"}
                  >
                    Send OTP
                  </button>
                )}
                {intitialForgotPassword && (
                  <p onClick={handlePassword}>Use Password to login</p>
                )}
              </div>
            </form>
            {validationError && (
              <h3 className="validation-error">{validationError}</h3>
            )}

            {loginMessage && (
              <h1 className="login-successful">Login Sucessfull...!</h1>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
