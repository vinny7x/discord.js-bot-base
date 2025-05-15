const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("exemplo")
    .setDescription("Comando de exemplo"),

  async execute(interaction, client) {
    
    await interaction.reply({
      content: "> Este é um comando de exemplo usando slash.",
    });
  }
}