import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addProjectAPI } from '../services/allAPIs';
function AddProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//For holding projectDetails from the form
  const [projectDetails,setProjectDetails] = useState({
        title:"",
        language:"",
        github:"",
        website:"",
        overview:"",
        projectImg:""
  })
  //Convert image file into url
  const [preview,setPreview]=useState('')
  

  const handleAddProject=async()=>{
      console.log(projectDetails);
      const {title,language,github,website,overview,projectImg}=projectDetails

      if(!title||!language||!github||!website||!overview||!projectImg){
        alert("Please fill the form")
      }
      else{
        //Creation of reqBody
        const reqBody = new FormData()
        reqBody.append("title",title),
        reqBody.append("language",language),
        reqBody.append("github",github),
        reqBody.append("website",website),
        reqBody.append("overview",overview),
        reqBody.append("projectImg",projectImg)
        //Creation of reqHeader
        // const token

        const reqHeader={

        }


        //API Calling
        try{
            const response = await addProjectAPI(reqBody,reqHeader)
        }
        catch(err){
          console.log(err);
          
        }
      }
      
  }

  useEffect(()=>{
    if(projectDetails.projectImg){
      setPreview(URL.createObjectURL(projectDetails.projectImg))
    }
  },[projectDetails.projectImg])

  return (
    <div>

      <Button variant="primary" onClick={handleShow}>
        Add
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            
            <div className="col-6">
                <label>
                  <input type="file" onChange={e=>setProjectDetails({...projectDetails,projectImg:e.target.files[0]})}  style={{display:'none'}}/>
                  <img src={preview?preview:"https://static.vecteezy.com/system/resources/previews/000/457/473/original/vector-awesome-project-line-art-design-youthful-doodle-style-black-and-white-illustration-business-startup-and-project-concept-thin-line-banner-and-background-design.jpg" } width={'100%'} height={'350px'} alt="" />

                </label>
              <p className='text-danger fw-bolder'>* Only allowes following file type formats .png, .jpeg, .jpg</p>
            </div>

            <div className="col-6">

              <FloatingLabel controlId="floatingInput" label="Title" className="mb-3" >
                <Form.Control onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})} type="text" placeholder="Title" />
              </FloatingLabel>

              <FloatingLabel controlId="floatingPassword" label="Language" className="mb-3">
                <Form.Control onChange={e=>setProjectDetails({...projectDetails,language:e.target.value})} type="text" placeholder="Language" />
              </FloatingLabel>

              <FloatingLabel controlId="floatingPassword" label="Github" className="mb-3">
                <Form.Control type="text" placeholder="Github" onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})} />
              </FloatingLabel>

              <FloatingLabel controlId="floatingPassword" label="Website" className="mb-3">
                <Form.Control onChange={e=>setProjectDetails({...projectDetails,website:e.target.value})} type="text" placeholder="Website" />
              </FloatingLabel>

              <FloatingLabel controlId="floatingTextarea2" label="Overview" className="mb-3">
              <Form.Control as="textarea" placeholder="Overview" onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})} style={{ height: '100px' }} />
              </FloatingLabel>
            </div>
          </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddProject}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProject
