module.exports = {
  name: "~help",
  description: "Get Help!",
  execute(msg, args, db, Discord) {
    const MessageEmbed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("About B Day Popper 🎈🎈🎈")
      .setDescription(
        "Birthday Bot for discord with active celebration according to timezone."
      )
      .addFields(
        { name: "\u200B", value: "▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄" },
        { name: "Command List ⚙", value: "All B Day Popper command list" },
        { name: "~help", value: "View all command list.\n\u200B" },
        {
          name: "~add [Name] [YYYY-MM-DD] [TimeZone]",
          value: "Add new birth date, ex: ~add John 2000-10-10 +8. \n\u200B",
        },
        {
          name: "~edit [Name] [YYYY-MM-DD] [TimeZone]",
          value:
            "Update added person birth date, ex: ~edit John 2000-10-10 +8.\n\u200B",
        },
        {
          name: "~delete [Name]",
          value: "Delete added person birth date, ex: ~delete John.\n\u200B",
        },
        { name: "~celebrate", value: "Get all server birthday list!" },
        { name: "▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀", value: "\u200B" },
        { name: "More commands to be added!", value: "....." }
      );

    msg.channel.send(MessageEmbed);
  },
};
