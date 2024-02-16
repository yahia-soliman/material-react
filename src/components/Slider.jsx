import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCreative, Autoplay } from 'swiper/modules';
import Box from '@mui/material/Box';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

import slide1 from '/assets/slide1.jpg';
import slide2 from '/assets/slide2.jpg';
import slide3 from '/assets/slide3.jpg';


const imgStyle = {
    height: '57vw',
    width: '100%',
    maxHeight: '100vh',
    objectFit: 'cover'
}

export default function Slider() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3500
                }}
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
                    <Box component='img' src={slide1} sx={imgStyle}></Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box component='img' src={slide2} sx={imgStyle}></Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box component='img' src={slide3} sx={imgStyle}></Box>
                </SwiperSlide>
            </Swiper>
        </>
    );
}