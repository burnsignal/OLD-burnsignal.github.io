(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{240:function(e,t,a){e.exports=a.p+"static/media/logo.0a58105d.png"},248:function(e,t,a){e.exports=a(606)},255:function(e,t,a){},257:function(e,t,a){},259:function(e,t,a){},272:function(e,t){},294:function(e,t){},296:function(e,t){},363:function(e,t){},558:function(e,t){},604:function(e,t,a){},606:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(232),o=a.n(c),s=a(30);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(21),i=a(17),u={polls:[],web3:void 0,auth:!1,verified:!1},d=Object(n.createContext)(u),m=d.Provider,p=a(2),b=a.n(p),f=a(13),v=a(119),h=a(609),E=(a(255),a(257),a(259),a(233)),y=a.n(E),g=a(607),N=a(608),O=a(234),j=a.n(O),w=a(235),x=a.n(w),k=a(236),C=a.n(k),S=a(237),F=a.n(S),I={walletconnect:{package:C.a,options:{infuraId:"INFURA_ID"}},authereum:{package:F.a,options:{}}},D=function(){return new Promise(function(){var e=Object(f.a)(b.a.mark(function e(t,a){var n,r,c;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=new x.a.Core({network:"mainnet",cacheProvider:!0,providerOptions:I}),e.next=4,n.connect();case 4:r=e.sent,c=new j.a(r),t(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t,a){return e.apply(this,arguments)}}())},B=a(240),A=a.n(B);var L=function(){var e=Object(n.useState)(r.a.createElement(function(){return r.a.createElement("a",{className:"nav-link",onClick:function(){return function(){return p.apply(this,arguments)}()},href:"#"},r.a.createElement("i",{className:"nav-icon tim-icons icon-wallet-43"}))},null)),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),l=Object(i.a)(o,2),u=(l[0],l[1],Object(n.useContext)(d)),m=u.dispatch;function p(){return(p=Object(f.a)(b.a.mark(function e(){var t,a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D();case 3:return t=e.sent,e.next=6,t.eth.getAccounts();case 6:a=e.sent,c(r.a.createElement(v,{account:a[0]})),m({payload:t,type:"WEB3"}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),alert("Web3 login could not be detected");case 14:case"end":return e.stop()}},e,null,[[0,11]])}))).apply(this,arguments)}function v(e){var t=e.account;return r.a.createElement(s.b,{className:"nav-link",to:"/profile/".concat(t)},r.a.createElement("img",{className:"nav-profile",src:y()(t)}),r.a.createElement("i",{className:"nav-login-icon tim-icons icon-minimal-down"}))}return u.state,r.a.createElement(g.a,null,r.a.createElement(N.a,{sm:"12",md:{size:8,offset:2}},r.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top col-sm-12 col-md-7"},r.a.createElement("div",{className:"navbar-wrapper"},r.a.createElement(s.b,{className:"navbar-brand",to:"/"},r.a.createElement("img",{className:"navbar-logo",src:A.a}),r.a.createElement("span",{className:"navbar-title"}," Burn Signal "))),r.a.createElement("div",{className:"collapse navbar-collapse justify-content-end"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/"},r.a.createElement("i",{className:"nav-icon tim-icons icon-bell-55"}))),r.a.createElement("li",{className:"nav-item"},a))))))},P=a(45),T=function(e){return Object(P.a)(e.substring(0,10)).reduceRight(function(e,t,a,n){return[].concat(Object(P.a)(e),[n.splice(~~(Math.random()*n.length),1)[0]])},[]).join("")},M=function(e,t){var a=e.concat(t);return a.sort(function(e,t){return e-t}),a.unshift(0),a},W=function(){var e=Object(f.a)(b.a.mark(function e(t){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={yes:[],no:[],voters:[]},e.next=3,Object.entries(t).map(function(e){var t=Object(i.a)(e,2),n=(t[0],t[1]),r=n.address,c=n.yes,o=n.no;a.voters.push(r),c.value.forEach(function(e,t){e=parseFloat(e),isNaN(e)&&(e=0),a.yes.push(e)}),o.value.forEach(function(e,t){e=-1*parseFloat(e),isNaN(e)&&(e=0),a.no.push(e)})});case 3:return e.abrupt("return",a);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),_=function(e){return"-"===(e=(e=e.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,"")).replace(/ /g,"-").toLowerCase()).substring(e.length-1,e.length)&&(e=e.slice(0,e.length-1)),e.replace("?","")};var H=a(598);var R=function(e){var t="".concat(_(e.title),".burnsignal.eth"),a=Object(n.useContext)(d).state;function c(a){var n=a.option;return r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title"},e.title),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:e.dismiss},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},"Vote ",r.a.createElement("span",{id:"pink"},n)," by sending any amount of ETH to ",r.a.createElement("br",null),r.a.createElement("a",{href:"https://etherscan.io"},r.a.createElement("span",{id:"pink"},n),".",t),r.a.createElement("div",{className:"poll-qr"},r.a.createElement(H,{value:e.address[n]})),"To ensure that you vote counts, please link your ethereum account to your BrightID account at\u2028 ",r.a.createElement("a",{href:"https://ethereum.brightid.org"},"ethereum.brightid.org")))}function o(t){var a=t.option;return r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title"},e.title),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:e.dismiss},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("span",{className:"vote-selection"}," How much ETH will you burn to cast your vote? "),r.a.createElement("input",{className:"modal-input",placeholder:"0.5 ETH"})),r.a.createElement("div",{class:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-primary btn-verify","data-dismiss":"modal"},"Vote ",a)))}function s(){return r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title"},"Please verify your account"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:e.dismiss},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},"Before casting your vote, you should verify your Ethereum account using BrightId."),r.a.createElement("div",{class:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-primary btn-verify","data-dismiss":"modal"},"Verify")))}return e.title,r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"modal fade",id:"yes",tabIndex:"-1",role:"dialog","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},a.auth&&a.verified&&r.a.createElement(o,{option:"yes"}),!a.auth&&!a.verified&&r.a.createElement(c,{option:"yes"}),a.auth&&!a.verified&&r.a.createElement(s,null))),r.a.createElement("div",{className:"modal fade",id:"no",tabIndex:"-1",role:"dialog","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},a.auth&&a.verified&&r.a.createElement(o,{option:"no"}),!a.auth&&!a.verified&&r.a.createElement(c,{option:"no"}),a.auth&&!a.verified&&r.a.createElement(s,null))))},V=function(e){return'{ polls(where: { id: "'.concat(e,'" }) { yes no users { address yes { contributions timestamps total value sqrt } no { contributions timestamps total value sqrt } } } }')},q='{ issues(where: { title_not_contains: "fae" }) { id body title issuer deadline optionBaddr optionAaddr } }',z=function(){var e=Object(f.a)(b.a.mark(function e(t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.thegraph.com/subgraphs/name/burnsignal/proof-of-concept",Object(l.a)({},(a=t,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:a})}))).then(function(e){return e.json()}).then(function(e){return e}).catch(console.log);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}var a},e)}));return function(t){return e.apply(this,arguments)}}();function G(){return Y.apply(this,arguments)}function Y(){return(Y=Object(f.a)(b.a.mark(function e(){var t,a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(q);case 2:return t=e.sent,a={},t.data.issues.forEach(function(e){a[_(e.title)]=Object(l.a)({},e)}),e.abrupt("return",a);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Q(e){return J.apply(this,arguments)}function J(){return(J=Object(f.a)(b.a.mark(function e(t){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(V(t));case 2:if(0!=(a=e.sent).data.polls.length){e.next=7;break}return e.abrupt("return",{yes:0,no:0,users:[]});case 7:return e.abrupt("return",a.data.polls[0]);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}var U=a(85),$=a.n(U),K=["Monday","Tuesday","Wendsday","Thursday","Friday","Saturday","Sunday"],X={BAR_CONFIG:function(e,t){return{type:"horizontalBar",responsive:!0,data:{labels:["Yes","No"],datasets:[{data:e,borderColor:"#d048b6",borderWidth:2,fill:!0}]},options:{legend:{display:!1},scales:{xAxes:[{scaleLabel:{display:!0,labelString:"Wei (ETH)"},ticks:{suggestedMin:0,max:t,callback:function(e,t,a){return e>1e8||e<-1e8?e.toExponential():e}}}]}}}},SPLINE_CONFIG:function(e,t){return{options:{lineTension:100,bezierCurve:!0,legend:{display:!1},scales:{yAxes:[{id:"yAxis1",scaleLabel:{labelString:"Wei (ETH)",display:!0},ticks:{min:-1*t,max:t,callback:function(e,t,a){return e>1e8||e<-1e8?e.toExponential():e}}},{id:"yAxis2",labels:["","Yes","","No",""],type:"category",gridLines:{drawOnChartArea:!1,display:!1}}]}},type:"line",data:e}},SPLINE_STYLE:function(e){return{label:"Data",fill:!0,backgroundColor:e,borderColor:"#d048b6",borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#d048b6",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#d048b6",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4}}},Z=function(e,t){var a;return(a=[]).concat.apply(a,Object(P.a)(Array.from({length:t},function(){return e})))};var ee=function(e){var t=e.chartId;return Object(n.useEffect)(function(){!function(){var a=e.pollRecords,n=a.yes,r=a.no,c=M(n,r),o=Math.max.apply(Math,Object(P.a)(c)),s=Math.min.apply(Math,Object(P.a)(c)),i=Math.ceil((.2*o+o)/10*10),u=-1*Math.ceil((.2*s+s)/10*10),d=document.getElementById(t).getContext("2d"),m=u>i?u:i,p=c.length>K.length?Z(K,parseInt(c.length/K.length)):K.slice(0,c.length),b=d.createLinearGradient(0,337.5,0,25);b.addColorStop(1,"rgba(255,51,138,0.225)"),b.addColorStop(.7,"rgba(255,51,138,0.2)"),b.addColorStop(.5,"rgba(255,51,138,0.125)"),b.addColorStop(.2,"rgba(255,51,138,0.075)"),b.addColorStop(0,"rgba(119,52,169,0)");var f={labels:p,datasets:[Object(l.a)({},X.SPLINE_STYLE(b),{data:c})]};new $.a(d,Object(l.a)({},X.SPLINE_CONFIG(f,m)))}()},[]),r.a.createElement(n.Fragment,null,r.a.createElement("canvas",{id:t}," "))};var te=function(e){var t=e.chartId;return Object(n.useEffect)(function(){!function(){var a=e.pollCount,n=a.yes,r=a.no,c=document.getElementById(t).getContext("2d"),o=n>r?n:r,s=.2*o+o,i=[n,r];new $.a(c,Object(l.a)({},X.BAR_CONFIG(i,s)))}()},[]),r.a.createElement(n.Fragment,null,r.a.createElement("canvas",{id:t}," "))};a(604);var ae=function(e){var t=Object(n.useState)({yes:[],no:[]}),a=Object(i.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)({yes:"",no:""}),u=Object(i.a)(s,2),m=u[0],p=u[1],h=Object(n.useState)({yes:0,no:0}),E=Object(i.a)(h,2),y=E[0],O=E[1],j=Object(n.useState)(""),w=Object(i.a)(j,2),x=w[0],k=w[1],C=Object(n.useState)(!1),S=Object(i.a)(C,2),F=S[0],I=S[1],D=Object(n.useState)(0),B=Object(i.a)(D,2),A=(B[0],B[1]),L=Object(n.useState)(0),P=Object(i.a)(L,2),M=(P[0],P[1],Object(n.useState)("")),_=Object(i.a)(M,2),H=_[0],V=_[1],q=Object(n.useContext)(d).state,z=Object(v.f)().address,G=Object(v.e)(),Y=void 0!==e.location?z:e.id;function J(e){var t="/poll/".concat(Y,"/").concat(e);G[G.length-1]!==t&&G.push(t)}return Object(n.useEffect)(function(){!function(){var e=Object(f.a)(b.a.mark(function e(){var t,a,n,r,c,s,i,u,d,m;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===q.polls[Y]){e.next=16;break}return t=q.polls[Y],a=t.title,n=t.body,t.issuer,r=t.optionAaddr,c=t.optionBaddr,e.next=4,Q(a);case 4:return s=e.sent,i=s.yes,u=s.users,d=s.no,e.next=8,W(u);case 8:m=e.sent,O({yes:parseInt(i),no:parseInt(d)}),p({yes:r,no:c}),A(m.voters.length),o(Object(l.a)({},m)),k(n),I(!0),V(a);case 16:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[q.polls]),r.a.createElement("div",{className:"proposalComponent"},r.a.createElement(g.a,null,r.a.createElement(N.a,{sm:"12",md:{size:8,offset:2}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"poll-title"},H)),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"poll-description"},x),r.a.createElement("div",{className:"vote-options"},r.a.createElement("button",{type:"button","data-target":"#yes","data-toggle":"modal",className:"btn btn-primary btn-simple",onClick:function(){return J("yes")}},"Yes"),r.a.createElement("button",{type:"button","data-target":"#no","data-toggle":"modal",className:"btn btn-primary btn-simple",onClick:function(){return J("no")}},"No")))))),r.a.createElement(g.a,null,r.a.createElement(N.a,{sm:"12",md:{size:8,offset:2}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",{className:"card-category"},"Results")),r.a.createElement("div",{className:"card-body"},F&&r.a.createElement(te,{chartId:T(Y),pollCount:y}))))),r.a.createElement(g.a,null,r.a.createElement(N.a,{sm:"12",md:{size:8,offset:2}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",{className:"card-category"},"History")),r.a.createElement("div",{className:"card-body"},F&&r.a.createElement(ee,{chartId:T(Y),pollRecords:c})))),r.a.createElement(R,{dismiss:function(){var t=e.location.pathname.replace("/yes","");t=t.replace("/no",""),G.push(t)},title:H,address:m})))};var ne=function(){var e=Object(n.useContext)(d).state;return r.a.createElement(n.Fragment,null,Object.keys(e.polls).map(function(e,t){return r.a.createElement(s.b,{to:"/poll/".concat(e)},r.a.createElement(ae,{key:e,id:e}))}))},re=a(243),ce=a(244),oe=a(247),se=a(245),le=a(246),ie=a(34),ue=function(e){function t(e){var a;return Object(re.a)(this,t),(a=Object(oe.a)(this,Object(se.a)(t).call(this,e))).state={web3:null,accounts:null,contract:null},a.componentDidMount=Object(f.a)(b.a.mark(function e(){var t,n,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("Loading web3..."),e.next=4,D();case 4:return t=e.sent,e.next=7,t.eth.getAccounts();case 7:n=e.sent,"0x6936b81d7629378aabddcf882b2a7fdfff1cd962",r=new t.eth.Contract(de,"0x6936b81d7629378aabddcf882b2a7fdfff1cd962"),a.setState({web3:t,accounts:n,contract:r}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),alert("Error loading The Graph"),console.error(e.t0);case 17:case"end":return e.stop()}},e,null,[[0,13]])})),a.makeNewVote=a.makeNewVote.bind(Object(ie.a)(Object(ie.a)(a))),a.updateQuestion=a.updateQuestion.bind(Object(ie.a)(Object(ie.a)(a))),a.updateDeadline=a.updateDeadline.bind(Object(ie.a)(Object(ie.a)(a))),a}return Object(le.a)(t,e),Object(ce.a)(t,[{key:"makeNewVote",value:function(){var e=Object(f.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("New Vote"),console.log(this.state.question),console.log(this.state.deadline),console.log("Sending transaction..."),e.next=6,this.state.contract.methods.newVoteProposal(this.state.question,"Here is some data",Date.now()+36e5).send({from:this.state.accounts[0]});case 6:console.log("Done?");case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"updateQuestion",value:function(e){this.setState({question:e.target.value})}},{key:"updateDeadline",value:function(e){this.setState({deadline:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"main-panel"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"title"},"Ask a question...")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 pr-md-1"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Your Question"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Ask Away",onChange:this.updateQuestion})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 pr-md-1"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Deadline"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Block No",onChange:this.updateDeadline})))))),r.a.createElement("div",{className:"card-footer"},r.a.createElement("button",{type:"submit",className:"btn btn-fill btn-primary",onClick:this.makeNewVote},"Post"))))))))}}]),t}(n.Component),de=[{constant:!1,inputs:[{name:"_name",type:"string"},{name:"_data",type:"string"},{name:"_deadline",type:"uint64"}],name:"newVoteProposal",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,name:"proposalID",type:"uint256"},{indexed:!1,name:"issuer",type:"address"},{indexed:!1,name:"deadline",type:"uint256"},{indexed:!1,name:"name",type:"string"},{indexed:!1,name:"data",type:"string"}],name:"newProposalIssued",type:"event"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"proposals",outputs:[{name:"issuer",type:"address"},{name:"deadline",type:"uint256"},{name:"name",type:"string"},{name:"data",type:"string"}],payable:!1,stateMutability:"view",type:"function"}];var me=Object(v.g)(function(e){var t=Object(n.useContext)(d),a=t.dispatch;return t.state,Object(n.useEffect)(function(){return window.scrollTo(0,0)},[e.location.pathname]),Object(n.useEffect)(function(){!function(){var e=Object(f.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G();case 2:t=e.sent,a({payload:t,type:"POLL"});case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]),r.a.createElement("main",null,r.a.createElement(h.a,null,r.a.createElement(L,null),r.a.createElement(v.a,{path:"/poll/:address",component:ae}),r.a.createElement(v.a,{exact:!0,path:"/",component:ne}),r.a.createElement(v.a,{path:"/new",component:ue})))});o.a.render(r.a.createElement(function(e){var t=e.children,a=Object(n.useReducer)(function(e,t){switch(t.type){case"POLL":return Object(l.a)({},e,{polls:t.payload});case"WEB3":return Object(l.a)({},e,{web3:t.payload,auth:!0,verified:!0});default:return e}},u),c=Object(i.a)(a,2),o=c[0],s=c[1];return r.a.createElement(m,{value:{state:o,dispatch:s}},t)},null,r.a.createElement(s.a,{basename:"/"},r.a.createElement(n.Fragment,null,r.a.createElement(me,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[248,2,1]]]);
//# sourceMappingURL=main.bfcc3816.chunk.js.map