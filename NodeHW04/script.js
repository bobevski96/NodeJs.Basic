console.log("Hello");

import http from "http";
const server = http.createServer((request, response) => {
    // console.log(request);


    //very basic response;
    // response.setHeader("Content-Type", "text/html");
    // response.write("<h1>Hello fellas, we return html from our server =)</h1>");
    // response.end();

    const url = request.url;
    const method = request.method;
    

    if(url === "/"){
        response.setHeader("Content-Type", "text/html");
        response.write("<h1>Hello, you are defult end point</h1>");
        response.end();
    };

    if(url === '/student'){
        response.setHeader("Content-Type", "text/html");
        response.write("<h1>Name:Boban  LastName:Bobevski</h1>");
        response.end();
    };
    if(url === '/academy'){
        response.setHeader("Content-Type", "text/html");
        response.write("<h1>Current subject is node.js :)</h1>");
        response.end();
    };
})


server.listen(4000, () => {
    console.log("Server is up and running...")
})