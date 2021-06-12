const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "createcode",
    description: "Show bot stats",
    run: async (client, message, args) => {
  let code = args[0]
  if(!code) {
    let argsrequired = new Discord.MessageEmbed()
    .setTitle(`**An Invaild Usage**`)
    .setDescription(`Please insert a valid code for this!`)
    message.channel.send(argsrequired)
    return;
  }
  let codecheck = db.get(`botpremiumcodes`)
  let alreadyexist = new Discord.MessageEmbed()
  .setTitle(`Exisited Code`)
  .setDescription(`This Code It's already on the database please try to enter an other code`)
  if(codecheck && codecheck.find(find => find.premiumcodes == code)) return message.channel.send(alreadyexist);
  let codedata = {
   premiumcodes: code
  }
  db.add(`totalcodes`, 1)
  let totalcodes = db.get(`totalcodes`)
  let created = new Discord.MessageEmbed()
  .setTitle(`New Code Created With ${code} Name`)
  .setDescription(`Total Available Codes: ${totalcodes}`)
  message.channel.send(created)
  db.push(`botpremiumcodes`, codedata)
}}