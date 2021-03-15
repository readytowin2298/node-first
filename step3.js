const fs = require('fs');
const argv = process.argv;
const axios = require('axios');

function cat(path){
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
          // handle possible error
          console.error(err);
          // kill the process and tell the shell it errored
          process.exit(1);
        }
        // otherwise success
        console.log(`file contents: ${data}`);
    })
}


function webCat(url){
    axios.get(url).then( data =>{
        console.log(data)
    }
    ).catch(err =>{
        console.log(err)
    })
}


if(argv[argv.length - 2] === '--out' || argv[argv.length - 2] === '--o'){
    for(let i=2; i<=argv.length - 2; i++){
        if(argv[2] == '-f'){
            fs.appendFile(argv[argv.length], cat(argv[i]), "utf8", function(err){
                if(err){
                    console.log(err)
                    process.exit(1)
                }
            } )
        }
        if(argv[2] == '-w'){
            webCat(argv[i])
        }
}} else{
    for(let i=3; i<argv.length; i++){
        if(argv[2] == '-f'){
            cat(argv[i])
        }
        if(argv[2] == '-w'){
            webCat(argv[i])
        }
    }
}
