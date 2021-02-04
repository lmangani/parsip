/* parsip core */

const SIPParser = require('./lib/Parser');
const SDPParser = require('sdp-transform');
const jwtDecode = require("jwt-decode")


const Functions = {
	getSIP: SIPParser.parseMessage,
	getSDP: SDPParser.parse,
	getVQ: SIPParser.parseVQ,
	getJWT: jwtDecode
}
module.exports = Functions;
