import React, { useState } from 'react'
import FilterTab from './FilterTab'

const Header = ({foodSearch, tab, setTab, tabFilter}) => {
  return (

    <div className='bg-zinc-700 pb-8'>
        <div className='flex flex-col max-w-[1220px] px-12 h-[140px]  items-center justify-center gap-7 flex-wrap mx-auto sm:flex-row sm:justify-between'>
            <img src="/logo.svg" alt="" />
            <input onChange={foodSearch} className='w-[285px] h-[40px] text-[16px] text-white bg-zinc-700 border-2 rounded-md px-4 py-1 border-red-600 placeholder:text-white' type="text" placeholder='Search Food....' />
        </div>
        <FilterTab tab={tab} setTab={setTab} tabFilter={tabFilter}/>
      
    </div>
  )
}

export default Header
