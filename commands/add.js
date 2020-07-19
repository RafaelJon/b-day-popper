module.exports = {
  name: "~add",
  description: "Add new birthday!",
  execute(msg, args, db, Discord) {
    let MessageEmbed;
    let err = false;
    let str = msg.content.split(" ");

    if (str.length != 4) {
      err = true;
    } else if (str[1].length < 0 && str[1].length < 20) {
      err = true;
    } else if (!new Date(str[2])) {
      err = true;
    } else if (!parseInt(str[3])) {
      err = true;
    }

    if (err) {
      MessageEmbed = new Discord.MessageEmbed()
        .setColor("#F93753")
        .setTitle("Insert new birthday failed!🎈🎈🎈")
        .setDescription("\u200B\nInputted data is invalid.");
      msg.channel.send(MessageEmbed);
    } else {
      db.Birthday.findOrCreate({
        where: {
          name: str[1],
          birthdate: str[2],
          timezone: parseInt(str[3]),
          channelId: msg.channel.guild.id,
        },
      })
        .then(() => {
          MessageEmbed = new Discord.MessageEmbed()
            .setColor("#20B2AA")
            .setTitle("Insert new birthday success!🎈🎈🎈\n\u200B")
            .addFields(
              {
                name: "▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄",
                value: "\n\u200B",
              },
              { name: "Birthday Detail", value: "\n\u200B" },
              { name: "Name:", value: str[1] },
              { name: "Birth Date:", value: str[2] },
              { name: "Time Zone:", value: str[3] },
              {
                name: "\u200B",
                value: "▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\n\u200B",
              }
            );
          msg.channel.send(MessageEmbed);
        })
        .catch((err) => {
          MessageEmbed = new Discord.MessageEmbed()
            .setColor("#F93753")
            .setTitle("Insert new birthday failed!🎈🎈🎈")
            .setDescription("\u200B\nFailed to insert birthday!");
          msg.channel.send(MessageEmbed);
        });
    }
  },
};
