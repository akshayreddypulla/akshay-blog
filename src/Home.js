// import { useState,useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data : blogs,isPending,error} = useFetch("http://localhost:8000/blogs")



    // const [name,setName] = useState("akshay");

        // const handleDelete = (id)=>{
        //     // const newBlogs = blogs.filter((blogs)=>{ return blogs.id!==id})
        //     const newBlogs = blogs.filter(blogs => blogs.id!==id)
        //     setBlogs(newBlogs)
        // }

    return ( 
        <div className="home">
            {error && <div> {error}</div>}
            {isPending && <div style={{color:"green",fontSize:"50px"}}>Loading...</div>}
           {blogs && <BlogList blogs={blogs} title="All the blogs"/>}
           {/* <button onClick={()=>setName("Reddy")}>Click Me</button> */}
           {/* <p>{name}</p> */}
        </div>
     );
}
 
export default Home;