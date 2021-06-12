
const Discord = require('discord.js');
const ms = require('pretty-ms');
const { version } = require('../package.json');
const { version: discordjsVersion } = require('discord.js');
module.exports = {
    name: "help",
    run: async (client, message, args) => {
        message.channel.send(new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`Simple reaction role bot`)
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .setDescription(`ha none`)
            .setTimestamp()
            .setFooter('discord.gg/devs')
        );
    }
}