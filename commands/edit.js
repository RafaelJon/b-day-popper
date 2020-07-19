module.exports = {
  name: "~edit",
  description: "Edit existing birthday!",
  execute(msg, args, db, Discord) {
    let MessageEmbed;
    let err = false;
    let str = msg.content.split(" ");

    if (str.length != 5) {
      err = true;
    } else if (!parseInt(str[1])) {
      err = true;
    } else if (!new Date(str[3])) {
      err = true;
    } else if (!parseInt(str[4])) {
      err = true;
    }

    if (err) {
      MessageEmbed = new Discord.MessageEmbed()
        .setColor("#F93753")
        .setTitle("Update existing birthday failed!🎈🎈🎈")
        .setDescription("\u200B\nInputted data is invalid.");
      msg.channel.send(MessageEmbed);
    } else {
      db.Birthday.findByPk(str[1])
        .then((birthday) => {
          // Check if record exists in db
          console.log(birthday);
          if (birthday == null) {
            throw new Error("Birthday not found!");
          } else {
            return birthday.update({
              name: str[2],
              birthdate: str[3],
              timezone: parseInt(str[4]),
            });
          }
        })
        .then(() => {
          MessageEmbed = new Discord.MessageEmbed()
            .setColor("#20B2AA")
            .setTitle("Update existing birthday success!🎈🎈🎈\n\u200B")
            .addFields(
              {
                name: "▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄",
                value: "\n\u200B",
              },
              { name: "Birthday Detail", value: "\n\u200B" },
              { name: "Name:", value: str[2] },
              { name: "Birth Date:", value: str[3] },
              { name: "Time Zone:", value: str[4] },
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
            .setTitle("Edit birthday failed!🎈🎈🎈")
            .setDescription("\u200B\n "+err);
          msg.channel.send(MessageEmbed);
        });
    }
  },
};
