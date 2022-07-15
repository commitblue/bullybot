// bullybot
const {Client, Intents, Permissions} = require("discord.js")
const client=new Client({
    intents:[
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});
const modulesPath = "./Modules/"
const commandsModule = require(modulesPath + "commands.js")
require("dotenv").config()

const prefix = "bullybot$"

client.on("messageCreate", (msg) => {
    if (msg.author.bot){return}
    const recognizedPrefix = msg.content.substring(0, prefix.length)
    if (recognizedPrefix === prefix){
        const messaged = msg.content.substring(prefix.length, msg.content.length)
        const commandFetched = commandsModule[messaged.split(" ")[0]]
        if (commandFetched){
            commandFetched.functionToRun(msg)
        }
    }
})

client.on("ready", () => {
    console.log("ready")
})

client.login(process.env.Token)