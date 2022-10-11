import React, { Children } from 'react'
import Navbar from '../SharedComponents/Navbar'
import Footer from '../SharedComponents/footer'

const LayoutHome = ({children}) => {
  return (
    <div>
     {children}
    <Footer />
    </div>
  )
}

export default LayoutHome
