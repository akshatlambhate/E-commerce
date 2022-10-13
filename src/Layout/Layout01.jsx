import React, { Children } from 'react'
import Navbar01 from '../components/SharedComponents/Navbar01'
import Footer from '../components/SharedComponents/footer'

const Layout01 = ({children}) => {
  return (
    <div>
    <Navbar01 />
     {children}
    <Footer />
    </div>
  )
}

export default Layout01
