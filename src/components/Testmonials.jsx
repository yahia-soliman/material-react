import Typography from '@mui/material/Typography';
import { Carousel } from './react-3d-carousel';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import customer1 from "/assets/customer-1.png"
import customer2 from "/assets/customer-2.png"
import customer3 from "/assets/customer-3.png"
import customer4 from "/assets/customer-4.png"
import customer5 from "/assets/customer-5.png"
import customer6 from "/assets/customer-6.png"

const Testmonials = () => {
  const images = [
    <img src={customer1} />,
    <img src={customer2} />,
    <img src={customer3} />,
    <img src={customer4} />,
    <img src={customer5} />,
    <img src={customer6} />,
  ];
  const callback = function (...index) {
    console.log("callback", index);
  }

  return (
    <>
    <Stack
    sx={{
      backgroundImage: 'url(/assets/bg-customers.jpg)',
      minHeight: '500px'
    }}
    >
      <Typography variant='h5' gutterBottom>
        Our Customers
      </Typography>
      <Carousel
        slides={images}
        autoplay={false} interval={5000} onSlideChange={callback}
      />
    </Stack>
    </>
  )
}

export default Testmonials;
