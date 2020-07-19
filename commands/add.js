module.exports = {
  name: "~add",
  description: "Add new birthday!",
  execute(msg, args, db, Discord) {
    let MessageEmbed;

    MessageEmbed = new Discord.MessageEmbed()
      .setColor("#20B2AA")
      .setTitle("Insert new birthday success!🎈🎈🎈\n\u200B")
      .addFields(
        { name: "▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄", value: "\n\u200B" },
        { name: "Birthday Detail", value: "\n\u200B" },
        { name: "Name:", value: "..." },
        { name: "Birth Date:", value: "..." },
        { name: "Time Zone:", value: "..." },
        {
          name: "\u200B",
          value: "▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\n\u200B",
        }
      );

    msg.channel.send(MessageEmbed);
  },
};
