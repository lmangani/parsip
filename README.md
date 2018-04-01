
# parSIP <img src="https://user-images.githubusercontent.com/1423657/38137158-590eefbc-3423-11e8-96dd-487022b5618c.gif" width=200 /><img src="https://travis-ci.org/lmangani/parsip.svg?branch=master"/>

A straight-forward SIP/SDP parsing module for Node/JS

## Usage
```
var parsip = require('parsip');
var sip_message = "..." // Valid SIP Message here

/* SIP */
var sip = parsip.getSIP(sip_message);

/* SDP */
var sdp = parsip.getSDP(sip.body);
```

```
/* VQ PUBLISH Extraction */
if (sip.headers['Content-Type'][0].raw == 'application/vq-rtcpxr'){
  var vqj = parsip.getVQ(sip.headers.Packetloss[0].raw);
  // { NLR: '0.0', JDR: '0.0' }
}
```

### License
ParSIP is released under the MIT License

### Acknowledgement
Based on elements from the awesome [jsSIP](https://github.com/versatica/JsSIP) and `SDP-Tranform` packages
