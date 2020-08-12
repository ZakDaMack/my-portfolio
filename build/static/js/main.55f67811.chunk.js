(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{118:function(e,t){},136:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var n=a(12),i=a(13),r=a(16),o=a(14),s=a(17),l=a(19),c=a.n(l),d=(a(88),a(0)),m=a.n(d),u=a(42),h=a(29),p=a(166),g=a(167),f=a(169),v=a(179),b=a(34),w=a(70),y=a(68),k=Object(w.a)((function(e){return{title:Object(h.a)({position:"absolute",fontWeight:"lighter"},e.breakpoints.down("sm"),{width:0}),appBar:{width:"100%",letterSpacing:1},tabbar:{flexGrow:1},active:{color:"white",background:"transparent"}}}));var C=function(e){var t=k(),a=m.a.useState(0),n=Object(u.a)(a,2),i=n[0],r=n[1];return m.a.createElement(p.a,{position:"fixed",color:"primary",className:t.appBar},m.a.createElement(g.a,{variant:"dense"},m.a.createElement(b.a,{className:t.title,variant:"h5",noWrap:!0},"Zak Dowsett"),m.a.createElement(v.a,{className:t.tabbar,onChange:function(e,t){r(t)},indicatorColor:"secondary",textColor:"secondary",value:i,centered:!0},["Home","About","Skills","History"].map((function(e,a){return m.a.createElement(f.a,{className:t.tab,label:e,key:a,component:y.HashLink,to:"#"+e.toLowerCase().replace(" ","-"),scroll:function(e){return e.scrollIntoView({behavior:"smooth"})}})})))))},E=(a(93),function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{id:this.props.id,className:"jumbotron",style:{background:this.props.background}},this.props.children)}}]),t}(m.a.Component)),S=a(171),x=a(170),j=a(168),A=a(41),O=a.n(A),N=a(140),D=Object(N.a)((function(e){return{root:{padding:e.spacing(3,2),width:"100%",display:"flex",background:"rgb(34,195,145)",paddingTop:"10em",flexDirection:"column"},text:{fontSize:"1.5em",maxWidth:"80em",textAlign:"center",margin:"0 auto",padding:"1em"},aboutContainer:Object(h.a)({display:"flex",flexDirection:"row"},e.breakpoints.down("sm"),{flexDirection:"column"}),avatarContainer:{flexGrow:1,display:"flex",alignItems:"center"},secondContainer:{flexGrow:2,display:"flex",alignItems:"middle"},avatar:{width:"15em",height:"15em",margin:"0 auto",animation:"$pulse 2s infinite"},icon:{margin:"0.50em"},links:{margin:"1em 20%",display:"flex",flexDirection:"row",flexGrow:1,justifyContent:"center",alignItems:"center","& a svg":{fontSize:"5em","&:hover":{transform:"scale(1.5)"}}},waves:{background:"#5000ca",display:"block"},"@keyframes pulse":{"0%":{boxShadow:"0 0 0 0px rgba(0, 0, 0, 0.1)"},"100%":{boxShadow:"0 0 0 15px rgba(0, 0, 0, 0)"}}}}));function I(e){var t=D(),a=e.links.map((function(e,a){return m.a.createElement(x.a,{href:e.link},m.a.createElement(j.a,{htmlColor:e.colour,className:t.icon},O()(e.icon)))}));return m.a.createElement("div",{id:"about",style:{position:"relative"}},m.a.createElement("div",{className:t.root},m.a.createElement("div",{className:t.aboutContainer},m.a.createElement("div",{className:t.avatarContainer},e.image?m.a.createElement(S.a,{src:e.image,alt:"Zak Dowsett",className:t.avatar}):m.a.createElement(S.a,{className:t.avatar},"ZD")),m.a.createElement("div",{className:t.secondContainer},m.a.createElement(b.a,{className:t.text,variant:"body1",color:"primary"},e.children))),m.a.createElement("div",{className:t.links},a)),m.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",className:t.waves},m.a.createElement("path",{fill:"rgb(34,195,145)","fill-opacity":"1",d:"M0,96L26.7,122.7C53.3,149,107,203,160,192C213.3,181,267,107,320,85.3C373.3,64,427,96,480,138.7C533.3,181,587,235,640,261.3C693.3,288,747,288,800,256C853.3,224,907,160,960,154.7C1013.3,149,1067,203,1120,213.3C1173.3,224,1227,192,1280,197.3C1333.3,203,1387,245,1413,266.7L1440,288L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"}),"]"))}var L=a(72),T=a.n(L),M={particles:{number:{value:90,density:{enable:!0,value_area:1e3}},color:{value:"#ffffff"},shape:{type:"polygon",stroke:{width:0,color:"#000000"},polygon:{nb_sides:4}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:2,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0};var P=function(e){var t;return m.a.createElement(E,{id:"home",background:"linear-gradient(347deg, rgba(34,195,145,1) 0%, rgba(156,45,253,1) 100%)"},m.a.createElement(T.a,{params:null!==(t=e.config)&&void 0!==t?t:M,style:{position:"absolute",height:"100%",width:"100%",top:0,left:0}}),m.a.createElement("div",{style:{zIndex:1}},e.children))},B=a(76),W=a(182),H=a(172),F=a(73),z=a.n(F),J=Object(B.a)({palette:{primary:{main:"#fafafa"},secondary:z.a}}),V=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return m.a.createElement(W.a,{theme:J},m.a.createElement(H.a,null),this.props.children)}}]),t}(m.a.Component),q=(a(136),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).state={count:0,wordIndex:0,waitCounter:0},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"tick",value:function(){var e=this.state.wordIndex,t=this.state.count,a=this.state.waitCounter,n=this.props.phrases[this.state.wordIndex];a>=(t>n.length&&!(t>n.length+1)?45:t<=n.length?2:0===t?10:0)?(a=0,t++):a++,t>2*n.length+1&&(t=0,++e>=this.props.phrases.length&&(e=0)),this.setState({count:t,wordIndex:e,waitCounter:a})}},{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),50)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var e=this.state.count;e>this.props.phrases[this.state.wordIndex].length+1&&(e=2*this.props.phrases[this.state.wordIndex].length-e);var t=this.props.phrases[this.state.wordIndex].substr(0,e),a=0===e||e>this.props.phrases[this.state.wordIndex].length?"blink":"";return m.a.createElement(m.a.Fragment,null,m.a.createElement("span",null,t),m.a.createElement("span",{id:"cursor",className:a},"|"))}}]),t}(m.a.Component)),G=(a(137),function(e){function t(e){return Object(n.a)(this,t),Object(r.a)(this,Object(o.a)(t).call(this,e))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"drawTimeline",value:function(e){var t=!1;return e.map((function(e,a){return t=!t,m.a.createElement("div",{className:"container "+(t?"left":"right"),key:a},m.a.createElement("div",{className:"content"},m.a.createElement(b.a,{variant:"h3",color:"textSecondary"},e.title),m.a.createElement(b.a,{variant:"h5",color:"textSecondary"},e.date),m.a.createElement("ul",null,e.details.map((function(e,t){return m.a.createElement(b.a,{component:"li",variant:"body1",color:"textSecondary"},e)})))))}))}},{key:"render",value:function(){return m.a.createElement("div",{className:"root"},m.a.createElement("div",{className:"timeline"},this.drawTimeline(this.props.events)))}}]),t}(m.a.Component)),R=a(175),Z=a(176),_=a(180),U=a(174),Q=a(181),Y=a(173),X=a(178),$=a(177),K=Object(w.a)((function(e){return{root:{maxWidth:400,width:"90%",margin:"0.5em",overflow:"revert"},cardGroup:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center"},sensorHolder:{minHeight:"1em",minWidth:"1em"},title:{fontSize:"1em",textDecoration:"none"},icon:{fontSize:"5em"},header:{paddingTop:"1em",width:"100%",height:200,borderTopLeftRadius:4,borderTopRightRadius:4}}}));function ee(e){var t=K();return m.a.createElement(Y.a,{className:t.header,style:{background:'url("'+e.img+'")',backgroundPosition:"center",backgroundSize:"cover"}})}function te(e){var t=m.a.useState(!1),a=Object(u.a)(t,2),n=a[0],i=a[1],r=Object(U.a)();r&&!n&&i(r);var o=K();return e.skills.map((function(e,t){return m.a.createElement(_.a,{in:n,style:{transitionDelay:"250ms"},key:t},m.a.createElement(R.a,{className:o.root},m.a.createElement(ee,{img:e.img}),m.a.createElement(Z.a,null,m.a.createElement(X.a,{textAlign:"center"},m.a.createElement(b.a,{variant:"title",gutterBottom:!0},e.title),m.a.createElement(b.a,{variant:"body1",paragraph:!0},e.main)),m.a.createElement($.a,null),m.a.createElement(Q.a,{value:e.rating,readOnly:!0}))))}))}function ae(e){var t=K();return m.a.createElement("div",null,e.skills.map((function(e){return m.a.createElement(m.a.Fragment,null,m.a.createElement(b.a,{variant:"h2"},e.header),m.a.createElement("div",{className:t.cardGroup},m.a.createElement(te,{skills:e.cards})))})))}var ne=a(77),ie=Object(N.a)((function(e){return{root:Object(h.a)({padding:e.spacing(1),display:"flex",justifyContent:"space-between"},e.breakpoints.down("xs"),{flexDirection:"column","& *":{textAlign:"center"}})}}));function re(e){var t=ie(),a=e.links.map((function(e){return m.a.createElement(x.a,{href:e.link},m.a.createElement(j.a,{htmlColor:"black",className:t.icon},O()(e.icon)))}));return m.a.createElement(ne.a,{className:t.root},m.a.createElement("div",null,a),m.a.createElement(b.a,{variant:"subtitle1"},"\xa9 ",(new Date).getFullYear()," Zak Dowsett, All Rights Reserved"))}var oe=Object(w.a)((function(e){return{svg:{display:"block"},pic:{backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"}}}));function se(e){var t=oe();return m.a.createElement("div",{className:t.pic,style:{backgroundImage:"url("+e.image+")"}},m.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",className:t.svg},m.a.createElement("path",{fill:e.top,"fill-opacity":"1",d:"M0,96L1440,128L1440,0L0,0Z"})),m.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",className:t.svg},m.a.createElement("path",{fill:e.bottom,"fill-opacity":"1",d:"M0,128L1440,288L1440,320L0,320Z"})))}var le=a(46),ce=a(23),de=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return m.a.createElement(le.BrowserRouter,{basename:"/"},m.a.createElement(V,null,m.a.createElement(C,null),m.a.createElement(P,null,m.a.createElement("div",null,m.a.createElement("h1",null,"Zak Dowsett"),m.a.createElement("p",null,m.a.createElement(q,{phrases:ce.cursorTextPhrases})))),m.a.createElement(I,{image:ce.avatar,links:ce.links},ce.intro),m.a.createElement(E,{id:"skills",background:"#5000ca"},m.a.createElement(ae,{skills:ce.skills})),m.a.createElement(se,{top:"#5000ca",bottom:"#03ADC5",image:"./landscape.jpg"}),m.a.createElement("div",{id:"history",style:{background:"#03ADC5"}},m.a.createElement(G,{events:ce.events})),m.a.createElement(re,{links:ce.links})))}}]),t}(d.Component);c.a.render(m.a.createElement(de,null),document.getElementById("root"))},23:function(e){e.exports=JSON.parse('{"intro":"Highly motivated and charismatic Software Developer at Transalis Ltd who has recently graduated with a 1st in (BSc) Computer Science from the University of Portsmouth. I have a huge interest in blockchain technology and all things surrounding user security, privacy and accountability which has led to the management and development of many greenfield projects within the company. I also have great interpersonal and time management skills which are required daily when communicating with clients to set up and test B2B communications.","avatar":"/zak_suit.jpeg","cursorTextPhrases":["Computer Scientist","Software Engineer","Full-Stack Developer","Blockchain Programmer","Cybersecurity Enthusiast"],"skills":[{"header":"Languages","cards":[{"title":"Java","img":"/images/java.png","rating":4,"main":"Java has been used in a wide range of greenfield projects at Transalis, from the REST APIs to the Blockchain application. These programs utilise the OOP principles and verbose logging in order to allow future developers to locatie and fix issues."},{"title":"C#","img":"/images/csharp.png","rating":4,"main":"C# has been used for a number of personal projects as well as the development of software at a number of different companies. Many of these projects involved the use of .NET Framework, LINQ, and more recently; .NET Core"},{"title":"Mongo DB","img":"/images/mongodb.png","rating":3,"main":"An easy to use no-sql DB that has been used for data storage and retrieval. Previously used indexing, sharding and aggregation with this powerful DB. Currently enrolled in Mongo University to use Mongo to its full potential."},{"title":"SQL","img":"/images/pgsql.png","rating":3,"main":"Developed and maintained a wide variety of SQL databases such as MySQL, pgSQL and Microsft SQL server. These have been used for a variety of purposes from identity storage to data warehousing and mining."},{"title":"JavaScript (ES6)","img":"/images/javascript.png","rating":3,"main":"Flexible language used for scripting on client-side browsers for both visual and validation purposes. But has also been used with Node as middleware for authentication and to help integrate with back-end services."},{"title":"Bash","img":"/images/bash.png","rating":3,"main":"As most of the projects that have been worked on end up getting deployed to Linux Servers, bash scripts help to automate and manage processes. Previous examples include automated deployment, file age monitoring and automated FTP between servers."}]},{"header":"Frameworks","cards":[{"title":"React","img":"/images/react.png","rating":2,"main":"React can be used to create interactive UIs using JavaScript. It is being used to develop a complex document browsing interface with a wide variety of features, as well as this portfolio website, using material UI to create a professional looking website."},{"title":".NET Framework","img":"/images/aspnet.png","rating":4,"main":"Created and managed many different .NET projects (both Framework and Core) using the different libraries available, such as ASP.NET MVC and WebPages for online projects such as web stores and online mapping applications, as well as WinForms and Console Applications for GIS applications and interaction with 3rd party APIs."},{"title":"Apache NiFi","img":"/images/apache.png","rating":3,"main":"NiFi is used to help manage and alter the flow of data running through the server using controllers. It is used to help filter and simplify data before being sent off to the blockchain application. Custom controllers have been written using NiFis API for custom logic that wasn\'t provided."},{"title":"Elasticsearch","img":"/images/elasticsearch.png","rating":2,"main":"Elasticsearch has recently been used to provide a fast way of searching through the 10,000+ documents that come through Transalis daily. It allows full-text searching to quickly find relevant documents in the system, and comes with an API that has been built on to provide fast document searching for customers."},{"title":"Linux","img":"/images/linux.png","rating":4,"main":"Mainly used as servers where applications are deployed to, with distributions including CentOS RHEL 7, Ubuntu and Arch. Jobs can involve making sure that servers are kept secure, as well as creating/updating custom services and managing scheduled tasks with cron jobs."},{"title":"Blockchain","img":"/images/blockchain.png","rating":4,"main":"Previously worked with existing frameworks such as Hyperledger and acquired a great understanding to develop a blockchain application from the ground up for Transalis. This application allows for EDI documents to be trusted and verified as they are signed by the creator and made immutable thanks to blockchains design. A REST API has also been added so that both users and employees can interact with the Blockchain without compromising security."}]},{"header":"Soft Skills","cards":[{"title":"Leadership","img":"/images/leadership.png","rating":3,"main":"Started off by attending leadership courses to become an NCO at St. John Ambulance Cadets. Later on became President of the University Airsoft Society to head the society committee and be responsible for 100+ members. Able to keep calm under pressure and guide others, as well as take the lead when no one else will."},{"title":"Time Management","img":"/images/timemanagement.png","rating":3,"main":"Previously managed a number of small and large projects for different clients at the same time which required planning and prioritisation in order to ensure that deadlines were met and clients were kept happy. Experience and critical thinking was used to come up with realistic time scales to prevent disappointed clients."},{"title":"Communication","img":"/images/communication.png","rating":4,"main":"Dealt with clients and third party businesses in order to meet objectives and realise project requirements. Also communicate with colleagues at meetings to ensure that tasks are shared appropriately between the team. Speaking clearly and avoiding jargon has been a must when dealing with less technical clients."},{"title":"Problem Solving","img":"/images/problemsolving.png","rating":4,"main":"Some projects in the past have proven to be anything but straight forward. These problems are usaully fixed individually to avoid taking colleagues away from other important work. This includes from locating the source of the issue and appropriate research to find a solution, to writing a report for others who may require it for future reference."},{"title":"Teamwork","img":"/images/teamwork.png","rating":4,"main":"Larger projects have required working within small teams to help spread workload and meet deadlines. Understanding teammates capabilities is critical to ensure that teammates can complete tasks and provide help where needed to others. Weekly sprint meetings help to plan out the week and identify any shortcomings."}]}],"links":[{"title":"LinkedIn","link":"https://www.linkedin.com/in/zak-dowsett-4a7455131/","colour":"#2867b2","icon":"<path d=\'M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z\' />"},{"title":"GitHub","link":"https://www.github.com/ZakDaMack","colour":"#000","icon":"<path d=\'M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z\' />"},{"title":"Mail Me","link":"mailto:z.dowsett@outlook.com","colour":"#ff5722","icon":"<path d=\'M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z\' />"}],"events":[{"title":"Transalis Ltd.","date":"Jun 2019 to Present - Software Developer","details":["Work with clients to gather requirements for B2B communications and do end to end testing","Use a wide variety of languages depending on requirements, such as Java, C# for applications and bash for server scripting","Developed a permissioned, private blockchain application to store immutable records for businesses, which can be accessed by a number of APIs to interact with","Work both within teams and independently depending on the scope of a given project, using the agile software development life cycle and staying in constant contact with the product owner","Developed REST APIs in the past and worked with API managers such as WSO2, also ensuring that server-side security, authorisation and authentication have been set up correctly"]},{"title":"Portsmouth Uni.","date":"Sep 2015 to May 2019","details":["Achieved an overall 1st in BSc Computer Science","Units included: Database Design, Software Engineering, Computer Architecture and Operating Systems, Web Design, Networking, Discrete Mathematics, Data Structures and Algorithms, Parallel/Distributed Systems","Had a huge interest in Practical Data Analytics and Mining, Security and Cryptography, Theoretical Computer Science during third year","Did an engineering project in final year to research and design a distributed ledger system incorporating fully homomorphic encryption in order to make data secure and verifiable on permission-less blockchain systems","Learnt many skills at university, such as cooperating effectively with team members  so that everyone understands what it is they are doing. Learnt a wide range of languages and frameworks, as well as software engineering principles; from requirements elicitation to post production monitoring and updates"]},{"title":"Pear Technology","date":"Jul 2017 to Aug 2018 - Junior Software Developer","details":["Worked on a wide variety of software for the company, developing two different map editing products; a desktop and online variant. Also constantly created bug fixes and new features for two different online products; Map Shop and Cemetery Searcher","Worked as part of an agile software development team, being involved in all stages of the development cycle, such as requirements elicitation, design, code construction, testing and maintenance throughout the product\u2019s life-cycle","Monitored and maintained a Microsoft IIS server on Amazon AWS EC2,as well as managed and integrated SQL databases","Worked with a wide range of .NET librarieS, such as WinForms, ASP .NET WebForms and MVC","Fortnightly sprint meetings to discuss progress and what to do next with the rest of the dev team and Director and demonstrate the program to non-developers within the company"]},{"title":"Barclay School","date":"Sep 2011 to Aug 2015","details":["3 AS2 levels \u2013 Grade C in Maths, Grade D in both Economics and Business","11 GCSEs grades A \u2013 C including Maths (A) and English Language (C)"]},{"title":"Other","date":"","details":["Society president during 3rd year, responsible for member well-being and committee organisation","First aid volunteer at St. John Ambulance, providng first aid care at events of all sizes","Previously a Cadet NCO at SJA Cadets, helping to look after the unit after attending mltiple leadership courses. Acheived Grand Prior Award; the highest achievement in SJA","Volunteer for Beavers Scout Organisation, helping to organise actvities and ensure the childrens welfare is looked after"]}]}')},83:function(e,t,a){e.exports=a(138)},88:function(e,t,a){},93:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.55f67811.chunk.js.map