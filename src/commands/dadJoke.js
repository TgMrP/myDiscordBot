const got = require('got');

module.exports = {
  name: "dad",
  description: "dad joke",
  execute(message) {
    got('https://icanhazdadjoke.com/slack').then(response => {
      let content = JSON.parse(response.body);
      const joke = content.attachments[0].text;
      message.channel.send(joke)
        .then(sent => console.log(`Sent a reply to ${sent.author.username}`));
    }).catch(console.error);
    return;
  },
};