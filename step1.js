const fs = require('fs');
const argv = process.argv

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

for(let i=2; i<argv.length; i++){
    cat(argv[i])
}