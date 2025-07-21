import React, { useState } from 'react'
import './Login_Component.css'
import { useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import authService from '../../appwrite/auth'
import { useSelector,useDispatch } from 'react-redux'
import { login } from '../../store/loginStore'

function Login_Component() {
  const navigate = useNavigate()
  const {register, handleSubmit} = useForm();
  const [data , setData] = useState({});
  const dispatch = useDispatch();
 

  const handleSubmitData = async(data) => {
      await authService.logout()
      const userData = await authService.login(data)
      if(userData){
        dispatch(login(data))
        navigate('/')
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
  
        <h1>Login</h1>
        <div className="input-container">
          <h3>Email</h3>
          <input {...register('email', {required: true})} placeholder='Enter your email'  />
        </div>
        <div className="input-container">
          <h3>Password</h3>
          <input {...register('password', {required:true})} placeholder='Enter your password' />
        </div>
        <p>Already have an account? <span onClick={() => navigate('/register')}>Sign In</span></p>
        <button type='submit'>Login</button>
        
        </div>
      </div>
    </form>
    )
}

export default Login_Component