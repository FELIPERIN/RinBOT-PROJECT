const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "Rin!"

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
            (message.channel.send('FELIPERIN#0001'))
        }
        if(message.content.startsWith(prefix + "invite")){
            (message.channel.send('https://discordapp.com/api/oauth2/authorize?client_id=450781044455637022&permissions=201706560&scope=bot'))
        }
        if(message.content.startsWith(prefix + "help")){
            (message.channel.send({embed: {
                color: 3447003,
                author: {
                  name: client.user.username,
                  icon_url: client.user.avatarURL
                },
                title: "Ajuda",
                description: "Olá, meu nome é **Rin**, eu sou um bot programado por FELIPERIN#0001.",
                fields: [{
                    name: "Comandos",
                    value: "Atualmente meu únicos comandos são: **Rin!help**; **Rin!avatar**; **Rin!ping**; **Rin!criador**; **Rin!invite**."
                  },
                  {
                    name: "Desenvolvimento",
                    value: "Ainda estou em fase de início de desenvolvimento, tenho certeza que meu criador está trabalhando muito para trazer novas funcionalidade para mim, espere por novas funcionalidades futuramente."
                  }
                ],
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.avatarURL,
                  text: "FELIPERIN#0001"
                }
              }
            }))
client.on('message', message => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!message.guild) return;
  
    if (message.content === prefix + '/join'){
      // Only try to join the sender's voice channel if they are in one themselves
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => { // Connection is an instance of VoiceConnection
            message.reply('Canal de voz conectado!');
          })
          .catch(console.log);
      } else {
        message.reply('Você precisa conectar em algum canal de voz antes!');
      }
    }
  })            
        }  


          
      
        
})


client.login(process.env.BOT_TOKEN);
