const Discord = require("discord.js");
const client = new Discord.Client();
const dateFormat = require('dateformat');
const convert = require("hh-mm-ss")
const fs = require('fs');
const moment = require('moment');
const prefix = "&";


//╭━━━╮╱╱╭╮╱╭╮
//┃╭━╮┃╱╱┃┃╱┃┃
//┃╰━╯┣╮╭┫╰━┫┃╭┳━━╮
//┃╭━━┫┃┃┃╭╮┃┃┣┫╭━╯
//┃┃╱╱┃╰╯┃╰╯┃╰┫┃╰━╮
//╰╯╱╱╰━━┻━━┻━┻┻━━╯

 
client.on('message', message => {

if (message.content.startsWith ("&id")) {
  
  if(!message.channel.guild) return;
  
  let args = message.content.split(' ').slice(1).join(' ');
  
 let defineduser = '';
 if (!args[1]) { // If they didn't define anyone, set it to their own.
 defineduser = message.author;
 } else { // Run this if they did define someone...
 let firstMentioned = message.mentions.users.first();
 defineduser = firstMentioned;
 }
  
 const w = ['./ id6.png','./id2.png','./id3.png','./id41.png','./id5.png'];
 var Canvas = require('canvas')
  var jimp = require('jimp')
  
  const millis = new Date().getTime() - defineduser.createdAt.getTime();
  const now = new Date();
  dateFormat(now, 'dddd, mmmm dS, yyyy');
  const stats2 = ['online', 'Low', 'Medium', 'Insane'];
  const days = millis / 1000 / 60 / 60 / 24;
   dateFormat(now, 'dddd, mmmm dS, yyyy');
   let time = `${dateFormat(defineduser.createdAt)}`
   var heg;
   if(men) {
   heg = men
   } else {
   heg = message.author
   }
  var mentionned = message.mentions.members.first();
var h;
   if(mentionned) {
   h = mentionned
   } else {
   h = message.member
   }
 let Image = Canvas.Image,
 canvas = new Canvas(300, 300),
 ctx = canvas.getContext('2d');
 ctx.patternQuality = 'bilinear';
 ctx.filter = 'bilinear';
 ctx.antialias = 'subpixel';
   
 fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
 if (err) return console.log(err);
 let BG = Canvas.Image;
 let ground = new Image;
 ground.src = Background;
 ctx.drawImage(ground, 0, 0, 300, 300);
  
  })
var mentionned = message.mentions.users.first();
  
 var client;
   if(mentionned){
   var client = mentionned;
   } else {
   var client = message.author;
   
   }
  
  var men = message.mentions.users.first();
 var heg;
 if(men) {
 heg = men
 } else {
 heg = message.author
 }
 let url = defineduser.displayAvatarURL.endsWith(".webp") ? defineduser.displayAvatarURL.slice(20, 20) + ".png" : defineduser.displayAvatarURL;
 jimp.read(url, (err, ava) => {
 if (err) return console.log(err);
 ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
 if (err) return console.log(err);
  
 let Avatar = Canvas.Image;
 let ava = new Avatar;
 ava.src = buf;
 ctx.drawImage(ava, 112 , 40, 75, 75);
 
 
 
 
 var status;
 if (defineduser.presence.status === 'online') {
 status = 'ONLINE';
  ctx.fillStyle = `#2ce032`;
  ctx.beginPath();
  ctx.arc(179, 107, 10, 0, Math.PI*2, true); 
  ctx.closePath();
  ctx.fill();
   
 } else if (defineduser.presence.status === 'dnd') {
 status = 'DND';
 ctx.fillStyle = `#ff0000`;
  ctx.beginPath();
  ctx.arc(179, 107, 8, 0, Math.PI*2, true); 
  ctx.closePath();
  ctx.fill();
 } else if (defineduser.presence.status === 'idle') {
 status = 'IDLE';
 ctx.fillStyle = `#f4d32e`;
  ctx.beginPath();
  ctx.arc(179, 107, 10, 0, Math.PI*2, true); 
  ctx.closePath();
  ctx.fill();
 } else if (defineduser.presence.status === 'offline') {
 status = 'INVISIABLE';
 ctx.fillStyle = `#898988`;
  ctx.beginPath();
  ctx.arc(179, 107, 10, 0, Math.PI*2, true); 
  ctx.closePath();
  ctx.fill();
 }
 
 
   var time2;
   if(mentionned){
   var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;
   } else {
   var time2 = `${dateFormat(message.member.joinedAt)}`;
   
   }  

 
 ctx.font = 'Bold 15px Arial ';
 ctx.fontSize = '15px';
 ctx.fillStyle = "#ffffff";
 ctx.textAlign = "center";
 ctx.fillText(status, 70 , 108 );
 
  ctx.font = 'Bold 13px Arial';
 ctx.fontSize = '13px';
 ctx.fillStyle = "#ffffff";
 ctx.textAlign = "center";
 ctx.fillText(`${message.author.presence.game === null ? "No Status" : message.author.presence.game.name}`, 150.00   , 180  );
  

 ctx.font = 'Bold 20px Arial ';
 ctx.fontSize = '15px';
 ctx.fillStyle = "#ffffff";
 ctx.textAlign = "center";
 ctx.fillText(`${defineduser.username}`, 150.50 , 140);
  
  
 ctx.font = 'Bold 15px Arial';
 ctx.fontSize = '15px';
 ctx.fillStyle = "#ffffff";
 ctx.textAlign = "center";
 ctx.fillText(`#${defineduser.discriminator}`, 227  , 108);
  
 var time2;
   if(mentionned){
   var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;
   } else {
   var time2 = `${dateFormat(message.member.joinedAt)}`;
   
   }

 //wl
 ctx.font = 'Bold 13px Arial ';
 ctx.fontSize = '13px';
 ctx.fillStyle = "#ffffff";
 ctx.textAlign = "center";
 ctx.fillText(`${moment(defineduser.createdTimestamp).fromNow()}`, 179 , 226 );
 
 
  

 //wl
 ctx.font = 'Bold 13px Arial ';
 ctx.fontSize = '13px';
 ctx.fillStyle = "#ffffff";
 ctx.textAlign = "center";
 ctx.fillText(`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}`, 179 , 253);
 
  message.channel.sendFile(canvas.toBuffer())
  
 // when someone calls this command, it also adds 1 earlier at the same, but since this is fetching the previous value, we need to add 1 to the answer, even thought it will be updated
 // seconds after this.
 })
 })
  
  
  
  
  }
  
  })
  
  
  
  client.on('message',message =>{
  var prefix = "&";
  if(message.content.startsWith(prefix + 'top')) {
message.guild.fetchInvites().then(i =>{
var invites = [];
 
i.forEach(inv =>{
  var [invs,i]=[{},null];
   
  if(inv.maxUses){
  invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
  }else{
  invs[inv.code] =+ inv.uses;
  }
  invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
 
});
var embed = new Discord.RichEmbed()
.setColor("#000000")
.setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
.setThumbnail("https://i.imgur.com/GnR2unD.png")
 message.channel.send({ embed: embed });
 
});
 
  }
});
  
  client.on('message', message => {
var prefix = '&';
if(message.content.startsWith(prefix + 'roleperms')) {
  var msg = message.content.toLowerCase();
var role2 = msg.split(' ').slice(1).join(" ").toLowerCase(); 
var role1 = message.guild.roles.filter(r=>r.name.toLowerCase().indexOf(role2)>-1 ).first(); 
 if(role1.hasPermissions('ADMINISTRATOR')) {
 var permadmin = ":white_check_mark:"
 } else {
 var permadmin=":x:"
 }
  if(role1.hasPermissions('VIEW_AUDIT_LOG')) {
 var permlog = ":white_check_mark:"
 } else {
 var permlog=":x:"
 }
  if(role1.hasPermissions('MANAGE_GUILD')) {
 var permserver = ":white_check_mark:"
 } else {
 var permserver=":x:"
 }
  if(role1.hasPermissions('MANAGE_ROLES')) {
 var permroles = ":white_check_mark:"
 } else {
 var permroles=":x:"
 }
  if(role1.hasPermissions('MANAGE_CHANNELS')) {
 var permchannel = ":white_check_mark:"
 } else {
 var permchannel=":x:"
 }
  if(role1.hasPermissions('KICK_MEMBERS')) {
 var permkick = ":white_check_mark:"
 } else {
 var permkick=":x:"
 }
  if(role1.hasPermissions('BAN_MEMBERS')) {
 var permban = ":white_check_mark:"
 } else {
 var permban=":x:"
 }
  if(role1.hasPermissions('CREATE_INSTANT_INVITE')) {
 var perminvites = ":white_check_mark:"
 } else {
 var perminvites=":x:"
 }
  if(role1.hasPermissions('CHANGE_NICKNAME')) {
 var permnick = ":white_check_mark:"
 } else {
 var permnick=":x:"
 }
  if(role1.hasPermissions('MANAGE_NICKNAMES')) {
 var permmanagenick = ":white_check_mark:"
 } else {
 var permmanagenick=":x:"
 }
   if(role1.hasPermissions('MANAGE_EMOJIS')) {
 var permemojis = ":white_check_mark:"
 } else {
 var permemojis=":x:"
 }
   if(role1.hasPermissions('MANAGE_WEBHOOKS')) {
 var permhook = ":white_check_mark:"
 } else {
 var permhook=":x:"
 }
   if(role1.hasPermissions('SEND_MESSAGES')) {
 var permmessage = ":white_check_mark:"
 } else {
 var permmessage=":x:"
 }
   if(role1.hasPermissions('SEND_TTS_MESSAGES')) {
 var permtts = ":white_check_mark:"
 } else {
 var permtts=":x:"
 }
   if(role1.hasPermissions('MANAGE_MESSAGES')) {
 var permmanagemessages = ":white_check_mark:"
 } else {
 var permmanagemessages=":x:"
 }
   if(role1.hasPermissions('EMBED_LINKS')) {
 var permembed = ":white_check_mark:"
 } else {
 var permembed=":x:"
 }
   if(role1.hasPermissions('ATTACH_FILES')) {
 var permattach = ":white_check_mark:"
 } else {
 var permattach=":x:"
 }
   if(role1.hasPermissions('MENTION_EVERYONE')) {
 var permmention = ":white_check_mark:"
 } else {
 var permmention=":x:"
 }
if(role1.hasPermissions('USE_EXTERNAL_EMOJIS')) {
 var permuseemojis = ":white_check_mark:"
 } else {
 var permuseemojis=":x:"
 }
if(role1.hasPermissions('ADD_REACTIONS')) {
 var permreact = ":white_check_mark:"
 } else {
 var permreact=":x:"
 }
if(role1.hasPermissions('CONNECT')) {
 var permconnect = ":white_check_mark:"
 } else {
 var permconnect=":x:"
 }
if(role1.hasPermissions('SPEAK')) {
 var permspeak = ":white_check_mark:"
 } else {
 var permspeak=":x:"
 }
  if(role1.hasPermissions('MUTE_MEMBERS')) {
 var permmute = ":white_check_mark:"
 } else {
 var permmute=":x:"
 }
  if(role1.hasPermissions('DEAFEN_MEMBERS')) {
 var permdeafen = ":white_check_mark:"
 } else {
 var permdeafen=":x:"
 }
  if(role1.hasPermissions('MOVE_MEMBERS')) {
 var permmove = ":white_check_mark:"
 } else {
 var permmove=":x:"
 }
 let nat = new Discord.RichEmbed()
 .addField('ADMINISTRATOR',permadmin, true)
 .addField('VIEW_AUDIT_LOG',permlog, true)
 .addField('MANAGE_SERVER',permserver, true)
 .addField('MANAGE_ROLES',permroles, true)
 .addField('MANAGE_CHANNELS',permchannel, true)
 .addField('KICK_MEMBERS',permkick, true)
 .addField('BAN_MEMBERS',permban, true)
 .addField('CREATE_INSTANT_INVITE',perminvites, true)
 .addField('CHANGE_NICKNAME',permnick, true)
 .addField('MANAGE_NICKNAMES',permmanagenick, true)
 .addField('MANAGE_EMOJIS',permemojis, true)
 .addField('MANAGE_WEBHOOKS',permhook, true)
 .addField('SEND_MESSAGES',permmessage, true)
 .addField('SEND_TTS_MESSAGES',permtts, true)
 .addField('MANAGE_MESSAGES',permmanagemessages, true)
 .addField('EMBED_LINKS',permembed, true)
 .addField('ATTACH_FILES',permattach, true)
 .addField('MENTION_EVERYONE',permmention, true)
 .addField('USE_EXTERNAL_EMOJIS',permuseemojis, true)
 .addField('ADD_REACTIONS',permreact, true)
 .addField('CONNECT',permconnect, true)
 .addField('SPEAK',permspeak, true)
 .addField('MUTE_MEMBERS',permmute, true)
 .addField('DEAFEN_MEMBERS',permdeafen, true)
 .addField('MOVE_MEMBERS',permmove, true)
 message.channel.send(nat)
}
  });
  
  
 
client.on("message", async message => {
  if(!message.channel.guild) return;
  var prefix = "&";
  if(message.content.startsWith(prefix + 'invites')) {
  var nul = 0
  var guild = message.guild
  await guild.fetchInvites()
  .then(invites => {
   invites.forEach(invite => {
  if (invite.inviter === message.author) {
   nul+=invite.uses
  }
  });
  });
if (nul > 0) {
console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
var embed = new Discord.RichEmbed()
.setColor("#000000")
  .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
message.channel.send({ embed: embed });
return;
  } else {
 var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)
  
 message.channel.send({ embed: embed });
  return;
  }
  }
  if(message.content.startsWith(prefix + 'invite-codes')) {
  let guild = message.guild
  var codes = [""]
  message.channel.send(":postbox: **لقد قمت بأرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص**")
  guild.fetchInvites()
  .then(invites => {
  invites.forEach(invite => {
  if (invite.inviter === message.author) {
  codes.push(`discord.gg/${invite.code}`)
  }
  })
  }).then(m => {
  if (codes.length < 0) {
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
  message.author.send({ embed: embed });
  return;
  } else {
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
  message.author.send({ embed: embed });
  return;
  }
  })
  }
  
  });
  
  
  client.on('message', message => {
  if(!message.channel.guild) return;
  var prefix = "&";
  if(message.content.startsWith(prefix + 'channel')) {
  let channel = message.channel
  var embed = new Discord.RichEmbed()
.setTitle("Channel Info")
.setColor("#9932CC")
.setDescription(`Info about <#${channel.id}>\nChannel ID: ${channel.id}`)
.addField("Created At", `${channel.createdAt}`)
.addField("Channel Type", `${channel.type}`)
.addField("Extra Information", `Channel is NSFW => ${channel.nsfw}\nChannel Topic=> ${channel.topic}\nChannel Parent => ${channel.parent}\nChannel Position => ${channel.position}`)
   
   message.channel.send({ embed: embed });
}
   
  });
   
  
  client.on("message", async message => {
  if(!message.channel.guild) return;
  var prefix = "&";
  if(message.content.startsWith(prefix + 'member')) {
  let guild = await message.guild.fetchMembers()
  let bots = guild.members.filter(m => m.user.bot).size
  let members = guild.memberCount
  let humans = members - bots
  let dndusers = guild.members.filter(member => member.user.presence.status === "dnd")
  let awayusers = guild.members.filter(member => member.user.presence.status === "idle")
  let onlineusers = guild.members.filter(member => member.user.presence.status === "online")
  let offlineusers = guild.members.filter(member => member.user.presence.status === "offline")
  var embed = new Discord.RichEmbed()
.setColor("#000000")
.setTitle("Membercount")
.setDescription("Membercount in " + guild.name)
.addField("Members", `${members}`, true)
.addField("Humans", `${humans}`, true)
.addField("Bots", `${bots}`, true)
.addField("Status Users", `Online Users: ${onlineusers.size}\nDND Users: ${dndusers.size}\nAway Users: ${awayusers.size}\nOffline Users: ${offlineusers.size}\nTotal Members: ${message.guild.memberCount}`, true)
.setThumbnail(message.author.avatarURL)
message.channel.send({ embed: embed });
   
}
   
  });
  
  
  client.on('message', message => {
  var prefix = "&"
if(message.content.startsWith (prefix  + 'mb')) {
if(!message.channel.guild) return;
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(`**:battery: حالة اعضاء السيرفر**
   
  **:green_heart: Online**  **[ ${message.guild.members.filter(m=>m.presence.status == 'online').size} ]**
  **:yellow_heart: Idle**   **[ ${message.guild.members.filter(m=>m.presence.status == 'idle').size} ]**  
  **:heart: DND** **[ ${message.guild.members.filter(m=>m.presence.status == 'dnd').size} ]**
  **:black_heart: Offline** **[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]** `)
   
  message.channel.send()
   
  message.channel.sendEmbed(embed)
  }
  });
  
  client.on("message", async message => {
  if(!message.channel.guild) return;
   var prefix= "&";
  if(message.content.startsWith(prefix + 'server')) {
  let guild = message.guild
  let channel = message.channel
  let guildicon = guild.icon_url
  let members = guild.memberCount
  let bots = guild.members.filter(m => m.user.bot).size
  let humans = members - bots
  let allchannels = guild.channels.size
  let textchannels = guild.channels.filter(e => e.type === "text")
  let voicechannels = guild.channels.filter(e => e.type === "voice")
var embed = new Discord.RichEmbed()
.setColor("#000000")
.setTitle(`معلومات عن السيرفر`)
.setDescription(`معلومات عن : ${guild.name}`)
.addField("صاحب السيرفر :", `${guild.owner}`, true)
.addField("أيدي السيرفر :", `${guild.id}`, true)
.addField("موقع السيرفر :", `${guild.region}`, true)
.addField("مستوى حماية السيرفر :", `${guild.verificationLevel}`, true)
.addField("عدد الرومات الصوتية :", `${voicechannels.size}`, true)
.addField("عدد الرومات الكتابية :", `${textchannels.size}`, true)
.addField("عدد اعضاء السيرفر :", `${members}`, true)
.addField("عدد البوتات :", `${bots}`, true)
.addField("عدد الاشخاص :", `${humans}`, true)
.addField("عدد رتب السيرفر :", `${guild.roles.size}`, true)
.addField(`أيموجيات الخاصة بالسيرفر : (${guild.emojis.size})`, `- ${guild.emojis.array()}`, true)
.setFooter(`تم انشاء هذه السيرفر في: ${guild.createdAt}`)
   
 message.channel.send({ embed: embed });
   
}
  });
  
  client.on('message', message => {
  var prefix = "&"
  if(message.content === prefix + "emojis") {
const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
message.channel.send(emojiList);
  }
});
  
  
client.on("message", message => {
  let args = message.content.split(" ").slice(1);
if (message.content.startsWith('&report')) {
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  let modlog = client.channels.find('name', 'report');
  if (!reason) return message.reply('**ضع سبباً مقنعاً**');
if (message.mentions.users.size < 1) return message.reply('**يجب عليك منشن للعضو المراد الابلاغ عليه**').catch(console.error);
 
  if (!modlog) return message.reply('**لا يوجد روم بأسم report**');
  const embed = new Discord.RichEmbed()
.setColor(0x00AE86)
.setTimestamp()
.addField('نوع الرسالة:', 'Report')
.addField('المراد الابلاغ عليه:', `${user.username}#${user.discriminator} (${user.id}`)
.addField('صاحب الابلاغ:', `${message.author.username}#${message.author.discriminator}`)
.addField('السبب', reason);
message.delete()
return client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
}
});
  
  client.on('message', message => {
if (message.content.startsWith("رابط")) {
  if(!message.guild.member(client.user).hasPermission("CREATE_INSTANT_INVITE")) return message.reply("**I Don't Have `CREATE_INSTANT_INVITE` Permission**").then(msg => msg.delete(6000))
  
message.channel.createInvite({
  thing: true,
  maxUses: 5,
  maxAge: 86400,
}).then(invite =>
  message.author.sendMessage(invite.url)
)
  message.channel.send("**:link: Invite Linke Sent In DM Successfully**")
}
  }); 
  
  client.on('message', message => {
  if (message.content.startsWith("&avatar")) {
  var mentionned = message.mentions.users.first();
  var x5bzm;
if(mentionned){
var x5bzm = mentionned;
} else {
var x5bzm = message.author;
 
}
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setImage(`${x5bzm.avatarURL}`)
message.channel.sendEmbed(embed);
  }
  });
  
  client.on('message', message => {
  if(!message.channel.guild) return;
  if (message.content.startsWith('&ping')) {
  if(!message.channel.guild) return;
  var msg = `${Date.now() - message.createdTimestamp}`
  var api = `${Math.round(client.ping)}`
  if (message.author.bot) return;
  let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username,message.author.avatarURL)
  .setThumbnail('https://media.discordapp.net/attachments/417477494950854656/438706305125974017/maxresdefaul1t.jpg?width=339&height=353')
  .setColor('RANDOM')
  .addField('**Time Taken:**',msg + " ms")
  .addField('**WebSocket:**',api + " ms")
  message.channel.send({embed:embed});
  }
  });
  
  
   
  client.on('message', message => {
  var prefix = "&";
  
if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return;
   
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
   
let args = message.content.split(" ").slice(1);
   
if (command === "say") {
message.delete()
  message.channel.sendMessage(args.join(" ")).catch(console.error);
}
 

   
  if (command == "embed") {
  let say = new Discord.RichEmbed()
  .setDescription(args.join("  "))
  .setColor(0x23b2d6)
  message.channel.sendEmbed(say);
  message.delete();
}
   
   
  });
   
  client.on("message", message => {
  const prefix = "&"
 
if(!message.channel.guild) return;
 if(message.author.bot) return;
if(message.content === prefix + "image"){ 
const embed = new Discord.RichEmbed()
 
.setTitle(`This is  ** ${message.guild.name} **  Photo !`)
.setAuthor(message.author.username, message.guild.iconrURL)
  .setColor(0x164fe3)
  .setImage(message.guild.iconURL)
  .setURL(message.guild.iconrURL)
  .setTimestamp()
   
 message.channel.send({embed});
}
});

  client.on('message', message =>{
  if(message.content == "+roles"){
  var roles = '',
  ros=message.guild.roles.size,
  role = [];
  for(let i =0;i<ros;i++){
  if(message.guild.roles.array()[i].id !== message.guild.id){
role.push(message.guild.roles.filter(r => r.position == ros-i).map(r => `${i}- ${r.name}`));  
  }}
  message.channel.send(role.join("\n"));
  }
  });
  
  
  client.on('message', message => {
  if (message.content === "&rooms") {
  if (message.author.bot) return
if (!message.guild) return;
   
  var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
  .addField(':arrow_down: عدد الرومات. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
   
  .addField(':arrow_down:اسماء الرومات. :heavy_check_mark::',`**[${channels}]**`)
  message.channel.sendEmbed(embed);
  }
  });
   
  
  const HeRo = new Discord.Client();
  client.on('message', message => {
  var prefix = "&";
  
  if (message.content === prefix + "date") {
  if (!message.channel.guild) return message.reply('** This command only for servers **');  
  var currentTime = new Date(),
  Year = currentTime.getFullYear(),
  Month = currentTime.getMonth() + 1,
  Day = currentTime.getDate();
  
  var Date15= new Discord.RichEmbed()
  .setTitle("**「  Date - التاريخ 」 **")
  .setColor('RANDOM')
  .setTimestamp()
  .setDescription( "「"+ Day + "-" + Month + "-" + Year + "」")
  .setFooter(`&help to see all bot commands `, 'https://images-ext-1.discordapp.net/external/x-p4BwGofa_z_p9hpV-4hJPcqWh-aWGQzsmI189cDiY/%3Fwidth%3D344%26height%3D344/https/media.discordapp.net/attachments/372444859329544203/372701184055836682/ass.jpg?width=231&height=231')
   message.channel.sendEmbed(Date15);
  }
  });
  
  
client.on('message', message => {
  var prefix = "&";
  var args = message.content.substring(prefix.length).split(" ");
  if (message.content.startsWith(prefix + "user")) {
message.guild.fetchInvites().then(invs => {
  let member = client.guilds.get(message.guild.id).members.get(message.author.id);
  let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
  let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
  var embed = new Discord.RichEmbed()
  .setColor(0x00A2E8)
  .setThumbnail(message.author.avatarURL)
  .addField("اسمك في السيرفر ", `${message.author.tag} (ID: ${message.author.id})`, true)
  .addField("حالتك :", message.member.presence !== null && message.member.presence.status !== null ? message.member.presence.status : "Offline")
  .addField("يلعب؟ : ", `${message.author.presence.game === null ? "None" :  message.author.presence.game.name}`, true)
  .addField("اسمك في دسكورد ", `${message.member.displayName}`, true)
  .addField("الرتب الذي تمتلكها ", `${message.member.roles.map(r => r.name).join(", ")}`)
  .addField("أعلى رتبه تمتلكها: ", message.member.highestRole.name)
  .addField("دخولك للدسكورد :", `${message.member.joinedAt.toDateString()}`)
  .addField("دخولك للسيرفر : ", `${message.author.createdAt.toDateString()}`)
  .addField(': عدد الدعوات', inviteCount,false)
  .setTimestamp()
  .setFooter(message.author.username, message.author.avatarURL);
if (message.mentions.users.size < 1) return message.channel.send({ embed: embed });
  
var embed = new Discord.RichEmbed()
  .setColor(0x00A2E8)
  .setThumbnail(member.user.avatarURL)
  .addField("اسمه في دسكورد:", `${member.user.tag} (ID: ${member.id})`, true)
  .addField("حالته :", member.presence !== null && member.presence.status !== null ? member.presence.status : "Offline")
  .addField("يلعب :", `${member.user.presence.game === null ? "Nothing" :  member.user.presence.game.name}`, true)
  .addField("اسمه في السيرفر:", `${member.nickname === null ? "None" : member.nickname}`, true)
  .addField("الرتب :", `${member.roles.map(r => r.name).join(", ")}`)
  .addField("اعلى رتبه يمتلكها : :", member.highestRole.name)
  .addField("دخوله لدسكورد :", `${member.joinedAt.toDateString()}`)
  .addField("دخوله للسيرفر", `${member.user.createdAt.toDateString()}`)
  .setTimestamp()
  .setFooter(member.user.username, member.user.avatarURL);
  message.channel.send({ embed: embed });
})
  }

});
  
client.on("message", message => {
  var prefix = "&";
  var args = message.content.substring(prefix.length).split(" ");
  if (message.content.startsWith(prefix + "report-owner")) {
let reportMember = message.guild.member(message.mentions.members.first());
let reportReason = args.slice(1).join(" ");
 
if (message.mentions.users.size === 0) {
  message.channel.send("**منشن الشخص المراد الابلاغ عليه** :x:")
  return;
} else {
  if(!reportMember) {
  message.channel.send("**هذه الشخص غير موجود في السيرفر** :x:")
  return; }}
  
if (reportMember.id == message.author.id) {
  message.channel.send("**لا يمكنك الابلاغ عن نفسك** :facepalm:")
  return; }
 
if (args[1] === undefined) {
  message.channel.send("**ضع سبب الابلاغ** :x:")
  return; }
 
message.guild.owner.send({embed:{
  fields: [{
  name: "ابلاغ جديد من سيرفر : " + message.guild.name + "!",
  value: "تفاصيل:\n\n**صاحب الأبلاغ:** " + message.author.username + "\n**قام بالأبلاغ عن ::** " + reportMember.user.username + "\n**السبب:** " + reportReason + "\n**الروم المرسل منه الأبلاغ:** " + message.channel
}
  ],
  thumbnail: {
  url: reportMember.user.displayAvatarURL
  },
  timestamp: new Date(),
  color: 0xFF0000
}}).catch(err => {
  message.author.send("A error occured sending your report to the server owner! Error: " + err)
  return;
})
message.channel.send("تم ارسال الأبلاغ بنجاح\n\nمعلومات عن الأبلاغ:\n  **قمت بالابلاغ عن :** " + reportMember.user.username + "\n  **السبب:** " + reportReason + "\n  **الروم الذي قمت بأرسال الابلاغ منه:** " + message.channel)
 
}
});
  
  
client.on('message', message => {
var prefix = "&";
  
 if (message.content === prefix + "dt") {
 if (!message.channel.guild) return message.reply('** This command only for servers **');  
 var currentTime = new Date(),
hours = currentTime.getHours() + 4 ,
hours2 = currentTime.getHours() + 3 ,
hours3 = currentTime.getHours() + 2 ,
hours4 = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
seconds = currentTime.getSeconds(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Day = currentTime.getDate();
 var h = hours
  if(hours > 12) {
   hours -= 12;
} else if(hours == 0) {
hours = "12";
}  
 if(hours2 > 12) {
   hours2 -= 12;
} else if(hours2 == 0) {
hours2 = "12";
 
}  
if(hours3 > 12) {
   hours3 -= 12;
} else if(hours3 == 0) {
hours3 = "12";
} 
if (minutes < 10) {
minutes = '0' + minutes;
}
 
 
var suffix = 'صباحاَ';
if (hours >= 12) {
suffix = 'مساء';
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
  
 
var Date15= new Discord.RichEmbed()
.setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
.setTitle( "「التاريخ  والوقت」")
.setColor('RANDOM')
.setFooter(message.author.username, message.author.avatarURL)
.addField('الامارات',
"「"+ hours + ":" + minutes +":"+ seconds + "」")
 .addField('مكه المكرمه',
"「"+ hours2 + ":" + minutes +":"+ seconds  + "」") 
.addField('مصر',
"「"+ hours3 + ":" + minutes +":"+ seconds  + "」") 
 
.addField('Date',
"「"+ Day + "-" + Month + "-" + Year +  "」")
 
 message.channel.sendEmbed(Date15);
}
});
 
  
 
  
  client.on('message', message => {
var prefix = "&"
  
  if(message.content.startsWith(prefix + "inforole")) {
   var args = message.content.split(" ").slice(1);
if(message.channel.permissionsFor(message.client.user).has('EMBED_LINKS') == false) return message.reply('sorry but I cannot send Embed Links for this channel... check my permissions and try again!');
var kakrole = args.slice(1).join(' ');
if(!kakrole) return message.reply('please, specify a role to get info...');
  
var role = message.guild.roles.find("name", kakrole);
if(!role) return message.reply("i didn't find no role with that name! Try again later :thumbsdown:");
  
var roleCreated = role.createdAt.toString().split(' ');
const embed = new Discord.RichEmbed()
.setTitle("Dragon")
.setAuthor( '', '' )
.setColor(0xFF8DFD)
.setDescription(``)
.setFooter('', '')
.setImage()
.setThumbnail('https://png.icons8.com/metro/540/edit-user-male.png')
.setTimestamp()
.setURL('')
.addField(`Role name`, `${role.name}`, true)
.addField(`Role Id`, `${role.id}`, true)
.addField(`Role Position`, `${role.position}`, true)
.addField(`Members`, `${role.members.size} with this role`, true)
.addField(`Mentionable`, `${role.mentionable}`, true)
.addField(`Role Color`, `${role.hexColor}`, true)
.addField(`Created At`, `${roleCreated[1]} ${roleCreated[2]} ${roleCreated[3]}`)
  
message.channel.send({embed});
  }
  });
  
  
  client.on('message' , async message => {
if(message.author.bot) return;
var prefix = "&"; 
if (message.content.startsWith(prefix + "voice")) {
var guild = message.guild
  if(message.channel.type == 'dm') return;
  const embed = new Discord.RichEmbed() 
  .setColor("RANDOM")
  .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  .setAuthor("Voice Online", "https://images-ext-1.discordapp.net/external/vp2vj9m0ieU5J6SHg6ObIsGpTJyoZnGAebrd0_vi848/https/i.imgur.com/GnR2unD.png?width=455&height=455")
  .setFooter(` العدد : ${guild.members.filter(member => member.voiceChannel).size}`)
  .setDescription(`\n${guild.members.filter(member => member.voiceChannel).map(m => m.user.tag).join('\n')}`);
message.channel.sendEmbed(embed);
  }// لو تبي تغير الوقت اللي تنرسل فيه الرساله غير رقم 30 الى عدد الدقائق اللي تبيهه ..
  });
  
  client.on('message', message => {
if(message.content == '&menbans'){
message.guild.fetchBans().then(bans => {
bans.forEach(user => {
   message.channel.send('\`#\` <@'+ user.id + '>');
});
});
}
  });
client.on('message', message => {
  var prefix = "&"; 
  
  if(message.content.startsWith(prefix +"bans")) {
 message.guild.fetchBans()
 .then(bans => message.channel.send(`The ban count **${bans.size}** Person`))
   .catch(console.error);
  }
  });
  
  
  client.on('message', async message => {
var prefix = "&"; 
let messageArray = message.content.split(' ');
let args = messageArray.slice(1);
if(message.content.startsWith(prefix + "info-invite")) {
  if(!args) return message.reply('**آرسل كود الدعوة مثال : ``SQe7wJa``**');
  message.guild.fetchInvites().then(i => {
let inv = i.get(args[0]);
if(!inv) return message.reply(`**لم اقدر على ايجاد ${args}**`);
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setThumbnail(message.author.avatarURL)
.addField('صاحب الدعوة',inv.inviter,true)
.addField('روم الدعوة',inv.channel,true)
.addField('تاريخ انتهاء الدعوة',moment(inv.expiresAt).format('YYYY/M/DD:h'),true)
.addField('تم انشاء الدعوة',moment(inv.createdAt).format('YYYY/M/DD:h'),true)
.addField('مدة الدعوة',moment(inv.maxAge).format('DD **ساعة** h **يوم**'),true)
.addField('الاستخدامات',inv.uses || inv.maxUses,true)
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
message.channel.sendEmbed(embed);
  });
}
  });
  
  client.on("message", message => {
  if (message.content === "&help") {
  message.react("✅")
  message.react("😵")
   const embed = new Discord.RichEmbed() 
   .setColor("#fff")
   .setDescription(`

   ══════════ஜ۩۞۩ஜ════════════
   **   اوامر عامة
   ${prefix}bot
└─ يعرض لك معلومات عن البوت
${prefix}server
└─ يعرض لك معلومات السيرفر
${prefix}user 
└─ أمر الايدي
${prefix}id
└─ أمر الايدي بشكل مميز
${prefix}menbans
└─ يمنشن الي متبندين بالسيرفر
${prefix}bans
└─ يعرض لك عدد المتبندين
${prefix}voice
└─ يعرض لك عدد اعضاء الي برومات الصوتية مع اسمائهم
${prefix}roleperms
└─ لمعرفة خصائص رتبتك او خصائص رتبة معينه عن طريق اسم الرتبة
${prefix}mb
└─ لمعرفة حالة الاعضاء 
${prefix}member
└─ عدد وحالة اعضاء السيرفر 
${prefix}report
└─ للابلاغ عن شخص
└─ملاحظة: يجب انشاء روم بأسم report لتلقي الابلاغات
${prefix}report-owner
└─ لأرسال ابلاغ لصاحب السيرفر 
${prefix}date
└─ لمعرفه التاريخ
${prefix}dt
└─ لمعرفة التاريخ والوقت لدولة مصر والسعودية والامارات  
${prefix}ping
└─ لمعرفه سرعه البوت
${prefix}emojis
└─ يعرض لك ايموجيات حقت السيرفر
${prefix}rooms
└─ لعرض عدد واسماء الرومات
${prefix}roles
└─ لعرض اسماءالرتب
${prefix}channel
└─ يعرض لك معلومات عن الروم
${prefix}embed
└─ خاصيه غرد لكن بغير طريقه
${prefix}say
└─ لي يكرر الكلام الذي تقوله
  رابط
└─ لارسال رابط السيرفر على الخاص
${prefix}invites
└─ يعرض لك كم جبت اعضاء لهذة السيرفر
${prefix}info-invite
└─ يعرض لك معلومات عن رابط دعوة
${prefix}invite-codes
└─ يرسل لك على الخاص جميع الروابط التي قمت بأنشائها لهذة السيرفر
${prefix}top
└─ يعرض لك جميع روابط دعوات التي تم انشائها مع عدد الاشخاص الي دخلو من الرابط
${prefix}avatar
└─ لي عرض صورتك او صوره اي شخص
${prefix}image
└─ لي عرض صوره السيرفر**
  
  ══════════ஜ۩۞۩ஜ════════════
  
   `)
   .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   

 
 
  message.author.send({ embed: embed });
 
  }
  }); 

  client.login(process.env.BOT_TOKEN);