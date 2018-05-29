const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "Rin!"/"rin!"

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
        if(message.content.startsWith(prefix + "invite")){
          ((message.channel.send("Aqui está o convite:
          https://discordapp.com/api/oauth2/authorize?client_id=450781044455637022&permissions=201706560&scope=bot"))
        }


          
      
        
})


client.login(process.env.BOT_TOKEN);
