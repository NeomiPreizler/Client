import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required")
  });
  
  function FormikReg() {
    return (
      <div className="form-container">
        <Formik
          initialValues={{ email: "", username: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values); // You can handle submission logic here
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" id="email" />
                {errors.email && touched.email && <div className="error">{errors.email}</div>}
              </div>
              {touched.email && (
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Field type="text" name="username" id="username" />
                  {errors.username && touched.username && (
                    <div className="error">{errors.username}</div>
                  )}
                </div>
              )}
              {touched.username && (
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Field type="password" name="password" id="password" />
                  {errors.password && touched.password && (
                    <div className="error">{errors.password}</div>
                  )}
                </div>
              )}
              <button type="submit" className="submit-button" disabled={!touched.password}>
                Register
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
  
  export default FormikReg;
  