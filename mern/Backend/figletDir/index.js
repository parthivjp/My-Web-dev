const figlet = require('figlet');

figlet("Parthiv Panchal !!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

// PS C:\Users\parth\Documents\GitHub\Mern-Stack-\mern\Backend\figletDir> node index.js
//   ____            _   _     _         ____                  _           _   _ _ 
//  |  _ \ __ _ _ __| |_| |__ (_)_   __ |  _ \ __ _ _ __   ___| |__   __ _| | | | |
//  | |_) / _` | '__| __| '_ \| \ \ / / | |_) / _` | '_ \ / __| '_ \ / _` | | | | |
//  |  __/ (_| | |  | |_| | | | |\ V /  |  __/ (_| | | | | (__| | | | (_| | | |_|_|
//  |_|   \__,_|_|   \__|_| |_|_| \_/   |_|   \__,_|_| |_|\___|_| |_|\__,_|_| (_|_)