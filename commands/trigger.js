const canvacord = require("canvacord");
const { MessageAttachment } = require("discord.js");
const Discord = require('discord.js');
module.exports = {
    name: "trigger",
    category: "IMAGE",
    aliases: ["trig", "trig"],
    usage: "trigger <MENTION>",
    description: "trigger",
    run: async (client, message, args) => {
        
            let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
            let triggered = await canvacord.Canvas.trigger(user.displayAvatarURL({ format: "png", dynamic: false }));
            let attachment = new MessageAttachment(triggered, "triggered.gif");
            return message.channel.send(attachment);
        }
    }