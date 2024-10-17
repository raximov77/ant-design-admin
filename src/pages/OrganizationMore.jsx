import { ArrowLeftOutlined, EditOutlined, LineOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAxios } from '../hooks/useAxios'

function OrganizationMore() {
    const navigate = useNavigate()
    const {id} = useParams()

    const [singleData, setSingleData] = useState({})
    useEffect(() => {
        useAxios().get(`organization/${id}`).then(res => {
            setSingleData(res.data);
        })
    }, [])
  return (
    <div className='p-5'>
        <div className='flex items-center mb-10 justify-between'>
            <div className='flex items-center gap-5'>
                <button onClick={() => navigate(-1)} className='scale-[1.4]'><ArrowLeftOutlined/></button>
              <h2 className='font-bold text-[25px]'>{singleData.companyName ? singleData.companyName : <LineOutlined/>}</h2>
            </div>
            <Button onClick={() => navigate("edit")} htmlType='button' icon={<EditOutlined/>} size='large' type='primary'>Tahrirlash</Button>
        </div>
        <div className='w-[50%] flex justify-between p-5 rounded-xl border-[2px] border-slate-600'>
            <ul className='space-y-5 w-[50%]'>
                <li className='flex flex-col'>
                    <span className='text-[15px] text-slate-500'>ID</span>
                    <strong className='text-[22px]'>{singleData.id}</strong>
                </li>
                <li className='flex flex-col'>
                    <span className='text-[15px] text-slate-500'>Tashkilot nomi</span>
                    <strong className='text-[22px]'>{singleData.companyName}</strong>
                </li>
                <li className='flex flex-col'>
                    <span className='text-[15px] text-slate-500'>INN</span>
                    <strong className='text-[22px]'>{singleData.inn ? singleData.inn : <LineOutlined/>}</strong>
                </li>
                <li className='flex flex-col'>
                    <span className='text-[15px] text-slate-500'>Hudud nomi</span>
                    <strong className='text-[22px]'>{singleData.regionName}</strong>
                </li>
            </ul>
            <ul className='space-y-5 w-[50%]'>
                <li className='flex flex-col'>
                    <span className='text-[15px] text-slate-500'>Holati</span>
                    <strong className='text-[22px]'>
                        {singleData.status == 1 ? "Faol" : ""}
                        {singleData.status == 2 ? "Faol emas" : ""}
                        {singleData.status == 3 ? "Jarayonda" : ""}
                    </strong>
                </li>
                <li className='flex flex-col'>
                    <span className='text-[15px] text-slate-500'>Manzili</span>
                    <strong className='text-[22px]'>{singleData.address}</strong>
                </li>
                <li className='flex flex-col'>
                    <span className='text-[15px] text-slate-500'>Yaratilgan vaqt</span>
                    <strong className='text-[22px]'>{singleData.createdAt}</strong>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default OrganizationMore