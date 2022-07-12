import React, { useState } from "react";
import "./Styles.css";
import { Stack } from "react-bootstrap";
import { BiShow, BiHide } from "react-icons/bi";

function SignUp() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [viewPwd, setViewPwd] = useState(true);

  const viewIconClick = () => {
    if (viewPwd === false) {
      setViewPwd(true);
    } else {
      setViewPwd(false);
    }
  };

  const createAccount = (e) => {
    e.preventDefault();
    let data = {
      username,
      email,
      password,
    };
    setusername("");
    setemail("");
    setpassword("");
    console.log("data", data);
  };
  return (
    <div className="signup_container">
      <Stack gap={3}>
        <div className="text-right">
          <font size="1">English (IN)</font>
        </div>
        <h4>Create Account</h4>
        <form className="signup-form" onSubmit={createAccount}>
          <Stack gap={3}>
            <input
              value={username}
              onChange={(e) => setusername(e.target.value)}
              type="text"
              placeholder="User Name"
              className="login_input"
            />
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="text"
              placeholder="Email Address"
              className="login_input"
            />
            <div className="signup_password-input">
              <input
                type={viewPwd ? "password" : "input"}
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="Password"
                className="login_input"
              />
              <span onClick={viewIconClick}>
                {viewPwd ? (
                  <BiShow color="#838383" size={18} />
                ) : (
                  <BiHide color="#838383" size={18} />
                )}
              </span>
            </div>
            <button
              type="submit"
              className="metablog_primary-filled-square-button"
            >
              <small className="font-weight-bold">Create Account</small>
            </button>
          </Stack>
        </form>
        <div className="d-flex justify-content-center">
          <span>Already have an account?</span>
          <button className="metablog_gradient-borderless-button">
            <small>Login</small>
          </button>
        </div>
      </Stack>
    </div>
  );
}

export default SignUp;
