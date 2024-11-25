import React from 'react'

export default function Info({ipData}) {
    
  return (
    <div className='px-8 text-center md:text-left'>
        <p className="font-rubik text-gray-400 font-medium text-xs md:text-sm uppercase mt-1">{ipData.title}</p>
        <p className="font-semibold text-lg md:text-2xl font-rubik md:mt-2 break-words">{ipData.value}</p>
    </div>
  )
}
