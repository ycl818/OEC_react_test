import { useRef, useState, useEffect } from "react";
import { GoCheckCircle } from "react-icons/go";
import { GoXCircle } from "react-icons/go";
import { GoStop } from "react-icons/go";
import axios from "../../api/axios";
import { Link } from "react-router-dom";
import "../LoginForm/Login.css";

const USER_REGEX = /^[a-zA-Z][A-z0-9-_]{3,23}$/; // 4~24
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/; // 8~24
const REGISTER_URL = "/register";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // double check
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    console.log("submit", user, pwd);

    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data);
      console.log(response.accessToken);
      setSuccess(true);

      //  clear input
    } catch (error) {
      if (!error?.response) {
        setErrMsg("No Server Response.");
      } else if (error.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registeration Failed.");
      }

      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success !</h1>
          <p>
            <a href="#">Sign in</a>
          </p>
        </section>
      ) : (
        <section className="loginForm">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"} // make it still availble to screen reader
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              <span>Username:</span>
              <span className={validName ? "valid" : "hide"}>
                <GoCheckCircle />
              </span>
              <span className={validName || !user ? "hide" : "invalid"}>
                <GoXCircle />
              </span>
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="nameNote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p
              id="nameNote"
              className={
                userFocus && user && !validName ? "instructions" : "offscreen"
              }
            >
              <GoStop />
              4 to 24 characters.
              <br />
              Must begin with a a-z or A-Z. Letters, numbers, underscores,
              hyphens are allowed.
            </p>

            <label htmlFor="password">
              <span>Password:</span>
              <span className={validPwd ? "valid" : "hide"}>
                <GoCheckCircle />
              </span>
              <span className={validPwd || !pwd ? "hide" : "invalid"}>
                <GoXCircle />
              </span>
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="passwordNote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              id="passwordNote"
              className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
            >
              <GoStop />
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a number and a
              special character.
              <br />
              Allowed special characters:
              <span aria-label="exclamation mark">!</span>
              <span aria-label="at symbol">@</span>
              <span aria-label="hashtag">#</span>
              <span aria-label="dollar sign">$</span>
              <span aria-label="percent">%</span>
            </p>

            <label htmlFor="confirm_pwd">
              <span>Confirm Password:</span>
              <span className={validMatch && matchPwd ? "valid" : "hide"}>
                <GoCheckCircle />
              </span>
              <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                <GoXCircle />
              </span>
            </label>
            <input
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmNote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmNote"
              className={
                matchFocus && !validMatch ? "instructions" : "offscreen"
              }
            >
              <GoStop />
              Must match the first password input field.
            </p>

            <button
              disabled={!validName || !validPwd || !validMatch ? true : false}
            >
              Sign Up
            </button>
          </form>
          <p>
            Already registered?
            <br />
            <span className="line">
              <Link to="/login">Sign In</Link>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Register;
