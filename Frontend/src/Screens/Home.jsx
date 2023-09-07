import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card/Card'
import Caraousel from '../Components/Caraousel'
const Home = () => {
  return (
    <div className='bg'>
      <Navbar />
      <div>
        <Caraousel />
      </div>
      <div className='m-3'>
        <Card /><Card /><Card /><Card />
      </div>
      <Footer />
    </div>
  )
}

export default Home
