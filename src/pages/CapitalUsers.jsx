import { DeleteOutlined, EditOutlined, LineOutlined, MedicineBoxOutlined, MoreOutlined } from '@ant-design/icons'
import { Button, Input, Modal, Popover } from 'antd'
import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useAxios } from '../hooks/useAxios'
import CustomTable from '../components/CustomTable'

function CapitalUsers() {
  const navigate = useNavigate()
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [refresh, setRefresh] = useState(false)

  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 5,
    },
  });
  const columns = [
    {
      title: 'ID',
      dataIndex: 'index',
    },
    {
      title: 'Ismi',
      dataIndex: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Telefon raqami',
      dataIndex: 'number',
    },
    {
      title: 'Kasbi',
      dataIndex: 'job',
    },
    {
      title: 'Holati',
      dataIndex: 'status',
    },
    {
      title: 'Manzil',
      dataIndex: 'address',
    },
    {
      title: 'Batafsil',
      dataIndex: 'action',
    },
];

  /* Search start */          
  function handleSearchValue(e) {
    setIsLoading(true)
    if (e.target.value) {
      const filteredData = users.filter(item => item.name.length > 0 && item.name.toLowerCase().includes(e.target.value.toLowerCase().trim()));
      setTimeout(() => {
        setUsers(filteredData)
        setIsLoading(false)
      }, 1000)
    }
    else {
      setTimeout(() => {
        setRefresh(!refresh)
      }, 1000);    
    }
  }
  /* Search end */

  /* Delete part start */
  const [deleteModal, setDeleteModal] = useState(false)       
  const [deleteId, setDeleteId] = useState(null)
  function handleDeleteOrganization(id){
    setDeleteModal(true)
    setDeleteId(id)
  }
  function handleSureDeleteOrganization(){
    useAxios().delete(`/users/${deleteId}`).then(res => {
      setDeleteModal(false)
      setIsLoading(true)
      setTimeout(() => {
        toast.success("Foydalanuvchi o'chirildi!")
        setRefresh(!refresh)
    }, 1000);
    })
  }
  /* Delete part end */

  /* Get all user add start */
  useEffect(() => {
    useAxios().get(`/users`).then(res => {
      setIsLoading(false)
      setUsers(res.data.map((item, index) => {
        item.index = index +1
        item.address = <Popover placement="top" content={item.address}>
        <p className='text-ellipsis whitespace-nowrap cursor-pointer overflow-hidden w-[200px] inline-block'>{item.address}</p>
        </Popover>
        item.name = item.name ? item.name : <LineOutlined/>
        item.email = item.email ? item.email : <LineOutlined/>
        item.status = item.status ? "Faol" : "Faol emas"

        item.action = <div className='flex items-center gap-7'>
            <MoreOutlined /* onClick={() => navigate(`${item.id}`)} */ className='rotate-[90deg] scale-[1.5] hover:scale-[1.7] duration-300 cursor-pointer'/>
            <EditOutlined /* onClick={() => navigate(`${item.id}/edit`)} */ className='scale-[1.5] hover:scale-[1.7] duration-300 cursor-pointer text-blue-800'/>
            <DeleteOutlined onClick={() => handleDeleteOrganization(item.id)} className='scale-[1.5] hover:scale-[1.7] duration-300 cursor-pointer text-red-700'/>
        </div>
        return item
      }))
    })
  }, [refresh])
  /* Get all user end */
  function handlePaginationChange(page){
    setTableParams({
      pagination:page
    })
  }
  return (
    <div className='p-5'>
        <Toaster position='top-center' reverseOrder={false}/>
        <div className='flex items-center justify-between'>
            <div>
              <h2 className='font-bold text-[25px]'>Poytaxt foydalanuvchilari</h2>
              <span className='text-[15px] pl-1 text-slate-400'>foydalanuvchilar ({data.length})</span>
            </div>
            <Button onClick={() => navigate("add")} icon={<MedicineBoxOutlined/>} size='large' type='primary'>Qo'shish</Button>
        </div>
        <div className='flex mt-5 items-center space-x-5'>
            <Input onChange={handleSearchValue} className='w-[350px]' size='large' type='text' allowClear placeholder='Qidirish...'/>
        </div>
        <div className='mt-5'>
          <CustomTable tableParams={tableParams} onChange={handlePaginationChange} columns={columns} data={users} isLoading={isLoading}/>
        </div>
        <Modal width={"600px"} centered  title={<h2 className="text-[21px] font-semibold">Foydalanuvchi o'chirmoqchimisiz?</h2>} open={deleteModal} onOk={handleSureDeleteOrganization} onCancel={() => setDeleteModal(false)}>
          <div className="h-[22px] flex justify-center items-center"></div>
        </Modal>
      </div>
  )
}

export default CapitalUsers