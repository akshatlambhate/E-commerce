import React, { Children } from 'react'
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
