// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: import('../sim/dex-formats').FormatList = [

	// S/V Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "S/V Singles",
	},
	{
		name: "[Gen 9] Unrated Random Battle",
		mod: 'gen9',
		team: 'random',
		challengeShow: false,
		rated: false,
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
	}
	{
		name: "[Gen 9] OU",
		mod: 'gen9',
		ruleset: ['Standard', 'Sleep Moves Clause', '!Sleep Clause Mod'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Shed Tail'],
	},
	{
		name: "[Gen 9] Ubers",
		mod: 'gen9',
		ruleset: ['Standard'],
		banlist: ['AG', 'Moody', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Last Respects'],
	},
	{
		name: "[Gen 9] UU",
		mod: 'gen9',
		ruleset: ['[Gen 9] OU'],
		banlist: ['OU', 'UUBL'],
	},
	{
		name: "[Gen 9] RU",
		mod: 'gen9',
		ruleset: ['[Gen 9] UU'],
		banlist: ['UU', 'RUBL', 'Light Clay'],
	},
	{
		name: "[Gen 9] NU",
		mod: 'gen9',
		ruleset: ['[Gen 9] RU'],
		banlist: ['RU', 'NUBL', 'Drought', 'Quick Claw'],
	},
	{
		name: "[Gen 9] PU",
		mod: 'gen9',
		ruleset: ['[Gen 9] NU'],
		banlist: ['NU', 'PUBL', 'Damp Rock'],
	},
	{
		name: "[Gen 9] LC",
		mod: 'gen9',
		ruleset: ['Little Cup', 'Standard'],
		banlist: [
			'Aipom', 'Basculin-White-Striped', 'Cutiefly', 'Diglett-Base', 'Dunsparce', 'Duraludon', 'Flittle', 'Gastly', 'Girafarig', 'Gligar',
			'Meditite', 'Misdreavus', 'Murkrow', 'Porygon', 'Qwilfish-Hisui', 'Rufflet', 'Scraggy', 'Scyther', 'Sneasel', 'Sneasel-Hisui',
			'Snivy', 'Stantler', 'Voltorb-Hisui', 'Vulpix', 'Vulpix-Alola', 'Yanma', 'Moody', 'Heat Rock', 'Baton Pass', 'Sticky Web',
		],
	},
	{
		name: "[Gen 9] Monotype",
		mod: 'gen9',
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Same Type Clause', 'Terastal Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Baxcalibur', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Blaziken', 'Deoxys-Normal', 'Deoxys-Attack',
			'Dialga', 'Dialga-Origin', 'Espathra', 'Eternatus', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Iron Bundle', 'Kingambit', 'Koraidon',
			'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane',
			'Palafin', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Solgaleo', 'Ursaluna-Bloodmoon', 'Urshifu-Single-Strike',
			'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Moody', 'Shadow Tag', 'Booster Energy', 'Damp Rock', 'Focus Band',
			'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Smooth Rock', 'Acupressure', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] Custom Game",
		mod: 'gen9',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},

	// S/V Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "S/V Doubles",
	},
	{
		name: "[Gen 9] Random Doubles Battle",
		mod: 'gen9',
		gameType: 'doubles',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Illusion Level Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 9] Doubles OU",
		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'Evasion Abilities Clause'],
		banlist: ['DUber', 'Shadow Tag'],
	},
	{
		name: "[Gen 9] Doubles Ubers",
		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', '!Gravity Sleep Clause'],
	},
	{
		name: "[Gen 9] Doubles UU",
		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['[Gen 9] Doubles OU'],
		banlist: ['DOU', 'DBL'],
	},
	{
		name: "[Gen 9] Doubles LC",
		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Doubles', 'Little Cup', 'Sleep Clause Mod'],
		banlist: ['Basculin-White-Striped', 'Dunsparce', 'Duraludon', 'Girafarig', 'Gligar', 'Murkrow', 'Qwilfish-Hisui', 'Scyther', 'Sneasel', 'Sneasel-Hisui', 'Vulpix', 'Vulpix-Alola', 'Yanma'],
	},	{
		name: "[Gen 9] Doubles Custom Game",
		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},

	// S/V Doubles

	// Pet Mods
	///////////////////////////////////////////////////////////////////

	{
		section: "Pet Mods",
	},
	{
		name: "[Gen 9] Little Colosseum LC",
		desc: `A Little Cup metagame that aims to buff weaker Pokemon and nerf LC Ubers to create a more diverse metagame.`,
		mod: 'littlecolosseum',
		searchShow: false,
		ruleset: ['Little Cup', 'Standard'],
		banlist: [
			'Aipom', 'Basculin-White-Striped', 'Diglett-Base', 'Dunsparce', 'Duraludon', 'Flittle', 'Girafarig', 'Gligar',
			'Meditite', 'Misdreavus', 'Murkrow', 'Porygon', 'Qwilfish-Hisui', 'Rufflet', 'Scraggy', 'Scyther', 'Sneasel', 'Sneasel-Hisui',
			'Snivy', 'Stantler', 'Vulpix', 'Vulpix-Alola', 'Yanma', 'Moody', 'Baton Pass', 'Sticky Web',
		],
		onBegin() {
			this.add('-message', `Welcome to Little Colosseum!`);
			this.add('-message', `This is a Generation 9 LC-based Pet Mod where multiple Pokemon have been reimagined in order to fit the LC metagame.`);
			this.add('-message', `You can find our thread and metagame resources here:`);
			this.add('-message', `https://www.smogon.com/forums/threads/3749020/`);
		},
		onSwitchIn(pokemon) {
			this.add('-start', pokemon, 'typechange', (pokemon.illusion || pokemon).getTypes(true).join('/'), '[silent]');
			pokemon.apparentType = pokemon.getTypes(true).join('/');
		},
	},

	// Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		section: "Other Metagames",
		column: 2,
	},
	{
		name: "[Gen 9] Mix and Mega",
		desc: `Mega evolve any Pok&eacute;mon with any mega stone, or transform them with Genesect Drives, Primal orbs, Origin orbs, Rusted items, Ogerpon Masks, Arceus Plates, and Silvally Memories with no limit. Mega and Primal boosts based on form changes from gen 7.`,
		mod: 'mixandmega',
		ruleset: ['Standard OMs', 'Evasion Items Clause', 'Evasion Abilities Clause', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Calyrex-Shadow', 'Koraidon', 'Kyogre', 'Miraidon', 'Moody', 'Shadow Tag', 'Beedrillite', 'Blazikenite', 'Gengarite',
			'Kangaskhanite', 'Mawilite', 'Medichamite', 'Pidgeotite', 'Red Orb', 'Rusted Sword', 'Baton Pass', 'Shed Tail',
		],
		restricted: [
			'Arceus', 'Basculegion-M', 'Calyrex-Ice', 'Deoxys-Normal', 'Deoxys-Attack', 'Dialga', 'Eternatus', 'Flutter Mane',
			'Gengar', 'Gholdengo', 'Giratina', 'Gouging Fire', 'Groudon', 'Ho-Oh', 'Iron Bundle', 'Kyurem-Black', 'Kyurem-White', 'Lugia',
			'Lunala', 'Manaphy', 'Mewtwo', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Rayquaza', 'Regigigas', 'Reshiram',
			'Slaking', 'Sneasler', 'Solgaleo', 'Ursaluna-Bloodmoon', 'Urshifu-Single-Strike', 'Zacian', 'Zekrom',
		],
		onValidateTeam(team) {
			const itemTable = new Set<ID>();
			for (const set of team) {
				const item = this.dex.items.get(set.item);
				if (!(item.forcedForme && !item.zMove) && !item.megaStone &&
					!item.isPrimalOrb && !item.name.startsWith('Rusted')) continue;
				const natdex = this.ruleTable.has('standardnatdex');
				if (natdex && item.id !== 'ultranecroziumz') continue;
				const species = this.dex.species.get(set.species);
				if (species.isNonstandard && !this.ruleTable.has(`+pokemontag:${this.toID(species.isNonstandard)}`)) {
					return [`${species.baseSpecies} does not exist in gen 9.`];
				}
				if (((item.itemUser?.includes(species.name) || item.forcedForme === species.name) &&
					!item.megaStone && !item.isPrimalOrb) || (natdex && species.name.startsWith('Necrozma-') &&
						item.id === 'ultranecroziumz')) {
					continue;
				}
				if (this.ruleTable.isRestrictedSpecies(species) || this.toID(set.ability) === 'powerconstruct') {
					return [`${species.name} is not allowed to hold ${item.name}.`];
				}
				if (itemTable.has(item.id)) {
					return [
						`You are limited to one of each Mega Stone/Primal Orb/Rusted item/Origin item/Ogerpon Mask/Arceus Plate/Silvally Memory.`,
						`(You have more than one ${item.name})`,
					];
				}
				itemTable.add(item.id);
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.m.originalSpecies = pokemon.baseSpecies.name;
			}
		},
		onSwitchIn(pokemon) {
			const originalSpecies = this.dex.species.get((pokemon.species as any).originalSpecies);
			if (originalSpecies.exists && pokemon.m.originalSpecies !== originalSpecies.baseSpecies) {
				// Place volatiles on the Pokémon to show its mega-evolved condition and details
				this.add('-start', pokemon, originalSpecies.requiredItems?.[0] || originalSpecies.requiredItem || originalSpecies.requiredMove, '[silent]');
				const oSpecies = this.dex.species.get(pokemon.m.originalSpecies);
				if (oSpecies.types.length !== pokemon.species.types.length || oSpecies.types[1] !== pokemon.species.types[1] ||
					oSpecies.types[0] !== pokemon.species.types[0]) {
					this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
				}
			}
		},
		onSwitchOut(pokemon) {
			const originalSpecies = this.dex.species.get((pokemon.species as any).originalSpecies);
			if (originalSpecies.exists && pokemon.m.originalSpecies !== originalSpecies.baseSpecies) {
				this.add('-end', pokemon, originalSpecies.requiredItems?.[0] || originalSpecies.requiredItem || originalSpecies.requiredMove, '[silent]');
			}
		},
	},
	{
		name: "[Gen 9] Shared Power",
		desc: `Once a Pok&eacute;mon switches in, its ability is shared with the rest of the team.`,
		mod: 'sharedpower',
		ruleset: ['Standard OMs', 'Evasion Abilities Clause', 'Evasion Items Clause', 'Sleep Moves Clause'],
		banlist: [
			'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Conkeldurr', 'Deoxys-Attack', 'Eternatus', 'Greninja', 'Kingambit', 'Kyogre', 'Kyurem-Black', 'Kyurem-White',
			'Koraidon', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Hearthflame', 'Palafin', 'Rayquaza', 'Regieleki', 'Reshiram',
			'Rillaboom', 'Scizor', 'Shaymin-Sky', 'Spectrier', 'Sneasler', 'Zacian', 'Zacian-Crowned', 'Zamazenta-Crowned', 'Zekrom', 'Arena Trap', 'Moody', 'Neutralizing Gas',
			'Shadow Tag', 'Speed Boost', 'Stench', 'Swift Swim', 'King\'s Rock', 'Leppa Berry', 'Razor Fang', 'Starf Berry', 'Baton Pass', 'Extreme Speed', 'Last Respects',
		],
		unbanlist: ['Arceus-Bug', 'Arceus-Dragon', 'Arceus-Fire', 'Arceus-Ice'],
		restricted: [
			'Armor Tail', 'Chlorophyll', 'Comatose', 'Contrary', 'Dazzling', 'Fur Coat', 'Gale Wings', 'Good as Gold', 'Huge Power', 'Ice Scales', 'Illusion', 'Imposter',
			'Magic Bounce', 'Magic Guard', 'Magnet Pull', 'Mold Breaker', 'Multiscale', 'Poison Heal', 'Prankster', 'Protosynthesis', 'Psychic Surge', 'Pure Power',
			'Purifying Salt', 'Quark Drive', 'Queenly Majesty', 'Quick Draw', 'Quick Feet', 'Regenerator', 'Sand Rush', 'Simple', 'Slush Rush', 'Stakeout', 'Stamina',
			'Sturdy', 'Surge Surfer', 'Technician', 'Tinted Lens', 'Triage', 'Unaware', 'Unburden', 'Water Bubble',
		],
		onValidateRule() {
			if (this.format.gameType !== 'singles') {
				throw new Error(`Shared Power currently does not support ${this.format.gameType} battles.`);
			}
		},
		getSharedPower(pokemon) {
			const sharedPower = new Set<string>();
			for (const ally of pokemon.side.pokemon) {
				if (pokemon.battle.ruleTable.isRestricted(`ability:${ally.baseAbility}`)) continue;
				if (ally.previouslySwitchedIn > 0) {
					if (pokemon.battle.dex.currentMod !== 'sharedpower' && ['trace', 'mirrorarmor'].includes(ally.baseAbility)) {
						sharedPower.add('noability');
						continue;
					}
					sharedPower.add(ally.baseAbility);
				}
			}
			sharedPower.delete(pokemon.baseAbility);
			return sharedPower;
		},
		onBeforeSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedPower) format = this.dex.formats.get('gen9sharedpower');
			for (const ability of format.getSharedPower!(pokemon)) {
				const effect = 'ability:' + ability;
				pokemon.volatiles[effect] = this.initEffectState({id: this.toID(effect), target: pokemon});
				if (!pokemon.m.abils) pokemon.m.abils = [];
				if (!pokemon.m.abils.includes(effect)) pokemon.m.abils.push(effect);
			}
		},
	},
	{
		name: "[Gen 9] STABmons",
		desc: `Pok&eacute;mon can use any move of their typing, in addition to the moves they can normally learn.`,
		mod: 'gen9',
		ruleset: ['Standard OMs', 'STABmons Move Legality', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Araquanid', 'Arceus', 'Azumarill', 'Baxcalibur', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Deoxys-Normal', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin',
			'Dragapult', 'Dragonite', 'Enamorus-Incarnate', 'Eternatus', 'Flutter Mane', 'Garchomp', 'Giratina', 'Giratina-Origin', 'Gouging Fire', 'Groudon', 'Ho-Oh', 'Iron Bundle',
			'Kingambit', 'Komala', 'Koraidon', 'Kyogre', 'Kyurem-Base', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Incarnate', 'Lugia', 'Lunala', 'Magearna', 'Manaphy', 'Mewtwo',
			'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Hearthflame', 'Ogerpon-Wellspring', 'Palkia', 'Palkia-Origin', 'Porygon-Z', 'Rayquaza', 'Reshiram',
			'Roaring Moon', 'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Terapagos', 'Ursaluna', 'Ursaluna-Bloodmoon', 'Urshifu-Single-Strike', 'Zacian', 'Zacian-Crowned', 'Zamazenta-Crowned',
			'Zekrom', 'Zoroark-Hisui', 'Arena Trap', 'Moody', 'Shadow Tag', 'Damp Rock', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Rage Fist', 'Shed Tail',
		],
		restricted: [
			'Astral Barrage', 'Acupressure', 'Belly Drum', 'Clangorous Soul', 'Ceaseless Edge', 'Dire Claw', 'Dragon Energy', 'Electro Shot', 'Extreme Speed', 'Fillet Away', 'Final Gambit',
			'Flower Trick', 'Gigaton Hammer', 'No Retreat', 'Revival Blessing', 'Shell Smash', 'Shift Gear', 'Triple Arrows', 'V-create', 'Victory Dance', 'Wicked Blow', 'Wicked Torque',
		],
	},

	// National Dex
	///////////////////////////////////////////////////////////////////

	{
		section: "National Dex",
	},
	{
		name: "[Gen 9] National Dex",
		mod: 'gen9',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod', 'Terastal Clause'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock',
			'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
	},

	// Past Gens OU
	///////////////////////////////////////////////////////////////////

	{
		section: "Past Gens OU",
		column: 4,
	},
	{
		name: "[Gen 8] OU",
		mod: 'gen8',
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Power Construct', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Baton Pass'],
	},
	{
		name: "[Gen 7] OU",
		mod: 'gen7',
		ruleset: ['Standard'],
		banlist: ['Uber', 'Arena Trap', 'Power Construct', 'Shadow Tag', 'Baton Pass'],
	},
	{
		name: "[Gen 6] OU",
		mod: 'gen6',
		ruleset: ['Standard', 'Swagger Clause'],
		banlist: ['Uber', 'Arena Trap', 'Shadow Tag', 'Soul Dew', 'Baton Pass'],
	},

	// Past Gens Doubles OU
	///////////////////////////////////////////////////////////////////

	{
		section: "Past Gens Doubles OU",
		column: 4,
	},
	{
		name: "[Gen 8] Doubles OU",
		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'Dynamax Clause', 'Swagger Clause'],
		banlist: ['DUber', 'Power Construct', 'Shadow Tag'],
	},
	{
		name: "[Gen 7] Doubles OU",
		mod: 'gen7',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'Swagger Clause'],
		banlist: ['DUber', 'Power Construct', 'Eevium Z', 'Dark Void'],
	},
	{
		name: "[Gen 6] Doubles OU",
		mod: 'gen6',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'Swagger Clause'],
		banlist: ['DUber', 'Soul Dew', 'Dark Void'],
	},
];
