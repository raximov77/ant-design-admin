import React, { useContext, useState } from 'react';
import LoginInput from '../components/LoginInput';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import Loading from "../assets/images/loading.png"
import toast, { Toaster } from 'react-hot-toast';
import { Context } from '../context/AuthContext';
import SiteLogo from "../assets/images/favicon.ico"

function Register() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const {setRegister }= useContext(Context)

  function handleRegisterSubmit(e) {
    e.preventDefault();
    const data = {
      login: e.target.login.value.trim(),
      password: e.target.password.value.trim(),
    };
      setIsLoading(true);
      toast.success('Successfully registered ' + data.login)
      setTimeout(() => {
        setRegister(data)
        navigate(-1)
      },1000)
      
  }
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='flex items-center mb-[35px] gap-4'>
        <img src={SiteLogo} alt="Site Logo" width={90} height={90}/>
        <h2 className="text-[36px] leading-[44px] text-[#4F4F4F] font-semibold">Admin paneli</h2>
      </div>
      <div className='w-[620px] mx-auto bg-white'>
        <form onSubmit={handleRegisterSubmit} className="w-[348px] mx-auto pb-[100px]" autoComplete="off">
          <Toaster position="top-right" reverseOrder={false}/>
          <LoginInput placeholder="Kirish" name="login" type="text" extrStyle="mb-[14px]" />
          <LoginInput placeholder="Maxfiy so'z" name="password" type="tel" extrStyle="mb-[14px]" />
          <div className="text-left">
            <Link to={"/"} className='text-[18px] text-[#2D88D4] font-semibold leading-[24px]'>Sign In</Link>
          </div>
          <Button extraStyle={"h-[42px] mt-[15px] w-full p-[10px] font-bold text-[18px] leading-[23px] hover:opacity-75 duration-300 text-white bg-[#BC8E5B] rounded-[76px]"} type="submit">
            {isLoading ? <img className='scale-[3] mx-auto' src={Loading} alt="Loading..." width={22} h /> : 'Sign up'}
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Register