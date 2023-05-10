import { TextField, Box, Button } from '@mui/material';
import { useFormik } from "formik";
import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as yup from 'yup';
import { AuthContext } from "../../context/authContext";

const validationSchema = yup.object({
    height: yup
        .number('Enter valid number')
        .required('Height is required'),
});
const InatialTest = () => {
    const navigate = useNavigate()

    const { type } = useParams();
    const { currentUser } = useContext(AuthContext)

    const onSubmit = () => {
        const message = checkDitials(values)
        if (message.type === String)
            alert(message);
        else
            navigate(`/needsDonation`)

    }

    const { values, handleSubmit, getFieldProps, errors } = useFormik({
        initialValues: {
            birthDate: new Date(),
            height: 7,
            weight: 0
        },
        validationSchema,
        onSubmit,
    })


    const checkDitials = (values) => {
        const age = calculateAge(values.birthDate);
        const bmi = calculateBMI(values.height, values.weight);
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

    useEffect(() => {
        if (currentUser != null)
            alert("You are not registered, you must register")
    })
    return (
        <>


            <form onSubmit={handleSubmit}
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
            </form>
        </>
    )
}

export default InatialTest;