import DonaterContext from "./DonaterContext"
import { useContext } from "react"
import { TextField, Button, Select, MenuItem } from "@mui/material";

const Step2UserDetails = ({handleNext}) => {

  const { data, handleChange } = useContext(DonaterContext)



  return (
    <>
      <div classNameName="form-text">
        <TextField
          type="text"
          name="id"
          id="id"
          error={!data.id}
          label="id"
          value={data.id}
          onChange={handleChange}
        />
      </div>
      <div classNameName="form-text">
        <TextField
          type="text"
          name="first_name"
          id="first_name"
          label="first_name"
          value={data.first_name}
          error={!data.first_name}
          onChange={handleChange}
        />
      </div>
      <div classNameName="form-text">
        <TextField
          type="text"
          name="last_name"
          id="last_name"
          error={!data.last_name}
          label="last_name"
          value={data.last_name}
          onChange={handleChange}
        />
      </div>
      <div classNameName="form-text">
        <TextField
          type="text"
          name="id_pair"
          id="id_pair"
          error={!data.id_pair}
          label="id_pair"
          value={data.id_pair}
          onChange={handleChange}
        />
      </div>
      <div classNameName="form-text">
        <TextField
          type="text"
          name="city"
          id="city"
          error={!data.city}
          label="city"
          value={data.city}
          onChange={handleChange}
        />
      </div>
      <div classNameName="form-text">
        <TextField
          type="text"
          name="address"
          id="address"
          error={!data.address}
          label="address"
          value={data.address}
          onChange={handleChange}
        />
      </div>
      <div classNameName="form-text">
        <TextField
          type="text"
          name="country"
          id="country"
          label="country"
          error={!data.country}
          value={data.country}
          onChange={handleChange}
        />
      </div>
      <div classNameName="form-text">
        <TextField
          type="number"
          name="phone_number"
          error={!data.phone_number}
          id="phone_number"
          label="phone_number"
          value={data.phone_number}
          onChange={handleChange}
        />
      </div>

      <div classNameName="form-text">
        <TextField
          type="number"
          name="cell_phone"
          error={!data.cell_phone}
          id="cell_phone"
          label="cell_phone"
          value={data.cell_phone}
          onChange={handleChange}
        />
      </div>
      <div classNameName="form-text">
        <Select
          labelId="gender"
          name="gender"
          id="gender"
          value={data.gender}
          error={!data.gender}
          label="gender"
          onChange={handleChange}
        >
          <MenuItem value={'MALE'}>Male</MenuItem>
          <MenuItem value={'FEMALE'}>Female</MenuItem>
        </Select><br></br>
        <Button
          disabled={!data.gender || !data.cell_phone}
          variant="contained"
          onClick={handleNext}
          sx={{ mt: 1, mr: 1 }}
        >
          {'Continue'}
        </Button>
      </div>









    </>
  );
};

export default Step2UserDetails;
