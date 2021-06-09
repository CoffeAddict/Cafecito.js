require('dotenv').config()
const { MongoClient } = require("mongodb")

const DBUser = process.env.DB_USER
const DBPasword = process.env.DB_PASSWORD

const uri = `mongodb+srv://${DBUser}:${DBPasword}@cluster0.hbx1a.mongodb.net/myFirstDatabase`

let DB

module.exports = {
    connectToServer: (callback) => {
        const config = {
            retryWrites: true,
            writeConcern: 'majority',
            useUnifiedTopology: true
        }
        MongoClient.connect(uri, config, (error, client) => {
            DB  = client.db('main')
            return callback(error)
        })
    },
    getDB: () => {
        return DB
    }
}