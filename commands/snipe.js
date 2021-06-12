const discord = require("discord.js")
const db = require("quick.db")

module.exports ={
    name: "snipe",
    aliases: ["ms", "snipe"],
    category: "fun",
    usage: "(prefix) snipe",
    description: "get deleted message",
    
    run: async (client, message, args) => {


        const msg = client.snipes.get(message.channel.id)
        if(!msg) return message.channel.send("there is no deleted messages")
        const embed = new discord.MessageEmbed()
        .setAuthor(msg.author, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(msg.content)
        .setColor('RANDOM')
        .setTimestamp()
        if(msg.image)embed.setImage(msg.image)
        message.channel.send(embed)
    }
}