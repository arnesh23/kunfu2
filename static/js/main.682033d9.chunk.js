(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports=[{id:1,name:"Crane",image:"http://www.dreamworks.com/kungfupanda/images/uploads/characters/crane_action.png"},{id:2,name:"Kai",image:"http://www.dreamworks.com/kungfupanda/images/uploads/characters/kai_action.png"},{id:3,name:"LadyPanda",image:"http://www.dreamworks.com/kungfupanda/images/uploads/characters/mei_action.png"},{id:4,name:"Mantis",image:"http://www.dreamworks.com/kungfupanda/images/uploads/characters/mantis_action.png"},{id:5,name:"MasterOg",image:"http://www.dreamworks.com/kungfupanda/images/uploads/characters/oogway_action.png"},{id:6,name:"Monkey",image:"http://www.dreamworks.com/kungfupanda/images/uploads/characters/monkey_action.png"},{id:7,name:"MrPing",image:"http://www.dreamworks.com/kungfupanda/images/uploads/characters/mr_ping_action.png"},{id:8,name:"Po",image:"http://www.dreamworks.com/kungfupanda/images/uploads/characters/po_action.png"},{id:9,name:"Rhino",image:"http://www.dreamworks.com/kungfupanda/images/uploads/characters/thundering_rhino_action.png"},{id:10,name:"Shifu",image:"http://www.dreamworks.com/kungfupanda/images/uploads/characters/shifu_action.png"},{id:11,name:"Tigress",image:"http://www.dreamworks.com/kungfupanda/images/uploads/characters/tigress_action.png"},{id:12,name:"Viper",image:"http://www.dreamworks.com/kungfupanda/images/uploads/characters/viper_action.png"}]},11:function(e,a,t){e.exports=t(17)},17:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(4),i=t.n(r),m=t(2),o=t(8),l=t(5),s=t(6),u=t(9),d=t(7),h=t(10);function g(e){var a=e.fluid,t=e.children;return c.a.createElement("div",{className:"container".concat(a?"-fluid":"")},t)}function p(e){var a=e.fluid,t=e.children;return c.a.createElement("div",{className:"row".concat(a?"-fluid":"")},t)}function k(e){var a=e.size,t=e.children;return c.a.createElement("div",{className:a.split(" ").map(function(e){return"col-"+e}).join(" ")},t)}var w=function(e){var a=e.children;return c.a.createElement("div",{style:{height:a.height,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},a)},E=t(1);var f=function(e){return c.a.createElement("div",null,c.a.createElement("a",{href:{}},c.a.createElement("img",{src:E[e.num].image,height:"100px",alt:E[e.num].name,onClick:e.onClick,name:"clickedImage",value:E[e.num].name})," "))},C=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(c)))).random=function(){return Math.floor(12*Math.random())},t.state={score:-1,topScore:0,clickedImage:"",listofImages:[]},t.onClick=function(e){var a;e.preventDefault();var n=e.target,c=n.name,r=n.alt;t.setState((a={},Object(m.a)(a,c,r),Object(m.a)(a,"listofImages",[].concat(Object(o.a)(t.state.listofImages),[r])),a))},t.changeScores=function(){var e=t.Match();t.scores(e)},t.scores=function(e){e?(0===t.state.topScore?t.state.topScore=t.state.score:t.state.score>t.state.topScore&&(t.state.topScore=t.state.score),t.state.score=0,t.state.clickedImage="",t.state.listofImages=[]):t.state.score++},t.Match=function(){for(var e=0;e<t.state.listofImages.length-1;e++)if(t.state.listofImages[e]===t.state.clickedImage)return!0},t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(g,{fluid:!0},this.changeScores(),c.a.createElement(p,null,c.a.createElement(k,{size:"md-4"},c.a.createElement("h3",null," ",c.a.createElement("a",{href:"/"},c.a.createElement("strong",null,"Clicky Game")))),c.a.createElement(k,{size:"md-4"},c.a.createElement("h3",null," ",c.a.createElement("strong",null,"Click an Image to begin! "))),c.a.createElement(k,{size:"md-4"},c.a.createElement("h3",null," ",c.a.createElement("strong",null,"Score: ",this.state.score," Top Score: ",this.state.topScore," ")))),c.a.createElement(p,null,c.a.createElement(k,{size:"md-12"},c.a.createElement(w,{height:"200"},c.a.createElement("h2",null," Clicky Game!"),c.a.createElement("h3",null," Click on an image to earn points, but don't click on any more than once!")))),c.a.createElement(w,{height:"500"},c.a.createElement(p,null,c.a.createElement(k,{size:"md-3"},c.a.createElement(f,{num:this.random(),onClick:this.onClick})),c.a.createElement(k,{size:"md-3"},c.a.createElement(f,{num:this.random(),onClick:this.onClick}," ")),c.a.createElement(k,{size:"md-3"},c.a.createElement(f,{num:this.random(),onClick:this.onClick},"  ")),c.a.createElement(k,{size:"md-3"},c.a.createElement(f,{num:this.random(),onClick:this.onClick},"  "))),c.a.createElement(p,null,c.a.createElement(k,{size:"md-3"},c.a.createElement(f,{num:this.random(),onClick:this.onClick},"  ")),c.a.createElement(k,{size:"md-3"},c.a.createElement(f,{num:this.random(),onClick:this.onClick},"  ")),c.a.createElement(k,{size:"md-3"},c.a.createElement(f,{num:this.random(),onClick:this.onClick},"  ")),c.a.createElement(k,{size:"md-3"},c.a.createElement(f,{num:this.random(),onClick:this.onClick},"   "))),c.a.createElement(p,null,c.a.createElement(k,{size:"md-3"},c.a.createElement(f,{num:this.random(),onClick:this.onClick},"  ")),c.a.createElement(k,{size:"md-3"},c.a.createElement(f,{num:this.random(),onClick:this.onClick},"  ")),c.a.createElement(k,{size:"md-3"},c.a.createElement(f,{num:this.random(),onClick:this.onClick},"  ")),c.a.createElement(k,{size:"md-3"},c.a.createElement(f,{num:this.random(),onClick:this.onClick},"  ")))))}}]),a}(n.Component);var v=function(){return c.a.createElement("div",null,c.a.createElement(C,null))};i.a.render(c.a.createElement(v,null),document.getElementById("root"))}},[[11,2,1]]]);
//# sourceMappingURL=main.682033d9.chunk.js.map