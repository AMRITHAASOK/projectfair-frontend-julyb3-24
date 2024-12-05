import React from 'react'
import { FaSearch } from "react-icons/fa";
function Projects() {
  return (
    <>
    <div className="container p-5">
      <h1 className='text-center my-5'>All Projects</h1>
      <div className="d-flex w-70 ">
        <input type="text" className='form-control' placeholder='Search by technology' />
        <FaSearch className='fs-3 mt-1 ' style={{marginLeft:'-30px'}}/>
      </div>
    </div>
      
    </>
  )
}

export default Projects
