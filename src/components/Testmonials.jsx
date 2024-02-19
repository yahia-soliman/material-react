import { Carousel } from './react-3d-carousel';
import { useEffect, useState, useRef } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { motion, useAnimationControls, useInView } from "framer-motion";

import customer1 from "/assets/customer-1.png"
import customer2 from "/assets/customer-2.png"
import customer3 from "/assets/customer-3.png"
import customer4 from "/assets/customer-4.png"
import customer5 from "/assets/customer-5.png"
import customer6 from "/assets/customer-6.png"

const images = [
  <img src={customer6} />,
  <img src={customer2} />,
  <img src={customer3} />,
  <img src={customer4} />,
  <img src={customer5} />,
  <img src={customer1} />,
];

const text = [
  "An already great template I needed a few extra tweeks to make it perfect for what I needed. The team at Bzotech have helped immensely and gone above and beyond my expectations with their support. Everything was actioned within 24 hours of requesting and some extra paid customisation I needed was done in the same time frame. Superb support and highly recommended to work with A+.",
  "Lorem ipsum dolor sit amet come book store shopify theme. We can change the code easily, the modules totam rem aperiam, eaque ipsa quae ab illo inventore veritatis etare well donensectetur adipisicing elit. Quasi cupiditate facilis id saepe provident beatae sequi numquam culpa dolor voluptatum perspiciatis quisquam, animi error ratione quo, eum dolorem autem veritatis?",
  "This is awesome book store shopify theme. We can change the code easily, the modules are well done and we have a lot of possibilities. Flexible and manageable configuration are enabled to achieve our intended performance as an online shopping mall. I'm very, very happy with my purchase. Thanks for great job. Furthermore, the creator is very kind of communicating our questions about this theme.",
  "Great Service and Good Quality Product and it helped my wife osteoarthritis on her knees and hips and myself for arthritis. We have asked our doctor before we used it he said it is fine because we are on other medications. We have recommended to our friends and family in United States they have order and have been using Rumatis Cream. Thank You very much. Whoever has invented this cream. Kind Regards.",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium accusantiu maccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  "me book store shopify theme. We can change and it helped my wife osteoarthritis on her knees and hipsthe code easily, the modules are well donee laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto their support. Everything was actioned within 24 hours of requesting and some extra paid customisation I needed was done in the same tibeatae vita"
]

const infos = [
  { name: 'Amanda Smith', job: 'Student' },
  { name: 'Jane Doe', job: 'Teacher' },
  { name: 'Ali Hamada', job: 'Barber' },
  { name: 'Made7a Ronaldo', job: 'Docktor' },
  { name: 'Hamada Smith', job: 'Teacher' },
  { name: 'Kate Bora3y', job: 'Student' },
]

const Testmonials = () => {
  const aniVars = {
    swipeR: {
      opacity: [0, 0, 0.7, 1],
      x: [0, 80, -10, 0]
    },
    swipeL: {
      opacity: [0, 0, 0.7, 1],
      x: [0, -80, 10, 0]
    }
  }
  const swiperTransition = {
    duration: 0.5,
    times: [0, 0.2, 0.8, 1]
  }
  const animation = useAnimationControls();

  const [idx, setIdx] = useState(0)
  useEffect(() => { }, [idx])
  const callback = function (index, direction) {
    animation.start('swipe' + direction);
    setIdx(index);
  }

  const ref = useRef(null);
  const inViewControls = useAnimationControls();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    inViewControls.set({ opacity: 0, scale: 0 })
    inViewControls.start({
      opacity: 1, scale: 1,
      transition: { type: 'spring', duration: 0.7, delay: 0.2 }
    })
  }, [isInView])

  return (
    <motion.div ref={ref} initial={{opacity: 0}} animate={inViewControls}>
      <Grid
        container
        justifyContent='center'
        textAlign='center'
        sx={{
          backgroundImage: 'url(/assets/bg-customers.jpg)',
          backgroundPosition: 'center',
          overflowX: 'hidden'
        }}
      >
        <Grid item lg={6} md={9} paddingY={4}>
          <Container maxWidth='lg'>
            <Typography
              variant='h2' fontSize={40} fontWeight={500}
              color='#111'
            >
              Customers comments
            </Typography>
            <motion.div variants={aniVars}
              transition={swiperTransition}
              animate={animation}
            >
              <Typography variant='subtitle1' color='gray' lineHeight={1.2} my={3}>
                {text[idx]}
              </Typography>
            </motion.div>
            <Box height="120px" flex={1} alignItems='center'>
              <Carousel
                slides={images} onSlideChange={callback}
              />
            </Box>
            <motion.div variants={aniVars}
              transition={swiperTransition}
              animate={animation}
            >
              <Typography variant='h6' fontWeight={600}>
                {infos[idx]['name']}
              </Typography>
              <Typography variant='subtitle1' color='gray' lineHeight={1.2}>
                {infos[idx]['job']}
              </Typography>
            </motion.div>
          </Container>
        </Grid>
      </Grid>
    </motion.div>
  )
}

export default Testmonials;
