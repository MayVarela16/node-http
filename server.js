const http = require('node:http');
const data = require('./data');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });


    const htmlContent = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.title}</title>
        </head>
        <body>
            <h1>${data.title}</h1>
            <h2>${data.subtitle}</h2>
            <p>${data.description}</p>
        </body>
        </html>
    `;

    res.end(htmlContent);
});

server.listen(0,() => {
    console.log(`Server listening on Port ${server.address().port}`);
});

