// MAKARON GAMES DOODOO FART
const {Client, Intents, Permissions} = requrie("discord.js")
const modulesPath = "./Modules"
const commandsModule = require(modulesPath + "commands.js")

Client.on("MessageCreate", (msg) => {

})

Client.on("ready", () => {
    console.log("ready")
})