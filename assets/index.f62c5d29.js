var e=Object.defineProperty,t=(t,a,l)=>(((t,a,l)=>{a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l})(t,"symbol"!=typeof a?a+"":a,l),l);import{R as a,L as l,r as n,B as r,S as c,a as o,b as m}from"./vendor.d300272d.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const s=()=>a.createElement("div",null,a.createElement("div",{className:"header-container"},a.createElement("h3",{className:"title-name"},"DELIA DANUT"),a.createElement("nav",null,a.createElement(l,{to:"/Home"},a.createElement("button",{className:"button btn-home"},"HOME")),a.createElement(l,{to:"/CV"},a.createElement("button",{className:"button btn-cv"},"My CV")),a.createElement(l,{to:"/ShowOffPage"},a.createElement("button",{className:"button btn-show"},"Show Off Page")),a.createElement(l,{to:"/Contact"},a.createElement("button",{className:"button contact"},"Contact")))),a.createElement("hr",{className:"hr-header"}));const i=()=>a.createElement("div",{className:"description"},a.createElement("h1",null,"DELIA DANUT"),a.createElement("p",null,"I’m thrilled to invite you to explore my work, skills and professional experience, and get to know a bit more about me. A born go-getter. I give 100% to every new project I take on. It’s my firm belief that a good challenge is a great way to develop and improve, which is why I make a point of seeking out challenges in the professional realm as well as in my personal life. Take a moment to look around, and contact me directly to learn more."));const u=()=>a.createElement("div",{className:"home"},a.createElement(i,null));const d=()=>a.createElement("div",{className:"education-grid"},a.createElement("div",{className:"education1"},a.createElement("h5",null,"April 2021 - September 2021"),a.createElement("h4",null,"FRONT-END REACT-JS"),a.createElement("h4",null,"The Informal School of IT, Cluj-Napoca, Romania ")),a.createElement("div",{className:"education2"},a.createElement("h5",null,"October 2016 - July 2019"),a.createElement("h4",null,"INFORMATION TECHNOLOGY - BUSINESS INFORMATION"),a.createElement("h4",null,"Faculty of Economics and Business Administration, Cluj-Napoca, Romania")));const p=()=>a.createElement("div",{className:"experience-grid"},a.createElement("div",{className:"experience1"},a.createElement("h5",null,"April 2021 - September 2021"),a.createElement("h4",null,"FRONT-END REACT-JS"),a.createElement("h4",null,"The Informal School of IT, Cluj-Napoca, Romania ")),a.createElement("div",{className:"experience2"},a.createElement("h5",null,"July 2018 - October 2018"),a.createElement("h4",null,"TECHNICAL ANALYST"),a.createElement("h4",null,"Steelcase, Cluj-Napoca, Romania")));const E=()=>a.createElement("div",{className:"CV"},a.createElement("div",{className:"education"},a.createElement("h1",null,"EDUCATION"),a.createElement("h4",null,"My Schooling"),a.createElement(d,null)),a.createElement("div",{className:"experience"},a.createElement("h1",null,"EXPERIENCE"),a.createElement("h4",null,"Past Roles"),a.createElement(p,null)));const h=()=>a.createElement("div",{className:"project-all"},a.createElement("div",{className:"wallpaper-all-project-description"},a.createElement("div",{className:"project-description"},a.createElement("h1",null,"PROJECT DONE"),a.createElement("p",null,"Though I have learned a lot from being in the professional world, some of my skills have been built from research, observation and common sense. I know that to be truly successful in my career, I need to be able to work with people, find innovative solutions to professional problems and make contributions that really matter. I would be thrilled for any opportunity to keep building on my skill set. Let’s discuss what I can offer you. Get in touch today."))),a.createElement("div",{className:"container-grid"},a.createElement("div",{className:"shop-app"},a.createElement("div",{className:"app-heading"},a.createElement("h3",null,"MY SHOP APP"),a.createElement("p",null,"Single page App. React-JS, HTML, CSS."),a.createElement("p",null,"This project is about a marketing website where people can buy different products from accesories to clothes.")),a.createElement("div",{className:"project-image"},a.createElement("img",{src:"src/images/shop.png",width:"250",height:"250"}))),a.createElement("div",{className:"toDo-app"},a.createElement("div",{className:"app-heading"},a.createElement("h3",null,"TO DO APP"),a.createElement("p",null,"Single page App. React-JS, HTML, CSS."),a.createElement("p",null,"The purpose of this project was to practice CRUD (create, read, update, delete) using fetch data from server.")),a.createElement("div",{className:"project-image"},a.createElement("img",{src:"src/images/todo.webp",width:"250",height:"200"})))));const f=()=>a.createElement("div",{className:"showOffPage"},a.createElement(h,null));class N extends n.exports.Component{constructor(){super(...arguments),t(this,"mapRef",n.exports.createRef()),t(this,"state",{map:null})}componentDidMount(){const e=window.H,t=new e.service.Platform({apikey:"{AIzaSyB15zrfSChnINAAapvRoWMyd2w-nkWL80o}"}).createDefaultLayers(),a=new e.Map(this.mapRef.current,t.vector.normal.map,{center:{lat:50,lng:5},zoom:4,pixelRatio:window.devicePixelRatio||1});new e.mapevents.Behavior(new e.mapevents.MapEvents(a)),e.ui.UI.createDefault(a,t),this.setState({map:a})}componentWillUnmount(){this.state.map.dispose()}render(){return n.exports.createElement("div",{ref:this.mapRef,style:{height:"400px",width:"auto"}})}}const g=()=>a.createElement("div",{className:"page-contact-grid"},a.createElement("div",{className:"contact-grid"},a.createElement("div",{className:"heading-contact"},a.createElement("h1",null,"CONTACT"),a.createElement("p",null," Republicii nr.69, Cluj-Napoca, RO"),a.createElement("p",null," delia_humeniuc@yahoo.com"),a.createElement("p",null," 0747847207"),a.createElement("a",{href:"https://www.linkedin.com/in/delia-maria-dănuț-humeniuc-764044135"},a.createElement("img",{className:"linkdln-icon",src:"src/images/lnkdln.png"}))),a.createElement("div",null,a.createElement("img",{src:"src/images/me.jpg",width:"240",height:"280"}))),a.createElement(N,null));const v=()=>a.createElement("div",null,a.createElement("hr",{className:"hr-footer"}),a.createElement("div",{className:"footer"},a.createElement("h5",null,"@2021 by Delia Danut. Proudly created with React. ")));function b(){return a.createElement(r,null,a.createElement("div",{className:"App"},a.createElement(s,null),a.createElement(c,null,a.createElement(o,{path:"/ShowOffPage"},a.createElement(f,null)),a.createElement(o,{path:"/CV"},a.createElement(E,null)),a.createElement(o,{path:"/Contact"},a.createElement(g,null)),a.createElement(o,{path:"/"},a.createElement(u,null))),a.createElement(v,null)))}m.render(a.createElement(a.StrictMode,null,a.createElement(b,null)),document.getElementById("root"));
