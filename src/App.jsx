import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          {/* Hero Section will go here */}
        </div>

        {/* Other sections will go here */}
        
        <div className='relative z-0'>
          {/* Contact section will go here */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
