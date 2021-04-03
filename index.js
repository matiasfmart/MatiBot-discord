const Discord = require('discord.js');
const cron = require("node-cron");
const client = new Discord.Client();


client.on('ready', () =>{
    console.log(`bot is ready ${client.user.tag}`);
})

client.on('message', message => {
    console.log(message.content);
    if (message.content == 'ping'){
        message.reply('pong');
    }
    
    if (message.content == 'sale'){
        message.channel.send(`${message.author}Sale! busquemos un juego para todos y avisa a los demas`);
    }
    if (message.content.includes('!bot')){
        message.reply('Que onda');
    }
    if (message.content.includes('!quien')){
        message.reply('@everyone quien para jugar a algo :sunglasses:');
    }
    
})

client.login('ODI2NDY3Mzc5MTU2MDkwOTQw.YGM5ug.t9kY4GUP7L1l12WTpb4st7q2b08');