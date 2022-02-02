const axios = require('axios');

export const getdata = async (skip) => {
    try{
       return axios.get(`http://localhost:8080/posts?skip=${skip}`);
     

    }catch(err){
        console.error(err);
    }
}
