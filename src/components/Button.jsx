import React from 'react'

function Button({children, type, extraStyle}) {
  return (
    <button className={`p-[10px] font-bold text-[18px] leading-[23px] hover:opacity-75 duration-300 text-white bg-[#BC8E5B] rounded-[76px] ${extraStyle}`}
    type={type}>{children}</button>
  )
}

export default Button


{/* <Input className='mb-[14px] outline-none rounded-[6px] w-full pl-4 text-[16px] leading-[19px] border-[1px] border-solid border-[#BC8E5B]' placeholder="Create your Password" 
           prefix={<UnlockOutlined style={{ color: 'rgba(0,0,0,.80)' }} />}
          name="password" type="tel"  required size='large' allowClear/>
          <div className="text-left">
            <Link to={"/"} className='text-[18px] text-[#2D88D4] font-semibold leading-[24px]'>Sign In</Link>
          </div>
          <Button className='h-[35px] mt-[15px] w-full p-[10px] font-bold text-[18px] leading-[23px] hover:opacity-75 duration-300 text-white bg-[#BC8E5B] rounded-[8px]' type="submit">
            {isLoading ? <img className='scale-[3] mx-auto' src={Loading} alt="Loading..." width={22} h /> : 'Sign up'}
          </Button> */}