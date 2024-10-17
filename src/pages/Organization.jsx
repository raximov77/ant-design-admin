import { LineOutlined, MedicineBoxOutlined } from '@ant-design/icons'
import { Button, Input, Modal, Pagination, Popover } from 'antd'
import React, { useEffect, useState } from 'react'
import CustomSelect from '../components/CustomSelect'
import CustomTable from '../components/CustomTable'
import { DeleteOutlined, EditOutlined, MoreOutlined } from '@ant-design/icons';
import { useAxios } from '../hooks/useAxios'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

function Organization() {
  const [refresh, setRefresh] = useState(false)
  const navigate = useNavigate()
  const columns = [
      {
        title: 'ID',
        dataIndex: 'index',
      },
      {
        title: 'Tashkilot nomi',
        dataIndex: 'companyName',
      },
      {
        title: 'INN',
        dataIndex: 'inn',
      },
      {
        title: 'Holati',
        dataIndex: 'status',
      },
      {
        title: 'Filial',
        dataIndex: 'regionName',
      },
      {
        title: 'Manzil',
        dataIndex: 'address',
      },
      {
        title: 'Yaratilgan vaqt',
        dataIndex: 'createdAt',
      },
      {
        title: 'Batafsil',
        dataIndex: 'action',
      },
  ];
  const [data, setData] = useState([]);

  const [regionId, setRegionId] = useState(null)

  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 5,
    },
  });
    
  /* Search start */          
  function handleSearchValue(e) {
    setIsLoading(true)
    if (e.target.value) {
      const filteredData = data.filter(item => item.companyName.length > 0 && item.companyName.toLowerCase().includes(e.target.value.toLowerCase().trim()));
      setTimeout(() => {
        setData(filteredData)
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
    useAxios().delete(`/organization/${deleteId}`).then(res => {
      setDeleteModal(false)
      setIsLoading(true)
      setTimeout(() => {
        toast.success("Tashkilot o'chirildi!")
        setRefresh(!refresh)
    }, 1000);
    })
  }
  /* Delete part end */
  
  const [isLoading, setIsLoading] = useState(false)
  const regionList = [
    {
      value:1,
      label:"Toshkent shahar"
    },
    {
      value:2,
      label:"Farg'ona viloyati"
    },
    {
      value:3,
      label:"Xorazm viloyati"
    },
    {
      value:4,
      label:"Andijon viloyati"
    },
  ]

  useEffect(() => {
    useAxios().get(`/organization?regionId=${regionId ? regionId : ""}`).then(res => {
      setIsLoading(false)
      setData(res.data.map((item, index) => {
        item.index = index +1
        item.address = <Popover placement="top" content={item.address}>
        <p className='text-ellipsis whitespace-nowrap cursor-pointer overflow-hidden w-[200px] inline-block'>{item.address}</p>
        </Popover>
        item.companyName = item.companyName ? item.companyName : <LineOutlined/>
        item.inn = item.inn ? item.inn : <LineOutlined/>
        switch(item.status){
          case "1":
            item.status = "Faol";
          break;
          case "2":
            item.status = "Faol emas";
          break;
          case "3":
            item.status = "Jarayonda";
          break;
        }
        item.action = <div className='flex items-center gap-7'>
            <MoreOutlined onClick={() => navigate(`${item.id}`)} className='rotate-[90deg] scale-[1.5] hover:scale-[1.7] duration-300 cursor-pointer'/>
            <EditOutlined onClick={() => navigate(`${item.id}/edit`)} className='scale-[1.5] hover:scale-[1.7] duration-300 cursor-pointer text-blue-800'/>
            <DeleteOutlined onClick={() => handleDeleteOrganization(item.id)} className='scale-[1.5] hover:scale-[1.7] duration-300 cursor-pointer text-red-700'/>
        </div>
        return item
      }))
    })
  }, [refresh, regionId])

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
              <h2 className='font-bold text-[25px]'>Tashkilotlar</h2>
              <span className='text-[15px] pl-1 text-slate-400'>tashkilotlar ({data.length})</span>
            </div>
            <Button onClick={() => navigate("add")} icon={<MedicineBoxOutlined/>} size='large' type='primary'>Qo'shish</Button>
        </div>
        <div className='flex mt-5 items-center space-x-5'>
            <Input onChange={handleSearchValue} className='w-[350px]' size='large' type='text' allowClear placeholder='Qidirish...'/>
            <CustomSelect chooseId={regionId ? regionId : null} width={"350px"} setIsLoading={setIsLoading} placeholder={"Tanlash.."} setChooseId={setRegionId} options={regionList}/>
        </div>
        <div className='mt-5'>
          <CustomTable tableParams={tableParams} onChange={handlePaginationChange} columns={columns} data={data} isLoading={isLoading}/>
        </div>
        <Modal width={"600px"} centered  title={<h2 className="text-[21px] font-semibold">Tashkilotni o'chirmoqchimisiz?</h2>} open={deleteModal} onOk={handleSureDeleteOrganization} onCancel={() => setDeleteModal(false)}>
          <div className="h-[22px] flex justify-center items-center"></div>
        </Modal>
    </div>
  )
}

export default Organization