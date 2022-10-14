import React, { Children } from 'react'
import Footer from '../components/SharedComponents/footer'

const LayoutHome = ({children}) => {
  return (
    <div>
     {children}
    <Footer />
    </div>
  )
}

export default LayoutHome
