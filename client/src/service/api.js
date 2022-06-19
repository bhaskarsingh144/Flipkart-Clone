// USED FOR THE LOGIN AUTHENTICATION

// axios helps in api calling. All API calls are asynchronous
import axios from 'axios';

const url = 'http://localhost:8000';

export const authenticateLogin = async (user) => {
    try 
    {
        // we need to send the data filled in the text filed hence we go for post request.
        return await axios.post(`${url}/login`, user)
        // method takes two parameters "URL" and the data. URL is backend url end point login in this case.
    } catch (error) 
    {
        console.log('error while calling login API: ', error);
    }
}
export const authenticateSignup = async (user) => {
    try {
        return await axios.post(`${url}/signup`, user)
    } catch (error) {
        console.log('error while calling Signup API: ', error);
    }
}