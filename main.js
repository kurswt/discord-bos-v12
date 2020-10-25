const Discord = require("discord.js")     //serendia
const client = new Discord.Client();       //serendia
const config = require("./config.js")    //serendia
const fs = require("fs");                //serendia
require('./util/Loader.js')(client);     //serendia

client.commands = new Discord.Collection(); //serendia
client.aliases = new Discord.Collection();  //serendia
fs.readdir('./commands/', (err, files) => { //serend,a
  if (err) console.error(err);               //serendia
  console.log(`${files.length} komut yüklenecek.`); //serend,a
  files.forEach(f => {                       //serendia
    let props = require(`./commands/${f}`);   //serendia
    console.log(`${props.config.name} komutu yüklendi.`);  //serendia
    console.log(`Piece <3 Serendia Squad`)     //serendia
    client.commands.set(props.config.name, props); //serendia
    props.config.aliases.forEach(alias => {          //serendia
      client.aliases.set(alias, props.config.name);  //serendia
    });
  });
})

client.login(config.token)
