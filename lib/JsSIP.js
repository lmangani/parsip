/**
 * Dependencies.
 */
var debug = require('debug')('JsSIP');
var adapter = require('webrtc-adapter');
var pkg = require('../package.json');

debug('version %s', pkg.version);

var C = require('./Constants');
var Exceptions = require('./Exceptions');
var Utils = require('./Utils');
var UA = require('./UA');
var URI = require('./URI');
var NameAddrHeader = require('./NameAddrHeader');
var Grammar = require('./Grammar');
var WebSocketInterface = require('./WebSocketInterface');


/**
 * Expose the JsSIP module.
 */
var JsSIP = module.exports = {
  C: C,
  Exceptions: Exceptions,
  Utils: Utils,
  UA: UA,
  URI: URI,
  NameAddrHeader: NameAddrHeader,
  WebSocketInterface: WebSocketInterface,
  Grammar: Grammar,
  // Expose the debug module.
  debug: require('debug'),
  // Expose the adapter module.
  adapter: adapter
};


Object.defineProperties(JsSIP, {
  name: {
    get: function() { return pkg.title; }
  },

  version: {
    get: function() { return pkg.version; }
  }
});
