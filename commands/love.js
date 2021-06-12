const Discord = require('discord.js');
const { Message } = require('discord.js');
const loves = [
    'https://media1.tenor.com/images/dd10eb337856d14a8640828f99dd7a2f/tenor.gif?itemid=12479111',
    'https://media1.tenor.com/images/110dbddfd3d662479c214cacb754995d/tenor.gif?itemid=10932413',
    'https://media.tenor.com/images/df0d39e9559a0b7e7dbfdccc26e9bba6/tenor.gif',
    'https://media.tenor.com/images/e73b29c821d63648544502c647b914ee/tenor.gif'
];
module.exports = {
    name: "love",
    description: "Love a person",
    usage: "love <user>",
    category: "anime/roleplay",
    run: async (client, message, args) => {

        const user = message.mentions.users.first();
        if (!user) return message.channel.send('Oh oh... you gotta provide a valid user to love :/');
        return message.channel.send(new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setImage(loves[Math.floor(Math.random() * loves.length)])
            .setDescription(`${message.author.username} loves ${user.username}!`)
        );
    }
}