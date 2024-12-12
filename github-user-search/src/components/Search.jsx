import React, {useState} from 'react';
import {fetchUserData} from '../services/githubService';


export default function Search () {
  const [userName, setUserName] = useState( '' );
  const [isLoading, setIsLoading] = useState( false );
  const [error, setError] = useState( null );
  const [location, setLocation] = useState( '' );
  const [minRepos, setMinRepos] = useState( '' );
  const [searchResults, setSearchResults] = useState([]);


  const handleSubmit  =  async ( e ) => {
    e.preventDefault();
    setIsLoading( true );
    setError( null );
    setSearchResults( [] );
    
    try {
      const query = {
        userName, location, minRepos
      };

      const results = await fetchUserData( query );
      setSearchResults( results.items );
    } catch ( err ) {
      setError( err.message );
    } finally {
      setIsLoading( false );
    }
  }
  return (
    <div className='min-h-screen bg-gray-300 flex flex-col items-center justify-center p-4'>
      <h1 className='text-2xl font-bold text-gray-800 mb-4'>Github User Search</h1>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col items-center gap-2 w-full max-w-md'
      >
        <input
          className='flex-grow border border-gray-500 rounded-md p-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400'
          placeholder='Enter Username:'
          type="text"
          value={userName}
          onChange={( e ) => setUserName( e.target.value )}
        />

        <input
          className='flex-grow border border-gray-500 rounded-md p-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400'
          placeholder='Location (e.g London)'
          type="text"
          value={location}
          onChange={( e ) => setLocation( e.target.value )}
        />

        <input
          className='flex-grow border border-gray-500 rounded-md p-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400'
          placeholder='Minimum repositories'
          type="number"
          value={minRepos}
          onChange={( e ) => setMinRepos( e.target.value )}
        />
        <button
          className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition'
          type='submit'
        >
          SEARCH
        </button>
      </form>
      {isLoading && <p className='text-blue-500 mt-4'>Loading...</p>}
      {error && <p className='text-red-500 mt-4'>Looks like we cant find the user</p>}
      {searchResults.length > 0 && (
        <div className="mt-6 w-full max-w-lg">
          <h2 className="text-lg font-semibold mb-4">Search Results</h2>
          <ul className="space-y-4">
            {searchResults.map((user) => (
              <li key={user.id} className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm">
                <img
                  src={user.avatar_url}
                  alt={`${user.login}'s avatar`}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold">{user.login}</h3>
                  {user.location && <p>Location: {user.location}</p>}
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View Profile
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
