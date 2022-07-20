const ObjectId = require("mongodb").ObjectId

const md = {}

md.add = async (req, res) => {
  let todo = req.body.text

  let inserted = await req.db.collection("todos").insertOne({
    text: todo,
  })

  let dbTodo = await req.db.collection("todos").findOne({
    _id: inserted.insertedId,
  })

  res.json(dbTodo)
}

md.remove = async (req, res) => {
  let todoId = req.body.todoId
  try {
    await req.db
      .collection("todos")
      .deleteOne({ _id: ObjectId(todoId) })
    res.json("ok")
  } catch (e) {
    console.log(e)
    res.json(500, {msg: 'Failed to delete'});
  }
}

md.update = async (req, res) => {
  let todo = req.body.todo
  try {
    const updated = await req.db
      .collection("todos")
      .findOneAndUpdate(
        { _id: ObjectId(todo._id) },
        { $set: { text: todo.text } },
        { returnNewDocument: true }
      )
    res.json(updated)
  } catch (e) {
    console.log(e)
    res.json(500, {msg: 'Failed to update'});
  }
}

md.get = async (req, res) => {
  let todos = await req.db
    .collection("todos")
    .find({}, { _id: 1, text: 1 })
    .toArray()

  res.json(todos)
}

module.exports = md
