const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");
const {
  loadEvents
} = require("./Handlers/eventHandler");
const {
  loadCommands
} = require("./Handlers/commandHandler");
const colors = require('colors');
const {
  loadPrefix
} = require("./Handlers/prefixHandler");
const client = new Client({
  intents: [
  	GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildPresences,
    ],
  partials: [Object.keys(Partials)],
});


client.config = require("./config.json");
client.commands = new Collection();
client.prefix = new Collection();

module.exports = client;
    client.login(client.config.token).then(() => {
  loadEvents(client);
  loadCommands(client);
  loadPrefix();
});



process.on('unhandledRejection', (error) => {
  console.log(colors.red.bold('Erro de Rejeição Não Tratada:'), colors.red(error));
});

process.on('uncaughtException', (error, origin) => {
  console.log(colors.red.bold('Erro Não Capturado:'), colors.red(error));
  console.log(colors.yellow.bold('Origem do Erro:'), colors.yellow(origin));
});


