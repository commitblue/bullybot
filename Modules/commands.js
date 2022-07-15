const {readFileSync, writeFileSync} = require("fs")
let settingsOfServers = require("./JSON/settingsOfServers.json")
module.exports = {
    activateBullying : {
        description : "Activates bullying in this server.",
        example : "bullybot$activateBullying",
        arguments : "<none>",
        functionToRun : (msg) => {
            if (!msg.member.permissions.has("ADMINISTRATOR")){
                msg.reply("u aint no administrator")
                return
            }
            if (!settingsOfServers[msg.guild.id]){
                settingsOfServers[msg.guild.id] = {}
            }
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
            if (!msg.member.permissions.has("ADMINISTRATOR")){
                msg.reply("u aint no administrator")
                return
            }
            if (!settingsOfServers[msg.guild.id]){
                settingsOfServers[msg.guild.id] = {}
            }
            settingsOfServers[msg.guild.id].bullymode = true
            writeFileSync("./JSON/settingsOfServers.json", settingsOfServers)
            msg.reply("Deactivated bullymode.")
        }
    },
    readServerSettings : (msg) => {
        if (settingsOfServers[msg.guild.id]){
            let msgToReply = "Settings:\n"
            for (const setting in settingsOfServers[msg.guild.id]){
                const val = settingsOfServers[msg.guild.id][setting]
                msgToReply = msgToReply + `setting name : ${setting}\nvalue of setting:${val}\n`
            }
            msg.reply(msgToReply)
        } else {
            msg.reply("Server has no set settings. (yet)")
        }
    }
}