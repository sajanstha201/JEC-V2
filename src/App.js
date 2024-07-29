import { HashRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/Navbar/Footer';
import About from './components/About/About';
import { Header } from './components/Navbar/Header';
import Home from './webpage/Home';
import ContactUsPage from './components/Contact/ContactUsPage';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUsPage/>}/>

        </Routes>
      
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
