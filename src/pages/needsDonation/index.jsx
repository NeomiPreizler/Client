import React, {useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { AuthContext } from '../../context/authContext';
import {useContext} from "react";

const NeedsDonationDetailsForm = () => {

  const [values,setValues]=useState();
  const navigate = useNavigate();
  const {currentUser}=useContext(AuthContext);

  const onSubmit = async (values) => {
    console.log("i'm in onSubmit function", values.id);
    const userId = currentUser.userId;
    const role='NEEDSDONATION';

   
    try {
      if(currentUser.role!=null){
        await axios.put("http://localhost:3600/api/needDonation", {values,userId});
    
      }
      else{
        await axios.post("http://localhost:3600/api/needDonation",{ values,userId,role});
      }

    } catch (err) {
      console.log(err);
   
    }
    navigate('/')
  }
  const { handleSubmit, getFieldProps } = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: values?.id || '',
      first_name: values?.first_name || '',
      last_name: values?.last_name || '',
      id_pair: values?.id_pair || '',
      //medical info table
      height: values?.height || 7,
      weight: values?.weight || 7,
      birthDate: values?.birthDate || '',
      blood_type: values?.blood_type || 'O+',
      gender: values?.gender || 'FEMALE',
      cause_of_kidney_failure: values?.cause_of_kidney_failure || '',
      dialysis_type: values?.dialysis_type || 'HEMODIALYSIS',
      dialysis_start_date: values?.dialysis_start_date || '',
      past_kidney_donation: values?.past_kidney_donation || false,
      antibodies: values?.antibodies || false,
      heart_rate_check: values?.heart_rate_check || false,
      psychosocial_assessment: values?.psychosocial_assessment || false,
      surgical_procedure: values?.surgical_procedure || false,
      //personal info table
      city: values?.city || '',
      address: values?.address || '',
      country: values?.country || '',
      phone_number: values?.phone_number || '',
      cell_phone: values?.cell_phone || '',
      preferred_language: values?.preferred_language || '',
    },
    onSubmit,
  })
  const loadDataUser= async()=>{
    if (currentUser.role!=null){
      console.log("in load something");
      console.log(currentUser.userId);
      try{
    const userDetails = await axios.get(`http://localhost:3600/api/needDonation/${currentUser.userId}`);
    setValues(userDetails.data)
   }
   catch(err){
    console.log(err);
   }
    }
  
   
  }

  
  useEffect(()=>{
    console.log("use effect of needsDonation"); 
    loadDataUser();
  },[])

  return (
    <Formik onSubmit={handleSubmit}>
      <Form>
        <label htmlFor="id">id</label>
        <Field type="text" name="id" value={values?.id} {...getFieldProps("id")} />
        <br></br>
        <label htmlFor="firstName">FirstName</label>
        <Field type="text" name="first_name" {...getFieldProps("first_name")} />
        <br></br>
        <label htmlFor="lastName">LastName</label>
        <Field type="text" name="last_name" {...getFieldProps("last_name")} />
        <br></br>
        <label htmlFor="id_pair">id_pair</label>
        <Field type="text" name="id_pair" {...getFieldProps("id_pair")} />
        <br></br>
        <label htmlFor="blood_type">blood_type</label>
        <Field as="select" name="blood_type" {...getFieldProps("blood_type")}>
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
        <label htmlFor="gender">gender</label>
        <Field as="select" name="gender"{...getFieldProps("gender")}>
          <option value=""></option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
        </Field>
        <br></br>
        <label htmlFor="cause_of_kidney_failure">cause_of_kidney_failure</label>
        <Field type="text" name="cause_of_kidney_failure" {...getFieldProps("cause_of_kidney_failure")} />
        <br></br>
        <label htmlFor="dialysis_type">dialysis_type</label>
        <Field as="select" name="dialysis_type" {...getFieldProps("dialysis_type")}>
          <option value="PERITONEAL DIALYSIS">PERITONEAL DIALYSIS</option>
          <option value="HEMODIALYSIS">HEMODIALYSIS</option>
        </Field>
        <br></br>
        <label htmlFor="past_kidney_donation">past_kidney_donation</label>
        <Field as="select" name="past_kidney_donation" {...getFieldProps("past_kidney_donation")} >
          <option value="true">true</option>
          <option value="false">false</option>
        </Field> 
        <br></br>
        <label htmlFor="antibodies">antibodies</label>
        <Field as="select" name="antibodies" {...getFieldProps("antibodies")} >
          <option value="true">true</option>
          <option value="false">false</option>
        </Field>
        <br></br>
        <label htmlFor="heart_rate_check">heart_rate_check</label>
        <Field as="select" name="heart_rate_check" {...getFieldProps("heart_rate_check")} >
          <option value="true">true</option>
          <option value="false">false</option>
        </Field> 
        <br></br>
        <label htmlFor="psychosocial_assessment">psychosocial_assessment</label>
        <Field as="select" name="psychosocial_assessment" {...getFieldProps("psychosocial_assessment")} >
          <option value="true">true</option>
          <option value="false">false</option>
        </Field>
        <br></br>
        <label htmlFor="surgical_procedure">surgical_procedure</label>
        <Field as="select" name="surgical_procedure" {...getFieldProps("surgical_procedure")} >
          <option value="true">true</option>
          <option value="false">false</option>
        </Field>
        <br></br>
        <label htmlFor="city">city</label>
        <Field type="text" name="city"  {...getFieldProps("city")} />
        <br></br>
        <label htmlFor="address">address</label>
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
        <Field as="select" name="preferred_language"  {...getFieldProps("preferred_language")} >
          <option value="hebrew">hebrew</option>
          <option value="english">english</option>
        </Field>
        <br></br>
        <button type="submit" >
          Submit
        </button>
      </Form>

    </Formik >
  );
}

export default NeedsDonationDetailsForm;