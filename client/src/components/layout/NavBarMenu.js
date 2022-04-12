import React from 'react'
import NavBar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'
import house from '../../assets/house.png'
import logout from '../../assets/logout.png'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
const NavBarMenu = () => {
  return (
    <NavBar variant='dark' className='shadow' bg="primary" expand="lg">
        <NavBar.Brand  className='font-weight-bolder text-white' href="#home">
            <img src={house} alt='home' width='32' height='32' className='mr-2'/>
            CODEMAN 
        </NavBar.Brand>
        <NavBar.Toggle aria-controls="basic-navbar-nav" />
        <NavBar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link className="font-weight-bolder text-white" to='/dashboard' as ={Link}>
                    Dashboard
                </Nav.Link>
                <Nav.Link className="font-weight-bolder text-white" to='/house' as ={Link}>
                    House
                </Nav.Link>
            </Nav>

            <Nav className="mr-sm-2">
                <Nav.Link className="font-weight-bolder text-white" disabled >
                    Welcome Huy Tran
                </Nav.Link>
                    <Button variant='secondary' className='font-weight-bolder text-white'>
                        <img src={logout} alt='logout' width='32' height='32' className='mr-2'/>
                        Logout
                    </Button>
            </Nav>
        </NavBar.Collapse>
    </NavBar>
  )
}

export default NavBarMenu