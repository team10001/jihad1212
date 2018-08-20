const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+'

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

const dot = new Discord.Client();
client.on('message', message => {
    
    if (message.content === "emoji") {
        setInterval(function(){
        message.edit('😂') 
        message.edit('🙉')   
        message.edit('🔥')
        message.edit('😠')
        message.edit('🔥 🌶')
        message.edit('🙃')
        message.edit('☠')
        message.edit('✨')
        message.edit('😐')
        message.edit('😍')
        message.edit('❤')
        message.edit('👌:skin-tone-2:')
        message.edit('🌚')
        message.edit('🌹')
        message.edit('😒')
        message.edit('🐸')
        message.edit('🍉')
        message.edit('🚨')
        message.edit('😱')
        message.edit('😡')        
        message.edit('🤑')
        message.edit('😖')
        message.edit('😚')
        message.edit('🕊')
        message.edit('☄')
           message.edit('🐶')
        message.edit('🚜')    
        message.edit('🍫')
        message.edit('👇:skin-tone-2:')
        message.edit('🕹')
        message.edit('🌌 ')
        message.edit('💋 ')
           message.edit('🤸')
        message.edit('🙍:skin-tone-2:')    
        message.edit('😦')
        message.edit('👈:skin-tone-2:')
        message.edit('💓')
        message.edit('☺')
        message.edit('💗')
        message.edit('🌸')


        
        
        }, 1000)
    }

client.login(process.env.BOT_TOKEN);
