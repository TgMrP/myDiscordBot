module.exports = {
  name: "kick",
  aliases: ["k"],
  description: "kick a user [only admins]",
  execute(message) {
    if (!message.guild.member(message.author).hasPermission('KICK_MEMBERS')) {
      return message.channel.send('You do not have the permission for kick users!');
    }
    if (message.mentions.users.size === 0) {
      return message.channel.send('You need to ping a user !');
    }
    let kickMember = message.guild.member(message.mentions.users.first());
    if (!kickMember) {
      return message.channel.send('User not found!');
    }

    kickMember.kick().then((member) => {
      message.channel.send(member.displayName + " has left the server");
      return message.channel.send(member.displayName + " has been successfully kicked by " + "<@" + message.author.id + ">");
    });
  },
};