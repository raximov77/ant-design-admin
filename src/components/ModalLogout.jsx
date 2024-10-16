import React from 'react';
import { Modal } from 'antd';

const ModalLogout = ({ isVisible, onConfirm, onCancel }) => {
  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"></div>
      )}
      <Modal
        width={"600px"}
        title={<h2 className="text-[21px] font-semibold">Platformadan chiqishni xohlaysizmi?</h2>}
        open={isVisible}
        onOk={onConfirm}
        onCancel={onCancel}
        okText="Ha"
        cancelText="Yo'q"
        centered
        className="z-50" 
      >
        <div className="h-[22px] flex justify-center items-center"></div>
      </Modal>
    </>
  );
};

export default ModalLogout;
