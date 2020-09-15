const got = require('got');

module.exports = {
  name: "chuck",
  aliases: ["cn"],
  description: "chuck noris",
  execute(message) {
    got('https://api.chucknorris.io/jokes/random').then(response => {
      let content = JSON.parse(response.body);
      message.reply(content.value);
    }).catch(console.error);
    return;
  },
};