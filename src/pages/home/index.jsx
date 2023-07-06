import '../css/home.css';
import { React } from 'react';
import { Box, Button, Typography, Card, DialogActions } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useContext } from "react";
import ResponsiveDialog from "./Dialog";
import AlertDialogSlide from "./Dialog2"
import { WidthWide } from '@mui/icons-material';
export default function Home() {


  const { currentUser } = useContext(AuthContext)
  const navigate = useNavigate()
  return (<><section className="banner">
    <div className="container">
      <div className="row">

        <div className=".col-lg-6-col-md-12-col-xl-7">
          <div className="block">
            <div className="divider mb-3"></div>
            <span className="text-uppercase text-sm letter-spacing ">Final kidney patients solution</span>
            <h1 className="mb-3 mt-3">Cross-over Kidneys Transplante</h1>

            
          <p className="mb-4 pr-5">In cross-transplantation, patients who cannot be given a kidney from their own relative for immunological reasons receive a kidney from a relative of another patient in exchange for a kidney from their relative.</p>
          {currentUser?<></>:
            <div className="btn-container ">
              <a onClick={()=>{navigate('/register')}} className="btn btn-main-2 btn-icon btn-round-full">Subscribe<ArrowRightIcon sx={{ "height": "12px" }}></ArrowRightIcon></a>
            </div>}
          </div>
        </div>
        <div className="row2"></div>
      </div>
    </div>
  </section>


    <section className="features">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="feature-block d-lg-flex">
              <div className="feature-item mb-5 mb-lg-0">
                <div className="feature-img mb-4">
                  <img style={{ width: "28%" }} className="img-home" src="..\..\img\how can donate.jpg"></img>
                </div>
                <h4 className="mb-3">How It Works?</h4>
                <p className="mb-4">Learn about the benefits of Cross-Linked Kidney Donation by 'LifeCycle' and how it can change people's lives.</p>
                <a href="/about-us" className="btn btn-main btn-round-full">Learn More</a>
              </div>

              <div className="feature-item mb-5 mb-lg-0">
                <div className="feature-img mb-4">
                  <img className="img-home" src="..\..\img\who can donate.jpg" ></img>
                </div>
                <h4 className="mb-3">Who Can Donate?</h4>
                <p className="mb-4">Find out if you are eligible to donate your kidney and how to get started.</p><br></br>
                <AlertDialogSlide></AlertDialogSlide>
              </div>

              <div className="feature-item mb-5 mb-lg-0">
                <div className="feature-img mb-4">
                  <img className="img-home" src="..\..\img\medical files.jpg" ></img>
                </div>
                <h4 className="mb-3">Filling forms</h4>
                <p>Ready to donate your kidney? needs a kidney donation?  Find out how to get started and make a difference.</p>
                <ResponsiveDialog>Learn More</ResponsiveDialog>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section></>)
}



