import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
} from '@mui/material';

export default function Education() {
  return (
    <Container maxWidth="false" disableGutters> {/* Disable gutters for full width */}
      <Box sx={{ height: '100vh', backgroundColor: '#fff' }}>
        <Grid container spacing={2} sx={{ paddingTop: '5vh' }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: { xs: '5vh', md: 0 },paddingTop: { xs: '5vh', md: '8vh' } }}>
              <img src="vasily-koloda-8CqDvPuo_kI-unsplash.jpg" alt="Education" height="600vh" width="600vh" style={{ borderRadius: '10%' }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{}}>
            <Typography  align="left" sx={{ fontWeight: 'bold', color: '#E95A0C', paddingLeft: { xs: '5vw', md: '10vh' }, paddingTop: { xs: '10vh', md: '22vh' }, fontSize: { xs: '5vw', md: '8vh' } }}>
              MY <span style={{ color: '#000', fontWeight: 200 }}>Education</span>
              <Box sx={{ borderBottom: '0.5vh solid #2D3C65', width: '30vh' }} />
            </Typography>
            <Typography align="left" sx={{ paddingLeft: { xs: '5vw', md: '10vh' }, paddingTop: '2vh', fontSize: { xs: '', md: '3.5vh' } }}>
              SSC Complete
            </Typography>
            <Typography  align="left" sx={{ paddingLeft: { xs: '5vw', md: '10vh' },fontSize: { xs: '', md: '2.5vh' } }}>
              Rakshanda Public School
            </Typography>
            <Typography  align="left" sx={{ paddingLeft: { xs: '5vw', md: '10vh' }, fontSize: { xs: '', md: '3.5vh' },paddingTop: '2vh' }}>
              HSC Complete
            </Typography>
            <Typography  align="left" sx={{ paddingLeft: { xs: '5vw', md: '10vh' },fontSize: { xs: '', md: '2.5vh' } }}>
              City Government College Karachi
            </Typography>
            <Typography  align="left" sx={{ paddingLeft: { xs: '5vw', md: '10vh' }, paddingTop: '2vh',fontSize: { xs: '', md: '3.5vh' } }}>
              H.D.S.C Continue
            </Typography>
            <Typography  align="left" sx={{ paddingLeft: { xs: '5vw', md: '10vh' },fontSize: { xs: '', md: '2.5vh' } }}>
              Aptech Learning North Karachi
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
