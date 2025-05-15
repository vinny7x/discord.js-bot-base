const Discord = require("discord.js");

module.exports = {
  name: "p",
  aliases: ["painel"],
  run: async (client, message, args) => {
    await message.rely({
      content: "> Este é um comando de exemplo usando prefixo.",
    });
  },
};
