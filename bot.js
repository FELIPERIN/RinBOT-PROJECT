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
            (message.channel.send('Pong! Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`'))//comando para latencia do bot
        }
        if (message.content.startsWith(prefix + "criador")){
            (message.reply('FELIPERIN#0001'))
        }
        
})

client.login(process.env.NDUwNzgxMDQ0NDU1NjM3MDIy.De4sSA.vMzAfukm7ZlduEzLJOHdM50bonA);
