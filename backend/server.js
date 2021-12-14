const express = require('express')
const app = express()
const cors = require('cors')

const { MongoClient } = require('mongodb');
const dbClient = new MongoClient("mongodb://mongo:27017");
const db = dbClient.db("todo")

async function main() {
    await dbClient.connect();

    app.use(cors())
    app.use(express.json())  
    
    app.use((req, res, next) => {
        req.db = db
        next()
    })
    
    require("./routes")(app);
    
    app.listen(8001) 
}


main()