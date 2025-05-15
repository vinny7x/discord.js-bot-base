const Discord = require("discord.js");
require("colors");

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    function atualizarStatus() {
      client.user.setPresence({
        status: "online",
        activities: [
          {
            name: "Tou on :)",
            type: Discord.ActivityType.Custom,
            state: frase,
          },
        ],
      });
    }

    atualizarStatus();

    setInterval(atualizarStatus, 20 * 60 * 1000);

    console.log(`[ONLINE]`.green + ` ${client.user.tag} está online!`);
  },
};
