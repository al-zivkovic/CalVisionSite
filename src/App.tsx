import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative w-full z-0 bg-primary'> 
        <div className='bg-cover bg-no-repeat w-full bg-center'>
          <Navbar />
          <Hero />
        </div>          
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;