module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    if (interaction.isChatInputCommand()) {
      const command = client.commands.get(interaction.commandName);
      if (!command) {
        return interaction.reply(
          `:x: | Comando não encontrado, talvez ele tenha sido excluído!`
        );
      }
      command.execute(interaction, client);
    } else if (interaction.isAutocomplete()) {
      let commands = await client.commands.get(interaction.commandName);
      await commands.autocomplete(interaction, client);
    }
  },
};
