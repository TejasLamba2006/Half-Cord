const Color = "RANDOM";
const Discord = require("discord.js"), MAL = require("mal-scraper");

module.exports = {
  name: "anime",
  aliases: ["animeinformation", "ai"],
  category: "Information",
  description: "Show Anime/Hanime Information!",
  usage: "Anime <Name>",
  run: async (client, message, args) => {

    let Name = args.join(" "), ErrorMsg = "Error: No Anime/Hanime Found Or Something Went Wrong!", Data, Rating;

    if (!Name) return message.channel.send("Please Give Name Of The Anime/Hanime!");

    await MAL.search.search("anime", { term: Name }).then(async Response => {
        if (Response.length > 1) {
          const Filter = (m) => m.author.id === message.author.id;
          let AllTitle = await Response.filter((T, Index) => Index < 20).map((T, Position) => `${Position + 1} | [${T.title.length > 50 ? `${T.title.slice(0, 50)}...` : T.title}](${T.url})`).join("\n");
          const Embed = new Discord.MessageEmbed()
          .setColor(Color)
          .setTitle("Please Choose")
          .setDescription(AllTitle)
          .setFooter(`Select Between 1 - ${Response.length > 20 ? "20" : Response.length} | Time - 5 Minutes`)
          .setTimestamp();
          try {
          message.channel.send(Embed);
          } catch (error) {
          AllTitle = await Response.filter((T, Index) => Index < 10).map((T, Position) => `${Position + 1} | [${T.title.length > 50 ? `${T.title.slice(0, 50)}...` : T.title}](${T.url})`).join("\n");
          const Emb = new Discord.MessageEmbed()
          .setColor(Color)
          .setTitle("Please Choose")
          .setDescription(AllTitle)
          .setFooter(`Select Between 1 - ${Response.length > 10 ? "10" : Response.length} | Time - 5 Minutes`)
          .setTimestamp();
          message.channel.send(Emb);
          };
          let Msg = await message.channel.awaitMessages(Filter, { max: 1, time: 300000, errors: ["time"] }).catch((e) => {
            return message.channel.send("No Time To Answer? Okay.");
          });
          Msg = Msg.first();
          if (isNaN(Msg.content) || parseInt(Msg.content) -1 > Response.length || parseInt(Msg.content) < 1 || !Response[parseInt(Msg.content) - 1]) return message.channel.send("Invalid Index Provided!");
          Data = await FormatAnime(Response[parseInt(Msg.content) - 1], message);
        } else {
          Data = await FormatAnime(typeof Response === "array" ? Response[0] : Response);
        };

        return message.channel.send(Data);
    }).catch((e) => {
      console.log(e);
      return message.channel.send(ErrorMsg);
    });
    
    async function FormatAnime(Data, message) {
      const Link = Data.url;
      Data = await MAL.getInfoFromURL(Link).catch(() => {});
      Rating = Data.rating;
      AnimeObj = {
         embed: {
           color: Color,
           title: "Anime Information!",
           thumbnail: { url: Data.picture },
           description: `Name - **${Data.title}**\nID - **${Data.id}**\nType - **${Data.type}**\nStatus - **${Data.status}**\nPremiered - **${Data.premiered ? Data.premiered : "Unknown"}**\nAired - **${Data.aired ? Data.aired : "Unknown"}**\nEpisodes - **${Data.episodes}**\nGenres - **${Data.genres ? Data.genres.join(", ") : "None"}**\nDuration - **${Data.duration}**\nScore - **${Data.score} (${Data.scoreStats.replace("scored ", "")})**\nMembers - **${Data.members}**\nRanked - **${Data.ranked}**\nPopularity - **${Data.popularity}**\nFavorites - **${Data.favorites}**\nStudios - **${Data.studios ? Data.studios.join(", ") : "None"}**\nRating - **${Rating}**\nLink - **[Click Me](${Link})**\nStoryline -\n**${Data.synopsis ? Data.synopsis.length > 100 ? `${Data.synopsis.slice(0, 100)}...` : Data.synopsis : "No Storyline Found."}**`,
           footer: { text: `Requested By ${message.author.username}` },
           timestamp: new Date()
         }
       }
       return AnimeObj;
    };
  }
};