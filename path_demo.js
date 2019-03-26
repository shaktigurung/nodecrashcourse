const path = require('path');

//Base file name
//console.log(__filename);
// Users/shakti/Desktop/NodeJS/NodeCrashCourse/reference/path_demo.js
//console.log(path.basename(__filename)); //path_demo.js

//Directory Name
//console.log(path.dirname(__filename)); //Users/shakti/Desktop/NodeJS/NodeCrashCourse/reference

//File extension
//console.log(path.extname(__filename)); //.js

//Create path object
//console.log(path.parse(__filename));
// { root: '/',
//   dir: '/Users/shakti/Desktop/NodeJS/NodeCrashCourse/reference',
//   base: 'path_demo.js',
//   ext: '.js',
//   name: 'path_demo' }

//Concatenate paths
// ../test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));