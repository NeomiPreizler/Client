
import DonaterContext from "./DonaterContext"
import React, { useContext } from "react"
import Step1BMI from './Step1BMI'
import Step2UserDetails from './Step2UserDetails'
import Step3MedicalInfo from './Step3MedicalInfo'
import StepComplete from './StepComplete'
import { Box, StepLabel, StepContent, Step, Stepper, Button } from "@mui/material"

const DonaterStepsContainer = () => {
  const steps = [{ label: "label", component: <Step1BMI /> }]

  const display = {
    0: <Step1BMI />,
    1: <Step2UserDetails />,
    2: <Step3MedicalInfo />,
    3: <StepComplete />,
  }
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (<Box sx={{ maxWidth: 400 }}>
    <Stepper activeStep={activeStep} orientation="vertical">

      <Step>
        <StepLabel onClick={() => setActiveStep(0)}>
          BMI
        </StepLabel>
        <StepContent>
          <Step1BMI handleNext={handleNext} />    <Box sx={{ mb: 2 }}>
            <div>


            </div>
          </Box>
        </StepContent>

      </Step>
      <Step >
        <StepLabel onClick={() => setActiveStep(1)}
        >
          user details              </StepLabel>
        <StepContent>
          <Step2UserDetails handleNext={handleNext} />
        </StepContent>
      </Step>
      <Step >
        <StepLabel onClick={() => setActiveStep(2)}>
          user medical details  </StepLabel>
        <StepContent>
          <Step3MedicalInfo handleNext={handleNext}></Step3MedicalInfo>
        </StepContent>
      </Step>
      <Step >
        <StepLabel onClick={() => setActiveStep(3)}>
          submit  </StepLabel>
        <StepContent>
          <StepComplete handleNext={handleNext}></StepComplete>
        </StepContent>
      </Step>
    </Stepper>


  </Box>)
  // <Box sx={{display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:"red"}}>
  //     {display[page]}
  // </Box>

}
export default DonaterStepsContainer