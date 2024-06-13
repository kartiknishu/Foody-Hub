import React, { useState } from 'react'
import Card from './Card'

const CardsDiv = ({data}) => {

  return (
    <div className='flex max-w-[1200px] mx-auto flex-wrap flex-col gap-8 items-center px-10 py-10 sm:flex-row sm:justify-start'>
        {data?.map((value, i)=>(
            <Card key={i} value={value}/>
        ))}
      
    </div>
  )
}

export default CardsDiv
