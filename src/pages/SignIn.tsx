import { useState, useRef, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { Link } from "react-router-dom";
import axios from "../api - axios (test)/axios";
const LOGIN_URL = "/auth";

export default function LogIn() {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server response.");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password.");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized.");
      } else {
        setErrMsg("Login Failed.");
      }
      errRef.current.focus();
    }
  };
  return (
    <section>
      {success ? (
        <section>
          <h1>You are logged in.</h1>
          <br />
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
            aria-live="assertive" //Makes the ARIA reads the error msg once it appears
          >
            {errMsg}
          </p>
          <div className="flex flex-col justify-center items-center px-6 lg:px-8 py-12 min-h-full">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 font-bold font-cairo text-2xl text-center text-white leading-9 tracking-tight">
                Sign in
              </h2>
            </div>
            <div className="sm:mx-auto mt-10 sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <label
                  className="block font-cairo font-medium text-sm text-white text-xl leading-6"
                  htmlFor="username"
                >
                  Username:{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="block border-0 shadow-sm py-1.5 p-4 rounded-md w-full text-gray-900 placeholder:text-gray-400 outline-[#0ba47e] ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-inset focus:ring-[#0ba47e] sm:text-sm sm:leading-6"
                    type="text"
                    id="username"
                    placeholder="Your existing username or e-mail address"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                  />
                </div>
                <label
                  className="block font-cairo font-medium text-sm text-white text-xl leading-6"
                  htmlFor="password"
                >
                  Password:{" "}
                </label>
                <input
                  className="block border-0 shadow-sm py-1.5 p-4 rounded-md w-full text-gray-900 placeholder:text-gray-400 outline-[#0ba47e] ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-inset focus:ring-[#0ba47e] sm:text-sm sm:leading-6"
                  type="password"
                  id="password"
                  placeholder="Your account password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                />
                <button className="flex justify-center bg-[#0ba47e] hover:bg-[#0ba47e]shadow-sm px-3 py-1.5 rounded-md w-full font-semibold text-sm text-white leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0ba47e]">
                  Sign in
                </button>
              </form>
            </div>
          </div>
          <div className="flex justify-center m-0">
            <p>
              <span className="line">
                No account yet?{" "}
                <Link to="/sign-up">
                  <span className="font-semibold text-white hover:text-[#0ba47e] leading-6">
                    Sign up!
                  </span>
                </Link>
              </span>
            </p>
          </div>
        </section>
      )}
    </section>
  );
}
