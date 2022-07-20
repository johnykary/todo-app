module.exports = (app) => { 
    const homeController = require("./controllers/home") 
    app.get('/', homeController.welcome)
    
    const todoController = require("./controllers/todo")
    app.post('/todo/add', todoController.add) 
    app.post('/todo/remove', todoController.remove) 
    app.put('/todo/update', todoController.update)
    app.get('/todo/get', todoController.get) 
}