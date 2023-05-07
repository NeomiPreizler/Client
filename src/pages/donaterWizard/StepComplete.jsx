
import DonaterContext from "./DonaterContext"
import {useContext} from "react"
import { TextField, Button } from "@mui/material";

const StepComplete = () => {

  const { data, handleChange } = useContext(DonaterContext)
  return (
    <div>StepComplete</div>
  )
}

export default StepComplete