const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
  console.log(`Zalogowano jako ${client.user.tag}`);
});

// Zaloguj bota tokenem z .env
client.login(process.env.BOT_TOKEN);