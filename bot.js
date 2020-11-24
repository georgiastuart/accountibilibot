// Much code from https://www.digitalocean.com/community/tutorials/how-to-build-a-discord-bot-with-node-js

const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = "!ab";

client.on("message", function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length + 1);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command === 'help') {
        message.reply("I'm a bot for goal tracking and accountability!")
    }
});

client.login(process.env.BOT_TOKEN);