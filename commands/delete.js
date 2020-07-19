module.exports = {
  name: "~delete",
  description: "Delete existing birthday!",
  execute(msg, args, db, Discord) {
    let MessageEmbed;
    let err = false;
    let str = msg.content.split(" ");

    if (str.length != 2) {
      err = true;
    } else if (!parseInt(str[1])) {
      err = true;
    }

    if (err) {
      MessageEmbed = new Discord.MessageEmbed()
        .setColor("#F93753")
        .setTitle("Delete existing birthday failed!🎈🎈🎈")
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
            return birthday.destroy({
              where: {
                id: str[1],
              },
            });
          }
        })
        .then(() => {
          MessageEmbed = new Discord.MessageEmbed()
            .setColor("#20B2AA")
            .setTitle("Delete existing birthday success!🎈🎈🎈\n\u200B");
          msg.channel.send(MessageEmbed);
        })
        .catch((err) => {
          MessageEmbed = new Discord.MessageEmbed()
            .setColor("#F93753")
            .setTitle("Delete birthday failed!🎈🎈🎈")
            .setDescription("\u200B\n " + err);
          msg.channel.send(MessageEmbed);
        });
    }
  },
};
