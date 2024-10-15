import React, { useContext, useState } from 'react';
import LoginInput from '../components/LoginInput';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { Context } from '../context/AuthContext';
import Loading from "../assets/images/loading.png"
import toast, { Toaster } from 'react-hot-toast';
import SiteLogo from "../assets/images/favicon.ico"

function Login() {
  const { setToken, register } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);

  function handleLoginSubmit(e) {
    e.preventDefault();
    const data = {
      login: e.target.login.value.trim(),
      password: e.target.password.value,
    };
    if(register){
      if (data.login == register.login && data.password == register.password) {
        setIsLoading(true);
        toast.success('Welcome to Udemy Inter. school ' + data.login)
        setTimeout(() => setToken(data),1000)
      } 
      else {
        setIsLoading(true);
        setTimeout(() => toast.error("This didn't work."),1000)
      }
    }
    else{
      if (data.login == 'admin' && data.password == '123') {
        setIsLoading(true);
        toast.success('Welcome to Admin Panel ' + data.login)
        setTimeout(() => setToken(data),1000)
      } 
      else {
        setIsLoading(true);
        setTimeout(() => toast.error("This didn't work."),1000)
      }
    }
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='flex items-center mb-[35px] gap-4'>
        <img src={SiteLogo} alt="Site Logo" width={90} height={90}/>
        <h2 className="text-[36px] leading-[44px] text-[#4F4F4F] font-semibold">Admin paneli</h2>
      </div>
        <div className='w-[620px] mx-auto bg-white'>
          <form onSubmit={handleLoginSubmit} className="w-[348px] mx-auto pb-[100px]" autoComplete="off">
            <Toaster position="top-right" reverseOrder={false}/>
            <LoginInput placeholder="Kirish" name="login" type="text" extrStyle="mb-[14px]" />
            <LoginInput placeholder="Maxfiy so'z" name="password" type="password" extrStyle="mb-[34px]" />
            <Button extraStyle={"h-[42px] w-full"} type="submit">
              {isLoading ? <img className='scale-[2] mx-auto' src={Loading} alt="Loading..." width={22} h /> : 'Login'}
            </Button>
            <div className="flex justify-center items-center mt-[14px]">
              <Link to="/sign-up" className="text-[18px] text-[#2D88D4] font-semibold leading-[24px]">Sign up</Link>
            </div>
          </form>
          </div>
    </div>
  );
}

export default Login;
