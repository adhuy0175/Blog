import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Link} from 'react-router-dom'

const Register = () => {
  return <> <Form>
  <Form.Group >
    <Form.Control type='text' placeholder='Username' name='Username' required/>
  </Form.Group>
  <br/>
  <Form.Group >
    <Form.Control type='password' placeholder='Password' name='Password' required/>
  </Form.Group>
  <br/>
  <Form.Group >
    <Form.Control type='password' placeholder='Confirm Password' name='ConfirmPassword' required/>
  </Form.Group>
  <Button variant="success" type="submit" value="Login">Login</Button>
</Form>
<p>Already have an account?
  <Link to='/login'><Button to='/register' size='sm' className='ml-2'> Login</Button></Link>
</p>
</> 
}
export default Register