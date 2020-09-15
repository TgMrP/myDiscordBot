const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h", "info"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();

    const botName = message.client.user.username;

    let helpEmbed = new MessageEmbed()
      .setTitle(`${botName} Help`)
      .setDescription("List of all commands")
      .setColor("#F8AA2A");

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${
          cmd.aliases ? `(${cmd.aliases})` : ""
        }**`,
        `${cmd.description}`,
        true
      );
    });

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  },
};
