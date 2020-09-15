const {
  MessageEmbed
} = require("discord.js");

module.exports = {
  name: "info",
  aliases: ["i"],
  description: "get info",
  execute(message) {
    const timeTaken = Date.now() - message.createdTimestamp;
    const botName = message.client.user.username;
    const embed = new MessageEmbed();
    embed.setTitle(`:information_source: ${botName} Status`);
    embed.setDescription('Here\'s some info about me');
    embed.addField(':white_check_mark: API Status', `ONLINE & bot latency to this server is ${Math.round(timeTaken)}ms`);
    embed.addField(':spy:  My masters:', 'homeranil[https://github.com/homeranil] & rant1989[https://github.com/rant1989]');
    embed.addField(':purple_heart:  My Life', 'I\'m currently being hosted on a Heroku!');
    embed.setColor('#006699');
    return message.channel.send(embed);

  },
};