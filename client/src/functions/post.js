const axios = require('axios');

export const getdata = async (skip) => {
    try{
       return axios.get(`https://evening-tundra-50296.herokuapp.com/posts?skip=${skip}`);
     

    }catch(err){
        console.error(err);
    }
}
