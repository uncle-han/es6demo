const fs = require('fs');
const path = require('path');
const dir = [];
fs.readdir('./',function(err, file){
    console.log(err);
    // console.log(file);
    (function iterater(i){
        if(i === file.length){
            return;
        }
        console.log(path.join(__dirname , file[i]));
        fs.stat(path.join(__dirname , file[i]), function(err, status){
            if(err){
                throw err;
            }
            if(status.isDirectory()){
                dir.push(file[i]);
            }
            iterater(i+1);
        });
    })(0);
    console.log(dir);
})