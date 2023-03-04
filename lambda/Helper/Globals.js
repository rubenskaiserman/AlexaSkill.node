const Helper = require('./Helper')

class Globals {
	constructor() {
        this.helper = new Helper();
		// Attributes
	}

	refresh(GLOBALS) {
		if (GLOBALS.keys().length === 0) {
			return new Globals();
		}
		// Refresh desired attributes according to your logic
	}

	// Your getters, Setters and other methods you desire
}

module.exports = Globals;
