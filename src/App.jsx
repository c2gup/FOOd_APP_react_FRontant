
import './App.css';

import Footer from './Components/Footer';
import Header from './Components/Header';
import OurFood from './Components/OurFood';
import Eome from './Components/Home';
import AboutUs from './Components/AboutUs';
import SignIn from './Components/SignIn';
import NewPageTest from './Components/NewPageTest';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [count,setCount] = useState(0);

  function handelcount(){
    setCount(count+1);
  }

  return (
    <BrowserRouter>
      <Header count={count} />
      <Routes>
        <Route path="/" element={< Eome handelcounts={handelcount}   />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/new" element={<NewPageTest />} />
        <Route path="/ourfood" element={<OurFood handelcounts={handelcount}  />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

