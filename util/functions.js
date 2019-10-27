
/** --------------------------------------------
 *  functions.js
 *  Category :  system
 *  Path :  ./util/functions.js
 *  Description :  Contient plusieurs fonctions
 *  --------------------------------------------
*/



// const mongoose = require(`mongoose`);   //  DataBase locale
// const { Guild } = require(`../models/index.js`);


module.exports = $KDB => {

  //  Vérifie si la commande existe
  //    renvoie true si c'est le cas, sinon false
  $KDB.hasCommand = $command => {
    if($KDB.adminCommands.has($command)) return true;
    if($KDB.modCommands.has($command)) return true;
    if($KDB.userCommands.has($command)) return true;
    return false;
  };

  //  Retourne une commande
  //    si elle existe (utiliser KDB.hasCommand(cmd) avant)
  $KDB.getCommand = $command => {
    if($KDB.adminCommands.has($command)) return $KDB.adminCommands.get($command);
    if($KDB.modCommands.has($command)) return $KDB.modCommands.get($command);
    if($KDB.userCommands.has($command)) return $KDB.userCommands.get($command);
  };

  //  Renvoie les infos de la DataBase locale
  //    ou les infos par défaut
  // $KDB.getGuild = async $guild => {
    // const data = await Guild.findOne({ guildID: $guild.id });
    // if(data) return data;
    // else {
    //   await $KDB.emit(`guildCreate`, $guild);
    //   $KDB.getGuild($guild);
    // }
  // };

  //  Met à jour la DataBase locale
  //    avec les infos renseignées
  // $KDB.updateGuild = async ($guild, $settings) => {
    // let data = await $KDB.getGuild($guild);
    // if(typeof data !== `object`) data = {};
    // for(const key in $settings){
    //   if(data[key] !== $settings[key]) data[key] = $settings[key];
    // }
    // return data.updateOne($settings);
  // };

  //  Créer une DataBase locale
  //    avec les infos du serveur discord actuel
  // $KDB.createGuild = async $settings => {
    // const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, $settings);
    // const createGuild = await new Guild(merged);
    // createGuild.save().then(g => console.log(`New guild -> ${g.guildName}`));
  // };

};

