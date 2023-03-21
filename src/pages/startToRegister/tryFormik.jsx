import React from 'react';
import { Formik, Form, Field } from 'formik';

const MedicalFormFormik12 = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        allergies: '',
        medications: '',
        medicalHistory: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field type="text" name="firstName" />

          <label htmlFor="lastName">Last Name</label>
          <Field type="text" name="lastName" />

          <label htmlFor="dateOfBirth">Date of Birth</label>
          <Field type="date" name="dateOfBirth" />

          <label htmlFor="gender">Gender</label>
          <Field as="select" name="gender">
            <option value=""></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Field>

          <label htmlFor="allergies">Allergies</label>
          <Field type="text" name="allergies" />

          <label htmlFor="medications">Current Medications</label>
          <Field type="text" name="medications" />

          <label htmlFor="medicalHistory">Medical History</label>
          <Field type="text" name="medicalHistory" />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default MedicalFormFormik12;