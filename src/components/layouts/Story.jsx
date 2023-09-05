import React from 'react'
import Footer from '../Footer'
import Nav from '../Nav'
import MyStory from '../Pages/MyStory';
import SwipeablePages from '../functions/SwipeablePages';

const Story = () => {
  return (
    <>
    <Nav/>
    {/* <SwipeablePages/> */}
    <MyStory/>
    <Footer/>
    </>
  )
}

export default Story