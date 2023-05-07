
import DonaterContext from "./DonaterContext"
import {useContext} from "react"
import Step1BMI from './Step1BMI'
import Step2UserDetails from './Step2UserDetails'
import Step3MedicalInfo from './Step3MedicalInfo'
import StepComplete from './StepComplete'
const DonaterStepsContainer = () => {

    const { page } = useContext(DonaterContext)

    const display = {
        0: <Step1BMI />,
        1: <Step2UserDetails />,
        2: <Step3MedicalInfo />,
        3: <StepComplete />,
    }

    const content = (
        <>
            {display[page]}
        </>
    )


    return content
}
export default DonaterStepsContainer