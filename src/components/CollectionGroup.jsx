import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import glasses from "/assets/bg-glasses.jpg"
import school from "/assets/bg-school.jpg"
import winter from "/assets/bg-winter.jpg"
import jeans from "/assets/bg-jeans.jpg"
import CollectionCard from './CollectionCard';


const description = "Festive, dynamic, luxurious. These are the inspirations for the Fall Winter 2023 collection. This collection has been infused with the expertise of the Lanvin brand, featuring exceptional dresses and new logos inspired by the awesome collection."

const CollectionGroup = () => {
  const items = [
    { description, title: "Jeans For Kid", image: jeans },
    { description, title: "School Styles", image: school },
    { description, title: "Sunglasses For Kids", image: glasses },
    { description, title: "Winter Collection", image: winter },
  ];

  return (
    <Grid container spacing={4} marginY={4}>
      <Grid item xs={12} md={6}>
        <Stack spacing={4}>
          <CollectionCard collection={items[0]}  y={-1}/>
          <CollectionCard collection={items[1]}  y={-1}/>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack spacing={4}>
          <CollectionCard collection={items[2]} y={1} />
          <CollectionCard collection={items[3]} y={1} />
        </Stack>
      </Grid>
    </Grid>
  )
}

export default CollectionGroup;
