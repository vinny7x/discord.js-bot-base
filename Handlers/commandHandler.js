function loadCommands(client) {
	const fs = require("fs");
	require("colors");

	let commandsArray = [];

	const commandsFolder = fs.readdirSync("./Commands/slash"); // Alteração aqui para ir até a pasta 'slash'
	for (const folder of commandsFolder) {
		const folderPath = `./Commands/slash/${folder}`;
		

		const commandFiles = fs
			.readdirSync(folderPath)
			.filter((file) => file.endsWith(".js"));

		for (const file of commandFiles) {
			const commandFile = require(`../Commands/slash/${folder}/${file}`);

			const properties = {
				folder,
				...commandFile
			};
			client.commands.set(commandFile.data.name, properties);

			commandsArray.push(commandFile.data.toJSON());

		}
	}
	
	client.application.commands.set(commandsArray);
	return console.log("[+]".green + " Comandos carregados (SLASH)");
}

module.exports = {
	loadCommands
};
