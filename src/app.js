// src/app.js
const http = require('http');
 
// Create a server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
 
    // Write multiple lines before ending the response
    res.write('Hello, World!\n');
    res.write('Welcome to my Node.js server.\n');
    res.end('Have a great day!'); // End the response
});
 
// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
 
    console.log("I am Thrupthi")
});