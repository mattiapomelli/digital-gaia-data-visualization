import React from 'react'
import data from '../data/farm-data.json';

const TopCard = () => {
  return (
    <div className='grid lg:grid-cols-1 gap-4 pl-4 pt-4'>
        <div className='lg:col-span-1 flex justify-between w-full rounded-lg'>
        <span className='text-3xl text-green-800 font-extrabold'>Track My Farm Production: "{data.name}"</span>
        </div>
    </div>
  )
}

export default TopCard