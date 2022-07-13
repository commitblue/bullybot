// MAKARON GAMES DOODOO FART
const {Client, Intents, Permissions} = requrie("discord.js")
const client = new Client({Intents:[Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]})
const modulesPath = "./Modules"
const commandsModule = require(modulesPath + "commands.js")

const prefix = "$"

Client.on("MessageCreate", (msg) => {
    if (msg.content.substring(1,prefix.length) === prefix){
        const fetchedCommand = commandsModule[msg.content.split(" ")[0].substring(prefix.length, msg.content.split(" ")[0].length)]
        //that was unreadable but who cares
        if (fetchedCommand){
            fetchedCommand(msg)
        }
    }
})

Client.on("ready", () => {
    console.log("ready")
})