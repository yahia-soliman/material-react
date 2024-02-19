import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCreative, Autoplay } from 'swiper/modules';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { motion, useInView, useAnimationControls } from 'framer-motion'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

import slide1 from '/assets/slide1.jpg';
import slide2 from '/assets/slide2.jpg';
import slide3 from '/assets/slide3.jpg';
import palette from '../shared/palette';
import { useEffect, useRef } from 'react';


const sxButton = {
  px: 2, py: 1,
  fontWeight: 600,
  color: palette.bg1,
  backgroundColor: palette.fg1,
  border: '2px solid ' + palette.fg1,
  borderRadius: '8px',
  "&:hover": {
    color: palette.fg1,
    backgroundColor: palette.bg1,
  }
}

const imgStyle = {
  height: '60vw',
  width: '100%',
  objectFit: 'cover'
}

export default function Slider() {
  const ref = useRef(null);
  const animate = useAnimationControls();
  useEffect(() => {
    animate.set({opacity: 0});
    animate.start( x => ({
      opacity: 1,
      transition: { duration: 0.4, delay: 0.5 * x }
    }));
  }, [ref])
  return (
    <Box sx={{ position: 'relative' }} >
      <Swiper
        slidesPerView={1}
        loop={true}
        /*
        autoplay={{
            delay: 5000
        }}
        */
        effect='creative'
        creativeEffect={{
          prev: {
            translate: [0, 0, -500],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        pagination={{
          clickable: true
        }}
        modules={[Pagination, Autoplay, EffectCreative]}
      >
        <SwiperSlide>
          <Box component='img' src={slide1} sx={imgStyle} />
          <motion.div
            ref={ref}
            style={{
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: '16px', position: 'absolute', color: 'white',
              top: '25%', left: '50%', transform: 'translate(-50%)',
            }}
          >
            <motion.div animate={animate} custom={1}>
              <Typography sx={{
                fontWeight: 600,
                fontSize: { lg: '90px', md: '60px', sm: '42px', xs: '32px' },
              }}>WINTER STYLE</Typography>
            </motion.div>
            <motion.div animate={animate} custom={2}>
              <Typography
                sx={{ display: { xs: 'none', sm: 'block' } }}
              >
                Wool clothes with many different styles & many options
              </Typography>
            </motion.div>
            <motion.div animate={animate} custom={3}>
              <Button
                disableElevation disableRipple
                sx={sxButton}
              >Shop Now</Button>
            </motion.div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <Box component='img' src={slide2} sx={imgStyle}></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box component='img' src={slide3} sx={imgStyle}></Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
