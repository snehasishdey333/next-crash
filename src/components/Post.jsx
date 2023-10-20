import Link from 'next/link'
import React from 'react'
import {FiEdit} from 'react-icons/fi'

const Post = ({post}) => {
  return (
    <div className='w-full p-4 bg-yellow-100 rounded-xl'>
       <div className='flex justify-between items-center w-full py-2'>
       <h1 className='text-2xl font-bold text-yellow-600'>{post.title}</h1>
       <Link href={"/post/"+post.id} className='cursor-pointer p-2 text-yellow-600'><FiEdit/></Link>
       </div>
       <p className='text-yellow-400'>{post.description}</p>
    </div>
  )
}

export default Post