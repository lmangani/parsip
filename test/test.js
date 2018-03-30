/* parsip core */

var expect    = require("chai").expect;
const parsip = require('../index');

const testmessage = 'INVITE sip:5000@sip.botauro.com;user=phone SIP/2.0\r\n\
Via: SIP/2.0/TCP 192.168.178.22:38488;branch=z9hG4bK1428069545;rport;alias\r\n\
From: "Lorenzo250" <sip:250@sip.botauro.com;user=phone>;tag=1459587455\r\n\
To: <sip:5000@sip.botauro.com;user=phone>\r\n\
Call-ID: 2015279366-5066-167@BJC.BGI.BHI.CC\r\n\
CSeq: 1661 INVITE\r\n\
Contact: "Lorenzo250" <sip:250@192.168.178.22:38488;transport=tcp;user=phone>\r\n\
Proxy-Authorization: Digest username="250", realm="sip.botauro.com", nonce="72424e0c-340a-11e8-aad5-65f47132e286", uri="sip:5000@sip.botauro.com;user=phone", response="c135e30edbf6b09aa90d9717700cba19", algorithm=MD5, cnonce="06889959", qop=auth, nc=00000d1b\r\n\
Max-Forwards: 70\r\n\
User-Agent: Grandstream GXP2200 1.0.3.27\r\n\
Privacy: none\r\n\
P-Preferred-Identity: "Lorenzo250" <sip:250@sip.botauro.com;user=phone>\r\n\
Supported: replaces, path, timer, eventlist\r\n\
Allow: INVITE, ACK, OPTIONS, CANCEL, BYE, SUBSCRIBE, NOTIFY, INFO, REFER, UPDATE, MESSAGE\r\n\
Content-Type: application/sdp\r\n\
Accept: application/sdp, application/dtmf-relay\r\n\
Content-Length:   309\r\n\
\r\n\
v=0\r\n\
o=- 20518 0 IN IP4 203.0.113.1\r\n\
s= \r\n\
t=0 0\r\n\
c=IN IP4 203.0.113.1\r\n\
a=ice-ufrag:F7gI\r\n\
a=ice-pwd:x9cml/YzichV2+XlhiMu8g\r\n\
a=fingerprint:sha-1 42:89:c5:c6:55:9d:6e:c8:e8:83:55:2a:39:f9:b6:eb:e9:a3:a9:e7\r\n\
m=audio 54400 RTP/SAVPF 0 96\r\n\
a=rtpmap:0 PCMU/8000\r\n\
a=rtpmap:96 opus/48000\r\n\
a=ptime:20\r\n\
a=sendrecv\r\n\
a=candidate:0 1 UDP 2113667327 203.0.113.1 54400 typ host\r\n\
a=candidate:1 2 UDP 2113667326 203.0.113.1 54401 typ host\r\n\
m=video 55400 RTP/SAVPF 97 98\r\n\
a=rtpmap:97 H264/90000\r\n\
a=fmtp:97 profile-level-id=4d0028;packetization-mode=1\r\n\
a=rtpmap:98 VP8/90000\r\n\
a=sendrecv\r\n\
a=candidate:0 1 UDP 2113667327 203.0.113.1 55400 typ host\r\n\
a=candidate:1 2 UDP 2113667326 203.0.113.1 55401 typ host\r\n\
';


describe("ParSIP", function() {
 describe("SIP Parser", function() {
    it("From Header", function() {
      var decoded = parsip.getSIP(testmessage);
      expect(decoded.from.uri._scheme).to.equal("sip");
      expect(decoded.from.uri._user).to.equal("250");
      expect(decoded.from.parameters.tag).to.equal("1459587455");
    });
  });
});
