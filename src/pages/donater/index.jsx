import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const DonaterDetailsForm = () => {
  const [err, setErr] = useState(null);
  const [dbValues, setDbValues] = useState({})
  // const [first, setFirst] = useState(true);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
 
  
const onSubmit = async (values) => {
  console.log("values", values)
console.log("ON SUBMIT")
    const userId = currentUser.userId;
    console.log("currentUser.userId",currentUser.userId)
    const role = 'DONATER';
    const idmedical_info_donater = userId;
    const idpersonal_info_donater = userId;
    console.log(currentUser.role,"currentUser.role");
    try {
      if (currentUser.role != null) {
        await axios.put("http://localhost:3600/api/donater",values)
       // await axios.put("http://localhost:3600/api/donater",{values, userId})
        // , idmedical_info_donater, idpersonal_info_donater})
        console.log("returned");
        //navigate('/')
      }
      else { 
        console.log(values, userId, role);   
         //needs to update the current user role 
        await axios.post("http://localhost:3600/api/donater",{ values, userId, role, idmedical_info_donater, idpersonal_info_donater});
      }

    } catch (err) {
      setErr(err.response.data?.message);
    }
    //navigate('/')
  }
  const { handleSubmit, getFieldProps } = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: dbValues?.id || '',
      first_name: dbValues?.first_name || '',
      last_name: dbValues?.last_name || '',
      // avaliable: '',
      // has_pair: '',
      id_pair: dbValues?.id_pair || '',
      //medical info table
      // idmedical_info_donater: dbValues?.last_name|| '',
      //height: dbValues?.detailsMedical.height || '',
      weight: dbValues?.weight || '',
      birthDate: dbValues?.birthDate || '',
      gender: dbValues?.gender || '',
      high_blood_pressure: dbValues?.high_blood_pressure || false,
      blood_type: dbValues?.blood_type || '',
      diabetes: dbValues?.diabetes || false,
      kidney_diseases: dbValues?.kidney_diseases || false,
      kidney_stones: dbValues?.kidney_stones || false,
      hospitalized: dbValues?.hospitalized || false,
      surgeries_in_the_past: dbValues?.surgeries_in_the_past || false,
      heart_or_lung_dysfunction: dbValues?.heart_or_lung_dysfunction || false,
      medication_regularly: dbValues?.medication_regularly || false,
      suffer_from_allergies: dbValues?.suffer_from_allergies || false,
      smoked_in_the_past: dbValues?.smoked_in_the_past || false,
      smoking: dbValues?.smoking || false,
      family_with_diabetes: dbValues?.family_with_diabetes || false,
      born_before_37th_week: dbValues?.born_before_37th_week || false,
      CT_examination: dbValues?.CT_examination || false,
      cheast_examination: dbValues?.cheast_examination || false,
      urine_Test: dbValues?.urine_Test || false,
      psychological_evaluation: dbValues?.psychological_evaluation || false,
      //personal info table
      // idpersonal_info_donater:  dbValues?.idpersonal_info_donater|| '',
      city: dbValues?.city || '',
      address: dbValues?.address || '',
      country: dbValues?.country || '',
      phone_number: dbValues?.phone_number || '',
      cell_phone: dbValues?.cell_phone || '',
      preferred_language: dbValues?.preferred_language || '',
    },
    onSubmit
  })


  const loadDataUser = async () => {
    console.log("currentUser.userId", currentUser.userId);
    console.log(currentUser != null);

    if (currentUser.role != null) {
      console.log("currentUser.userIdaaa", currentUser.userId);
      try {
        const userDetails = await axios.get("http://localhost:3600/api/donater/" + currentUser.userId)

        // setFieldValue("id", userDetails.data.id);
        setDbValues(userDetails.data)
        // setValues(userDetails.data.donaterMedical)
        // setValues(userDetails.data.donaterPersonal)

        // console.log("userid",values.userId);


        console.log("work ok", userDetails);
      }
      catch (err) {console.log("error"); }
       //  setErr(err.response.data?.message) }
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