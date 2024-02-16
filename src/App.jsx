import theme from './shared/theme'

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import TopBar from'./components/TopBar';
import Slider from './components/Slider';
import BottomBar from './components/BottomBar';
import Categories from './components/Categories';
import ProductGroup from './components/ProductGroup';
import CollectionGroup from './components/CollectionGroup';
import Testmonials from './components/Testmonials';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />      
      <TopBar />
      <Slider />
      <Container maxWidth='lg'>
      <Categories />
      <ProductGroup />
      <CollectionGroup />
      </Container>
      <Testmonials></Testmonials>
      <BottomBar />
    </ThemeProvider>
  )
}

export default App
