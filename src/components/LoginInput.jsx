import React from 'react';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';

function LoginInput({ placeholder, type, name, extrStyle, prefix }) {
  return (
    <div className={`relative ${extrStyle}`}>
      {prefix && <span className="absolute left-3 top-2">{prefix}</span>}
      <input
        className={`py-[10px] outline-none rounded-[6px] w-full pl-10 text-[16px] leading-[19px] border-[1px] border-solid border-[#BC8E5B]`}
        type={type}
        required
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
}

export default LoginInput;

{/* <Input className='mb-[27px] outline-none rounded-[6px] w-full pl-4 text-[16px] leading-[19px] border-[1px] border-solid border-[#BC8E5B]' placeholder="Maxfiy so'z" 
            prefix={<UnlockOutlined style={{ color: 'rgba(0,0,0,.80)' }} />}
            name="password" type="password" required size='large' allowClear/>
            <Button className='h-[35px] w-full p-[10px] font-bold text-[17px] leading-[20px] hover:opacity-75 duration-300 text-white bg-[#BC8E5B] rounded-[8px]' type="submit">
              {isLoading ? <img className='scale-[2] mx-auto' src={Loading} alt="Loading..." width={22} h /> : 'Login'}
            </Button> */}
