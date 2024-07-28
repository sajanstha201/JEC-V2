import { HashRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/Navbar/Footer';
import Events from './webpage/AboutUsPage/Events';

import About from './components/About/About';



import { Header } from './components/Navbar/Header';
import Home from './webpage/Home';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />

        </Routes>
      
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
