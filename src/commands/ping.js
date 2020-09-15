module.exports = {
  name: "ping",
  aliases: ["p"],
  description: "ping the bot",
  async execute(message) {
    const timeTaken = Date.now() - message.createdTimestamp;
    await message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
    return;
  },
};