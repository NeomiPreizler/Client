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

            <header className="form-header">
                <h2>{title[page]}</h2>
            </header>
            <DonaterStepsContainer />
        </form>


)
return content
}
export default DonaterContainer