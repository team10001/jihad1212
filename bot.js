const Discord = require('discord.js');

const client = new Discord.Client();

const fs = require("fs");

const Canvas = require("canvas");

const jimp = require("jimp");

const moment = require("moment")

const prefix = '+';

client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`);

  console.log('')

  console.log('')

  console.log('╔[═════════════════════════════════════════════════════════════════]╗')

  console.log(`[Start] ${new Date()}`);

  console.log('╚[═════════════════════════════════════════════════════════════════]╝')

  console.log('')

  console.log('╔[════════════════════════════════════]╗');

  console.log(`Logged in as * [ " ${client.user.username} " ]`);

  console.log('')

  console.log('Informations :')

  console.log('')

  console.log(`servers! [ " ${client.guilds.size} " ]`);

  console.log(`Users! [ " ${client.users.size} " ]`);

  console.log(`channels! [ " ${client.channels.size} " ]`);

  console.log('╚[════════════════════════════════════]╝')

  console.log('')
  console.log('╔[════════════]╗')

  console.log(' Bot Is Online')

  console.log('╚[════════════]╝')

  console.log('')

  console.log('')

});

 KiNg66S.on('message', function(KiNg66S) {
if (KiNg66S.author.bot) return;
if (KiNg66S.author.id === KiNg66S.user.id) return;
if (KiNg66S.author.equals(KiNg66S.user)) return;
if (!KiNg66S.content.startsWith(prefix)) return;

var args = KiNg66S.content.substring(prefix.length).split(' ');
switch (args[0].toLocaleLowerCase()) {
case "مسح" :
KiNg66S.delete()
if(!KiNg66S.channel.guild) return
if(KiNg66S.member.hasPermissions(0x2000)){ if (!args[1]) {
KiNg66S.channel.fetchMessages()
.then(messages => {
KiNg66S.channel.bulkDelete(messages);
var messagesDeleted = messages.array().length;
KiNg66S.channel.sendMessage(' '+ " " + messagesDeleted + " " +  '**: عدد الرسائل التي تم مسحه**').then(m => m.delete(2500));
})
} else {
let messagecount = parseInt(args[1]);
KiNg66S.channel.fetchMessages({limit: messagecount}).then(messages => KiNg66S.channel.bulkDelete(messages));
KiNg66S.channel.sendMessage(' '+ " " + args[1] + " " +  '**: عدد الرسائل التي تم مسحه**').then(m => m.delete(2500));
KiNg66S.delete(60000);
}
} else {
var manage = new Discord.RichEmbed()
.setDescription('You Do Not Have Permission MANAGE_MESSAGES :(')
.setColor("RANDOM")
KiNg66S.channel.sendEmbed(manage)
return;
}
}
});

client.login(process.env.BOT_TOKEN);
