import React from 'react'
import { categories } from './sidebarDetail'
import '../index.css';

const SideBar = ({ seletCategory, setseletCategory, mode }) => {
  return (
    <>
      {categories.map((categories) => (

        <button className='category-btn my-2' style={{ background: categories.name === seletCategory ? "#dc3545" : "none",color: mode === 'black' && categories.name !== seletCategory ? "black" : "white" }} onClick={() => setseletCategory(categories.name)} key={categories.name}>
          <span className='mx-3' style={{  }}>{categories.icon}</span>
          <span style={{ marginRight: "25px" }}>{categories.name}</span>
        </button>
      ))}

    </>
  )
}

export default SideBar
