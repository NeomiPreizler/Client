import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from "react-router-dom";

// import Slide from '@mui/material/Slide';
// import { TransitionProps } from '@mui/material/transitions';

// const Transition = React.forwardRef(function Transition(
//   props: TransitionProps & {
//     children: React.ReactElement<any, any>;
//   },
//   ref: React.Ref<unknown>,
// ) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
const handleClickNeedy=()=>{
    navigate('/needy-medical-details');
}
const handleClickDonor=()=>{
    navigate('/donater-medical-details');
}
  return (
    <div>
     	<a onClick={handleClickOpen} className="btn btn-main btn-round-full">Learn More</a>

      <Dialog
        open={open}
        // TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"All the medical information you need:)"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          Select for whom you want to receive the medical information you need.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{handleClickDonor()}}>Donate's Information</Button><br></br>
          <Button onClick={()=>handleClickNeedy()}>recipient's Information</Button> 
        </DialogActions>
      </Dialog>
    </div>
  );
}
