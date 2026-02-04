import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import About from '../pages/About'
import {Routes,Route} from 'react-router-dom'
import Contact from '../pages/Contact'
import Projects from '../pages/Projects'

const Allroutes = () => {
  return (
    <>
      <Header/>
      <main>
        <Routes>
            < Route path='/' element={<Home />}/>
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/projects' element={<Projects/>} />
        </Routes>
        {/* <Home/>
        <About/> */}
      </main>
      <Footer/>
    </>
  )
}

export default Allroutes
