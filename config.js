const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_33_12_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyNixcbiAgICAgICAgODgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQyLFxuICAgICAgICA5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDc4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDksXG4gICAgICAgIDk2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTMyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDc1LFxuICAgICAgICAzOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDk1LFxuICAgICAgICA3OSxcbiAgICAgICAgMzksXG4gICAgICAgIDE5MixcbiAgICAgICAgNjksXG4gICAgICAgIDg0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEsXG4gICAgICAgIDYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMyLFxuICAgICAgICA0MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTI3LFxuICAgICAgICA4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDczLFxuICAgICAgICAxOTYsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODIsXG4gICAgICAgIDcyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDY4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU4LFxuICAgICAgICA0MixcbiAgICAgICAgNzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTYsXG4gICAgICAgIDQwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzksXG4gICAgICAgIDIwLFxuICAgICAgICA2MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjE3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NixcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI2LFxuICAgICAgICA1MixcbiAgICAgICAgMixcbiAgICAgICAgMTIyLFxuICAgICAgICAyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNSxcbiAgICAgICAgMTczLFxuICAgICAgICA3MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicG05RjQzTGdrVHZDaWM3SWltb2tqanBpcm01aS9HbGYwM253eHU4WVlzVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQ3NrOG1RMFVTeEd6QVRSUEE4WTdEUVwiLFxuICBcInBob25lSWRcIjogXCI1NGJmNTk1Yi0yYTM4LTQyNjYtYjU1YS02YzBiYTExNzZkNTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk3LFxuICAgICAgMTc5LFxuICAgICAgNTAsXG4gICAgICA1LFxuICAgICAgMTU3LFxuICAgICAgMTE1LFxuICAgICAgMTcsXG4gICAgICA0MSxcbiAgICAgIDIyMixcbiAgICAgIDQsXG4gICAgICAxNTAsXG4gICAgICAxMzIsXG4gICAgICAzNSxcbiAgICAgIDE1OSxcbiAgICAgIDUyLFxuICAgICAgMzQsXG4gICAgICAzOSxcbiAgICAgIDEzNixcbiAgICAgIDc4LFxuICAgICAgMTM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM3LFxuICAgICAgMTI0LFxuICAgICAgMjQ1LFxuICAgICAgMTM4LFxuICAgICAgMTQ0LFxuICAgICAgNDUsXG4gICAgICAyMjksXG4gICAgICAyMjAsXG4gICAgICA1NyxcbiAgICAgIDgzLFxuICAgICAgMTIsXG4gICAgICAxNTgsXG4gICAgICA3MixcbiAgICAgIDEyOSxcbiAgICAgIDIwNSxcbiAgICAgIDIxMyxcbiAgICAgIDIyNyxcbiAgICAgIDE0MCxcbiAgICAgIDIyNyxcbiAgICAgIDE1OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMMkRaNDc0U1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MDM1MDQxOTE6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwMDI2MjA3NzY1MzIzNToyN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPN3dxZDBIRU1XNjJyb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkhPbWRQNzNuYzkrakFaZVRXUEd1RjhFTTFEY2dDcXd0OWJTVktvWmJhVm89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiczNIdFRFLzdHN3Zjbm5uKzV0OUpRdFdOOUkrSlJ2WFJDT2ZPMmo5Tm5Zc3JUWmMrM29mUVRObzBicStjbkxBVDNpMTdtL1pTUHJYeU42Vm1hLzExQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMlM4NjV2SXBSMWFodTF1b1JGdFVBUW80YzFaME9YdHJod3NId01UczVXSTB4WXo0M3ZJMGo1L2lBbzI1TjVXWGVIa3VDKzBFcUpRb2wvR254OW94QWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MDM1MDQxOTE6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNzI5NjA5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS1JNXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLUk0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1N3NNUlZYc2trZyt5V1puYmw0eS9CdFNPbkkyUlErR0dWYjRKc0Erc3NVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNzQ3Njk1MTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM3Mjk0NDg5OTlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
