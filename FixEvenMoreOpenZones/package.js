class Mod
{
    constructor()
    {
		Logger.info("Loading: Fix Even More Open Zones");
		
		ModLoader.onLoad["FixEvenMoreOpenZones"] = require("./src/FixEvenMoreOpenZones.js").onLoadMod;
    }
}

module.exports.Mod = new Mod();