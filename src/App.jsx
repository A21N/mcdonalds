import{ Menu } from './componente/Menu';
import{ Footer } from './componente/Footer';
import { RutesProducts } from './RutesProducts';
import { Rutesmeniu } from './Rutesmeniu';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';





function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Menu />

  

      <RutesProducts />
      <Rutesmeniu />
      <Footer />
    </BrowserRouter>
  );
}

export default App;






