import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const DonaterDetailsForm = () => {
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    console.log(values, "valuesvalues");
    console.log("post");
     values.userId=localStorage.getItem("userId");
     values.idmedical_info_donater=values.id;
     values.idpersonal_info_donater=values.id;
console.log("idddddddd",values.idmedical_info_donater);
console.log(values);
console.log("BLOOD TYPE",values.blood_type);
    try {
      await axios.post("http://localhost:3600/api/donaters", values );
      navigate('/')

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
      avaliable: '',
      has_pair: '',
      id_pair: '',
      //medical info table
      idmedical_info_donater: '',
      hight: '',
      weight: '',
      birthDate: '',
      gender: 'FEMALE',
      high_blood_pressure: false,
      blood_type:'O+',
      diabetes: false,
      kidney_diseases: false,
      kidney_stones: false,
      hospitalized: false,
      surgeries_in_the_past:false,
      heart_or_lung_dysfunction: false,
      medication_regularly: false,
      suffer_from_allergies: false,
      smoked_in_the_past: false,
      smoking: false,
      family_with_diabetes: false,
      born_before_37th_week: false,
      CT_examination: false,
      cheast_examination: false,
      urine_Test: false,
      psychological_evaluation: false,
      //personal info table
      idpersonal_info_donater: '',
      city: '',
      address: '',
      country: '',
      phone_number: 123,
      cell_phone: 2345,
      preferred_language: '',


    },
    onSubmit
  })
 
  
  return (
    <Formik onSubmit={handleSubmit}>
      <Form>
        <label htmlFor="id">id</label>
        <Field type="text" name="id" {...getFieldProps("id")} />
        <br></br>
        <label htmlFor="userName">userId</label>
        <Field type="text" name="userId" {...getFieldProps("userName")} />
        <br></br>
        <label htmlFor="firstName">FirstName</label>
        <Field type="text" name="first_name" {...getFieldProps("firstName")} />
        <br></br>
        <label htmlFor="lastName">LastName</label>
        <Field type="text" name="last_name" {...getFieldProps("lastName")} />
        <br></br>
        <label htmlFor="lastName">avaliable</label>
        <Field type="text" name="avaliable" {...getFieldProps("lastName")} />
        <br></br>
        <label htmlFor="lastName">has_pair</label>
        <Field type="text" name="has_pair" {...getFieldProps("lastName")} />
        <br></br>
        <label htmlFor="id_pair">id_pair</label>
        <Field type="text" name="id_pair" {...getFieldProps("id_pair")} />
        <br></br>

        <label htmlFor="city">city</label>
        <Field type="text" name="city" {...getFieldProps("city")} />

        {/* <Field as="select" name="city">
                <option value=""></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Field> */}
        <br></br>

        <label htmlFor="street">street</label>
        <Field type="text" name="street" {...getFieldProps("street")} />
        <br></br>

        <label htmlFor="num_street">num_street</label>
        <Field type="text" name="num_street"  {...getFieldProps("num_street")} />
        <br></br>

        <label htmlFor="country">country</label>
        <Field type="text" name="country"  {...getFieldProps("country")} />
        <br></br>
        {/* <label htmlFor="phone_number">phone_number</label>
        <Field type="text" name="phone_number"  {...getFieldProps("phone_number")} />
        <br></br>
        <label htmlFor="cell_phone">cell_phone</label>
        <Field type="text" name="cell_phone" {...getFieldProps("cell_phone")} /> */}
        <br></br>
        <label htmlFor="preferred_language">preferred_language</label>
        <Field as="select" name="preferred_language"  {...getFieldProps("preferred_language")} >
          <option value=""></option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Field>
        <br></br>
        <button type="submit" >
          Submit
        </button>
      </Form>

    </Formik>
  );
}


export default DonaterDetailsForm;