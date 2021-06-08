require('dotenv').config()

const { Telegraf } = require('telegraf')
const { newCommand } = require('./commands/main-commands.js')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => {
    console.log(ctx)
})

bot.command('custom', newCommand)

bot.launch()
