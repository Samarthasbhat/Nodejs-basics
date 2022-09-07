var file  = require('fs')

file.unlink('doremon.txt',function(err){
    if(err) throw err
    console.log("A file has been deleted")
} )