// MAKARON GAMES DOODOO FART
const {Client, Intents, Permissions} = requrie("discord.js")
const client = new Client({Intents:[Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]})
const modulesPath = "./Modules"
const commandsModule = require(modulesPath + "commands.js")

const prefix = "$"

Client.on("MessageCreate", (msg) => {

})

Client.on("ready", () => {
    console.log("ready")
})