const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "gayrate",
    description: "How gay you are",
    category: "Fun",
    run: async (client, message, args) => {
        const stat = Math.floor(Math.random() * 100) + 1;
        const target = message.mentions.users.first() || message.author;
        return message.channel.send(new MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(`Gayrate hehhe`)
            .setDescription(`${target.tag} is ${stat}% Gay`)
        );
    }
}