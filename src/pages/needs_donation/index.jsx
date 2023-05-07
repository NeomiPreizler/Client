import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
const NeedsDonationDetailsForm = () => {
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    console.log(values, "valuesvalues");
    console.log("post");
    try {
      await axios.post("http://localhost:3600/api/needDonation", values);
      navigate('/profile')

    } catch (err) {
      setErr(err.response.data?.message);
    }
  }
  const { handleSubmit, getFieldProps } = useFormik({

    initialValues: {
      id: '',
      userId: '',
      first_name: '',
      last_name: '',
      has_pair: '',
      id_pair: '',
      //medical info table
      idmedical_info_needsdonations: '',
      blood_type: 'O-',
      height: '',
      weight: '',
      birthDate: '',
      gender: 'FEMALE',
      cause_of_kidney_failure: '',
      dialysis_type: 'HEMODIALYSIS',
      dialysis_start_date: undefined,
      past_kidney_donation: false,
      antibodies: false,
      heart_rate_check: false,
      psychosocial_assessment: false,
      surgical_procedure: false,
      //personal info table
      idpersonal_info_needsdonations: '',
      city: '',
      address: '',
      country: '',
      phone_number: '',
      cell_phone: '',
      preferred_language: '',
    },
    onSubmit,
  })

  return (
    <Formik onSubmit={handleSubmit}>
      <Form>
        <label htmlFor="id">id</label>
        <Field type="text" name="id" {...getFieldProps("id")} />
        <br></br>
        <label htmlFor="firstName">FirstName</label>
        <Field type="text" name="first_name" {...getFieldProps("firstName")} />
        <br></br>
        <label htmlFor="lastName">LastName</label>
        <Field type="text" name="last_name" {...getFieldProps("lastName")} />
        <br></br>
        <label htmlFor="id_pair">id_pair</label>
        <Field type="text" name="id_pair" {...getFieldProps("id_pair")} />
        <br></br>
        <label htmlFor="gender">gender</label>
        <Field as="select" name="gender"{...getFieldProps("gender")}>
          <option value=""></option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option></Field>
        <br></br>
        <label htmlFor="blood_type">blood_type</label>
        <Field as="select" name="blood_type" {...getFieldProps("gender")}>
          <option value=""></option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="A-">AB-</option>
          <option value="A-">AB+</option>
        </Field>
        <br></br>
        <label htmlFor="cause_of_kidney_failure">cause_of_kidney_failure</label>
        <Field type="text" name="cause_of_kidney_failure" {...getFieldProps("cause_of_kidney_failure")} />
        <br></br>
        <label htmlFor="dialysis_type">dialysis_type</label>
        <Field type="text" name="dialysis_type" {...getFieldProps("dialysis_type")}>
          <option value="PERITONEAL DIALYSIS">'peritoneal dialise'</option>
          <option value="HEMODIALYSIS">'hemo-dialise'</option></Field>
        <br></br>
        <label htmlFor="past_kidney_donation">street</label>
        <Field type="text" name="past_kidney_donation" {...getFieldProps("past_kidney_donation")} />
        <br></br>
        <label htmlFor="antibodies">street</label>
        <Field type="text" name="antibodies" {...getFieldProps("antibodies")} />
        <br></br>
        <label htmlFor="heart_rate_check">street</label>
        <Field type="text" name="heart_rate_check" {...getFieldProps("heart_rate_check")} />
        <br></br>
        <label htmlFor="psychosocial_assessment">street</label>
        <Field type="text" name="psychosocial_assessment" {...getFieldProps("psychosocial_assessment")} />
        <br></br>
        <label htmlFor="surgical_procedure">num_street</label>
        <Field type="text" name="surgical_procedure"  {...getFieldProps("surgical_procedure")} />
        <br></br>
        <label htmlFor="address">country</label>
        <Field type="text" name="address"  {...getFieldProps("address")} />
        <br></br>
        <label htmlFor="country">country</label>
        <Field type="text" name="country"  {...getFieldProps("country")} />
        <br></br>
        <label htmlFor="phone_number">phone_number</label>
        <Field type="text" name="phone_number"  {...getFieldProps("phone_number")} />
        <br></br>
        <label htmlFor="cell_phone">cell_phone</label>
        <Field type="text" name="cell_phone" {...getFieldProps("cell_phone")} />
        <br></br>
        <label htmlFor="preferred_language">preferred_language</label>
        <Field as="select" name="preferred_language"  {...getFieldProps("preferred_language")} />


        <br></br>
        <button type="submit" >
          Submit
        </button>
      </Form>

    </Formik >
  );
}

export default NeedsDonationDetailsForm;