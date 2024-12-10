import React, {useState} from 'react';
import {fetchUserData} from '../services/githubService';


export default function Search () {
  const [userName, setUserName] = useState( '' );
  const [isLoading, setIsLoading] = useState( false );
  const [error, setError] = useState( null );
  const [userData, setUserData] = useState( null );

  const handleSubmit  =  async ( e ) => {
    e.preventDefault();
    setIsLoading( true );
    setError( null );
    setUserData( null );
    
    try {
      const data = await fetchUserData( userName );
      setUserData( data );
    } catch ( err ) {
      setError( err.message );
    } finally {
      setIsLoading( false );
    }
  }
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4'>
      <h1 className='text-2xl font-bold text-gray-800 mb-4'>Github User Search</h1>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col sm:flex-row items-center gap-2 w-full max-w-md'
      >
        <input
          className='flex-grow border border-gray-500 rounded-md p-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400'
          placeholder='Enter Username:'
          type="text"
          id="username"
          value={userName}
          onChange={( e ) => setUserName( e.target.value )}
          />
        <button
          className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition'
          type='submit'
        >
          SUBMIT
        </button>
      </form>
      {isLoading && <p className='text-blue-500 mt-4'>Loading...</p>}
      {error && <p className='text-red-500 mt-4'>Looks like we cant find the user</p>}
      {userData && (
        <div className='bg-white p-4 mt-4 rounded-lg shadow-lg w-full max-w-md'>
          <div className='flex items-center gap-4'>
            <img
              src={userData.avatar_url}
              alt={`${userData.login}'s avatar`}
              className='w-16 h-16 rounded-full'
            />
            <div>
              <h2 className='text-xl font-semibold'>{userData.name || userData.login}</h2>
              <a
                href={userData.html_url}
                target='_blank'
                className='text-blue-500 hover:underline'
              >
                Profile
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
