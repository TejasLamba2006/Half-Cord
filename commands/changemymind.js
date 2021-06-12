const { MessageAttachment } = require('discord.js')

const Canvacord = require('canvacord')

module.exports = {

    name: "changemymind",

    usage: "changemymind <text>",
aliases: ["cmm"], 
    category: "fun",

    async execute (bot, message, args) {

        let text = args.join(' ')

        if(!text) return message.channel.send('No text is provided.')

        let img = await Canvacord.Canvas.changemymind(text);

        let attachment = new MessageAttachment(img, 'changemymind.png');

        message.channel.send(attachment)

    }

}