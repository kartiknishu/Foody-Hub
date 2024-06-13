import React from 'react'

const Card = ({value}) => {
  return (
    <div className='flex text-white pr-2 pt-2 gap-2 backdrop-blur-lg bg-white/10 border border-pink-200/40 w-[340px] h-[167px] rounded-3xl'>
        <img src={value.image} alt="" />
        <div className='pt-2 relative'>
            <h1 className='text-[16px] font-semibold'>{value.name}</h1>
            <p className='text-[12px] font-regular pt-1'>{value.text}</p>
            <div className='absolute px-3 py-1 rounded-md right-2 bottom-4 text-[14px] font-normal text-white bg-[#FF4343]'>${value.price}.00</div>
        </div>

      
    </div>
  )
}

export default Card
