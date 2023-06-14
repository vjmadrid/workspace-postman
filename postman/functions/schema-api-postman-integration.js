// *** CONFIGURATION SCHEMA ***
const schema_url = 'https://api.getpostman.com/apis/API ID/versions/VERSION ID/schemas/SCHEMA ID';

const postRequest = {
    url: schema_url,
    method: 'GET',
    header: {
        'Content-Type': 'application/json',
        'X-Api-Key': pm.variables.get('apiKey')
    }
};

// *** CONFIGURATION JS-YAML ***
// * YAML 1.2. parser y serializador

const js_yaml_url = 'https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js'

pm.sendRequest(js_yaml_url, (err, res) => {

   eval(res.text()); //Load the library.

    pm.sendRequest(postRequest, (error, response) => {
        if(!error){
            var schema = response.json().schema.schema;
            var yaml = this.jsyaml.load(schema);
            pm.variables.set('accountsOpenApi', JSON.stringify(yaml,null, 2));
        }
        console.log(error ? error : "Schema Loaded...");
    });

})