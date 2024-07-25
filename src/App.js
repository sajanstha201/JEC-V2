
import { Home } from './webpage/Home';
import { HashRouter ,Routes,Route } from 'react-router-dom';

import Footer from './components/Navbar/Footer';
import Events from './components/AboutUsPage/Events';
import AboutUniversity from './components/AboutUsPage/AboutUniversity';

function App() {
  return (
    <div className="App">
      <HashRouter>
     
        <Routes>
          <Route path='/' element={<Home/>}></Route>
         
        </Routes>
        <Events/>
        <AboutUniversity/>
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
