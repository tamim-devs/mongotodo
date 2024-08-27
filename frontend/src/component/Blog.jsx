import React, { useState } from 'react'
import axios from "axios"

const Blog = ({raltime}) => {
  const [bloginput, setblogInput] = useState({
    username : "",
    email : "",
    blog : "",
  });

  const blogHandler = (event) =>{
    const {id,value} = event.target;
    setblogInput({
      ...bloginput,
      [id] : value,
    },
  )
};

  
const handleblogPost= async ()=> {
  try {
    const {username,email,blog} =bloginput;
    if ((!username || !email, !blog)) {
      return;
    }
    const blogpost = await axios.post("http://localhost:3000/createblog",  {
      username : username,
      email: email,
      blog: blog,
    },{
      'Content-Type': 'application/json'
    }
  );
    raltime()
    console.log(blogpost);
  } catch (error) {
    console.log(error);
    
  }
};


  

  return (
   <div>
       <div>
      <form className="max-w-sm mx-auto" onSubmit={(e)=> e.preventDefault()}>
      <div className="mb-5">
     <label for="username">Your userName</label>
     <input type="username" 
     id="username"
     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
     placeholder="name@flowbite.com"
     onChange={blogHandler}
     required />
   </div>
  <div className="mb-5">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
    <input type="email"
    id="email"
    onChange={blogHandler}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
   </div>
  <div className="mb-5">
    <label for="blog" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">blog</label>
    <textarea type="blog"
    id="blog"
    onChange={blogHandler}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
   </div>
   
    <button 
    type="submit" 
    onClick={handleblogPost}
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit Blog</button>
 </form>
    </div>
   </div>
  )
}

export default Blog