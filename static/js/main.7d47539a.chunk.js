(this.webpackJsonpsixcents=this.webpackJsonpsixcents||[]).push([[0],{114:function(t,e,s){},148:function(t,e,s){},149:function(t,e,s){},169:function(t,e,s){},177:function(t,e,s){"use strict";s.r(e);var n=s(0),i=s.n(n),a=s(47),r=s.n(a),o=(s(148),s(21)),h=s(80),c=s(54),u=s(55),d=s(66),l=s(64),b=s(192),p=s(191),g=s(178),j=(s(149),s(114),s(9)),m=function(t){Object(d.a)(s,t);var e=Object(l.a)(s);function s(){return Object(c.a)(this,s),e.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){var t=this.props.vibrate,e=this.props.currentX,s=this.props.currentY,n=this.props.posx,i=this.props.posy,a=this.props.width,r=this.props.height,o=this.props.id,h=this.props.mouseDown;return t?(n<=e&&e<=n+a&&i<=s&&s<=i+r&&h&&(window.navigator.vibrate(200),console.log("VIBRATED!")),Object(j.jsx)("div",{className:"ActiveCircle",id:o,style:{background:"#000000",borderRadius:"50%",width:150,height:150,margin:20,borderStyle:"solid",borderColor:"black",position:"relative"}})):Object(j.jsx)("div",{className:"InActiveCircle",id:o,style:{background:"#FFFFFF",borderRadius:"50%",width:150,height:150,margin:20,borderStyle:"solid",borderColor:"black",position:"relative"}})}}]),s}(i.a.Component),x=m,O=function(t){Object(d.a)(s,t);var e=Object(l.a)(s);function s(t){var n;Object(c.a)(this,s),(n=e.call(this,t)).handleEvent=function(t){"pointerdown"===t.type?n.setState(Object(o.a)(Object(o.a)({},n.state),{},{mouseDown:!0})):n.setState(Object(o.a)(Object(o.a)({},n.state),{},{mouseDown:!1,currentX:0,currentY:0}))},n.handleDouble=function(t){var e=n.state.strIndex+1;"dblclick"===t.type&&n.setState(Object(o.a)(Object(o.a)({},n.state),{},{strIndex:e,currentChar:n.state.textToRead[e]}))};var i=t.text.toLowerCase();return n.state={strIndex:0,textToRead:i,currentChar:i[0],currentX:0,currentY:0,mouseDown:!0,posx:[0,0,0,0,0,0],posy:[0,0,0,0,0,0],width:0,height:0,a:[!0,!1,!1,!1,!1,!1],b:[!0,!0,!1,!1,!1,!1],c:[!0,!1,!1,!0,!1,!1],d:[!0,!1,!1,!0,!0,!1],e:[!0,!1,!1,!1,!0,!1],f:[!0,!0,!1,!0,!1,!1],g:[!0,!0,!1,!0,!0,!1],h:[!0,!0,!1,!1,!0,!1],i:[!1,!0,!1,!0,!1,!1],j:[!1,!0,!1,!0,!0,!1],k:[!0,!1,!0,!1,!1,!1],l:[!0,!0,!0,!1,!1,!1],m:[!0,!1,!0,!0,!1,!1],n:[!0,!1,!0,!0,!0,!1],o:[!0,!1,!0,!1,!0,!1],p:[!0,!0,!0,!0,!1,!1],q:[!0,!0,!0,!0,!0,!1],r:[!0,!0,!0,!1,!0,!1],s:[!1,!0,!0,!0,!1,!1],t:[!1,!0,!0,!0,!0,!1],u:[!0,!1,!0,!1,!1,!0],v:[!0,!0,!0,!1,!1,!0],w:[!1,!0,!1,!0,!0,!0],x:[!0,!1,!0,!0,!1,!0],y:[!0,!1,!0,!0,!0,!0],z:[!0,!1,!0,!1,!0,!0],"1a":[!1,!1,!0,!0,!0,!0],"1b":[!0,!1,!1,!1,!1,!1],"2a":[!1,!1,!0,!0,!0,!0],"2b":[!0,!0,!1,!1,!1,!1],"3a":[!1,!1,!0,!0,!0,!0],"3b":[!0,!1,!1,!0,!1,!1],"4a":[!1,!1,!0,!0,!0,!0],"4b":[!0,!1,!1,!0,!0,!1],"5a":[!1,!1,!0,!0,!0,!0],"5b":[!0,!1,!1,!1,!0,!1],"6a":[!1,!1,!0,!0,!0,!0],"6b":[!0,!0,!1,!0,!1,!1],"7a":[!1,!1,!0,!0,!0,!0],"7b":[!0,!0,!1,!0,!0,!1],"8a":[!1,!1,!0,!0,!0,!0],"8b":[!0,!0,!1,!1,!0,!1],"9a":[!1,!1,!0,!0,!0,!0],"9b":[!1,!0,!1,!0,!1,!1],"0a":[!1,!1,!0,!0,!0,!0],"0b":[!1,!0,!1,!0,!0,!1],",":[!1,!0,!1,!1,!1,!1],";":[!1,!0,!0,!1,!1,!1],":":[!1,!0,!1,!1,!0,!1],".":[!1,!0,!1,!1,!0,!0],"?":[!1,!0,!0,!1,!1,!0],"!":[!1,!0,!0,!1,!0,!1]," ":[!1,!1,!1,!1,!1,!1],undefined:[!1,!1,!1,!1,!1,!1]},n}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var t=document.getElementById("btn0"),e=t.getBoundingClientRect(),s=e.x,n=e.y,i=t.offsetWidth,a=t.offsetHeight,r=document.getElementById("btn1").getBoundingClientRect(),h=r.x,c=r.y,u=document.getElementById("btn2").getBoundingClientRect(),d=u.x,l=u.y,b=document.getElementById("btn3").getBoundingClientRect(),p=b.x,g=b.y,j=document.getElementById("btn4").getBoundingClientRect(),m=j.x,x=j.y,O=document.getElementById("btn5").getBoundingClientRect(),v=O.x,y=O.y;this.setState(Object(o.a)(Object(o.a)({},this.state),{},{width:i,height:a,posx:[s,h,d,p,m,v],posy:[n,c,l,g,x,y]}))}},{key:"_onMouseMove",value:function(t){this.setState(Object(o.a)(Object(o.a)({},this.state),{},{currentX:t.clientX,currentY:t.clientY}))}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",onPointerDown:this.handleEvent,onPointerUp:this.handleEvent,onDoubleClick:this.handleDouble,onPointerMove:this._onMouseMove.bind(this),children:[Object(j.jsxs)("div",{children:[Object(j.jsx)(x,{id:"btn0",mouseDown:this.state.mouseDown,vibrate:this.state[this.state.currentChar][0],currentX:this.state.currentX,currentY:this.state.currentY,posx:this.state.posx[0],posy:this.state.posy[0],width:this.state.width,height:this.state.height}),Object(j.jsx)(x,{id:"btn1",mouseDown:this.state.mouseDown,vibrate:this.state[this.state.currentChar][1],currentX:this.state.currentX,currentY:this.state.currentY,posx:this.state.posx[1],posy:this.state.posy[1],width:this.state.width,height:this.state.height}),Object(j.jsx)(x,{id:"btn2",mouseDown:this.state.mouseDown,vibrate:this.state[this.state.currentChar][2],currentX:this.state.currentX,currentY:this.state.currentY,posx:this.state.posx[2],posy:this.state.posy[2],width:this.state.width,height:this.state.height})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(x,{id:"btn3",mouseDown:this.state.mouseDown,vibrate:this.state[this.state.currentChar][3],currentX:this.state.currentX,currentY:this.state.currentY,posx:this.state.posx[3],posy:this.state.posy[3],width:this.state.width,height:this.state.height}),Object(j.jsx)(x,{id:"btn4",mouseDown:this.state.mouseDown,vibrate:this.state[this.state.currentChar][4],currentX:this.state.currentX,currentY:this.state.currentY,posx:this.state.posx[4],posy:this.state.posy[4],width:this.state.width,height:this.state.height}),Object(j.jsx)(x,{id:"btn5",mouseDown:this.state.mouseDown,vibrate:this.state[this.state.currentChar][5],currentX:this.state.currentX,currentY:this.state.currentY,posx:this.state.posx[5],posy:this.state.posy[5],width:this.state.width,height:this.state.height})]})]})}}]),s}(i.a.Component),v=s(127),y=s.n(v),w=(s(169),function(t){Object(d.a)(s,t);var e=Object(l.a)(s);function s(){var t;return Object(c.a)(this,s),(t=e.call(this)).handleChange=function(e){t.setState(Object(h.a)({},e.target.id,e.target.value))},t.handleImageChange=function(e){t.setState({image:e.target.files[0]}),console.log(e.target.files[0])},t.handleSubmit=function(e){e.preventDefault(),console.log(t.state);var s=new FormData;s.append("file",t.state.image,t.state.image.name);y.a.post("https://limitless-island-55442.herokuapp.com/https://sixcents-ocr.herokuapp.com/upload",s,{headers:{"content-type":"multipart/form-data"}}).then((function(e){console.log(e.data),t.setState(Object(o.a)(Object(o.a)({},t.state),{},{text:e.data.message,showMainComp:!1}))})).catch((function(t){return console.log(t)}))},t.state={text:"Hello",showMainComp:!0,image:null},t}return Object(u.a)(s,[{key:"render",value:function(){var t=this;return this.state.showMainComp?Object(j.jsxs)("div",{className:"MainInput",children:[Object(j.jsxs)(b.a,{style:{borderRadius:"20px",borderColor:"black",borderStyle:"solid",padding:"5%"},children:[Object(j.jsx)("h1",{children:"Text Input"}),Object(j.jsx)(p.a,{placeholder:"Hello World",value:this.state.text,onChange:function(e){return t.setState({text:e.target.value})}}),Object(j.jsx)(g.a,{onClick:function(){return t.setState({showMainComp:!1})},children:"Submit"})]}),Object(j.jsxs)(b.a,{onSubmit:this.handleSubmit,style:{borderRadius:"20px",borderColor:"black",borderStyle:"solid",padding:"5%"},children:[Object(j.jsx)("h1",{children:"Image Input"}),Object(j.jsx)("p",{children:Object(j.jsx)(p.a,{type:"file",id:"image",accept:"image/png, image/jpeg",onChange:this.handleImageChange,required:!0})}),Object(j.jsx)(p.a,{type:"submit"})]})]}):Object(j.jsx)(O,{text:this.state.text})}}]),s}(i.a.Component)),f=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,194)).then((function(e){var s=e.getCLS,n=e.getFID,i=e.getFCP,a=e.getLCP,r=e.getTTFB;s(t),n(t),i(t),a(t),r(t)}))};s(176);r.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),f()}},[[177,1,2]]]);
//# sourceMappingURL=main.7d47539a.chunk.js.map