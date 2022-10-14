import React from 'react'
import Layout01 from '../Layout/Layout01'
import { AboutUs } from '../components/Index'
import { SubAbout } from '../components/Index'



const AboutPage = () => {
  return (
    <div>
        <Layout01 >
            <AboutUs/>
            <SubAbout/>
           </Layout01>
      
    </div>
  )
}

export default AboutPage
