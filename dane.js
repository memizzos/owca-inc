const fs = require('fs-extra'); // interakcje z systemem plików
const path = require('path')

/**
 * @typedef {('chatka'|'pastwisko'|'szpital'|'fryzjer'|'produkcja'|'parking'|'rampa1'|'rampa2')} PlaceID
 */

/**
 * @typedef {Object} Owca
 * @property {PlaceID} location
 * @property {number} ID
 * @property {number} Age
 * @property {boolean} needsShaving
 * @property {boolean} broken 
 */



let owce = [];
let miejsca = {
	chatka:{},
	pastwisko:{},
	szpital:{},
	fryzjer:{},
	produkcja:{},
	parking:{
		rampa1:{},
		rampa2:{}
	}
}
const dataPath = path.join(__dirname,'data.json');
function load() {
	const file = fs.readJsonSync(dataPath)
	owce = file.owce;
	miejsca = file.miejsca;
}
function save() {
	const file = {
		owce: owce.values,
		miejsca: miejsca,
	};
	console.log(file);
	fs.writeJSONSync(dataPath,file);
}
const getOwce = ()=>owce;
const getMiejsca = ()=>miejsca;

module.exports = {
	load,
	save,
	getOwce,
	getMiejsca,
}