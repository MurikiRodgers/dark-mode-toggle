import React from 'react'
import "./Categories.css"

const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
}


const Categories = ({categories, filterItems}) => {
  return (
    
    <div>
      <div className="--flex-center">
        {categories.map((category, index)=>{
          return (
            <button type='button'className='btn --btn --btn-secondary' onClick={()=>filterItems(category)} key={index}>{capitalize(category)}</button>
          )
        })}
       
      </div>
    </div>
  )
}

export default Categories
