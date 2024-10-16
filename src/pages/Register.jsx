import React, { useContext, useState } from 'react';
import LoginInput from '../components/LoginInput';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import Loading from "../assets/images/loading.png"
import toast, { Toaster } from 'react-hot-toast';
import { Context } from '../context/AuthContext';
import SiteLogo from "../assets/images/favicon.ico"
import { UnlockOutlined, UserOutlined } from '@ant-design/icons';

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
      toast.success("Muvaffaqiyatli ro'yxatdan o'tdingiz" + data.login)
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
          <LoginInput placeholder="Kirish" name="login" type="text" extrStyle="mb-[14px]" prefixIcon={UserOutlined} size='large'/>
          <LoginInput placeholder="Maxfiy so'z" name="password" type="password" extrStyle="mb-[34px]" prefixIcon={UnlockOutlined} size='large'/>
          <div className="text-left mb-[14px]">
            <Link to={"/"} className='text-[18px] text-[#2D88D4] font-semibold leading-[24px]'>Kirish</Link>
          </div>
          <Button isLoading={isLoading} loadingSrc={Loading}  type="submit" className="custom-button" extraStyle={"mt-[15px]"}>
            {isLoading ? <img className='scale-[3] mx-auto' src={Loading} alt="Loading..." width={22} h /> : "Ro'yxatdan o'tish"}
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Register