
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .max(30, 'Must be 30 characters or less')
    .required('Required'),
  age: Yup.number()
    .min(18, 'Must be at least 18 years old')
    .max(100, 'Must be 100 years old or less')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
});

const MedicalFormYup = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}

      <label htmlFor="age">Age</label>
      <input
        id="age"
        name="age"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.age}
      />
      {formik.touched.age && formik.errors.age ? (
        <div>{formik.errors.age}</div>
      ) : null}

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};

export default MedicalFormYup;