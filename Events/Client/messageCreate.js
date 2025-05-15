const client = require("../../index");
const Discord = require("discord.js");
const config = require("../../config.json");
client.on("messageCreate", async (message) => {
  if (message.author.bot) return; // Evite responder a mensagens de outros bots

  if (
    message.guild === null &&
    message.content.includes(client.user.toString())
  ) {
    return message.reply(
      `:x: **${message.author.displayName}** Desculpe, não posso responder às menções em mensagens diretas.`,
    );
  }

  const prefixes = config.prefixes;
  const botMentions = [`<@!${client.user.id}>`, `<@${client.user.id}>`];

  let prefixUsed = null;

  prefixUsed = prefixes.find((prefix) => message.content.startsWith(prefix));

  // Se a mensagem não começar com um prefixo, verifica se é uma menção direta ao bot
  if (!prefixUsed) {
    prefixUsed = botMentions.find((mention) =>
      message.content.startsWith(mention),
    );
  }

  if (!prefixUsed) return;

  // Verifique se a mensagem foi enviada em uma guild (servidor)
  if (!message.guild) {
    return message.reply(
      `:x: **${message.author.displayName}** Desculpe, não é possível usar comandos em mensagens diretas.`,
    );
  }

  const args = message.content.slice(prefixUsed.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
  const cmd =
    client.prefix.get(commandName) ||
    client.prefix.find(
      (als) => als.aliases && als.aliases.includes(commandName),
    );
  if (cmd) {
    await cmd.run(client, message, args);
  }

  // Verifique se o bot tem permissão para enviar mensagens no canal
  if (
    !message.guild.members.me.permissionsIn(message.channel).has("SendMessages")
  ) {
    return;
  }
  if (
    !message.guild.members.me.permissionsIn(message.channel).has("EmbedLinks")
  ) {
    return;
  }
  if (
  message.content === `<@${client.user.id}>` ||
  message.content === `<@!${client.user.id}>`
) {
  const embed = new Discord.EmbedBuilder()
    .setTitle(`👋 Olá!`)
    .setColor("#00bfff")
    .setDescription(`👋 Olá :)!`);

  message.reply({ embeds: [embed] });
}
});
