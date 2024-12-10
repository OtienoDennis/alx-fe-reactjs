import React, {useState} from 'react';


export default function Search () {
  const [userName, setUserName] = useState( '' );
  const [isLoading, setIsLoading] = useState( false );
  const [error, setError] = useState( null );
  const [userData, setUserData] = useState( null );

  function handleSubmit (e) {
    e.preventDefault();
    if ( userName ) {
      fetchUserData( userName );
    }
  }
  return (
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
  )
}
