import React, {useState} from 'react';

export default function RegistrationForm () {
    const [data, setData] = useState( {username: "", email: "", password: ""} );
    const {username, email, password} = data;
    function handleChange ( e ) {
        console.log( e.target.name );
        setData( ( prevState => ( {...prevState, [e.target.name]: e.target.value} ) ) );
    }
    function handleSubmit ( e ) {
        e.preventDefault();
        console.log( data );
    }
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' name='name' value={username} onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name='email' value={email} onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name='password' value={password} onChange={handleChange}/>
        </div> 
        <button>
            SUBMIT
        </button>
    </form>
  )
};