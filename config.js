const fs = require("fs")
const chalk = require("chalk")

global.available = true
global.autoReadGc = true
global.autoReadAll = false
global.antitags = true


global.ownernomer = "2349063310146" 
global.Owner = ['2349063310146']  // -- Add multiple numbers like  ['918101967835','919357940276','917896587453']
global.OwnerNumber = ['2349063310146']  // -- Add multiple numbers like  ['918101967835','919357940276','917896587453']
global.ownertag = ['2349063310146']  // -- Add multiple numbers like  ['918101967835','919357940276','917896587453']
global.BotName = "Rina"
global.packname = "Created For PĒTĒR"
global.author = "MOAD"
global.OwnerName = "PĒTĒR"
global.BotSourceCode = "https://github.com/Sebi127391/Miku-MD32" // -- Please don't change -- //
global.SupportGroupLink = "https://chat.whatsapp.com/HJdkbRo9SyqHQnRAVGDqdW"  // -- Please don't change -- //
global.sessionName = "session"  // -- Don't change otherwise bot will not work -- //



global.prefa = ['$'] // Prefix ---  change it to anythong you want except '@' //


global.location = "West-Berlin"
global.reactmoji = "❤️"
global.themeemoji = "💖"
global.vidmenu = { url: 'https://c.tenor.com/YGuLegQWubwAAAPo/miku-nakano-gotoubun-no-hanayome.mp4' }
global.websitex = "https://github.com/Kai0071"
global.lolhuman = "Sebastian"


global.BotLogo = fs.readFileSync("./Assets/pic1.jpg")
global.Thumb = fs.readFileSync("./Assets/pic9.jpg")
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg")
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg")


global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.mess = {
    jobdone: "We're Done Here!!!...",
    useradmin: "I'm sorry, only group admins can use this command 😌!",
    botadmin: "I'm sorry, I cannot execute this command without being an Admin of this group 😔.",
    botowner: "Only my owner... PĒTĒR can use this command, Baka!",
    grouponly: "This command is only valid for Groups, Baka!",
    privateonly: "This command is only intended for Private Chats, Baka!",
    botonly: "Only the bot itself can use this command!",
    waiting: '.........',
    nolink: "Please give me a link 🙄",
    error: 'An error occurred!',
    banned: "It is forbidden for you to this use command!",
    bangc: "You're unable to use such commands!",
    nonsfw: "Don't be a perverted idiot 👉👈! No NSFW here"
    
}


global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}


global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': '5d1197db351b',
}


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
