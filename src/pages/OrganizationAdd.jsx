import { ArrowLeftOutlined, LoadingOutlined, UserAddOutlined } from '@ant-design/icons'
import { Button, DatePicker, Input } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomSelect from '../components/CustomSelect'
import { useAxios } from '../hooks/useAxios'
import toast from 'react-hot-toast'

function OrganizationAdd() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const statusData = [
        {
            value:"1",
            label:"Faol"
        },
        {
            value:"2",
            label:"Faol emas"
        },
        {
            value:"3",
            label:"Jarayonda"
        },
    ]
    const regionsData = [
        {
            value:"1",
            label:"Toshkent viloyati"
        },
        {
            value:"2",
            label:"Farg'ona viloyati"
        },
        {
            value:"3",
            label:"Samarqand viloyati"
        },
    ]

    const [companyName, setCompanyName] = useState(null)
    const [inn, setInn] = useState(null)
    const [statusId, setStatusId] = useState(null)
    const [regionId, setRegionId] = useState(null)
    const [regionName, setRegionName] = useState(null)
    const [address, setAddress] = useState(null)
    const [createdAt, setCreatedAt] = useState(null)

    function handleSubmit(e){
        e.preventDefault()
        setIsLoading(true)
        const data = {
            key: Math.round(Math.random() * 100),
            companyName,inn,
            status:statusId,
            regionId:regionId,
            regionName:regionName,
            address:address,
            createdAt:createdAt
        }
        useAxios().post("/organization", data).then(res => {
            toast.success("Tashkilot qo'shildi")
            setTimeout(() => {
                setIsLoading(false)
                navigate(-1)
            }, 800);
        })
    }

    const handleChangePicker = (date, dateString) => {
        setCreatedAt(dateString);
    };    
  return (
    <form onSubmit={handleSubmit} className='p-5'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-5'>
                <button onClick={() => navigate(-1)} className='scale-[1.4]'><ArrowLeftOutlined/></button>
                <h2 className='font-bold text-[25px]'>Tashkilot yaratish</h2>
            </div>
            <Button htmlType='submit' icon={isLoading ? <LoadingOutlined/> : <UserAddOutlined/>} size='large' type='primary'>Saqlash</Button>
        </div>
        <div className='w-[70%] mt-10 flex justify-between'>
            <div className='w-[49%] space-y-5'>
                <label className='flex flex-col space-y-1'>
                    <span className='text-slate-600 text-[16px]'>Tashkilot nomini kiriting</span>
                    <Input value={companyName} onChange={(e) => setCompanyName(e.target.value)} type='text' placeholder='Tashkilot nomini kiriting' required allowClear size='large'/> 
                </label>
                <label className='flex flex-col space-y-1'>
                    <span className='text-slate-600 text-[16px]'>INN kiriting</span>
                    <Input maxLength={9} value={inn} onChange={(e) => setInn(e.target.value)} type='number' placeholder='INN kiriting' required allowClear size='large'/> 
                </label>
                <label className='flex flex-col space-y-1'>
                    <span className='text-slate-600 text-[16px]'>Holat turini tanlang</span>
                    <CustomSelect options={statusData} placeholder={"Holat turini tanlang"} setChooseId={setStatusId} width={"100%"}/>
                </label>
                <label className='flex flex-col space-y-1'>
                    <span className='text-slate-600 text-[16px]'>Hudud tanlang</span>
                    <CustomSelect setLabelValue={setRegionName}  options={regionsData} placeholder={"Hudud tanlang"} setChooseId={setRegionId} width={"100%"}/>
                </label>
            </div>
            <div className='w-[49%] space-y-5'>
                <label className='flex flex-col space-y-1'>
                    <span className='text-slate-600 text-[16px]'>Manzil kiriting</span>
                    <Input value={address} onChange={(e) => setAddress(e.target.value)} type='text' placeholder='Manzil kiriting' required allowClear size='large'/> 
                </label>
                <label className='flex flex-col space-y-1'>
                    <span className='text-slate-600 text-[16px]'>Sana kiriting</span>
                     <DatePicker onChange={handleChangePicker} size='large' />
                </label>
            </div>
        </div>
    </form>
  )
}

export default OrganizationAdd