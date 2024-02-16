import { useState } from 'react';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import palette from '../shared/palette';



const transition = 'all ease 0.4s';

const sxButton = {
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
    transition
};

const sxImageWrap = {
    backgroundColor: palette.bg2,
    borderRadius: '12px',
    overflow: 'hidden',
    position: 'relative',
    '&:hover img': {
        transform: 'scale(1.2)'
    }
}

const sxIcon = {
    transition,
    backgroundColor: palette.bg1,
    transform: 'scale(0)',
    opacity: 0,
    "&:hover": {
        backgroundColor: palette.fg1,
        color: palette.bg1,
    }
}

const sxIconWrap = {
    transition,
    position: 'absolute',
    width: '100%', height: '100%',
    top: 0, left: 0,
    '&:hover': {
        backgroundColor: palette.bg3
    },
    '&:hover>*': {
        transform: 'scale(1)',
        opacity: 1
    }
}

const IconButtons = () => {
    return (
        <Stack
            justifyContent='center' alignItems='center'
            direction='row' spacing={1} sx={sxIconWrap}
        >
            <IconButton sx={sxIcon}> <FavoriteBorderIcon /> </IconButton>
            <IconButton sx={sxIcon}> <VisibilityIcon /> </IconButton>
            <IconButton sx={sxIcon}> <SwapHorizIcon /> </IconButton>
        </Stack>
    )
}

const ProductCard = (props) => {
    const { image, title, price, rating } = props.product;
    const [hover, setHover] = useState(false);

    return (
        <>
            <Box sx={sxImageWrap}
                onMouseOver={(e) => {
                    clearTimeout(e.target.id);
                    setHover(true)
                }}
                onMouseLeave={(e) => {
                    e.target.id = setTimeout(() => setHover(false), 400)
                }}
            >
                <Box component='img' src={image}
                    sx={sxImage}
                >
                </Box>
                {hover && <IconButtons></IconButtons>}
            </Box>
            <Typography component="p" fontWeight='bold' marginTop={1} >{title}</Typography>
            <Stack
                sx={{ mb: 1 }}
                direction='row' justifyContent='space-between' alignItems='center'
            >
                <Typography variant='h6' color="primary">{price}</Typography>
                <Stack
                    direction='row' alignItems='center'
                    sx={{ border: 1, borderRadius: 2, p: '4px', borderColor: '#ddd', transform: 'scale(0.9)' }}
                >
                    <StarIcon
                        sx={{ color: palette.gold, mr: "2px" }} size='small'
                    ></StarIcon>
                    <Typography variant='article'>{rating}</Typography>
                </Stack>
            </Stack>
            <Button
                fullWidth
                disableElevation disableRipple
                sx={sxButton}
            >add to cart</Button>
        </>
    )
}


export default ProductCard;