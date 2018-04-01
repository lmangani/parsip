
# parSIP <img src="https://user-images.githubusercontent.com/1423657/38137158-590eefbc-3423-11e8-96dd-487022b5618c.gif" width=200 /><img src="https://travis-ci.org/lmangani/parsip.svg?branch=master"/>

A straight-forward SIP/SDP parsing module for Node/JS

## Usage
#### SIP to JSON
```
var parsip = require('parsip');
var sip_message = "..." // Valid SIP Message here
var sip = parsip.getSIP(sip_message);
```

#### SDP to JSON
```
var sdp = parsip.getSDP(sip.body);
```

#### VQ PUBLISH to JSON
```
if (sip.headers['Content-Type'][0].raw == 'application/vq-rtcpxr'){
  var vqj = parsip.getVQ(sip.headers.Packetloss[0].raw);
}
```
```
{ NLR: '0.0', JDR: '0.0' }
```

#### X-RTP-Stat to JSON
```
if (hdr['X-Rtp-Stat'][0].raw){
	var xrtp = getPairs(hdr['X-Rtp-Stat'][0].raw);
}
```
```
{ EX: 'BareSip',
  CS: '1000',
  CD: '29',
  PR: '1463',
  PS: '1490',
  PL: '0,0',
  PD: '0,0',
  JI: '3.0,3.0',
  IP: '3.4.5.6:48926,1.2.3.4:12856',
  EN: 'PCMA/8000',
  DE: 'PCMA/8000' }
```

### License
ParSIP is released under the MIT License

### Acknowledgement
Based on elements from the awesome [jsSIP](https://github.com/versatica/JsSIP) and `SDP-Tranform` packages
