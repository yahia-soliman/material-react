import BlogCard from './BlogCard';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typo from '@mui/material/Typography';

import blog1 from "/assets/blog1.jpg"
import blog2 from "/assets/blog2.jpg"
import blog3 from "/assets/blog3.jpg"



const BlogSection = () => {
  const items = [
    { date: '09 May', title: "Jeans Lorem Ipsum For Kid", image: blog1 },
    { date: '01 Jan', title: "School Dolor Sit Amit Styles", image: blog2 },
    { date: '19 Feb', title: "Sunglasses Consectetur For Kids", image: blog3 },
  ];

  return (
    <Container maxWidth='lg'>
      <Typo variant='h5' sx={{ position: 'relative', top: '50px' }}>
        From Our Blog
      </Typo>
      <Grid container spacing={4} marginY={4}>
        {items.map((one) =>
          <Grid item xs={12} md={4} key={one.title}>
            <BlogCard item={one} />
          </Grid>
        )}
      </Grid>
    </Container>
  )
}

export default BlogSection;
