import { React } from 'react';
import { Box, Button, Typography, Card, DialogActions } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import ResponsiveDialog from "./Dialog";
function Home() {

  const { currentUser } = useContext(AuthContext)
  const navigate = useNavigate()
  return (<>

    {/* {currentUser.role == null ? <>
        <Button variant="contained" style={{ background: "#7bb28c" }} onClick={() => navigate(`/donater`)}>donater</Button><br></br><br></br>
        <Button variant="contained" style={{ background: "#7bb28c" }} onClick={() => navigate(`StartToRegister/${'needsDonation'}`)}>needsDonation</Button></> : <></>

      } */}


    {/* {currentUser == null ? <>
      <Button variant="contained" style={{ background: "#7bb28c" }} onClick={() => navigate(`/donater`)}>donater</Button><br></br><br></br>
      <Button variant="contained" style={{ background: "#7bb28c" }} onClick={() => navigate(`StartToRegister/${'needsDonation'}`)}>needsDonation</Button></> : <></>
    } */}

    <div className="container">

      <main>
        <section className="jumbotron jumbotron-fluid text-white bg-primary">
          <Card sx={{ padding: '2%', backgroundColor: '#dfece3', gridGap: '30px', margin: "top", padding: '5px' }}>
            <Typography variant='h3'>Kidney Donation</Typography>
            <Typography>Donate your kidney and save a life today</Typography>
          </Card>
        </section>
        {currentUser && <>{currentUser.role === "ADMIN" ? <Button variant="contained" href="/admin">enter management screen</Button> : <></>}
          {currentUser.role === "DONATER" ? <Box sx={{ display: "grid", gridGap: '10px', gridTemplateColumns: "repeat(3, minmax(0,1fr))", padding: '5px' }}>
            <Button variant="contained" href="/donater">your form</Button>
            <Button variant="contained" href="/donater">change your pair</Button>
            <Button variant="contained" href="/donater">delete </Button>
          </Box> : <></>}
          {currentUser.role === "NEEDSDONATION" ? <Button variant="contained" href="/needsDonation">your form</Button> : <></>}
        </>}



        <section className="py-5">
          <div className="container">

            <div >
              <Box sx={{ display: "grid", gridGap: '10px', gridTemplateColumns: "repeat(3, minmax(0,1fr))", padding: '5px' }}>
                <Box sx={{ boxShadow: 6, alignItems: "center", justifyContent: "center", display: "grid" }}>
                  <img style={{ width: "100%" }} src="..\..\img\kidneys.jpg" alt="Card image cap" />
                  <div style={{ padding: '2%' }}>
                    <Typography variant='h5' >Who Can Donate?</Typography>
                    <Typography >Find out if you are eligible to donate your kidney and how to get started.</Typography>
                    <Button style={{ background: "#7bb28c" }} href="#">Learn More</Button>
                  </div>
                </Box>

                <Box sx={{ boxShadow: 6, alignItems: "center", justifyContent: "center", display: "grid" }}>
                  <img style={{ width: "100%" }} src="..\..\img\circle.jpg" alt="Card image cap" />
                  <div style={{ padding: '2%' }}>
                    <Typography variant='h5' >How It Works?</Typography>
                    <Typography >Learn about the benefits of Cross-Linked Kidney Donation by 'LifeCycle' and how it can change people's lives.</Typography>
                    <Button style={{ background: "#7bb28c" }} href="#">Learn More</Button>
                  </div>
                </Box>

                <Box sx={{ boxShadow: 6, alignItems: "center", justifyContent: "center", display: "grid" }}>
                  <img style={{ width: "100%" }} src="..\..\img\maxresdefault.jpg" alt="Card image cap" />
                  <div style={{ padding: '2%' }}>
                    <Typography variant='h5' >Filling forms</Typography>
                    <Typography >Ready to donate your kidney? needs a kidney donation?  Find out how to get started and make a difference.</Typography>
                    {/* {!currentUser? */}
                    <ResponsiveDialog>Learn More</ResponsiveDialog>
                    {/* <Button style={{ background: "#7bb28c" }} href="/" >Learn More</Button>} */}
                  </div>
                </Box>
              </Box></div>
          </div>
        </section>
      </main>
    </div></>

  )
}
export default Home;