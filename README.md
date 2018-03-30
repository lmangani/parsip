
# parSIP <img src="https://user-images.githubusercontent.com/1423657/38137158-590eefbc-3423-11e8-96dd-487022b5618c.gif" width=200 />

A straight-forward SIP/SDP parsing module for Node/JS

## Usage
```
var parsip = require('parsip');
var sip_message = "..." // Valid SIP Message here

parsip.getSIP(sip_message);
parsip.getSDP(sip_message || sip_message.body);
```

### License
ParSIP is released under the MIT License

### Acknowledgement
Based on elements from `TSSIP` and `SDP-Tranform` packages
