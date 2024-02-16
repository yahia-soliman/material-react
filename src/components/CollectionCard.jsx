import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import palette from '../shared/palette';
import { DisplaySettings } from '@mui/icons-material';



const transition = 'all ease 0.6s';

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

    return (
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
    )
}


export default CollectionCard;