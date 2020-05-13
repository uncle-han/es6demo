const http = require('http');
// console.log(http);
const fs = require('fs');

const app = http.createServer(function (req, res) {
    // console.log(req.url);
    const url = req.url;

    // res.end('我是首页');
    if (url === '/aaa') {
        res.writeHead(200, {
            'Content-type': 'text/html;charset=UTF-8'
        });
        fs.readFile('./html/fang.html', function (err, data) {
            res.end(data);
        })
    } else if (url === '/') {
        res.writeHead(404, {
            'Content-type': 'text/html;charset=UTF-8'
        });
        res.end('找不到页面！！');
    } else if (url === '/bbb') {
        res.writeHead(200, {
            'Content-type': 'text/html;charset=UTF-8'
        });
        fs.readFile('./html/yuan.html', function (err, data) {
            res.end(data);
        })
    } else if (url === '/img3.jpg') {
        res.writeHead(200, {
            'Content-type': 'image/jpg'
        });
        fs.readFile('./img/1.jpg', function (err, data) {
            res.end(data);
        })
    }
})

app.listen(3000, function () {
    console.log('启动服务器！！');
})