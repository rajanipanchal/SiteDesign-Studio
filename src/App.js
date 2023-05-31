import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contect from './components/Contect';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Home from './components/Pages/Home';
import Services from './components/Services';
import AboutUs from './AboutUs';
import CheckOut from './components/CheckOut';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Portfolio' element={<Portfolio />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/CheckOut' element={<CheckOut/>}/>
        </Routes>
        <About />
        <Contect />
      </Router>


    </>
  );
}

export default App;
