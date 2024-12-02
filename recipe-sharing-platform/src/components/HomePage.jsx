import React, {useEffect, useState} from 'react';
import data from "../data.json";
import {Link, useNavigate} from 'react-router-dom';

export default function HomePage () {
    const [jsonData, setJsonData] = useState( null );
    const navigate = useNavigate();
    useEffect( function () {
        setJsonData(data)
    }, [] )
    
    if(!jsonData) return <div>Loading...</div>
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        {jsonData.map((item) => (
            <div key={item.id} className='sm:max-w-xs md:max-w-sm bg-gray-400 my-10 rounded-md shadow-md mx-auto sm:p-4 md:p-8 hover:shadow-2xl flex flex-col items-center gap-4' onClick={() => navigate( `/recipe/${item.id}` )}>
                <Link to={`/recipe/${item.id}`}>
                     <h1 className='sm:text-lg md:text-xl hover:text-blue-700 font-extrabold'>{item.title}</h1>
                </Link>
                <img src={item.image} alt={item.title} className='rounded-lg sm:w-36 sm:h-36 md:w-48 md:h-48 hover:scale-110 transition-transform duration-150 ease-in-out'/>
                <p className='sm:text-sm md:text-base'>{item.summary}</p>
            </div>
        ))}
    </div>
  )
}
