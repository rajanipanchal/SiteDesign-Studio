import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contect from './components/Contect'; 
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Home from './components/Pages/Home';
import Services from './components/Services';
import AboutUs from './AboutUs';

function App() {
  return (
    <> 
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Portfolio' element={<Portfolio/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/>

      </Routes>
      <About/>
      <Contect/>
      </Router>

      {/* <Navbar/> */}
    

     
    

      
       
    
  



    </>
  );
}

export default App;
