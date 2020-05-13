const http = require('http');
const fs = require('fs');
const path = require('path');

const app = http.createServer(function (req, res) {
    // res.writeHead(200, {'Content-type': 'charset=utf-8;'});
    // console.log(req.url);
    if (res.url === '/favicon.ico') {
        return;
    }
    // console.log(__dirname + '\\img');
    fs.readdir(__dirname + '\\img', function (err, files) {
        if (err) throw err;
        const filesArr = [];
        (function iterator(i) {
            if(i === files.length){
                console.log(filesArr);
                return;
            }
            fs.stat(__dirname + '\\img' + '\\' + files[i], function(err, status){
                if(err) throw err;
                if(status.isFile()){
                    filesArr.push(files[i]);
                }
                iterator(i + 1);
            })
            
        })(0)
    });

    res.end();
});
app.listen(4000, function () {
    console.log('启动服务器！！');
})