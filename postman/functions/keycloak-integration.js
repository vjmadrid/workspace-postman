// *** CONFIGURATION KEYCLOAK ***
var server       = "http://localhost:8083";
var realm        = "test";
var clientId     = "test-cli";
var clientSecret = "l2GVc8MuIXDVwmXqT7Oi4pssNTFsFzSJ";

// *** CONFIGURATION USER ***
var username     = "user1@gmail.com";
var password     = "user1";

// *** CONFIGURATION REQUEST ***
var grantType    = "password";
var url  = `${server}/auth/realms/${realm}/protocol/openid-connect/token`;
var body = `grant_type=${grantType}&client_id=${clientId}&username=${username}&password=${password}&client_secret=${clientSecret}`;

// request to Keycloak
pm.sendRequest({
    url: url,
    method: 'POST',
    header: { 'Content-Type': 'application/x-www-form-urlencoded'},
    body: {
        mode: 'raw',
        raw: body
    }
},  function(err, response) {
    // Set the environment variable for token
    var jsonData = response.json();

    var access_token = jsonData.access_token;
    console.log("access_token :: " + access_token)
    pm.environment.set('access_token', access_token);


    var refresh_token = jsonData.refresh_token;
    console.log("refresh_token :: " + refresh_token)
    pm.environment.set('refresh_token', refresh_token);

});