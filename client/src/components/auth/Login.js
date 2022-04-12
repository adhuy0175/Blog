import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Link} from 'react-router-dom'
const Login = () => {
  const [LoginForm, setLoginForm] = React.useState({
    username: '',
    password: '',
  })
  
  return<> <Form>
    <Form.Group >
      <Form.Control type='text' placeholder='Username' name='Username' required/>
    </Form.Group>
    <br/>
    <Form.Group >
      <Form.Control type='password' placeholder='Password' name='Password' required/>
    </Form.Group>
    <Button variant="success" type="submit" value="Login">Login</Button>
  </Form>
  <p>don't have an account yet?
    <Link to='/register'><Button to='/register' size='sm' className='ml-2'> Register</Button></Link>
  </p>
  </> 
}

export default Login