const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "channels",
  aliases: ["cls"],
  category: "Information",
  description: "Show Discord Server Channels!",
  usage: "Channels",
  run: async (client, message, args) => {
        
	//Format | <Name> - <ID> - <Type>

    const Channels = await message.guild.channels.cache.filter(Ch => Ch.type !== "category").map(C => `${C.name} - ${C.id} - ${C.type.charAt(0).toUpperCase() + C.type.slice(1)}`).join("\n");

    return message.channel.send("```" + Channels + "```", { split: { char: "\n" }});
  }
};