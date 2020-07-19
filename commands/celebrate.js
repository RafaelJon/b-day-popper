module.exports = {
  name: "~celebrate",
  description: "Get all birthday list!",
  execute(msg, args, db, Discord) {
    db.Birthday.findAll().then((birthday) => {
      let MessageEmbed = new Discord.MessageEmbed()
        .setColor("#20B2AA")
        .setTitle("Birthday List!🎈🎈🎈")
        .addField(
          "\n\u200B",
          "▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄"
        );
      birthday.forEach((bday) => {
        let date = new Date(bday.dataValues.birthdate).getDate();
        let month = new Date(bday.dataValues.birthdate).getMonth();
        let year = new Date(bday.dataValues.birthdate).getFullYear();
        const monthNames = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];

        MessageEmbed.addField(
          "ID: " + bday.dataValues.id + ", " + bday.dataValues.name,
          "Birth Date: " +
            date +
            ", " +
            monthNames[month] +
            " " +
            year +
            " - Time Zone : " +
            bday.dataValues.timezone
        );
      });
      msg.channel.send(MessageEmbed);
    });
  },
};
