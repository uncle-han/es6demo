const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path')

function mime(extendsname) {
    switch (extendsname) {
        case '.html':
            return 'text/html;charset=UTF8;';
        case '.css':
            return 'text/css';
        case '.jpg':
            return 'image/jpg';
    }
}

const app = http.createServer(function (req, res) {
    if (req.url === '/favicon.ico') {
        return;
    }
    var pathname = url.parse(req.url).pathname;

    if (req.url === '/') {
        pathname = 'html/index.html';
    }

    // console.log('./static/' + path.extname(pathname).substr(1) + '/' + pathname);
    fs.readFile('./static/' + pathname, function (err, data) {
        if (err) {
            fs.readFile('./static/html/404.html', function(err, errdata){
                res.writeHead(200, {
                    'Content-type': 'text/html;charset=UTF8;'
                });
                res.end(errdata);
            });
            return;
        };
        res.writeHead(200, {
            'Content-type': mime(path.extname(pathname))
        });
        res.end(data);
    })
})

app.listen(2000, function () {
    console.log('启动服务器！！');
})