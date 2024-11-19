import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Hero';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import SkillsAndExperties from './pages/SkillsAndExperties';

// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/src/locomotive-scroll.scss';
import { useEffect } from 'react';
import Loader from './components/Loader';




function App() {
  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector('#main'),
  //     smooth: true,
  //   });

  //   return () => {
  //     scroll.destroy();
  //   };
  // }, []);

 const loaderAnimation=()=> {
    var loader = document.querySelector("#loader");
    setTimeout(function () {
        loader.style.top = "-100%"; // Move loader out of view
    }, 5000);
}

useEffect(()=>{loaderAnimation()},[])


  return (
 
    < div >
    {/* <Loader/> */}
    <Navbar/>
    
    <div className='  px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] mt-5 min-h-[100vh] flex-1  ' id='main' >
      
      <div id='temp ' >
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/project' element={<Project/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/skills' element={<SkillsAndExperties/>}></Route>
      
     
    </Routes>
    
    <Footer/>
    </div>
  </div>
  </div>
  )
}

export default App