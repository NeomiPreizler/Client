import DonaterStepsContainer from './DonaterStepsContainer'
import DonaterContext from "./DonaterContext"
import {useContext} from "react"
import { TextField, Button } from "@mui/material";

const DonaterContainer = () => {

    const {
        page,
        setPage,
        data,
        title,
        canSubmit,
        disablePrev,
        disableNext,
        handleSubmit
    } = useContext(DonaterContext);


    const handlePrev = () => setPage(prev => prev - 1)

    const handleNext = () => setPage(prev => prev + 1)


    const content = (
       

        <form className="form donator-form" onSubmit={handleSubmit}>

            <header className="form-header">
                <h2>{title[page]}</h2>

                <div className="button-container">
                    <Button variant="contained"   onClick={handlePrev} disabled={disablePrev}>Prev</Button>
                    <Button  variant="contained"  onClick={handleNext} disabled={disableNext}>Next</Button>
                    <Button  variant="contained"  type="submit"  disabled={!canSubmit}>Submit</Button>
                    
                </div>
            </header>
            <DonaterStepsContainer />
        </form>


)
return content
}
export default DonaterContainer