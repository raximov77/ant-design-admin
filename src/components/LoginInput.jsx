import React from 'react';
import { Input } from 'antd';

const LoginInput = ({ placeholder, name, type, required = true, allowClear = true, size = 'large', prefixIcon: PrefixIcon }) => {
  return (
    <Input
      className='mb-[25px] outline-none rounded-[6px] w-full pl-4 text-[16px] leading-[19px] border-[1px] border-solid border-[#BC8E5B]'
      placeholder={placeholder}
      prefix={<PrefixIcon style={{ color: 'rgba(0,0,0,.80)' }} />} 
      name={name}
      type={type}
      required={required}
      size={size}
      allowClear={allowClear}
    />
  );
};

export default LoginInput;


