const Discord = require("discord.js");
const sugar = require("sugar");
const client = new Discord.Client();

const prefix = "!ab";

client.on("message", function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length + 1);
    const split = commandBody.split(/ (.+)/);
    const args = split[1]
    const command = split[0].toLowerCase();

    if (command === 'help') {
        message.reply("I'm a bot for goal tracking and accountability!")
    } else if (command === 'pingme') {

    } else {
        message.reply("sorry, I didn't recognize the command " + command + " with arguments " + args);
    }
});

client.login(process.env.BOT_TOKEN);