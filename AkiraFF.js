const Discord = require("discord.js");
const client = new Discord.Client({
  intents: [131071]
});

client.config = require("./config.json");


client.on("ready", () => {
  console.log(`El bot esta listo como ${client.user.tag} `);
});

client.login(client.config.token).then ( () => {
  client.user.setActivity("ver tus dms");
}).catch((err) => console.log(err));


client.on("messageCreate", (message) => {
  if (message.content.startsWith("!hi")) {
    message.channel.send("Hola que tal!");
  } else if (message.content.startsWith("!bye")) {
    message.channel.send("Hasta luego!")
  } else if (message.content.startsWith("!link")) {
    message.channel.send("Aquí tienes el link del server <3 https://discord.gg/mwQVuG4D47")
  } else if (message.content.startsWith("!***")) {
    message.channel.send("Algo fue mal, comprueba que escribiste bien el comando!")
  } else if (message.content.startsWith("!***")) {
    message.channel.send("Algo fue mal, comprueba que escribiste bien el comando!")
  } ;
  });

client.login("MTA3Njk3ODc0OTI4OTAwOTI3Mg.GaQGI2.S4BULFuAt666UD9vPnxQC6ZsdjQWXkq-mTBaz8");

