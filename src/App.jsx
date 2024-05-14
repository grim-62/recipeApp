import React from 'react'
import Nav from './components/Nav'
import Router from "../routers/Router";
const App = () => {
 const bgimage = {
    backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/5c9a7473a09a7e2becf18ce6/1573250707973-2NU0MRJ7X4XBIKS7DOVB/home-carousel-2.jpg')`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
 }
 
  return (
    <>
    <div style={bgimage} className='p-5 overflow-x-hidden'>
      <Nav/>
      <Router/>
    </div>
  </>
  )
}

export default App