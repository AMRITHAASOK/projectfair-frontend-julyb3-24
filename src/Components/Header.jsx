import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { GiLaptop } from "react-icons/gi";
function Header() {
  return (
    <div>
       <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
          <GiLaptop  className='fs-1 me-2 ms-4'/>
          <span className='fw-bolder'>Project Fair</span>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header
