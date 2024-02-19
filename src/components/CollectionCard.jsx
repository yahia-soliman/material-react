import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimationControls } from 'framer-motion'

import palette from '../shared/palette';



const transition = 'all ease 0.6s';

const sxButton = {
  px: 4, py: 1, fontWeight: 600,
  color: palette.bg1,
  backgroundColor: palette.fg1,
  border: '1px solid ' + palette.fg1,
  borderRadius: '8px',
  "&:hover": {
    color: palette.fg1,
    backgroundColor: palette.bg1,
  }
}

const sxImage = {
  width: '100%',
  transition,
};
const sxImageWrap = {
  borderRadius: '12px',
  overflow: 'hidden',

  '&:hover img': {
    transform: 'scale(1.1)',
  }
}


const CollectionCard = (props) => {
  const { image, title, description } = props.collection;
  const ref = useRef(null);
  const animate = useAnimationControls();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    animate.set({ opacity: 0, y: props.y * 500 })
    animate.start({
      opacity: 1, y: 0, x: 0,
      transition: { type: 'tween', duration: 0.7, delay: 0.4 }
    })
  }, [isInView])

  return (
    <motion.div ref={ref} animate={animate}>
      <Box>
        <Box sx={sxImageWrap} >
          <Box component='img' src={image} sx={sxImage} />
        </Box>
        <Typography
          component="h5" fontWeight='bold' marginTop={1}
        >{title}</Typography>

        <Typography
          variant='subtitle2' marginY={1} color={'GrayText'}
        >{description}</Typography>

        <Button
          size='large'
          disableElevation disableRipple
          sx={sxButton}
        >Browse the Collection</Button>
      </Box>
    </motion.div>
  )
}


export default CollectionCard;
