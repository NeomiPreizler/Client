import DonaterContext from "./DonaterContext"
import {useContext} from "react"
import { Checkbox, Select, MenuItem, FormControlLabel } from "@mui/material";

const Step3MedicalInfo = () => {

  const { data, handleChange } = useContext(DonaterContext)


  return (
    <>
     
      <div className="form-text">
      <FormControlLabel
control={
    <Checkbox 
    name="high_blood_pressure"
    id="high_blood_pressure"
    checked={data.high_blood_pressure}
    label="high_blood_pressure"
    onChange={handleChange}
  />
}
label=" high_blood_pressure"/>
   
    
        </div>   
        {data.high_blood_pressure}
      <div className="form-text">
      <Select
    labelId="blood_type"
    name="blood_type"
    id="blood_type"
    value={data.blood_type}
    error={!data.blood_type}
    label="blood_type"
    onChange={handleChange}
  >
    <MenuItem value={'O+'}>O+</MenuItem>
    <MenuItem value={'O-'}>O-</MenuItem>
  </Select>
        </div>   
       
       
       
       
       
      
        
      
      
    </>
  );
};

export default Step3MedicalInfo;
