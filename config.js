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
global.caption = process.env.CAPTION || global.caption || "© RandewTechInfo" 


global.devs = "94763412103" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "94763412103";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94763412103";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_08_11_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDc5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgODUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNixcbiAgICAgICAgNTUsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTEzLFxuICAgICAgICA0MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTY2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDkxLFxuICAgICAgICA5NixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMyxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEyLFxuICAgICAgICA3MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyOSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM0LFxuICAgICAgICA0MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA0MSxcbiAgICAgICAgNjksXG4gICAgICAgIDExMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjksXG4gICAgICAgIDIyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDMzLFxuICAgICAgICA3NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDc4LFxuICAgICAgICA4NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2MixcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjksXG4gICAgICAgIDI3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxLFxuICAgICAgICAyMzksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAzMixcbiAgICAgICAgNjEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTksXG4gICAgICAgIDQ2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjI0LFxuICAgICAgICA3MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxODAsXG4gICAgICAgIDQwLFxuICAgICAgICA0MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDU0LFxuICAgICAgICAyNCxcbiAgICAgICAgODcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzksXG4gICAgICAgIDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIxLFxuICBcImFkdlNlY3JldEtleVwiOiBcInhzV2k4ejZlNWJlQkZFOWx6VytYU0FmY0JERjEvNkxUeXpkU2RyNW5McFU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjBXRV83b1puU0otVWVkUEJOLU5DLXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmNkNDZjMTEtOGVlMC00ZTA4LTgwOWItMTMyZDNhNzU2ZWMyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NCxcbiAgICAgIDE2OSxcbiAgICAgIDI0MCxcbiAgICAgIDYxLFxuICAgICAgMTQ4LFxuICAgICAgMTE2LFxuICAgICAgMTU4LFxuICAgICAgMjQ2LFxuICAgICAgMTg1LFxuICAgICAgMTc0LFxuICAgICAgMTUwLFxuICAgICAgMTEzLFxuICAgICAgNDksXG4gICAgICAyNDgsXG4gICAgICAxMCxcbiAgICAgIDQxLFxuICAgICAgMzksXG4gICAgICAyNCxcbiAgICAgIDIyMCxcbiAgICAgIDE0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MSxcbiAgICAgIDExMyxcbiAgICAgIDYyLFxuICAgICAgMTIwLFxuICAgICAgMjM0LFxuICAgICAgOTEsXG4gICAgICA2MixcbiAgICAgIDExLFxuICAgICAgOTcsXG4gICAgICAyNDIsXG4gICAgICAyMTAsXG4gICAgICAyMzUsXG4gICAgICAxMzQsXG4gICAgICAxMDQsXG4gICAgICAxMjgsXG4gICAgICAzNCxcbiAgICAgIDEwMCxcbiAgICAgIDc5LFxuICAgICAgMjksXG4gICAgICA4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFRVpOMUZYNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MDM1MDQxOTE6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjAwMjYyMDc3NjUzMjM1OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmp3cWQwSEVMN00wTGtHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJIT21kUDczbmM5K2pBWmVUV1BHdUY4RU0xRGNnQ3F3dDliU1ZLb1piYVZvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjhKbXVZL3NOWHcxN094ZkMrUG5aS0dGSWJpdDdKZDd6U0hNNnk3dTBCNGFNMCt4cDErY1NBTnJvTEp6NE1OYWVUOHNmR3BuWllVbGU1bGErYmExTUN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInZRakIzZEh3ZGNiYjFZdTVFOXQ2d2I5RndRemF4a3hzeDRXRExyVG1aMWNUQTFTbFdnNy9tak50N25rSW5mSDhNN1laK1RuR2FWcUF3cC9vRjlnTENnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzAzNTA0MTkxOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxNDcwOTEzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUEdKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQR0ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHNDhHUFNESlpad0xkelg4ZEhWV3BJViszdWY3VTZ0bDlTZzFFbmlvNVM0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNzQ3Njk0OTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzEzODg2OTUzMTVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "POWER BY ᳆⃞🇱🇰⃟ ʀͥᴇᷧᴀͫʟᴷⁱⁿᴳ᭄Randew" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ RandewTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@randewTechInfo"),
 
  author : process.env.PACK_AUTHER|| "᳆⃞🇱🇰⃟ ʀͥᴇᷧᴀͫʟᴷⁱⁿᴳ᭄Randew",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "©_ranDEW-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
