"use strict";(self.webpackChunkcoding35=self.webpackChunkcoding35||[]).push([["main"],{9355:(k,R,c)=>{var C=c(1481),l=c(6264),t=c(4650);class w{}w.\u0275fac=function(e){return new(e||w)},w.\u0275cmp=t.Xpm({type:w,selectors:[["app-about"]],decls:15,vars:0,consts:[[1,"content-component"],[1,"page-title"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"h3",1),t._uU(2,"About"),t.qZA(),t.TgZ(3,"article")(4,"p"),t._uU(5," This site is a collection of material created designed to drive personal learning and growth. It follows the philosophy of learning by doing and teaching and is a work in progress. The content is organized into three main categories: Architecture, Design, and Coding.. "),t.qZA(),t.TgZ(6,"ul")(7,"li"),t._uU(8,"The Architecture section contains articles that I have written to explore topics that will drive an ever increasing understanding of the complex systems that we build."),t.qZA(),t.TgZ(9,"li"),t._uU(10,"The Design section contains theoretical application of design techniques."),t.qZA(),t.TgZ(11,"li"),t._uU(12,"The Coding section contains tutorials and projects that I have created to learn new technologies."),t.qZA()(),t.TgZ(13,"p"),t._uU(14," I hope you find something useful here. If you have any questions or comments, please feel free to contact me. "),t.qZA()()())},styles:[".page-title[_ngcontent-%COMP%]{font-weight:400;font-size:25px}"]});class M{}M.\u0275fac=function(e){return new(e||M)},M.\u0275cmp=t.Xpm({type:M,selectors:[["app-contact"]],decls:9,vars:0,consts:[[1,"content-component"],[1,"page-title"],["src","https://docs.google.com/forms/d/e/1FAIpQLSdGWiNsEYO7uO9233EB4xRLTlItT7F9Jg4VXi2Yv88jecaq6g/viewform?embedded=true","width","640","height","677","frameborder","0","marginheight","0","marginwidth","0"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"h3",1),t._uU(2,"Contact"),t.qZA(),t.TgZ(3,"article")(4,"p"),t._uU(5," If you have any questions or comments, please feel free to contact me. "),t.qZA(),t.TgZ(6,"p")(7,"iframe",2),t._uU(8,"Loading\u2026"),t.qZA()()()())},styles:["app-contact[_ngcontent-%COMP%]{padding:500px}"]});var $=c(727),u=(()=>{return(n=u||(u={})).Architecture="architecture",n.Video="video",n.Book="book",n.Coding="coding",n.Any="any",n.Electronics="electronics",n.Design="design",n.Search="search",u;var n})();class g{constructor(){this.ee=new t.vpe}}g.\u0275fac=function(e){return new(e||g)},g.\u0275prov=t.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"});var p=c(6895);class v{}v.\u0275fac=function(e){return new(e||v)},v.\u0275cmp=t.Xpm({type:v,selectors:[["app-not-found-component"]],decls:2,vars:0,template:function(e,o){1&e&&(t.TgZ(0,"h3"),t._uU(1,"Page Not Found"),t.qZA())}});var h=c(3546),Y=c(7331),z=c(4859);function G(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"mat-chip",16),t.NdJ("click",function(){const s=t.CHM(o).$implicit,a=t.oxw(3);return t.KtG(a.handleCategoryChipClick(s))}),t._uU(1),t.qZA()}if(2&n){const o=e.$implicit;t.xp6(1),t.hij(" ",o," ")}}function K(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"div",5)(1,"mat-card",6)(2,"mat-card-header",7)(3,"mat-card-title",8),t._uU(4),t.qZA(),t.TgZ(5,"mat-card-subtitle"),t._uU(6),t.qZA()(),t.TgZ(7,"img",9),t.NdJ("click",function(){const s=t.CHM(o).$implicit,a=t.oxw(2);return t.KtG(a.handleReadMore(s.id))}),t.qZA(),t.TgZ(8,"mat-card-content")(9,"p"),t._uU(10),t.qZA(),t.TgZ(11,"mat-chip-listbox",10),t.YNc(12,G,2,1,"mat-chip",11),t.qZA(),t.TgZ(13,"div",12)(14,"div",13),t._uU(15),t.ALo(16,"date"),t.qZA(),t.TgZ(17,"mat-card-actions",14)(18,"button",15),t.NdJ("click",function(){const s=t.CHM(o).$implicit,a=t.oxw(2);return t.KtG(a.handleReadMore(s.id))}),t._uU(19,"READ MORE"),t.qZA()()()()()()}if(2&n){const o=e.$implicit;t.xp6(4),t.Oqu(o.title),t.xp6(2),t.Oqu(o.subtitle),t.xp6(1),t.s9C("src",o.image,t.LSH),t.s9C("alt",o.imageAlt),t.xp6(3),t.hij(" ",o.description," "),t.xp6(2),t.Q6J("ngForOf",o.categories),t.xp6(3),t.Oqu(t.lcZ(16,7,o.date))}}function V(n,e){if(1&n&&(t.TgZ(0,"div",3),t.YNc(1,K,20,9,"div",4),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.contentList)}}function W(n,e){1&n&&t._UZ(0,"app-not-found-component")}class d{constructor(e,o,i){this.route=e,this.router=o,this.search=i,this.contentList=[],this.notFound=!1,this.pageTitle="Not Found",this.fetchUrl="../../assets/json/content.json",this.filter=u.Architecture,this.routerSubscription=new $.w0,this.category=""}ngOnInit(){this.routerSubscription=this.router.events.subscribe(e=>{if(e instanceof l.m2||e instanceof l.Xs){switch(this.route.snapshot.data.page){case"architecture":this.filter=u.Architecture,this.pageTitle="Architecture";break;case"design":this.filter=u.Design,this.pageTitle="Design";break;case"coding":this.filter=u.Coding,this.pageTitle="Coding";break;case"video":this.filter=u.Video,this.pageTitle="Video Tutorials";break;case"book":this.filter=u.Book,this.pageTitle="Book List";break;case"electronics":this.filter=u.Electronics,this.pageTitle="Electronics";break;case"category":this.filter=u.Any,this.pageTitle="Filtering by Category: ",this.category=this.route.snapshot.params.search;break;default:this.pageTitle="Not Found",this.notFound=!0}fetch(this.fetchUrl).then(i=>i.json()).then(i=>{let r=i;this.contentList=this.filter==u.Any?r.filter(s=>s.categories.includes(this.route.snapshot.params.search)).sort((s,a)=>new Date(a.date).getTime()-new Date(s.date).getTime()):r.filter(s=>s.type==this.filter).sort((s,a)=>new Date(a.date).getTime()-new Date(s.date).getTime())})}}),this.search.ee.subscribe(e=>{this.category=e||"All",this.filter=u.Search,fetch("../../assets/json/content.json").then(o=>o.json()).then(o=>{this.contentList=o.filter(s=>s.title.toLowerCase().includes(e.toLowerCase())||s.subtitle.toLowerCase().includes(e.toLowerCase())||s.categories.some(a=>a.toLowerCase().includes(e.toLowerCase()))||s.tags.some(a=>a.toLowerCase().includes(e.toLowerCase()))||s.description.toLowerCase().includes(e.toLowerCase())).sort((s,a)=>new Date(a.date).getTime()-new Date(s.date).getTime());let r=this.contentList.length;this.pageTitle=`Search returned ${r} ${1==r?"result":"results"} for term: `})})}handleReadMore(e){scrollTo(0,0);let o=this.contentList.find(i=>i.id==e)?.type;this.router.navigate([`/${o}/${e}`])}handleCategoryChipClick(e){this.router.navigate([`/category/${e}`])}ngOnDestroy(){this.routerSubscription.unsubscribe()}}d.\u0275fac=function(e){return new(e||d)(t.Y36(l.gz),t.Y36(l.F0),t.Y36(g))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-content-list"]],decls:6,vars:6,consts:[[1,"list-page-title"],["class","container-list",4,"ngIf","ngIfElse"],["notFoundTemplate",""],[1,"container-list"],["class","card",4,"ngFor","ngForOf"],[1,"card"],[1,"content-card"],[1,"app-card-header"],[1,"card-title"],["mat-card-image","",3,"src","alt","click"],["aria-label","Categories",1,"list-box"],[3,"click",4,"ngFor","ngForOf"],[1,"card-footer"],[1,"card-footer-item-date"],[1,"card-footer-item"],["mat-button","",3,"click"],[3,"click"]],template:function(e,o){if(1&e&&(t.TgZ(0,"h3",0),t._uU(1),t.ALo(2,"titlecase"),t.qZA(),t.YNc(3,V,2,1,"div",1),t.YNc(4,W,1,0,"ng-template",null,2,t.W1O)),2&e){const i=t.MAs(5);t.xp6(1),t.AsE("",o.pageTitle," ",t.lcZ(2,4,o.category)," "),t.xp6(2),t.Q6J("ngIf",!o.notFound)("ngIfElse",i)}},dependencies:[p.sg,p.O5,v,h.a8,h.hq,h.dn,h.dk,h.G2,h.$j,h.n5,Y.HS,Y.z2,z.lW,p.rS,p.uU],styles:[".container-list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr))}.card[_ngcontent-%COMP%]{padding:5px;margin:10px}.app-card-header[_ngcontent-%COMP%]{padding:16px}.list-page-title[_ngcontent-%COMP%]{font-weight:400;font-size:25px;padding-left:15px}.card-title[_ngcontent-%COMP%]{font-size:20px}.card-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.card-footer[_ngcontent-%COMP%]   .card-footer-item-date[_ngcontent-%COMP%]{padding:25px 0;text-align:center}"]});class tt{constructor(e,o){this.source=e,this.target=o}}class A{constructor(e,o,i){this.ticker=new t.vpe,this.nodes=[],this.links=[],this.nodes=e,this.links=o,this.initSimulation(i)}connectNodes(e,o){let i;if(!this.nodes[e]||!this.nodes[o])throw new Error("One of the nodes does not exist");i=new tt(e,o),this.simulation.stop(),this.links.push(i),this.simulation.alphaTarget(.3).restart(),this.initLinks()}initNodes(){if(!this.simulation)throw new Error("simulation was not initialized yet");this.simulation.nodes(this.nodes)}initLinks(){if(!this.simulation)throw new Error("simulation was not initialized yet")}initSimulation(e){}}A.\u0275fac=function(e){return new(e||A)(t.Y36("isFactory"),t.Y36("isFactory"),t.Y36("isFactory"))},A.\u0275cmp=t.Xpm({type:A,selectors:[["app-force-directed-tree"]],decls:1,vars:0,consts:[["id","ForceDirectedTree"]],template:function(e,o){1&e&&t._UZ(0,"figure",0)}});class O{constructor(e){this.sanitizer=e}transform(e,o){switch(o){case"html":return this.sanitizer.bypassSecurityTrustHtml(e);case"style":return this.sanitizer.bypassSecurityTrustStyle(e);case"script":return this.sanitizer.bypassSecurityTrustScript(e);case"url":return this.sanitizer.bypassSecurityTrustUrl(e);case"resourceUrl":return this.sanitizer.bypassSecurityTrustResourceUrl(e);default:throw new Error(`Invalid safe type specified: ${o}`)}}}function et(n,e){if(1&n&&(t.TgZ(0,"article")(1,"h2"),t._uU(2),t.qZA(),t.TgZ(3,"span"),t._uU(4),t.ALo(5,"date"),t.qZA(),t._UZ(6,"div",2),t.ALo(7,"safe"),t.qZA()),2&n){const o=t.oxw();t.xp6(2),t.Oqu(null==o.pageContent?null:o.pageContent.title),t.xp6(2),t.lnq("",t.lcZ(5,5,null==o.pageContent?null:o.pageContent.date)," | Posted By: ",null==o.pageContent?null:o.pageContent.author," | ",null==o.pageContent?null:o.pageContent.readTime," min read"),t.xp6(2),t.Q6J("innerHtml",t.xi3(7,7,null==o.pageContent?null:o.pageContent.content,"html"),t.oJD)}}function nt(n,e){1&n&&t._UZ(0,"app-not-found-component")}O.\u0275fac=function(e){return new(e||O)(t.Y36(C.H7,16))},O.\u0275pipe=t.Yjl({name:"safe",type:O,pure:!0});class m{constructor(e,o,i){this.route=e,this.router=o,this.search=i,this.notFound=!1,this.routerSubscription=new $.w0}ngOnInit(){this.routerSubscription=this.router.events.subscribe(e=>{if(e instanceof l.m2||e instanceof l.Xs){let o=this.route.snapshot.paramMap.get("id");fetch("../../assets/json/content.json").then(i=>i.json()).then(i=>{fetch(`../../assets/templates/${o}/page.html`).then(r=>r.text()).then(r=>{this.pageContent=i.filter(a=>a.id===o).pop(),void 0===this.pageContent||r.indexOf("Cannot GET /assets")>-1?this.notFound=!0:(this.pageContent.content=r,this.pageContent.tags.some(a=>"snippet"===a)&&setTimeout(()=>{window.PR.prettyPrint()},0))})})}}),this.search.ee.subscribe(e=>{console.log(e),this.router.navigate(["search"])})}ngOnDestroy(){this.routerSubscription.unsubscribe()}}m.\u0275fac=function(e){return new(e||m)(t.Y36(l.gz),t.Y36(l.F0),t.Y36(g))},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-page"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["notFoundTemplate",""],[3,"innerHtml"]],template:function(e,o){if(1&e&&(t.YNc(0,et,8,10,"article",0),t.YNc(1,nt,1,0,"ng-template",null,1,t.W1O)),2&e){const i=t.MAs(2);t.Q6J("ngIf",!o.notFound)("ngIfElse",i)}},dependencies:[p.O5,v,p.uU,O],styles:["article[_ngcontent-%COMP%]{padding:20px}"]});const ot=[{path:"architecture/:id",component:m,data:{page:"architecture"}},{path:"architecture",component:d,data:{page:"architecture"}},{path:"design/:id",component:m,data:{page:"design"}},{path:"design",component:d,data:{page:"design"}},{path:"coding/:id",component:m,data:{page:"coding"}},{path:"coding",component:d,data:{page:"coding"}},{path:"video/:id",component:m,data:{page:"video"}},{path:"video",component:d,data:{page:"video"}},{path:"productivity/:id",component:m,data:{page:"productivity"}},{path:"productivity",component:d,data:{page:"productivity"}},{path:"electronics/:id",component:m,data:{page:"electronics"}},{path:"electronics",component:d,data:{page:"electronics"}},{path:"book/:id",component:m,data:{page:"book"}},{path:"book",component:d,data:{page:"book"}},{path:"category/:search",component:d,data:{page:"category"}},{path:"about",component:w,data:{page:"about"}},{path:"contact",component:M,data:{page:"contact"}},{path:"tree",component:A,data:{page:"tree"}},{path:"**",component:d,data:{page:"architecture"}},{path:"",component:d,data:{page:"architecture"}}];class f{}f.\u0275fac=function(e){return new(e||f)},f.\u0275mod=t.oAB({type:f}),f.\u0275inj=t.cJS({imports:[l.Bz.forRoot(ot),l.Bz]});class b{}b.\u0275fac=function(e){return new(e||b)},b.\u0275cmp=t.Xpm({type:b,selectors:[["app-top-bar"]],decls:2,vars:0,template:function(e,o){1&e&&(t.TgZ(0,"div"),t._uU(1,'"If you want to master something, teach it." - Richard Feynman'),t.qZA())},styles:["div[_ngcontent-%COMP%]{padding:10px 15px;color:#fff;background:#054f7d;text-align:center;font-size:16px}"]});var E=c(3683);class F{}F.\u0275fac=function(e){return new(e||F)},F.\u0275cmp=t.Xpm({type:F,selectors:[["app-bottom-bar"]],decls:1,vars:0,template:function(e,o){1&e&&t._UZ(0,"div")},styles:["div[_ngcontent-%COMP%]{background:#007ec0;padding:13px 0;color:#fff}"]});const it=function(){return["/architecture"]},at=function(){return["/design"]},st=function(){return["/coding"]},rt=function(){return["/about"]},ct=function(){return["/contact"]};class L{}L.\u0275fac=function(e){return new(e||L)},L.\u0275cmp=t.Xpm({type:L,selectors:[["app-top-nav"]],decls:21,vars:10,consts:[[1,"container"],["color","primary"],[1,"menu-spacer"],["fxShow","true","fxHide.lt-md","",1,"menu-link-list"],["mat-button","",3,"routerLink"],["target","_blank","href","https://www.linkedin.com/in/adam-reed-060854240/",1,"linkedin"],["role","img","viewBox","0 0 24 24","xmlns","http://www.w3.org/2000/svg","fill","#054f7d",2,"width","28px"],["d","M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"mat-toolbar",1)(2,"mat-toolbar-row"),t._UZ(3,"span",2),t.TgZ(4,"div",3)(5,"a",4),t._uU(6,"Architecture"),t.qZA(),t.TgZ(7,"a",4),t._uU(8,"Design"),t.qZA(),t.TgZ(9,"a",4),t._uU(10,"Coding"),t.qZA(),t.TgZ(11,"a",4),t._uU(12,"About"),t.qZA(),t.TgZ(13,"a",4),t._uU(14,"Contact"),t.qZA(),t.TgZ(15,"a",5),t.O4$(),t.TgZ(16,"svg",6)(17,"title"),t._uU(18,"LinkedIn icon"),t.qZA(),t._UZ(19,"path",7),t.qZA()()()()(),t.kcU(),t._UZ(20,"app-bottom-bar"),t.qZA()),2&e&&(t.xp6(5),t.Q6J("routerLink",t.DdM(5,it)),t.xp6(2),t.Q6J("routerLink",t.DdM(6,at)),t.xp6(2),t.Q6J("routerLink",t.DdM(7,st)),t.xp6(2),t.Q6J("routerLink",t.DdM(8,rt)),t.xp6(2),t.Q6J("routerLink",t.DdM(9,ct)))},dependencies:[E.Ye,E.rD,z.zs,l.rH,F],styles:[".menu-spacer[_ngcontent-%COMP%]{flex:1 1 auto}a.linkedin[_ngcontent-%COMP%]{top:8px;position:relative}.menu-link-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]});class P{}P.\u0275fac=function(e){return new(e||P)},P.\u0275cmp=t.Xpm({type:P,selectors:[["app-header"]],decls:2,vars:0,template:function(e,o){1&e&&t._UZ(0,"app-top-bar")(1,"app-top-nav")},dependencies:[b,L],styles:[".two-col[_ngcontent-%COMP%]{padding:0 10em}"]});class lt{constructor(e,o){this.title="",this.linkList=[],this.title=e,o.forEach(i=>{this.linkList.push(i)})}}class pt{constructor(e){this.url="",this.icon="",this.target="_self",this.title=e,this.url=e.toLowerCase()}}var j=c(6087),B=c(3336),D=c(9549),Q=c(4144),I=c(4006);function dt(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"mat-list-item",7),t.NdJ("click",function(){const s=t.CHM(o).$implicit,a=t.oxw(2);return t.KtG(a.handleClick(s.url))}),t.TgZ(1,"span",8)(2,"span",9),t._uU(3),t.ALo(4,"titlecase"),t.qZA(),t.TgZ(5,"mat-icon",10),t._uU(6,"keyboard_arrow_right"),t.qZA()()()}if(2&n){const o=e.$implicit;t.xp6(3),t.Oqu(t.lcZ(4,1,o.title))}}function ut(n,e){if(1&n&&(t.TgZ(0,"mat-list",4)(1,"div",5),t._uU(2),t.qZA(),t.YNc(3,dt,7,3,"mat-list-item",6),t.qZA()),2&n){const o=e.$implicit;t.xp6(2),t.Oqu(o.title),t.xp6(1),t.Q6J("ngForOf",o.linkList)}}class U{constructor(e,o){this.router=e,this.search=o,this.value="",this.categoryLinks=[]}ngOnInit(){fetch("../../assets/json/content.json").then(e=>e.json()).then(e=>{let r=e.map(a=>a.categories).flat().filter((a,H,ft)=>ft.indexOf(a)===H).map(a=>new pt(a)),s=new Array;s.push(new lt("Categories",r.sort((a,H)=>a.title.localeCompare(H.title)))),this.categoryLinks=s})}handleClick(e){scrollTo(0,0),this.router.navigate(["/category/"+e])}searchEvent(e){this.search.ee.emit(this.value)}}U.\u0275fac=function(e){return new(e||U)(t.Y36(l.F0),t.Y36(g))},U.\u0275cmp=t.Xpm({type:U,selectors:[["app-right-nav"]],decls:8,vars:2,consts:[["appearance","outline"],["matInput","",3,"ngModel","ngModelChange"],["matSuffix",""],["role","list",4,"ngFor","ngForOf"],["role","list"],[1,"list-title"],["class","list-item","role","listitem",3,"click",4,"ngFor","ngForOf"],["role","listitem",1,"list-item",3,"click"],[1,"list-item-cell"],[1,"list-item-link"],[1,"mat-icon-list-item"]],template:function(e,o){1&e&&(t.TgZ(0,"div")(1,"mat-form-field",0)(2,"mat-label"),t._uU(3,"Search"),t.qZA(),t.TgZ(4,"input",1),t.NdJ("ngModelChange",function(r){return o.value=r})("ngModelChange",function(r){return o.searchEvent(r)}),t.qZA(),t.TgZ(5,"mat-icon",2),t._uU(6,"search"),t.qZA()(),t.YNc(7,ut,4,2,"mat-list",3),t.qZA()),2&e&&(t.xp6(4),t.Q6J("ngModel",o.value),t.xp6(3),t.Q6J("ngForOf",o.categoryLinks))},dependencies:[p.sg,j.i$,j.Tg,B.Hw,D.KE,D.hX,D.R9,Q.Nt,I.Fj,I.JJ,I.On,p.rS],styles:[".list-title[_ngcontent-%COMP%]{background-color:#054f7d;color:#fff;margin:0 0 8px;padding:15px;text-transform:uppercase;font-size:1.15rem;font-weight:700}.list-item[_ngcontent-%COMP%]{color:#004987;font-size:18px;font-weight:700;margin-bottom:4px;background-color:#9dc3d6}.list-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#004987;text-decoration:none}.list-item[_ngcontent-%COMP%]   .list-item-cell[_ngcontent-%COMP%]{color:#fff}.list-item[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#007ec0}.list-item[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:#fff}.mat-icon-list-item[_ngcontent-%COMP%]{float:right}"]});class q{constructor(){}}function mt(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"li")(1,"a",1),t.NdJ("click",function(){const s=t.CHM(o).$implicit,a=t.oxw();return t.KtG(a.handleLinkClick(s.url))}),t._uU(2),t.qZA()()}if(2&n){const o=e.$implicit;t.xp6(1),t.Q6J("target",o.target),t.xp6(1),t.Oqu(o.title)}}q.\u0275fac=function(e){return new(e||q)},q.\u0275cmp=t.Xpm({type:q,selectors:[["app-content"]],decls:5,vars:0,consts:[[1,"container-main"],[1,"content-area"],[1,"sidebar"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"router-outlet"),t.qZA(),t.TgZ(3,"div",2),t._UZ(4,"app-right-nav"),t.qZA()())},dependencies:[l.lC,U],styles:['.container-main[_ngcontent-%COMP%]{display:grid;grid-template-areas:"content-area sidebar"}.content-area[_ngcontent-%COMP%]{grid-area:content-area}.sidebar[_ngcontent-%COMP%]{grid-area:sidebar;position:absolute;right:0;top:20%}@media screen and (max-width: 768px){.sidebar[_ngcontent-%COMP%]{grid-area:unset;position:initial}.container-main[_ngcontent-%COMP%]{grid-template-areas:"content-area"}}']});class S{constructor(e){this.router=e}handleLinkClick(e){scrollTo(0,0),this.router.navigate([e])}}function gt(n,e){if(1&n&&(t.TgZ(0,"div"),t._UZ(1,"app-footer-link-list",1),t.qZA()),2&n){const o=e.$implicit;t.xp6(1),t.Q6J("links",o)}}S.\u0275fac=function(e){return new(e||S)(t.Y36(l.F0))},S.\u0275cmp=t.Xpm({type:S,selectors:[["app-footer-link-list"]],inputs:{links:"links"},decls:4,vars:2,consts:[[4,"ngFor","ngForOf"],[3,"target","click"]],template:function(e,o){1&e&&(t.TgZ(0,"ul")(1,"h3"),t._uU(2),t.qZA(),t.YNc(3,mt,3,2,"li",0),t.qZA()),2&e&&(t.xp6(2),t.Oqu(null==o.links?null:o.links.title),t.xp6(1),t.Q6J("ngForOf",null==o.links?null:o.links.linkList))},dependencies:[p.sg],styles:["ul[_ngcontent-%COMP%]{list-style:none}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;font-size:14px;line-height:1.5;display:block;padding:5px 0}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{cursor:pointer;color:#c5cbd1;text-decoration:none}"]});class N{constructor(){this.linkLists=[]}ngOnInit(){fetch("../../assets/json/footer-links.json").then(e=>e.json()).then(e=>{this.linkLists=e})}}N.\u0275fac=function(e){return new(e||N)},N.\u0275cmp=t.Xpm({type:N,selectors:[["app-footer"]],decls:2,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"links"]],template:function(e,o){1&e&&(t.TgZ(0,"footer"),t.YNc(1,gt,2,1,"div",0),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",o.linkLists))},dependencies:[p.sg,S],styles:["footer[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;width:100%;margin:0;padding:0;column-gap:5em;background-color:#333;color:#fff}"]});class J{constructor(){this.title="coding35"}}J.\u0275fac=function(e){return new(e||J)},J.\u0275cmp=t.Xpm({type:J,selectors:[["app-root"]],decls:4,vars:0,consts:[[1,"parent"],[1,"header"],[1,"main"],[1,"footer"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-header",1)(2,"app-content",2)(3,"app-footer",3),t.qZA())},dependencies:[P,q,N],styles:['.parent[_ngcontent-%COMP%]{height:100vh;display:grid;grid-template-columns:1fr 3fr 1fr;grid-template-rows:1fr 1fr 1fr;grid-template-areas:"header header header header" "main main . sidebar" "footer footer footer footer"}.header[_ngcontent-%COMP%]{grid-area:header}.main[_ngcontent-%COMP%]{grid-area:main}.sidebar[_ngcontent-%COMP%]{grid-area:sidebar}.footer[_ngcontent-%COMP%]{grid-area:footer}@media screen and (max-width: 768px){.parent[_ngcontent-%COMP%]{grid-template-areas:"header header header header" "main main main main" "footer footer footer footer"}}']});var ht=c(1242),X=c(1516);class y{}y.\u0275fac=function(e){return new(e||y)},y.\u0275mod=t.oAB({type:y}),y.\u0275inj=t.cJS({imports:[p.ez]});class _{}_.\u0275fac=function(e){return new(e||_)},_.\u0275mod=t.oAB({type:_}),_.\u0275inj=t.cJS({imports:[p.ez,y,j.ie,B.Ps,h.QW,Y.Hi,z.ot,D.lN,Q.c,I.u5,f]});class T{}T.\u0275fac=function(e){return new(e||T)},T.\u0275mod=t.oAB({type:T}),T.\u0275inj=t.cJS({imports:[C.b2,X.PW,p.ez,E.g0,ht.SJ,j.ie,B.Ps,z.ot,l.Bz,_]});class x{}x.\u0275fac=function(e){return new(e||x)},x.\u0275mod=t.oAB({type:x}),x.\u0275inj=t.cJS({imports:[p.ez,l.Bz]});class Z{}Z.\u0275fac=function(e){return new(e||Z)},Z.\u0275mod=t.oAB({type:Z,bootstrap:[J]}),Z.\u0275inj=t.cJS({providers:[{provide:p.S$,useClass:p.Do}],imports:[C.b2,T,_,x,X.PW,f]}),C.q6().bootstrapModule(Z).catch(n=>console.error(n))}},k=>{k.O(0,["vendor"],()=>k(k.s=9355)),k.O()}]);