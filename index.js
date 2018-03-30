/* parsip core */

const SIPParser = require('./lib/Parser');
const SDPParser = require('sdp-transform');

const Functions = {
	getSIP: SIPParser.parseMessage,
	getSDP: SDPParser.parse
}
module.exports = Functions;
