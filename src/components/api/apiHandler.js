const axios = require('axios');
const config = require('./apiConfig');
export default async function Search(word, area, category){
    
    let data = await axios.get(`http://${config.host}:${config.port}/api/getlistings?search=${word}&area=${area}&category=${category}`).then(response => {
        return response.data;  
    }).catch(err => console.log(err));
    console.log(data);
    return(data);

}
