
/*  KDiscordBot v.1.0.0  ----------------*
 * Bot Discord simple                      *
 *  Le projet en est à ses débuts          *
 *                                         *
 * K | MIT Copyright ©2019 KDiscordBot     *
 * --------------------------------------*
*/



const fs = require(`fs`);
const { TOKEN, PREFIX } = require(`./config.js`);
const { Client, Collection } = require(`discord.js`);

console.log(`\n[KDB] KDiscordBot starting..`);

//  == Client init ==
const KDB = new Client({ disableEveryone: true });
require(`./util/functions.js`)(KDB);
// KDB.mongoose = require(`./util/mongoose.js`);

//   Default data loading   
KDB.config = {
  default: {
    prefix: PREFIX
  }
};

KDB.settings = {
  prefix: KDB.config.default.prefix
};

console.log(`[KDB] created client`);


//  ======================
//  == loading Commands ==

let cmdCount = 0;
console.log(`[KDB] Loading Commands..`);

KDB.adminCommands = new Collection();
//

KDB.modCommands = new Collection();
//

KDB.userCommands = new Collection();
fs.readdir(`./userCommands/`, ($err, $files) => {
  if($err) console.log(`[KDB] -> Erreur lors du chargement des commandes utilisateurs : \n ${$err}`);
  $files.forEach(file => {
    if(!file.endsWith(`.js`)) return undefined;
    let cmd = file.split(`.`)[0];
    KDB.userCommands.set(cmd, require(`./userCommands/${file}`));
    cmdCount += 1;
  });
  console.log(`[KDB] -> ${cmdCount} loaded commands`);
});


//  ====================
//  == Loading Events ==

fs.readdir(`./events/`, ($err, $files) => {
  if($err) console.log(`Erreur dans le dossier './events/' : \n ${$err}`);
  console.log(`[KDB] Loading Events..`);
  let eventCount = 0;
  $files.forEach(file => {
    if(!file.endsWith(`.js`)) return undefined;
    const event = require(`./events/${file}`);
    const eventName = file.split(`.`)[0];
    KDB.on(eventName, event.bind(null, KDB));
    eventCount += 1;
  });
  console.log(`[KDB] -> ${eventCount} loaded events\n[KDB] connecting..\n`);
});


//  ============
//  == Events ==

KDB.on(`error`, console.error);
KDB.on(`warn`, console.warn);


//  ================
//  == Connection ==
// KDB.mongoose.init();
KDB.login(TOKEN);

