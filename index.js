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

client.on("MessageCreate", (msg) => {
    if (msg.content.substring(1,prefix.length) === prefix){
        const fetchedCommand = commandsModule[msg.content.split(" ")[0].substring(prefix.length, msg.content.split(" ")[0].length)]
        //that was unreadable but who cares
        if (fetchedCommand){
            fetchedCommand(msg)
        }
    }
})

client.on("ready", () => {
    console.log("ready")
})

client.login(process.env.Token)