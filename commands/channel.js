const Color = "RANDOM";
const Discord = require("discord.js"), moment = require("moment");

module.exports = {
  name: "channel",
  aliases: ["channelinformation", "ci"],
  category: "Information",
  description: "Show Discord Channel Information!",
  usage: "Channel <Mention Or Name Or ID>",
  run: async (client, message, args) => {
    
    if (!args[0]) return message.channel.send("Please Mention A Channel Or Name Or ID Or Channel Starts/Ends With Or Channel Includes!");

    const Channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.guild.channels.cache.find(Ch => Ch.name.toLowerCase() === args.join(" ").toLowerCase()) || message.guild.channels.cache.find(Ch => Ch.name.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.channels.cache.find(Ch => Ch.name.toLowerCase().startsWith(args.join(" ").toLowerCase())) || message.guild.channels.cache.find(Ch => Ch.name.toLowerCase().endsWith(args.join(" ").toLowerCase()));

    if (!Channel || Channel.type === "category" || Channel.type === "unknown") return message.channel.send("Please Mention A Valid Channel Or Name Or ID Or Channel Starts/Ends With Or Channel Includes!");

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle("Channel Information!")
    .setFooter(`Requested By ${message.author.username}`)
    .setTimestamp();

	async function FormatPerms(Perms) {
      const Parms = {
      CREATE_INSTANT_INVITE: "Create Instant Invite",
      KICK_MEMBERS: "Kick Members",
      BAN_MEMBERS: "Ban Members",
      ADMINISTRATOR: "Administrator",
      MANAGE_CHANNELS: "Manage Channels",
      MANAGE_GUILD: "Manage Guild",
      ADD_REACTIONS: "Add Reactions",
      VIEW_AUDIT_LOG: "View Audit Logs",
      PRIORITY_SPEAKER: "Priority Speaker",
      STREAM: "Steam",
      VIEW_CHANNEL: "View Channel",
      SEND_MESSAGES: "Send Messages",
      SEND_TTS_MESSAGES: "Send TTS Messages",
      MANAGE_MESSAGES: "Manage Messages",
      EMBED_LINKS: "Embed Links",
      ATTACH_FILES: "Attach Files",
      READ_MESSAGE_HISTORY: "Read Message History",
      MENTION_EVERYONE: "Mention Everyone",
      USE_EXTERNAL_EMOJIS: "Use External Emojis",
      VIEW_GUILD_INSIGHTS: "View Guild Insights",
      CONNECT: "Connect",
      Speak: "Speak",
      MUTE_MEMBERS: "Mute Members",
      DEAFEN_MEMBERS: "Deafen Members",
      MOVE_MEMBERS: "Move Members",
      USE_VAD: "Use Voice Activity Detection",
      CHANGE_NICKNAME: "Change Nickname",
      MANAGE_NICKNAMES: "Manage Nicknames",
      MANAGE_ROLES: "Manage Roles",
      MANAGE_WEBHOOKS: "Manage Webhooks",
      MANAGE_EMOJIS: "Manage Emojis"
    };
    Perms = Perms.map(P => Parms[P]).join(", ");
    return Perms;
	};

	async function Format(Stamp) {
		  return `${String(moment(Stamp).format("LL")).replace(",", "")} ${moment(Stamp).format("LT")} (${moment(Stamp).fromNow()})`
	};

    if (Channel.type !== "voice" && Channel.type !== "unknown") {
      Embed.setDescription(`Name - **${Channel.name}**\nID - **${Channel.id}**\nCategory - **${Channel.parent ? Channel.parent.name : "None"}**\nType - **${Channel.type.charAt(0).toUpperCase() + Channel.type.slice(1)}**\nNsfw - **${Channel.nsfw ? "Yes" : "No"}**\nCreated - **${await Format(Channel.createdTimestamp)}**\nPermissions -\n${await FormatPerms(Channel.permissionsFor(message.member).toArray().sort((a, b) => a < b ? -1 : 1))}\nTopic -\n${Channel.topic ? Channel.topic.length > 100 ? `${Channel.topic.slice(0, 100)}...` : Channel.topic : "None"}`);
      return message.channel.send(Embed);
    } else {
      Embed.setDescription(`Name - **${Channel.name}**\nID - **${Channel.id}**\nCategory - **${Channel.parent ? Channel.parent.name : "None"}**\nType - **${Channel.type.charAt(0).toUpperCase() + Channel.type.slice(1)}**\nBitrate - **${Channel.bitrate}**\nUsers Limit - **${Channel.userLimit === 0 ? "Unlimited" : Channel.userLimit}**\nFull - **${Channel.full ? "Yes" : "No"}**\nMembers - **${Channel.members.array().length}**\nCreated - **${await Format(Channel.createdTimestamp)}**\nPermissions -\n${await FormatPerms(Channel.permissionsFor(message.member).toArray().sort((a, b) => a < b ? -1 : 1))}`)
      return message.channel.send(Embed);
    };
  }
};