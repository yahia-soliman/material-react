import Box from '@mui/material/Box';
import Typo from '@mui/material/Typography';
import Container from '@mui/material/Container';


import pay1 from "/assets/payment1.png"
import pay2 from "/assets/payment2.png"
import pay3 from "/assets/payment3.png"
import pay4 from "/assets/payment4.png"

export default function Footer() {

  return (
    <Container
      sx={{
        mb: { lg: 0, xs: '70px' }, minHeight: '60px',
        display: 'flex', alignItems: 'center',
        justifyContent: 'center', color: '#888',
        '& img': { height: '40px', p: 1 }
      }}
    >
      <Typo variant='subtitle2'>
        Copyright 2023 KidXtore. Designed By
        <Typo sx={{
          display: 'inline',
          color: '#111',
        }}> Yahia Soliman</Typo>
      </Typo>
      <Box sx={{
        ml: 'auto',
        display: 'flex', alignItems: 'center'
      }}>
        <Box component='img' src={pay1}></Box>
        <Box component='img' src={pay2}></Box>
        <Box component='img' src={pay3}></Box>
        <Box component='img' src={pay4}></Box>
      </Box>
    </Container>
  );
}
