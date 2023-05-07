import DonaterContainer from "./DonaterContainer"
import { DonaterProvider } from "./DonaterContext"

function donaterForm() {
  return (
    <DonaterProvider>
        <DonaterContainer />
    </DonaterProvider>
  )
}

export default donaterForm