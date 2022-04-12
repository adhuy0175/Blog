import React from 'react'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import User from '../components/auth/User'
import NavBarMenu from '../components/layout/NavBarMenu'
const Auth = ({authRoute}) => {
  let body = (  <>
    {authRoute === 'login' && <Login/>}
    {authRoute === 'register' && <Register/>}
    {authRoute === 'user' && <User/>}
  </>)
  return (<>
    <NavBarMenu/>
     <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <h1>CODEMAN</h1>
          <h4>A place to lent house</h4>
            {body}
        </div>
      </div>
  </>
  )
}

export default Auth