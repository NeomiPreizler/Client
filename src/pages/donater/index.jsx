import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const DonaterDetailsForm = () => {
  const [err, setErr] = useState(null);
  // const [first, setFirst] = useState(true);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  // const { firstTimeIn, signedIn } = useContext(AuthContext);
  // const { donater } = useParams();

  // console.log(donater, "typppppppe");
  const onSubmit = async (values) => {
    // if (firstTimeIn == true) console.log("true sarale true");
    // if (firstTimeIn == false) console.log("false sarale false");
    // if (first == true) console.log("true first true");
    // if (first == false) console.log("false first false");
    values.userId = currentUser.userId;
    values.idmedical_info_donater = values.userId;
    values.idpersonal_info_donater = values.userId;
    // values.role = donater
    try {
      if (values.id != '') {
        await axios.put("http://localhost:3600/api/donater", values)
        // navigate('/')
      }
      else {
        await axios.post("http://localhost:3600/api/donater", values);
       
      }

    } catch (err) {
      setErr(err.response.data?.message);
    }
     navigate('/')
  }
  const { values, setFieldValue, handleSubmit, getFieldProps } = useFormik({

    initialValues: {
      role: 'DONATER',
      userId: '',
      id: '',
      first_name: '',
      last_name: '',
      avaliable: '',
      has_pair: '',
      id_pair: '',
      //medical info table
      idmedical_info_donater: '',
      hight: '1.9',
      weight: '',
      birthDate: '',
      gender: 'FEMALE',
      high_blood_pressure: false,
      blood_type: 'O+',
      diabetes: false,
      kidney_diseases: false,
      kidney_stones: false,
      hospitalized: false,
      surgeries_in_the_past: false,
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


  const loadDataUser = async () => {
    console.log("currentUser.userId", currentUser.userId);
    console.log(currentUser != null);

    if (currentUser != null) {
      console.log("currentUser.userIdaaa", currentUser.userId);
      try {
        const userDetails = await axios.get("http://localhost:3600/api/donater/" + currentUser.userId)
        // setFieldValue(userDetails.data.id, userDetails.data.userId) 
        // if (userDetails.data.donaterMedical.idmedical_info_donater != null) { signedIn(); setFirst(false); }

        values.id = userDetails.data.id;
        values.first_name = userDetails.data.first_name;
        values.last_name = userDetails.data.last_name;
        values.avaliable = userDetails.data.avaliable;
        values.id_pair = userDetails.data.id_pair;
        //medical
        //values.hight=userDetails.donaterMedical.hight;
        //values.weight=userDetails.donaterMedical.weight;
        //values.medication_regularly=userDetails.donaterMedical.medication_regularly;
        //values.smoking=userDetails.donaterMedical.smoking;
        //personal
        values.city = userDetails.data.donaterPersonal.city;
        values.address = userDetails.data.donaterPersonal.address;
        values.country = userDetails.data.donaterPersonal.country;
        values.phone_number = userDetails.data.donaterPersonal.phone_number;
        values.cell_phone = userDetails.data.donaterPersonal.cell_phone;
        values.preferred_language = userDetails.data.donaterPersonal.preferred_language;
        console.log("work ok", userDetails);
      }
      catch (err) { setErr(err.response.data?.message) }





      console.log("check name", values.first_name);

    }

  }
  useEffect(() => {
    console.log("use effect");
    loadDataUser();
  }, [])

  return (


    <Formik onSubmit={handleSubmit}>
      <Form>
        <br></br> <br></br> <br></br>
        <label htmlFor="id">id</label>
        <Field type="text" name="id" value="id" placeholder={values.id} {...getFieldProps("id")} />
        <br></br>
        <label htmlFor="firstName">FirstName</label>
        <Field type="text" name="first_name" value="first_name" placeholder={values.first_name} {...getFieldProps("first_name")} />
        <br></br>
        <label htmlFor="lastName">LastName</label>
        <Field type="text" name="last_name" {...getFieldProps("last_name")} />
        <br></br>
        <label htmlFor="id_pair">id_pair</label>
        <Field type="text" name="id_pair" {...getFieldProps("id_pair")} />
        <br></br>
        <label htmlFor="city">city</label>
        <Field type="text" name="city" placeholder={values.city}{...getFieldProps("city")} />

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