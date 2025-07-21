import React, { useRef, useState } from 'react'
import './Register_Component.css'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import authService from '../../appwrite/auth';
import { toast } from 'react-toastify';



function Register_Component() {

    const navigate = useNavigate()
    const {register, handleSubmit} = useForm();
    const [data , setData] = useState({});
    // const inputRef = useRef();



    const handleSubmitData = async(data) => {
      try {
        const userData =  authService.createAccount(data).then(() => navigate('/login')).catch(error => toast(error))
        console.log(userData)
        // if(userData){
        //   toast("logged In")
        //       // console.log(userData)
        //       navigate('/login')
        //   }
      } catch (error) {
        toast.error('error')
      }

        
        // console.log(data)
        
    }


  return (
    <form onSubmit={handleSubmit((data) => handleSubmitData(data))}>

      <div className="login-container">
        <div className="left">
          <img src="https://images.unsplash.com/photo-1486175836253-744ee86c98ff?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="right">
  
        <h1>Register</h1>
        <div className="input-container">
          <h3>Name</h3>
          <input {...register('name', {required:true})} placeholder='Enter your Name' />
        </div>
        <div className="input-container">
          <h3>Email</h3>
          <input {...register('email', {required: true})} placeholder='Enter your email'  />
        </div>
        <div className="input-container">
          <h3>Password</h3>
          <input {...register('password', {required:true})} placeholder='Enter your password'  />
        </div>
        <div className="input-container">
          <h3>Token</h3>
          <input {...register('token', {required:true})} placeholder='Enter your token' />
        </div>
        
        <p>Already have an account? <span onClick={() => navigate('/login')}>Log In</span></p>
        <button type='submit'>Signup</button>
        
        </div>
      </div>
    </form>
  )
}

export default Register_Component