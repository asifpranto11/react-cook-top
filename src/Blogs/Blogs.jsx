import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import './Blogs.css'


const Blogs = ({cookAddHandeler}) => {
    const [blogs,setBlogs] =useState([]);

   

    useEffect(()=>{
        fetch('fake.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="flex  justify-between  ">
           
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
            
          {
                blogs.map(blog=><Blog cookAddHandeler={cookAddHandeler} key={blog.id} blog={blog}></Blog>)
              
            }
           
          </div>
         
        </div>
    );
};

export default Blogs;