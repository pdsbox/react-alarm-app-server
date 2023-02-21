'use strict';

// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
const fs = require('fs');
const os = require('os');
const path = require('path');

fs.copyFile('data.json', os.tmpdir() + 'data.json', function (err) {
    if (err) console.log(err);
    else console.log("copy file succeed to" + os.tmpdir());
});
const server = jsonServer.create()
const router = jsonServer.router(path.resolve(os.tmpdir() + 'data.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares)
// Add this before server.use(router)
// server.use(jsonServer.rewriter({
//     '/alarm/*': '/$1',
//     '/stopwatch/:resource/:id/show': '/:resource/:id'
// }))
server.use(router)
server.listen(3000, () => {
    console.log(`JSON Server is running`)
})

// Export the Server API
module.exports = server
