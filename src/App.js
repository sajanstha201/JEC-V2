

import { Home } from './webpage/Home';
import { HashRouter ,Routes,Route } from 'react-router-dom';

import Footer from './components/Navbar/Footer';
import Events from './components/AboutUsPage/Events';
import AboutUniversity from './components/AboutUsPage/AboutUniversity';

=======
import './App.css';
import { Home } from './webpage/Home';
import { HashRouter ,Routes,Route } from 'react-router-dom';
import { Header } from './components/Navbar/Header';
import { AboutUsPage } from './components/AboutUsPage/AboutUsPage';

function App() {
  return (
    <div className="App">

     
        <Routes>
          <Route path='/' element={<Home/>}></Route>
         

        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/admission'/>
          <Route path='/about-us' element={<AboutUsPage/>}/>
          <Route path='/academic'/>
          <Route path='/facilities'/>
          <Route path='/news'/>
          <Route path='/contact-us'/>

        </Routes>
        <Events/>
        <AboutUniversity/>
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
