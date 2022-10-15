import React from 'react' 
import {LoginForm} from '../components/Index'
import Layout01 from '../components/Layout/Layout01'

const Login = () => {
  return (
    <div>
        <Layout01>
            <div className='py-12'> </div>
         <LoginForm />
        </Layout01>
      
    </div>
  )
}

export default Login
