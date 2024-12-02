// const jsonServer = require('json-server')

// const userServer = jsonServer.create()

// const router = jsonServer.router('db.json')

// const middleware = jsonServer.defaults()

// const port = 4000 || process.env.PORT 


// userServer.use(middleware)
// userServer.use(router)

// userServer.listen(port,()=>{
//     console.log(`Server running on port ${port}.`);    
// })

const jsonServer = require('json-server')

const userServer = jsonServer.create()

const router = jsonServer.router('db.json')

const middleware = jsonServer.defaults()

const port = 4000 || process.env.PORT

userServer.use(middleware)
userServer.use(router)

userServer.listen(port,()=>{
    console.log(`you are now running on port${port}`);
})