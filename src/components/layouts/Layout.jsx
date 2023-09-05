import React from 'react'
import Footer from '../Footer'
import Nav from '../Nav'
import Landing from '../Pages/Landing';
import SwipeablePages from '../functions/SwipeablePages';

const Layout = () => {
  return (
    <>
    <Nav/>
    {/* <SwipeablePages/> */}
    <Landing/>
    <Footer/>


</>
  )
}

export default Layout