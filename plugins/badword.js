/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/

const QueenSew = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Pach = require('sewqueen-rs');
const Config = require('../config')
const Language = require('../language');
const Lang = Language.getString('evaluators');
const googleTTS = require('google-translate-tts');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});
let baseURI = '/apps/' + Config.HEROKU.APP_NAME;


async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
const ADD = '94785435462,94785457519'
var badkick_var = ''
async function badwd() {
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        badkick_var = vars.BAD_KICK
    });
}
badwd()
var ldc = ''
if (Config.LANG == 'AZ') ldc = '_*Bad word Not Allowed This Group*_\n👑Aⁿᵗⁱᵇᵃᵈ Wᵒʳᵈ Bʸ ' + Config.BOTNAME + '👑\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ 👑ᴋɪɴɢ ᴍᴀʜᴀꜱᴏɴᴀ👑'
if (Config.LANG == 'SI') ldc = '_*Bad word Not Allowed This Group*_\n👑Aⁿᵗⁱᵇᵃᵈ Wᵒʳᵈ Bʸ ' + Config.BOTNAME + '👑\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ 👑ᴋɪɴɢ ᴍᴀʜᴀꜱᴏɴᴀ👑'
if (Config.LANG == 'EN') ldc = '_*Bad word Not Allowed This Group*_\n👑Aⁿᵗⁱᵇᵃᵈ Wᵒʳᵈ Bʸ ' + Config.BOTNAME + '👑\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ 👑ᴋɪɴɢ ᴍᴀʜᴀꜱᴏɴᴀ👑'

var SEw = ''
if (Config.LANG == 'AZ') SEw = '_*Group Links Not Allowed This Group*_\n👑Aⁿᵗⁱᵍʳᵒᵘᵖ Lⁱⁿᵏ Bʸ Sᵉʷ Qᵘᵉᵉⁿ👑\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'
if (Config.LANG == 'SI') SEw = '_*Group Links Not Allowed This Group*_\n👑Aⁿᵗⁱᵍʳᵒᵘᵖ Lⁱⁿᵏ Bʸ ' + Config.BOTNAME + '👑\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ 👑ᴋɪɴɢ ᴍᴀʜᴀꜱᴏɴᴀ👑'
if (Config.LANG == 'EN') SEw = '_*Group Links Not Allowed This Group*_\n👑Aⁿᵗⁱᵍʳᵒᵘᵖ Lⁱⁿᵏ Bʸ ' + Config.BOTNAME + '👑\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ 👑ᴋɪɴɢ ᴍᴀʜᴀꜱᴏɴᴀ👑'

var Bsew = ''
if (Config.LANG == 'SI') Bsew = '*‎.\n\n\n\n\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n\n*අසරණ ජීවිත සදහා ඉඩක් නොමැත 😂*'
if (Config.LANG == 'EN') Bsew = '*.\n\n\n\n\n\n\n\n\n\n\n.\n\n\n\n\n\n.\n\n\n\n\n\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n*Spam Not Allowed Here 🥴!*'

var Asew = ''
if (Config.LANG == 'SI') Asew = '*************************************\n*👑ANTI SPAM CLEAR RIBBON👑*\n\n       👑By ' + Config.BOTNAME + '👑\n       \n\n\n\n```✨✨Do Not Go Up✨✨```\n*ඉහලට යෑමෙන් වලිකින්න.*\n            *Clear Ribbon*\n    _👑by      ' + Config.BOTNAME + '👑_\n    \n    \n\n```✨✨Do Not Go Up✨✨```\n*ඉහලට යෑමෙන් වලිකින්න.*\n            *Clear Ribbon*\n    _👑by      ' + Config.BOTNAME + '👑_\n    \n\n\n\n```✨✨Do Not Go Up✨✨```\n*ඉහලට යෑමෙන් වලිකින්න.*\n            *Clear Ribbon*\n    _👑by      ' + Config.BOTNAME + '👑_\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ 👑ᴋɪɴɢ ᴍᴀʜᴀꜱᴏɴᴀ👑\n*************************************'
if (Config.LANG == 'EN') Asew = '*************************************\n*👑ANTI SPAM CLEAR RIBBON👑*\n\n       👑By ' + Config.BOTNAME + '👑\n       \n\n\n\n```✨✨Do Not Go Up✨✨```\n*ඉහලට යෑමෙන් වලිකින්න.*\n            *Clear Ribbon*\n    _👑by      ' + Config.BOTNAME + '👑_\n    \n    \n\n```✨✨Do Not Go Up✨✨```\n*ඉහලට යෑමෙන් වලිකින්න.*\n            *Clear Ribbon*\n    _👑by      ' + Config.BOTNAME + '👑_\n    \n\n\n\n```✨✨Do Not Go Up✨✨```\n*ඉහලට යෑමෙන් වලිකින්න.*\n            *Clear Ribbon*\n    _👑by      ' + Config.BOTNAME + '👑_\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ 👑ᴋɪɴɢ ᴍᴀʜᴀꜱᴏɴᴀ👑\n*************************************'
  if (Config.PSW !== 'kingmahasona') {
QueenSew.newcmdaddtosew({on: 'text', fromMe: false, delownsewcmd: false}, (async (message, match) => {
    if (badkick_var == 'true') {
        let regex1sew = new RegExp('fuck')
        let regex2sew = new RegExp('f u c k')
        let regex3sew = new RegExp('Fuck')
        let regex4sew = new RegExp('F u c k')
        let regex5sew = new RegExp('Huththa')
        let regex6sew = new RegExp('huththa')
        let regex7sew = new RegExp('Hutta')
        let regex8sew = new RegExp('hutta')
        let regex9sew = new RegExp('huththi')
        let regex10sew = new RegExp('Huththi')
        let regex11sew = new RegExp('hutti')
        let regex12sew = new RegExp('Hutti')
        let regex13sew = new RegExp('Baduwa')
        let regex14sew = new RegExp('baduwa')
        let regex15sew = new RegExp('paka ')
        let regex16sew = new RegExp('Paka ')
        let regex17sew = new RegExp('Pakaya')
        let regex18sew = new RegExp('pakaya')
        let regex19sew = new RegExp('Pakichchi')
        let regex20sew = new RegExp('pakichchi')
        let regex21sew = new RegExp('wesawa')
        let regex22sew = new RegExp('Wesawa')
        let regex23sew = new RegExp('Wesi ')
        let regex24sew = new RegExp('wesi ')
        let regex25sew = new RegExp('Payya')
        let regex26sew = new RegExp('payya')
        let regex27sew = new RegExp('Wesige')
        let regex28sew = new RegExp('wesige')
        let regex29sew = new RegExp('hukanawa')
        let regex30sew = new RegExp('Hukanawa')
        let regex31sew = new RegExp('Hukanna')
        let regex32sew = new RegExp('hukanna')
        let regex33sew = new RegExp('Huka ')
        let regex34sew = new RegExp('huka ')
        let regex35sew = new RegExp('Hikuna')
        let regex36sew = new RegExp('hikuna')
        let regex37sew = new RegExp('Hikila')
        let regex38sew = new RegExp('hikila')
        let regex39sew = new RegExp('kariya')
        let regex40sew = new RegExp('Kariya')
        let regex41sew = new RegExp('Kari ')
        let regex42sew = new RegExp('kari ')
        let regex43sew = new RegExp('Hukana')
        let regex44sew = new RegExp('hukana')
        let regex45sew = new RegExp('හුත්තා')
        let regex46sew = new RegExp('හුත්ති')
        let regex47sew = new RegExp('හුකන්නා')
        let regex48sew = new RegExp('හුකනවා')
        let regex49sew = new RegExp('හිකුනා')
        let regex50sew = new RegExp('හිකිලා')
        let regex51sew = new RegExp('හුත්')
        let regex52sew = new RegExp('හුකා')
        let regex53sew = new RegExp('කැරියා')
        let regex54sew = new RegExp('කැරි')
        let regex55sew = new RegExp('පකයා')
        let regex56sew = new RegExp('පක')
        let regex57sew = new RegExp('පකා')
        let regex58sew = new RegExp('පක්')
        let regex59sew = new RegExp('ෆක්')
        let regex60sew = new RegExp('පින්නයා')
        let regex61sew = new RegExp('pinnaya')
        let regex62sew = new RegExp('Pinnaya')
        let regex63sew = new RegExp('බඩුව')
        let regex64sew = new RegExp('වේසාවා')
        let regex65sew = new RegExp('වේසි')
        let regex66sew = new RegExp('පයිය')
        let regex67sew = new RegExp('පයියා')
        let regex68sew = new RegExp('esawa ')
        let regex69sew = new RegExp(' esi ')
        let regex70sew = new RegExp('uddika ')
        let regex71sew = new RegExp('Uddika ')
        let regex72sew = new RegExp('උද්දික ')
        let regex73sew = new RegExp('ඒසාවා ')
        let regex74sew = new RegExp('ඒසි')
        let regex75sew = new RegExp('Esawa ')
        let regex76sew = new RegExp('Esi ')
        let regex77sew = new RegExp('හුකන්නා')
        let regex78sew = new RegExp('හුත්තිගෙ')
        let regex79sew = new RegExp('Huththige')
        let regex80sew = new RegExp('huththige')
        let regex81sew = new RegExp('වේසිගෙ')
        let regex82sew = new RegExp('ponnaya')
        let regex83sew = new RegExp('ponnay')
        let regex84sew = new RegExp('ponnayage')
        let regex85sew = new RegExp('ponnayek')
        let regex86sew = new RegExp('ponnayekne')
        let regex87sew = new RegExp('ponnayekge')
        let regex88sew = new RegExp('පොන්නයා')
        let regex89sew = new RegExp('පොන්නයෙක්')
        let regex90sew = new RegExp('පොන්නයෙක්නෙ')
        let regex91sew = new RegExp('පොන්නයෙක්ගෙ')
        let regex92sew = new RegExp('vesi ')
        let regex93sew = new RegExp('vesawa')
        let regex94sew = new RegExp('vesiyak')
        let regex95sew = new RegExp('wesiyak')
        let regex96sew = new RegExp('Wesiyak')
        let regex97sew = new RegExp('Vesi ')
        let regex98sew = new RegExp('Vesawa')
        let regex99sew = new RegExp('වේසියක්ගෙ')
        let regex100sew = new RegExp('Huththiyak')
        let regex101sew = new RegExp('huththiyak')
        let regex102sew = new RegExp('payyek')
        let regex103sew = new RegExp('Payyek')
        let regex104sew = new RegExp('pakayek')
        let regex105sew = new RegExp('Pakayek')
        let regex106sew = new RegExp('Huththek')
        let regex107sew = new RegExp('huththek')
        let regex108sew = new RegExp('හුත්තියක්')
        let regex109sew = new RegExp('පයියෙක්')
        let regex110sew = new RegExp('වේසියක්')
        let regex111sew = new RegExp('බඩුවක්')
        let regex112sew = new RegExp('baduwak')
        let regex113sew = new RegExp('Baduwak')
        let regex114sew = new RegExp('pinnayek')
        let regex115sew = new RegExp('Pinnayek')
        let regex116sew = new RegExp('පින්නයෙක්')
        let regex117sew = new RegExp('Huththage')
        let regex118sew = new RegExp('huththage')
        let regex119sew = new RegExp('හුත්තගෙ')
        let regex120sew = new RegExp('Huththata')
        let regex121sew = new RegExp('හුත්තට')
        let regex122sew = new RegExp('huththata')
        let regex123sew = new RegExp('pakata')
        let regex124sew = new RegExp('Pakata')
        let regex125sew = new RegExp('පකට')
        let regex126sew = new RegExp('පකාට')
        let regex127sew = new RegExp('ponnayata')
        let regex128sew = new RegExp('Ponnayata')
        let regex129sew = new RegExp('Huththata')
        let regex130sew = new RegExp('huththata')
        let regex131sew = new RegExp('හුත්තට')
        let regex132sew = new RegExp('පොන්නයට')
        let regex133sew = new RegExp('පයියට')
        let regex134sew = new RegExp('payyata')
        let regex135sew = new RegExp('Payyata')
        let regex136sew = new RegExp('vesita')
        let regex137sew = new RegExp('Vesita')
        let regex138sew = new RegExp('wesita')
        let regex139sew = new RegExp('Wesita')
        let regex140sew = new RegExp('වේසිට')
        let regex141sew = new RegExp('vesiyek')
        let regex142sew = new RegExp('Vesiyek')
        let regex143sew = new RegExp('Wesiyek')
        let regex144sew = new RegExp('vesiyek')
        let regex145sew = new RegExp('වේසියෙක්')
        let regex146sew = new RegExp('හුත්තියෙක්')
        let regex147sew = new RegExp('huththiyek')
        let regex148sew = new RegExp('Huththiyek')
        let regex149sew = new RegExp('huttiyek')
        let regex150sew = new RegExp('Huttiyek')
        let regex151sew = new RegExp('huttek')
        let regex152sew = new RegExp('Huttek')
        let regex153sew = new RegExp('ponni')
        let regex154sew = new RegExp('Ponni')
        let regex155sew = new RegExp('පොන්නි')
        let regex156sew = new RegExp('ponniyak')
        let regex157sew = new RegExp('Ponniyak')
        let regex158sew = new RegExp('Ponniyek')
        let regex159sew = new RegExp('ponniyek')
        let regex160sew = new RegExp('Bacic')
        let regex161sew = new RegExp('becic')
        let regex162sew = new RegExp('becige')
        let regex163sew = new RegExp('Basige')
        let regex164sew = new RegExp('Bacige')
        let regex165sew = new RegExp('besige')
        let regex166sew = new RegExp('hukaam')
        let regex167sew = new RegExp('Hukaam')
        let regex168sew = new RegExp('Hukaham')
        let regex169sew = new RegExp('Hukahan')
        let regex170sew = new RegExp('hukahan')
        let regex171sew = new RegExp('hukaham')
        let regex172sew = new RegExp('hukapu')
        let regex173sew = new RegExp('Hukapu')
        let regex174sew = new RegExp('හුකාම්')
        let regex175sew = new RegExp('හුකහම්')
        let regex176sew = new RegExp('pakeer')
        let regex177sew = new RegExp('fakeer')
        let regex178sew = new RegExp('පකීර්')
        let regex179sew = new RegExp('හුකහන්')
        let regex180sew = new RegExp('ෆකීර්')
        let regex181sew = new RegExp('පිත්තම්')
        let regex182sew = new RegExp('කල්ලතෝනි')
        let regex183sew = new RegExp('මරිමොංගල්')
        let regex184sew = new RegExp('සිපයියා')
        let regex185sew = new RegExp('පිම්පි')
        let regex186sew = new RegExp('වඳ')
        let regex187sew = new RegExp('පීචන්')
        let regex188sew = new RegExp('කැරිය')
        let regex189sew = new RegExp('ලෙස්බියන්')
        let regex190sew = new RegExp('හොරහුත්ති')
        let regex191sew = new RegExp('නාට්ටාමි')
        let regex192sew = new RegExp('බැල්ලි')
        let regex193sew = new RegExp('පක')
        let regex194sew = new RegExp('ඇටදෙක')
        let regex195sew = new RegExp('මන්දමානසික')
        let regex196sew = new RegExp('කණ්ඩම්')
        let regex197sew = new RegExp('කොණ්ඩම්')
        let regex198sew = new RegExp('පීචන්')
        let regex199sew = new RegExp('පකෝ')
        let regex200sew = new RegExp('කනවැන්දුමා')
        let regex201sew = new RegExp('මෑඇටේ')
        let regex202sew = new RegExp('මෑමල')
        let regex203sew = new RegExp('අවජාතක')
        let regex204sew = new RegExp('බලුජානෙ')
        let regex205sew = new RegExp('හුකන්නා')
        let regex206sew = new RegExp('බඩුව')
        let regex207sew = new RegExp('ගොම්බඩුව')
        let regex208sew = new RegExp('පොන්නහුකන්නා')
        let regex209sew = new RegExp('කැරිහුත්ති')
        let regex210sew = new RegExp('පොට්ටහුත්ති')
        let regex211sew = new RegExp('පොට්ටවේසි')
        let regex212sew = new RegExp('ෆක්')
        let regex213sew = new RegExp('වඳහුත්ති')
        let regex214sew = new RegExp('ලෙඩබැල්ලි')
        let regex215sew = new RegExp('වේසබඩුව')
        let regex216sew = new RegExp('පිත්තම්')
        let regex217sew = new RegExp('piththam')
        let regex218sew = new RegExp('Piththam')
        let regex219sew = new RegExp('marimongal')
        let regex220sew = new RegExp('Marimongal')
        let regex221sew = new RegExp('pimpi')
        let regex222sew = new RegExp('Pimpi')
        let regex223sew = new RegExp('pichan')
        let regex224sew = new RegExp('Pichan')
        let regex225sew = new RegExp('kariya')
        let regex226sew = new RegExp('Kariya')
        let regex227sew = new RegExp('හොරහුත්ති')
        let regex228sew = new RegExp('horahuththi')
        let regex229sew = new RegExp('Horahuththi')
        let regex230sew = new RegExp('nattami')
        let regex231sew = new RegExp('Nattami')
        let regex232sew = new RegExp('paka ')
        let regex233sew = new RegExp('Paka ')
        let regex234sew = new RegExp('hukaham')
        let regex235sew = new RegExp('Hukaham')
        let regex236sew = new RegExp('mandamanasika')
        let regex237sew = new RegExp('Mandamanasika')
        let regex238sew = new RegExp('kandam')
        let regex239sew = new RegExp('Kandam')
        let regex240sew = new RegExp('kondam')
        let regex241sew = new RegExp('Kondam')
        let regex242sew = new RegExp('pichan')
        let regex243sew = new RegExp('Pichan')
        let regex244sew = new RegExp('pako ')
        let regex245sew = new RegExp('Pako ')
        let regex246sew = new RegExp('kanawanduma')
        let regex247sew = new RegExp('Kanawanduma')
        let regex248sew = new RegExp('ma ate ')
        let regex249sew = new RegExp('Ma ate ')
        let regex250sew = new RegExp('ma mfdfsgggala ')
        let regex251sew = new RegExp('Ma maggddsdla')
        let regex252sew = new RegExp('awajathaka')
        let regex253sew = new RegExp('Awajathaka')
        let regex254sew = new RegExp('balujane')
        let regex255sew = new RegExp('Balujane')
        let regex256sew = new RegExp('hukanna')
        let regex257sew = new RegExp('Hukanna')
        let regex258sew = new RegExp('gonbaduwa')
        let regex259sew = new RegExp('Gonbaduwa')
        let regex260sew = new RegExp('ponnahukanna')
        let regex261sew = new RegExp('Ponnahukanna')
        let regex262sew = new RegExp('karihuththu')
        let regex263sew = new RegExp('Karihuththi')
        let regex264sew = new RegExp('pottahuththi')
        let regex265sew = new RegExp('Pottahuththi')
        let regex266sew = new RegExp('pottawesi')
        let regex267sew = new RegExp('Pottawesi')
        let regex268sew = new RegExp('kbgigihogkgkgggjvuug')
        let regex269sew = new RegExp('ffhhufffufjjffjjjfjjjifjffhhhfhfh')
        let regex270sew = new RegExp('wadahuththi')
        let regex271sew = new RegExp('Wadahuththi')
        let regex272sew = new RegExp('ledaballi')
        let regex273sew = new RegExp('Ledaballi')
        let regex274sew = new RegExp('wesabaduwa')
        let regex275sew = new RegExp('Wesabaduwa')
        let regex276sew = new RegExp('pinnayek')
        let regex277sew = new RegExp('Pinnayek')
        let regex278sew = new RegExp('හුත්තෝ')
        let regex279sew = new RegExp('huththo')
        let regex280sew = new RegExp('Huththo')
        let regex281sew = new RegExp('hutto')
        let regex282sew = new RegExp('Hutto')
        let regex283sew = new RegExp('පකෝ')
        let regex284sew = new RegExp('pako')
        let regex285sew = new RegExp('Pako ')
        let regex286sew = new RegExp('පයියො')
        let regex287sew = new RegExp('payyo')
        let regex288sew = new RegExp('Payyo')
        let regex289sew = new RegExp('කැරියෝ')
        let regex290sew = new RegExp('kariyo')
        let regex291sew = new RegExp('Kariyo')
        let regex292sew = new RegExp('puthcfsdfghjjo ')
        let regex293sew = new RegExp('පුvghjiiiiiතෝ ')
        let regex294sew = new RegExp('හුකන්නො ')
        let regex295sew = new RegExp('hukanno')
        let regex296sew = new RegExp('Hukanno')
        let regex297sew = new RegExp('keriyo')
        let regex298sew = new RegExp('Keriyo')
        let regex299sew = new RegExp('esawo ')
        let regex300sew = new RegExp('Esawo ')
        let regex301sew = new RegExp('esavo ')
        let regex302sew = new RegExp('Esavo ')
        let regex303sew = new RegExp('https://chat')
        let regex304sew = new RegExp('hutho ')
        let regex305sew = new RegExp('Hutho ')
        let regex306sew = new RegExp('pamka')
        let regex307sew = new RegExp('Pamka')
        let regex308sew = new RegExp('Humkapan')
        let regex309sew = new RegExp('humkapan')
        let regex310sew = new RegExp('humtha')
        let regex311sew = new RegExp('Humtha')
        let regex312sew = new RegExp('Humtho')
        let regex313sew = new RegExp('humtho')
        let regex314sew = new RegExp('Pamko')
        let regex315sew = new RegExp('pamko')
        let regex316sew = new RegExp('kamriya')
        let regex317sew = new RegExp('Kamriya')
        let regex318sew = new RegExp('wemsi')
        let regex319sew = new RegExp('Wemsi')
        let regex320sew = new RegExp('pussy')
        let regex321sew = new RegExp('piss')
        let regex322sew = new RegExp('xnxx')
        let regex323sew = new RegExp('Piss ')
        let regex324sew = new RegExp('Pussy')
        let regex325sew = new RegExp('vulva')
        let regex326sew = new RegExp('Vulva')
        let regex327sew = new RegExp('penis')
        /*
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        let regex❤sew = new RegExp('😁')
        
        */
        
        /*Spam Kick By t.me/RavinduManoj */
        
        
        let regex1aasew = new RegExp('ท้เึางืผ')
        let regex2aasew = new RegExp('๒')
        let regex3aasew = new RegExp('৭')
        let regex4aasew = new RegExp('୧')
        let regex5aasew = new RegExp('୪')
        let regex6aasew = new RegExp('୨')
        let regex7aasew = new RegExp('ดุ')
        let regex8aasew = new RegExp('ۦོ͢⇣͢✰͢↬Â')
        let regex9aasew = new RegExp('๑')
        let regex10aasew = new RegExp('ห')
        let regex11aasew = new RegExp('ฬ')
        let regex12aasew = new RegExp('ฆ')
        let regex13aasew = new RegExp('ۦོ͢⇣͢✰͢↬')
        let regex14aasew = new RegExp('๓')
        let regex15aasew = new RegExp('ฤ')
        let regex16aasew = new RegExp('ຼ์๘ຼ์')
        let regex17aasew = new RegExp('໒')
        let regex18aasew = new RegExp('๕')
        let regex19aasew = new RegExp('๘')
        let regex20aasew = new RegExp('ค')
        let regex21aasew = new RegExp('Ꮛ')
        
        if (regex1aasew.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,Bsew, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,Asew, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ 👑ᴋɪɴɢ ᴍᴀʜᴀꜱᴏɴᴀ👑', MessageType.text )
        } 
        else if (regex2aasew.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,Bsew, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,Asew, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ 👑ᴋɪɴɢ ᴍᴀʜᴀꜱᴏɴᴀ👑', MessageType.text )
        }
         else if (regex3aasew.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,Bsew, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,Asew, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ 👑ᴋɪɴɢ ᴍᴀʜᴀꜱᴏɴᴀ👑', MessageType.text )
        }
        else if (regex4aasew.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,Bsew, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,Asew, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ 👑ᴋɪɴɢ ᴍᴀʜᴀꜱᴏɴᴀ👑', MessageType.text )

        }
        else if (regex5aasew.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,Bsew, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,Asew, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ 👑ᴋɪɴɢ ᴍᴀʜᴀꜱᴏɴᴀ👑', MessageType.text )

        }
        else if (regex6aasew.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,Bsew, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,Asew, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ 👑ᴋɪɴɢ ᴍᴀʜᴀꜱᴏɴᴀ👑', MessageType.text )

        }
        else if (regex7aasew.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,Bsew, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,Asew, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ 👑ᴋɪɴɢ ᴍᴀʜᴀꜱᴏɴᴀ👑', MessageType.text )

        }
        else if (regex8aasew.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,Bsew, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,Asew, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ 👑ᴋɪɴɢ ᴍᴀʜᴀꜱᴏɴᴀ👑', MessageType.text )

        }
        else if (regex9aasew.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,Bsew, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,Asew, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ 👑ᴋɪɴɢ ᴍᴀʜᴀꜱᴏɴᴀ👑', MessageType.text )

        }
        else if (regex10aasew.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,Bsew, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,Asew, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ 👑ᴋɪɴɢ ᴍᴀʜᴀꜱᴏɴᴀ👑', MessageType.text )

        }
        else if (regex11aasew.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,Bsew, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,Asew, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ 👑ᴋɪɴɢ ᴍᴀʜᴀꜱᴏɴᴀ👑', MessageType.text )

        }
        else if (regex12aasew.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,Bsew, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,Asew, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ 👑ᴋɪɴɢ ᴍᴀʜᴀꜱᴏɴᴀ👑', MessageType.text )

        }
        else if (regex13aasew.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,Bsew, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,Asew, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ 👑ᴋɪɴɢ ᴍᴀʜᴀꜱᴏɴᴀ👑', MessageType.text )

        }
        else if (regex14aasew.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,Bsew, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,Asew, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ 👑ᴋɪɴɢ ᴍᴀʜᴀꜱᴏɴᴀ👑', MessageType.text )

        }
        else if (regex15aasew.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,Bsew, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,Asew, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ 👑ᴋɪɴɢ ᴍᴀʜᴀꜱᴏɴᴀ👑', MessageType.text )

        }
        else if (regex16aasew.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,Bsew, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,Asew, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ 👑ᴋɪɴɢ ᴍᴀʜᴀꜱᴏɴᴀ👑', MessageType.text )

        }
        else if (regex17aasew.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,Bsew, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,Asew, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ 👑ᴋɪɴɢ ᴍᴀʜᴀꜱᴏɴᴀ👑', MessageType.text )

        }
        else if (regex18aasew.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,Bsew, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,Asew, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ 👑ᴋɪɴɢ ᴍᴀʜᴀꜱᴏɴᴀ👑', MessageType.text )

        }
        else if (regex19aasew.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,Bsew, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,Asew, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ 👑ᴋɪɴɢ ᴍᴀʜᴀꜱᴏɴᴀ👑', MessageType.text )

        }
        else if (regex20aasew.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,Bsew, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,Asew, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ 👑ᴋɪɴɢ ᴍᴀʜᴀꜱᴏɴᴀ👑', MessageType.text )

        }
        else if (regex21aasew.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,Bsew, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,Asew, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ 👑ᴋɪɴɢ ᴍᴀʜᴀꜱᴏɴᴀ👑', MessageType.text )

        }
        else if (regex1sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        } 
        else if (regex2sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
         else if (regex3sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
        else if (regex4sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
        else if (regex5sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
         else if (regex6sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
         else if (regex7sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
         else if (regex8sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
         else if (regex9sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
         else if (regex10sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex11sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex12sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex13sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex14sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex15sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex16sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex17sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex18sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex19sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex20sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex21sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex22sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex23sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex24sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex25sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex26sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex27sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex28sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex29sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }     
        else if (regex30sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex31sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex32sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex33sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex34sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex35sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex36sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex37sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex38sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex39sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex40sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex41sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex42sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex43sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex44sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex45sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex46sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex47sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex48sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex49sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex50sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex51sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex52sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex53sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex54sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex55sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex56sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex57sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex58sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex59sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex60sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex61sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex62sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex63sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex64sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex65sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex66sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex67sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex68sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex69sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex70sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex71sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex72sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex73sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex74sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex75sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex76sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex77sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex78sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex79sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex80sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex81sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex82sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex83sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex84sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex85sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex86sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex87sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex88sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex89sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex90sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex91sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex92sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex93sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex94sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex95sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex96sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex97sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex98sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex99sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex100sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex101sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex102sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex103sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex104sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex105sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex106sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex107sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex108sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex109sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex110sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex111sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex112sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex113sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex114sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex115sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex116sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex117sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex118sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex119sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex120sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex121sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex122sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex123sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex124sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex125sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex126sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex127sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex128sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex129sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex130sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex131sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex132sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex133sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex134sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex135sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex136sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex137sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex138sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex139sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex140sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex141sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex142sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex143sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex144sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex145sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex146sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex147sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex148sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex149sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex150sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex151sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex152sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex153sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex154sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex155sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex156sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex157sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex158sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex159sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex160sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex161sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex162sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex163sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex164sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex165sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex166sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex167sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex168sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex169sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex170sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex171sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex172sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex173sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex174sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex175sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex176sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex177sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex178sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex179sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex180sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex181sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex182sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex183sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex184sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex185sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex186sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex187sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex188sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex189sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex190sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex191sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex192sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex193sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex194sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex195sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex196sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex197sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex198sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex199sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex200sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex201sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex202sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex203sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex204sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex205sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex206sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex207sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex208sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex209sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex210sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex211sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex212sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex213sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex214sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex215sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex216sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex217sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex218sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex219sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex220sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex221sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex222sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex223sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex224sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex225sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex226sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex227sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex228sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex229sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex230sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex231sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex232sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex233sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex234sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex235sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex236sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex237sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex238sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex239sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex240sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex241sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex242sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex243sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex244sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex245sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex246sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex247sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex248sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex249sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex250sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex251sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex252sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex253sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex254sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex255sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex256sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex257sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex258sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex259sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex260sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex261sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex262sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex263sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex264sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex265sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex266sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex267sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex268sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex269sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex270sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex271sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex272sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex273sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex274sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex275sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex276sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex277sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex278sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex279sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex280sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex281sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex282sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex283sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex284sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex285sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex286sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex287sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex288sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex289sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex290sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex291sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex292sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex293sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex294sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex295sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex296sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex297sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex298sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex299sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex300sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex301sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex303sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,SEw, MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,'\n    *3*', MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,'\n    *2*', MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,'\n    *1*', MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,'\n    *Bye, Bye!*', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex303sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex304sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex305sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex306sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex307sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex308sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex309sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex310sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex311sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex312sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex313sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex314sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex315sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex316sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex317sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex318sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex319sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex320sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex321sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex322sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex323sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex324sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex325sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex326sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex327sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }    
        /*
          else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302sew.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        */
    }
}));

QueenSew.newcmdaddtosew({on: 'text', fromMe: false, delownsewcmd: false}, (async (message, match) => {
var baduse = await Pach.badon(Config.LANG)
        let regexa1sew = new RegExp(baduse.one)
        let regexa2sew = new RegExp(baduse.two)
        let regexa3sew = new RegExp(baduse.four)
/*
        let regex4sew = new RegExp(baduse.aa1a)
        let regex5sew = new RegExp(baduse.aa2a)
        let regex6sew = new RegExp(baduse.aa3a)
        let regex7sew = new RegExp(baduse.aa4a)
        let regex8sew = new RegExp(baduse.aa5a)
        let regex9sew = new RegExp(baduse.aa6a)
        let regex10sew = new RegExp(baduse.aa7a)
        let regex11sew = new RegExp(baduse.aa8a)
        let regex12sew = new RegExp(baduse.aa9a)
        let regex13sew = new RegExp(baduse.aa10a)
*/

                if (regexa1sew.test(message.message)) {
                await message.client.sendMessage(message.jid,baduse.three, MessageType.text )
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        } 
        else if (regexa2sew.test(message.message)) {
        await message.client.sendMessage(message.jid,baduse.three, MessageType.text )
            var im = await checkImAdmin(message)
            if (!im) return;
           await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
        /*
         else if (regexa4sew.test(message.message)) {
         await message.client.sendMessage(message.jid,baduse.three, MessageType.text )
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
        */
        else if (regexa3sew.test(message.message)) {
        await message.client.sendMessage(message.jid,baduse.three, MessageType.text )
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
      /*
        else if (regexa5sew.test(message.message)) {
        await message.client.sendMessage(message.jid,baduse.three, MessageType.text )
            var im = await checkImAdmin(message)
            if (!im) return;
           await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
        
         else if (regexa6sew.test(message.message)) {
         await message.client.sendMessage(message.jid,baduse.three, MessageType.text )
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
        
        else if (regexa7sew.test(message.message)) {
        await message.client.sendMessage(message.jid,baduse.three, MessageType.text )
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
        else if (regexa8sew.test(message.message)) {
        await message.client.sendMessage(message.jid,baduse.three, MessageType.text )
            var im = await checkImAdmin(message)
            if (!im) return;
           await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
        
         else if (regexa9sew.test(message.message)) {
         await message.client.sendMessage(message.jid,baduse.three, MessageType.text )
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
        
        else if (regexa10sew.test(message.message)) {
        await message.client.sendMessage(message.jid,baduse.three, MessageType.text )
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
        else if (regexa11sew.test(message.message)) {
        await message.client.sendMessage(message.jid,baduse.three, MessageType.text )
            var im = await checkImAdmin(message)
            if (!im) return;
           await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
        
         else if (regexa12sew.test(message.message)) {
         await message.client.sendMessage(message.jid,baduse.three, MessageType.text )
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
        
        else if (regexa13sew.test(message.message)) {
        await message.client.sendMessage(message.jid,baduse.three, MessageType.text )
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
*/
}));

// Inbox Block System
// This Plugins By Ravindu Manoj
const INBO = "✧ Inbox Not Allowed... Good Bye ✧"
 if (Config.INBO == 'true') {
QueenSew.newcmdaddtosew({on: 'text', fromMe: false, delownsewcmd: false, onlyPm: true }, (async (message, match) => {
        let regexb1sew = new RegExp('.')
        let regexb2sew = new RegExp('a')
        let regexb3sew = new RegExp('e')
        let regexb4sew = new RegExp('i')
        let regexb5sew = new RegExp('o')
        let regexb6sew = new RegExp('u')
// export data -(Ravindu Manoj)
          if (regexb1sew.test(message.message)) {
            await message.client.sendMessage(message.jid, '*' + INBO + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          } 
        else if (regexb2sew.test(message.message)) {
           await message.client.sendMessage(message.jid, '*' + INBO + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
         else if (regexb3sew.test(message.message)) {
            await message.client.sendMessage(message.jid, '*' + INBO + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
        else if (regexb4sew.test(message.message)) {
            await message.client.sendMessage(message.jid, '*' + INBO + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb5sew.test(message.message)) {
            await message.client.sendMessage(message.jid, '*' + INBO + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb6sew.test(message.message)) {
            await message.client.sendMessage(message.jid, '*' + INBO + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
}));

}
}

