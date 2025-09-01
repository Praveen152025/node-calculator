const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const query = url.parse(req.url, true).query;
    const num1 = parseFloat(query.num1);
    const num2 = parseFloat(query.num2);
    const operation = query.operation;

    let result;
    switch (operation) {
        case 'add': result = num1 + num2; break;
        case 'subtract': result = num1 - num2; break;
        case 'multiply': result = num1 * num2; break;
        case 'divide': result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero'; break;
        default: result = 'Invalid operation';
    }

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`Result: ${result}`);
});

server.listen(3000, () => {
    console.log('Calculator server running at http://localhost:3000');
});
