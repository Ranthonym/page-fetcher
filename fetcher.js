const request = require('request');
const fs = require('fs');

const inputArr = process.argv.slice(2); 
const url = inputArr[0].toString();  
const filePath = inputArr[1].toString();  // = .index.html


// method 1: callback hell
  // request (url, (error, response, body) => { 

  //   console.log("writing to file")
  //   fs.writeFile(filePath, response.body, (err) => {
  //     fs.stat(filePath, (err, stat) => {
  //       if (err) throw err;
  //       console.log(`Downloaded and saved ${stat.size} bytes to ${filePath}`);
  //     });
  //   });
  // });
    

// method 2: using writeFile as a callback to request function
  const writer = (error, response, body) => { 

   
      console.log("writing to file")
      fs.writeFile(filePath, response.body, (err) => {
        fs.stat(filePath, (err, stat) => {
          if (err) throw err;
          console.log(`Downloaded and saved ${stat.size} bytes to ${filePath}`);
        });
      });
    }

    request (url, writer);


