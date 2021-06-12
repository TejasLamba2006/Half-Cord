const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "setlng",
    description: "",
    run: async (client, message, args) => {
        let guilcd = message.guild.iconURL()
 let changelng = new Discord.MessageEmbed()
 .setTitle(`Server Language Setting`, guilcd)
 .setDescription(`
 
 ✵ Click On 🤖 To Change Server Bot Language To **EN**
 ✵ اضغط على 🎉 لتغير لغة البوت الخاص بل السيرفر الى **العربي**`)
 .setFooter(message.author.username, guilcd)
 message.channel.send(changelng).then(async msg => {
msg.react("🎉")
msg.react("🤖") 
})
const cdseconds = 5;
client.on("messageReactionAdd", (reaction, user) => {
    if(user.bot) return;
    const message = reaction.message;
    const member = message.guild.members.cache.get(user.id)
    if(
        ["🎉", "🤖"].includes(reaction.emoji.name)
    ) {
        switch(reaction.emoji.name) {
            case "🎉":
                db.set(`lng_${message.guild.id}`, 'AR')
                message.channel.send(`لقد تم تغير لغة البوت الى العربية!`)
                reaction.remove(user.id)                
                break;
        case "🤖":
        db.set(`lng_${message.guild.id}`, 'EN')
        message.channel.send(`Server Default Bot Language Changed To **EN**`)
        reaction.remove(user.id)                
            break;
        }
    }
})
}}