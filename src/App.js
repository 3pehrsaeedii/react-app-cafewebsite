import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import Menu from './pages/Menu';
import Contact from "./pages/Contact"
import About from './pages/About';
import Footer from './components/Footer';
function App() {
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='Menu' element={<Menu/>} />
    <Route path='contact' element={<Contact/>}/>
    <Route path='about' element= {<About/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  );
}

export default App;
