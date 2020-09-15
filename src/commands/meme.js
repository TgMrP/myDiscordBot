const got = require('got');
const {
  MessageEmbed
} = require("discord.js");

module.exports = {
  name: "meme",
  aliases: ["mm"],
  description: "meme",
  execute(message) {
    got('https://www.reddit.com/r/memes/random/.json').then(response => {
      let content = JSON.parse(response.body);
      let memeImage = content[0].data.children[0].data.url;
      let memeTitle = content[0].data.children[0].data.title;
      let memeUpvotes = content[0].data.children[0].data.ups;
      let memeDownvotes = content[0].data.children[0].data.downs;
      let memeNumComments = content[0].data.children[0].data.num_comments;
      const embed = new MessageEmbed();
      embed.setTitle(`${memeTitle}`);
      embed.setImage(memeImage);
      embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`);
      message.channel.send(embed);
    }).catch(console.error);
    return;
  },
};