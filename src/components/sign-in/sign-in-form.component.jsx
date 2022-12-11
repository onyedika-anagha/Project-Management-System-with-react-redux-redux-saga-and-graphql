import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

import FormInput from "../form-input/form-input.component";
import { GOOGLE_LOGIN, LOGIN_USER } from "../../mutations/user.mutation";
import { alertMessage } from "../../utils/initial-state/initial-state";
import googleSvg from "../../assets/img/google.svg";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../../store/user/user.actions";
import { AUTH_TOKEN } from "../../utils/helper/constants";

const defaultFormValues = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formData, setFormData] = useState(defaultFormValues),
    [loading, setLoading] = useState(false),
    { email, password } = formData,
    dispatch = useDispatch(),
    resetForm = () => {
      setFormData(defaultFormValues);
    },
    handleChange = (e) => {
      const { name, value } = e.target;

      setFormData({ ...formData, [name]: value });
    },
    [loginUser] = useMutation(LOGIN_USER, {
      variables: formData,
    }),
    [googleLogin] = useMutation(GOOGLE_LOGIN),
    googleSignIn = useGoogleLogin({
      onSuccess: async (res) => {
        console.log(res);
        const getUser = await fetch(
          `https://www.googleapis.com/oauth2/v3/userinfo`,
          {
            headers: {
              Authorization: `Bearer ${res.access_token}`,
              Accept: "application/json",
            },
          }
        );
        const response = await getUser.json();
        console.log(response);

        const { data } = await googleLogin({
          variables: { email: response.email },
        });

        dispatch(signInSuccess(data.googleLogin));
        sessionStorage.setItem(AUTH_TOKEN, data.googleLogin.token);
        alertMessage("success", "Login Successful");
        setLoading(false);
      },
    }),
    handleSubmit = async (e) => {
      e.preventDefault();
      if (email.length === 0 || password.length === 0) {
        alertMessage("warn", "Please fill the blank spaces");
        return false;
      }

      try {
        setLoading(true);
        const { data } = await loginUser();
        dispatch(signInSuccess(data.loginUser));
        sessionStorage.setItem(AUTH_TOKEN, data.loginUser.token);
        alertMessage("success", "Login Successful");
        setLoading(false);
        resetForm();
      } catch (error) {
        console.log("error: ", error.message);
        alertMessage("error", error.message);
        setLoading(false);
      }
    };
  return (
    <form className="row g-1 p-3 p-md-4" onSubmit={handleSubmit}>
      <div className="col-12 text-center mb-1 mb-lg-5">
        <h1>Sign in</h1>
        <span>Free access to our dashboard.</span>
      </div>
      <div className="col-12 text-center mb-4">
        <a
          className="btn btn-lg btn-outline-secondary btn-block"
          href="#!"
          onClick={googleSignIn}
        >
          <span className="d-flex justify-content-center align-items-center">
            <img
              className="avatar xs me-2"
              src={googleSvg}
              alt="Google sign in"
            />
            Sign in with Google
          </span>
        </a>
        <span className="dividers text-muted mt-4">OR</span>
      </div>
      <div className="col-12">
        <FormInput
          label="Email address"
          type="email"
          className="form-control form-control-lg"
          placeholder="name@example.com"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-12">
        <FormInput
          label={
            <span className="d-flex justify-content-between align-items-center">
              Password
              {/* <a className="text-secondary" href="auth-password-reset.html">
                Forgot Password?
              </a> */}
            </span>
          }
          type="password"
          className="form-control form-control-lg"
          placeholder="***************"
          autocomplete={false}
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-12">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Remember me
          </label>
        </div>
      </div>
      <div className="col-12 text-center mt-4">
        {loading ? (
          <button
            type="button"
            className="btn btn-lg btn-block btn-secondary lift text-uppercase"
          >
            <div
              class="spinner-border text-light"
              role="status"
              style={{ width: 20, height: 20 }}
            >
              <span class="sr-only"></span>
            </div>
          </button>
        ) : (
          <button
            type="submit"
            className="btn btn-lg btn-block btn-light lift text-uppercase"
          >
            SIGN IN
          </button>
        )}
      </div>
      <div className="col-12 text-center mt-4">
        <span className="text-muted">
          Don't have an account yet?{" "}
          <Link to="/register" className="text-secondary">
            Sign up here
          </Link>
        </span>
      </div>
    </form>
  );
};

export default SignInForm;
