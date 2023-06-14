const URL = require('url');

// Check if 'postman_global_functions_url' is set
const cdn_js = pm.globals.get('postman_global_functions_url');

function isValidHttpUrl(string) {
    let url;
    try { url = URL.parse(string); } catch (err) { console.log("Error: ", err); return false; }
    return url.protocol === "http:" || url.protocol === "https:";
}

if(!isValidHttpUrl(cdn_js)){
    throw new Error(`'postman_global_functions_url' does not contain a valid URL (${cdn_js}). Please, review global variables`);
}

console.log("cdn_js ::" + cdn_js)

// Load global functions from CDN
pm.sendRequest(cdn_js, (err, res) => {
    if(err){
        throw new Error(`${err}.`);
    }else{
        postman.setGlobalVariable('postman_global_functions', res.text());
        console.log("postman_global_functions is loaded")
    }
});