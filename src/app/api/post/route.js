import { NextResponse } from "next/server"
import prisma from "../../../../prisma"

export const POST= async (req)=>{
    try{

        const {title,description}=await req.json()
        const newPost=await prisma.post.create({
            data:{
                title,
                description
            }
        })
        return NextResponse.json(newPost,{status:200})

    }
    catch(err){
        return NextResponse.json({message:"Error in post creation",err},{status:500})
    }
}

export const GET=async ()=>{
    try{
        const post=await prisma.post.findMany()
        return NextResponse.json(post,{status:200})

    }
    catch(err){
        return NextResponse.json({message:"Can not get the posts",err},{status:500})
    }
}