import React from 'react';
import Container from './Container';
import { Box, Grid, Typography } from "@mui/material";

export default function Education() {
  return (
    <Container sx={{}}>
      <Box sx={{ height: "100%", backgroundColor: "#fff", width: "125%" }}>
        <Grid container spacing={2} sx={{ paddingTop: "5vh" }}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: "flex", justifyContent: "center", paddingBottom: { xs: "5vh", sm: 0 } }}>
              <img src="vasily-koloda-8CqDvPuo_kI-unsplash.jpg" alt="" height="300vh" width="500vh" style={{ borderRadius: "10%" }} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography align="" sx={{ fontWeight: "bold", color: "#E95A0C", fontSize: { xs: "5vh", sm: "5vh", md: "5vh", lg: "5vh", xl: "5vh" }, paddingTop: { xs: "10vh", sm: 0 }, paddingLeft: { xs: "5vw", sm: "10vh" } }}>
              MY <span style={{ color: "#000", fontWeight: 200 }}>Education</span>
              <Box sx={{ borderBottom: "0.5vh solid #2D3C65", width: "30vh" }}></Box>
            </Typography>
            <Typography sx={{ color: "", textAlign: "left", paddingLeft: { xs: "5vw", sm: "10vh" }, fontSize: { xs: "3vh", sm: "3vh" }, paddingTop: "2vh" }}>
              SSC Complete
            </Typography>
            <Typography sx={{ color: "", textAlign: "left", paddingLeft: { xs: "5vw", sm: "10vh" }, fontSize: { xs: "2vh", sm: "2vh" } }}>
              Rakshanda Public School
            </Typography>
            <Typography sx={{ color: "", textAlign: "left", paddingLeft: { xs: "5vw", sm: "10vh" }, fontSize: { xs: "3vh", sm: "3vh" } }}>
              HSC Complete
            </Typography>
            <Typography sx={{ color: "", textAlign: "left", paddingLeft: { xs: "5vw", sm: "10vh" }, fontSize: { xs: "2vh", sm: "2vh" } }}>
              City Government College Karachi
            </Typography>
            <Typography sx={{ color: "", textAlign: "left", paddingLeft: { xs: "5vw", sm: "10vh" }, fontSize: { xs: "3vh", sm: "3vh" } }}>
              H.D.S.C Continue
            </Typography>
            <Typography sx={{ color: "", textAlign: "left", paddingLeft: { xs: "5vw", sm: "10vh" }, fontSize: { xs: "2vh", sm: "2vh" } }}>
              Aptech Learning North Karachi
            </Typography>
            <br />
      <br />
      <br />
    
          </Grid>
        </Grid>
      </Box>
      <br />
      <br />
      <br />
    
    </Container>
  );
}
