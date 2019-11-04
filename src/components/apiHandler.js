const http = require('http');
const config = require('./apiConfig');
module.exports.Search = async (word, area, retailtype) => {
    if(typeof(word) !== "string") return {"success":false}
    //make http request
    const options = {
        host: config.host,
        port: config.port,
        path: `/api/getlistings?search=${word}&area=${area}`,
        method: 'GET'
    }

    let data = await http.request(options, function (res) {
        let response = '';
		res.on('data', function (chunk) {
            response += chunk;
        });
        res.on('end', async () => {       
            return response;
        })

    });
    
    
    console.log(data);
}