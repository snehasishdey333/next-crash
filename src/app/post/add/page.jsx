"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const AddPost = () => {

  const [title,setTitle]=useState("")
  const [desc,setDesc]=useState("")
  const router=useRouter()

  const handleAdd=async ()=>{
    try{
      const res=await axios.post("http://localhost:3000/api/post",{title:title,description:desc})
      console.log(res.data)
      router.push("/")
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <div className='max-w-7xl p-8 mx-auto flex flex-col items-center '>
      <h1 className='text-2xl font-bold text-center my-4'>Add Post</h1>
      <input value={title} onChange={(e)=>setTitle(e.target.value)} className='w-full focus:outline-none border border-gray-300 p-2 my-2' type="text" placeholder='Post title'/>
      <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} className='w-full focus:outline-none border border-gray-300 p-2 my-2' rows={10} placeholder='Post description'/>
      <button onClick={handleAdd} className='text-white font-bold bg-green-500 px-8 py-2 text-lg my-2 w-full md:w-fit'>Add</button>
    </div>
  )
}

export default AddPost