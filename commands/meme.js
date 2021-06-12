const Fetch = require("node-fetch");
const Color = `RANDOM`;

module.exports = {
  name: "meme",
  aliases: [],
  category: "fun",
  description: "Return A Random Meme!",
  usage: "Meme",
  run: async (client, message, args) => {
    const Response = await Fetch("https://api.darkboy.me/getmeme");
    const Json = await Response.json();

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(Json.title)
    .setImage(Json.image)
    .setFooter(`${Json.ups} 👍 | ${Json.comments} 💬`)
    .setTimestamp();

    return message.channel.send(Embed);
  }
};