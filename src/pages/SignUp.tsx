import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../api - axios (test)/axios";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/sign-up";

const SignUp = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState<string>("");
  const [validName, setValidName] = useState<boolean>(false);
  const [userFocus, setUserFocus] = useState<boolean>(false);

  const [pwd, setPwd] = useState<string>("");
  const [validPwd, setValidPwd] = useState<boolean>(false);
  const [pwdFocus, setPwdFocus] = useState<boolean>(false);

  const [matchPwd, setMatchPwd] = useState<string>("");
  const [validMatch, setValidMatch] = useState<boolean>(false);
  const [matchFocus, setMatchFocus] = useState<boolean>(false);

  const [errMsg, setErrMsg] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    // Result returns boolean which is passed to setValidName
    setValidName(result);
    // console.log(user);
    // console.log(result);
  }, [user]);

  useEffect(() => {
    const result: boolean = PWD_REGEX.test(pwd);
    setValidPwd(result);
    const match: boolean = pwd === matchPwd;
    setValidMatch(match);
    // console.log(pwd);
    // console.log(result);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Prevents skipping validation via console
    const validateUser = USER_REGEX.test(user);
    const validatePwd = PWD_REGEX.test(pwd);
    if (!validateUser && !validatePwd) {
      setErrMsg("Invalid entry.");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data);
      console.log(response.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server response.");
      } else if (err.response?.status === 409) {
        setErrMsg("Username taken.");
      } else {
        setErrMsg("Registration failed.");
      }
      errRef.current.focus();
    }
  };
  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <Link to="/sign-in">Sign In</Link>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={
              errMsg
                ? "errmsg text-center bg-red-300 font-cairo text-2xl"
                : "offscreen absolute left-[-9999px]"
            }
            aria-live="assertive" //Makes the ARIA reads the error
          >
            {errMsg}
          </p>
          <div className="flex flex-col justify-center items-center px-6 lg:px-8 py-12 min-h-full">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 font-bold font-cairo text-2xl text-center text-white leading-9 tracking-tight">
                Create a new account
              </h2>
            </div>
            <div className="sm:mx-auto mt-10 sm:w-full sm:max-w-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Username */}
                <div className="mt-0">
                  <label
                    htmlFor="username"
                    className="block font-cairo font-medium text-sm text-white text-xl leading-6"
                  >
                    Username:{" "}
                    <span
                      className={validName ? "valid text-green-500" : "hidden"}
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span
                      className={
                        validName || !user ? "hidden" : "invalid text-red-500"
                      }
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </span>
                  </label>{" "}
                  <br />
                  <input
                    className="block border-0 shadow-sm py-1.5 p-4 rounded-md w-full text-gray-900 placeholder:text-gray-400 ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-inset focus:ring-[#0ba47e] sm:text-sm sm:leading-6 outline-[#0ba47e]"
                    required
                    placeholder="Username (e.g. aabdelnasser101)"
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off" //Disables previous entered suggestions
                    onChange={(e) => setUser(e.target.value)}
                    aria-invalid={validName ? "false" : "true"} //Reads 'The value entered by the user has failed validation.'
                    aria-describedby="uidnote" //Gives a description to the ARIA to read
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                  />
                  <p
                    id="uidnote"
                    className={
                      userFocus && user && !validName
                        ? "instructions bg-black bg-opacity-95 text-white p-4 rounded-xl mt-6"
                        : "offscreen absolute left-[-9999px]"
                    }
                  >
                    <FontAwesomeIcon icon={faInfoCircle} /> 4 to 24 characters.{" "}
                    <br />
                    Must begin with a letter. <br />
                    Letters, numbers, underscores and Hyphens are allowed.
                  </p>
                </div>
                {/* Password  */}
                <label
                  htmlFor="password"
                  className="block font-cairo font-medium text-sm text-white text-xl leading-6"
                >
                  Password:{" "}
                  <span
                    className={validPwd ? "valid text-green-500" : "hidden"}
                  >
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span
                    className={
                      validPwd || !pwd ? "hidden" : "invalid text-red-500"
                    }
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </label>
                <input
                  className="block border-0 shadow-sm py-1.5 p-4 rounded-md w-full text-gray-900 placeholder:text-gray-400 ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-inset focus:ring-[#0ba47e] sm:text-sm sm:leading-6 outline-[#0ba47e]"
                  placeholder="Make sure to choose a strong password"
                  required
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  aria-invalid={validPwd ? "false" : "true"} //Reads 'The value entered by the user has failed validation.'
                  aria-describedby="pwdnote" //Gives a description to the ARIA to read
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                />
                <p
                  id="pwdnote"
                  className={
                    pwdFocus && pwd && !validPwd
                      ? "instructions bg-black bg-opacity-95 text-white p-4 rounded-xl"
                      : "offscreen absolute left-[-9999px]"
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} /> 4 to 24 characters.{" "}
                  <br />
                  Must incldue uppercase and lowercase letters, a number and a
                  special character. <br />
                  Allowed special characters are{" "}
                  <span aria-label="exclamation mark">!</span>{" "}
                  <span aria-label="at symbol">@</span>{" "}
                  <span aria-label="hashtag">#</span>{" "}
                  <span aria-label="dollar sign">$</span>{" "}
                  <span aria-label="percent symbol">%</span>
                </p>
                {/* Confirm password  */}
                <label
                  htmlFor="confirm_pwd"
                  className="block font-cairo font-medium text-sm text-white text-xl leading-6"
                >
                  Confirm Password:{" "}
                  <span
                    className={
                      validMatch && matchPwd ? "valid text-green-500" : "hidden"
                    }
                  >
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span
                    className={
                      validMatch || !matchPwd
                        ? "hidden"
                        : "invalid text-red-500"
                    }
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </label>
                <input
                  className="block border-0 shadow-sm py-1.5 p-4 rounded-md w-full text-gray-900 placeholder:text-gray-400 ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-inset focus:ring-[#0ba47e] sm:text-sm sm:leading-6 outline-[#0ba47e]"
                  placeholder="Re-enter your password"
                  required
                  type="password"
                  id="confirm_pwd"
                  onChange={(e) => setMatchPwd(e.target.value)}
                  aria-invalid={validMatch ? "false" : "true"} //Reads 'The value entered by the user has failed validation.'
                  aria-describedby="confirmnote" //Gives a description to the ARIA to read
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                />
                <p
                  id="confirmnote"
                  className={
                    matchFocus && !validMatch
                      ? "instructions bg-black bg-opacity-95 text-white p-4 rounded-xl"
                      : "offscreen absolute left-[-9999px]"
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} /> Must match the first
                  password field.
                </p>
                <button
                  className="flex justify-center bg-[#0ba47e] hover:bg-[#0ba47ede] disabled:opacity-50 shadow-sm px-3 py-1.5 rounded-md w-full font-semibold text-sm text-white leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0ba47e]"
                  disabled={
                    !validName || !validPwd || !validMatch ? true : false
                  }
                >
                  Sign up
                </button>
              </form>{" "}
            </div>
          </div>
          <div className="flex justify-center m-0">
            <p>
              <span className="line">
                Already registered?{" "}
                <Link to="/sign-in">
                  <span className="font-semibold text-white hover:text-[#0ba47ede] leading-6">
                    Sign in
                  </span>
                </Link>
              </span>
            </p>
          </div>
        </section>
      )}{" "}
    </>
  );
};
export default SignUp;
