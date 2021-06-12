const Discord = require('discord.js');
const { Message } = require('discord.js');
const kills = [
    'https://media1.tenor.com/images/bb4b7a7559c709ffa26c5301150e07e4/tenor.gif?itemid=9955653',
    'https://media.tenor.com/images/13eee47176e4cc0ca5de5f4f4dcd7eab/tenor.gif',
    'https://media.tenor.com/images/558a003d1315ccb83b5b18472a9e2acc/tenor.gif',
    'https://media.tenor.com/images/1b25cc885e2290e6174a3ae588f89338/tenor.gif'
];

module.exports = {
    name: "kill",
    description: "kill a person",
    usage: "kill <user>",
    category: "anime/roleplay",
    run: async (client, message, args) => {
        const user = message.mentions.users.first();
        if (!user) return message.channel.send('Oh oh... you gotta provide a valid user to kill :/');
        return message.channel.send(new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setImage(kills[Math.floor(Math.random() * kills.length)])
            .setDescription(`${message.author.username} killed ${user.username}!`)
        );
    }
}