
import React from 'react';
import { Grid, Typography,Box } from '@mui/material';
import Typewriter from 'typewriter-effect';
import Container from './Container';

const Header = () => {
  return (
  <Container>
  <div style={{backgroundColor:"#1E2538"}}>

<Grid container spacing={2} sx={{paddingTop:"20vh"}}>
      <Grid item xs={6} >
        <Typography  align="center"sx={{fontWeight:"bold" ,color:"#fff" ,fontSize:{xs:"5vh",sm:"5vh",md:"5vh",lg:"5vh",xl:"5vh"},paddingTop:"20vh",paddingLeft:"10vh"} }>
        web developer portfolio
        </Typography>
        <Typography variant="subtitle1" align="center"
       sx={{fontWeight:200 ,color:"#E95A0C" ,fontSize:{xs:"5vh",sm:"5vh",md:"5vh",lg:"5vh",xl:"5vh"}} }
        >
          <Typewriter
            paddingLeft="vh"

options={{
              strings: ['I am Abdullah Shah', 'I am create Website', 'Mern Stack Devloper '],
              autoStart: true,
              loop: true,
            }}
          />
        </Typography>
<Typography sx={{color:"#fff",textAlign:"left",paddingLeft:"19vh",fontSize:"2.5vh"}}>
Build a site with Next js, or node js. Customize, consider hiring. Make it appealing, user-friendly, informative. Start now!
</Typography>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{display:"flex",shapeOutside:"border-box",justifyContent:"end",paddingLeft:"30vh"}}>
         <img src="Abdullah.jpg" alt="" height='600vh' width="500vh" style={{borderRadius:"10%"}}/>
        </Box>
      </Grid>
      
      
    </Grid>
    </div>
    <br />
    <br />

    </Container>
  );
};

export default Header;
