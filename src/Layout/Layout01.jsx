import React, { Children } from 'react'
import Navbar from '../SharedComponents/Navbar'
import Footer from '../SharedComponents/footer'

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
