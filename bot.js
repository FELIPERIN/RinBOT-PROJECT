const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "Rin!";

message1 = 'Olá!';
message2 = 'Tchau!';
message3 = 'Como você está?';

client.on('ready', () => {
    console.log('Pronto para o serviço.');
  }); 

client.on ('message' , (message)=>{//Evento
        if(!message.content.startsWith(prefix) || message.author.bot) return ;//author.bot  = se o autor da mensagem for um bot 
        //O resto do codigo
        if(message.content.startsWith(prefix + "avatar")){
            (message.reply(message.author.avatarURL))//Avatar do autor
        }
        if(message.content.startsWith(prefix + 'ping')){
            (message.channel.send('Pong! Seu ping é `' + `${Date.now() - message.createdTimestamp}` + ' ms`'))//comando para latencia do bot
        }
        if (message.content.startsWith(prefix + "criador")){
            (message.channel.send()('FELIPERIN#0001'))
        }
        if(message.content.startsWith("bom dia")){
          (message.reply('Bom dia'))
        }

})

client.login(process.env.BOT_TOKEN);
