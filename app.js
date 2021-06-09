require('dotenv').config()
const DBConnection = require('./dbconnection.js')

const { Telegraf } = require('telegraf')
const { addBirthday } = require('./commands/main-commands.js')

DBConnection.connectToServer((error, client) => {
    if (error) console.error(error)

    const bot = new Telegraf(process.env.BOT_TOKEN)

    bot.start((ctx) => {
        console.log(ctx)
    })

    bot.command('add_bd', addBirthday)
    bot.launch()
})