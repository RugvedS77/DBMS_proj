const fs = require('fs');

fs.readFile('asins.json','utf-8',(err,res)=>{
    if(err){
        console.log('Error while reading the file',err);
        return;
    }

    try {
        const asins = JSON.parse(res);
    } catch (error) {
        console.error(err);
    }
});

console.log(asins)