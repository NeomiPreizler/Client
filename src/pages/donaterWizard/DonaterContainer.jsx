import DonaterStepsContainer from './DonaterStepsContainer'
import DonaterContext from "./DonaterContext"
import { useContext } from "react"
import { TextField, Button, Box } from "@mui/material";
import '../css/title.css'
const DonaterContainer = () => {

    const {
        page,
        title,
        handleSubmit
    } = useContext(DonaterContext);

    const content = (
        <>

            <form classNameName="form donator-form" onSubmit={handleSubmit}>
                {/* {title[page]} */}    <section className="page-title bg-1">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-center">
                                    <div className="divider mb-3 title"></div>
                                    <h1 className="text-capitalize mb-5 text-lg">Donater Form</h1>
                                    <div >
                                        <h2 className="form-header">Details completion form</h2>
                                        <h4 className="form-header">You must fill all fields to proceed to the next step</h4>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <DonaterStepsContainer/>
            </form>
        </>

    )
    return content
}
export default DonaterContainer