(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{17:function(e,t,i){},20:function(e,t,i){"use strict";i.r(t);var o=i(0),n=i(2),r=i.n(n),c=i(8),s=i.n(c),a=(i(17),i(3)),l=i(1),d=r.a.createContext({selectedProject:""}),p=function(e){var t=e.children,i=Object(n.useState)(""),r=Object(a.a)(i,2),c=r[0],s=r[1];return Object(o.jsx)(d.Provider,{value:{selectedProject:c,setProject:function(e){s(e)}},children:t})},h=d,f=l.b.div.withConfig({displayName:"Modal__Container",componentId:"sc-14sig4v-0"})(["position:absolute;display:flex;justify-content:center;align-items:center;height:100%;width:100%;background-color:#0006;color:white;z-index:1000;overflow-y:auto;"]),b=l.b.div.withConfig({displayName:"Modal__Content",componentId:"sc-14sig4v-1"})(["position:relative;max-height:90%;min-height:60%;max-width:1200px;display:flex;flex-direction:column;justify-content:center;align-items:center;overflow-y:auto;background-color:black;color:white;&::-webkit-scrollbar{width:0px;}"]),g=l.b.img.withConfig({displayName:"Modal__Image",componentId:"sc-14sig4v-2"})(["position:absolute;height:100%;width:100%;background-color:black;color:white;object-fit:contain;object-position:top center;"]),m=l.b.div.withConfig({displayName:"Modal__Cover",componentId:"sc-14sig4v-3"})(["position:absolute;top:0;left:0;height:100%;width:100%;background-color:#000c;"]),x=l.b.div.withConfig({displayName:"Modal__TextContainer",componentId:"sc-14sig4v-4"})(["position:relative;box-sizing:border-box;height:100%;width:100%;display:flex;flex-direction:column;justify-content:space-between;align-items:center;padding:5%;text-align:center;font-size:24px;overflow-y:auto;overflow-x:hidden;&::-webkit-scrollbar{width:0px;}"]),j=l.b.div.withConfig({displayName:"Modal__SocialContainer",componentId:"sc-14sig4v-5"})(["position:relative;width:100%;height:fit-content;display:flex;flex-flow:row wrap;justify-content:space-around;box-sizing:border-box;font-size:18px;"]),u=l.b.div.withConfig({displayName:"Modal__Button",componentId:"sc-14sig4v-6"})(["position:relative;height:100%;min-width:200px;padding:20px;display:flex;flex-direction:column;justify-content:center;align-items:center;box-sizing:border-box;background-color:#000;border:solid 1px #111;cursor:pointer;"]),w=function(){var e=Object(n.useContext)(h),t=e.selectedProject,i=e.setProject,r=Object(n.useRef)();return Object(n.useEffect)((function(){var e=function(e){r.current&&!r.current.contains(e.target)&&(console.log(t.name),t.name&&(console.log("ads"),i({})))};return document.body.addEventListener("click",e),function(){document.body.removeEventListener("click",e)}}),[t]),t.name?Object(o.jsx)(f,{children:Object(o.jsxs)(b,{ref:r,children:[Object(o.jsx)(g,{src:t.img}),Object(o.jsx)(m,{}),Object(o.jsxs)(x,{children:[Object(o.jsx)("h1",{children:t.name}),Object(o.jsx)("p",{children:t.description}),Object(o.jsxs)(j,{children:[Object(o.jsx)("a",{href:t.liveUrl,target:"_blank",rel:"noreferrer",children:Object(o.jsx)(u,{children:"Live Demo"})}),Object(o.jsx)("a",{href:t.githubUrl,target:"_blank",rel:"noreferrer",children:Object(o.jsx)(u,{children:"Github"})})]})]})]})}):null},y=l.b.div.withConfig({displayName:"SkillCard__Container",componentId:"poocaf-0"})(["position:relative;width:300px;height:300px;padding:2%;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;justify-content:space-between;margin:2%;background-color:#112;"]),v=l.b.h3.withConfig({displayName:"SkillCard__Title",componentId:"poocaf-1"})(["margin:0;text-align:center;"]),O=l.b.img.withConfig({displayName:"SkillCard__Image",componentId:"poocaf-2"})(["box-sizing:border-box;max-height:80%;max-width:100%;object-fit:cover;"]),_=function(e){var t=e.title,i=e.img;return Object(o.jsxs)(y,{children:[Object(o.jsx)(O,{src:i}),Object(o.jsx)(v,{children:t})]})},C=l.b.div.withConfig({displayName:"SocialButton__Container",componentId:"sc-1xv8ylp-0"})(["position:relative;height:60px;width:60px;background-color:#0a6;&:hover{&:after{transform:scale(1,0);}}&:after{content:'';position:absolute;top:0;bottom:0;left:-1px;right:-1px;transform:scale(1);background-color:#223;transition:0.4s;}"]),k=l.b.img.withConfig({displayName:"SocialButton__Image",componentId:"sc-1xv8ylp-1"})(["position:absolute;top:0;left:0;z-index:2;height:100%;width:100%;"]),I=function(e){var t=e.link,i=e.img;return Object(o.jsx)(C,{children:Object(o.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:Object(o.jsx)(k,{src:i})})})},N=i.p+"static/media/github.c31599c2.png",z=i.p+"static/media/aws.a59d5ca6.png",S=i.p+"static/media/portrait2.067525fb.jpg",P=[{title:"HTML",img:"https://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png"},{title:"CSS",img:"https://cdn.iconscout.com/icon/free/png-512/css-118-569410.png"},{title:"JavaScript",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"},{title:"React",img:"https://cdn.auth0.com/blog/react-js/react.png"},{title:"Redux",img:"https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png"},{title:"React Native",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"},{title:"NodeJS",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png"},{title:"Express JS",img:"https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/full/expressjslogo.png"},{title:"MongoDB",img:"https://emanueleciriachi.net/wp-content/uploads/2019/01/logo-mongodb-png-mongodb-logo-png-400.png"},{title:"GraphQL",img:"https://dwglogo.com/wp-content/uploads/2018/01/GraphQL_logo.png"},{title:"Docker",img:"https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png"},{title:"AWS",img:z}],M=[{link:"https://www.linkedin.com/in/arkai-julian-ariza-millares-a54466202/",img:"https://bestpractice.bmj.com/images/linkedIn_logo_circle.png"},{link:"https://github.com/ArkaiAriza",img:N}],A=l.b.div.withConfig({displayName:"InfoSection__Container",componentId:"sc-1krw695-0"})(["height:100%;display:flex;flex-direction:column;box-sizing:border-box;width:80%;background-color:#112;color:white;overflow-y:auto;&::-webkit-scrollbar{width:0px;}"]),R=l.b.div.withConfig({displayName:"InfoSection__InnerContainer",componentId:"sc-1krw695-1"})(["width:100%;display:flex;flex-direction:column;box-sizing:border-box;padding:7% 10% 15% 10%;"]),T=l.b.div.withConfig({displayName:"InfoSection__Info",componentId:"sc-1krw695-2"})(["width:100%;height:fit-content;display:flex;flex-flow:column nowrap;box-sizing:border-box;font-size:32px;"]),U=l.b.h1.withConfig({displayName:"InfoSection__MainText",componentId:"sc-1krw695-3"})(["margin:0 0 1em 0;box-sizing:border-box;text-align:right;flex:1 0 100%;"]),E=l.b.div.withConfig({displayName:"InfoSection__SecondaryContainer",componentId:"sc-1krw695-4"})(["width:100%;height:fit-content;display:flex;flex-flow:row wrap-reverse;justify-content:space-around;box-sizing:border-box;font-size:32px;"]),B=l.b.h5.withConfig({displayName:"InfoSection__InfoText",componentId:"sc-1krw695-5"})(["position:relative;display:flex;flex-direction:column;margin:0 5px 0 0;text-align:right;flex:0 0 70%;font-weight:300;& p{margin:0 0 30px 0;}"]),D=l.b.img.withConfig({displayName:"InfoSection__Image",componentId:"sc-1krw695-6"})(["box-sizing:border-box;margin:10px 0 50px 0;width:300px;align-self:end;flex:0 0 20%;object-fit:contain;"]),L=l.b.div.withConfig({displayName:"InfoSection__Button",componentId:"sc-1krw695-7"})(["position:relative;display:flex;align-items:center;justify-content:center;align-self:flex-end;height:50px;width:250px;background-color:#0a6;&:hover{&:before{transform:scale(0);}}&:before{content:'';z-index:0;position:absolute;top:0;bottom:0;left:-1px;right:-1px;transform:scale(1);background-color:black;transition:0.4s;}"]),W=l.b.div.withConfig({displayName:"InfoSection__MySkills",componentId:"sc-1krw695-8"})(["width:100%;margin:50px 0 0 0;display:flex;flex-flow:row wrap;justify-content:space-around;box-sizing:border-box;font-size:32px;text-align:right;"]),X=l.b.div.withConfig({displayName:"InfoSection__ContactSection",componentId:"sc-1krw695-9"})(["width:100%;margin:50px 0 0 0;display:flex;flex-flow:column;justify-content:space-around;box-sizing:border-box;font-size:32px;text-align:right;& p{margin:5px;font-weight:300;}"]),F=l.b.div.withConfig({displayName:"InfoSection__SocialContainer",componentId:"sc-1krw695-10"})(["align-self:flex-end;display:flex;flex-flow:row wrap;justify-content:center;margin:50px 0 0 0;box-sizing:border-box;font-size:32px;text-align:right;"]),H=function(e){e.section;return Object(o.jsx)(A,{children:Object(o.jsxs)(R,{children:[Object(o.jsxs)(T,{id:"about-me",children:[Object(o.jsx)(U,{children:"Hello, My Name is Arkai"}),Object(o.jsxs)(E,{children:[Object(o.jsxs)(B,{children:[Object(o.jsx)("p",{style:{fontWeight:"bold",fontStyle:"italic"},children:"Arkai Ariza, 27 years old, born and grew up in Puente Nacional, Colombia. Highly motivated creative engineer and software developer, focused on frontend technologies."}),Object(o.jsx)("p",{children:"I've been developing several engineering projects this lasts years. I've learned to work as part of a team, with effective communication, in order to fulfill the client needs. My experience is mainly based on frontend using the React framework to develop interactive and responsive web applications."}),Object(o.jsx)("p",{children:"I am a fast learner and avid reader. I like to solve problems and face interesting challenges, and I am willing to learn and adapt to different situations."}),Object(o.jsx)("a",{href:"https://drive.google.com/file/d/18yv9xBW0UNBk-DXzeSrF5XOWRJxn9UoW/view?usp=sharing",target:"_blank",rel:"noreferrer",style:{alignSelf:"flex-end"},children:Object(o.jsx)(L,{children:Object(o.jsx)("h6",{style:{margin:0,zIndex:3,position:"absolute"},children:"DOWNLOAD RESUME"})})})]}),Object(o.jsx)(D,{src:S})]})]}),Object(o.jsxs)(W,{id:"my-skills",children:[Object(o.jsx)("h1",{style:{flex:"1 0 100%"},children:"My Skills"}),P.map((function(e){return Object(o.jsx)(_,{title:e.title,img:e.img})}))]}),Object(o.jsxs)(X,{id:"contact",children:[Object(o.jsx)("h1",{style:{flex:"1 0 100%"},children:"Contact Me"}),Object(o.jsx)("p",{style:{fontWeight:"bold",fontStyle:"italic",marginBottom:"20px"},children:"I am available for remote work!"}),Object(o.jsx)("p",{children:"arjarizami@unal.edu.co | +57 3214595135 | Puente Nacional, Colombia"}),Object(o.jsx)(F,{children:M.map((function(e){return Object(o.jsx)(I,{img:e.img,link:e.link})}))})]})]})})},J=l.b.div.withConfig({displayName:"InteractiveArrow__Container",componentId:"hdgezk-0"})(["position:absolute;top:45%;height:100px;width:200px;display:flex;box-sizing:border-box;align-items:center;justify-content:space-between;padding:0 20px;background-color:white;z-index:3;opacity:1;transition:0.3s ease-out 0.1s;"," "," ",""],(function(e){return"right"===e.direction?Object(l.a)(["right:0;border-radius:50px 0 0 50px;transform:translateX(70%);"]):Object(l.a)(["left:0;border-radius:0 50px 50px 0;transform:translateX(-70%);"])}),(function(e){return e.hover===e.direction?Object(l.a)(["transform:translateX(0%);"]):Object(l.a)([""])}),(function(e){return""!==e.section?Object(l.a)(["opacity:0;"]):Object(l.a)([""])})),Y=function(e){var t=e.children,i=e.direction,n=e.hover,r=e.section;return Object(o.jsx)(J,{direction:i,hover:n,section:r,children:t})},G=l.b.div.withConfig({displayName:"MainText__TextGroup",componentId:"sc-1x2zl4u-0"})(["display:flex;flex-direction:column;align-items:center;color:white;transition:1s;",""],(function(e){return"left"===e.section||"right"===e.section?Object(l.a)(["transform:scale(0.5,0.5);transition:0.5s;"]):""})),K=l.b.div.withConfig({displayName:"MainText__Text",componentId:"sc-1x2zl4u-1"})(["display:flex;color:white;"]),Q=l.b.div.withConfig({displayName:"MainText__Divider",componentId:"sc-1x2zl4u-2"})(["height:2px;width:60%;background-color:white;margin:10% 0;"]),q=function(e){var t=e.section,i=e.style;return Object(o.jsxs)(G,{section:t,style:i,children:[Object(o.jsx)(K,{style:{fontSize:"3vw"},section:t,children:"HI, I AM"}),Object(o.jsx)(K,{style:{fontSize:"8vw",fontWeight:"bold"},section:t,children:"ARKAI"}),Object(o.jsx)(K,{style:{fontSize:"8vw",fontWeight:"bold",lineHeight:.7},section:t,children:"ARIZA"}),Object(o.jsx)(Q,{}),Object(o.jsx)(K,{style:{fontSize:"2vw"},children:"WEB DEVELOPER"})]})},V=l.b.div.withConfig({displayName:"Options__TextGroup",componentId:"sj94b5-0"})(["display:flex;flex-direction:column;align-items:center;color:white;transition:0.5s;"]),Z=l.b.div.withConfig({displayName:"Options__Option",componentId:"sj94b5-1"})(["display:flex;color:white;font-size:1.3vw;margin:10% 0;"]),$=l.b.div.withConfig({displayName:"Options__Divider",componentId:"sj94b5-2"})(["height:1px;width:80%;background-color:white;margin:10% 0;"]),ee=function(e){var t=e.style,i=e.options;return Object(o.jsx)(V,{style:t,children:i.map((function(e,t){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(Z,{children:Object(o.jsx)("a",{href:e.href,children:e.label})}),t!==i.length-1,Object(o.jsx)($,{})]})}))})},te=l.b.div.withConfig({displayName:"NameSubsection__Container",componentId:"lhrkfy-0"})(["position:absolute;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:#0a6;transition:1s;",""],(function(e){return"right"===e.section?Object(l.a)(["right:0%;width:40%;transition:0.5s;"]):"left"===e.section?Object(l.a)(["cursor:pointer;left:0%;width:40%;transition:0.5s;"]):""})),ie=l.b.div.withConfig({displayName:"NameSubsection__Button",componentId:"lhrkfy-1"})(["position:absolute;display:flex;align-items:center;justify-content:center;height:80px;width:80px;top:5%;border-radius:50%;background-color:black;cursor:pointer;opacity:0;z-index:0;&:hover{transform:scale(1.1,1.1);transition:0.5s;}transition:1s;",""],(function(e){return""!==e.section?Object(l.a)(["opacity:1;z-index:4;"]):""})),oe=function(e){var t=e.section,i=e.setSection,n=e.baseSection,r=e.icon,c=e.iconClass,s=e.options;return Object(o.jsxs)(te,{section:t,children:[t===n&&Object(o.jsx)(ie,{onClick:function(){return i("")},section:t,children:Object(o.jsx)("i",{className:c,children:r})}),"left"===n?Object(o.jsx)(q,{section:t}):t===n&&Object(o.jsx)(q,{section:t,style:{zIndex:3}}),t===n&&Object(o.jsx)(ee,{options:s,style:{zIndex:3}})]})},ne=[{label:"ABOUT ME",href:"#about-me"},{label:"MY SKILLS",href:"#my-skills"},{label:"CONTACT",href:"#contact"}],re=l.b.div.withConfig({displayName:"Left__Container",componentId:"sc-7qmzf0-0"})(["position:absolute;width:130%;height:100%;right:50%;display:flex;background-color:#0a6;transition:1s;",""],(function(e){return"left"===e.section?Object(l.a)(["transform:translateX(61.5%);transition:transform 0.5s;z-index:5;"]):"right"===e.section?Object(l.a)(["transform:translateX(-61.5%);"]):""})),ce=l.b.div.withConfig({displayName:"Left__NameSection",componentId:"sc-7qmzf0-1"})(["position:relative;width:50%;height:100%;display:flex;cursor:pointer;background-color:#0a6;overflow:hidden;"]),se=function(e){var t=e.section,i=e.setHover,n=e.setSection,r=e.hover;return Object(o.jsxs)(re,{onClick:"left"!==t?function(){return n("left")}:null,onMouseEnter:function(){return i("left")},onMouseLeave:function(){return i("")},section:t,children:[Object(o.jsx)(H,{section:t}),Object(o.jsxs)(ce,{section:t,children:[Object(o.jsxs)(Y,{direction:"left",hover:r,section:t,children:[Object(o.jsx)("div",{children:"ABOUT ME"}),Object(o.jsx)("i",{className:"material-icons md-24",children:"arrow_back"})]}),Object(o.jsx)(oe,{section:t,baseSection:"left",icon:"keyboard_arrow_right",iconClass:"material-icons md-light md-ad",options:ne,setSection:n})]})]})},ae=l.b.div.withConfig({displayName:"ProjectCard__Container",componentId:"sc-17s8xgi-0"})(["position:relative;width:500px;height:300px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;justify-content:space-between;margin:5% 2%;background-color:#0a6;&:hover{& .inner{transform:scale(0.95,0.92);}& .reflect{transform:translateX(-600px) translateY(600px) skew(0deg,40deg);}& .title{opacity:1;}& div{opacity:1;}}cursor:pointer;"]),le=l.b.div.withConfig({displayName:"ProjectCard__InnerContainer",componentId:"sc-17s8xgi-1"})(["position:relative;width:100%;height:100%;box-sizing:border-box;display:flex;flex-direction:column;transition:0.4s;overflow:hidden;"]),de=l.b.h3.withConfig({displayName:"ProjectCard__Title",componentId:"sc-17s8xgi-2"})(["position:absolute;left:10px;bottom:10px;margin:0;opacity:0;transition:0.4s;"]),pe=l.b.img.withConfig({displayName:"ProjectCard__Image",componentId:"sc-17s8xgi-3"})(["box-sizing:border-box;height:100%;width:100%;object-fit:cover;"]),he=l.b.div.withConfig({displayName:"ProjectCard__Cover",componentId:"sc-17s8xgi-4"})(["position:absolute;top:0;bottom:0;left:0;right:0;opacity:0;transition:0.4s;background-color:#0008;&:hover{opacity:1;}"]),fe=l.b.div.withConfig({displayName:"ProjectCard__Reflect",componentId:"sc-17s8xgi-5"})(["position:absolute;top:-250px;bottom:0;left:160px;right:0;height:300px;width:800px;background-color:#ccca;transform:skew(0deg,40deg);transition:0.5s;"]),be=function(e){var t=e.project,i=e.setProject;return Object(o.jsx)(ae,{onClick:function(){return i(t)},children:Object(o.jsxs)(le,{className:"inner",children:[Object(o.jsx)(pe,{src:t.img}),Object(o.jsx)(he,{}),Object(o.jsx)(fe,{className:"reflect"}),Object(o.jsx)(de,{className:"title",children:t.name})]})})},ge=i.p+"static/media/movies.940f83f8.png",me=i.p+"static/media/news.a3e8d857.png",xe=i.p+"static/media/podcasts.351c45f5.png",je=i.p+"static/media/agrotransporte.0d95a56f.png",ue=[{year:"2016-2020",title:"Systems Engineering",university:"Universidad Nacional de Colombia"},{year:"2018-2019",title:"Modern React with Redux",university:"Udemy"},{year:"2020",title:"The Complete React Native + Hooks Course",university:"Universidad Nacional de Colombia"},{year:"2019",title:"Node with React: Fullstack Web Development",university:"Udemy"}],we=[{name:"Movies Demo",description:"In this project we use the API of themoviedb. On this page you will find a list of movies, each movie has information and you can click on it to see even more about it. The main features of this page are the movie grid, the info animations, the info modal, the pagination, the movie search, the genre filter and the menu.",img:ge,liveUrl:"https://movieinfodemo.vercel.app/",githubUrl:"https://github.com/ArkaiAriza/MoviesPortafolio"},{name:"News Demo",description:"In this project we use the GNews API. In this page we find a series of news, each news redirects to its page of origin. The main features of this page are the news layout, the news carousel, the dark/normal mode, the search and advanced news search, the filter by type, the filter by country, and the menu.",img:me,liveUrl:"https://newsdemo.vercel.app/",githubUrl:"https://github.com/ArkaiAriza/NewsPortafolio"},{name:"Podcasts Demo",description:"In this project we use the listennotes API. On this page you will find a variety of podcasts, each with its own series of episodes that can be played. The main features of this page are the podcast grid, the episode list by podcast, the audio player, the infinite scroll, the podcast and episode search, and the genre filter.",img:xe,liveUrl:"https://podcastdemo.macastro9714.vercel.app/",githubUrl:"https://github.com/ArkaiAriza/PodcastPortafolio"},{name:"Agro Transporte",description:"Agrotransporte is a mobile app that seeks to connect agricultors and independent transporters. The app was made with ReactNative, while the backend uses ExpressJS and a MongoDB database. It includes google sing up, stripe payments and basic CRUD operations.",img:je,liveUrl:"https://expo.io/artifacts/594359c3-bfed-4e06-bcd7-a97bb3efd4d2",githubUrl:"https://github.com/ArkaiAriza/AgroTransporte"}],ye=l.b.div.withConfig({displayName:"PortfolioSection__Container",componentId:"sc-152ser5-0"})(["height:100%;display:flex;flex-direction:column;box-sizing:border-box;width:80%;background-color:#112;color:white;overflow-y:auto;&::-webkit-scrollbar{width:0px;}"]),ve=l.b.div.withConfig({displayName:"PortfolioSection__InnerContainer",componentId:"sc-152ser5-1"})(["width:100%;display:flex;flex-direction:column;box-sizing:border-box;padding:7% 10% 15% 10%;"]),Oe=l.b.div.withConfig({displayName:"PortfolioSection__Portfolio",componentId:"sc-152ser5-2"})(["width:100%;display:flex;flex-flow:column nowrap;box-sizing:border-box;font-size:32px;"]),_e=l.b.h1.withConfig({displayName:"PortfolioSection__MainText",componentId:"sc-152ser5-3"})(["margin:0 0 1em 0;box-sizing:border-box;text-align:left;"]),Ce=l.b.div.withConfig({displayName:"PortfolioSection__SecondaryContainer",componentId:"sc-152ser5-4"})(["width:100%;height:fit-content;display:flex;flex-flow:row wrap;justify-content:space-around;box-sizing:border-box;font-size:32px;"]),ke=(l.b.img.withConfig({displayName:"PortfolioSection__Image",componentId:"sc-152ser5-5"})(["box-sizing:border-box;margin:10px 0 50px 0;width:300px;align-self:flex-start;flex:0 0 20%;object-fit:contain;"]),l.b.div.withConfig({displayName:"PortfolioSection__MyResume",componentId:"sc-152ser5-6"})(["width:100%;margin:50px 0 0 0;display:flex;flex-flow:row wrap;justify-content:flex-start;box-sizing:border-box;font-size:32px;text-align:left;"])),Ie=l.b.div.withConfig({displayName:"PortfolioSection__MyEducation",componentId:"sc-152ser5-7"})(["width:100%;margin:0 0 0 5%;display:flex;flex-flow:column;box-sizing:border-box;font-size:32px;text-align:left;"]),Ne=l.b.div.withConfig({displayName:"PortfolioSection__Item",componentId:"sc-152ser5-8"})(["position:relative;height:content-fit;padding:0 70px;border-left:solid 10px #ccc;&:hover{& h3{font-size:50px;}& .bullet{background-color:#0a6;border-color:white;}}"]),ze=l.b.div.withConfig({displayName:"PortfolioSection__BulletPoint",componentId:"sc-152ser5-9"})(["position:absolute;box-sizing:border-box;top -1px;left:-25px;height:40px;width:40px;border:solid 5px #ccc;border-radius:50%;background-color:#223;"]),Se=l.b.h3.withConfig({displayName:"PortfolioSection__Year",componentId:"sc-152ser5-10"})(["margin:0;transition:0.5s;color:#ccc;"]),Pe=l.b.h4.withConfig({displayName:"PortfolioSection__Title",componentId:"sc-152ser5-11"})(["margin:0;font-weight:300;font-size:0.8em;padding:10px 0;color:#ccc;"]),Me=l.b.h6.withConfig({displayName:"PortfolioSection__University",componentId:"sc-152ser5-12"})(["margin:0;font-style:italic;font-size:0.6em;color:#ccc;"]),Ae=l.b.div.withConfig({displayName:"PortfolioSection__Divider",componentId:"sc-152ser5-13"})(["position:relative;height:50px;border-left:solid 10px #ccc;"]),Re=function(e){e.section;var t=Object(n.useContext)(h).setProject;return Object(o.jsx)(ye,{children:Object(o.jsxs)(ve,{children:[Object(o.jsxs)(Oe,{id:"my-portfolio",children:[Object(o.jsx)(_e,{children:"My Portfolio"}),Object(o.jsx)(Ce,{children:we.map((function(e){return Object(o.jsx)(be,{project:e,setProject:function(e){return t(e)}},e.name)}))})]}),Object(o.jsxs)(ke,{id:"my-resume",children:[Object(o.jsx)("h1",{style:{flex:"1 0 100%"},children:"My Resume"}),Object(o.jsxs)(Ie,{children:[Object(o.jsx)("h3",{style:{margin:"0 0 3% -3%"},children:"My Education"}),ue.map((function(e,i){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(Ne,{children:[Object(o.jsx)(ze,{className:"bullet"}),Object(o.jsx)(Se,{children:e.year}),Object(o.jsx)(Pe,{children:e.title}),Object(o.jsx)(Me,{onClick:function(){return t("asdasd")},children:e.university})]}),i!==ue.length-1&&Object(o.jsx)(Ae,{})]})}))]})]})]})})},Te=i.p+"static/media/full2.f4743293.jpg",Ue=[{label:"MY PORTFOLIO",href:"#my-portfolio"},{label:"MY RESUME",href:"#my-resume"}],Ee=l.b.div.withConfig({displayName:"Right__Container",componentId:"sc-19m1jcj-0"})(["position:absolute;left:50%;display:flex;height:100%;width:130%;transition:1s;background-color:#0a6;",""],(function(e){return"right"===e.section?Object(l.a)(["transform:translateX(-61.5%);transition:transform 0.5s;z-index:5;"]):"left"===e.section?Object(l.a)(["transform:translateX(61.5%);"]):""})),Be=l.b.div.withConfig({displayName:"Right__ImageSection",componentId:"sc-19m1jcj-1"})(["position:relative;height:100%;display:flex;width:50%;overflow:hidden;cursor:pointer;"]),De=l.b.div.withConfig({displayName:"Right__Image",componentId:"sc-19m1jcj-2"})(["position:absolute;height:100%;width:100%;background:url(",") no-repeat center top;background-size:cover;"," transition:1s;"],Te,(function(e){return"right"===e.section?Object(l.a)(["filter:blur(10px);"]):""})),Le=l.b.div.withConfig({displayName:"Right__Cover",componentId:"sc-19m1jcj-3"})(["position:absolute;height:100%;width:100%;background-color:#0a6a;opacity:0;z-index:0;"," transition:z-index 0s,opacity 1s;"],(function(e){return"right"===e.section?Object(l.a)(["opacity:1;z-index:2;"]):""})),We=function(e){var t=e.section,i=e.setHover,n=e.setSection,r=e.hover;return Object(o.jsxs)(Ee,{onClick:"right"!==t?function(){return n("right")}:null,onMouseEnter:function(){return i("right")},onMouseLeave:function(){return i("")},section:t,children:[Object(o.jsxs)(Be,{section:t,children:[Object(o.jsxs)(Y,{direction:"right",hover:r,section:t,children:[Object(o.jsx)("i",{className:"material-icons md-24",children:"arrow_forward"}),Object(o.jsx)("div",{children:"PORTFOLIO"})]}),Object(o.jsx)(oe,{section:t,baseSection:"right",icon:"keyboard_arrow_left",iconClass:"material-icons md-light md-ad",options:Ue,setSection:n}),Object(o.jsx)(De,{section:t}),Object(o.jsx)(Le,{section:t})]}),Object(o.jsx)(Re,{section:t})]})},Xe=l.b.div.withConfig({displayName:"Footer__Container",componentId:"sc-1cj7rx7-0"})(["position:absolute;bottom:0;height:fit-content;width:100%;background-color:white;display:flex;flex-flow:row wrap;justify-content:space-around;align-items:center;z-index:3;transform:translateY(100%);"," transition:0.5s;"],(function(e){return e.showFooter?Object(l.a)(["transform:translateY(0%);"]):""})),Fe=l.b.p.withConfig({displayName:"Footer__Text",componentId:"sc-1cj7rx7-1"})(["flex:0 0 30%;min-width:200px;text-align:center;"]),He=l.b.div.withConfig({displayName:"Footer__Arrow",componentId:"sc-1cj7rx7-2"})(["position:absolute;top:-50px;height:50px;width:100px;left:50%;transform:translateX(-50px);border-radius:50px 50px 0 0;display:flex;box-sizing:border-box;align-items:center;justify-content:center;padding:0 20px;background-color:white;z-index:3;opacity:1;cursor:pointer;"]),Je=l.b.div.withConfig({displayName:"Footer__Button",componentId:"sc-1cj7rx7-3"})(["position:relative;height:60px;width:100%;padding:0 30%;background-color:#223;display:flex;justify-content:center;align-items:center;font-size:32px;cursor:pointer;"]),Ye=(l.b.img.withConfig({displayName:"Footer__Image",componentId:"sc-1cj7rx7-4"})(["position:absolute;top:0;left:0;z-index:2;height:100%;width:100%;"]),l.b.div.withConfig({displayName:"Footer__ButtonContainer",componentId:"sc-1cj7rx7-5"})(["display:flex;justify-content:center;flex:0 0 30%;min-width:200px;text-align:center;"])),Ge=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),i=t[0],r=t[1];return Object(o.jsxs)(Xe,{showFooter:i,children:[Object(o.jsx)(He,{onClick:function(){return r(!i)},children:Object(o.jsx)("i",{className:"material-icons md-24",children:i?"arrow_downward":"arrow_upward"})}),Object(o.jsxs)(Fe,{children:["I developed these projects together with my friend"," ",Object(o.jsx)("a",{href:"https://resumewebpage.macastro9714.vercel.app/",target:"_blank",rel:"noreferrer",style:{color:"#0a6",fontWeight:"bold"},children:"Miguel Angel Castro"}),", through pair programming we both got motivated and completed this portfolio of projects."]}),Object(o.jsxs)(Fe,{children:["These pages are based on React, each highlighting different functionalities. We create diagrams in the initial stages of the design of each project"," ",Object(o.jsx)("a",{href:"https://drive.google.com/drive/folders/1jY_yZw6WQ35OKyDBEzSPXxVwzibdgEBC",target:"_blank",rel:"noreferrer",style:{color:"#0a6",fontWeight:"bold"},children:"(you can check them here)"}),". Also,"," ",Object(o.jsx)("a",{href:"https://github.com/ArkaiAriza?tab=repositories",target:"_blank",rel:"noreferrer",style:{color:"#0a6",fontWeight:"bold"},children:"(here)"})," ","you can find the project repositories."]}),Object(o.jsx)(Ye,{children:Object(o.jsx)("a",{href:"https://github.com/ArkaiAriza/Portfolio/tree/master",target:"_blank",rel:"noreferrer",children:Object(o.jsx)(Je,{children:Object(o.jsx)("div",{children:"GitHub"})})})})]})},Ke=l.b.div.withConfig({displayName:"App__Container",componentId:"sc-1jhu4lo-0"})(["position:relative;height:100vh;display:flex;flex-flow:row no-wrap;overflow:hidden;"]),Qe=(l.b.div.withConfig({displayName:"App__NameSection",componentId:"sc-1jhu4lo-1"})(["position:relative;width:50%;height:100%;display:flex;cursor:pointer;background-color:#0a6;overflow:hidden;"]),function(){var e=Object(n.useState)(""),t=Object(a.a)(e,2),i=t[0],r=t[1],c=Object(n.useState)(""),s=Object(a.a)(c,2),l=s[0],d=s[1];return Object(o.jsx)(p,{children:Object(o.jsxs)(Ke,{children:[Object(o.jsx)(w,{}),"}",Object(o.jsx)(se,{section:i,setHover:d,setSection:r,hover:l}),Object(o.jsx)(We,{section:i,setHover:d,setSection:r,hover:l}),Object(o.jsx)(Ge,{})]})})});s.a.render(Object(o.jsx)(Qe,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.db444054.chunk.js.map