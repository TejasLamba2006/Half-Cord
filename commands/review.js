const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "review",
  category: "bot",
  description: "Give us your opinion on the bot!",
  aliases: [],
  usage: "",
  run: (client, message, args) => {
    const review = args.join(" ");

    if (!review) return message.channel.send("Please provide a review");

    const embed = new MessageEmbed()
      .setColor("BLUE")
      .setTitle(`${message.author.username} Has given a review`)
      .setDescription(review)
      .setFooter(message.author.username)
      .setTimestamp();

    client.channels.cache.get('REVIEW CHANNEL ID').send(embed);
    message.channel.send("Thanks for your review <3");
  },
};