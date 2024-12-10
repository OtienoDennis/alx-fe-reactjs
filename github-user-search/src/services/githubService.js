import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';

export const fetchUserData = async ( userName ) => {
    try {
        const response = await axios.get( `${BASE_URL}/${userName}` );
        console.log(response.data)
        return response.data;
    } catch ( error ) {
        throw new Error();
    }
}