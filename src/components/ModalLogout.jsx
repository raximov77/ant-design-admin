import React from 'react'

function ModalLogout({children, setOpenModal, OpenModal}) {
  return (
    <div id='wrappper' onClick={(e) => e.target.id == "wrapper" ? setOpenModal(false) : ""} className={`fixed z-50 duration-300 inset-0 flex justify-center ${OpenModal ? "scale-100" : "scale-0"} bg-[#0000002s9] items-center backdrop-blur`}>
        <div className='bg-white w-[300px] p-5 rounded-lg'>
        {children}
        </div>
    </div>
  )
}

export default ModalLogout