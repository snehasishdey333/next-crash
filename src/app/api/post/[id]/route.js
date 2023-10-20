import { NextResponse } from "next/server"
import prisma from "../../../../../prisma"

export const GET=async (req,{params})=>{
    try{
         const id=params.id
         const post=await prisma.post.findUnique({
            where:{
                id
            }
         })
         if(!post){
            return NextResponse.json({message:"post not found!"},{status:404})
         }
         return NextResponse.json(post,{status:200})
    }
    catch(err){
        return NextResponse.json({message:"Error in getting the post",err},{status:500})
    }
}

export const PUT=async (req,{params})=>{
    try{

        const id=params.id
        const {title,description}=await req.json()
        const updatedPost=await prisma.post.update({
            data:{title,description},
            where:{id}
        })
        return NextResponse.json(updatedPost,{status:200})
    }
    catch(err){
        return NextResponse.json({message:"Can not update the post",err},{status:500})
    }
}

export const DELETE=async(req,{params})=>{
    try{
        const id=params.id
        await prisma.post.delete({where:{id}})
        return NextResponse.json({message:"Post deleted successfully!"},{status:200})

    }
    catch(err){
        return NextResponse.json({message:"Can not delete the post",err},{status:500})
    }
}