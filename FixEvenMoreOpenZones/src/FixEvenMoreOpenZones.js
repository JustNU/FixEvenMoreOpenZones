"use strict";

class FixEvenMoreOpenZones
{
	static onLoadMod() 
	{
		const config = require("../config/config.json");
		
		for (const location in config.zones) {
			//Logger.log(DatabaseServer.tables.locations[location].base.OpenZones)
			DatabaseServer.tables.locations[location].base.OpenZones = config.zones[location]
			//Logger.log(DatabaseServer.tables.locations[location].base.OpenZones)
			
			// el debugio
			/*
			for (const wave in DatabaseServer.tables.locations[location].base.waves) {
				DatabaseServer.tables.locations[location].base.waves[wave].SpawnPoints = "";
			}
			*/
		}
	}
}
	
module.exports = FixEvenMoreOpenZones;