import React from 'react'
import{Hero,Categories,Main,GetInTouch,SaleSection,InfoBar} from '../components/Index'
import LayoutHome from '../components/Layout/LayoutHome'

const Home = () => {
  return (
    <div>
    <LayoutHome>
      <Hero />
      <Categories />
      <Main />
      <InfoBar />
      <GetInTouch />
      <SaleSection />
    </LayoutHome>
      
    </div>
  )
}

export default Home
