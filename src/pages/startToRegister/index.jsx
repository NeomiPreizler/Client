import { TextField, Box, Button } from '@mui/material';
import { useFormik } from "formik";
import { func } from 'prop-types';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactDOM from 'react-dom';
import * as yup from 'yup';


const validationSchema = yup.object({
    height: yup
        .number('Enter valid number')
        .required('Height is required'),
});
export const InatialTest = () => {
    const navigate = useNavigate()

    const { type } = useParams();
    console.log({ type });
    const onSubmit = () => {
        // console.log("on submit",type)
        // const check = true;
        // if (typeof check == "boolean") {
            if (type === "donater")
                navigate(`/donater`)
            else navigate(`/needs-donation`)
        // }
        // else {
        //     alert(`${check}`);
        // }
    }

    const { handleSubmit, getFieldProps, errors } = useFormik({
        initialValues: {
            birthDate: new Date(),
            height: undefined,
            weight: 0
        },
        validationSchema,
        onSubmit,
    })
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    // };

    const checkDitials = (birthDate, height, weight) => {
        const age = calculateAge(birthDate);
        const bmi = calculateBMI(height, weight);
        if (age < 20) {
            return "your younger then age 20";
        }

        if (bmi < 18.5 || bmi > 24.9) {
            return "we are sorry your bmi does not stand in the criteria"
        }
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

            {/* <Box  */}
            <form onSubmit={handleSubmit}
                // component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                // noValidate
                autoComplete="off"
            >

                <TextField
                    type="date"
                    id="margin-none"
                    label="Date Of Birth"
                    variant="outlined"
                    {...getFieldProps("birthDate")
                    }

                />
                <br></br><br></br>
                <TextField
                    id="margin-none"
                    label="height"
                    variant="outlined"
                    error={errors?.height}
                    helperText={errors?.height}

                    {...getFieldProps("height")
                    } />
                <br></br><br></br>
                <TextField
                    name="weight"
                    id="margin-none"
                    label="wight"
                    variant="outlined"
                    {...getFieldProps("weight")
                    } />



                <Button type='submit' variant="text">ok</Button>
                {/* </Box> */}
                {/* <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="fullWidth" id="fullWidth" />
    </Box> */}
            </form>
        </>
    )
}

export default InatialTest;