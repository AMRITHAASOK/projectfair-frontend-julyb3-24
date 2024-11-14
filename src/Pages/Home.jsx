import React from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../Components/ProjectCard'

function Home() {
  return (
    <>
      <div className="container">
        <div className="row p-5 mb-5">
          <div className="col-6 p-5">
            <h1>Project Fair</h1>
            <p style={{textAlign:'justify'}}>Project management software connects teams, enabling everyone in the organization to prioritize the work that matters most. Software that fosters this type of high-level collaboration is essential for most companies. But at a glance, many of the tools organizations use have seemingly similar features. Use our guide to narrow down your choices and understand which tools are best for different types of companies.</p>
            <Link to={'/login'}>
            <button className='btn'>Get Started</button>
            </Link>
          </div>
          <div className="col-6">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/web-developer-4500464-3783746.png" alt="" />
          </div>
        </div>

        <div className=" p-5 mt-5">
          <h2 className='text-center'>Explore Our Projects</h2>
              <div className="row p-5">
                <div className="col-4">
                      <ProjectCard/>
                </div>
                <div className="col-4">
                      <ProjectCard/>
                </div>
                <div className="col-4">
                      <ProjectCard/>
                </div>
              </div>
        </div>

        <div className="row text-center">
              <Link to={'/projects'}>
              <button className='btn btn-dark'>View Project</button>
              </Link>
        </div>
      </div>
      
    </>
  )
}

export default Home
