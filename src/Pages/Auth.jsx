
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../services/allAPIs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Auth({register}) {

  const navigate = useNavigate()

  //To hold username email,password
  const [userDetails,setUserDetails]=useState({
    username:"",
    email:"",
    password:""
  })

  const handleRegister=async()=>{
        console.log(userDetails);
        const {username,email,password}=userDetails
        if(!username||!email||!password){

          toast.warn("Please fill the form", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
           
            });
        }
        else{
          try{
            ///API fetching
          const response = await registerAPI(userDetails)
          console.log(response);
          if(response.status==200){
            
            toast(response.data, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            
              });
              setTimeout(()=>{
                navigate('/login')
              },6000)
              

          }
          else{
            toast.error(response.response.data.message, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            
              });
          }
          }
          catch(err){
              toast.error("API Error" +err, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              
                });
          }
        }
        
  }

  const handleLogin=async()=>{
    console.log(userDetails);
    const {email,password}=userDetails
    if(!email||!password){

      toast.warn("Please fill the form", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
       
        });
    }
    else{
      try{
        ///API fetching
      const response = await loginAPI(userDetails)
      console.log(response);
      if(response.status==200){
        
        toast("Login Successful..", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        
          });

          setTimeout(()=>{
            navigate('/dashboard')
          },6000)
          //To store username in sessionStorage
          sessionStorage.setItem("username",response.data.currentUser.username)
      }
      else{
        toast.error(response.response.data, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        
          });
      }
      }
      catch(err){
          toast.error("API Error" +err, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          
            });
      }
    }
    
} 


  return (
    <div>
          <div className="row">
            <div className="col-6 p-5">
              <img src="https://cdni.iconscout.com/illustration/premium/thumb/account-login-8450658-6722872.png" alt="" />
            </div>
            <div className="col-6 p-5 text-center">
              <h1 className='my-3'>Project Fair</h1>
              <h6>Sign{
                register ? "Up" : "In"
                } </h6>

                {
                  register &&  <input onChange={e=>setUserDetails({...userDetails,username:e.target.value})} type="text" placeholder='Username' className='form-control mb-3' />
                }

              <input type="email" onChange={e=>setUserDetails({...userDetails,email:e.target.value})} placeholder='Email' className='form-control mb-3' />
              <input type="password" onChange={e=>setUserDetails({...userDetails,password:e.target.value})} placeholder='Password' className='form-control mb-3' />

             {
              register ?  <div>
              <button onClick={handleRegister} className='btn btn-dark mb-3'>SignUp</button>
              <p>Already Registred  ? <Link to={'/login'}>Login Now</Link> </p>
            </div>
              :
              <div>
              <button onClick={handleLogin} className='btn btn-dark mb-3'>SignIn</button>
              <p>New to here ? <Link to={'/register'}>Register Now</Link> </p>
            </div>

             }
            </div>
          </div>
          <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>

<ToastContainer />
    </div>
  )
}

export default Auth
