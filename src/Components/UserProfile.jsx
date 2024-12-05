import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
function UserProfile() {
  const [open, setOpen] = useState(false);
  return (
    <div>
     <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        style={{float:'right'}}
      >
        View Details
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
                <div className='text-center'>
             
                <img src="https://www.nicepng.com/png/full/128-1280406_view-user-icon-png-user-circle-icon-png.png" width={'200px'} height={'200px'} className='mb-3' alt="" />
                <input type="text"  placeholder='Username' className='form-control mb-3'/>
                <input type="text"  placeholder='Github' className='form-control mb-3'/>
                <input type="text"  placeholder='LinkedIn' className='form-control mb-3'/>
                <button className='btn'>Update</button>
                </div>
        </div>
      </Collapse>
    </div>
  )
}

export default UserProfile
