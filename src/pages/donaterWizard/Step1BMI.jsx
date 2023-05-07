import DonaterContext from "./DonaterContext"
import {useContext} from "react"
import { TextField, Button } from "@mui/material";


const Step1BMI = () => {
  const { data, handleChange } = useContext(DonaterContext)
  return (    
    <>
    <div className="form-text">
          <TextField
            id="height"
            name="height"
            label="Height"
            error={!data.height}
            value={data.height}
            onChange={handleChange}
          />
        </div>
        <div className="form-text">
        <TextField
            id="weight"
            name="weight"
            label="Weight"
            error={!data.weight}
            value={data.weight}
            onChange={handleChange}
          />
        </div>
        <div className="form-text">
          <TextField
            type="date"
            name="birthDate"
            id="birthDate"
            label="BirthDate"
            error={!data.birthDate}

            value={data.birthDate}
            onChange={handleChange}
          />
        </div>
    
    </>
    

  )
}
export default Step1BMI