import { useEffect, useState, useRef } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { motion, useAnimationControls, useInView } from "framer-motion";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

const sxBtn = {
  color: 'white',
  backgroundColor: '#111',
  ml: 2, my: 2,
  '&:hover': {
    color: '#111',
    backgroundColor: 'white'
  }
}

const Contacts = () => {
  const ref = useRef(null);
  const inViewControls = useAnimationControls();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    inViewControls.set({ opacity: 0, x: '100vw' })
    inViewControls.start({
      opacity: 1, x: 0,
      transition: { type: 'spring', duration: 1, delay: 0.5 }
    })
  }, [isInView])

  return (
    <motion.div ref={ref} animate={inViewControls}>
      <Box
        container
        justifyContent='center'
        textAlign='center'
        sx={{
          backgroundImage: 'url(/assets/bg-social.jpg)',
          backgroundPosition: 'center', overflowX: 'hidden',
          backgroundSize: 'cover', minHeight: '40vw',
          display: 'flex', flexDirection: 'column',
          alignItems: 'end', justifyContent: 'center',
        }}
      >
        <Container
          sx={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'end', justifyContent: 'center',
          }}
        >
          <Typography variant='h4' marginY={3}>
            Follow us on social media
          </Typography>
          <Typography variant='subtitle2' marginY={3}>
            Follow us to not miss new collection & promotional news
          </Typography>
          <Box >
            <Button
              sx={sxBtn} size='lg' variant='contained'
              startIcon={<FacebookIcon />}
            >Facebook</Button>
            <Button
              sx={sxBtn} size='lg' variant='contained'
              startIcon={<InstagramIcon />}
            >Instagram</Button>
            <Button
              sx={sxBtn} size='lg' variant='contained'
              startIcon={<PinterestIcon />}
            >Pinterest</Button>
          </Box>
        </Container>
      </Box>
    </motion.div>
  )
}

export default Contacts;
