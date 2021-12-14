const ObjectId = require("mongodb").ObjectId

const md = {}

md.add = async (req, res) => {
    let todo = req.body.text

    let inserted =  await req.db.collection("todos").insertOne({
        text: todo
    })
 
    let dbTodo = await req.db.collection("todos").findOne({
        _id: inserted.insertedId
    }) 

    res.json(dbTodo)
}

md.remove = async (req, res) => {
    
    // TO IMPLEMENT

    res.json('ok')
}

md.get = async (req, res) => {

    let todos = await req.db.collection("todos").find({}, { _id: 1, text: 1 }).toArray()

    res.json(todos)
}

module.exports = md