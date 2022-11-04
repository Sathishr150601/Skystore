import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signin.css";
import skylogo from "../../images/skylogo.png";

export default function SigninNew() {
  let form1 = JSON.parse(window.localStorage.getItem("Form1"));

  const [form, setForm] = useState({
    name: "",
    pass: "",
    agree: false
  });

  const [error, setError] = useState({
    name: "",
    pass: "",
    msg: ""
  });

  const onChange = (e) => {
    const { value, name, type, checked } = e.target;
    setForm((state) => ({
      ...state,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.name == "" || form.pass == "") {
      userName();
      passWord();
    } else if (form1 == null) {
      alert("Account Not Found! Sign up for New Account");
    } else if (form.name == form1.email && form.pass == form1.pass) {
      alert("Login Successfull!");
      window.location.href = "/";
    } else {
      alert("Email or Password is Incorrect!");
    }
  };

  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]()?\w+)*(\.\w{2,3})+$/;

  const userName = () => {
    if (form.name.trim() == "") {
      setError((state) => ({
        ...state,
        name: "Email or Username cannot be empty"
      }));
    } else if (form.name.trim().length < 5) {
      setError((state) => ({
        ...state,
        name: "Email or Username must atleast contain 5 characters"
      }));
    } else if (reg.test(form.name)) {
      setError((state) => ({
        ...state,
        name: ""
      }));
      return;
    } else {
      setError((state) => ({
        ...state,
        name: "Please ensure that email contains @ and . Symbols"
      }));
    }
  };

  const passWord = () => {
    if (form.pass.trim() == "") {
      setError((state) => ({
        ...state,
        pass: "Password cannot be empty"
      }));
      return;
    } else if (form.pass.trim().length < 10) {
      setError((state) => ({
        ...state,
        pass: "password must be more than 10 characters"
      }));
    } else {
      setError((state) => ({
        ...state,
        pass: ""
      }));
    }
  };

  return (
    <div className="signinPage">
      <div className="signinBox">
        <div className="signinContainer">
          <div className="signinPanel">
            <div className="signinPanelheader">
              <div className="siginHeader">
                <Link to="/">
                  <img className="signinLogo" src={skylogo} alt="signin-logo" />
                </Link>
              </div>
              <div className="signinsignup">
                <span>
                  New to Sky iD? <Link to="/Signup">Sign up</Link>
                </span>
              </div>
              <div className="signinSubpanel">
                <h3 className="signinHeaderone">Sign in</h3>
                <form onSubmit={onSubmit}>
                  <div className="signinFormwrapper">
                    <div>
                      <label>Email or Username</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        onBlur={userName}
                      />
                    </div>
                    {!!error.name && (
                      <div>
                        <i className="error">{error.name}</i>
                      </div>
                    )}
                    <div>
                      <label>Password</label>
                      <input
                        type="password"
                        name="pass"
                        value={form.pass}
                        onChange={onChange}
                        onBlur={passWord}
                      />
                    </div>
                    {!!error.pass && (
                      <div>
                        <i className="error">{error.pass}</i>
                      </div>
                    )}
                    <div>
                      <p>
                        Forgotten
                        <a href=""> username </a> or
                        <a href=""> password</a>?
                      </p>
                    </div>
                    <div className="signinflex">
                      <input
                        type="checkbox"
                        name="agree"
                        value={form.agree}
                        onChange={onChange}
                        className="signincustom"
                      />
                      <label className="signinstd"> Remember my username</label>
                    </div>
                    <div>
                      <p>
                        <a href="">Privacy & Cookies Notice</a>
                      </p>
                    </div>
                    <div className="signinbuttonrow">
                      <button className="signinbtn skybtn">Sign in</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="signinNewtoskyid">
              <h3 className="signinheadertwo">New to Sky iD?</h3>
              <p>
                You'll need a Sky iD before you can access some of our services.
              </p>
              <p>
                If you have signed up for another Sky online service you already
                have one.
              </p>
              <div className="signinbuttonrow signinflex">
                <p>
                  More about <a href="">Sky iD</a>
                </p>
                <button className="skybtn">
                  <Link to="/Signup" className="LstBtn">
                    Sign up
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="signinBgimg"></div>
        <div className="footer">
          <hr className="footerHr"></hr>
          <div className="footerLinks">
            <ul>
              <li>
                <a href="#" className="footerTexts">
                  Privacy & Cookies Notice
                </a>
              </li>
              <div className="footerVerticalHr" />

              <li>
                <a href="#" className="footerTexts">
                  Terms & Conditions
                </a>
              </li>
              <div className="footerVerticalHr" />

              <li>
                <a href="#" className="footerTexts">
                  Accessibility Information
                </a>
              </li>
              <li>
                <a href="#" className="footerTexts">
                  Feedback
                </a>
              </li>
              <span className="footer2022">© 2022 Sky UK</span>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
