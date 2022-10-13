import React, { Children } from 'react'
import Navbar from '../components/SharedComponents/Navbar'
import Footer from '../components/SharedComponents/footer'

const Layout01 = ({children}) => {
  return (
    <div>
      <Navbar />
     {children}
    <Footer />
    </div>
  )
}

export default Layout01
