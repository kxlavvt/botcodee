// Importa la biblioteca Discord.js
const Discord = require('discord.js');

// Crea un cliente de Discord
const client = new Discord.Client();

// Define el prefijo de los comandos
const prefix = '!';

// Escucha el evento "message"
client.on('message', message => {
  // Si el mensaje no comienza con el prefijo o fue enviado por el bot, ignóralo
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  // Separa el comando y los argumentos
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  // Si el comando es "ping", responde con "pong"
  if (command === 'ping') {
    message.channel.send('pong');
  }
});

// Inicia sesión en Discord con tu token de bot
client.login('TMTA3Njk3ODc0OTI4OTAwOTI3Mg.GgPFmV.SVOQErmlY1MJh6UqMjmvtoKbW0UuJOmpCN23X8');
