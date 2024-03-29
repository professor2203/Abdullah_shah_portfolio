import React, { useState, useEffect } from 'react';
import Container from './Container';
import { Box, Button, Link, Typography } from '@mui/material';
import Image from 'next/image';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { List, ListItem, ListItemText } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Headermodel from './Headermodel';
export default function Footer() {
    const isMobile = useMediaQuery('(max-width:600px)');
    const isTabletScreen = useMediaQuery('(max-width:899px)');
    const isLargeScreen = useMediaQuery('(min-width:900px)');

  const listItems1 = [
    { label: 'Level Five', url: 'https://level5-rho.vercel.app/' },
    { label: '360 XpertSolutions', url: 'https://360xpertsolutions.com/' },
    { label: '', url: '' },
  ];
  const listItems2 = [
    { label: 'About Myslaf', url: '/#' },
    { label: 'Contact Us', url: '/#' },
    { label: 'Skills', url: '/link3' },
    { label: 'Education', url: '/link3' },
    { label: '', url: '/link3' },
 
  ];
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <div style={{borderTop:"0.2vh solid #2D3C65"}}></div>
      <Container>
      <Box sx={{display:"flex",flexDirection:"row"}}>
    <Headermodel/>
    </Box> 

        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            height: isMobile ? 'auto' : '230px',
            width: '120%',
            pt: '5%',    
            pb: '3%',
            justifyContent:"center"
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection:"column",
              justifyContent: 'start',
              alignContent: 'center',
              marginLeft: isMobile ? '2%' : '0',
              marginRight: isMobile ? '0' : '20%',
              height: '120%',
              width: isMobile ? '80%' : isLargeScreen?'33%':isTabletScreen?"27%":"60%",
              marginLeft:"2%"
              // paddingLeft:"3%" 
            }}
          >
  <img src="./icons8-web-developer-96.png" alt=""   width={100} height={100}/>

            <Typography
              sx={{
                fontFamily: 'Open Sans',
                color: '#FFFF',
                fontWeight: '400',
                fontSize: isMobile ? '10px' :isTabletScreen?'12px' :isLargeScreen? '15px':'16px',
                mt: isMobile ? '3%' : '8%',
                mb:'5%',
                display:"flex",
                flexDirection:"row", justifyContent:"center"
              }}
            >
           
Web development merges creativity and functionality through code, shaping online interaction. Developers craft intuitive interfaces, fostering innovation.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: isMobile ? '3%' : '0' }}>
    <EmailIcon sx={{ color: '#FFFF', mr: '5px' }} />
    <Link href="#" sx={{ color: '#C3C3C3','&:hover':{color:"#E95A0C"}, fontFamily: 'Satoshi Variable', fontWeight: '500', fontSize: isMobile ? '14px' : isTabletScreen ? '15px' : '15px',textDecoration:"none" }}>
        abdullahshah034468@gmail.com
    </Link>
</Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems:"center",
              flexDirection: 'column',width: isMobile ? '100%' : isLargeScreen?'40%':isTabletScreen?"30%":"30%",
            }}
          >
            <Typography sx={{ fontFamily: 'Open Sans', fontWeight: '700', fontSize: isMobile ? '22px' : isTabletScreen ? '16px' : '18px', color:isMobile ?'#E95A0C':"#FFFF" ,display:"flex" ,pr:isMobile?"5%":" "}}>Intership Service</Typography>
            <List sx={{ color: '#FFFF' }}>
              {listItems1.map((item, index) => (
                <ListItem key={index}>
                  <Link href={item.url}style={{textDecoration:"none"}}  >
                    <ListItemText primary={item.label}sx={{ m:'0' ,fontFamily: 'Open Sans', color: '#FFFF', fontWeight: isMobile ? '200' : '400',font:"20px" ,display:"flex",alignItems:"center" }} />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>

          {!isMobile && (
    <Box style={{ height: isLargeScreen ? "22vh" : isTabletScreen ? "33vh" : '25vh', borderLeft: '1px solid #2D3C65' }} />
)}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: isMobile ? '100%' : isLargeScreen?'20%':"30%",
            }}
          >
            <Typography sx={{ fontFamily: 'Open Sans', fontWeight: '700', fontSize: isMobile ? '22px':isTabletScreen?"16px" : '18px',  color:isMobile ?'#E95A0C':"#FFFF" }}>Helpful Links</Typography>
            <List>
              {listItems2.map((item, index) => (
                <ListItem key={index}>
                  <Link  style={{textDecoration:"none"}} href={item.url}>
                    <ListItemText primary={item.label} sx={{ m: '0', fontFamily: 'Open Sans', color: '#FFFF', fontWeight: '400'}} />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>

          {!isMobile && (
    <Box style={{ height: isLargeScreen ? "22vh" : isTabletScreen ? "33vh" : '25vh', borderLeft: '1px solid #2D3C65' }} />
)}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  width: isMobile ? '100%' : '10%' ,mx:isLargeScreen?"2%":" " }}>
            <Typography sx={{ fontFamily: 'Open Sans', fontWeight: '700',fontSize: isMobile ? '22px':isTabletScreen?"13px" :isLargeScreen? '15px':"18px",  color:isMobile ?'#E95A0C':"#FFFF", marginBottom: isMobile ? '0' :isTabletScreen?"15px" :'0' ,pr:isMobile?"3%":" " }}>Follow us</Typography>
            <Box sx={{ display: 'flex', flexDirection:isMobile?"row" :'column', my: isMobile ? '2%' : '40%' ,pr:isMobile?"5%":" "}}>
              <Link href="https://www.facebook.com/profile.php?id=100073900860495" target="_blank" paddingRight={isMobile?"10%":"" }  >
                <FacebookIcon sx={{ color: '#FFFF','&:hover':{color:"#E95A0C"} }} />
              </Link>
              <Link href="https://www.linkedin.com/in/abdullah-shah-84814a264/" target="_blank"  paddingRight={isMobile?"10%":""}>
                <LinkedInIcon sx={{ color: '#FFFF','&:hover':{color:"#E95A0C"} }} />
              </Link>
              <Link href="https://www.instagram.com/lumaansari99/" target="_blank">
                <InstagramIcon sx={{ color: '#FFFF','&:hover':{color:"#E95A0C"} }} />
              </Link>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '125%',
            borderBottom: '1px solid #2D3C65',}}
        ></Box>
        <Box>
          <Typography
            sx={{
              fontFamily: 'Open Sans',
              color: '#FFFF',
              fontWeight: '600',
              fontSize: isMobile ? '12px' : '14px',
              display: 'flex',
              justifyContent: 'center',
               py:'1vh',
            paddingLeft:"13%"
              }}
          >
            © {currentYear} Abdullah Shah
          </Typography>
        </Box>
      </Container>
    </>
  );
}