import Typography from '@mui/material/Typography';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';



import ProductCard from './ProductCard';

import product1 from "/assets/product1.png"
import product2 from "/assets/product2.png"
import product3 from "/assets/product3.png"
import product4 from "/assets/product4.png"
import product5 from "/assets/product5.png"
import product6 from "/assets/product6.png"

const ProductGroup = () => {
    const items = [
        { title: "Green Jacket", image: product1, price: '$63', rating: 5 },
        { title: "Jeans Shirt", image: product2, price: '$42', rating: 4 },
        { title: "Todler T-shirt", image: product3, price: '$25', rating: 4 },
        { title: "Beautiful Blouse", image: product4, price: '$49', rating: 5 },
        { title: "White Cute", image: product5, price: '$23', rating: 4 },
        { title: "Queens' Dress", image: product6, price: '$56', rating: 5 },
    ];

    return (
        <>
            <Typography variant='h5' gutterBottom>
                New Arrivals
            </Typography>
            <Swiper
                slidesPerView={1}
                spaceBetween={15}
                breakpoints={{
                    '400': { slidesPerView: 2 },
                    '800': { slidesPerView: 3 },
                    '1200': { slidesPerView: 4 }
                }}
            >
                {items.map((item) => {
                    return (
                        <SwiperSlide key={item.title}>
                            <ProductCard product={item}></ProductCard>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}

export default ProductGroup;