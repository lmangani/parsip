# parsip
A straight-forward SIP/SDP parser for Node/JS

## Usage
var parsip = require('parsip');

var sip_message = "..." // Valid SIP Message here

parsip.getSIP(sip_message);
parsip.getSDP(sip_message || sip_message.body);

### License
ParSIP is released under the MIT License

### Acknowledgement
Based on elements from `TSSIP` and `SDP-Tranform` packages
