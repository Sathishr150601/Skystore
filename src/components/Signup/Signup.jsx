import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  let history = useNavigate();
  const re = /^[A-Za-z]+$/;
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]()?\w+)*(\.\w{2,3})+$/;

  const [Form1, setForm] = useState({
    title: "",
    fname: "",
    lname: "",
    email: "",
    cemail: "",
    pass: "",
    cpass: "",
    capacha: "",
    tc: false,
    pc: false
  });

  const saveData = () => {
    localStorage.setItem("Form1", JSON.stringify(Form1));
  };

  const [error, setError] = useState({
    title: "",
    fname: "",
    lname: "",
    email: "",
    cemail: "",
    pass: "",
    cpass: "",
    capacha: "",
    tc: false,
    pc: false
  });

  const onSubmit = (e) => {
    e.preventDefault();
    saveData();
    checkCheckbox1();
    checkCheckbox2();
    checkTitle();
    checkFname();
    checkLname();
    checkEmail();
    checkPass();
    valForm();
  };

  const onChange = (e) => {
    const { value, name, type, checked } = e.target;
    setForm((state) => ({
      ...state,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const valForm = () => {
    if (reg.test(Form1.email) && Form1.pass.trim().length >= 10) {
      alert("Form Submitted Successfully!");
      window.location.href = "/Signin";
    }
  };

  const checkTitle = () => {
    var title = document.getElementById("title");

    if (title.value == "Please select") {
      setError((state) => ({
        ...state,
        title: "Please choose your title"
      }));
    } else {
      setError((state) => ({
        ...state,
        title: ""
      }));
    }
  };

  const checkFname = () => {
    if (Form1.fname.trim() == "") {
      setError((state) => ({
        ...state,
        fname: "First Name cannot be empty"
      }));
    } else if (Form1.fname.trim().length < 5) {
      setError((state) => ({
        ...state,
        fname: "First Name must be more than 5 chanracters"
      }));
    } else if (re.test(Form1.fname)) {
      setError((state) => ({
        ...state,
        fname: ""
      }));
    } else {
      setError((state) => ({
        ...state,
        fname: "First Name must only contain alphabets"
      }));
    }
  };

  const checkLname = () => {
    if (Form1.lname.trim() == "") {
      setError((state) => ({
        ...state,
        lname: "Last Name cannot be empty"
      }));
    } else if (re.test(Form1.lname)) {
      setError((state) => ({
        ...state,
        lname: ""
      }));
    } else {
      setError((state) => ({
        ...state,
        lname: "Last Name must only contain alphabets"
      }));
    }
  };

  const checkEmail = () => {
    if (Form1.email.trim() == "") {
      setError((state) => ({
        ...state,
        email: "Email cannot be empty"
      }));
    } else if (reg.test(Form1.email)) {
      setError((state) => ({
        ...state,
        email: ""
      }));
    } else {
      setError((state) => ({
        ...state,
        email: "please ensure that the email contains @ and . symbols"
      }));
    }
  };

  const checkCemail = () => {
    if (Form1.email == Form1.cemail) {
      setError((state) => ({
        ...state,
        cemail: ""
      }));
    } else {
      setError((state) => ({
        ...state,
        cemail: "Email is not matching"
      }));
    }
  };

  const checkPass = () => {
    if (Form1.pass.trim() == "") {
      setError((state) => ({
        ...state,
        pass: "Password cannot be empty"
      }));
    } else if (Form1.pass.trim().length < 10) {
      setError((state) => ({
        ...state,
        pass: "Password is too short"
      }));
    } else {
      setError((state) => ({
        ...state,
        pass: ""
      }));
    }
  };

  const checkCpass = () => {
    if (Form1.pass == Form1.cpass) {
      setError((state) => ({
        ...state,
        cpass: ""
      }));
    } else {
      setError((state) => ({
        ...state,
        cpass: "Password is not matching"
      }));
    }
  };

  const checkCapacha = () => {
    if (Form1.capacha == "") {
      setError((state) => ({
        ...state,
        capacha: "Please fill captcha"
      }));
    } else {
      setError((state) => ({
        ...state,
        capacha: ""
      }));
    }
  };

  const checkCheckbox1 = () => {
    if (Form1.tc == false) {
      setError((state) => ({
        ...state,
        pc: ""
      }));
    } else {
      setError((state) => ({
        ...state,
        tc: ""
      }));
    }
  };

  const checkCheckbox2 = () => {
    if (Form1.pc == false) {
      setError((state) => ({
        ...state,
        pc: ""
      }));
    } else {
      setError((state) => ({
        ...state,
        pc: ""
      }));
    }
  };

  return (
    <div id="pageContentWrapper">
      <div id="header">
        <Link to="/">
          <div id="logo1"></div>
        </Link>
      </div>
      <div className="panel progressBarContainer" role="main">
        <div className="panelHeader">
          <h1 className="page-header-two">Create a Sky ID</h1>
          <div id="nav">
            <span id="preamble">Already have a Sky ID?</span>
            <ul>
              <li>
                <Link id="signinLink" to="/Signin">
                  Sign in
                </Link>
              </li>
              <li>
                <a id="helpLink" href="">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="subPanel">
          <form name="signup" id="skyIdForm" onSubmit={onSubmit}>
            <fieldset>
              <div className="formFieldsWrapper">
                <div className="pb">
                  <label for="title" className="label">
                    Title
                  </label>

                  <div id="titleSelect" className="error">
                    <select
                      className="formField selectFormField"
                      id="title"
                      name="title"
                      onChange={onChange}
                      value={Form1.title}
                      onBlur={checkTitle}
                    >
                      <option value={Form1.select}>Please select</option>
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Ms">Ms</option>
                      <option value="Miss">Miss</option>
                      <option value="Dr">Dr</option>
                      <option value="Rev">Rev</option>
                      <option value="Prof">Prof</option>
                      <option value="Other">Other</option>
                    </select>
                    {!!error.title && (
                      <div>
                        <i className="error">{error.title}</i>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pb">
                  <label>First name</label>
                  <input
                    type="text"
                    name="fname"
                    id="firstname"
                    value={Form1.fname}
                    onChange={onChange}
                    onBlur={checkFname}
                  />
                  {!!error.fname && (
                    <div>
                      <i className="error">{error.fname}</i>
                    </div>
                  )}
                </div>

                <div className="  ">
                  <label>Last name</label>
                  <input
                    type="text"
                    id="lastname"
                    name="lname"
                    value={Form1.lname}
                    onChange={onChange}
                    onBlur={checkLname}
                  />
                  {!!error.lname && (
                    <div>
                      <i className="error">{error.lname}</i>
                    </div>
                  )}
                </div>

                <div className="info">
                  <label>Email address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={Form1.email}
                    onChange={onChange}
                    onBlur={checkEmail}
                  />
                  {!!error.email && (
                    <div>
                      <i className="error">{error.email}</i>
                    </div>
                  )}
                </div>

                <div className="  ">
                  <label>Confirm email address</label>
                  <input
                    type="email"
                    id="cemail"
                    name="cemail"
                    value={Form1.cemail}
                    onChange={onChange}
                    onBlur={checkCemail}
                  />
                  {!!error.cemail && (
                    <div>
                      <i className="error">{error.cemail}</i>
                    </div>
                  )}
                </div>

                <div className="info">
                  <label>Password</label>
                  <input
                    type="password"
                    id="password"
                    name="pass"
                    value={Form1.pass}
                    onChange={onChange}
                    onBlur={checkPass}
                  />
                  {!!error.pass && (
                    <div>
                      <i className="error">{error.pass}</i>
                    </div>
                  )}
                </div>

                <div className="  ">
                  <label>Confirm password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="cpass"
                    value={Form1.cpass}
                    onChange={onChange}
                    onBlur={checkCpass}
                  />
                  {!!error.cpass && (
                    <div>
                      <i className="error">{error.cpass}</i>
                    </div>
                  )}
                </div>

                <div>
                  <div id="captchaContainer">
                    <div id="captchaImageWrapper">
                      <img
                        id="captchaImage"
                        src="https://skyid.sky.com/captcha/jpeg?width=200&height=60&cachebuster=1654653567034"
                        alt="CAPTCHA"
                        height="60"
                        width="200"
                      />
                    </div>
                  </div>

                  <p id="generateAnotherCaptcha">
                    If you can't read this,&nbsp;
                    <a
                      id="captchaReload"
                      href="#"
                      data-tracking-label="generate-new-captcha"
                    >
                      try another one
                    </a>
                  </p>
                </div>

                <div className="captchaInput text-field__input info">
                  <label for="captcha">Enter the characters in the box</label>
                  <input
                    type="text"
                    id="captcha"
                    name="capacha"
                    value={Form1.capacha}
                    onChange={onChange}
                    onBlur={checkCapacha}
                  />
                  {!!error.capacha && (
                    <div>
                      <i className="error">{error.capacha}</i>
                    </div>
                  )}
                </div>

                <div className="bravo charlie">
                  <input
                    className="custom"
                    type="checkbox"
                    id="termsAndConditions1"
                    name="tc"
                    value={Form1.tc}
                    onChange={onChange}
                  />
                  <label className="std chkboxlbl" for="termsAndConditions">
                    <span>
                      I have read and agree to the Sky Store
                      <a
                        id="serviceTermsAndConditionsLink"
                        href=""
                        target="blank"
                      >
                        terms &amp; conditions
                      </a>{" "}
                      and the Sky{" "}
                      <a id="termsAndConditionsLink" href="" target="blank">
                        terms &amp; conditions
                      </a>
                    </span>
                  </label>
                </div>
                {!!error.tc && (
                  <div>
                    <i className="error">{error.tc}</i>
                  </div>
                )}
                <div className="bravo">
                  <input
                    className="custom"
                    type="checkbox"
                    id="marketingOptOut"
                    name="pc"
                    value={Form1.pc}
                    onChange={onChange}
                  />
                  <label className="std chkboxlbl" for="marketingOptOut">
                    <span>
                      We’d like to use your contact details to update you about
                      offers, products and services. You are free to change your
                      mind at any stage in the future. You can view our{" "}
                      <a id="privacyPolicyLink" href="" target="blank">
                        Privacy &amp; Cookies Notice
                      </a>{" "}
                      on Sky.com. If this is OK please tick here.
                    </span>
                  </label>
                </div>
                {!!error.pc && (
                  <div>
                    <i className="error">{error.pc}</i>
                  </div>
                )}

                <div className="buttonRow">
                  <button
                    id="submitButton"
                    className=" skyBtn csi"
                    type="submit"
                  >
                    Create Sky iD
                  </button>
                  <a
                    id="cancelButton"
                    className="cancelLink"
                    onClick={() => history(-1)}
                  >
                    Cancel
                  </a>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
