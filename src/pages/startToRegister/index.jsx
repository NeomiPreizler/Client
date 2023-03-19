import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import { func } from 'prop-types';
import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';

export const InatialTest = () => {

 const {typeId} = useParams();
//  console.log(typeId)
// const handleClick=(values)=>{
//    console.log("cfjjhdfgjh")
// }
    const { handleSubmit, values, handleBlur, handleChange, getFieldProps } = useFormik({
        initialValues: {
            birthDate: new Date(),
            height: 0,
            weight: 0
        },
        onClick:(values)=>{console.log("bvfjkd")},
        onSubmit: (values) => {
            console.log("jjkglf;njk")
             Navigate("/donater");
            const check = check(values.birthDate, values.height, values.weight);
            if (typeof check == "boolean") {
                if (typeId === "donater")
                    Navigate("/donater")
                else Navigate("/needsDonation")
            }
            else {
                alert('nothing ');
            }
        },

    })
   const check = (birthDate, height, weight) => {
        const age = calculateAge(birthDate);
        const bmi = calculateBMI(height, weight);
        if (age < 20) {
            return "your younger then age 20";
        }

        if (bmi < 18.5 || bmi > 24.9) {
            return "we are sorry your bmi does not stand in the criteria"
        }
        git add .
git commit -a -m "Notes about the commit"
git push origin main 
        return true;
    }
    function calculateAge(birthDate) {
        const correntDate = new Date();
        const diff = Math.abs(correntDate - birthDate);
        const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        return age
    }
    function calculateBMI(weight, height) {
        const bmi = (weight / Math.pow((height / 100), 2)).toFixed(1);
        return bmi;
    }


    return (
        <>

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>

                    <TextField type="date" onChange={handleChange} id="margin-none" label="Date Of Birth" variant="outlined" />
                    <br></br><br></br>
                    <TextField onChange={handleChange} id="margin-none" label="hight" variant="outlined" />
                    <br></br><br></br>
                    <TextField onChange={handleChange} id="margin-none" label="wight" variant="outlined" />

                </div>
                 <Button type='submit' /*onClick={handleClick(values)}*/ variant="text">ok</Button> 
            </Box>
            {/* <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="fullWidth" id="fullWidth" />
    </Box> */}

        </>
    )
}

export default InatialTest;