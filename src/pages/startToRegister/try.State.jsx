import React, { useState } from "react";

function MedicalFormState() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [medicalHistory, setMedicalHistory] = useState("");
  const [symptoms, setSymptoms] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Date of Birth:", dob);
    console.log("Gender:", gender);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Medical History:", medicalHistory);
    console.log("Symptoms:", symptoms);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Date of Birth:
        <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
      </label>
      <br />
      <label>
        Gender:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Phone:
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>
      <br />
      <label>
        Medical History:
        <textarea value={medicalHistory} onChange={(e) => setMedicalHistory(e.target.value)} />
      </label>
      <br />
      <label>
        Current Symptoms:
        <textarea value={symptoms} onChange={(e) => setSymptoms(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MedicalFormState;