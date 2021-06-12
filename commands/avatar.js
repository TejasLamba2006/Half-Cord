const discord = require("discord.js");

module.exports = {
    name: "avatar",
    aliases: ["av"],
    category: "Utility",
    usage: "avatar/av @user",
    description: "",
    run: async (client, message, args) => {

let user = message.author || message.mentions.users.first();

let embed = new discord.MessageEmbed()
.setTitle(`${user.username}'s Avatar!`)
.setImage(user.avatarURL({size: 2048, dynamic: true, format: "png"}))
.setColor("RANDOM");
message.channel.send(embed);

    }
};