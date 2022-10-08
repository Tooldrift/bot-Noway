const Eris = require("eris");
const keepAlive = require("./server");
keepAlive();

const bot = new Eris(process.env.token);
//حقوق عمر .*omar#6277
bot.connect()

