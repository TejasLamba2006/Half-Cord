const { Message } = require('discord.js');
        this.answers = [
            'yes',
            'no',
            'maybe',
            'ofc not',
            'probably',
            'yes but no',
            'no but yes',
            'yep',
            'nope',
            'i don\'t think so',
            'omg yes!',
            'nooooo',
             'Omg no!',
             'Nahhhhhh',
              'yessir',
              'No pretty sure no',
              'Is that even a Question? OFC YES',
              'Is that even a Question? OFC NO'
        ];
module.exports = {
    name: "8ball",
    aliases: ["question"],
    description: "",
    category: "extra",
    run: async (client, message, args) => {
        let say = message.content.split(" ").slice(1).join(" ")
        if(!say) return message.channel.send(`❌ | `+"I Cannot Answer A Blank Message - 8ball")
        return message.channel.send(this.answers[Math.floor(Math.random() * this.answers.length)]);
    }
}