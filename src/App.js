import logo from './logo.svg';
import './App.css';
import { Home } from './webpage/Home';
import { HashRouter ,Routes,Route } from 'react-router-dom';
import { HeaderTop } from './components/Navbar/HeaderTop';
import { AboutUsPage } from './components/AboutUsPage/AboutUsPage';
function App() {
  return (
    <div className="App">
      <HashRouter>
        <HeaderTop/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about-us' element={<AboutUsPage/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
