import axios from 'axios'
import React, { useEffect, useState } from 'react'

  const Allblog = ({observerState}) => {
  const [allblog, setAllBlog] = useState([])
  useEffect(()=> {
     async function getAlluser() {
       try {
         const allBlog = await axios.get('http://localhost:3000/getallblog')
         setAllBlog(allBlog.data.data);
       } catch (error) {
        console.error(error);      
       }
        
      }
      getAlluser()
    },[observerState])

  return (
    <>
   <div>
    
     <ul className="w-[40vw] divide-y divide-gray-200 bg-red-300 h-[80vh] p-10 overflow-y-scroll shadow-xl ">
       {allblog?.map((item) => (
         <li className="py-10 ">
       <div className="flex flex-col items-start">
          <div className="flex-shrink-0">
          </div>
          <div className="flex-1 min-w-0">
             <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
             {item.username}
             </p>
             <p className="text-sm text-gray-500 truncate dark:text-gray-400">
             {item.email}
             </p>
          </div>
          
           <blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white">
               <p>{item.blog}</p>
           </blockquote>
 
             <div className='pt-10 flex gap-4 '>
               <button className='py-8 px-8 rounded-md bg-green-300 cursor-pointer'>Edit</button>
               <button className='py-8 px-8 rounded-md bg-green-300 cursor-pointer'>Delete</button>
             </div>
       </div>
      </li>  
        ))}
        </ul>
  
   
    </div>   

    </>
  )
}

export default Allblog