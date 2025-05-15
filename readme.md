# 🤖 Bot Base para Discord

> Estrutura modular para bots com comandos de **prefixo** e **slash**, ideal para iniciar seu projeto.

---

## ⚙️ Instalação

1. Clone ou extraia o projeto.
2. Instale as dependências:

```bash
npm install
```

3. Configure o arquivo `config.json`:

```json
{
  "token": "SEU_TOKEN_DO_BOT",
  "prefixes": ["!.", "?"]
}
```

> 🔁 O bot aceita **múltiplos prefixos**. Use quantos quiser!

4. Inicie o bot:

```bash
node index.js
```

---

## 📁 Estrutura do Projeto

```
Commands/
├── prefix/              # Comandos com prefixo (!.comando, ?comando, etc)
│   └── exemple/         # Exemplos de comandos prefixados
├── slash/               # Comandos slash (/comando)
│   └── exemple/         # Exemplos de comandos slash
Events/
├── Client/              # Eventos como "ready" e "messageCreate"
└── Interactions/        # Eventos para interações (comandos slash)
Handlers/
├── commandHandler.js    # Carrega comandos slash
├── eventHandler.js      # Carrega eventos
└── prefixHandler.js     # Executa comandos com prefixo
```

---

## 💡 Como Funciona?

- O bot usa **handlers automáticos** para carregar comandos e eventos.
- Os comandos são separados em:
  - **Slash commands** (`/comando`) — modernos e integrados à interface do Discord.
  - **Prefix commands** (`!.comando`, `?comando`) — baseados em mensagens.

---

## 🧪 Exemplos

As pastas `Commands/prefix/exemple/` e `Commands/slash/exemple/` contêm **exemplos** para uso e testes. Você pode:
- Copiar um exemplo e modificar
- Criar seus próprios comandos seguindo o mesmo padrão
- Remover os exemplos se desejar

---

## 🛠️ Criando Comandos

### 📘 Slash Command (em `Commands/slash/`):

```js
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Responde com pong!'),
  async execute(interaction) {
    await interaction.reply('🏓 Pong!');
  },
};
```

### 📗 Prefix Command (em `Commands/prefix/`):

```js
module.exports = {
  name: 'ping',
  async execute(message, args) {
    message.reply('🏓 Pong!');
  },
};
```

---

## 📌 Observações

- O sistema está pronto para expansão com novos comandos e eventos.
- Os comandos slash são registrados automaticamente quando o bot inicia.
- Os prefixos são definidos em `config.json`.

---

## 📄 Licença

Este projeto é livre para uso, modificação e aprendizado.
