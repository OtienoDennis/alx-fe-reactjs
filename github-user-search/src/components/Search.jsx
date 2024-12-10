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
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" className='underline'>Enter UserName: </label>
        <input
          className='border border-gray-500 rounded-md p-1 focus:border-blue-500 focus:ring focus:ring-blue-200'
          placeholder='Enter Username:'
          type="text"
          id="username"
          value={userName}
          onChange={( e ) => setUserName( e.target.value )}
          />
        <button>SUBMIT</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>User not Found!</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
          <p>{userData.name}</p>
          <a href={userData.html_url} target='_blank'>Profile</a>
        </div>
      )}
    </>
  )
}
