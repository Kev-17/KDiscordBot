
/** -----------------------------------------------------
 *  Event :  message
 *  Category :  system
 *  Path :  ./events/message.js
 *  Description :  Evènement déclenché à chaque message
 *  -----------------------------------------------------
*/



//  => imports


module.exports = async ($KDB, $message) => {

  if($message.channel.type === 'dm') return;
  if($message.author.bot) return;

  // const settings = await $KDB.getGuild($message.guild);

  //  Test - Déclenchement manuel de l'event 'guildCreate'
  // if($message.content === `kd!k ldb create`) return $KDB.emit(`guildCreate`, $message.guild);
  //             

  if(!$message.content.startsWith($KDB.settings.prefix)) return;

  const args = $message.content.slice($KDB.settings.prefix.length).trim().split(/ +/g);
  const cmdName = args.shift().toLowerCase();

  if($KDB.adminCommands.has(cmdName)) {
    if($message.member.hasPermission(`ADMINISTRATOR`)) $KDB.adminCommands.get(cmdName).run($KDB, $message, args);
    else return $message.channel.send(`\`\`\`Vous n'avez pas accés à cette commande\`\`\``);
  } else if($KDB.modCommands.has(cmdName)) {
    if($message.member.hasPermission(`MANAGE_MESSAGES`)) $KDB.modCommands.get(cmdName).run($KDB, $message, args);
    else return $message.channel.send(`\`\`\`Vous n'avez pas accés à cette commande\`\`\``);
  } else if($KDB.userCommands.has(cmdName)) $KDB.userCommands.get(cmdName).run($KDB, $message, args);
  else $message.channel.send(`\`\`\`Commande introuvable. Voir \`${$KDB.settings.prefix}help\` pour plus d'information.\`\`\``);

};

