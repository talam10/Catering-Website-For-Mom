import React from 'react'

import './Background.css'

const Background = () => {
  return (
    <div className='background-picz container'>
        <div className='background-content'>
            <h1 className='heading-primary'>
                Welcome to<span> Bengal Tiger </span>
            </h1>

            <p className='text-white'> A Bangladeshi owned place of Rice Cakes with Molasses! </p>

            <p className='text-white'> Order online or Give us a Ring on
               <span className='phoneColor'> (425) 829-1373 </span>
            </p>
        </div>
    </div>
  )
}

export default Background