import React, {useEffect, useState} from 'react';
import data from '../data.json';
import {useParams} from 'react-router-dom';

export default function RecipeDetail () {
    const [item, setItem] = useState( null );
    const {id} = useParams();
    useEffect( function () {
        const fetchedData = data.find( ( entry ) => entry.id === parseInt( id ) );
        setItem( fetchedData );
    },[id])
    if(!item) return <div>Item not found!</div>
  return (
    <div>
        <div className='sm:max-w-sm md:max-w-lg bg-gray-400 my-36 rounded-md shadow-md mx-auto sm:p-10 md:p-12 hover:shadow-2xl flex flex-col items-center gap-4'>
            <h1 className='sm:text-lg md:text-xl hover:text-blue-700 font-extrabold'>{item.title}</h1>
            <img src={item.image} alt={item.title} className='rounded-lg sm:w-40 sm:h-40 md:w-52 md:h-52 hover:scale-125 transition-transform duration-200 ease-in-out' />
            <p>ingredients</p>
            <p>instructions</p>
            <p className='sm:text-xl md:text-3xl'>{item.summary}</p>
        </div>
    </div>
  )
}
