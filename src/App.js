import React from 'react';

import {
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';
import CustomForm from  './components/CustomForm.js'
import Update from './components/Update'



// import pages
import Home from './components/pages/Home'


const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/customform' element={<CustomForm />} />
        <Route path='/update' element={<Update/>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
