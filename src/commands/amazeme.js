const got = require("got");

module.exports = {
  name: "amazeme",
  aliases: ["am"],
  description: "send GIF that amaze you",
  execute(message) {
    got("https://www.reddit.com/r/interestingasfuck/random.json")
      .then((response) => {
        let content = JSON.parse(response.body);
        var title = content[0].data.children[0].data.title;
        var amazeme = content[0].data.children[0].data.url;

        return message.channel
          .send("**" + title + "**" + "\n" + amazeme)
          .catch(console.error);
      })
      .catch(console.error);
  },
};