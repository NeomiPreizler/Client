import DonaterStepsContainer from './DonaterStepsContainer'
import DonaterContext from "./DonaterContext"
import {useContext} from "react"
import { TextField, Button,Box } from "@mui/material";

const DonaterContainer = () => {

    const {
        page,
        title,
        handleSubmit
    } = useContext(DonaterContext);

    const content = (
       

        <form className="form donator-form" onSubmit={handleSubmit}>
{/* {title[page]} */}
            <header className="form-header">
                <h2>Details completion form</h2>
                <h4>You must fill all fields to proceed to the next step</h4>
            </header>
            <DonaterStepsContainer />
        </form>


)
return content
}
export default DonaterContainer