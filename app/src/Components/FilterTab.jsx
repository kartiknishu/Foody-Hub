import React, { useState } from 'react'

const FilterTab = ({tab, setTab, tabFilter}) => {
    const arr=["All", "Breakfast", "Lunch", "Dinner"]
  return (
    <div className='flex gap-5 justify-center pb-[31px]'>
        {arr.map((value, i)=>(
            <button onClick={(e)=>tabFilter(e)} key={i} value={value} className='bg-[#FF4343] text-white rounded px-3 py-1'>{value}</button>
        ))}

      
    </div>
  )
}

export default FilterTab