import React, { useState } from 'react'
import { DotChartOutlined, GithubOutlined, LikeOutlined, LogoutOutlined } from '@ant-design/icons'
import ModalLogout from './ModalLogout'
import { useLocation, useNavigate } from 'react-router-dom';


function Header() {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const navigate = useNavigate()
  const {pathname} = useLocation();
  function handleLogOut(){
    localStorage.clear()
    navigate("/")
    window.location.reload()
}
  return (
    <div className='flex justify-between py-8 bg-[#001529] px-10 border-b-[2px] border-white'>
        <div className='flex items-center space-x-10'>
            <GithubOutlined className='scale-[3] text-white'/>
            <h2 className='text-[22px] text-white font-semibold'>Admin Panel</h2>
        </div>
        <div className=''>
            <button onClick={() => setIsLogoutModalOpen(true)} className="your-button-class">
              <LogoutOutlined  className='scale-[1.7] text-white'/>
            </button>
            {isLogoutModalOpen && (
                <ModalLogout OpenModal={isLogoutModalOpen} setOpenModal={setIsLogoutModalOpen}>
                <h2 className='text-center'>Are you sure you want to log out?</h2>
                <div className="flex justify-center mt-4 gap-10">
                    <button onClick={handleLogOut}  className="bg-red-500 text-white px-4 py-2 rounded-lg">
                        Yes
                    </button>
                    <button onClick={() => setIsLogoutModalOpen(false)} className="bg-gray-500 text-white px-4 py-2 rounded-lg">
                        No
                    </button> 
                </div>
                </ModalLogout>
      )}
        </div>
    </div>
  )
}

export default Header