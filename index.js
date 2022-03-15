var tmi = require('tmi.js');
var dotenv = require('dotenv').config();

var index = 1;

const client = new tmi.Client({
	connection: {
		reconnect: true,
		reconnectInterval: 500,
		maxReconnectInterval: 2000
	},
	channels: ["homyatol", "panetty"],
	identity: {
		username: process.env.NICKNAME,
		password: process.env.OAUTH
	},
});

client.connect();

client.on("connected", () => {
    console.log("Connesso");
});

client.on("disconnected", () => {
    console.log("Disconnesso");
});

client.on("message", (channel, tags, message, self) => {
    if(tags["display-name"] == process.env.NICKNAME){
        if(index == 29) index = 1;
        else index++;
        switch(index){
            case 1:
                getNewColor("#b52828")
            break;
            case 2:
                getNewColor("#b53628")
            break;
            case 3:
                getNewColor("#b54228")
            break;
            case 4:
                getNewColor("#b55228")
            break;
            case 5:
                getNewColor("#b55e28")
            break;
            case 6:
                getNewColor("#b56528")
            break;
            case 7:
                getNewColor("#b56e28")
            break;
            case 8:
                getNewColor("#b57628")
            break;
            case 9:
                getNewColor("#b58428")
            break;
            case 10:
                getNewColor("#b5a928")
            break;
            case 11:
                getNewColor("#a7b528")
            break;
            case 12:
                getNewColor("#84b528")
            break;
            case 13:
                getNewColor("#6eb528")
            break;
            case 14:
                getNewColor("#42b528")
            break;
            case 15:
                getNewColor("#28b54b")
            break;
            case 16:
                getNewColor("#28b57a")
            break;
            case 17:
                getNewColor("#28b5a2")
            break;
            case 18:
                getNewColor("#2899b5")
            break;
            case 19:
                getNewColor("#2867b5")
            break;
            case 20:
                getNewColor("#2831b5")
            break;
            case 21:
                getNewColor("#2a28b5")
            break;
            case 22:
                getNewColor("#4b28b5")
            break;
            case 23:
                getNewColor("#6528b5")
            break;
            case 24:
                getNewColor("#8128b5")
            break;
            case 25:
                getNewColor("#9628b5")
            break;
            case 26:
                getNewColor("#b528b5")
            break;
            case 27:
                getNewColor("#b5288d")
            break;
            case 28:
                getNewColor("#b5286a")
            break;
            case 29:
                getNewColor("#b52849")
            break;
            default:
                getNewColor("#000000")
            break;
        }
    }
});

function getNewColor(color){
    client.color(color).then((data) => {
        console.log("Nuovo colore " + data[0]);
    }).catch((err) => {
        console.log("Errore: " + err);
    });
}
