
import DonaterContext from "./DonaterContext"
import { useContext } from "react"
import { TextField, Button } from "@mui/material";

const StepComplete = () => {

  const { handleSubmit, data } = useContext(DonaterContext)
  return (<>
    <Button style={{ background: "#7bb28c" }} onClick={() => { handleSubmit(data) }}>Submit</Button>
    <div>StepComplete</div>
  </>
  )
}

export default StepComplete