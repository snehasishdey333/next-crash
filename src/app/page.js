import Post from "@/components/Post"

async function getUserData(){
  const res=await fetch("https://jsonplaceholder.typicode.com/users")
  // await new Promise((resolve)=>setTimeout(resolve,5000))
  return res.json()
}

async function getPostData(){
  const res=await fetch("https://jsonplaceholder.typicode.com/posts")
  return res.json()
}

async function getPosts(){
  const res=await fetch("http://localhost:3000/api/post",{
    next:{
      revalidate:10,
    }
  })

  return res.json()
}

export default async function Home() {
  // const users=await getUserData()
  // const posts=await getPostData()
  const [users,posts,homePosts]=await Promise.all([getUserData(),getPostData(),getPosts()])
  // console.log(homePosts)
  // console.log(users)
  return (
    <div className="p-4 w-full flex flex-col md:flex-row items-start max-w-7xl mx-auto md:space-x-8">
    <div className="flex flex-col items-center space-y-4 w-full md:w-[70%]">
      {homePosts.map((post,index)=>(
        <Post post={post} key={index}/>
      ))}
    </div>
    <div className="hidden w-[30%] md:flex flex-col space-y-8">
      <div className="w-full">
         <h1 className="text-2xl font-bold text-green-500 my-2">Recent Users</h1>
         <div className="flex flex-col space-y-3">
           {users.slice(0,6).map((user,index)=>(
            <div key={index} className="bg-green-100 rounded-2xl p-3">
               <h3 className="text-green-600 font-bold text-sm">{user.name}</h3>
            </div>
           ))}
         </div>
      </div>
      <div className="w-full">
      <h1 className="text-2xl font-bold text-red-500 my-2">Sponsored Posts</h1>
      <div className="flex flex-col space-y-3">
           {posts.slice(0,5).map((post,index)=>(
            <div key={index} className="bg-red-100 rounded-2xl p-3">
               <h3 className="text-red-600 font-bold text-sm">{post.title.slice(0,30)+"..."}</h3>
               <p className="text-red-400 text-sm">{post.body.slice(0,60)+"..."}</p>
            </div>
           ))}
         </div>
      </div>
    </div>

    </div>
  )
}
