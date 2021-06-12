const Color = `RANDOM`;
const Discord = require("discord.js");

module.exports = {
  name: "roles",
  aliases: ["rls"],
  category: "Information",
  description: "Show Discord Server Roles!",
  usage: "Roles",
  run: async (client, message, args) => {

	 //Format | <Name> - <ID> - <Members With That Role>
        
    const Roles = await message.guild.roles.cache.map(R => `${R.name} - ${R.id} - ${R.members.array().length}`).join("\n");

    return message.channel.send("```" + Roles + "```", { split: { char: "\n" }});
  }
};