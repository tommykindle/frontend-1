import React from "react";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import '../SignUpForm/SignUpForm';
import axios from 'axios';




const SignUpForm = (props) => (

  < Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      console.log(values);
      const submitValues = { 'username': values.email, 'password': values.password }
      console.log(submitValues);
      axios.post("https://bw-friendfinder.herokuapp.com/createnewuser", submitValues)
        .then(res => axios.post("https://bw-friendfinder.herokuapp.com/login", `grant_type=password&username=${submitValues["username"]}&password=${submitValues["password"]}`, {
          headers: {
            Authorization: `Basic ${btoa('lambda-client-g:lambda-secret-g')}`,
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }))
        .then(res => {
          console.log(res)
          props.history.push("/createprofile")
        })
        .catch(err => console.log(err))
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);


    }}


    validationSchema={
      Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Required"),
        password: Yup.string()
          .required("No password provided.")
          .min(8, "Password  should be 8 chars minimum.")
          .matches(/(^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.{8,}))/, "Password must contain at least one uppercase character and one special character")
      })
    }
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <div className='formHolder'>
          <form onSubmit={handleSubmit}>
            <div className='Margin'>
              <h1>Friend Finder</h1>
              <p>Welcome: Please Sign Up </p>
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="text"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email && "error"}
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}
              <label htmlFor="email">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.password && touched.password && "error"}
              />
              {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
              )}
              <button type="submit" formAction="/createprofile">
                SignUp</button>
            </div>
          </form>
        </div>
      );
    }}
  </Formik >
);

export default SignUpForm;