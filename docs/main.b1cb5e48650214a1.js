(self.webpackChunkcoding35=self.webpackChunkcoding35||[]).push([["main"],{5623:(L,et,l)=>{"use strict";var S=l(1481),t=l(4650),g=l(6264);class P{}P.\u0275fac=function(e){return new(e||P)},P.\u0275cmp=t.Xpm({type:P,selectors:[["app-about"]],decls:15,vars:0,consts:[[1,"content-component"],[1,"page-title"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"h3",1),t._uU(2,"About"),t.qZA(),t.TgZ(3,"article")(4,"p"),t._uU(5," This site is a collection of material created designed to drive personal learning and growth. It follows the philosophy of learning by doing and teaching and is a work in progress. The content is organized into three main categories: Architecture, Design, and Coding.. "),t.qZA(),t.TgZ(6,"ul")(7,"li"),t._uU(8,"The Architecture section contains articles that I have written to explore topics that will drive an ever increasing understanding of the complex systems that we build."),t.qZA(),t.TgZ(9,"li"),t._uU(10,"The Design section contains theoretical application of design techniques."),t.qZA(),t.TgZ(11,"li"),t._uU(12,"The Coding section contains tutorials and projects that I have created to learn new technologies."),t.qZA()(),t.TgZ(13,"p"),t._uU(14," I hope you find something useful here. If you have any questions or comments, please feel free to contact me. "),t.qZA()()())},styles:[".page-title[_ngcontent-%COMP%]{font-weight:400;font-size:25px}"]});class U{}U.\u0275fac=function(e){return new(e||U)},U.\u0275cmp=t.Xpm({type:U,selectors:[["app-contact"]],decls:9,vars:0,consts:[[1,"content-component"],[1,"page-title"],["src","https://docs.google.com/forms/d/e/1FAIpQLSdGWiNsEYO7uO9233EB4xRLTlItT7F9Jg4VXi2Yv88jecaq6g/viewform?embedded=true","width","640","height","677","frameborder","0","marginheight","0","marginwidth","0"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"h3",1),t._uU(2,"Contact"),t.qZA(),t.TgZ(3,"article")(4,"p"),t._uU(5," If you have any questions or comments, please feel free to contact me. "),t.qZA(),t.TgZ(6,"p")(7,"iframe",2),t._uU(8,"Loading\u2026"),t.qZA()()()())},styles:["app-contact[_ngcontent-%COMP%]{padding:500px}"]});var rt=l(5861),nt=l(727);class ct{constructor(e){this.type="",this.title="",this.subtitle="",this.description="",this.avatar="",this.date=new Date,this.author="",this.readTime=0,this.content="",this.tags=[],this.callback=new lt,this.image="",this.imageAlt="",this.id="",this.references=[],this.categories=[],Object.assign(this,e)}}class lt{}var m=(()=>{return(o=m||(m={})).Architecture="architecture",o.Video="video",o.Book="book",o.Coding="coding",o.Any="any",o.Electronics="electronics",o.Design="design",o.Search="search",o.Database="database",m;var o})();class C{constructor(){this.ee=new t.vpe}}C.\u0275fac=function(e){return new(e||C)},C.\u0275prov=t.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"});class f{constructor(e){this.windowObj=e,this.idb=this.windowObj.indexedDB,this.data=[],this.database="Coding35",this.version=1,this.store="ContentStore"}init(){fetch("../../assets/json/content.json").then(n=>n.json()).then(n=>{n.forEach(i=>{this.data.push(new ct(i))})});let e=this.idb.open(this.database,this.version);e.onsuccess=n=>{this.insertData(n)},e.onerror=n=>{console.log("Error opening DB")},e.onupgradeneeded=n=>{this.createDatabase(n)}}insertData(e){this.indexedDb=e?.target?.result,console.log("DB opened successfully");const n=this.indexedDb.transaction([this.store],"readwrite"),i=n.objectStore(this.store);this.data.forEach(a=>{i.get(a.id)?n.objectStore(this.store).put(a):n.objectStore(this.store).add(a)})}createDatabase(e){console.log("Creating DB"),this.indexedDb=e.target.result;let n=this.indexedDb.createObjectStore(this.store,{keyPath:"id"});n.createIndex("content","content",{unique:!1}),n.transaction.oncomplete=i=>{console.info("Create Database Transaction Complete.");const a=this.indexedDb.transaction([this.store],"readwrite");a.oncomplete=s=>{console.info("Transaction Complete.")},a.onerror=s=>{console.error(`Transaction Error. ${s}`)}}}get(e){return new Promise((n,i)=>{this.idb.open(this.database,this.version).onsuccess=s=>{this.indexedDb=s?.target?.result,this.indexedDb.transaction(this.store).objectStore(this.store).get(e).onsuccess=r=>{n(r.target.result)},onerror=r=>{i(r)}}})}getAll(){return new Promise((e,n)=>{this.idb.open(this.database,this.version).onsuccess=a=>{this.indexedDb=a?.target?.result,this.indexedDb.transaction(this.store).objectStore(this.store).getAll().onsuccess=s=>{e(s.target.result)},onerror=s=>{n(s)}}})}}f.\u0275fac=function(e){return new(e||f)(t.LFG(Window))},f.\u0275prov=t.Yz7({token:f,factory:f.\u0275fac});var d=l(6895);class Z{}Z.\u0275fac=function(e){return new(e||Z)},Z.\u0275cmp=t.Xpm({type:Z,selectors:[["app-not-found-component"]],decls:2,vars:0,template:function(e,n){1&e&&(t.TgZ(0,"h3"),t._uU(1,"Page Not Found"),t.qZA())}});var b=l(3546),W=l(7331),k=l(4859);function pt(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"mat-chip",17),t.NdJ("click",function(){const s=t.CHM(n).$implicit,r=t.oxw(3);return t.KtG(r.handleCategoryChipClick(s))}),t._uU(1),t.qZA()}if(2&o){const n=e.$implicit;t.xp6(1),t.hij(" ",n," ")}}function dt(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"div",5)(1,"mat-card",6)(2,"mat-card-header",7)(3,"mat-card-title",8),t._uU(4),t.qZA(),t.TgZ(5,"mat-card-subtitle"),t._uU(6),t.qZA()(),t.TgZ(7,"img",9),t.NdJ("click",function(){const s=t.CHM(n).$implicit,r=t.oxw(2);return t.KtG(r.handleReadMore(s.id))}),t.qZA(),t.TgZ(8,"mat-card-content")(9,"p"),t._uU(10),t.qZA(),t.TgZ(11,"mat-chip-listbox",10),t.YNc(12,pt,2,1,"mat-chip",11),t.qZA(),t.TgZ(13,"div",12)(14,"div",13)(15,"div",14),t._uU(16),t.ALo(17,"date"),t.qZA(),t.TgZ(18,"mat-card-actions",15)(19,"button",16),t.NdJ("click",function(){const s=t.CHM(n).$implicit,r=t.oxw(2);return t.KtG(r.handleReadMore(s.id))}),t._uU(20," READ MORE "),t.qZA()()()()()()()}if(2&o){const n=e.$implicit,i=t.oxw(2);t.xp6(4),t.Oqu(n.title),t.xp6(2),t.Oqu(n.subtitle),t.xp6(1),t.s9C("src",n.image,t.LSH),t.s9C("alt",n.imageAlt),t.Q6J("loading",i.handleLazyLoadingImg(n)),t.xp6(3),t.hij(" ",n.description," "),t.xp6(2),t.Q6J("ngForOf",n.categories),t.xp6(4),t.Oqu(t.lcZ(17,8,n.date))}}function ut(o,e){if(1&o&&(t.TgZ(0,"div",3),t.YNc(1,dt,21,10,"div",4),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.contentList)}}function gt(o,e){1&o&&t._UZ(0,"app-not-found-component")}class u{constructor(e,n,i,a){this.route=e,this.router=n,this.search=i,this.indexDbSvc=a,this.contentList=[],this.notFound=!1,this.pageTitle="Not Found",this.filter=m.Architecture,this.routerSubscription=new nt.w0,this.category="",this.eagerLoadImageList=[]}ngOnInit(){var e=this;this.routerSubscription=this.router.events.subscribe(function(){var n=(0,rt.Z)(function*(i){if(i instanceof g.m2||i instanceof g.Xs){switch(e.route.snapshot.data.page){case"architecture":e.filter=m.Architecture,e.pageTitle="Architecture";break;case"design":e.filter=m.Design,e.pageTitle="Design";break;case"coding":e.filter=m.Coding,e.pageTitle="Coding";break;case"video":e.filter=m.Video,e.pageTitle="Video Tutorials";break;case"book":e.filter=m.Book,e.pageTitle="Book List";break;case"electronics":e.filter=m.Electronics,e.pageTitle="Electronics";break;case"category":e.filter=m.Any,e.pageTitle="Filtering by Category: ",e.category=e.route.snapshot.params.search;break;case"list":e.filter=m.Any,e.pageTitle="";break;case"web":e.filter=m.Book,e.pageTitle="Web";break;case"database":e.filter=m.Book,e.pageTitle="Database";break;default:e.pageTitle="Not Found",e.notFound=!0}e.indexDbSvc.getAll().then(s=>{const r=e.route.snapshot.params.search||"";e.filter==m.Any?(e.contentList=r?s.filter(c=>c.categories.includes(r)):s,e.contentList.sort((c,p)=>new Date(p.date).getTime()-new Date(c.date).getTime())):e.contentList=s.filter(c=>c.type==e.filter).sort((c,p)=>new Date(p.date).getTime()-new Date(c.date).getTime()),e.eagerLoadImageList=e.contentList.slice(0,4).map(c=>c.id)})}});return function(i){return n.apply(this,arguments)}}()),this.search.ee.subscribe(n=>{this.category=n||"All",this.filter=m.Search,this.indexDbSvc.getAll().then(i=>{this.contentList=i.filter(r=>r.title.toLowerCase().includes(n.toLowerCase())||r.subtitle.toLowerCase().includes(n.toLowerCase())||r.categories.some(c=>c.toLowerCase().includes(n.toLowerCase()))||r.tags.some(c=>c.toLowerCase().includes(n.toLowerCase()))||r.description.toLowerCase().includes(n.toLowerCase())).sort((r,c)=>new Date(c.date).getTime()-new Date(r.date).getTime());let s=this.contentList.length;this.pageTitle=`Search returned ${s} ${1==s?"result":"results"} for term: `})})}handleReadMore(e){scrollTo(0,0);let n=this.contentList.find(i=>i.id==e)?.type;this.router.navigate([`/${n}/${e}`])}handleCategoryChipClick(e){this.router.navigate([`/category/${e}`])}handleLazyLoadingImg(e){return this.eagerLoadImageList.includes(e.id)?"eager":"lazy"}ngOnDestroy(){this.routerSubscription.unsubscribe()}}u.\u0275fac=function(e){return new(e||u)(t.Y36(g.gz),t.Y36(g.F0),t.Y36(C),t.Y36(f))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-content-list"]],decls:6,vars:6,consts:[[1,"list-page-title"],["class","container-list",4,"ngIf","ngIfElse"],["notFoundTemplate",""],[1,"container-list"],["class","card",4,"ngFor","ngForOf"],[1,"card"],[1,"content-card"],[1,"app-card-header"],[1,"card-title"],["mat-card-image","",1,"image-responsive",3,"src","alt","loading","click"],["aria-label","Categories",1,"list-box"],[3,"click",4,"ngFor","ngForOf"],[1,"card-footer-container"],[1,"card-footer"],[1,"card-footer-item-date"],[1,"card-footer-item"],["mat-button","",3,"click"],[3,"click"]],template:function(e,n){if(1&e&&(t.TgZ(0,"h3",0),t._uU(1),t.ALo(2,"titlecase"),t.qZA(),t.YNc(3,ut,2,1,"div",1),t.YNc(4,gt,1,0,"ng-template",null,2,t.W1O)),2&e){const i=t.MAs(5);t.xp6(1),t.AsE("",n.pageTitle," ",t.lcZ(2,4,n.category),""),t.xp6(2),t.Q6J("ngIf",!n.notFound)("ngIfElse",i)}},dependencies:[d.sg,d.O5,Z,b.a8,b.hq,b.dn,b.dk,b.G2,b.$j,b.n5,W.HS,W.z2,k.lW,d.rS,d.uU],styles:[".container-list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr))}.card[_ngcontent-%COMP%]{display:flex;padding:5px;margin:10px}.card[_ngcontent-%COMP%]   .image-responsive[_ngcontent-%COMP%]{display:block;max-width:355px;width:auto;height:auto;margin-left:auto;margin-right:auto}.app-card-header[_ngcontent-%COMP%]{padding:16px}.list-page-title[_ngcontent-%COMP%]{font-weight:400;font-size:25px;padding-left:15px}.card-title[_ngcontent-%COMP%]{font-size:20px}.card-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.card-footer[_ngcontent-%COMP%]   .card-footer-item-date[_ngcontent-%COMP%]{padding:25px 0;text-align:center}@media screen and (max-width: 768px){.card[_ngcontent-%COMP%]   .image-responsive[_ngcontent-%COMP%]{display:block;width:auto;height:auto}}"]});class mt{constructor(e,n){this.source=e,this.target=n}}class q{constructor(e,n,i){this.ticker=new t.vpe,this.nodes=[],this.links=[],this.nodes=e,this.links=n,this.initSimulation(i)}connectNodes(e,n){let i;if(!this.nodes[e]||!this.nodes[n])throw new Error("One of the nodes does not exist");i=new mt(e,n),this.simulation.stop(),this.links.push(i),this.simulation.alphaTarget(.3).restart(),this.initLinks()}initNodes(){if(!this.simulation)throw new Error("simulation was not initialized yet");this.simulation.nodes(this.nodes)}initLinks(){if(!this.simulation)throw new Error("simulation was not initialized yet")}initSimulation(e){}}q.\u0275fac=function(e){return new(e||q)(t.Y36("isFactory"),t.Y36("isFactory"),t.Y36("isFactory"))},q.\u0275cmp=t.Xpm({type:q,selectors:[["app-force-directed-tree"]],decls:1,vars:0,consts:[["id","ForceDirectedTree"]],template:function(e,n){1&e&&t._UZ(0,"figure",0)}});class A{constructor(e){this.sanitizer=e}transform(e,n){switch(n){case"html":return this.sanitizer.bypassSecurityTrustHtml(e);case"style":return this.sanitizer.bypassSecurityTrustStyle(e);case"script":return this.sanitizer.bypassSecurityTrustScript(e);case"url":return this.sanitizer.bypassSecurityTrustUrl(e);case"resourceUrl":return this.sanitizer.bypassSecurityTrustResourceUrl(e);default:throw new Error(`Invalid safe type specified: ${n}`)}}}function ht(o,e){if(1&o&&(t.TgZ(0,"article")(1,"div",2)(2,"h2"),t._uU(3),t.qZA(),t.TgZ(4,"span"),t._uU(5),t.ALo(6,"date"),t.qZA()(),t._UZ(7,"div",3),t.ALo(8,"safe"),t.qZA()),2&o){const n=t.oxw();t.xp6(3),t.Oqu(null==n.pageContent?null:n.pageContent.title),t.xp6(2),t.lnq("",t.lcZ(6,5,null==n.pageContent?null:n.pageContent.date)," | Posted By: ",null==n.pageContent?null:n.pageContent.author," | ",null==n.pageContent?null:n.pageContent.readTime," min read"),t.xp6(2),t.Q6J("innerHtml",t.xi3(8,7,null==n.pageContent?null:n.pageContent.content,"html"),t.oJD)}}function ft(o,e){1&o&&t._UZ(0,"app-not-found-component")}A.\u0275fac=function(e){return new(e||A)(t.Y36(S.H7,16))},A.\u0275pipe=t.Yjl({name:"safe",type:A,pure:!0});class h{constructor(e,n,i,a){this.route=e,this.router=n,this.search=i,this.indexDbSvc=a,this.notFound=!1,this.routerSubscription=new nt.w0}ngOnInit(){this.routerSubscription=this.router.events.subscribe(e=>{if(e instanceof g.m2||e instanceof g.Xs){let n=this.route.snapshot.paramMap.get("id")||"-1";"-1"===n&&(this.notFound=!0),this.indexDbSvc.get(n).then(i=>{fetch(`../../assets/templates/${n}/page.html`).then(a=>a.text()).then(a=>{if(this.pageContent=i,void 0===this.pageContent||a.indexOf("Cannot GET /assets")>-1)this.notFound=!0;else if(this.pageContent.content=a,this.pageContent.tags.some(r=>"snippet"===r)&&setTimeout(()=>{window.PR.prettyPrint()},0),this.pageContent.callback.name){const r=this.pageContent.callback;setTimeout(()=>{r.styles&&r.styles.forEach(c=>{const p=document.createElement("link");p.href=c,p.type="text/css",p.rel="stylesheet",console.log(p),document.head.appendChild(p)}),r.dependencies&&r.dependencies.forEach(c=>{const p=document.createElement("script");p.src=c,document.body.appendChild(p)}),fetch(`../../assets/templates/${n}/script.js`).then(c=>c.text()).then(c=>{var p=document.createElement("script");p.innerHTML=c,document.body.appendChild(p)})},0|this.pageContent.callback.delay)}})})}}),this.search.ee.subscribe(e=>{this.router.navigate(["search"])})}ngOnDestroy(){this.routerSubscription.unsubscribe()}}h.\u0275fac=function(e){return new(e||h)(t.Y36(g.gz),t.Y36(g.F0),t.Y36(C),t.Y36(f))},h.\u0275cmp=t.Xpm({type:h,selectors:[["app-page"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["notFoundTemplate",""],[1,"page-info"],[3,"innerHtml"]],template:function(e,n){if(1&e&&(t.YNc(0,ht,9,10,"article",0),t.YNc(1,ft,1,0,"ng-template",null,1,t.W1O)),2&e){const i=t.MAs(2);t.Q6J("ngIf",!n.notFound)("ngIfElse",i)}},dependencies:[d.O5,Z,d.uU,A],styles:["article[_ngcontent-%COMP%]{padding:20px}"]});var ot=l(1764),bt=l(8436);const Ct=["What makes {{topic}} important?","What is {{topic}}?","When might {{topic}} be most useful and why?"];class _t{constructor(e){this.flashcards=[];let n=0;e.forEach(i=>{Ct.forEach(a=>{this.flashcards.push({id:n++,contentId:i.id,type:i.type,path:`#/${i.type}/${i.id}`,front:a.replace("{{topic}}",i.title),back:i.description,dueDate:ot(Date.now()).add(0,"day").toISOString(),efactor:2.5,interval:0,repetition:0})})})}}class _{constructor(e){this.windowObj=e,this.idb=this.windowObj.indexedDB,this.data=[],this.database="Coding35SM2",this.version=1,this.store="SM2Store"}init(){let e=this.idb.open(this.database,this.version);e.onsuccess=n=>{console.log("Success opening SM2 DB")},e.onerror=n=>{console.log("Error opening SM2 DB")},e.onupgradeneeded=n=>{this.createDatabase(n)}}update(e){return new Promise((n,i)=>{this.idb.open(this.database,this.version).onsuccess=s=>{this.indexedDb=s?.target?.result,this.indexedDb.transaction(this.store,"readwrite").objectStore(this.store).put(e).onsuccess=r=>{n(r.target.result)},onerror=r=>{i(r)}}})}insert(e){return new Promise((n,i)=>{this.idb.open(this.database,this.version).onsuccess=s=>{this.indexedDb=s?.target?.result,this.indexedDb.transaction(this.store,"readwrite").objectStore(this.store).add(e).onsuccess=r=>{n(r.target.result)},onerror=r=>{i(r)}}})}clear(){return new Promise((e,n)=>{this.idb.open(this.database,this.version).onsuccess=a=>{this.indexedDb=a?.target?.result,this.indexedDb.transaction(this.store,"readwrite").objectStore(this.store).clear().onsuccess=s=>{e(s.target.result)},onerror=s=>{n(s)}}})}createDatabase(e){console.log("Creating SM2 DB"),this.indexedDb=e.target.result;let n=this.indexedDb.createObjectStore(this.store,{keyPath:"id"});n.createIndex("session","session",{unique:!1}),n.transaction.oncomplete=i=>{console.info("Create SM2 Database Transaction Complete.");const a=this.indexedDb.transaction([this.store],"readwrite");a.oncomplete=s=>{console.info("Transaction Complete.")},a.onerror=s=>{console.error(`Transaction Error. ${s}`)}}}get(e){return new Promise((n,i)=>{this.idb.open(this.database,this.version).onsuccess=s=>{this.indexedDb=s?.target?.result,this.indexedDb.transaction(this.store,"readonly").objectStore(this.store).get(e).onsuccess=r=>{n(r.target.result)},onerror=r=>{i(r)}}})}getAll(){return new Promise((e,n)=>{this.idb.open(this.database,this.version).onsuccess=a=>{this.indexedDb=a?.target?.result,this.indexedDb.transaction(this.store,"readonly").objectStore(this.store).getAll().onsuccess=s=>{e(s.target.result)},onerror=s=>{n(s)}}})}}_.\u0275fac=function(e){return new(e||_)(t.LFG(Window))},_.\u0275prov=t.Yz7({token:_,factory:_.\u0275fac});var vt=l(3587);class v{constructor(){}init(){const e=localStorage.getItem("dropboxKey")||"";if(!e)return console.log("DropboxService.init() - no key"),void alert("No Dropbox key found. Please set one in the settings.");console.log("DropboxService.init()"),this.dbx=new vt.Dropbox({accessToken:e}),this.dbx.filesListFolder({path:""}).then(n=>{}).catch(n=>{console.log(n)})}downloadFile(e){return this.dbx.filesDownload({path:e})}uploadFile(e,n){return this.dbx.filesUpload({path:n,contents:e,mode:{".tag":"overwrite"}}).then(i=>{console.log(i)}).catch(i=>{console.error(i)})}}v.\u0275fac=function(e){return new(e||v)},v.\u0275prov=t.Yz7({token:v,factory:v.\u0275fac});var I=l(9652),K=l(811),it=l(1511),x=l(4006);class j{constructor(){}ngOnChanges(e){setTimeout(()=>{fetch(`../../assets/templates/${this.card.contentId}/page.html`).then(n=>n.text()).then(n=>{this.content=n})},500)}}function xt(o,e){if(1&o&&(t.TgZ(0,"mat-accordion")(1,"mat-expansion-panel",13,14)(3,"mat-expansion-panel-header")(4,"mat-panel-title"),t._uU(5),t.qZA()(),t.TgZ(6,"p"),t._uU(7),t.qZA(),t.TgZ(8,"mat-accordion")(9,"mat-expansion-panel",13,14)(11,"mat-expansion-panel-header")(12,"mat-panel-title"),t._uU(13," Review "),t.qZA()(),t._UZ(14,"app-review",15),t.qZA()()()()),2&o){const n=t.oxw();t.xp6(5),t.hij(" ",n.currentCard.front," "),t.xp6(2),t.Oqu(n.currentCard.back),t.xp6(7),t.Q6J("card",n.currentCard)}}j.\u0275fac=function(e){return new(e||j)},j.\u0275cmp=t.Xpm({type:j,selectors:[["app-review"]],inputs:{card:"card"},features:[t.TTD],decls:2,vars:4,consts:[[3,"innerHtml"]],template:function(e,n){1&e&&(t._UZ(0,"div",0),t.ALo(1,"safe")),2&e&&t.Q6J("innerHtml",t.xi3(1,1,n.content,"html"),t.oJD)},dependencies:[A]});class N{constructor(e,n,i){this.indexDbSvc=e,this.indexDbSvcSm2=n,this.dropbox=i,this.flashcards=[],this.buttonToggle=void 0,this.cardsToReview=0,this.cardsReviewed=0,this.reviewedCardIds=[],this.dbxcId="sb15j7zwgodrkcw"}ngOnInit(){this.indexDbSvc.getAll().then(e=>{this.indexDbSvcSm2.getAll().then(n=>{let i=new _t(e.filter(a=>"book"!==a.type&&"electronics"!==a.type&&"self-learning"!==a.type));this.indexDbSvcSm2.getAll().then(a=>{this.allCards=a,this.getCard()}),i.flashcards.forEach(a=>{if(n.find(s=>s.contentId===a.contentId)){let s=n.find(r=>r.contentId===a.contentId);this.indexDbSvcSm2.update(s)}else this.indexDbSvcSm2.insert(a)})})})}getCard(){let e=this.allCards.filter(n=>{new Date(n.dueDate)<new Date&&this.reviewedCardIds.includes(n.id)});this.currentCard=e[Math.floor(Math.random()*e.length)]}practice(e,n){const{interval:i,repetition:a,efactor:s}=(0,bt.U)(e,n),r=ot(Date.now()).add(i,"day").toISOString(),c={...e,interval:i,repetition:a,efactor:s,dueDate:r};return this.indexDbSvcSm2.update(c).then(p=>{this.buttonToggle=void 0,this.reviewedCardIds.push(c.id),this.getCard()}).catch(p=>{console.error(p)}),c}export(){this.indexDbSvcSm2.getAll().then(e=>{const n="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e)),i=document.createElement("a");i.setAttribute("href",n),i.setAttribute("download","sm2.json"),document.body.appendChild(i),i.click(),i.remove()})}import(){const e=document.createElement("input");e.type="file",e.accept=".json",e.onchange=n=>{const a=n.target.files?.item(0);if(a){const s=new FileReader;s.readAsText(a,"UTF-8"),s.onload=r=>{const c=r.target?.result;if(c){const p=JSON.parse(c);this.indexDbSvcSm2.clear(),p.forEach(Ut=>{this.indexDbSvcSm2.update(Ut)})}}}},e.click()}setKey(){const e=document.createElement("input");e.type="file",e.accept=".json",e.onchange=n=>{const a=n.target.files?.item(0);if(a){const s=new FileReader;s.readAsText(a,"UTF-8"),s.onload=r=>{const c=r.target?.result;if(c){const p=JSON.parse(c);localStorage.setItem("dropboxKey",p.key)}}}},e.click()}saveToDropbox(){this.indexDbSvcSm2.getAll().then(e=>{this.dropbox.uploadFile(JSON.stringify(e),"/sm2.json").then(()=>{console.log("saved")}).catch(n=>{console.error(n)})})}loadFromDropbox(){this.dropbox.downloadFile("/sm2.json").then(e=>{const n=new FileReader;n.readAsText(e.result.fileBlob,"UTF-8"),n.onload=i=>{const a=i.target?.result;if(a){const s=JSON.parse(a);this.indexDbSvcSm2.clear(),s.forEach(r=>{this.indexDbSvcSm2.update(r)})}}}).catch(e=>{console.error(e)})}}N.\u0275fac=function(e){return new(e||N)(t.Y36(f),t.Y36(_),t.Y36(v))},N.\u0275cmp=t.Xpm({type:N,selectors:[["app-sm2"]],decls:33,vars:2,consts:[["id","ReviewPanel"],[4,"ngIf"],["id","ReviewButtonGroup",3,"ngModel","ngModelChange","change"],["group","matButtonToggleGroup"],["value","0","matTooltip","complete blackout","matTooltipPosition","below",1,"review-btn"],["tooltip","matTooltip"],["value","1","matTooltip","incorrect response; the correct one remembered","matTooltipPosition","below",1,"review-btn"],["value","2","matTooltip","incorrect response; where the correct one seemed easy to recall.","matTooltipPosition","below",1,"review-btn"],["value","3","matTooltip","correct response recalled with serious difficulty","matTooltipPosition","below",1,"review-btn"],["value","4","matTooltip","correct response after a hesitation","matTooltipPosition","below",1,"review-btn"],["value","5","matTooltip","perfect response","matTooltipPosition","below",1,"review-btn"],["id","ExportImport"],["mat-button","","color","Primary",3,"click"],["hideToggle","false"],["mep","matExpansionPanel"],[3,"card"]],template:function(e,n){if(1&e){const i=t.EpF();t.TgZ(0,"div",0),t.YNc(1,xt,15,3,"mat-accordion",1),t.TgZ(2,"mat-button-toggle-group",2,3),t.NdJ("ngModelChange",function(s){return n.buttonToggle=s})("change",function(){t.CHM(i);const s=t.MAs(3);return t.KtG(n.practice(n.currentCard,s.value))}),t.TgZ(4,"mat-button-toggle",4,5),t._uU(6," 0 "),t.qZA(),t.TgZ(7,"mat-button-toggle",6,5),t._uU(9," 1 "),t.qZA(),t.TgZ(10,"mat-button-toggle",7,5),t._uU(12," 2 "),t.qZA(),t.TgZ(13,"mat-button-toggle",8,5),t._uU(15," 3 "),t.qZA(),t.TgZ(16,"mat-button-toggle",9,5),t._uU(18," 4 "),t.qZA(),t.TgZ(19,"mat-button-toggle",10,5),t._uU(21," 5 "),t.qZA()()(),t.TgZ(22,"div",11)(23,"button",12),t.NdJ("click",function(){return n.export()}),t._uU(24,"Export"),t.qZA(),t.TgZ(25,"button",12),t.NdJ("click",function(){return n.import()}),t._uU(26,"Import"),t.qZA(),t.TgZ(27,"button",12),t.NdJ("click",function(){return n.loadFromDropbox()}),t._uU(28,"Load"),t.qZA(),t.TgZ(29,"button",12),t.NdJ("click",function(){return n.saveToDropbox()}),t._uU(30,"Save"),t.qZA(),t.TgZ(31,"button",12),t.NdJ("click",function(){return n.setKey()}),t._uU(32,"Key"),t.qZA()()}2&e&&(t.xp6(1),t.Q6J("ngIf",n.currentCard),t.xp6(1),t.Q6J("ngModel",n.buttonToggle))},dependencies:[d.O5,I.pp,I.ib,I.yz,I.yK,k.lW,K.A9,K.Yi,it.gM,x.JJ,x.On,j],styles:["#ReviewPanel[_ngcontent-%COMP%]{display:flex;flex-direction:column}#ReviewButtonGroup[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:5px;border:1px solid lightblue}.review-btn[_ngcontent-%COMP%]{min-width:50px}#ExportImport[_ngcontent-%COMP%]{float:right;top:35%;position:relative}@media screen and (max-width: 768px){#ReviewButtonGroup[_ngcontent-%COMP%]{flex-direction:column}}"]});const yt=[{path:"sm2",component:N,data:{page:"SM2"}},{path:"architecture/:id",component:h,data:{page:"architecture"}},{path:"architecture",component:u,data:{page:"architecture"}},{path:"design/:id",component:h,data:{page:"design"}},{path:"design",component:u,data:{page:"design"}},{path:"coding/:id",component:h,data:{page:"coding"}},{path:"coding",component:u,data:{page:"coding"}},{path:"database/:id",component:h,data:{page:"database"}},{path:"database",component:u,data:{page:"database"}},{path:"video/:id",component:h,data:{page:"video"}},{path:"video",component:u,data:{page:"video"}},{path:"productivity/:id",component:h,data:{page:"productivity"}},{path:"productivity",component:u,data:{page:"productivity"}},{path:"self-learning/:id",component:h,data:{page:"self-learning"}},{path:"self-learning",component:u,data:{page:"self-learning"}},{path:"machine-learning/:id",component:h,data:{page:"machine-learning"}},{path:"machine-learning",component:u,data:{page:"machine-learning"}},{path:"electronics/:id",component:h,data:{page:"electronics"}},{path:"electronics",component:u,data:{page:"electronics"}},{path:"book/:id",component:h,data:{page:"book"}},{path:"book",component:u,data:{page:"book"}},{path:"web/:id",component:h,data:{page:"web"}},{path:"web",component:u,data:{page:"web"}},{path:"category/:search",component:u,data:{page:"category"}},{path:"about",component:P,data:{page:"about"}},{path:"contact",component:U,data:{page:"contact"}},{path:"tree",component:q,data:{page:"tree"}},{path:"**",component:u,data:{page:"list"}},{path:"",component:u,data:{page:"list"}}];class y{}y.\u0275fac=function(e){return new(e||y)},y.\u0275mod=t.oAB({type:y}),y.\u0275inj=t.cJS({imports:[g.Bz.forRoot(yt),g.Bz]});class J{}J.\u0275fac=function(e){return new(e||J)},J.\u0275cmp=t.Xpm({type:J,selectors:[["app-top-bar"]],decls:2,vars:0,template:function(e,n){1&e&&(t.TgZ(0,"div"),t._uU(1,'"If you want to master something, teach it." - Richard Feynman'),t.qZA())},styles:["div[_ngcontent-%COMP%]{padding:10px 15px;color:#fff;background:#054f7d;text-align:center;font-size:16px}"]});var V=l(3683);class E{}E.\u0275fac=function(e){return new(e||E)},E.\u0275cmp=t.Xpm({type:E,selectors:[["app-bottom-bar"]],decls:1,vars:0,template:function(e,n){1&e&&t._UZ(0,"div")},styles:["div[_ngcontent-%COMP%]{background:#007ec0;padding:13px 0;color:#fff}"]});const Tt=function(){return["/"]},wt=function(){return["/sm2"]},St=function(){return["/about"]},Zt=function(){return["/contact"]};class z{}z.\u0275fac=function(e){return new(e||z)},z.\u0275cmp=t.Xpm({type:z,selectors:[["app-top-nav"]],decls:19,vars:8,consts:[[1,"container"],["color","primary"],[1,"menu-spacer"],["fxShow","true","fxHide.lt-md","",1,"menu-link-list"],["mat-button","",3,"routerLink"],["target","_blank","href","https://www.linkedin.com/in/adam-reed-060854240/",1,"linkedin"],["role","img","viewBox","0 0 24 24","xmlns","http://www.w3.org/2000/svg","fill","#054f7d",2,"width","28px"],["d","M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"mat-toolbar",1)(2,"mat-toolbar-row"),t._UZ(3,"span",2),t.TgZ(4,"div",3)(5,"a",4),t._uU(6,"Home"),t.qZA(),t.TgZ(7,"a",4),t._uU(8,"Review"),t.qZA(),t.TgZ(9,"a",4),t._uU(10,"About"),t.qZA(),t.TgZ(11,"a",4),t._uU(12,"Contact"),t.qZA(),t.TgZ(13,"a",5),t.O4$(),t.TgZ(14,"svg",6)(15,"title"),t._uU(16,"LinkedIn icon"),t.qZA(),t._UZ(17,"path",7),t.qZA()()()()(),t.kcU(),t._UZ(18,"app-bottom-bar"),t.qZA()),2&e&&(t.xp6(5),t.Q6J("routerLink",t.DdM(4,Tt)),t.xp6(2),t.Q6J("routerLink",t.DdM(5,wt)),t.xp6(2),t.Q6J("routerLink",t.DdM(6,St)),t.xp6(2),t.Q6J("routerLink",t.DdM(7,Zt)))},dependencies:[V.Ye,V.rD,k.zs,g.rH,E],styles:[".menu-spacer[_ngcontent-%COMP%]{flex:1 1 auto}a.linkedin[_ngcontent-%COMP%]{top:8px;position:relative}.menu-link-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]});class B{}B.\u0275fac=function(e){return new(e||B)},B.\u0275cmp=t.Xpm({type:B,selectors:[["app-header"]],decls:2,vars:0,template:function(e,n){1&e&&t._UZ(0,"app-top-bar")(1,"app-top-nav")},dependencies:[J,z],styles:[".two-col[_ngcontent-%COMP%]{padding:0 10em}"]});class kt{constructor(e,n){this.title="",this.linkList=[],this.title=e,n.forEach(i=>{this.linkList.push(i)})}}class At{constructor(e){this.url="",this.icon="",this.target="_self",this.title=e,this.url=e.toLowerCase()}}var X=l(4633),tt=l(3336),G=l(9549),at=l(4144);function Mt(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"mat-list-item",7),t.NdJ("click",function(){const s=t.CHM(n).$implicit,r=t.oxw(2);return t.KtG(r.handleClick(s.url))}),t.TgZ(1,"span",8)(2,"span",9),t._uU(3),t.ALo(4,"titlecase"),t.qZA(),t.TgZ(5,"mat-icon",10),t._uU(6,"keyboard_arrow_right"),t.qZA()()()}if(2&o){const n=e.$implicit;t.xp6(3),t.Oqu(t.lcZ(4,1,n.title))}}function Ot(o,e){if(1&o&&(t.TgZ(0,"mat-list",4)(1,"div",5),t._uU(2),t.qZA(),t.YNc(3,Mt,7,3,"mat-list-item",6),t.qZA()),2&o){const n=e.$implicit;t.xp6(2),t.Oqu(n.title),t.xp6(1),t.Q6J("ngForOf",n.linkList)}}class R{constructor(e,n,i){this.router=e,this.search=n,this.indexDbSvc=i,this.value="",this.categoryLinks=[]}ngOnInit(){this.indexDbSvc.getAll().then(e=>{let a=e.map(r=>r.categories).flat().filter((r,c,p)=>p.indexOf(r)===c).map(r=>new At(r)),s=new Array;s.push(new kt("Categories",a.sort((r,c)=>r.title.localeCompare(c.title)))),this.categoryLinks=s})}handleClick(e){scrollTo(0,0),this.router.navigate(["/category/"+e])}searchEvent(e){this.search.ee.emit(this.value)}}R.\u0275fac=function(e){return new(e||R)(t.Y36(g.F0),t.Y36(C),t.Y36(f))},R.\u0275cmp=t.Xpm({type:R,selectors:[["app-right-nav"]],decls:8,vars:2,consts:[["appearance","outline"],["matInput","",3,"ngModel","ngModelChange"],["matSuffix",""],["role","list",4,"ngFor","ngForOf"],["role","list"],[1,"list-title"],["class","list-item","role","listitem",3,"click",4,"ngFor","ngForOf"],["role","listitem",1,"list-item",3,"click"],[1,"list-item-cell"],[1,"list-item-link"],[1,"mat-icon-list-item"]],template:function(e,n){1&e&&(t.TgZ(0,"div")(1,"mat-form-field",0)(2,"mat-label"),t._uU(3,"Search"),t.qZA(),t.TgZ(4,"input",1),t.NdJ("ngModelChange",function(a){return n.value=a})("ngModelChange",function(a){return n.searchEvent(a)}),t.qZA(),t.TgZ(5,"mat-icon",2),t._uU(6,"search"),t.qZA()(),t.YNc(7,Ot,4,2,"mat-list",3),t.qZA()),2&e&&(t.xp6(4),t.Q6J("ngModel",n.value),t.xp6(3),t.Q6J("ngForOf",n.categoryLinks))},dependencies:[d.sg,X.i$,X.Tg,tt.Hw,G.KE,G.hX,G.R9,at.Nt,x.Fj,x.JJ,x.On,d.rS],styles:[".list-title[_ngcontent-%COMP%]{background-color:#054f7d;color:#fff;margin:0 0 8px;padding:15px;text-transform:uppercase;font-size:1.15rem;font-weight:700}.list-item[_ngcontent-%COMP%]{color:#004987;font-size:18px;font-weight:700;margin-bottom:4px;background-color:#9dc3d6}.list-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#004987;text-decoration:none}.list-item[_ngcontent-%COMP%]   .list-item-cell[_ngcontent-%COMP%]{color:#fff}.list-item[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#007ec0}.list-item[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:#fff}.mat-icon-list-item[_ngcontent-%COMP%]{float:right}"]});class Y{constructor(){}}function Ft(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"li")(1,"a",1),t.NdJ("click",function(){const s=t.CHM(n).$implicit,r=t.oxw();return t.KtG(r.handleLinkClick(s.url))}),t._uU(2),t.qZA()()}if(2&o){const n=e.$implicit;t.xp6(1),t.Q6J("target",n.target),t.xp6(1),t.Oqu(n.title)}}Y.\u0275fac=function(e){return new(e||Y)},Y.\u0275cmp=t.Xpm({type:Y,selectors:[["app-content"]],decls:5,vars:0,consts:[[1,"container-main"],[1,"content-area"],[1,"sidebar"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"router-outlet"),t.qZA(),t.TgZ(3,"div",2),t._UZ(4,"app-right-nav"),t.qZA()())},dependencies:[g.lC,R],styles:['.container-main[_ngcontent-%COMP%]{display:grid;grid-template-areas:"content-area sidebar"}.content-area[_ngcontent-%COMP%]{grid-area:content-area}.sidebar[_ngcontent-%COMP%]{background:#fff;grid-area:sidebar;position:absolute;right:0;top:20%}@media screen and (max-width: 768px){.sidebar[_ngcontent-%COMP%]{grid-area:unset;position:initial}.container-main[_ngcontent-%COMP%]{grid-template-areas:"content-area"}}']});class H{constructor(e){this.router=e}handleLinkClick(e){scrollTo(0,0),this.router.navigate([e])}}function Dt(o,e){if(1&o&&(t.TgZ(0,"div"),t._UZ(1,"app-footer-link-list",1),t.qZA()),2&o){const n=e.$implicit;t.xp6(1),t.Q6J("links",n)}}H.\u0275fac=function(e){return new(e||H)(t.Y36(g.F0))},H.\u0275cmp=t.Xpm({type:H,selectors:[["app-footer-link-list"]],inputs:{links:"links"},decls:4,vars:2,consts:[[4,"ngFor","ngForOf"],[3,"target","click"]],template:function(e,n){1&e&&(t.TgZ(0,"ul")(1,"h3"),t._uU(2),t.qZA(),t.YNc(3,Ft,3,2,"li",0),t.qZA()),2&e&&(t.xp6(2),t.Oqu(null==n.links?null:n.links.title),t.xp6(1),t.Q6J("ngForOf",null==n.links?null:n.links.linkList))},dependencies:[d.sg],styles:["ul[_ngcontent-%COMP%]{list-style:none}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;font-size:14px;line-height:1.5;display:block;padding:5px 0}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{cursor:pointer;color:#c5cbd1;text-decoration:none}"]});class ${constructor(){this.linkLists=[]}ngOnInit(){fetch("../../assets/json/footer-links.json").then(e=>e.json()).then(e=>{this.linkLists=e})}}$.\u0275fac=function(e){return new(e||$)},$.\u0275cmp=t.Xpm({type:$,selectors:[["app-footer"]],decls:2,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"links"]],template:function(e,n){1&e&&(t.TgZ(0,"footer"),t.YNc(1,Dt,2,1,"div",0),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",n.linkLists))},dependencies:[d.sg,H],styles:["footer[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;width:100%;margin:0;padding:0;column-gap:5em;background-color:#333;color:#fff}"]});class Q{constructor(){this.title="coding35"}}Q.\u0275fac=function(e){return new(e||Q)},Q.\u0275cmp=t.Xpm({type:Q,selectors:[["app-root"]],decls:4,vars:0,consts:[[1,"parent"],[1,"header"],[1,"main"],[1,"footer"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-header",1)(2,"app-content",2)(3,"app-footer",3),t.qZA())},dependencies:[B,Y,$],styles:['.parent[_ngcontent-%COMP%]{height:100vh;display:grid;grid-template-columns:1fr 3fr 1fr;grid-template-rows:1fr 1fr 1fr;grid-template-areas:"header header header header" "main main . sidebar" "footer footer footer footer"}.header[_ngcontent-%COMP%]{grid-area:header}.main[_ngcontent-%COMP%]{grid-area:main}.sidebar[_ngcontent-%COMP%]{grid-area:sidebar}.footer[_ngcontent-%COMP%]{grid-area:footer}@media screen and (max-width: 768px){.parent[_ngcontent-%COMP%]{grid-template-areas:"header header header header" "main main main main" "footer footer footer footer"}}']});var Lt=l(3267),st=l(1516);class T{}T.\u0275fac=function(e){return new(e||T)},T.\u0275mod=t.oAB({type:T}),T.\u0275inj=t.cJS({imports:[d.ez]});class w{}w.\u0275fac=function(e){return new(e||w)},w.\u0275mod=t.oAB({type:w}),w.\u0275inj=t.cJS({imports:[d.ez,T,X.ie,tt.Ps,b.QW,W.Hi,k.ot,G.lN,at.c,x.u5,y]});class M{}M.\u0275fac=function(e){return new(e||M)},M.\u0275mod=t.oAB({type:M}),M.\u0275inj=t.cJS({imports:[S.b2,st.PW,d.ez,V.g0,Lt.SJ,X.ie,tt.Ps,k.ot,g.Bz,w]});class O{}O.\u0275fac=function(e){return new(e||O)},O.\u0275mod=t.oAB({type:O}),O.\u0275inj=t.cJS({imports:[d.ez,g.Bz]});var Pt=l(8580);class F{}F.\u0275fac=function(e){return new(e||F)},F.\u0275mod=t.oAB({type:F}),F.\u0275inj=t.cJS({providers:[v,{provide:t.ip1,useFactory:o=>()=>o.init(),deps:[v],multi:!0},_,{provide:t.ip1,useFactory:o=>()=>o.init(),deps:[_],multi:!0},{provide:Window,useValue:window}],imports:[d.ez,b.QW,I.To,Pt.XD,k.ot,K.vV,it.AV,g.Bz,T,x.u5]});class D{}D.\u0275fac=function(e){return new(e||D)},D.\u0275mod=t.oAB({type:D,bootstrap:[Q]}),D.\u0275inj=t.cJS({providers:[f,{provide:t.ip1,useFactory:o=>()=>o.init(),deps:[f],multi:!0},{provide:d.S$,useClass:d.Do},{provide:Window,useValue:window}],imports:[S.b2,M,w,F,O,st.PW,y]}),S.q6().bootstrapModule(D).catch(o=>console.error(o))},950:()=>{},6601:()=>{},8623:()=>{},7748:()=>{},5568:()=>{},6619:()=>{},7108:()=>{},2361:()=>{},4616:()=>{}},L=>{L.O(0,["vendor"],()=>L(L.s=5623)),L.O()}]);