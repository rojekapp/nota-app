(this["webpackJsonpnota-app"]=this["webpackJsonpnota-app"]||[]).push([[0],{134:function(e,t,a){},135:function(e,t,a){},143:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),r=a(11),i=a.n(r),s=(a(134),a(62)),l=a(12),o=(a.p,a(135),a(45)),j=a(196),u=a(197),b=a(192),d=a(63),h=a(188),p=a(13),O=a(218),x=a(4),g=a(106),m=a.n(g),f=a(102),v=a.n(f),y=a(103),S=a.n(y),N=a(219),k=a(193),C=a(145),w=a(194),B=a(195),K=a(104),T=a.n(K),P=a(105),q=a.n(P),M=a(51),I=Object(h.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},list:{width:250},fullList:{width:"auto"},toolbar:{minHeight:128,alignItems:"flex-start",paddingTop:e.spacing(1),paddingBottom:e.spacing(3)},title:{flexGrow:1,alignSelf:"flex-end"},search:Object(o.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(p.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(p.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(o.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function R(e){var t=e.page,a=e.handlePage,r=I(),i=Object(c.useState)(!1),s=Object(l.a)(i,2),h=s[0],p=s[1];function g(e){return 1==e.res?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:r.search,children:[Object(n.jsx)("div",{className:r.searchIcon,children:Object(n.jsx)(v.a,{})}),Object(n.jsx)(O.a,{placeholder:"Search\u2026",classes:{root:r.inputRoot,input:r.inputInput},inputProps:{"aria-label":"search"}})]}),Object(n.jsx)(b.a,{"aria-label":"display more actions",edge:"end",color:"inherit",children:Object(n.jsx)(S.a,{})})]}):Object(n.jsx)(n.Fragment,{})}var f,y=function(e,t){return function(e){("keydown"!==e.type||"Tab"!==e.key&&"Shift"!==e.key)&&p(t)}};return Object(n.jsxs)("div",{className:r.root,children:[Object(n.jsx)(j.a,{position:"static",className:"app-bar",children:Object(n.jsxs)(u.a,{className:r.toolbar,children:[Object(n.jsx)(b.a,{edge:"start",className:r.menuButton,color:"inherit","aria-label":"open drawer",onClick:y(0,!0),children:Object(n.jsx)(m.a,{})}),Object(n.jsx)(d.a,{className:r.title+" judul-range",variant:"h5",noWrap:!0,children:"Nota App"}),Object(n.jsx)(g,{res:t})]})}),Object(n.jsx)(N.a,{anchor:"left",open:h,onClose:y(0,!1),children:(f="left",Object(n.jsx)("div",{className:Object(x.a)(r.list,Object(o.a)({},r.fullList,"top"===f||"bottom"===f)),role:"presentation",onClick:y(0,!1),onKeyDown:y(0,!1),children:Object(n.jsxs)(k.a,{children:[Object(n.jsx)(M.b,{to:"/",style:{textDecoration:"none",color:"black"},children:Object(n.jsxs)(C.a,{button:!0,onClick:function(){return a(!1)},children:[Object(n.jsx)(w.a,{children:Object(n.jsx)(T.a,{})}),Object(n.jsx)(B.a,{primary:"Add Nota"})]})}),Object(n.jsx)(M.b,{to:"/show",style:{textDecoration:"none",color:"black"},children:Object(n.jsxs)(C.a,{button:!0,onClick:function(){return a(!0)},children:[Object(n.jsx)(w.a,{children:Object(n.jsx)(q.a,{})}),Object(n.jsx)(B.a,{primary:"Show Nota"})]})})]})}))})]})}var L=a(214),W=a(46),F=a.n(W),D=a(61),H=a(36),z=a(5),E=a(205),J=a(75),A=a(199),V=a(83),G=a.n(V),U=a(84),Y=a.n(U),Q=a(206),X=a(58),Z=a(200),$=a(216),_=a(207),ee=a(73),te=a.n(ee),ae=a(203),ne=a(202),ce=a(107),re=a.n(ce);var ie=function(e){var t=e.ser,a=e.handleChange,c=e.currencies,r=e.insertChange,i=e.changeNum,s=e.deletes;function l(e){var t=e.res;return 1!=t.index?Object(n.jsx)(b.a,{onClick:function(e){return s(t)},color:"secondary",style:{padding:"0px"},"aria-label":"add an alarm",children:Object(n.jsx)(re.a,{})}):Object(n.jsx)(te.a,{})}return Object(n.jsx)(n.Fragment,{children:t.map((function(e){return Object(n.jsxs)(A.a,{container:!0,spacing:2,style:{marginBottom:"10px"},children:[Object(n.jsx)(A.a,{item:!0,children:Object(n.jsx)(l,{res:e})}),Object(n.jsx)(A.a,{item:!0,children:Object(n.jsx)($.a,{id:"standard-select-currency",select:!0,label:"Kode Barang",value:e.value,onChange:function(t){return a(e.index,t.target.value)},style:{minWidth:120},required:!0,children:c.map((function(e){return Object(n.jsx)(ne.a,{value:e.value,children:e.label},e.value)}))})}),Object(n.jsx)(A.a,{item:!0,children:Object(n.jsx)($.a,{InputLabelProps:{shrink:!0},required:!0,onChange:function(t){return r(e.index,t.target.value)},id:"standard-required",size:"small",label:"Harga Satuan",value:e.input,variant:"filled",InputProps:{startAdornment:Object(n.jsx)(ae.a,{position:"start",children:Object(n.jsx)("h4",{children:"Rp"})})},style:{maxWidth:"200px"}})}),Object(n.jsx)(A.a,{item:!0,children:Object(n.jsx)($.a,{InputLabelProps:{shrink:!0},required:!0,id:"standard-required",onChange:function(t){return i(e.index,t.target.value)},type:"number",size:"small",label:"Unit",value:e.quantity,variant:"filled",style:{maxWidth:"100px"}})})]})}))})},se=a(109),le=a.n(se),oe=a(21),je=a(215),ue=a(217),be=a(204),de=a(108),he=Object(h.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},buttonSuccess:{backgroundColor:J.a[500],"&:hover":{backgroundColor:J.a[700]}},buttonProgress:{color:J.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},title:{fontSize:14},pos:{marginBottom:12}}),pe=[{value:"Americano",label:"AMC"},{value:"Kopi Susu",label:"KPSS"},{value:"Kopi Susu Bendol",label:"KSB"},{value:"Kopi Susu Marley",label:"KSM"},{value:"Kopi Matcha",label:"KM"},{value:"Kopi Susu Orang Tua",label:"KSQT"},{value:"Kopi Susu Balak Enam",label:"KSBE"},{value:"Robusta Tubruk",label:"RT"},{value:"Daun Kopi Kawa",label:"DKK"},{value:"Tubruk",label:"TBRK"},{value:"V60",label:"V60"},{value:"Japanese",label:"JPNS"},{value:"Vietnam",label:"VNM"},{value:"Teh Mint",label:"TM"},{value:"Coklat",label:"CKLT"},{value:"Coklat Susu",label:"CS"},{value:"Coklat Mint",label:"CM"},{value:"Matcha",label:"MTC"},{value:"Indomie",label:"INDM"},{value:"Kentang",label:"KTG"},{value:"Roti Panggang",label:"RP"}];var Oe=Object(z.a)((function(e){return{root:{color:"white",backgroundColor:"#ca9b52","&:hover":{backgroundColor:"#deb473"}}}}))(be.a);function xe(e){var t=e.login,a=he(),r=(a.bullet,Object(c.useState)(new Date)),i=Object(l.a)(r,2),s=i[0],j=i[1],u=Object(c.useState)(""),b=Object(l.a)(u,2),d=b[0],h=b[1],p=Object(c.useState)(""),O=Object(l.a)(p,2),g=O[0],m=O[1],f=Object(c.useState)(0),v=Object(l.a)(f,2),y=v[0],S=v[1],N=Object(c.useState)(0),k=Object(l.a)(N,2),C=k[0],w=k[1],B=Object(c.useState)(!1),K=Object(l.a)(B,2),T=K[0],P=K[1],q=Object(c.useState)(!1),M=Object(l.a)(q,2),I=M[0],R=M[1],L=Object(c.useRef)(),W=Object(x.a)(Object(o.a)({},a.buttonSuccess,I)),z=Object(c.useState)(!1),J=Object(l.a)(z,2),V=J[0],U=J[1],ee=Object(c.useState)("Kopi Susu"),ae=Object(l.a)(ee,2),ne=ae[0],ce=ae[1];function re(){for(var e=ge,t=0,a=0;a<e.length;a++){t+=e[a].quantity*e[a].satuan}var n=function(e){for(var t="",a=e.toString().split("").reverse().join(""),n=0;n<a.length;n++)n%3==0&&(t+=a.substr(n,3)+".");return t.split("",t.length-1).reverse().join("")}(Number(t));w(n),S(Number(t))}var se=Object(c.useState)([]),xe=Object(l.a)(se,2),ge=xe[0],me=xe[1],fe=Object(c.useState)(1),ve=Object(l.a)(fe,2),ye=ve[0],Se=ve[1],Ne=function(){var e=Object(D.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T||(R(!1),P(!0),L.current=window.setTimeout(Object(D.a)(F.a.mark((function e(){var a,n,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/add",{method:"post",body:JSON.stringify({nota:d,pesanan:g,tanggal:t,total:Number(y.toString().replace(/[^0-9,-]+/g,"")),barang:ge}),headers:{"Content-Type":"application/json"}});case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,console.log(n),R(!0),P(!1),h(""),m(""),ce("Kopi Susu"),S(0),w(0),(c=[]).push({index:1,value:"Kopi Susu",satuan:0,quantity:0,input:0}),me([].concat(c)),U(!0);case 19:case"end":return e.stop()}}),e)}))),2e3));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){var e={index:ye,value:ne,satuan:0,quantity:0,input:0},t=ge;t.push(e),me(Object(H.a)(t))}),[t]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(E.a,{className:"card-form ",children:Object(n.jsxs)(Q.a,{className:"form-body",children:[Object(n.jsx)("h2",{style:{margin:"0px",marginBottom:"20px"},children:"Input Form"}),Object(n.jsxs)(Z.a,{children:[Object(n.jsxs)(A.a,{container:!0,spacing:2,style:{marginBottom:"10px"},children:[Object(n.jsx)(A.a,{item:!0,children:Object(n.jsx)(G.a,{})}),Object(n.jsx)(A.a,{item:!0,children:Object(n.jsx)("h4",{style:{margin:"0px",paddingTop:"10px",fontWeight:"normal"},children:"Tanggal : "})}),Object(n.jsx)(A.a,{item:!0,children:Object(n.jsx)(oe.a,{utils:X.a,children:Object(n.jsx)(je.a,{style:{margin:"0px"},required:!0,disableToolbar:!0,variant:"inline",label:"Required",format:"MM/dd/yyyy",margin:"normal",id:"date-picker-inline",fullWidth:!0,value:s,onChange:function(e){j(e)},KeyboardButtonProps:{"aria-label":"change date"},size:"small"})})})]}),Object(n.jsxs)(A.a,{container:!0,spacing:2,style:{marginBottom:"10px"},children:[Object(n.jsx)(A.a,{item:!0,children:Object(n.jsx)(te.a,{})}),Object(n.jsx)(A.a,{item:!0,children:Object(n.jsx)("h4",{style:{margin:"0px",paddingTop:"10px",fontWeight:"normal"},children:"No Nota : "})}),Object(n.jsx)(A.a,{item:!0,children:Object(n.jsx)($.a,{InputLabelProps:{shrink:!0},required:!0,id:"standard-required",value:d,onChange:function(e){h(e.target.value)},label:"Required",defaultValue:"",size:"small",variant:"filled",fullWidth:!0})})]}),Object(n.jsxs)(A.a,{container:!0,spacing:2,style:{marginBottom:"10px"},children:[Object(n.jsx)(A.a,{item:!0,children:Object(n.jsx)(Y.a,{})}),Object(n.jsx)(A.a,{item:!0,children:Object(n.jsx)("h4",{style:{margin:"0px",paddingTop:"10px",fontWeight:"normal"},children:"No Pesanan : "})}),Object(n.jsx)(A.a,{item:!0,children:Object(n.jsx)($.a,{value:g,onChange:function(e){m(e.target.value)},required:!0,size:"small",id:"standard-required",label:"Required",defaultValue:"",type:"number",InputLabelProps:{shrink:!0},variant:"filled",fullWidth:!0})})]}),Object(n.jsxs)(A.a,{container:!0,spacing:2,style:{marginBottom:"20px",marginTop:"10px"},children:[Object(n.jsx)("h3",{style:{margin:"0px",marginLeft:"20px",marginBottom:"10px"},children:"Barang : "}),Object(n.jsx)(be.a,{style:{border:"2px solid #ca9b52",color:"#ca9b52",fontWeight:"bold",marginLeft:"10px"},variant:"outlined",color:"primary",onClick:function(e){var t=ge,a=ye+1,n={index:ye,value:ne,satuan:0,quantity:0,input:0};Se(a),n.index=a,t.push(n),me(Object(H.a)(t))},children:"Add Barang"})]}),Object(n.jsx)(ie,{deletes:function(e){var t=ge;t=Object(de.without)(t,e),me(Object(H.a)(t))},changeNum:function(e,t){var a=ge;a[e-1].quantity=Number(t),me(Object(H.a)(a)),re()},ser:ge,handleChange:function(e,t){var a=ge;a[e-1].value=t,me(Object(H.a)(a))},currencies:pe,insertChange:function(e,t){var a=function(e,t){var a=e.replace(/[^,\d]/g,"").toString().split(","),n=a[0].length%3,c=a[0].substr(0,n),r=a[0].substr(n).match(/\d{3}/gi);return r&&(c+=(n?".":"")+r.join(".")),c=void 0!=a[1]?c+","+a[1]:c,void 0==t?c:c||""}(t,""),n=ge;n[e-1].satuan=Number(a.replace(/[^0-9,-]+/g,"")),n[e-1].input=a,me(Object(H.a)(n)),re()}}),Object(n.jsx)("hr",{}),Object(n.jsxs)("h3",{style:{margin:"0px",marginLeft:"20px",marginBottom:"10px",fontWeight:"normal"},children:["Total Harga : ",Object(n.jsxs)("font",{style:{fontWeight:"bold"},children:["Rp",C]})]}),Object(n.jsx)(Oe,{variant:"contained",color:"primary",className:W,endIcon:Object(n.jsx)(le.a,{}),disabled:T,onClick:function(){var e=s.getMonth()+1,t=s.getDate(),a=s.getFullYear();Ne(t+"/"+e+"/"+a),console.log({})},style:{margin:"10px"},children:"Send"}),T&&Object(n.jsx)(_.a,{size:24,className:a.buttonProgress})]})]})}),Object(n.jsx)(ue.a,{open:V,onClose:function(){U(!1)},message:"Berhasil ditambahkan"},"bottomcenter")]})}var ge=a(16),me=function(){return Object(n.jsx)("h1",{children:"Not Found Page"})},fe=a(209),ve=a(213),ye=a(212),Se=a(208),Ne=a(210),ke=a(211),Ce=a(87),we=Object(h.a)({table:{minWidth:650}});function Be(e,t,a,n,c){return{name:e,calories:t,fat:a,carbs:n,protein:c}}Be("Frozen yoghurt",159,6,24,4),Be("Ice cream sandwich",237,9,37,4.3),Be("Eclair",262,16,24,6),Be("Cupcake",305,3.7,67,4.3),Be("Gingerbread",356,16,49,3.9);function Ke(e){var t=e.toString().split("").reverse().join("").match(/\d{1,3}/g);return t="Rp"+t.join(".").split("").reverse().join("")}function Te(e){var t=e.login,a=we(),r=Object(c.useState)([]),i=Object(l.a)(r,2),s=(i[0],i[1]),o=Object(c.useState)(0),j=Object(l.a)(o,2),u=(j[0],j[1]),b=Object(c.useState)(!0),d=Object(l.a)(b,2),h=(d[0],d[1],Object(c.useState)(!1)),p=Object(l.a)(h,2),O=(p[0],p[1],Object(c.useState)("petName")),x=Object(l.a)(O,2),g=(x[0],x[1],Object(c.useState)("asc")),m=Object(l.a)(g,2),f=(m[0],m[1],Object(c.useState)("")),v=Object(l.a)(f,2),y=(v[0],v[1],Object(c.useState)([])),S=Object(l.a)(y,2),N=S[0],k=S[1],C=Object(c.useState)(new Date),w=Object(l.a)(C,2),B=w[0],K=w[1];return Object(c.useEffect)((function(){function e(){return(e=Object(D.a)(F.a.mark((function e(){var t,a,n,c,r,i;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=B.getMonth()+1,a=B.getDate(),n=B.getFullYear(),c=a+"/"+t+"/"+n,e.next=6,fetch("/api/nota",{method:"post",body:JSON.stringify({tanggal:c}),headers:{"Content-Type":"application/json"}});case 6:return r=e.sent,e.next=9,r.json();case 9:i=e.sent,s(Object(H.a)(i.map((function(e,t){return e.id=t,u(t),e})))),k(Object(H.a)(i.map((function(e,t){return e.id=t,u(t),e})))),console.log(i);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("center",{children:[Object(n.jsx)(E.a,{className:"card-form ",children:Object(n.jsx)(oe.a,{utils:X.a,children:Object(n.jsx)(je.a,{margin:"normal",id:"date-picker-dialog",label:"Date picker dialog",format:"MM/dd/yyyy",value:B,onChange:function(e){K(e)},KeyboardButtonProps:{"aria-label":"change date"}})})}),Object(n.jsx)(Se.a,{component:Ce.a,style:{marginBottom:"20px"},children:Object(n.jsxs)(fe.a,{className:a.table,"aria-label":"simple table",children:[Object(n.jsx)(Ne.a,{children:Object(n.jsxs)(ke.a,{children:[Object(n.jsx)(ye.a,{children:Object(n.jsx)("b",{children:"No. Nota"})}),Object(n.jsx)(ye.a,{children:Object(n.jsx)("b",{children:"No. Pesanan"})}),Object(n.jsx)(ye.a,{style:{minWidth:"80px"},children:Object(n.jsx)("b",{children:"Nama Barang"})}),Object(n.jsx)(ye.a,{children:Object(n.jsx)("b",{children:"Harga Satuan"})}),Object(n.jsx)(ye.a,{children:Object(n.jsx)("b",{children:"Jumlah Barang"})}),Object(n.jsx)(ye.a,{children:Object(n.jsx)("b",{children:"Jumlah Harga"})}),Object(n.jsx)(ye.a,{children:Object(n.jsx)("b",{children:"Saldo"})})]})}),Object(n.jsx)(ve.a,{children:N.map((function(e){return Object(n.jsxs)(ke.a,{children:[Object(n.jsx)(ye.a,{component:"th",scope:"row",children:e.nota}),Object(n.jsx)(ye.a,{children:e.pesanan}),Object(n.jsx)(ye.a,{children:e.barang.map((function(e){return Object(n.jsx)("p",{style:{margin:"0px",lineHeight:"30px"},children:e.value})}))}),Object(n.jsx)(ye.a,{children:e.barang.map((function(e){return Object(n.jsx)("p",{style:{margin:"0px",lineHeight:"30px"},children:Ke(Number(e.satuan))})}))}),Object(n.jsx)(ye.a,{children:e.barang.map((function(e){return Object(n.jsx)("p",{style:{margin:"0px",lineHeight:"30px"},children:e.quantity})}))}),Object(n.jsx)(ye.a,{children:e.barang.map((function(e){return Object(n.jsx)("p",{style:{margin:"0px",lineHeight:"30px"},children:Ke(Number(e.satuan)*Number(e.quantity))})}))}),Object(n.jsx)(ye.a,{children:Ke(Number(e.total))})]},e.id)}))})]})})]})})}var Pe=function(){var e=Object(ge.f)(),t=Object(c.useState)(!1),a=Object(l.a)(t,2),r=a[0],i=a[1],o=Object(c.useState)("sm"),j=Object(l.a)(o,2),u=j[0],b=j[1];return Object(c.useEffect)((function(){var t=e.pathname;new URLSearchParams(e.search);console.log(t),"/"==t?(b("sm"),i(!1)):(b("md"),i(!0))}),[e]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(R,{page:r,handlePage:function(e){i(e)}}),Object(n.jsx)(L.a,{maxWidth:u,children:Object(n.jsxs)(ge.c,{children:[Object(n.jsx)(ge.a,{path:"/",render:function(e){return Object(n.jsx)(xe,Object(s.a)(Object(s.a)({},e),{},{login:!1}))},exact:!0}),Object(n.jsx)(ge.a,{path:"/show",render:function(e){return Object(n.jsx)(Te,Object(s.a)(Object(s.a)({},e),{},{login:!1}))}}),Object(n.jsx)(ge.a,{component:me})]})})]})},qe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,221)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(M.a,{children:Object(n.jsx)(Pe,{})})}),document.getElementById("root")),qe()}},[[143,1,2]]]);
//# sourceMappingURL=main.514bd15d.chunk.js.map