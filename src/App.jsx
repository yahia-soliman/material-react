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
import BlogSection from './components/BlogSection';
import Contacts from './components/Contacts';
import Footer from './components/Footer';


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
      <BlogSection></BlogSection>
      <Contacts></Contacts>
      <Footer></Footer>
      <BottomBar />
    </ThemeProvider>
  )
}

export default App
