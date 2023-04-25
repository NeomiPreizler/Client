import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const DonaterDetailsForm = () => {
  const [err, setErr] = useState(null);
  const [values, setValues] = useState()
  // const [first, setFirst] = useState(true);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
 
  
  const onSubmit = async (values) => {

    const userId = currentUser.userId;
    const role = 'DONATER';
    const idmedical_info_donater = values.userId;
    const idpersonal_info_donater = values.userId;
    try {
      if (values.id != '') {
        await axios.put("http://localhost:3600/api/donater", {values, userId, role, idmedical_info_donater, idpersonal_info_donater})
        console.log("returned");
        navigate('/')
      }
      else {
        await axios.post("http://localhost:3600/api/donater", values);

      }

    } catch (err) {
      setErr(err.response.data?.message);
    }
    navigate('/')
  }
  const { handleSubmit, getFieldProps } = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: values?.id || '',
      first_name: values?.first_name || '',
      last_name: values?.last_name || '',
      // avaliable: '',
      // has_pair: '',
      id_pair: values?.id_pair || '',
      //medical info table
      // idmedical_info_donater: values?.last_name|| '',
      height: values?.detailsMedical.height || '',
      weight: values?.weight || '',
      birthDate: values?.birthDate || '',
      gender: values?.gender || '',
      high_blood_pressure: values?.high_blood_pressure || false,
      blood_type: values?.blood_type || '',
      diabetes: values?.diabetes || false,
      kidney_diseases: values?.kidney_diseases || false,
      kidney_stones: values?.kidney_stones || false,
      hospitalized: values?.hospitalized || false,
      surgeries_in_the_past: values?.surgeries_in_the_past || false,
      heart_or_lung_dysfunction: values?.heart_or_lung_dysfunction || false,
      medication_regularly: values?.medication_regularly || false,
      suffer_from_allergies: values?.suffer_from_allergies || false,
      smoked_in_the_past: values?.smoked_in_the_past || false,
      smoking: values?.smoking || false,
      family_with_diabetes: values?.family_with_diabetes || false,
      born_before_37th_week: values?.born_before_37th_week || false,
      CT_examination: values?.CT_examination || false,
      cheast_examination: values?.cheast_examination || false,
      urine_Test: values?.urine_Test || false,
      psychological_evaluation: values?.psychological_evaluation || false,
      //personal info table
      // idpersonal_info_donater:  values?.idpersonal_info_donater|| '',
      city: values?.city || '',
      address: values?.address || '',
      country: values?.country || '',
      phone_number: values?.phone_number || '',
      cell_phone: values?.cell_phone || '',
      preferred_language: values?.preferred_language || '',
    },
    onSubmit
  })


  const loadDataUser = async () => {
    console.log("currentUser.userId", currentUser.userId);
    console.log(currentUser != null);

    if (currentUser != null) {
      console.log("currentUser.userIdaaa", currentUser.userId);
      try {
        const userDetails = await axios.get("http://localhost:3600/api/donater/" + currentUser.userId)

        // setFieldValue("id", userDetails.data.id);
        setValues(userDetails.data)
        // setValues(userDetails.data.donaterMedical)
        // setValues(userDetails.data.donaterPersonal)

        // console.log("userid",values.userId);


        console.log("work ok", userDetails);
      }
      catch (err) { setErr(err.response.data?.message) }
      // console.log("check name", values.first_name);
    }
  }
  useEffect(() => {
    console.log("use effect of donaters");
    loadDataUser();
  }, [])

  return (


    <Formik onSubmit={handleSubmit}>
      <Form>
        <br></br> <br></br> <br></br>
        <label htmlFor="id">id</label>
        <Field type="text" name="id"  {...getFieldProps("id")} />
        <br></br>
        <label htmlFor="firstName">FirstName</label>
        <Field type="text" name="first_name"  {...getFieldProps("first_name")} />
        <br></br>
        <label htmlFor="lastName">LastName</label>
        <Field type="text" name="last_name" {...getFieldProps("last_name")} />
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
  </Field>*/}

        <br></br>

        <label htmlFor="address">address</label>
        <Field type="text" name="address" {...getFieldProps("address")} />
        <br></br>
        <label htmlFor="country">country</label>
        <Field type="text" name="country" {...getFieldProps("country")} />
        <br></br>
        <label htmlFor="phone_number">phone_number</label>
        <Field type="text" name="phone_number"  {...getFieldProps("phone_number")} />
        <br></br>
        <label htmlFor="cell_phone">cell_phone</label>
        <Field type="text" name="cell_phone" {...getFieldProps("cell_phone")} />
        <br></br>
        <label htmlFor="preferred_language">preferred_language</label>
        <Field as="select" name="preferred_language"{...getFieldProps("preferred_language")} >
          <option value=""></option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Field>
        <br></br><br></br>
        <button type="submit" >
          Submit
        </button>
      </Form>

    </Formik>
  );
}


export default DonaterDetailsForm;