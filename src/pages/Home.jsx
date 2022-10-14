import React from 'react'
import Layout01 from '../Layout/LayoutHome'
import{Navbar,Hero,Categories,Main,GetInTouch,SaleSection,Footer,InfoBar} from '../components/Index'
import LayoutHome from '../Layout/LayoutHome'

const Home = () => {
  return (
    <div>
    <LayoutHome>
      <Hero />
      <Categories />
      <Main />
      <GetInTouch />
      <InfoBar />
      <SaleSection />
    </LayoutHome>
      
    </div>
  )
}

export default Home
