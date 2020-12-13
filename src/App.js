import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const loginInputEl = useRef(null);
  const passwordInputEl = useRef(null);
  const formEl = useRef(null);
  useEffect(() => {
    function onFormSubmit(event) {
      let prevent = false;
      if (!loginInputEl.current.value) {
        loginInputEl.current.focus();
        prevent = true;
      }
      if (!passwordInputEl.current.value && !prevent) {
        passwordInputEl.current.focus();
        prevent = true;
      }
      prevent && event.preventDefault();
    }
    formEl.current.addEventListener("submit", onFormSubmit, false);
    return () => formEl.current.removeEventListener("submit", onFormSubmit);
  }, []);
  return (
    <div className="App">
      <div className="page">
        <div className="form">
          <div className="form-title">User Login</div>
          <form action="/" noValidate ref={formEl}>
            <div className="form-field">
              <label htmlFor="form-login" className="field-input">
                <input
                  tabIndex="1"
                  id="form-login"
                  className="field-input__input"
                  placeholder=" "
                  name="login"
                  ref={loginInputEl}
                  required
                />
                <span className="field-input__label" data-icon="👤">
                  User Name
                </span>
              </label>
            </div>
            <div className="form-field">
              <label htmlFor="form-password" className="field-input">
                <input
                  tabIndex="1"
                  id="form-password"
                  className="field-input__input"
                  placeholder=" "
                  name="password"
                  ref={passwordInputEl}
                  required
                  type="password"
                />
                <span className="field-input__label" data-icon="🔒">
                  Password
                </span>
              </label>
            </div>
            <div className="form-field">
              <label htmlFor="keep-signin" className="field-checkbox">
                <input
                  type="checkbox"
                  tabIndex="1"
                  name="keep"
                  id="keep-signin"
                  className="field-checkbox__checkbox"
                />
                Keep me signed in
              </label>
            </div>
            <div className="form-controls">
              Need an account?{" "}
              <a href="/" tabIndex="0">
                Sign up
              </a>
              <br />
              Forgot password?{" "}
              <a href="/" tabIndex="0">
                Restore
              </a>
            </div>
            <div className="form-buttons">
              <button tabIndex="1" type="submit" className="form-button">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
