const DBConnection = require('../dbconnection.js')

module.exports = {
    addBirthday: (ctx) => {
        const DB = DBConnection.getDB()
        console.log(ctx.update.message.text)
        ctx.reply('Working!')
    }
}