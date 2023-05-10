import DonaterContext from "./DonaterContext"
import {useContext} from "react"
import { TextField, Box,Button } from "@mui/material";


const Step1BMI = ({handleNext}) => {
  const { data, handleChange } = useContext(DonaterContext)
  return (    
    <Box sx={{display:"flex", flexDirection:"column", gap:1}}>
          <TextField
            id="height"
            name="height"
            label="Height"
            error={!data.height}
            value={data.height}
            onChange={handleChange}
          />
        <TextField
            id="weight"
            name="weight"
            label="Weight"
            error={!data.weight}
            value={data.weight}
            onChange={handleChange}
          />
          <TextField
            type="date"
            name="birthDate"
            id="birthDate"
            label="BirthDate"
            error={!data.birthDate}

            value={data.birthDate}
            onChange={handleChange}
          />
           <Button
           disabled={!data.height||!data.birthDate||!data.weight}
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {'Continue'}
                  </Button>
        </Box>    

  )
}
export default Step1BMI