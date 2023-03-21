import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField, useFormikContext } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";
import "./styles.css";
import "./styles-custom.css";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className="checkbox">
        <input {...field} {...props} type="checkbox" />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

// Styled components ....
const StyledSelect = styled.select`
  color: var(--blue);
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

const MySelect = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

// And now we can use these
 const SignupForm = () => {
  return (
    <>
      <h1>Subscribe!</h1>
      <Formik
        initialValues={{
          id:'',
          userId:'',
          first_name: '',
          last_name: '',
          // avaliable:'',
          // has_pair:'',
          id_pair:'',
          // medical info table
          // // idmedical_info_donater:'',
          hight: '',
          weight: '',
          birthDate: '',
          gender: '',
          // high_blood_pressure: '',
          blood_type: '',
          // diabetes: '',
          // kidney_diseases: '',
          // kidney_stones: '',
          // hospitalized: '',
          // surgeries_in_the_past: '',
          // heart_or_lung_dysfunction: '',
          // medication_regularly: '',
          // suffer_from_allergies: '',
          // smoked_in_the_past: '',
          // smoking: '',
          // family_with_diabetes: '',
          // born_before_37th_week: '',
          // CT_examination:'',
          // cheast_examination:'' , 
          // urine_Test:'',
          // psychological_evaluation:'',
          ////personal info table
          idpersonal_info_donater:'',
          city: '',
          address: '',
          country: '',
          phone_number: '',
          cell_phone: '',
          preferred_language: '',
          acceptedTerms:false,
        }}
        validationSchema={Yup.object({
          first_name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          last_name: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          has_pair: Yup.string()
            .required("Required"),
          hight: Yup.string()
            .required("Required"),
          weight: Yup.string()
            .required("Required"),
          gender: Yup.string()
          .oneOf(
            ["male","female"],
            "Invalid gender Type"
          ).required("Required"),
          blood_type: Yup.string()
          .oneOf(
            ["A+","A-","B+","B-","AB+","AB-","O+","O-"],
            "Invalid blood Type"
          ).required("Required"),
          
          phone_number: Yup.string()
          .required("Required")
          .matches(
            /^(\+\d{1,2}-)?\(?\d{3}\)?[-]\d{7}$/,
            "Cell phone must have 12 digits at max"
          ),
          cell_phone: Yup.string()
            .required("Required")
            .matches(
              /^(\+\d{1,2}-)?\(?\d{3}\)?[-]\d{7}$/,
              "Cell phone must have 12 digits at max"
            ),
          preferred_language: Yup.string()
          .oneOf(
            ["English","Hebrew","French","Arabic","Flemish+","Russian","Spanish"],
            "Invalid languge Type"
          ).required("Required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise(r => setTimeout(r, 500));
          setSubmitting(false);
        }}
      >
        <Form>
        <MyTextInput
            label="ID"
            name="id"
            type="text"
            placeholder="Jane"
          />
          <MyTextInput
            label="userId"
            name="userId"
            type="text"
            placeholder="Jane"
          />
          <MyTextInput
            label="First Name"
            name="firs_tName"
            type="text"
            placeholder="Jane"
          />
          <MyTextInput
            label="Last Name"
            name="last_Name"
            type="text"
            placeholder="Doe"
          />
          <MyTextInput
            label="id_pair"
            name="id_pair"
            type="text"
            placeholder="32456745"
          />
          <MyTextInput
            label="hight"
            name="hight"
            type="text"
            placeholder="hight"
          />
           <MyTextInput
            label="weight"
            name="weight"
            type="text"
            placeholder="weight"
          />
           <MyTextInput
            label="birthDate"
            name="birthDate"
            type="date"
            placeholder="13/05/06"
          />
          <MySelect label="gender" name="gender">
            <option value="">Select a gender type</option>
            <option value="designer">male</option>
            <option value="development">female</option>
          </MySelect>
          <MySelect label="blood_type" name="blood_type">
            <option value="">Select a blood type</option>
            <option value="designer">A+</option>
            <option value="development">A-</option>
            <option value="product">B+</option>
            <option value="other">B-</option>
            <option value="other">AB+</option>
            <option value="other">AB-</option>
            <option value="other">O+</option>
            <option value="other">O-</option>
          </MySelect>
          <MyTextInput
            label="phone_number"
            name="phone_number"
            type="text"
            placeholder="5869234"
          />
           <MyTextInput
            label="cell_phone"
            name="cell_phone"
            type="text"
            placeholder="0567342345"
          />
          
          <MySelect label="preferred_language" name="preferred_language">
            <option value="">Select a preferred_language</option>
            <option value="designer">English</option>
            <option value="development">Hebrew</option>
            <option value="product">Arabic</option>
            <option value="other">Flemish</option>
            <option value="other">Russian</option>
            <option value="other">Spanish</option>
            
          </MySelect>
          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

// function App() {
//   return <SignupForm />;
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
export default SignupForm;