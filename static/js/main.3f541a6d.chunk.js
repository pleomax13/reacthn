(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,a){},116:function(e,t,a){},176:function(e,t,a){},180:function(e,t,a){},206:function(e,t,a){},207:function(e,t,a){},208:function(e,t,a){},209:function(e,t,a){},211:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(37),r=a.n(o),i=(a(92),a(3)),c=a(4),l=a(6),m=a(5),u=a(7),p=(a(93),a(15)),h=a(29),d=a.n(h),f=a(2),b=a(30),w=a.n(b),v=(a(107),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"NewsItem"},this.props.number&&s.a.createElement("div",{className:"post-number"},this.props.number,"."),s.a.createElement("h4",{className:"post-name"},this.props.url?s.a.createElement("a",{href:this.props.url},this.props.title):s.a.createElement(f.b,{to:"/item/".concat(this.props.id),onClick:function(){return e.props.handleClick(e.props.comments,e.props.id,e.props.item)}},this.props.title)),s.a.createElement("div",{className:"post-description"},s.a.createElement("span",{className:"post-points"},this.props.score," points"),s.a.createElement("span",null,s.a.createElement("span",{style:{marginRight:0}},"by "),s.a.createElement(f.b,{to:"/user/".concat(this.props.by),onClick:function(){return e.props.handleClick(e.props.by)}},this.props.by)),s.a.createElement("span",{className:"post-time"},s.a.createElement(d.a,{fromNow:!0,unix:!0},this.props.time)),s.a.createElement("span",null,this.props.comments&&s.a.createElement(s.a.Fragment,null,s.a.createElement("span",null,"|"),s.a.createElement("span",{className:"post-view-comments"},s.a.createElement(f.b,{to:"/item/".concat(this.props.id),onClick:function(){return e.props.handleClick(e.props.comments,e.props.id,e.props.item)}},"View comments"))))),this.props.text&&s.a.createElement("div",{className:"post-text"},w()(this.props.text)))}}]),t}(s.a.Component)),k=a(31),E=a.n(k),g=(a(116),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this)))._isMounted=!1,e.state={about:"",created:"",id:"",karma:0,submitted:[],stop:!1,loading:s.a.createElement("div",{className:"loading"},s.a.createElement(E.a,null))},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"loadError",value:function(e){console.log(e.status,e.statusText),this.setState({loading:s.a.createElement("div",{className:"loading"},"".concat(e.status," ").concat(e.statusText,". Please try againe later or refresh page"))})}},{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0;var t=new XMLHttpRequest;t.open("GET","https://hacker-news.firebaseio.com/v0/user/".concat(this.props.id,".json?print=pretty")),t.send(),t.onreadystatechange=function(){if(4===t.readyState)if(200!==t.status)e.loadError(t);else{var a=JSON.parse(t.responseText);console.log(a),e._isMounted&&a?e.setState({about:a.about?w()(a.about):null,created:a.created,id:a.id,karma:a.karma,submitted:a.submitted,stop:!0}):null===a&&e.setState({loading:s.a.createElement("div",{className:"loading"},"User not found")})}}}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this.state.loading;return s.a.createElement(s.a.Fragment,null,this.state.stop?s.a.createElement("div",{className:"User"},s.a.createElement("div",{className:"user-headlines"},s.a.createElement("span",null,"user:"),s.a.createElement("span",null,"created:"),s.a.createElement("span",null,"karma:"),this.state.about&&s.a.createElement("span",null,"about:")),s.a.createElement("div",{className:"user-name"},this.state.id),s.a.createElement("div",{className:"user-created"},s.a.createElement(d.a,{unix:!0,format:" MMMM DD, YYYY"},this.state.created)),s.a.createElement("div",{className:"user-karma"},this.state.karma),this.state.about&&s.a.createElement("div",{className:"user-about"},this.state.about)):e)}}]),t}(s.a.Component)),y=(a(176),a(79)),j=a.n(y),N=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={isHidden:!1},e.handleHide=e.handleHide.bind(Object(p.a)(Object(p.a)(e))),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleHide",value:function(){this.setState({isHidden:!this.state.isHidden})}},{key:"render",value:function(){var e=this,t=this.props.text;return s.a.createElement("div",null,s.a.createElement("div",{className:"comment-header"},s.a.createElement(f.b,{to:"/user/".concat(this.props.by),onClick:function(){return e.props.handleClick(e.props.by)},className:"comment-user"},this.props.by),s.a.createElement("span",{onClick:this.handleHide,className:"comment-button-hide",title:"".concat(this.state.isHidden?"View":"Hide")},this.state.isHidden?"[ + ]":"[ - ]")),s.a.createElement("div",{className:"comment-time"},s.a.createElement(d.a,{fromNow:!0,unix:!0},this.props.time)),s.a.createElement(j.a,{in:!this.state.isHidden},s.a.createElement("div",{className:"comment-text"},w()(t)),this.props.replies&&s.a.createElement("div",{style:{marginLeft:"20px"}},s.a.createElement(O,{commentsId:this.props.replies,handleClick:this.props.handleClick}))))}}]),t}(s.a.Component),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e)))._isMounted=!1,a.arrCom=[],a.state={comments:[],stop:!1,parent:e.parent,loading:s.a.createElement("div",{className:"loading"},s.a.createElement(E.a,null))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(this._isMounted=!0,this.props.btnBack&&!Array.isArray(this.props.commentsId)){var t=new XMLHttpRequest;t.open("GET","https://hacker-news.firebaseio.com/v0/item/".concat(this.props.commentsId,".json?print=pretty")),t.send(),t.onreadystatechange=function(){if(4===t.readyState)if(200!==t.status)e.loadError(t);else{var a=JSON.parse(t.responseText);a&&a.kids?e.getComId(a.kids):null===a&&e.setState({loading:s.a.createElement("div",{className:"loading"},"Comments not found")}),!e.state.parent&&e.props.btnBack&&e.getParent()}}}else this.getComId(this.props.commentsId)}},{key:"getComId",value:function(e){for(var t=0;t<e.length;t++)this.getComment(e[t],t,e.length)}},{key:"getComment",value:function(e,t,a){var n=this,s=new XMLHttpRequest;s.open("GET","https://hacker-news.firebaseio.com/v0/item/".concat(e,".json?print=pretty")),s.send(),s.onreadystatechange=function(){if(4===s.readyState)if(200!==s.status)n.loadError(s);else{var e=JSON.parse(s.responseText);if(n.arrCom[t]=e,n.arrCom.length===a&&n._isMounted){var o=n.arrCom.filter(function(e){return e}).filter(function(e){return!e.deleted});n.setState({comments:o,stop:!0})}}}}},{key:"loadError",value:function(e){console.log(e.status,e.statusText),this.setState({loading:s.a.createElement("div",{className:"loading"},"".concat(e.status," ").concat(e.statusText,". Please try againe later or refresh page"))})}},{key:"getParent",value:function(){var e=this,t=new XMLHttpRequest,a=window.location.pathname.split("/").slice(-1)[0];t.open("GET","https://hacker-news.firebaseio.com/v0/item/".concat(a,".json?print=pretty")),t.send(),t.onreadystatechange=function(){if(4===t.readyState)if(200!==t.status)e.loadError(t);else{var a=JSON.parse(t.responseText);e.setState({parent:a})}}}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this,t=this.state.loading,a=this.state.comments.map(function(t){return s.a.createElement(N,{by:t.by,text:t.text,key:t.id,replies:t.kids?t.kids:null,handleClick:e.props.handleClick,time:t.time})}),n=this.state.parent,o=n?s.a.createElement(v,{title:n.title,by:n.by,url:n.url,score:n.score,key:n.id,handleClick:this.props.handleClick,time:n.time,id:n.id,item:n,text:n.text?n.text:null}):null;return s.a.createElement("div",null,this.props.btnBack&&o,s.a.createElement("div",null,this.state.stop?a:t))}}]),t}(s.a.Component),C=a(21),S=(a(180),a(53)),x=a.n(S),I=a(38),M=a.n(I),T=a(81),H=a.n(T),L=a(82),A=a.n(L),P=a(80),D=a.n(P),_=a(83),q=a.n(_),J=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=Number(window.location.pathname.split("/").slice(-1)[0]),a=this.props.num,n=this.props.show,o=a.length;t>2?a=a.slice(t-2,t+1):a.length>=3&&(a=a.slice(0,3));var r=a.map(function(a){return s.a.createElement(x.a,{key:a.page,size:"small",disabled:a.page===t,component:f.b,onClick:function(){return e.props.getNewsId(a.currPage)},to:"/".concat(n,"/").concat(a.page),style:{minWidth:"35px"}},a.page)});return s.a.createElement("div",{style:{marginTop:"10px"}},s.a.createElement(M.a,{onClick:function(){return e.props.getNewsId(1)},component:f.b,to:"/".concat(n,"/1"),title:"first page",style:{display:"".concat(1===t||o<=2?"none":"")}},s.a.createElement(D.a,{fontSize:"small"})),s.a.createElement(M.a,{onClick:function(){return e.props.getNewsId(t-1)},component:f.b,to:"/".concat(n,"/").concat(t-1),title:"prev",style:{display:"".concat(1===t?"none":"")}},s.a.createElement(H.a,{fontSize:"small"})),r,s.a.createElement(M.a,{onClick:function(){return e.props.getNewsId(t+1)},component:f.b,to:"/".concat(n,"/").concat(t+1),title:"next",style:{display:"".concat(t===o?"none":"")}},s.a.createElement(A.a,{fontSize:"small"})),s.a.createElement(M.a,{onClick:function(){return e.props.getNewsId(o)},component:f.b,to:"/".concat(n,"/").concat(o),title:"last page",style:{display:"".concat(t===o||o<=2?"none":"")}},s.a.createElement(q.a,{fontSize:"small"})))}}]),t}(s.a.Component),R=function(e){function t(e){var a;switch(Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e)))._update=0,a.arr=[],a.maxNewsOnPage=25,a.flag=!1,a.state={newsArr:[],stop:!0,getMore:0,renderUser:!1,renderCom:!1,loading:s.a.createElement("div",{className:"loading"},s.a.createElement(E.a,null))},a.handleClick=a.handleClick.bind(Object(p.a)(Object(p.a)(a))),e.show){case"topstories":a.show="news";break;case"askstories":a.show="ask";break;case"jobstories":a.show="jobs";break;case"showstories":a.show="show";break;case"newstories":a.show="newest"}return a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=window.location.pathname.split("/").slice(-2)[0];"news"!==e&&"ask"!==e&&"jobs"!==e&&"show"!==e&&"newest"!==e||this.getNewsId(),this.disableLinks()}},{key:"disableLinks",value:function(){var e=document.querySelectorAll(".Nav a");if(this.state.stop){for(var t=0;t<e.length;t++)e[t].classList.remove("disabled");console.log("active")}else{for(var a=0;a<e.length;a++)e[a].classList.add("disabled");console.log("disabled")}}},{key:"getNewsId",value:function(e){var t=this;if(!this.flag){this.setState({stop:!1}),this.flag=!0;var a=new XMLHttpRequest;a.open("GET","https://hacker-news.firebaseio.com/v0/".concat(this.props.show,".json?print=pretty")),a.send(),a.onreadystatechange=function(){if(4===a.readyState)if(200!==a.status)t.loadError(a);else if(e)t.news(JSON.parse(a.responseText),e),console.log(22222222);else{var n=window.location.pathname.split("/").slice(-1)[0];n=Number(n)?n:1;var s=JSON.parse(a.responseText);t.news(s,!1,(n-1)*t.maxNewsOnPage),t.setState({length:s.length}),console.log(s)}}}}},{key:"componentDidUpdate",value:function(){console.log("update: ".concat(++this._update)),this.disableLinks();var e=window.location.pathname.split("/").slice(-2)[0];if(this.props.show!==this.show)switch(this.props.show){case"topstories":this.show="news";break;case"askstories":this.show="ask";break;case"jobstories":this.show="jobs";break;case"showstories":this.show="show";break;case"newstories":this.show="newest"}"news"!==e&&"ask"!==e&&"jobs"!==e&&"show"!==e&&"newest"!==e||this.getNewsId()}},{key:"news",value:function(e,t,a){this.setState({stop:!1,getMore:t||a}),console.log(11111111);for(var n=t||a,s=0,o=n+this.maxNewsOnPage,r=this.maxNewsOnPage,i=n;i<o;i++){if(!e[i+1]){this.getNews(e[i],s+1,s);break}this.getNews(e[i],r,s),s++}}},{key:"loadError",value:function(e){console.log(e.status,e.statusText),this.setState({loading:s.a.createElement("div",{className:"loading"},"".concat(e.status," ").concat(e.statusText,". Please try againe later or refresh page"))})}},{key:"getNews",value:function(e,t,a){var n=this,s=new XMLHttpRequest;s.open("GET","https://hacker-news.firebaseio.com/v0/item/".concat(e,".json?print=pretty")),s.send(),s.onreadystatechange=function(){var e;4===s.readyState&&(200!==s.status?n.loadError(s):(n.state.stop||(n.arr[a]=JSON.parse(s.responseText),e=n.arr.filter(function(e){return null!==e}).filter(function(e){return!e.deleted}).filter(function(e){return!e.dead})),n.arr.length===t&&(n.setState({newsArr:e,stop:!0}),n.arr=[],n.flag=!1)))}}},{key:"handleClick",value:function(e,t,a){!Array.isArray(e)&&e?(this.setState({renderUser:!0,userId:e,renderCom:!1}),console.log("user")):Array.isArray(e)?(this.setState({renderCom:!0,commentsId:e,newsItemId:t,currItem:a}),console.log(11111)):(this.setState({renderUser:!1,renderCom:!1}),console.log(33333333))}},{key:"render",value:function(){var e=this,t=this.state.loading,a=[],n=0,o=[],r=this.state.userId?this.state.userId:window.location.pathname.split("/").slice(-1)[0];if(this.state.stop){var i=Math.ceil(this.state.length/this.maxNewsOnPage);t=this.state.newsArr.map(function(t,a){return s.a.createElement(v,{title:t.title,by:t.by,url:t.url,score:t.score,key:t.id,number:a+1+e.state.getMore,handleClick:e.handleClick,comments:t.kids,time:t.time,id:t.id,item:t})});for(var c=1;c<=i;++c)a[c-1]={page:c,currPage:n},n+=this.maxNewsOnPage;a.length===i&&(o=s.a.createElement(J,{show:this.show,num:a,getNewsId:function(){return e.getNewsId}}))}return s.a.createElement(C.c,null,s.a.createElement(C.a,{exact:!0,path:"/".concat(this.show,"/:id"),render:function(){return s.a.createElement("div",null,o,t,o)}}),s.a.createElement(C.a,{path:"/user/".concat(r),render:function(){return s.a.createElement(g,{id:r,handleClick:e.handleClick,page:e.props.show})}}),s.a.createElement(C.a,{path:"/item/".concat(this.state.newsItemId?this.state.newsItemId:window.location.pathname.split("/").slice(-1)[0]),render:function(){return s.a.createElement(O,{handleClick:e.handleClick,commentsId:e.state.commentsId?e.state.commentsId:window.location.pathname.split("/").slice(-1)[0],btnBack:!0,parent:e.state.currItem,page:e.props.show})}}))}}]),t}(s.a.Component),U=a(55),z=(a(206),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).nav=s.a.createRef(),e.handleClick=e.handleClick.bind(Object(p.a)(Object(p.a)(e))),e.state={news:!1,newest:!1,ask:!1,show:!1,jobs:!1},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.changeClassName()}},{key:"changeClassName",value:function(){for(var e=window.location.pathname.split("/").slice(-2)[0],t=document.querySelectorAll(".Nav a"),a=0;a<t.length;a++){e===t[a].href.split("/").slice(-2)[0]&&this.setState(Object(U.a)({},e,!0))}}},{key:"handleClick",value:function(e){var t=e.target.href.split("/").slice(-2)[0];this.setState(Object(U.a)({news:!1,show:!1,newest:!1,ask:!1,jobs:!1},t,!0))}},{key:"render",value:function(){return s.a.createElement("div",{className:"Nav",ref:this.nav},s.a.createElement(f.b,{to:"/news/1",className:this.state.news?"active":"",onClick:this.handleClick},"React HN"),s.a.createElement("div",{className:"nav-second"},s.a.createElement("span",{className:"nav-separator"}),s.a.createElement(f.b,{to:"/newest/1",className:this.state.newest?"active":"",onClick:this.handleClick},"New"),s.a.createElement("span",{className:"nav-separator"}),s.a.createElement(f.b,{to:"/ask/1",className:this.state.ask?"active":"",onClick:this.handleClick},"Ask"),s.a.createElement("span",{className:"nav-separator"}),s.a.createElement(f.b,{to:"/show/1",className:this.state.show?"active":"",onClick:this.handleClick},"Show"),s.a.createElement("span",{className:"nav-separator"}),s.a.createElement(f.b,{to:"/jobs/1",className:this.state.jobs?"active":"",onClick:this.handleClick},"Jobs")))}}]),t}(s.a.Component)),B=(a(207),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log(window.location.pathname),"/reacthn/"===window.location.pathname&&(window.location="/reacthn/news/1")}},{key:"render",value:function(){return s.a.createElement("div",{className:"Main"},s.a.createElement(C.c,null,s.a.createElement(C.a,{exact:!0,path:"/news/:id",render:function(){return s.a.createElement(R,{show:"topstories"})}}),s.a.createElement(C.a,{path:"/ask/:id",render:function(){return s.a.createElement(R,{show:"askstories"})}}),s.a.createElement(C.a,{path:"/jobs/:id",render:function(){return s.a.createElement(R,{show:"jobstories"})}}),s.a.createElement(C.a,{path:"/show/:id",render:function(){return s.a.createElement(R,{show:"showstories"})}}),s.a.createElement(C.a,{path:"/user",render:function(){return s.a.createElement(R,null)}}),s.a.createElement(C.a,{path:"/item",render:function(){return s.a.createElement(R,null)}}),s.a.createElement(C.a,{path:"/newest/:id",render:function(){return s.a.createElement(R,{show:"newstories"})}}),"/reacthn/"===window.location.pathname?null:s.a.createElement(C.a,{render:function(){return s.a.createElement("h1",{style:{textAlign:"center"}},"Not Found")}})))}}]),t}(s.a.Component)),G=(a(208),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"Footer"},"\xa9 Dmitry Saveliev, 2019")}}]),t}(s.a.Component)),X=a(84),W=a.n(X),Y=a(85),F=a.n(Y),V=(a(209),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector(".Top");window.addEventListener("scroll",function(){var t=window.pageYOffset,a=e.classList.contains("back-to-top-show");!a&&t>=100?e.classList.add("back-to-top-show"):a&&t<100&&e.classList.remove("back-to-top-show")})}},{key:"scrollToTop",value:function(e){e.preventDefault(),document.querySelector("body").scrollIntoView({behavior:"smooth",block:"start"})}},{key:"render",value:function(){return s.a.createElement("div",{className:"Top"},s.a.createElement(W.a,{size:"medium",title:"To top",color:"primary",onClick:this.scrollToTop},s.a.createElement(F.a,null)))}}]),t}(s.a.Component)),$=a(86);a.n($).a.polyfill();var K=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log(this.props.location),s.a.createElement("div",{className:"App"},s.a.createElement(z,null),s.a.createElement(B,null),s.a.createElement(G,null),s.a.createElement(V,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(f.a,{basename:"/reacthn"},s.a.createElement(C.a,{render:function(e){var t=e.location;return s.a.createElement(K,{location:t})}})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},87:function(e,t,a){e.exports=a(211)},92:function(e,t,a){},93:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.3f541a6d.chunk.js.map