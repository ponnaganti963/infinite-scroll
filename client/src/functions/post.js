const axios = require('axios');

export const getdata = async () => {
    try{
       return axios.get("http://localhost:8080/posts");
     

    }catch(err){
        console.error(err);
    }
}
