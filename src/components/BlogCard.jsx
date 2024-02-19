import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ArrowIcon from '@mui/icons-material/ArrowForwardOutlined';
import UserIcon from '@mui/icons-material/PortraitRounded';
import CommentIcon from '@mui/icons-material/QuestionAnswerRounded';
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


const BlogCard = (props) => {
  const { image, title, date } = props.item;

  return (
    <Box sx={{ position: 'relative' }}>
      <Box sx={sxImageWrap} >
        <Box component='img' src={image} sx={sxImage} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
        <UserIcon sx={{ color: '#aaa' }} fontSize='small' />
        <Typography sx={{ color: '#aaa' }}>By:</Typography>
        <Typography mx={1}>Admin</Typography>
        <Divider orientation="vertical" variant="middle" flexItem />
        <CommentIcon sx={{ color: '#ccc', mx: 1 }} fontSize='small' />
        <Typography>0 comments </Typography>
      </Box>
      <Typography component="h6" fontWeight='bold' >{title}</Typography>

      <Paper
        elevation={0}
        sx={{
          transform: 'scale(0.7)',
          width: '60px', textAlign: 'center', p: 1,
          position: 'absolute', top: 0, right: 4,
        }}
      >
        <Typography fontWeight={600} variant='h6'>
          {date.split(' ')[0]}
        </Typography>
        <Typography>
          {date.split(' ')[1]}
        </Typography>
      </Paper>

      <Button sx={{ px: 0 }} endIcon={<ArrowIcon />}>READ MORE</Button>
    </Box>
  )
}


export default BlogCard;
