const http = require('http');
const https = require('https');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3001;
const origin = '127.0.0.1';

function loadAccessibilityStatement(url) {
    return new Promise((resolve, reject) => {
        let client = http;
        if (url.toString().indexOf("https") === 0) {
            client = https;
        }
        client.get(url, (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
            });
            resp.on('end', () => {
                resolve(data);
            });
        }).on("error", (err) => {
            console.log("Cannot read accessibility statement from", url);
            reject(err);
        });
    });
}

const server = http.createServer(async (req, res) => {
    const queryObject = url.parse(req.url, true).query;
    if (queryObject.url) {
        const host = 'http://' + origin;
        const statement = await loadAccessibilityStatement(queryObject.url);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.setHeader('Access-Control-Allow-Origin', host);
        res.end(statement);
    } else {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'text/plain');
        res.end("No statement found");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});