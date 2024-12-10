import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q';

export const fetchUserData = async ( {userName, location, minRepos} ) => {
    try {
        const queryParts = [];
        if ( userName ) queryParts.push( `${userName} in:login` );
        if ( location ) queryParts.push( `location:${location}` );
        if ( minRepos ) queryParts.push( `repos:>${minRepos}` );
        
        const query = queryParts.join( '' );
        const response = await axios.get( `${BASE_URL}=${encodeURIComponent( query )}` );;
        return response.data;
    } catch ( error ) {
        throw new Error();
    }
}