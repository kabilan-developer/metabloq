import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";

import {  Stack } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";


function SignIn() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [viewPwd, setViewPwd] = useState(true);
  const navigate = useNavigate()

  const viewIconClick = () => {
    if (viewPwd === false) {
      setViewPwd(true);
    } else {
      setViewPwd(false);
    }
  };

  const Login = (e) => {
    e.preventDefault();
    let data = {
      email,
      password,
    };
    setemail("");
    setpassword("");
    localStorage.setItem('@user',email)
    console.log("data", data);
    localStorage.setItem('@loggedin',"allow")
    navigate("/");
  };
  return (
    <div className="signup_container">
      <Stack gap={3}>
        <div className="text-right">
          <font size="1">English (IN)</font>
        </div>
        <h4 className="font-weight-bold">Welcome back,</h4>
        <form className="signup-form" onSubmit={Login}>
          <Stack gap={3}>
            <input
             value={email}
             onChange={(e)=> setemail(e.target.value)}
              type="text"
              placeholder="Email Address"
              className="login_input" 
              required
            />
               <div className="signup_password-input">
              <input
                type={viewPwd ? "password" : "input"}
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="Password"
                className="login_input"
                required
              />
              <span onClick={viewIconClick}>
                {viewPwd ? (
                  <BiShow color="#838383" size={18} />
                ) : (
                  <BiHide color="#838383" size={18} />
                )}
              </span>
            </div>
            <button type="submit" className="metablog_primary-filled-square-button">
              <small className="font-weight-bold">Log In</small>
            </button>
          </Stack>
        </form>
        <div className="d-flex">
          <button className="metablog_gradient-borderless-button">
            <small>Forget password</small>
          </button>
        </div>
      </Stack>
    </div>
  );
}

export default SignIn;
