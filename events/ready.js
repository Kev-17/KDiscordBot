
/** -----------------------------------------------------------
 *  Event :  ready
 *  Category :  system
 *  Path :  ./events/ready.js
 *  Description :  Evènement déclenché à la connection du bot
 *  -----------------------------------------------------------
*/



//  => imports


const logo_console = `\n#####   #####  ####      ####   ™\n#   #  #   #   #    #    #    #\n#   # #   #    # #   #   # #  #\n`
  + `#   #    #     # ##   #  #    #\n#       #      # ###  #  #  ##\n#   #    #     # ##   #  #     #\n#   # #   #    # #   #   # ##  #\n`
  + `#   #  #   #   #    #    #     #\n#####   #####  ####      #####\n\n=================================\n\n`;


module.exports = $KDB => {

  console.log(`${logo_console}> ${$KDB.user.username} connected`);
  $KDB.user.setActivity(`${$KDB.settings.prefix}help`, { type: `WATCHING` });

};

