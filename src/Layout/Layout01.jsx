import React, { Children } from 'react'
import Footer from '../SharedComponents/footer'
import Navbar01 from '../SharedComponents/Navbar01'

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
