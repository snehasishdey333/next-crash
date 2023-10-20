"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const EditPost = ({params}) => {

  const [title,setTitle]=useState("")
  const [desc,setDesc]=useState("")
  const id=params.id
  const router=useRouter()

  const handleUpdate=async()=>{
    try{
      const res=await axios.put("http://localhost:3000/api/post/"+id,
      {title:title,description:desc})
      router.push("/")

    }
    catch(err){
      console.log(err)
    }
  }

  const handleDelete=async()=>{
    try{
      const res=await axios.delete("http://localhost:3000/api/post/"+id)
      router.push("/")

    }
    catch(err){
      console.log(err)
    }
  }
  
  useEffect(()=>{

    const fetchPost=async()=>{
      try{
        const res=await axios.get("http://localhost:3000/api/post/"+id)
        setTitle(res.data.title)
        setDesc(res.data.description)
      }
      catch(err){
        console.log(err)
      }
    }

    fetchPost()

  },[id])

  return (
    <div className='max-w-7xl p-8 mx-auto flex flex-col items-center '>
      <h1 className='text-2xl font-bold text-center my-4'>Edit Post</h1>
      <input value={title} onChange={(e)=>setTitle(e.target.value)} className='w-full focus:outline-none border border-gray-300 p-2 my-2' type="text" placeholder='Post title'/>
      <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} className='w-full focus:outline-none border border-gray-300 p-2 my-2' rows={10} placeholder='Post description'/>
      <div className='flex items-center md:justify-between flex-col md:flex-row w-full mt-2'>
         <button onClick={handleUpdate} className='text-white font-bold bg-yellow-500 px-8 py-2 text-lg my-2 w-full md:w-fit'>Update</button>
         <button onClick={handleDelete} className='text-white font-bold bg-red-500 px-8 py-2 text-lg my-2 w-full md:w-fit'>Delete</button>
      </div>
    </div>
  )
}

export default EditPost