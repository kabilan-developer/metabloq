import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";

import { Col, Image, Row, Stack } from "react-bootstrap";
const google = require("../../assets/login/google.png");
const facebook = require("../../assets/login/facebook.png");
const linkedin = require("../../assets/login/linkedin.png");
const twitter = require("../../assets/login/twitter.png");

function SignIn() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [viewPwd, setViewPwd] = useState(true);

  const viewIconClick = () => {
    if (viewPwd == false) {
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
    console.log("data", data);
  };
  return (
    <div className="signup_container">
      <Stack gap={3}>
        <div className="text-right">
          <font size="1">English (IN)</font>
        </div>
        <h4 className="font-weight-bold">Welcome back,</h4>
        <Row >
          <Col md={3} lg={3} xl={3} xxl={3} sm={6} xs={6} className="mb-2">
            <div className="d-sm-flex signup_social-icons-box">
            <Image fluid src={google} alt="google" height={10} width={20} />
            <font size="1" className="text-dark mx-1">
              Google
            </font>
            </div>
          </Col>
          <Col md={3} lg={3} xl={3} xxl={3} sm={6} xs={6} className="mb-2">
          <div className="d-sm-flex signup_social-icons-box">
            <Image fluid src={facebook} alt="google" height={10} width={20} />
            <font size="1" className="text-dark mx-1">
              Facebook
            </font>
            </div>
          </Col>
          <Col md={3} lg={3} xl={3} xxl={3} sm={6} xs={6} className="mb-2">
          <div className="d-sm-flex signup_social-icons-box">
            <Image fluid src={linkedin} alt="google" height={10} width={20} />
            <font size="1" className="text-dark mx-1">
              LinkedIn
            </font>
            </div>
          </Col>
          <Col md={3} lg={3} xl={3} xxl={3} sm={6} xs={6} className="mb-2">
          <div className="d-sm-flex signup_social-icons-box">
            <Image fluid src={twitter} alt="google" height={10} width={20} />
            <font size="1" className="text-dark mx-1">
              Twitter
            </font>
            </div>
          </Col>
        </Row>
        <small className="text-center">-OR-</small>
        <form className="signup-form" onSubmit={Login}>
          <Stack gap={3}>
            <input
             value={email}
             onChange={(e)=> setemail(e.target.value)}
              type="text"
              placeholder="Email Address"
              className="editprofile_input"
            />
               <div className="signup_password-input">
              <input
                type={viewPwd ? "password" : "input"}
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="Password"
                className="editprofile_input"
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
