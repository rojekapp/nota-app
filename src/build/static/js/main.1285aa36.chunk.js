(this["webpackJsonpnota-app"]=this["webpackJsonpnota-app"]||[]).push([[0],{143:function(e,t,a){},144:function(e,t,a){},152:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(0),r=a(11),i=a.n(r),l=(a(143),a(67)),s=a(13),o=(a.p,a(144),a(37)),u=a(209),d=a(210),j=a(205),b=a(68),h=a(201),p=a(12),g=a(119),O=a(4),x=a(110),m=a.n(x),f=a(106),v=a.n(f),y=a(107),S=a.n(y),k=a(237),C=a(206),N=a(154),w=a(207),P=a(208),B=a(108),T=a.n(B),K=a(109),q=a.n(K),R=a(58),M=Object(h.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},list:{width:250},fullList:{width:"auto"},toolbar:{minHeight:128,alignItems:"flex-start",paddingTop:e.spacing(1),paddingBottom:e.spacing(3)},title:{flexGrow:1,alignSelf:"flex-end"},search:Object(o.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(p.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(p.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(o.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function I(e){var t=e.page,a=e.handlePage,r=M(),i=Object(c.useState)(!1),l=Object(s.a)(i,2),h=l[0],p=l[1];function x(e){return 1==e.res?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:r.search,children:[Object(n.jsx)("div",{className:r.searchIcon,children:Object(n.jsx)(v.a,{})}),Object(n.jsx)(g.a,{placeholder:"Search\u2026",classes:{root:r.inputRoot,input:r.inputInput},inputProps:{"aria-label":"search"}})]}),Object(n.jsx)(j.a,{"aria-label":"display more actions",edge:"end",color:"inherit",children:Object(n.jsx)(S.a,{})})]}):Object(n.jsx)(n.Fragment,{})}var f,y=function(e,t){return function(e){("keydown"!==e.type||"Tab"!==e.key&&"Shift"!==e.key)&&p(t)}};return Object(n.jsxs)("div",{className:r.root,children:[Object(n.jsx)(u.a,{position:"static",className:"app-bar",children:Object(n.jsxs)(d.a,{className:r.toolbar,children:[Object(n.jsx)(j.a,{edge:"start",className:r.menuButton,color:"inherit","aria-label":"open drawer",onClick:y(0,!0),children:Object(n.jsx)(m.a,{})}),Object(n.jsx)(b.a,{className:r.title+" judul-range",variant:"h5",noWrap:!0,children:"Nota App"}),Object(n.jsx)(x,{res:t})]})}),Object(n.jsx)(k.a,{anchor:"left",open:h,onClose:y(0,!1),children:(f="left",Object(n.jsx)("div",{className:Object(O.a)(r.list,Object(o.a)({},r.fullList,"top"===f||"bottom"===f)),role:"presentation",onClick:y(0,!1),onKeyDown:y(0,!1),children:Object(n.jsxs)(C.a,{children:[Object(n.jsx)(R.b,{to:"/",style:{textDecoration:"none",color:"black"},children:Object(n.jsxs)(N.a,{button:!0,onClick:function(){return a(!1)},children:[Object(n.jsx)(w.a,{children:Object(n.jsx)(T.a,{})}),Object(n.jsx)(P.a,{primary:"Add Nota"})]})}),Object(n.jsx)(R.b,{to:"/show",style:{textDecoration:"none",color:"black"},children:Object(n.jsxs)(N.a,{button:!0,onClick:function(){return a(!0)},children:[Object(n.jsx)(w.a,{children:Object(n.jsx)(q.a,{})}),Object(n.jsx)(P.a,{primary:"Show Nota"})]})})]})}))})]})}var L=a(230),D=a(40),F=a.n(D),W=a(61),H=a(44),J=a(5),z=a(221),A=a(79),E=a(213),V=a(88),G=a.n(V),U=a(89),Y=a.n(U),Q=a(222),_=a(64),X=a(216),Z=a(234),$=a(223),ee=a(77),te=a.n(ee),ae=a(219),ne=a(218),ce=a(111),re=a.n(ce);var ie=function(e){var t=e.ser,a=e.handleChange,c=e.currencies,r=e.insertChange,i=e.changeNum,l=e.deletes;function s(e){var t=e.res;return 1!=t.index?Object(n.jsx)(j.a,{onClick:function(e){return l(t)},color:"secondary",style:{padding:"0px"},"aria-label":"add an alarm",children:Object(n.jsx)(re.a,{})}):Object(n.jsx)(te.a,{})}return Object(n.jsx)(n.Fragment,{children:t.map((function(e){return Object(n.jsxs)(E.a,{container:!0,spacing:2,style:{marginBottom:"10px"},children:[Object(n.jsx)(E.a,{item:!0,children:Object(n.jsx)(s,{res:e})}),Object(n.jsx)(E.a,{item:!0,children:Object(n.jsx)(Z.a,{id:"standard-select-currency",select:!0,label:"Kode Barang",value:e.value,onChange:function(t){return a(e.index,t.target.value)},style:{minWidth:120},required:!0,children:c.map((function(e){return Object(n.jsx)(ne.a,{value:e.value,children:e.label},e.value)}))})}),Object(n.jsx)(E.a,{item:!0,children:Object(n.jsx)(Z.a,{InputLabelProps:{shrink:!0},required:!0,onChange:function(t){return r(e.index,t.target.value)},id:"standard-required",size:"small",label:"Harga Satuan",value:e.input,variant:"filled",InputProps:{startAdornment:Object(n.jsx)(ae.a,{position:"start",children:Object(n.jsx)("h4",{children:"Rp"})})},style:{maxWidth:"200px"}})}),Object(n.jsx)(E.a,{item:!0,children:Object(n.jsx)(Z.a,{InputLabelProps:{shrink:!0},required:!0,id:"standard-required",onChange:function(t){return i(e.index,t.target.value)},type:"number",size:"small",label:"Unit",value:e.quantity,variant:"filled",style:{maxWidth:"100px"}})})]})}))})},le=a(113),se=a.n(le),oe=a(23),ue=a(231),de=a(236),je=a(220),be=a(112),he=Object(h.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},buttonSuccess:{backgroundColor:A.a[500],"&:hover":{backgroundColor:A.a[700]}},buttonProgress:{color:A.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},title:{fontSize:14},pos:{marginBottom:12}}),pe=[{value:"Americano",label:"AMC"},{value:"Kopi Susu",label:"KPSS"},{value:"Kopi Susu Bendol",label:"KSB"},{value:"Kopi Susu Marley",label:"KSM"},{value:"Kopi Matcha",label:"KM"},{value:"Kopi Susu Orang Tua",label:"KSQT"},{value:"Kopi Susu Balak Enam",label:"KSBE"},{value:"Robusta Tubruk",label:"RT"},{value:"Daun Kopi Kawa",label:"DKK"},{value:"Tubruk",label:"TBRK"},{value:"V60",label:"V60"},{value:"Japanese",label:"JPNS"},{value:"Vietnam",label:"VNM"},{value:"Teh Mint",label:"TM"},{value:"Coklat",label:"CKLT"},{value:"Coklat Susu",label:"CS"},{value:"Coklat Mint",label:"CM"},{value:"Matcha",label:"MTC"},{value:"Indomie",label:"INDM"},{value:"Kentang",label:"KTG"},{value:"Roti Panggang",label:"RP"}];var ge=Object(J.a)((function(e){return{root:{color:"white",backgroundColor:"#ca9b52","&:hover":{backgroundColor:"#deb473"}}}}))(je.a);function Oe(e){var t=e.login,a=he(),r=(a.bullet,Object(c.useState)(new Date)),i=Object(s.a)(r,2),l=i[0],u=i[1],d=Object(c.useState)(""),j=Object(s.a)(d,2),b=j[0],h=j[1],p=Object(c.useState)(""),g=Object(s.a)(p,2),x=g[0],m=g[1],f=Object(c.useState)(0),v=Object(s.a)(f,2),y=v[0],S=v[1],k=Object(c.useState)(0),C=Object(s.a)(k,2),N=C[0],w=C[1],P=Object(c.useState)(!1),B=Object(s.a)(P,2),T=B[0],K=B[1],q=Object(c.useState)(!1),R=Object(s.a)(q,2),M=R[0],I=R[1],L=Object(c.useRef)(),D=Object(O.a)(Object(o.a)({},a.buttonSuccess,M)),J=Object(c.useState)(!1),A=Object(s.a)(J,2),V=A[0],U=A[1],ee=Object(c.useState)("Kopi Susu"),ae=Object(s.a)(ee,2),ne=ae[0],ce=ae[1];function re(){for(var e=xe,t=0,a=0;a<e.length;a++){t+=e[a].quantity*e[a].satuan}var n=function(e){for(var t="",a=e.toString().split("").reverse().join(""),n=0;n<a.length;n++)n%3==0&&(t+=a.substr(n,3)+".");return t.split("",t.length-1).reverse().join("")}(Number(t));w(n),S(Number(t))}var le=Object(c.useState)([]),Oe=Object(s.a)(le,2),xe=Oe[0],me=Oe[1],fe=Object(c.useState)(1),ve=Object(s.a)(fe,2),ye=ve[0],Se=ve[1],ke=function(){var e=Object(W.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T||(I(!1),K(!0),L.current=window.setTimeout(Object(W.a)(F.a.mark((function e(){var a,n,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/add",{method:"post",body:JSON.stringify({nota:b,pesanan:x,tanggal:t,total:Number(y.toString().replace(/[^0-9,-]+/g,"")),barang:xe}),headers:{"Content-Type":"application/json"}});case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,console.log(n),I(!0),K(!1),h(""),m(""),ce("Kopi Susu"),S(0),w(0),(c=[]).push({index:1,value:"Kopi Susu",satuan:0,quantity:0,input:0}),me([].concat(c)),U(!0);case 19:case"end":return e.stop()}}),e)}))),2e3));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){var e={index:ye,value:ne,satuan:0,quantity:0,input:0},t=xe;t.push(e),me(Object(H.a)(t))}),[t]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(z.a,{className:"card-form ",children:Object(n.jsxs)(Q.a,{className:"form-body",children:[Object(n.jsx)("h2",{style:{margin:"0px",marginBottom:"20px"},children:"Input Form"}),Object(n.jsxs)(X.a,{children:[Object(n.jsxs)(E.a,{container:!0,spacing:2,style:{marginBottom:"10px"},children:[Object(n.jsx)(E.a,{item:!0,children:Object(n.jsx)(G.a,{})}),Object(n.jsx)(E.a,{item:!0,children:Object(n.jsx)("h4",{style:{margin:"0px",paddingTop:"10px",fontWeight:"normal"},children:"Tanggal : "})}),Object(n.jsx)(E.a,{item:!0,children:Object(n.jsx)(oe.a,{utils:_.a,children:Object(n.jsx)(ue.a,{style:{margin:"0px"},required:!0,disableToolbar:!0,variant:"inline",label:"Required",format:"MM/dd/yyyy",margin:"normal",id:"date-picker-inline",fullWidth:!0,value:l,onChange:function(e){u(e)},KeyboardButtonProps:{"aria-label":"change date"},size:"small"})})})]}),Object(n.jsxs)(E.a,{container:!0,spacing:2,style:{marginBottom:"10px"},children:[Object(n.jsx)(E.a,{item:!0,children:Object(n.jsx)(te.a,{})}),Object(n.jsx)(E.a,{item:!0,children:Object(n.jsx)("h4",{style:{margin:"0px",paddingTop:"10px",fontWeight:"normal"},children:"No Nota : "})}),Object(n.jsx)(E.a,{item:!0,children:Object(n.jsx)(Z.a,{InputLabelProps:{shrink:!0},required:!0,id:"standard-required",value:b,onChange:function(e){h(e.target.value)},label:"Required",defaultValue:"",size:"small",variant:"filled",fullWidth:!0})})]}),Object(n.jsxs)(E.a,{container:!0,spacing:2,style:{marginBottom:"10px"},children:[Object(n.jsx)(E.a,{item:!0,children:Object(n.jsx)(Y.a,{})}),Object(n.jsx)(E.a,{item:!0,children:Object(n.jsx)("h4",{style:{margin:"0px",paddingTop:"10px",fontWeight:"normal"},children:"No Pesanan : "})}),Object(n.jsx)(E.a,{item:!0,children:Object(n.jsx)(Z.a,{value:x,onChange:function(e){m(e.target.value)},required:!0,size:"small",id:"standard-required",label:"Required",defaultValue:"",type:"number",InputLabelProps:{shrink:!0},variant:"filled",fullWidth:!0})})]}),Object(n.jsxs)(E.a,{container:!0,spacing:2,style:{marginBottom:"20px",marginTop:"10px"},children:[Object(n.jsx)("h3",{style:{margin:"0px",marginLeft:"20px",marginBottom:"10px"},children:"Barang : "}),Object(n.jsx)(je.a,{style:{border:"2px solid #ca9b52",color:"#ca9b52",fontWeight:"bold",marginLeft:"10px"},variant:"outlined",color:"primary",onClick:function(e){var t=xe,a=ye+1,n={index:ye,value:ne,satuan:0,quantity:0,input:0};Se(a),n.index=a,t.push(n),me(Object(H.a)(t))},children:"Add Barang"})]}),Object(n.jsx)(ie,{deletes:function(e){var t=xe;t=Object(be.without)(t,e),me(Object(H.a)(t))},changeNum:function(e,t){var a=xe;a[e-1].quantity=Number(t),me(Object(H.a)(a)),re()},ser:xe,handleChange:function(e,t){var a=xe;a[e-1].value=t,me(Object(H.a)(a))},currencies:pe,insertChange:function(e,t){var a=function(e,t){var a=e.replace(/[^,\d]/g,"").toString().split(","),n=a[0].length%3,c=a[0].substr(0,n),r=a[0].substr(n).match(/\d{3}/gi);return r&&(c+=(n?".":"")+r.join(".")),c=void 0!=a[1]?c+","+a[1]:c,void 0==t?c:c||""}(t,""),n=xe;n[e-1].satuan=Number(a.replace(/[^0-9,-]+/g,"")),n[e-1].input=a,me(Object(H.a)(n)),re()}}),Object(n.jsx)("hr",{}),Object(n.jsxs)("h3",{style:{margin:"0px",marginLeft:"20px",marginBottom:"10px",fontWeight:"normal"},children:["Total Harga : ",Object(n.jsxs)("font",{style:{fontWeight:"bold"},children:["Rp",N]})]}),Object(n.jsx)(ge,{variant:"contained",color:"primary",className:D,endIcon:Object(n.jsx)(se.a,{}),disabled:T,onClick:function(){var e=l.getMonth()+1,t=l.getDate(),a=l.getFullYear();ke(t+"/"+e+"/"+a),console.log({})},style:{margin:"10px"},children:"Send"}),T&&Object(n.jsx)($.a,{size:24,className:a.buttonProgress})]})]})}),Object(n.jsx)(de.a,{open:V,onClose:function(){U(!1)},message:"Berhasil ditambahkan"},"bottomcenter")]})}var xe=a(16),me=function(){return Object(n.jsx)("h1",{children:"Not Found Page"})},fe=a(228),ve=a(229),ye=a(226),Se=a(227),ke=a(224),Ce=a(225),Ne=a(92),we=a(235),Pe=a(238),Be=a(233),Te=a(239),Ke=a(115),qe=a.n(Ke),Re=a(116),Me=a.n(Re),Ie=Object(h.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(p.e)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}}}));function Le(e){var t=e.toString().split("").reverse().join("").match(/\d{1,3}/g);return t="Rp"+t.join(".").split("").reverse().join("")}function De(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}function Fe(e,t){return"desc"===e?function(e,a){return De(e,a,t)}:function(e,a){return-De(e,a,t)}}function We(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))}var He=[{id:"nota",numeric:!1,disablePadding:!0,label:"No. Nota"},{id:"pesanan",numeric:!1,disablePadding:!1,label:"No. Pesanan"},{id:"barang",numeric:!1,disablePadding:!1,label:"Barang"},{id:"harga_satuan",numeric:!1,disablePadding:!1,label:"Harga Satuan"},{id:"jumlah",numeric:!1,disablePadding:!1,label:"Jumlah Barang"},{id:"harga",numeric:!1,disablePadding:!1,label:"Jumlah Harga"},{id:"saldo",numeric:!1,disablePadding:!1,label:"Saldo"}];function Je(e){var t=e.classes,a=e.onSelectAllClick,c=e.order,r=e.orderBy,i=e.numSelected,l=e.rowCount,s=e.onRequestSort;return Object(n.jsx)(ke.a,{children:Object(n.jsxs)(Ce.a,{children:[Object(n.jsx)(ye.a,{padding:"checkbox",children:Object(n.jsx)(Be.a,{indeterminate:i>0&&i<l,checked:l>0&&i===l,onChange:a,inputProps:{"aria-label":"select all nota"}})}),He.map((function(e){return Object(n.jsx)(ye.a,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:r===e.id&&c,children:Object(n.jsxs)(Pe.a,{active:r===e.id,direction:r===e.id?c:"asc",onClick:(a=e.id,function(e){s(e,a)}),children:[e.label,r===e.id?Object(n.jsx)("span",{className:t.visuallyHidden,children:"desc"===c?"sorted descending":"sorted ascending"}):null]})},e.id);var a}))]})})}var ze=function(e){var t=Ie(),a=e.numSelected;return Object(n.jsxs)(d.a,{className:Object(O.a)(t.root,Object(o.a)({},t.highlight,a>0)),children:[a>0?Object(n.jsxs)(b.a,{className:t.title,color:"inherit",variant:"subtitle1",component:"div",children:[a," selected"]}):Object(n.jsx)(b.a,{className:t.title,variant:"h6",id:"tableTitle",component:"div",children:"Nota"}),a>0?Object(n.jsx)(Te.a,{title:"Delete",children:Object(n.jsx)(j.a,{"aria-label":"delete",children:Object(n.jsx)(qe.a,{onClick:function(t){function a(){return(a=Object(W.a)(F.a.mark((function t(){var a,n;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/delete",{method:"post",body:JSON.stringify({nota:e.selected}),headers:{"Content-Type":"application/json"}});case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,console.log(n);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){a.apply(this,arguments)}();var n=e.selected;var c=e.data.filter((function(e){return!n.includes(e.nota)}));e.setData(c),e.setSelected([])}})})}):Object(n.jsx)(Te.a,{title:"Filter list",children:Object(n.jsx)(j.a,{"aria-label":"filter list",children:Object(n.jsx)(Me.a,{})})})]})},Ae=Object(h.a)((function(e){return{root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));function Ee(e){var t=e.login,a=Ae(),r=Object(c.useState)([]),i=Object(s.a)(r,2),l=i[0],o=i[1],u=Object(c.useState)(0),d=Object(s.a)(u,2),j=(d[0],d[1]),b=Object(c.useState)("asc"),h=Object(s.a)(b,2),p=h[0],g=h[1],O=Object(c.useState)("nota"),x=Object(s.a)(O,2),m=x[0],f=x[1],v=Object(c.useState)([]),y=Object(s.a)(v,2),S=y[0],k=y[1],C=Object(c.useState)(0),N=Object(s.a)(C,2),w=N[0],P=N[1],B=Object(c.useState)(!1),T=Object(s.a)(B,2),K=T[0],q=(T[1],Object(c.useState)(5)),R=Object(s.a)(q,2),M=R[0],I=R[1],L=Object(c.useState)(new Date),D=Object(s.a)(L,2),J=D[0],A=D[1],E=M-Math.min(M,l.length-w*M);return Object(c.useEffect)((function(){function e(){return(e=Object(W.a)(F.a.mark((function e(){var t,a,n,c,r,i;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=J.getMonth()+1,a=J.getDate(),n=J.getFullYear(),c=a+"/"+t+"/"+n,e.next=6,fetch("/api/nota",{method:"post",body:JSON.stringify({tanggal:c}),headers:{"Content-Type":"application/json"}});case 6:return r=e.sent,e.next=9,r.json();case 9:i=e.sent,o(Object(H.a)(i.map((function(e,t){return e.id=t,j(t),e})))),console.log(i);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("center",{children:[Object(n.jsx)(z.a,{className:"card-form ",children:Object(n.jsx)(oe.a,{utils:_.a,children:Object(n.jsx)(ue.a,{margin:"normal",id:"date-picker-dialog",label:"Date picker dialog",format:"MM/dd/yyyy",value:J,onChange:function(e){A(e)},KeyboardButtonProps:{"aria-label":"change date"}})})}),Object(n.jsxs)(Ne.a,{className:a.paper,children:[Object(n.jsx)(ze,{numSelected:S.length,selected:S,setSelected:k,data:l,setData:o}),Object(n.jsx)(Se.a,{children:Object(n.jsxs)(fe.a,{className:a.table,"aria-labelledby":"tableTitle",size:K?"small":"medium","aria-label":"enhanced table",children:[Object(n.jsx)(Je,{classes:a,numSelected:S.length,order:p,orderBy:m,onSelectAllClick:function(e){if(e.target.checked){var t=l.map((function(e){return e.nota}));k(t)}else k([])},onRequestSort:function(e,t){g(m===t&&"asc"===p?"desc":"asc"),f(t)},rowCount:l.length}),Object(n.jsxs)(ve.a,{children:[We(l,Fe(p,m)).slice(w*M,w*M+M).map((function(e,t){var a,c=(a=e.nota,-1!==S.indexOf(a)),r="enhanced-table-checkbox-".concat(t);return Object(n.jsxs)(Ce.a,{hover:!0,onClick:function(t){return function(e,t){var a=S.indexOf(t),n=[];-1===a?n=n.concat(S,t):0===a?n=n.concat(S.slice(1)):a===S.length-1?n=n.concat(S.slice(0,-1)):a>0&&(n=n.concat(S.slice(0,a),S.slice(a+1))),k(n)}(0,e.nota)},role:"checkbox","aria-checked":c,tabIndex:-1,selected:c,children:[Object(n.jsx)(ye.a,{padding:"checkbox",children:Object(n.jsx)(Be.a,{checked:c,inputProps:{"aria-labelledby":r}})}),Object(n.jsx)(ye.a,{component:"th",id:r,scope:"row",padding:"none",children:e.nota}),Object(n.jsx)(ye.a,{children:e.pesanan}),Object(n.jsx)(ye.a,{children:e.barang.map((function(e){return Object(n.jsx)("p",{style:{margin:"0px",lineHeight:"30px"},children:e.value})}))}),Object(n.jsx)(ye.a,{children:e.barang.map((function(e){return Object(n.jsx)("p",{style:{margin:"0px",lineHeight:"30px"},children:Le(Number(e.satuan))})}))}),Object(n.jsx)(ye.a,{children:e.barang.map((function(e){return Object(n.jsx)("p",{style:{margin:"0px",lineHeight:"30px"},children:e.quantity})}))}),Object(n.jsx)(ye.a,{children:e.barang.map((function(e){return Object(n.jsx)("p",{style:{margin:"0px",lineHeight:"30px"},children:Le(Number(e.satuan)*Number(e.quantity))})}))}),Object(n.jsx)(ye.a,{children:Le(Number(e.total))})]},e.nota)})),E>0&&Object(n.jsx)(Ce.a,{style:{height:(K?33:53)*E},children:Object(n.jsx)(ye.a,{colSpan:6})})]})]})}),Object(n.jsx)(we.a,{rowsPerPageOptions:[5,10,25],component:"div",count:l.length,rowsPerPage:M,page:w,onChangePage:function(e,t){P(t)},onChangeRowsPerPage:function(e){I(parseInt(e.target.value,10)),P(0)}})]})]})})}var Ve=function(){var e=Object(xe.f)(),t=Object(c.useState)(!1),a=Object(s.a)(t,2),r=a[0],i=a[1],o=Object(c.useState)("sm"),u=Object(s.a)(o,2),d=u[0],j=u[1];return Object(c.useEffect)((function(){var t=e.pathname;new URLSearchParams(e.search);console.log(t),"/"==t?(j("sm"),i(!1)):(j("md"),i(!0))}),[e]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(I,{page:r,handlePage:function(e){i(e)}}),Object(n.jsx)(L.a,{maxWidth:d,children:Object(n.jsxs)(xe.c,{children:[Object(n.jsx)(xe.a,{path:"/",render:function(e){return Object(n.jsx)(Oe,Object(l.a)(Object(l.a)({},e),{},{login:!1}))},exact:!0}),Object(n.jsx)(xe.a,{path:"/show",render:function(e){return Object(n.jsx)(Ee,Object(l.a)(Object(l.a)({},e),{},{login:!1}))}}),Object(n.jsx)(xe.a,{component:me})]})})]})},Ge=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,242)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(R.a,{children:Object(n.jsx)(Ve,{})})}),document.getElementById("root")),Ge()}},[[152,1,2]]]);
//# sourceMappingURL=main.1285aa36.chunk.js.map