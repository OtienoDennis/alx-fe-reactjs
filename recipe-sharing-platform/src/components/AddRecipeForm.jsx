import React, {useState} from 'react'

export default function AddRecipeForm () {
    const [title, setTitle] = useState( "" );
    const [ingredients, setIngredients] = useState( "" );
    const [preparation, setPreparation] = useState( "" );
    const [errors, setErrors] = useState( {} );

    function handleChange ( e, func ) {
        func( e.target.value );
        console.log(e.target.value)
    }

    function validate () {
        const newErrors = {};
        if ( !title ) newErrors.title = "Title is required";
        if ( !ingredients ) newErrors.ingredients = "Ingredients are required";
        if ( !preparation ) newErrors.preparation = "Preparations steps are required";
        if ( Object.keys( newErrors ).length > 0 ) {
            setErrors( newErrors );
            return;
        }
    }

    function handleSubmit ( e ) {
        e.preventDefault();    
        validate();
        setErrors( {} );
    }

  return (
      <form 
        onSubmit={handleSubmit}
        className='flex flex-col items-center bg-slate-300 sm:max-w-sm md:max-w-lg sm:p-4 md:p-8 mx-auto rounded-md my-10'>
        <div className='w-full max-w-md '>
            <label htmlFor='title' className='block text-lg font-medium text-gray-900 my-2'>Title</label>
            <input 
                id='title'
                placeholder='Recipe Title' 
                value={title} 
                onChange={(e)=>handleChange(e, setTitle)}
                className='mt-1 block w-full rounded-md border-gray-950 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2'
            />
            {errors.title && <p className='text-red-500 text-xl mt-1'>{errors.title}</p>}
        </div>
        
        <div className='w-full max-w-md '>
            <label htmlFor='ingredients' className='block text-lg font-medium text-gray-900 my-2'>Ingredients:</label>
            <textarea
                id='ingredients'
                placeholder='List the ingredients here:'
                value={ingredients}
                onChange={( e ) => handleChange( e, setIngredients )}
                className='mt-1 block w-full rounded-md border-gray-950 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-36 p-2'
                > 
            </textarea>
              {errors.ingredients && <p className='text-red-500 text-xl mt-1'>{errors.ingredients}</p>}
        </div>
        <div className='w-full max-w-md '>
            <label htmlFor='preparation-steps' className='block text-lg font-medium text-gray-900 my-2'>Preparation Steps:</label>
            <textarea
                id='preparation-steps'
                placeholder='Add Prepation steps here:'
                value={preparation}
                onChange={( e ) => handleChange( e, setPreparation )}
                className='mt-1 block w-full rounded-md border-gray-950 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-36 p-2'
                 >
            </textarea>
            {errors.preparation && <p className='text-red-500 text-xl mt-1'>{errors.preparation}</p>}
        </div>
        <button className='p-2 bg-slate-50 my-2 rounded-md hover:scale-95 transition-transform duration-100 ease-in-out'>SUBMIT</button>
    </form>
  )
}
