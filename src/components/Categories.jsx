import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import ParkIcon from '@mui/icons-material/Park';
import SchoolIcon from '@mui/icons-material/School';
import BackpackIcon from '@mui/icons-material/Backpack';
import IceSkatingIcon from '@mui/icons-material/IceSkating';
import CelebrationIcon from '@mui/icons-material/Celebration';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import RedeemIcon from '@mui/icons-material/Redeem';


const items = [
    { title: 'Outdoor', icon: ParkIcon },
    { title: 'School', icon: SchoolIcon },
    { title: 'Bags', icon: BackpackIcon },
    { title: 'Shoes', icon: IceSkatingIcon },
    { title: 'Party', icon: CelebrationIcon },
    { title: 'Sport', icon: SportsBaseballIcon },
    { title: 'Gifts', icon: RedeemIcon },
]

const Item = ({ title, Icon, sx }) => {
    return (
        <Stack alignItems='center' sx={{
            width: '100px'
        }}>
            <Icon fontSize='large'></Icon>
            <Typography component="p" fontWeight='bold' marginTop={1} >{title}</Typography>
        </Stack>
    )
}
export default function Categories() {
    return (
        <Grid container alignItems='center' my={5}>
        <Grid item xs={12} md={4}>
            <Typography variant='h5' gutterBottom>

            Our Collections
            </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
        <Swiper
            slidesPerView={'auto'}
            spaceBetween={15}
        >
                {items.map(({ title, icon }) =>
                    <SwiperSlide style={{width: '100px'}} key={title}>
                        <Item title={title} Icon={icon} />
                    </SwiperSlide>
                )}
        </Swiper>
        </Grid>
        </Grid>
    );
}