const Discord = require("discord.js");

module.exports = {
    name: "nuke",
    run: async (client, message, args) => {

        //setting perms to use
        if (!message.member.hasPermission("MANAGE_CHANNELS")) {
            return message.channel.send("You Don't Have Permission!")
        }

        //message before nuking the channel
        message.channel.send('**nuking...**')
        
        //cloning the channel
        await message.channel.clone().then

        //cloning parent loaction (exact same location) of channel
        ((ch) =>{ch.setParent(message.channel.parent.id);

        //setting up in clone location 
        ch.setPosition(message.channel.position);

        //deleteing channel after doing clone work
        message.channel.delete().then

        //sending nuked message to the channel 
        (ch.send('**Channel Has Been Nuked** \n https://imgur.com/LIyGeCR'))
 
    });

}}