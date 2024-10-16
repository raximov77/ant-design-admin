import React, { useState } from 'react';
import { GithubOutlined} from '@ant-design/icons';
import ModalLogout from './ModalLogout';
import { useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function handleLogOut() {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  }

  return (
    <div className='flex justify-between py-8 bg-[#001529] px-10 border-b-[2px] border-white'>
      <div className='flex items-center space-x-10'>
        <GithubOutlined className='scale-[3] text-white' />
        <h2 className='text-[22px] text-white font-semibold'>Admin Panel</h2>
      </div>
      <div className=''>
        <button onClick={() => setIsLogoutModalOpen(true)} className="your-button-class">
          <i className="scale-[1.5] text-white fa-solid fa-arrow-right-from-bracket"></i>
        </button>
        
        <ModalLogout 
          isVisible={isLogoutModalOpen}
          onConfirm={handleLogOut}
          onCancel={() => setIsLogoutModalOpen(false)}
        />
      </div>
    </div>
  );
}

export default Header;
