(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{258:function(e,t,a){e.exports=a.p+"static/media/logo.0a58105d.png"},262:function(e,t,a){e.exports=a(637)},269:function(e,t,a){},271:function(e,t,a){},273:function(e,t,a){},286:function(e,t){},307:function(e,t){},309:function(e,t){},378:function(e,t){},573:function(e,t){},633:function(e,t,a){},635:function(e,t,a){},637:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(251),l=a.n(c),o=a(24);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(27),i=a(10),u={polls:[],web3:void 0,auth:!1,verified:!1},m=Object(n.createContext)(u),d=m.Provider,p=a(2),b=a.n(p),f=a(13),E=a(122),h=a(642),v=(a(269),a(271),a(273),a(638)),y=a(641),g=a(644),N=a(643),O=a(39),j=a.n(O),w=a(639),x=a(640),C="0x6936b81d7629378aabddcf882b2a7fdfff1cd962",k=["Monday","Tuesday","Wendsday","Thursday","Friday","Saturday","Sunday"],I={BAR_CONFIG:function(e,t){return{type:"horizontalBar",responsive:!0,data:{labels:["Yes","No"],datasets:[{data:e,borderColor:"#d048b6",borderWidth:2,fill:!0}]},options:{legend:{display:!1},scales:{xAxes:[{scaleLabel:{display:!0,labelString:"Wei (ETH)"},ticks:{suggestedMin:0,max:t,callback:function(e,t,a){return e>1e8||e<-1e8?e.toExponential():e}}}]}}}},SPLINE_CONFIG:function(e,t){return{options:{lineTension:100,bezierCurve:!0,legend:{display:!1},scales:{yAxes:[{id:"yAxis1",scaleLabel:{labelString:"Wei (ETH)",display:!0},ticks:{min:-1*t,max:t,callback:function(e,t,a){return e>1e8||e<-1e8?e.toExponential():e}}},{id:"yAxis2",labels:["","Yes","","No",""],type:"category",gridLines:{drawOnChartArea:!1,display:!1}}]}},type:"line",data:e}},SPLINE_STYLE:function(e){return{label:"Data",fill:!0,backgroundColor:e,borderColor:"#d048b6",borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#d048b6",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#d048b6",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4}}},S=[{constant:!1,inputs:[{name:"_name",type:"string"},{name:"_data",type:"string"},{name:"_deadline",type:"uint64"}],name:"newVoteProposal",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,name:"proposalID",type:"uint256"},{indexed:!1,name:"issuer",type:"address"},{indexed:!1,name:"deadline",type:"uint256"},{indexed:!1,name:"name",type:"string"},{indexed:!1,name:"data",type:"string"}],name:"newProposalIssued",type:"event"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"proposals",outputs:[{name:"issuer",type:"address"},{name:"deadline",type:"uint256"},{name:"name",type:"string"},{name:"data",type:"string"}],payable:!1,stateMutability:"view",type:"function"}],F=a(252),B=a.n(F),D=a(253),_=a.n(D),L=a(254),T=a.n(L),A=a(255),W=a.n(A),P={walletconnect:{package:T.a,options:{infuraId:"INFURA_ID"}},authereum:{package:W.a,options:{}}},H=function(){return new Promise(function(){var e=Object(f.a)(b.a.mark(function e(t,a){var n,r,c;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=new _.a.Core({network:"mainnet",cacheProvider:!0,providerOptions:P}),e.next=4,n.connect();case 4:r=e.sent,c=new B.a(r),t(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t,a){return e.apply(this,arguments)}}())},M=a(258),q=a.n(M);var R=function(){var e=Object(n.useState)(r.a.createElement(function(){return r.a.createElement(v.a,{onClick:function(){return function(){return D.apply(this,arguments)}()}},"Login")},null)),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),s=Object(i.a)(l,2),u=s[0],d=s[1],p=Object(n.useState)(r.a.createElement(n.Fragment,null)),E=Object(i.a)(p,2),h=E[0],O=E[1],k=Object(n.useState)(""),I=Object(i.a)(k,2),F=(I[0],I[1],Object(n.useContext)(m)),B=F.dispatch;function D(){return(D=Object(f.a)(b.a.mark(function e(){var t,a,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H();case 3:return t=e.sent,e.next=6,t.eth.getAccounts();case 6:a=e.sent,n=new t.eth.Contract(S,C),B({payload:{web3:t,accounts:a,instance:n},type:"WEB3"}),c(r.a.createElement(_,{account:a[0]})),O(r.a.createElement(L,{account:a[0]})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),alert("Web3 login could not be detected");case 16:case"end":return e.stop()}},e,null,[[0,13]])}))).apply(this,arguments)}function _(e){var t=e.account;return r.a.createElement(n.Fragment,null,r.a.createElement(v.a,{type:"button","data-target":"#create","data-toggle":"modal"}," Create "),r.a.createElement(o.b,{to:"/profile/".concat(t)},r.a.createElement(v.a,null," Profile ")),r.a.createElement(v.a,null,"Logout"))}function L(e){var t=e.account;return r.a.createElement(o.b,{className:"nav-link",to:"/profile/".concat(t)},r.a.createElement("img",{className:"nav-profile",src:j()(t)}))}return F.state,r.a.createElement(w.a,null,r.a.createElement(x.a,{sm:"12",md:{size:8,offset:2}},r.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top col-sm-12 col-md-7"},r.a.createElement("div",{className:"navbar-wrapper"},r.a.createElement(o.b,{className:"navbar-brand",to:"/"},r.a.createElement("img",{className:"navbar-logo",src:q.a}),r.a.createElement("span",{className:"navbar-title"}," Burn Signal "))),r.a.createElement("div",{className:"collapse navbar-collapse justify-content-end"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},h,r.a.createElement(y.a,{isOpen:u,toggle:function(){return d(function(e){return!e})}},r.a.createElement(g.a,{caret:!0},r.a.createElement("i",{className:"nav-login-icon tim-icons icon-minimal-down"})),r.a.createElement(N.a,null,r.a.createElement(o.b,{to:"/"},r.a.createElement(v.a,null," Home ")),a,r.a.createElement(v.a,{divider:!0}),r.a.createElement(v.a,{type:"button","data-target":"#about","data-toggle":"modal"},"About"),r.a.createElement(v.a,{target:"_",href:"https://blog.burnsignal.io"},"Blog")))))))),r.a.createElement(function(){return r.a.createElement("div",{className:"modal fade",id:"about",tabIndex:"-1",role:"dialog","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title align-left"},"About"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body about"},r.a.createElement("p",null,"Burn Signal is an experiment in distributed preference signaling where verified unique users burn ETH to signal their opinion."),r.a.createElement("p",null,"Votes are weighted quadratically."),r.a.createElement("p",null,"We use ",r.a.createElement("a",{target:"_",href:"https://brightid.org"},"BrightID")," as our proof of uniqueness, only votes cast by ethereum addresses that are verified unique by BrightID count towards the outcome of a burn signals."),r.a.createElement("br",null),r.a.createElement("p",null,"Burn Signal is funded by grants and community contributions. If you would like to contribute funds, check out our ",r.a.createElement("a",{target:"_",href:"https://gitcoin.co/grants/138/burner-vote"},"Gitcoin Grants campaign"),", if you would like to contribute code or other work, check out our ",r.a.createElement("a",{target:"_",href:"https://github.com/burnsignal"},"GitHub")," and our ",r.a.createElement("a",{target:"_",href:"https://colony.io/colony/burn"},"Colony"),"."),r.a.createElement("br",null),r.a.createElement("p",null,"Check out our ",r.a.createElement("a",{target:"_",href:"https://blog.burnsignal.io"}," blog ")," for more information.")))))},null))},z=a(126),G=a(137),V=function(e){return Object(z.a)(e.substring(0,10)).reduceRight(function(e,t,a,n){return[].concat(Object(z.a)(e),[n.splice(~~(Math.random()*n.length),1)[0]])},[]).join("")},Y=function(e){return parseInt(e)>=1e15?"".concat(parseFloat(e/Math.pow(10,18)).toFixed(3)," ETH"):parseInt(e)>=1e6?"".concat((e/1e9).toFixed(3)," GWEI"):parseInt(e)<1e6?"".concat(parseFloat(e).toFixed(2)," WEI"):void 0},J=function(e,t){var a=e.concat(t);return a.unshift(0),a},U=function(){var e=Object(f.a)(b.a.mark(function e(t){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={yes:[],no:[],voters:[]},e.next=3,Object.entries(t).map(function(e){var t=Object(i.a)(e,2),n=(t[0],t[1]),r=n.address,c=n.yes,l=n.no;a.voters.push(r),c.value.forEach(function(e,t){e=parseFloat(e),isNaN(e)&&(e=0),a.yes.push(e)}),l.value.forEach(function(e,t){e=-1*parseFloat(e),isNaN(e)&&(e=0),a.no.push(e)})});case 3:return e.abrupt("return",a);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),$=function(e){return"-"===(e=(e=e.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,"")).replace(/ /g,"-").toLowerCase()).substring(e.length-1,e.length)&&(e=e.slice(0,e.length-1)),e.replace("?","")},K=function(e){e=e.toLowerCase().replace("0x","");for(var t=Object(G.keccak_256)(e),a="0x",n=0;n<e.length;n++)parseInt(t[n],16)>=8?a+=e[n].toUpperCase():a+=e[n];return a};var Q=a(627);var X=function(e){var t="".concat($(e.title),".burnsignal.eth"),a=Object(n.useState)(0),c=Object(i.a)(a,2),l=c[0],o=c[1],s=Object(n.useContext)(m).state;function u(a){var n=a.option;return r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title"},e.title),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:e.dismiss},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},"Vote ",r.a.createElement("span",{id:"pink"},n)," by sending any amount of ETH to ",r.a.createElement("br",null),r.a.createElement("a",{target:"_",href:"https://etherscan.io"},r.a.createElement("span",{id:"pink"},n),".",t),r.a.createElement("div",{className:"poll-qr"},r.a.createElement(Q,{value:e.address[n]})),"To ensure that you vote counts, please link your ethereum account to your BrightID account at\u2028 ",r.a.createElement("a",{target:"_",href:"https://ethereum.brightid.org"},"ethereum.brightid.org")))}function d(t){var a=t.option;return r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title"},e.title),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:e.dismiss},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("span",{className:"vote-selection"}," How much ETH will you burn to cast your vote? "),r.a.createElement("input",{type:"number",value:l,onChange:h,className:"modal-input",placeholder:"0.5 ETH"})),r.a.createElement("div",{class:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-primary btn-verify","data-dismiss":"modal",onClick:function(){return E(a)}},"Vote ",a)))}function p(){return r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title"},"Please verify your account"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:e.dismiss},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},"Before casting your vote, you should verify your Ethereum account using BrightID."),r.a.createElement("div",{class:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-primary btn-verify","data-dismiss":"modal"},"Verify")))}e.title;var E=function(){var t=Object(f.a)(b.a.mark(function t(a){var n,r;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.web3,e.dismiss(),r=l%1===0?n.utils.toBN(parseFloat(l)).mul(n.utils.toBN(1e18)):parseInt(l*Math.pow(10,18)),t.next=5,n.eth.sendTransaction({to:e.address[a],from:s.accounts[0],value:r});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),h=function(e){o(e.target.value)};return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"modal fade",id:"yes",tabIndex:"-1",role:"dialog","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},s.auth&&s.verified&&r.a.createElement(d,{option:"yes"}),!s.auth&&!s.verified&&r.a.createElement(u,{option:"yes"}),s.auth&&!s.verified&&r.a.createElement(p,null))),r.a.createElement("div",{className:"modal fade",id:"no",tabIndex:"-1",role:"dialog","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},s.auth&&s.verified&&r.a.createElement(d,{option:"no"}),!s.auth&&!s.verified&&r.a.createElement(u,{option:"no"}),s.auth&&!s.verified&&r.a.createElement(p,null))))},Z=function(e){return'{ polls(where: { id: "'.concat(e,'" }) { yes no users { address yes { contributions timestamps total value sqrt } no { contributions timestamps total value sqrt } } } }')},ee='{ issues(where: { title_not_contains: "fae" }) { id body title issuer deadline optionBaddr optionAaddr } }',te=function(e){return'{ user(id: "'.concat(e.toLowerCase(),'") { burns polls burned } }')},ae=function(){var e=Object(f.a)(b.a.mark(function e(t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.thegraph.com/subgraphs/name/burnsignal/proof-of-concept",Object(s.a)({},(a=t,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:a})}))).then(function(e){return e.json()}).then(function(e){return e}).catch(console.log);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}var a},e)}));return function(t){return e.apply(this,arguments)}}();function ne(){return re.apply(this,arguments)}function re(){return(re=Object(f.a)(b.a.mark(function e(){var t,a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae(ee);case 2:return t=e.sent,a={},t.data.issues.forEach(function(e){a[$(e.title)]=Object(s.a)({},e)}),e.abrupt("return",a);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function ce(e){return le.apply(this,arguments)}function le(){return(le=Object(f.a)(b.a.mark(function e(t){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae(Z(t));case 2:if(0!=(a=e.sent).data.polls.length){e.next=7;break}return e.abrupt("return",{yes:0,no:0,users:[]});case 7:return e.abrupt("return",a.data.polls[0]);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function oe(e){return se.apply(this,arguments)}function se(){return(se=Object(f.a)(b.a.mark(function e(t){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae(te(t));case 2:if(null!==(a=e.sent).data.user){e.next=7;break}return e.abrupt("return",{burned:0,polls:[],burns:[]});case 7:return e.abrupt("return",a.data.user);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}a(633);var ie=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),s=Object(i.a)(l,2),u=s[0],m=s[1],d=Object(n.useState)(0),p=Object(i.a)(d,2),h=p[0],v=p[1],y=Object(n.useState)(0),g=Object(i.a)(y,2),N=g[0],O=g[1],C=Object(E.f)().address;return Object(n.useEffect)(function(){!function(){var e=Object(f.a)(b.a.mark(function e(){var t,a,n,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe(C);case 2:t=e.sent,a=t.burned,n=t.polls,r=t.burns,O(Y(parseInt(a)/r.length)),v(r.length),c(Y(a)),m(n);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]),r.a.createElement("div",{className:"profile"},r.a.createElement(w.a,null,r.a.createElement(x.a,{sm:"12",md:{size:8,offset:2}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement(o.b,{to:"/profile/".concat(C)},r.a.createElement("img",{className:"profile-blockie",src:j()(C)})),r.a.createElement("div",{className:"profile-stats"},r.a.createElement("div",{className:"profile-address"},r.a.createElement("a",{href:"https://etherscan.io/address/".concat(C)},K(C))),r.a.createElement("span",{className:"profile-stat"},"Burned: ",r.a.createElement("span",{id:"pink"},a)," "),r.a.createElement("span",{className:"profile-stat"},"Burns: ",r.a.createElement("span",{id:"pink"},h)," "),r.a.createElement("span",{className:"profile-stat"},"Average: ",r.a.createElement("span",{id:"pink"},N)," "),r.a.createElement("p",{className:"profile-verified"},"Verified: ",r.a.createElement("span",{id:"pink"},"false")," ")))))),r.a.createElement(w.a,null,r.a.createElement(x.a,{sm:"12",md:{size:8,offset:2}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",{className:"card-category"},"Polls")),r.a.createElement("div",{className:"card-body"}),r.a.createElement("ul",null,u.map(function(e){return r.a.createElement(o.b,{to:"/poll/".concat($(e))},r.a.createElement("li",null," ",e," "))}))))))},ue=a(129),me=a.n(ue),de=function(e,t){var a;return(a=[]).concat.apply(a,Object(z.a)(Array.from({length:t},function(){return e})))};var pe=function(e){var t=e.chartId;return Object(n.useEffect)(function(){!function(){var a=e.pollRecords,n=a.yes,r=a.no,c=J(n,r),l=Math.max.apply(Math,Object(z.a)(c)),o=Math.min.apply(Math,Object(z.a)(c)),i=Math.ceil((.2*l+l)/10*10),u=-1*Math.ceil((.2*o+o)/10*10),m=document.getElementById(t).getContext("2d"),d=u>i?u:i,p=c.length>k.length?de(k,parseInt(c.length/k.length)):k.slice(0,c.length),b=m.createLinearGradient(0,337.5,0,25);b.addColorStop(1,"rgba(255,51,138,0.225)"),b.addColorStop(.7,"rgba(255,51,138,0.2)"),b.addColorStop(.5,"rgba(255,51,138,0.125)"),b.addColorStop(.2,"rgba(255,51,138,0.075)"),b.addColorStop(0,"rgba(119,52,169,0)");var f={labels:p,datasets:[Object(s.a)({},I.SPLINE_STYLE(b),{data:c})]};new me.a(m,Object(s.a)({},I.SPLINE_CONFIG(f,d)))}()},[]),r.a.createElement(n.Fragment,null,r.a.createElement("canvas",{id:t}," "))};var be=function(e){var t=e.chartId;return Object(n.useEffect)(function(){!function(){var a=e.pollCount,n=a.yes,r=a.no,c=document.getElementById(t).getContext("2d"),l=n>r?n:r,o=.2*l+l,i=[n,r];new me.a(c,Object(s.a)({},I.BAR_CONFIG(i,o)))}()},[]),r.a.createElement(n.Fragment,null,r.a.createElement("canvas",{id:t}," "))};a(635);var fe=function(e){var t=Object(n.useState)({yes:[],no:[]}),a=Object(i.a)(t,2),c=a[0],l=a[1],u=Object(n.useState)({yes:"",no:""}),d=Object(i.a)(u,2),p=d[0],h=d[1],v=Object(n.useState)({yes:0,no:0}),y=Object(i.a)(v,2),g=y[0],N=y[1],O=Object(n.useState)(""),C=Object(i.a)(O,2),k=C[0],I=C[1],S=Object(n.useState)(!1),F=Object(i.a)(S,2),B=F[0],D=F[1],_=Object(n.useState)(0),L=Object(i.a)(_,2),T=(L[0],L[1]),A=Object(n.useState)(0),W=Object(i.a)(A,2),P=(W[0],W[1],Object(n.useState)("0x")),H=Object(i.a)(P,2),M=H[0],q=H[1],R=Object(n.useState)(""),z=Object(i.a)(R,2),G=z[0],Y=z[1],J=Object(n.useContext)(m).state,$=Object(E.f)().address,Q=Object(E.e)(),Z=void 0!==e.location?$:e.id;function ee(e){var t="/poll/".concat(Z,"/").concat(e);Q[Q.length-1]!==t&&Q.push(t)}return Object(n.useEffect)(function(){!function(){var e=Object(f.a)(b.a.mark(function e(){var t,a,n,r,c,o,i,u,m,d,p;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===J.polls[Z]){e.next=17;break}return t=J.polls[Z],a=t.title,n=t.body,r=t.issuer,c=t.optionAaddr,o=t.optionBaddr,e.next=4,ce(a);case 4:return i=e.sent,u=i.yes,m=i.users,d=i.no,e.next=8,U(m);case 8:p=e.sent,N({yes:parseInt(u),no:parseInt(d)}),h({yes:c,no:o}),q(K(r)),T(p.voters.length),l(Object(s.a)({},p)),I(n),D(!0),Y(a);case 17:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[J.polls]),r.a.createElement("div",{className:"poll"},r.a.createElement(w.a,null,r.a.createElement(x.a,{sm:"12",md:{size:8,offset:2}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement(o.b,{className:"poll-issuer",to:"/profile/".concat(M)},r.a.createElement("img",{className:"poll-profile",src:j()(M)})),r.a.createElement("div",{className:"poll-title"},G)),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"poll-description"},k),r.a.createElement("div",{className:"vote-options"},r.a.createElement("button",{type:"button","data-target":"#yes","data-toggle":"modal",className:"btn btn-primary btn-simple",onClick:function(){return ee("yes")}},"Yes"),r.a.createElement("button",{type:"button","data-target":"#no","data-toggle":"modal",className:"btn btn-primary btn-simple",onClick:function(){return ee("no")}},"No")))))),r.a.createElement(w.a,null,r.a.createElement(x.a,{sm:"12",md:{size:8,offset:2}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",{className:"card-category"},"Results")),r.a.createElement("div",{className:"card-body"},B&&r.a.createElement(be,{chartId:V(Z),pollCount:g}))))),r.a.createElement(w.a,null,r.a.createElement(x.a,{sm:"12",md:{size:8,offset:2}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",{className:"card-category"},"History")),r.a.createElement("div",{className:"card-body"},B&&r.a.createElement(pe,{chartId:V(Z),pollRecords:c})))),r.a.createElement(X,{dismiss:function(){var t=e.location.pathname.replace("/yes","");t=t.replace("/no",""),Q.push(t)},title:G,address:p})))};var Ee=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=(t[0],t[1]),c=Object(n.useState)(""),l=Object(i.a)(c,2),s=(l[0],l[1]),u=Object(n.useContext)(m).state;function d(){return r.a.createElement(n.Fragment,null,r.a.createElement("input",{onChange:f,placeholder:"What question is on your mind?",className:"create-poll-question"}),r.a.createElement("textarea",{onChange:b,placeholder:"Description",className:"create-poll-description"}),r.a.createElement("button",{className:"btn btn-primary button-poll",onClick:p}," Create "))}var p=function(){document.getElementsByClassName("create-poll-description")[0].value="",document.getElementsByClassName("create-poll-question")[0].value=""},b=function(e){a(e.target.value)},f=function(e){s(e.target.value)};return r.a.createElement(n.Fragment,null,u.web3&&r.a.createElement("div",{className:"new-poll"},r.a.createElement(w.a,null,r.a.createElement(x.a,{sm:"12",md:{size:8,offset:2}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"}),r.a.createElement("div",{className:"card-body"},r.a.createElement(o.b,{to:"/profile/".concat(u.accounts[0])},r.a.createElement("img",{className:"new-poll-profile",src:j()(u.accounts[0])})),r.a.createElement(d,null)))))),Object.keys(u.polls).reverse().map(function(e,t){return r.a.createElement(o.b,{to:"/poll/".concat(e)},r.a.createElement(fe,{key:e,id:e}))}),r.a.createElement(function(){return r.a.createElement("div",{className:"modal fade",id:"create",tabIndex:"-1",role:"dialog","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title align-left"},"Create"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body about"},r.a.createElement(d,null)))))},null))};var he=Object(E.g)(function(e){var t=Object(n.useContext)(m),a=t.dispatch;return t.state,Object(n.useEffect)(function(){return window.scrollTo(0,0)},[e.location.pathname]),Object(n.useEffect)(function(){!function(){var e=Object(f.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne();case 2:t=e.sent,a({payload:t,type:"POLL"});case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]),r.a.createElement("main",null,r.a.createElement(h.a,null,r.a.createElement(R,null),r.a.createElement(E.a,{path:"/profile/:address",component:ie}),r.a.createElement(E.a,{path:"/poll/:address",component:fe}),r.a.createElement(E.a,{exact:!0,path:"/",component:Ee})))});l.a.render(r.a.createElement(function(e){var t=e.children,a=Object(n.useReducer)(function(e,t){switch(t.type){case"POLL":return Object(s.a)({},e,{polls:t.payload});case"WEB3":return Object(s.a)({},e,t.payload,{auth:!0,verified:!0});default:return e}},u),c=Object(i.a)(a,2),l=c[0],o=c[1];return r.a.createElement(d,{value:{state:l,dispatch:o}},t)},null,r.a.createElement(o.a,{basename:"/"},r.a.createElement(n.Fragment,null,r.a.createElement(he,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[262,2,1]]]);
//# sourceMappingURL=main.60b2b5d3.chunk.js.map