const {readFileSync, writeFileSync} = require("fs")
let settingsOfServers = require("./JSON/settingsOfServers.json")
module.exports = {
    activateBullying : {
        description : "Activates bullying in this server.",
        example : "bullybot$activateBullying",
        arguments : "<none>",
        functionToRun : (msg) => {
            settingsOfServers[msg.guild.id].bullymode = true
            writeFileSync("./JSON/settingsOfServers.json", settingsOfServers)
            msg.reply("Activated bullymode.")
        }
    },
    deactivateBullying : {
        description : "Deactivates bullying in this server.",
        example : "bullybot$deactivateBullying",
        arguments : "<none>",
        functionToRun : (msg) => {
            settingsOfServers[msg.guild.id].bullymode = true
            writeFileSync("./JSON/settingsOfServers.json", settingsOfServers)
            msg.reply("Deactivated bullymode.")
        }
    }
}