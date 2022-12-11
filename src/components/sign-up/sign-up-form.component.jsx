import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../form-input/form-input.component";
import { REGISTER_USER } from "../../mutations/user.mutation";
import { alertMessage } from "../../utils/initial-state/initial-state";

const defaultFormValues = {
  fullName: "",
  firstName: "",
  lastName: "",
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  terms: "",
};
const SignUpForm = () => {
  const [formData, setFormData] = useState(defaultFormValues),
    [loading, setLoading] = useState(false),
    {
      fullName,
      firstName,
      lastName,
      name,
      email,
      password,
      confirmPassword,
      terms,
    } = formData,
    resetForm = () => {
      setFormData(defaultFormValues);
    },
    handleChange = (e) => {
      const { name, value } = e.target;
      let fullName;
      switch (name) {
        case "firstName":
          fullName = `${value} ${lastName}`;
          setFormData({ ...formData, [name]: value, fullName });
          break;
        case "lastName":
          fullName = `${firstName} ${value}`;
          setFormData({ ...formData, [name]: value, fullName });
          break;
        default:
          setFormData({ ...formData, [name]: value });
          break;
      }
    },
    [registerUser] = useMutation(REGISTER_USER, {
      variables: formData,
    }),
    handleSubmit = async (e) => {
      e.preventDefault();
      if (
        fullName.length === 0 ||
        name.length === 0 ||
        email.length === 0 ||
        password.length === 0 ||
        confirmPassword.length === 0
      ) {
        alertMessage("warn", "Please fill the blank spaces");
        return false;
      }

      if (password.length < 8) {
        alertMessage("warn", "Password must be greater than 8");
        return false;
      }
      if (password !== confirmPassword) {
        alertMessage("warn", "Password not matching");
        return false;
      }
      try {
        setLoading(true);
        await registerUser();
        alertMessage("success", "User was successfully registered");
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
        <h1>Create your account</h1>
        <span>Free access to our dashboard.</span>
      </div>
      <div className="col-6">
        <FormInput
          label="Full name"
          type="text"
          className="form-control form-control-lg"
          placeholder="John"
          name="firstName"
          value={firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-6">
        <FormInput
          label="&nbsp;"
          type="text"
          className="form-control form-control-lg"
          placeholder="Parker"
          name="lastName"
          value={lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-12">
        <FormInput
          label="User Name"
          type="text"
          className="form-control form-control-lg"
          placeholder="user_name"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
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
          label="Password"
          type="password"
          className="form-control form-control-lg"
          placeholder="8+ characters required"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-12">
        <FormInput
          label="Confirm Password"
          type="password"
          className="form-control form-control-lg"
          placeholder="8+ characters required"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-12">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={terms}
            id="flexCheckDefault"
            name="terms"
            onChange={handleChange}
            required
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            I accept the{" "}
            <a
              href="#!"
              title="Terms and Conditions"
              className="text-secondary"
            >
              Terms and Conditions
            </a>
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
            SIGN UP
          </button>
        )}
      </div>
      <div className="col-12 text-center mt-4">
        <span className="text-muted">
          Already have an account?{" "}
          <Link to="/login" title="Sign in" className="text-secondary">
            Sign in here
          </Link>
        </span>
      </div>
    </form>
  );
};

export default SignUpForm;
