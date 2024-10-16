import React from 'react';

const Button = ({ isLoading, children, className, extraStyle, loadingSrc, ...props }) => {
  return (
    <button
      className={`h-[35px] w-full p-[7px] font-bold text-[17px] leading-[20px] hover:opacity-75 duration-300 text-white bg-[#BC8E5B] rounded-[8px] ${className}`}
      {...props}
    >
      {isLoading ? (
        <img className='scale-[2] mx-auto' src={loadingSrc} alt="Loading..." width={22} />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;


