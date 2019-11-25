import axios from 'axios';
import config from './apiConfig';
export default async function (word, area, category){
    
    let data = await axios.get(`http://${config.host}:${config.port}/api/getlistings?search=${word}&area=${area}&category=${category}`).then(response => {
        return response.data;  
    }).catch(err => {throw err})
    console.log(data);
    return(data);

}
