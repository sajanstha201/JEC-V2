import { HashRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/Navbar/Footer';
import About from './components/About/About';
import {Header} from './components/Navbar/Header'
import Home from './components/webpage/Home'
import ContactUsPage from './components/Contact/ContactUsPage';
import Facilities from './components/Facilities/Facilities';
import Chatbot from './components/Bot/Chatbot';
import News from './components/News/News';
import Events from './components/webpage/Events/Events';
import ExploreEvent from './components/webpage/Events/ExploreEvent';
import LearnMore from './components/Facilities/LearnMore';
import Academics from './components/Academics/Academics';
import Alearmore from './components/Academics/AcademicLearnMore'
import OnlineApply from './components/ApplyOnline/OnlineApply';
import Printform from './components/ApplyOnline/Printform';
import PrivacyPolicy from './components/Privacy Policy/PrivacyPolicy';
import Admission from './components/Admission/Admission';
function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Chatbot/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUsPage/>}/>
          <Route path="/facilities" element={<Facilities/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/exploreEvents" element={<ExploreEvent/>}/>
          <Route path="/learnMore" element={<LearnMore/>}/>
          <Route path="/academics" element={<Academics/>}/>
          <Route path="/alearnmore" element={<Alearmore/>}/>
          <Route path="/onlineApply" element={<OnlineApply/>}/>
          <Route path="/printForm" element={<Printform/>}/>
          <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
          <Route path="/admission" element={<Admission/>}/>
        </Routes>
      
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
