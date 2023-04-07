import React from 'react'
import { categories } from './sidebarDetail'
import  '../index.css';

const SideBar = ({seletCategory,setseletCategory,mode}) => {
  return (
    <>
    {categories.map((categories)=>(
      
        <button className='category-btn my-2'style={{background: categories.name===seletCategory?"#917f7ca1":"none"}} onClick={()=>setseletCategory(categories.name)}key={categories.name}>
          <span className='mx-3' style={{color: mode==='black'?"black":"white"}}>{categories.icon}</span>
           <span style={{marginRight:"25px",color: mode==='black'?"black":"white"}}>{categories.name}</span>
        </button>
    ))}
    
    </>
  )
}

export default SideBar
