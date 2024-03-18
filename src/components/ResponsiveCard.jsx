import React, { useState } from 'react';
import { SwipeableDrawer, Grid,Box, Typography, Button } from '@mui/material';
import Container from './Container';

const cards = [
  { id: 1, title: '360 xpertsolutions', url: 'https://360xpertsolutions.com/', imageUrl: 'Screenshot from 2024-03-17 15-48-45.png' },
  { id: 2, title: 'Level Five', url: 'https://level5-rho.vercel.app/', imageUrl: 'Screenshot from 2024-03-17 15-52-51.png' },
  { id: 3, title: 'Mefic', url: 'https://www.example.com/card3', imageUrl: ' Screenshot from 2024-03-17 15-47-01.png' },
  { id: 3, title: 'Hassana', url: 'https://www.example.com/card3', imageUrl: 'Screenshot from 2024-03-17 15-54-02.png' },

];

const ImageLinkCards = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setIsOpen(open);
  };

  const handleCardClick = (url) => {
    window.open(url, '_blank');
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Grid container spacing={2} justifyContent="center" style={{ padding: '20px' }}>
        {cards.map((card) => (
          <Grid key={card.id} item xs={12} sm={4} md={3}>
            <div onClick={() => handleCardClick(card.url)}>
              <img src={card.imageUrl} alt={card.title} style={{ width: '100%', cursor: 'pointer' }} />
              <Typography variant="h5" component="h2" align="center">
                {card.title}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );

  return (
    <Container>
      <SwipeableDrawer
        anchor="bottom"
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
<Grid container spacing={3} justifyContent="space-between" sx={{ maxWidth: "100%" ,paddingLeft:"20vh"}}>
  <Grid item xs={12} sm={6} md={8} sx={{ }}>
    <Typography  sx={{ color: "#E95A0C", fontSize: "5vh" }}>
     <span style={{color:"#fff",fontWeight:200}}>Intership </span>  Servic
  <Box sx={{borderBottom:"0.5vh solid #001B2E",width:"20vh"}}></Box>
    </Typography>

    <Typography sx={{ color: "#fff", fontSize: "2.5vh",paddingTop:"2vh" }}>
      Embark on a journey of cutting-edge web development with Abdullah Shah's innovative fusion of React, Next.js, Three.js, and MUI. From captivating user interfaces to dynamic 3D visuals, every project is a testament to creativity and excellence. Harnessing the power of modern technologies, we bring your ideas to life with precision flair.
    </Typography>
    <Typography sx={{ color: "#fff", fontSize: "2.5vh" ,paddingBottom:"4vh"}}>
    </Typography>
    <Button variant='contained' onClick={toggleDrawer(true)} sx={{ borderRadius:"4vh",fontSize: "2vh",background:"#E95A0C" ,paddingTop:"vh"}}>
      View Project
    </Button>
  </Grid>

  <Grid item xs={12} sm={4} md={4} sx={{ paddingTop: '20vh', paddingBottom: '20vh' }}>
    
  </Grid>
</Grid>

      
      
      
     
    </Container>
  );
};

export default ImageLinkCards;
