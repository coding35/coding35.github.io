(self.webpackChunkcoding35=self.webpackChunkcoding35||[]).push([["main"],{8292:(P,ot,l)=>{"use strict";var k=l(1481),t=l(4650),g=l(4843);class U{}U.\u0275fac=function(e){return new(e||U)},U.\u0275cmp=t.Xpm({type:U,selectors:[["app-about"]],decls:21,vars:0,consts:[[1,"content-component","simple-content-page"],[1,"page-title"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"h3",1),t._uU(2,"About"),t.qZA(),t.TgZ(3,"article")(4,"p"),t._uU(5," My interest in the mind, memory, and learning led me to earn a psychology degree many years ago. Today, I am a software developer and like most tech workers in the field, I understand the necessity for continued learning. What better way to engage my two favorite topics than by combining my enjoyment of software development with ways to improve memory and learning. "),t.qZA(),t.TgZ(6,"p"),t._uU(7," This web application is an ongoing effort/experiment with two primary goals. "),t.qZA(),t.TgZ(8,"ol")(9,"li"),t._uU(10," Improve my understanding of architecture, design, and best practice in software development by applying a directed learning technique. "),t.qZA(),t.TgZ(11,"li"),t._uU(12," Apply, evolve and dial in the learning techniques that work best for me. "),t.qZA()(),t.TgZ(13,"p"),t._uU(14," I will measure my progress by tracking the number of new concepts learned in a week, the number of concepts retained after a week, and the time spent practicing new concepts. I will also keep a journal to document my progress, note which techniques work best, and record any insights or discoveries I make along the way. "),t.qZA(),t.TgZ(15,"h4"),t._uU(16,"The Material"),t.qZA(),t.TgZ(17,"p"),t._uU(18," This site is a collection of material created designed to drive personal learning and growth. It follows the philosophy of learning by doing and teaching and is a work in progress. "),t.qZA(),t.TgZ(19,"p"),t._uU(20," I hope you find something useful here. If you have any questions or comments, please feel free to contact me. "),t.qZA()()())},styles:[".page-title[_ngcontent-%COMP%]{font-weight:400;font-size:25px}.simple-content-page[_ngcontent-%COMP%]{padding:3em}"]});class q{}q.\u0275fac=function(e){return new(e||q)},q.\u0275cmp=t.Xpm({type:q,selectors:[["app-contact"]],decls:9,vars:0,consts:[[1,"content-component","simple-content-page"],[1,"page-title"],["id","ContentIframe"],["src","https://docs.google.com/forms/d/e/1FAIpQLSdGWiNsEYO7uO9233EB4xRLTlItT7F9Jg4VXi2Yv88jecaq6g/viewform?embedded=true","width","640","height","800","frameborder","0","marginheight","0","marginwidth","0"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"h3",1),t._uU(2,"Contact"),t.qZA(),t.TgZ(3,"article")(4,"p"),t._uU(5," If you have any questions or comments, please feel free to contact me. "),t.qZA(),t.TgZ(6,"p",2)(7,"iframe",3),t._uU(8,"Loading\u2026"),t.qZA()()()())},styles:[".simple-content-page[_ngcontent-%COMP%]{padding:3em;min-height:650px}"]});var pt=l(5861),it=l(727);class dt{constructor(e){this.type="",this.title="",this.subtitle="",this.description="",this.avatar="",this.date=new Date,this.author="",this.readTime=0,this.content="",this.tags=[],this.callback=new gt,this.image="",this.imageAlt="",this.id="",this.references=[],this.categories=[],Object.assign(this,e)}}class gt{}var m=(()=>{return(o=m||(m={})).Architecture="architecture",o.Video="video",o.Book="book",o.Code="code",o.Any="any",o.Electronics="electronics",o.Design="design",o.Search="search",o.Database="database",o.DesignPrinciples="design-principles",m;var o})();class C{constructor(){this.ee=new t.vpe}}C.\u0275fac=function(e){return new(e||C)},C.\u0275prov=t.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"});class f{constructor(e){this.windowObj=e,this.idb=this.windowObj.indexedDB,this.data=[],this.database="Coding35",this.version=10,this.store="ContentStore",fetch("../../assets/json/content.json").then(n=>n.json()).then(n=>{n.forEach(i=>{this.data.push(new dt(i))})})}init(){let e=this.idb.open(this.database,this.version);e.onsuccess=n=>{this.insertData(n)},e.onerror=n=>{console.log("Error opening DB")},e.onupgradeneeded=n=>{this.createDatabase(n)}}insertData(e){this.indexedDb=e.target.result;const n=this.indexedDb.transaction([this.store],"readwrite"),i=n.objectStore(this.store);this.data.forEach(a=>{i.get(a.id)?n.objectStore(this.store).put(a):n.objectStore(this.store).add(a)})}createDatabase(e){this.indexedDb=e.target.result,this.setupStore("ContentStore","content"),this.setupStore("Sm2Store","session")}setupStore(e,n){let i=this.indexedDb.createObjectStore(e,{keyPath:"id"});i.createIndex(n,n,{unique:!1}),i.transaction.oncomplete=a=>{const r=this.indexedDb.transaction([e],"readwrite");r.oncomplete=s=>{},r.onerror=s=>{console.error(`Transaction Error. ${s}`)}}}get(e,n="ContentStore"){return new Promise((i,a)=>{this.idb.open(this.database,this.version).onsuccess=s=>{this.indexedDb=s?.target?.result,this.indexedDb.transaction(n).objectStore(n).get(e).onsuccess=c=>{i(c.target.result)},onerror=c=>{a(c)}}})}getAll(e="ContentStore"){return new Promise((n,i)=>{this.idb.open(this.database,this.version).onsuccess=r=>{this.indexedDb=r?.target?.result,this.indexedDb.transaction(e).objectStore(e).getAll().onsuccess=s=>{n(s.target.result)},onerror=s=>{i(s)}}})}insert(e,n){return new Promise((i,a)=>{this.idb.open(this.database,this.version).onsuccess=s=>{this.indexedDb=s?.target?.result,this.indexedDb.transaction(n,"readwrite").objectStore(n).add(e).onsuccess=c=>{i(c.target.result)},onerror=c=>{a(c)}}})}update(e,n){return new Promise((i,a)=>{this.idb.open(this.database,this.version).onsuccess=s=>{this.indexedDb=s?.target?.result,this.indexedDb.transaction(n,"readwrite").objectStore(n).put(e).onsuccess=c=>{i(c.target.result)},onerror=c=>{a(c)}}})}clear(e){return new Promise((n,i)=>{this.idb.open(this.database,this.version).onsuccess=r=>{this.indexedDb=r?.target?.result,this.indexedDb.transaction(e,"readwrite").objectStore(e).clear().onsuccess=s=>{n(s.target.result)},onerror=s=>{i(s)}}})}}f.\u0275fac=function(e){return new(e||f)(t.LFG(Window))},f.\u0275prov=t.Yz7({token:f,factory:f.\u0275fac});var u=l(6895);class S{}S.\u0275fac=function(e){return new(e||S)},S.\u0275cmp=t.Xpm({type:S,selectors:[["app-not-found-component"]],decls:2,vars:0,template:function(e,n){1&e&&(t.TgZ(0,"h3"),t._uU(1,"Page Not Found"),t.qZA())}});var b=l(3546),V=l(7331),v=l(4859);class A{transform(e){switch(e){case"design-principles":return"Design Principles";case"design":return"Design Patterns";case"operating-systems":return"Operating Systems";default:return e?e.toString().toLowerCase().replace(/(?:^|\s|-)\S/g,function(n){return n.toUpperCase()}):null}}}function mt(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"mat-chip",17),t.NdJ("click",function(){const r=t.CHM(n).$implicit,s=t.oxw(3);return t.KtG(s.handleCategoryChipClick(r))}),t._uU(1),t.ALo(2,"categoryTitle"),t.qZA()}if(2&o){const n=e.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,n)," ")}}function ut(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"div",5)(1,"mat-card",6)(2,"mat-card-header",7)(3,"mat-card-title",8),t._uU(4),t.qZA(),t.TgZ(5,"mat-card-subtitle"),t._uU(6),t.qZA()(),t.TgZ(7,"img",9),t.NdJ("click",function(){const r=t.CHM(n).$implicit,s=t.oxw(2);return t.KtG(s.handleReadMore(r.id))}),t.qZA(),t.TgZ(8,"mat-card-content")(9,"p"),t._uU(10),t.qZA(),t.TgZ(11,"mat-chip-listbox",10),t.YNc(12,mt,3,3,"mat-chip",11),t.qZA(),t.TgZ(13,"div",12)(14,"div",13)(15,"div",14),t._uU(16),t.ALo(17,"date"),t.qZA(),t.TgZ(18,"mat-card-actions",15)(19,"button",16),t.NdJ("click",function(){const r=t.CHM(n).$implicit,s=t.oxw(2);return t.KtG(s.handleReadMore(r.id))}),t._uU(20," READ MORE "),t.qZA()()()()()()()}if(2&o){const n=e.$implicit,i=t.oxw(2);t.xp6(4),t.Oqu(n.title),t.xp6(2),t.Oqu(n.subtitle),t.xp6(1),t.s9C("src",n.image,t.LSH),t.s9C("alt",n.imageAlt),t.Q6J("loading",i.handleLazyLoadingImg(n)),t.xp6(3),t.hij(" ",n.description," "),t.xp6(2),t.Q6J("ngForOf",n.categories),t.xp6(4),t.Oqu(t.lcZ(17,8,n.date))}}function ht(o,e){if(1&o&&(t.TgZ(0,"div",3),t.YNc(1,ut,21,10,"div",4),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.contentList)}}function ft(o,e){1&o&&t._UZ(0,"app-not-found-component")}A.\u0275fac=function(e){return new(e||A)},A.\u0275pipe=t.Yjl({name:"categoryTitle",type:A,pure:!0});class p{constructor(e,n,i,a){this.route=e,this.router=n,this.search=i,this.indexDbSvc=a,this.contentList=[],this.notFound=!1,this.pageTitle="Not Found",this.filter=m.Architecture,this.routerSubscription=new it.w0,this.category="",this.eagerLoadImageList=[]}ngOnInit(){var e=this;this.routerSubscription=this.router.events.subscribe(function(){var n=(0,pt.Z)(function*(i){if(i instanceof g.m2||i instanceof g.Xs){switch(e.route.snapshot.data.page){case"architecture":e.filter=m.Architecture,e.pageTitle="Architecture";break;case"design":e.filter=m.Design,e.pageTitle="Design";break;case"code":e.filter=m.Code,e.pageTitle="Code";break;case"video":e.filter=m.Video,e.pageTitle="Video Tutorials";break;case"book":e.filter=m.Book,e.pageTitle="Book List";break;case"electronics":e.filter=m.Electronics,e.pageTitle="Electronics";break;case"category":e.filter=m.Any,e.pageTitle="Filtering by Category: ",e.category=e.route.snapshot.params.search;break;case"list":e.filter=m.Any,e.pageTitle="";break;case"web":e.filter=m.Book,e.pageTitle="Web";break;case"database":e.filter=m.Book,e.pageTitle="Database";break;case'"design-principles"':e.filter=m.DesignPrinciples,e.pageTitle='Design Principles"';break;default:e.pageTitle="Not Found",e.notFound=!0}e.indexDbSvc.getAll("ContentStore").then(r=>{r=r.filter(c=>!c.tags.toLocaleString().includes("wip"));const s=e.route.snapshot.params.search||"";e.filter==m.Any?(e.contentList=s?r.filter(c=>c.categories.includes(s)):r,e.contentList.sort((c,h)=>new Date(h.date).getTime()-new Date(c.date).getTime())):e.contentList=r.filter(c=>c.type==e.filter).sort((c,h)=>new Date(h.date).getTime()-new Date(c.date).getTime()),e.eagerLoadImageList=e.contentList.slice(0,4).map(c=>c.id)})}});return function(i){return n.apply(this,arguments)}}()),this.search.ee.subscribe(n=>{this.category=n||"All",this.filter=m.Search,this.indexDbSvc.getAll("ContentStore").then(i=>{i=i.filter(s=>!s.tags.toLocaleString().includes("wip")),this.contentList=i.filter(s=>s.title.toLowerCase().includes(n.toLowerCase())||s.subtitle.toLowerCase().includes(n.toLowerCase())||s.categories.some(c=>c.toLowerCase().includes(n.toLowerCase()))||s.tags.some(c=>c.toLowerCase().includes(n.toLowerCase()))||s.description.toLowerCase().includes(n.toLowerCase())).sort((s,c)=>new Date(c.date).getTime()-new Date(s.date).getTime());let r=this.contentList.length;this.pageTitle=`Search returned ${r} ${1==r?"result":"results"} for term: `})})}handleReadMore(e){scrollTo(0,0);let n=this.contentList.find(i=>i.id==e)?.type;this.router.navigate([`/${n}/${e}`])}handleCategoryChipClick(e){this.router.navigate([`/category/${e}`])}handleLazyLoadingImg(e){return this.eagerLoadImageList.includes(e.id)?"eager":"lazy"}ngOnDestroy(){this.routerSubscription.unsubscribe()}}p.\u0275fac=function(e){return new(e||p)(t.Y36(g.gz),t.Y36(g.F0),t.Y36(C),t.Y36(f))},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-content-list"]],decls:6,vars:6,consts:[[1,"list-page-title"],["class","container-list",4,"ngIf","ngIfElse"],["notFoundTemplate",""],[1,"container-list"],["class","card",4,"ngFor","ngForOf"],[1,"card"],[1,"content-card"],[1,"app-card-header"],[1,"card-title"],["mat-card-image","",1,"image-responsive",3,"src","alt","loading","click"],["aria-label","Categories",1,"list-box"],[3,"click",4,"ngFor","ngForOf"],[1,"card-footer-container"],[1,"card-footer"],[1,"card-footer-item-date"],[1,"card-footer-item"],["mat-button","",3,"click"],[3,"click"]],template:function(e,n){if(1&e&&(t.TgZ(0,"h3",0),t._uU(1),t.ALo(2,"categoryTitle"),t.qZA(),t.YNc(3,ht,2,1,"div",1),t.YNc(4,ft,1,0,"ng-template",null,2,t.W1O)),2&e){const i=t.MAs(5);t.xp6(1),t.AsE("",n.pageTitle," ",t.lcZ(2,4,n.category),""),t.xp6(2),t.Q6J("ngIf",!n.notFound)("ngIfElse",i)}},dependencies:[u.sg,u.O5,S,b.a8,b.hq,b.dn,b.dk,b.G2,b.$j,b.n5,V.HS,V.z2,v.lW,u.uU,A],styles:[".container-list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr))}.card[_ngcontent-%COMP%]{display:flex;padding:5px;margin:10px}.card[_ngcontent-%COMP%]   .image-responsive[_ngcontent-%COMP%]{display:block;max-width:100%;width:auto;height:auto;margin-left:auto;margin-right:auto}.app-card-header[_ngcontent-%COMP%]{padding:16px}.list-page-title[_ngcontent-%COMP%]{font-weight:400;font-size:25px;padding-left:15px}.card-title[_ngcontent-%COMP%]{font-size:20px}.card-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.card-footer[_ngcontent-%COMP%]   .card-footer-item-date[_ngcontent-%COMP%]{padding:25px 0;text-align:center}@media screen and (max-width: 768px){.card[_ngcontent-%COMP%]   .image-responsive[_ngcontent-%COMP%]{display:block;width:auto;height:auto}}"]});class Ct{constructor(e,n){this.source=e,this.target=n}}class I{constructor(e,n,i){this.ticker=new t.vpe,this.nodes=[],this.links=[],this.nodes=e,this.links=n,this.initSimulation(i)}connectNodes(e,n){let i;if(!this.nodes[e]||!this.nodes[n])throw new Error("One of the nodes does not exist");i=new Ct(e,n),this.simulation.stop(),this.links.push(i),this.simulation.alphaTarget(.3).restart(),this.initLinks()}initNodes(){if(!this.simulation)throw new Error("simulation was not initialized yet");this.simulation.nodes(this.nodes)}initLinks(){if(!this.simulation)throw new Error("simulation was not initialized yet")}initSimulation(e){}}I.\u0275fac=function(e){return new(e||I)(t.Y36("isFactory"),t.Y36("isFactory"),t.Y36("isFactory"))},I.\u0275cmp=t.Xpm({type:I,selectors:[["app-force-directed-tree"]],decls:1,vars:0,consts:[["id","ForceDirectedTree"]],template:function(e,n){1&e&&t._UZ(0,"figure",0)}});class O{constructor(e){this.sanitizer=e}transform(e,n){switch(n){case"html":return this.sanitizer.bypassSecurityTrustHtml(e);case"style":return this.sanitizer.bypassSecurityTrustStyle(e);case"script":return this.sanitizer.bypassSecurityTrustScript(e);case"url":return this.sanitizer.bypassSecurityTrustUrl(e);case"resourceUrl":return this.sanitizer.bypassSecurityTrustResourceUrl(e);default:throw new Error(`Invalid safe type specified: ${n}`)}}}function bt(o,e){if(1&o&&(t.TgZ(0,"article")(1,"div",2)(2,"h2"),t._uU(3),t.qZA(),t.TgZ(4,"span"),t._uU(5),t.ALo(6,"date"),t.qZA()(),t._UZ(7,"div",3),t.ALo(8,"safe"),t.qZA()),2&o){const n=t.oxw();t.xp6(3),t.Oqu(null==n.pageContent?null:n.pageContent.title),t.xp6(2),t.lnq("",t.lcZ(6,5,null==n.pageContent?null:n.pageContent.date)," | Posted By: ",null==n.pageContent?null:n.pageContent.author," | ",null==n.pageContent?null:n.pageContent.readTime," min read"),t.xp6(2),t.Q6J("innerHtml",t.xi3(8,7,null==n.pageContent?null:n.pageContent.content,"html"),t.oJD)}}function vt(o,e){1&o&&t._UZ(0,"app-not-found-component")}O.\u0275fac=function(e){return new(e||O)(t.Y36(k.H7,16))},O.\u0275pipe=t.Yjl({name:"safe",type:O,pure:!0});class d{constructor(e,n,i,a){this.route=e,this.router=n,this.search=i,this.indexDbSvc=a,this.notFound=!1,this.routerSubscription=new it.w0}ngOnInit(){this.routerSubscription=this.router.events.subscribe(e=>{if(e instanceof g.m2||e instanceof g.Xs){let n=this.route.snapshot.paramMap.get("id")||"-1";"-1"===n&&(this.notFound=!0),this.indexDbSvc.get(n).then(i=>{fetch(`../../assets/templates/${n}/page.html`).then(a=>a.text()).then(a=>{if(this.pageContent=i,void 0===this.pageContent||a.indexOf("Cannot GET /assets")>-1)this.notFound=!0;else if(this.pageContent.content=a,this.pageContent.tags.some(r=>"snippet"===r)&&setTimeout(()=>{window.PR.prettyPrint()},0),this.pageContent.callback.name){const r=this.pageContent.callback;setTimeout(()=>{r.styles&&r.styles.forEach(s=>{const c=document.createElement("link");c.href=s,c.type="text/css",c.rel="stylesheet",console.log(c),document.head.appendChild(c)}),r.dependencies&&r.dependencies.forEach(s=>{const c=document.createElement("script");c.src=s,document.body.appendChild(c)}),fetch(`../../assets/templates/${n}/script.js`).then(s=>s.text()).then(s=>{var c=document.createElement("script");c.innerHTML=s,document.body.appendChild(c)})},0|this.pageContent.callback.delay)}})})}}),this.search.ee.subscribe(e=>{this.router.navigate(["search"])})}ngOnDestroy(){this.routerSubscription.unsubscribe()}}d.\u0275fac=function(e){return new(e||d)(t.Y36(g.gz),t.Y36(g.F0),t.Y36(C),t.Y36(f))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-page"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["notFoundTemplate",""],[1,"page-info"],[3,"innerHtml"]],template:function(e,n){if(1&e&&(t.YNc(0,bt,9,10,"article",0),t.YNc(1,vt,1,0,"ng-template",null,1,t.W1O)),2&e){const i=t.MAs(2);t.Q6J("ngIf",!n.notFound)("ngIfElse",i)}},dependencies:[u.O5,S,u.uU,O],styles:["article[_ngcontent-%COMP%]{padding:20px}"]});var at=l(1764),_t=l(8436);const yt=["What makes {{topic}} important?","What is {{topic}}?","When might {{topic}} be most useful and why?"];class wt{constructor(e){this.flashcards=[];let n=0;e.forEach(i=>{yt.forEach(a=>{this.flashcards.push({id:n++,contentId:i.id,type:i.type,path:`#/${i.type}/${i.id}`,front:a.replace("{{topic}}",i.title),back:i.description,dueDate:at(Date.now()).add(0,"day").toISOString(),efactor:2.5,interval:0,repetition:0})})})}}var xt=l(3587);class _{constructor(){}init(){const e=localStorage.getItem("dropboxKey")||"";e?(console.log("DropboxService.init()"),this.dbx=new xt.Dropbox({accessToken:e})):console.log("DropboxService.init() - no key")}downloadFile(e){return this.dbx.filesDownload({path:e})}uploadFile(e,n){return this.dbx.filesUpload({path:n,contents:e,mode:{".tag":"overwrite"}}).then(i=>{console.log(i)}).catch(i=>{console.error(i)})}}_.\u0275fac=function(e){return new(e||_)},_.\u0275prov=t.Yz7({token:_,factory:_.\u0275fac});var N=l(9652),tt=l(811),st=l(266),y=l(4006);class E{constructor(){}ngOnChanges(e){setTimeout(()=>{fetch(`../../assets/templates/${this.card.contentId}/page.html`).then(n=>n.text()).then(n=>{this.content=n})},500)}}function Tt(o,e){if(1&o&&(t.TgZ(0,"mat-accordion")(1,"mat-expansion-panel",14,15)(3,"mat-expansion-panel-header")(4,"mat-panel-title"),t._uU(5),t.qZA()(),t.TgZ(6,"p"),t._uU(7),t.qZA(),t.TgZ(8,"mat-accordion")(9,"mat-expansion-panel",14,15)(11,"mat-expansion-panel-header")(12,"mat-panel-title"),t._uU(13," Review "),t.qZA()(),t._UZ(14,"app-review",16),t.qZA()()()()),2&o){const n=t.oxw();t.xp6(5),t.hij(" ",n.currentCard.front," "),t.xp6(2),t.Oqu(n.currentCard.back),t.xp6(7),t.Q6J("card",n.currentCard)}}E.\u0275fac=function(e){return new(e||E)},E.\u0275cmp=t.Xpm({type:E,selectors:[["app-review"]],inputs:{card:"card"},features:[t.TTD],decls:2,vars:4,consts:[[3,"innerHtml"]],template:function(e,n){1&e&&(t._UZ(0,"div",0),t.ALo(1,"safe")),2&e&&t.Q6J("innerHtml",t.xi3(1,1,n.content,"html"),t.oJD)},dependencies:[O]});class J{constructor(e,n){this.indexDbSvc=e,this.dropbox=n,this.flashcards=[],this.buttonToggle=void 0,this.cardsToReview=0,this.cardsReviewed=0,this.reviewedCardIds=[]}ngOnInit(){this.indexDbSvc.getAll("ContentStore").then(e=>{this.indexDbSvc.getAll("Sm2Store").then(n=>{let i=new wt(e.filter(a=>a.tags.indexOf("sm2")>-1));this.indexDbSvc.getAll("Sm2Store").then(a=>{this.allCards=a,this.cardsToReview=a.length,this.getCard()}),console.log(n),i.flashcards.forEach(a=>{if(n.find(r=>r.contentId===a.contentId)){let r=n.find(s=>s.contentId===a.contentId);this.indexDbSvc.update(r,"Sm2Store")}else this.indexDbSvc.insert(a,"Sm2Store")})})})}getCard(){this.cardsReviewed=this.reviewedCardIds.length;let e=this.allCards.filter(n=>new Date(n.dueDate)<=new Date(Date.now())&&!this.reviewedCardIds.includes(n.id));this.currentCard=e[Math.floor(Math.random()*e.length)]}practice(e,n){const{interval:i,repetition:a,efactor:r}=(0,_t.U)(e,n),s=at(Date.now()).add(i,"day").toISOString(),c={...e,interval:i,repetition:a,efactor:r,dueDate:s};return this.indexDbSvc.update(c,"Sm2Store").then(h=>{this.buttonToggle=void 0,this.reviewedCardIds.push(c.id),this.getCard()}).catch(h=>{console.error(h)}),c}export(){this.indexDbSvc.getAll("Sm2Store").then(e=>{const n="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e)),i=document.createElement("a");i.setAttribute("href",n),i.setAttribute("download","sm2.json"),document.body.appendChild(i),i.click(),i.remove()})}import(){const e=document.createElement("input");e.type="file",e.accept=".json",e.onchange=n=>{const a=n.target.files?.item(0);if(a){const r=new FileReader;r.readAsText(a,"UTF-8"),r.onload=s=>{const c=s.target?.result;if(c){const h=JSON.parse(c);this.indexDbSvc.clear("Sm2Store"),h.forEach(Nt=>{this.indexDbSvc.update(Nt,"Sm2Store")})}}}},e.click()}setKey(){const e=document.createElement("input");e.type="file",e.accept=".json",e.onchange=n=>{const a=n.target.files?.item(0);if(a){const r=new FileReader;r.readAsText(a,"UTF-8"),r.onload=s=>{const c=s.target?.result;if(c){const h=JSON.parse(c);localStorage.setItem("dropboxKey",h.key)}}}},e.click()}saveToDropbox(){this.indexDbSvc.getAll("Sm2Store").then(e=>{this.dropbox.uploadFile(JSON.stringify(e),"/sm2.json").then(()=>{console.log("saved")}).catch(n=>{console.error(n)})})}loadFromDropbox(){this.dropbox.downloadFile("/sm2.json").then(e=>{const n=new FileReader;n.readAsText(e.result.fileBlob,"UTF-8"),n.onload=i=>{const a=i.target?.result;if(a){const r=JSON.parse(a);this.indexDbSvc.clear("Sm2Store"),r.forEach(s=>{this.indexDbSvc.update(s,"Sm2Store")})}}}).catch(e=>{console.error(e)})}}J.\u0275fac=function(e){return new(e||J)(t.Y36(f),t.Y36(_))},J.\u0275cmp=t.Xpm({type:J,selectors:[["app-sm2"]],decls:36,vars:4,consts:[["id","ReviewPanel"],[4,"ngIf"],["id","ReviewButtonGroup",3,"ngModel","ngModelChange","change"],["group","matButtonToggleGroup"],["value","0","matTooltip","complete blackout","matTooltipPosition","below",1,"review-btn"],["tooltip","matTooltip"],["value","1","matTooltip","incorrect response; the correct one remembered","matTooltipPosition","below",1,"review-btn"],["value","2","matTooltip","incorrect response; where the correct one seemed easy to recall.","matTooltipPosition","below",1,"review-btn"],["value","3","matTooltip","correct response recalled with serious difficulty","matTooltipPosition","below",1,"review-btn"],["value","4","matTooltip","correct response after a hesitation","matTooltipPosition","below",1,"review-btn"],["value","5","matTooltip","perfect response","matTooltipPosition","below",1,"review-btn"],["id","ReviewCount"],["id","ExportImport"],["mat-button","","color","Primary",3,"click"],["hideToggle","false"],["mep","matExpansionPanel"],[3,"card"]],template:function(e,n){if(1&e){const i=t.EpF();t.TgZ(0,"div",0),t.YNc(1,Tt,15,3,"mat-accordion",1),t.TgZ(2,"mat-button-toggle-group",2,3),t.NdJ("ngModelChange",function(r){return n.buttonToggle=r})("change",function(){t.CHM(i);const r=t.MAs(3);return t.KtG(n.practice(n.currentCard,r.value))}),t.TgZ(4,"mat-button-toggle",4,5),t._uU(6," 0 "),t.qZA(),t.TgZ(7,"mat-button-toggle",6,5),t._uU(9," 1 "),t.qZA(),t.TgZ(10,"mat-button-toggle",7,5),t._uU(12," 2 "),t.qZA(),t.TgZ(13,"mat-button-toggle",8,5),t._uU(15," 3 "),t.qZA(),t.TgZ(16,"mat-button-toggle",9,5),t._uU(18," 4 "),t.qZA(),t.TgZ(19,"mat-button-toggle",10,5),t._uU(21," 5 "),t.qZA()()(),t.TgZ(22,"div")(23,"div",11),t._uU(24),t.qZA(),t.TgZ(25,"div",12)(26,"button",13),t.NdJ("click",function(){return n.export()}),t._uU(27,"Export"),t.qZA(),t.TgZ(28,"button",13),t.NdJ("click",function(){return n.import()}),t._uU(29,"Import"),t.qZA(),t.TgZ(30,"button",13),t.NdJ("click",function(){return n.loadFromDropbox()}),t._uU(31,"Load"),t.qZA(),t.TgZ(32,"button",13),t.NdJ("click",function(){return n.saveToDropbox()}),t._uU(33,"Save"),t.qZA(),t.TgZ(34,"button",13),t.NdJ("click",function(){return n.setKey()}),t._uU(35,"Key"),t.qZA()()()}2&e&&(t.xp6(1),t.Q6J("ngIf",n.currentCard),t.xp6(1),t.Q6J("ngModel",n.buttonToggle),t.xp6(22),t.AsE("",n.cardsReviewed," of ",n.cardsToReview," Reviewed"))},dependencies:[u.O5,N.pp,N.ib,N.yz,N.yK,v.lW,tt.A9,tt.Yi,st.gM,y.JJ,y.On,E],styles:["#ReviewPanel[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:1em}#ReviewButtonGroup[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:5px;border:1px solid lightblue}.review-btn[_ngcontent-%COMP%]{min-width:50px}#ReviewCount[_ngcontent-%COMP%]{font-size:14px;display:flex;justify-content:end}#ExportImport[_ngcontent-%COMP%]{display:flex;justify-content:right;margin-top:100px;position:relative;font-size:13px}"]});const Zt=[{path:"sm2",component:J,data:{page:"SM2"}},{path:"architecture/:id",component:d,data:{page:"architecture"}},{path:"architecture",component:p,data:{page:"architecture"}},{path:"design/:id",component:d,data:{page:"design"}},{path:"design",component:p,data:{page:"design"}},{path:"code/:id",component:d,data:{page:"code"}},{path:"code",component:p,data:{page:"code"}},{path:"database/:id",component:d,data:{page:"database"}},{path:"database",component:p,data:{page:"database"}},{path:"video/:id",component:d,data:{page:"video"}},{path:"video",component:p,data:{page:"video"}},{path:"assembly/:id",component:d,data:{page:"assembly"}},{path:"assembly",component:p,data:{page:"assembly"}},{path:"productivity/:id",component:d,data:{page:"productivity"}},{path:"productivity",component:p,data:{page:"productivity"}},{path:"learning/:id",component:d,data:{page:"learning"}},{path:"learning",component:p,data:{page:"learning"}},{path:"linux/:id",component:d,data:{page:"linux"}},{path:"linux",component:p,data:{page:"linux"}},{path:"soft-skills/:id",component:d,data:{page:"soft-skills"}},{path:"soft-skills",component:p,data:{page:"soft-skills"}},{path:"machine-learning/:id",component:d,data:{page:"machine-learning"}},{path:"machine-learning",component:p,data:{page:"machine-learning"}},{path:"electronics/:id",component:d,data:{page:"electronics"}},{path:"electronics",component:p,data:{page:"electronics"}},{path:"book/:id",component:d,data:{page:"book"}},{path:"book",component:p,data:{page:"book"}},{path:"development/:id",component:d,data:{page:"development"}},{path:"development",component:p,data:{page:"development"}},{path:"operating-systems/:id",component:d,data:{page:"operating-systems"}},{path:"operating-systems",component:p,data:{page:"operating-systems"}},{path:"windows/:id",component:d,data:{page:"windows"}},{path:"windows",component:p,data:{page:"windows"}},{path:"web/:id",component:d,data:{page:"web"}},{path:"web",component:p,data:{page:"web"}},{path:"design-principles/:id",component:d,data:{page:"design-principles"}},{path:"design-principles",component:p,data:{page:"design-principles"}},{path:"category/:search",component:p,data:{page:"category"}},{path:"about",component:U,data:{page:"about"}},{path:"contact",component:q,data:{page:"contact"}},{path:"tree",component:I,data:{page:"tree"}},{path:"**",component:p,data:{page:"list"}},{path:"",component:p,data:{page:"list"}}];class w{}w.\u0275fac=function(e){return new(e||w)},w.\u0275mod=t.oAB({type:w}),w.\u0275inj=t.cJS({imports:[g.Bz.forRoot(Zt),g.Bz]});var x=l(5412);class j{}j.\u0275fac=function(e){return new(e||j)},j.\u0275cmp=t.Xpm({type:j,selectors:[["app-heads-up"]],decls:15,vars:0,consts:[["mat-dialog-title",""],[1,"mat-typography"],["align","end"],["mat-button","","mat-dialog-close","","color","primary"]],template:function(e,n){1&e&&(t.TgZ(0,"h1",0),t._uU(1,"Important: Please Take Note"),t.qZA(),t.TgZ(2,"mat-dialog-content",1)(3,"ul")(4,"li"),t._uU(5,"This is not a blog or a how-to site."),t.qZA(),t.TgZ(6,"li"),t._uU(7,"The content was produced using rapid directed learning, "),t._UZ(8,"br"),t._uU(9," acquisition and retention techniques."),t.qZA(),t.TgZ(10,"li"),t._uU(11,"Content is not intended to be a comprehensive or authoritative resource."),t.qZA()()(),t.TgZ(12,"mat-dialog-actions",2)(13,"button",3),t._uU(14,"Roger That"),t.qZA()())},dependencies:[x.ZT,x.uh,x.xY,x.H8,v.lW]});var rt=l(6201);class R{}R.\u0275fac=function(e){return new(e||R)},R.\u0275cmp=t.Xpm({type:R,selectors:[["app-top-bar"]],decls:2,vars:0,template:function(e,n){1&e&&(t.TgZ(0,"div"),t._uU(1,'"If you want to master something, teach it." - Richard Feynman'),t.qZA())},styles:["div[_ngcontent-%COMP%]{padding:10px 15px;color:#fff;background:#054f7d;text-align:center;font-size:16px}"]});var et=l(3683);class z{}z.\u0275fac=function(e){return new(e||z)},z.\u0275cmp=t.Xpm({type:z,selectors:[["app-bottom-bar"]],decls:1,vars:0,template:function(e,n){1&e&&t._UZ(0,"div")},styles:["div[_ngcontent-%COMP%]{background:#007ec0;padding:13px 0;color:#fff}"]});const kt=function(){return["/"]},St=function(){return["/sm2"]},At=function(){return["/about"]},Ot=function(){return["/contact"]};class Y{}Y.\u0275fac=function(e){return new(e||Y)},Y.\u0275cmp=t.Xpm({type:Y,selectors:[["app-top-nav"]],decls:19,vars:8,consts:[[1,"container"],["color","primary"],[1,"menu-spacer"],["fxShow","true","fxHide.lt-md","",1,"menu-link-list"],["mat-button","",3,"routerLink"],["target","_blank","href","https://www.linkedin.com/in/adam-reed-060854240/",1,"linkedin"],["role","img","viewBox","0 0 24 24","xmlns","http://www.w3.org/2000/svg","fill","#054f7d",2,"width","28px"],["d","M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"mat-toolbar",1)(2,"mat-toolbar-row"),t._UZ(3,"span",2),t.TgZ(4,"div",3)(5,"a",4),t._uU(6,"Home"),t.qZA(),t.TgZ(7,"a",4),t._uU(8,"Review"),t.qZA(),t.TgZ(9,"a",4),t._uU(10,"About"),t.qZA(),t.TgZ(11,"a",4),t._uU(12,"Contact"),t.qZA(),t.TgZ(13,"a",5),t.O4$(),t.TgZ(14,"svg",6)(15,"title"),t._uU(16,"LinkedIn icon"),t.qZA(),t._UZ(17,"path",7),t.qZA()()()()(),t.kcU(),t._UZ(18,"app-bottom-bar"),t.qZA()),2&e&&(t.xp6(5),t.Q6J("routerLink",t.DdM(4,kt)),t.xp6(2),t.Q6J("routerLink",t.DdM(5,St)),t.xp6(2),t.Q6J("routerLink",t.DdM(6,At)),t.xp6(2),t.Q6J("routerLink",t.DdM(7,Ot)))},dependencies:[et.Ye,et.rD,v.zs,g.rH,z],styles:[".menu-spacer[_ngcontent-%COMP%]{flex:1 1 auto}a.linkedin[_ngcontent-%COMP%]{top:8px;position:relative}.menu-link-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]});class B{}B.\u0275fac=function(e){return new(e||B)},B.\u0275cmp=t.Xpm({type:B,selectors:[["app-header"]],decls:2,vars:0,template:function(e,n){1&e&&t._UZ(0,"app-top-bar")(1,"app-top-nav")},dependencies:[R,Y],styles:[".two-col[_ngcontent-%COMP%]{padding:0 10em}"]});class Mt{constructor(e,n){this.title="",this.linkList=[],this.title=e,n.forEach(i=>{this.linkList.push(i)})}}class Ft{constructor(e){this.url="",this.icon="",this.target="_self",this.title=e,this.url=e.toLowerCase()}}var K=l(4633),nt=l(3336),G=l(9549),ct=l(4144);function Dt(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"mat-list-item",7),t.NdJ("click",function(){const r=t.CHM(n).$implicit,s=t.oxw(2);return t.KtG(s.handleClick(r.url))}),t.TgZ(1,"span",8)(2,"span",9),t._uU(3),t.ALo(4,"categoryTitle"),t.qZA(),t.TgZ(5,"mat-icon",10),t._uU(6,"keyboard_arrow_right"),t.qZA()()()}if(2&o){const n=e.$implicit;t.xp6(3),t.Oqu(t.lcZ(4,1,n.title))}}function Lt(o,e){if(1&o&&(t.TgZ(0,"mat-list",4)(1,"div",5),t._uU(2),t.qZA(),t.YNc(3,Dt,7,3,"mat-list-item",6),t.qZA()),2&o){const n=e.$implicit;t.xp6(2),t.Oqu(n.title),t.xp6(1),t.Q6J("ngForOf",n.linkList)}}class H{constructor(e,n,i){this.router=e,this.search=n,this.indexDbSvc=i,this.value="",this.categoryLinks=[]}ngOnInit(){this.indexDbSvc.getAll().then(e=>{let a=e.map(s=>s.categories).flat().filter((s,c,h)=>h.indexOf(s)===c).map(s=>new Ft(s)),r=new Array;r.push(new Mt("Categories",a.sort((s,c)=>s.title.localeCompare(c.title)))),this.categoryLinks=r})}handleClick(e){scrollTo(0,0),this.router.navigate(["/category/"+e])}searchEvent(e){this.search.ee.emit(this.value)}}H.\u0275fac=function(e){return new(e||H)(t.Y36(g.F0),t.Y36(C),t.Y36(f))},H.\u0275cmp=t.Xpm({type:H,selectors:[["app-right-nav"]],decls:8,vars:2,consts:[["appearance","outline"],["matInput","",3,"ngModel","ngModelChange"],["matSuffix",""],["role","list",4,"ngFor","ngForOf"],["role","list"],[1,"list-title"],["class","list-item","role","listitem",3,"click",4,"ngFor","ngForOf"],["role","listitem",1,"list-item",3,"click"],[1,"list-item-cell"],[1,"list-item-link"],[1,"mat-icon-list-item"]],template:function(e,n){1&e&&(t.TgZ(0,"div")(1,"mat-form-field",0)(2,"mat-label"),t._uU(3,"Search"),t.qZA(),t.TgZ(4,"input",1),t.NdJ("ngModelChange",function(a){return n.value=a})("ngModelChange",function(a){return n.searchEvent(a)}),t.qZA(),t.TgZ(5,"mat-icon",2),t._uU(6,"search"),t.qZA()(),t.YNc(7,Lt,4,2,"mat-list",3),t.qZA()),2&e&&(t.xp6(4),t.Q6J("ngModel",n.value),t.xp6(3),t.Q6J("ngForOf",n.categoryLinks))},dependencies:[u.sg,K.i$,K.Tg,nt.Hw,G.KE,G.hX,G.R9,ct.Nt,y.Fj,y.JJ,y.On,A],styles:[".list-title[_ngcontent-%COMP%]{background-color:#054f7d;color:#fff;margin:0 0 8px;padding:15px;text-transform:uppercase;font-size:1.15rem;font-weight:700}.list-item[_ngcontent-%COMP%]{color:#004987;font-size:18px;font-weight:700;margin-bottom:4px;background-color:#9dc3d6}.list-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#004987;text-decoration:none}.list-item[_ngcontent-%COMP%]   .list-item-cell[_ngcontent-%COMP%]{color:#fff}.list-item[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#007ec0}.list-item[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:#fff}.mat-icon-list-item[_ngcontent-%COMP%]{float:right}"]});class ${constructor(){}}function Pt(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"li")(1,"a",1),t.NdJ("click",function(){const r=t.CHM(n).$implicit,s=t.oxw();return t.KtG(s.handleLinkClick(r.url))}),t._uU(2),t.qZA()()}if(2&o){const n=e.$implicit;t.xp6(1),t.Q6J("target",n.target),t.xp6(1),t.Oqu(n.title)}}$.\u0275fac=function(e){return new(e||$)},$.\u0275cmp=t.Xpm({type:$,selectors:[["app-content"]],decls:5,vars:0,consts:[[1,"container-main"],[1,"content-area"],[1,"sidebar"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"router-outlet"),t.qZA(),t.TgZ(3,"div",2),t._UZ(4,"app-right-nav"),t.qZA()())},dependencies:[g.lC,H],styles:['.container-main[_ngcontent-%COMP%]{display:grid;grid-template-areas:"content-area sidebar"}.content-area[_ngcontent-%COMP%]{grid-area:content-area}.sidebar[_ngcontent-%COMP%]{background:#fff;grid-area:sidebar;position:absolute;right:0;top:20%}@media screen and (max-width: 768px){.sidebar[_ngcontent-%COMP%]{grid-area:unset;position:initial}.container-main[_ngcontent-%COMP%]{grid-template-areas:"content-area"}}']});class Q{constructor(e){this.router=e}handleLinkClick(e){scrollTo(0,0),this.router.navigate([e])}}function Ut(o,e){if(1&o&&(t.TgZ(0,"div"),t._UZ(1,"app-footer-link-list",1),t.qZA()),2&o){const n=e.$implicit;t.xp6(1),t.Q6J("links",n)}}Q.\u0275fac=function(e){return new(e||Q)(t.Y36(g.F0))},Q.\u0275cmp=t.Xpm({type:Q,selectors:[["app-footer-link-list"]],inputs:{links:"links"},decls:4,vars:2,consts:[[4,"ngFor","ngForOf"],[3,"target","click"]],template:function(e,n){1&e&&(t.TgZ(0,"ul")(1,"h3"),t._uU(2),t.qZA(),t.YNc(3,Pt,3,2,"li",0),t.qZA()),2&e&&(t.xp6(2),t.Oqu(null==n.links?null:n.links.title),t.xp6(1),t.Q6J("ngForOf",null==n.links?null:n.links.linkList))},dependencies:[u.sg],styles:["ul[_ngcontent-%COMP%]{list-style:none}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;font-size:14px;line-height:1.5;display:block;padding:5px 0}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{cursor:pointer;color:#c5cbd1;text-decoration:none}"]});class X{constructor(){this.linkLists=[]}ngOnInit(){fetch("../../assets/json/footer-links.json").then(e=>e.json()).then(e=>{this.linkLists=e})}}X.\u0275fac=function(e){return new(e||X)},X.\u0275cmp=t.Xpm({type:X,selectors:[["app-footer"]],decls:2,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"links"]],template:function(e,n){1&e&&(t.TgZ(0,"footer"),t.YNc(1,Ut,2,1,"div",0),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",n.linkLists))},dependencies:[u.sg,Q],styles:["footer[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;width:100%;margin:0;padding:0;column-gap:5em;background-color:#333;color:#fff}"]});class W{constructor(e,n,i){this.cookieService=e,this.search=n,this.dialog=i,this.title="coding35",e.get("notice")||this.openDialog(),this.registerKeyBoardEvent()}openDialog(){this.dialog.open(j).afterClosed().subscribe(n=>{this.cookieService.put("notice","true")})}registerKeyBoardEvent(){let e="";document.onkeydown=n=>{/^[a-zA-Z]$/.test(n.key)&&(e+=n.key),"Enter"===n.key&&(this.search.ee.emit(e),e=""),"Delete"===n.key&&(e="",this.search.ee.emit(e))}}}W.\u0275fac=function(e){return new(e||W)(t.Y36(rt.N_),t.Y36(C),t.Y36(x.uw))},W.\u0275cmp=t.Xpm({type:W,selectors:[["app-root"]],decls:4,vars:0,consts:[[1,"parent"],[1,"header"],[1,"main"],[1,"footer"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-header",1)(2,"app-content",2)(3,"app-footer",3),t.qZA())},dependencies:[B,$,X],styles:['.parent[_ngcontent-%COMP%]{height:100vh;display:grid;grid-template-columns:1fr 3fr 1fr;grid-template-rows:1fr 1fr 1fr;grid-template-areas:"header header header header" "main main . sidebar" "footer footer footer footer"}.header[_ngcontent-%COMP%]{grid-area:header}.main[_ngcontent-%COMP%]{grid-area:main}.sidebar[_ngcontent-%COMP%]{grid-area:sidebar}.footer[_ngcontent-%COMP%]{grid-area:footer}@media screen and (max-width: 768px){.parent[_ngcontent-%COMP%]{grid-template-areas:"header header header header" "main main main main" "footer footer footer footer"}}']});var qt=l(3267),lt=l(1516);class T{}T.\u0275fac=function(e){return new(e||T)},T.\u0275mod=t.oAB({type:T}),T.\u0275inj=t.cJS({imports:[u.ez,x.Is,v.ot]});class Z{}Z.\u0275fac=function(e){return new(e||Z)},Z.\u0275mod=t.oAB({type:Z}),Z.\u0275inj=t.cJS({imports:[u.ez,T,K.ie,nt.Ps,b.QW,V.Hi,v.ot,G.lN,ct.c,y.u5,w]});class M{}M.\u0275fac=function(e){return new(e||M)},M.\u0275mod=t.oAB({type:M}),M.\u0275inj=t.cJS({imports:[k.b2,lt.PW,u.ez,et.g0,qt.SJ,K.ie,nt.Ps,v.ot,g.Bz,Z]});class F{}F.\u0275fac=function(e){return new(e||F)},F.\u0275mod=t.oAB({type:F}),F.\u0275inj=t.cJS({imports:[u.ez,g.Bz]});var It=l(8580);class D{}D.\u0275fac=function(e){return new(e||D)},D.\u0275mod=t.oAB({type:D}),D.\u0275inj=t.cJS({providers:[_,{provide:t.ip1,useFactory:o=>()=>o.init(),deps:[_],multi:!0},{provide:Window,useValue:window}],imports:[u.ez,b.QW,N.To,It.XD,v.ot,tt.vV,st.AV,g.Bz,T,y.u5]});class L{}L.\u0275fac=function(e){return new(e||L)},L.\u0275mod=t.oAB({type:L,bootstrap:[W]}),L.\u0275inj=t.cJS({providers:[f,{provide:t.ip1,useFactory:o=>()=>o.init(),deps:[f],multi:!0},{provide:u.S$,useClass:u.Do},{provide:Window,useValue:window}],imports:[k.b2,M,Z,D,F,lt.PW,w,x.Is,rt.m$.withOptions()]}),k.q6().bootstrapModule(L).catch(o=>console.error(o))},950:()=>{},6601:()=>{},8623:()=>{},7748:()=>{},5568:()=>{},6619:()=>{},7108:()=>{},2361:()=>{},4616:()=>{}},P=>{P.O(0,["vendor"],()=>P(P.s=8292)),P.O()}]);