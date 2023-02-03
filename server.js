// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('data.json')
const middlewares = jsonServer.defaults()

// const http = require('http');

// const PORT = process.env.PORT || 3000;
// const httpServer = http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Credentials', 'true');

//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('ok');
// })


server.use(middlewares)
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}))
server.use(router)
server.listen(3000, () => {
    console.log(`JSON Server is running`)
})

// Export the Server API
module.exports = server
