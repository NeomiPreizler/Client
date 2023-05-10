import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
 function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
const {currentUser} =useContext(AuthContext)
  return (
    <div>

         <Button style={{ background: "#7bb28c" }} href="#" onClick={handleClickOpen}>Learn More</Button> 

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Want to enter as a donor or waiting for a donation?"}
        </DialogTitle>
        <DialogContent>

            {currentUser?
          <DialogContentText>
           To enter your details, enter as a donor or as needing a donation from the top of the page
          </DialogContentText>:
          <DialogContentText>
          To fill out your details in the desired forms, you must register in the system
        </DialogContentText>}
        </DialogContent>
        <DialogActions>
          {/* <Button autoFocus onClick={handleClose}>
            Disagree
          </Button> */}
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default ResponsiveDialog;