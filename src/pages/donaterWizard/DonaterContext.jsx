import { createContext, useState, useEffect } from "react"
import { AuthContext } from "../../context/authContext"
import { useContext } from "react";
import axios from "axios";
import { boolean } from "yup";
import { useNavigate } from "react-router-dom";
const DonaterContext = createContext({})

export const DonaterProvider = ({ children }) => {
  const navigate = useNavigate()
  const title = {
    0: 'BMI',
    1: 'User Details',
    2: 'Medical Info',
    3: 'Submit'
  }
  const required = {
    0: ["height", "weight", "birthDate"],
    1: ["id", "first_name", "last_name", "id_pair", "city", "address", "country", "phone_number", "cell_phone", "gender"],
    2: ["blood_type"],
    3: []
  }

  const [page, setPage] = useState(0)

  const [data, setData] = useState({
    role: 'DONATER',
    height: '',
    weight: '',
    birthDate: '',
    id: '',
    first_name: '',
    last_name: '',
    city: '',
    address: '',
    country: '',
    phone_number: '',
    cell_phone: '',
    id_pair: '',
    //medical info table
    gender: '',
    high_blood_pressure: false,
    blood_type: '',
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
    preferred_language: '',
  })

  const { currentUser, token } = useContext(AuthContext);

  const handleChange = e => {
    const type = e.target.type

    const name = e.target.name

    const value = type === "checkbox"
      ? e.target.checked
      : e.target.value
    setData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const loadDataUser = async () => {
    console.log("currentUser", currentUser)
    if (currentUser && currentUser?.role != null) {
      try {
        const { data } = await axios.get(
          "http://localhost:3600/api/donater/donator", config
        );
        console.log("this is the orignal data", data)
        //merge object
        let mergeObj = {
          ...data,
          ...data.donaterMedical,
          ...data.donaterPersonal,
        };
        if (mergeObj.birthDate) {
          mergeObj.birthDate = new Date(mergeObj.birthDate).toISOString().slice(0, 10)
        }
        setData(mergeObj);
      } catch (err) {
        console.log("error");
      }

    }
  };
  useEffect(() => {
    loadDataUser();
  }, []);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      if (currentUser.role != null) {
        await axios.put("http://localhost:3600/api/donater", data, config);
       // navigate('/')
      } else {
        await axios.post("http://localhost:3600/api/donater", data, config);
      }
    } catch (err) {
      console.log(err);
    }
    navigate('/')
  };




  //////////////////////////////////////
  const disablePrev = page === 0

  //////////////////////////////////////
  const canSubmit = [...Object.values(required)].every(a => a.map(key => data[key]).every(v => v))
  const canNextPage = required[page].map(key => data[key]).every(v => v)


  const disableNext = !canNextPage || (page === (Object.keys(title).length - 1))



  return (
    <DonaterContext.Provider value={{ title, page, setPage, data, setData, canSubmit, handleChange, disablePrev, disableNext, handleSubmit }}>
      {children}
    </DonaterContext.Provider>
  )
}

export default DonaterContext 