(()=>{"use strict";var e,t={878:()=>{const e=window.React,t=window.wp.blocks,l=window.wp.i18n,o=window.wp.blockEditor,a=window.wp.components,n=window.wp.element,r=window.wp.compose,d=()=>(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"16px",marginBottom:"10px"}},(0,e.createElement)("p",null,(0,e.createElement)("svg",{width:"41",height:"48",viewBox:"0 0 41 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("path",{d:"M0 34.7721L6.88004 38.677V15.8055L20.4542 7.80977L23.9872 9.4833L30.4953 5.57841L20.4542 -7.62939e-06L0 11.9006V34.7721Z",fill:"#38DAC7"}),(0,e.createElement)("path",{d:"M32.9284 6.87939L34.2126 7.61318L12.3825 19.904L12.1991 40.45L20.6376 45.8616L41.0001 33.6625V35.4969L20.6376 47.6043L10.8232 41.2755V18.9868L32.9284 6.87939Z",fill:"#5566CA"}),(0,e.createElement)("path",{d:"M37.6063 9.53936L36.2305 8.71385L14.217 21.3716V38.9824L20.5459 43.5685L41.0001 31.3694V29.5349L20.5459 41.8258L15.5928 38.2486V22.1054L37.6063 9.53936Z",fill:"#5566CA"}),(0,e.createElement)("path",{d:"M41.0001 11.3738L39.5325 10.5483L17.3356 23.2061V37.2397L20.5459 39.6244L41.0001 27.4253V25.6826L20.5459 37.79L18.9866 36.5976V24.1233L41.0001 11.3738Z",fill:"#5566CA"}))),(0,e.createElement)("h2",{style:{fontSize:"18px",fontFamily:"Inter",marginTop:"-5px",marginBottom:"15px"}},(0,l.__)("Access Without Limits!","cozy-addons")),(0,e.createElement)("p",{style:{textAlign:"center",lineHeight:"20px"}},(0,l.__)("Access more blocks and advanced features for effortless design. Upgrade today for a richer web-building experience!","cozy-addons")),(0,e.createElement)("a",{href:"https://cozythemes.com/pricing-and-plans/",target:"_blank"},(0,e.createElement)("button",{className:"cozy-block-premium-button",style:{backgroundColor:"#5566ca",borderRadius:"20px",padding:"10px",border:"none",color:"#fff",fontFamily:"Inter",fontSize:"10px",fontWeight:"500",cursor:"pointer"}},(0,e.createElement)("div",{style:{display:"flex",gap:"5px",margin:"0"}},(0,e.createElement)("div",null,(0,e.createElement)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("path",{d:"M9.29768 0.0630875L0.24397 5.2847C-0.109583 5.48778 -0.0646564 5.97987 0.286944 6.12828L2.36334 6.99919L7.97527 2.05487C8.0827 1.95919 8.23506 2.10565 8.14325 2.21695L3.43767 7.94822V9.52017C3.43767 9.98102 3.99437 10.1626 4.26784 9.8287L5.50821 8.31924L7.94206 9.33857C8.21943 9.45573 8.53588 9.28194 8.58666 8.98317L9.99306 0.547365C10.0595 0.152913 9.6356 -0.132186 9.29768 0.0630875Z",fill:"white"}))),(0,e.createElement)("div",null,(0,l.__)("Upgrade to Pro","cozy-addons"))))))),i=(0,n.memo)((({clientId:t,attributes:l,blockId:o})=>{const[a,d]=(0,n.useState)(new Date),i=(0,r.useRefEffect)((e=>{const t=setInterval((()=>{d(new Date)}),1e3);return()=>{clearInterval(t)}})),s=["January","February","March","April","May","June","July","August","September","October","November","December"][a.getMonth()],c=a.getDate(),m=a.getFullYear(),y=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][a.getDay()],u=`\n    #${o} {\n      padding: ${l.layout.padding.top}px ${l.layout.padding.right}px ${l.layout.padding.bottom}px ${l.layout.padding.left}px;\n      display: ${l.layout.display};\n      gap: ${l.layout.gap}px;\n      text-align: ${l.layout.textAlign};\n      font-family: ${l.layout.styles.fontFamily}, "sans-serif";\n      font-size: ${l.layout.styles.fontSize}px;\n      font-weight: ${l.layout.styles.fontWeight};\n      color: ${l.layout.styles.color};\n      background-color: ${l.layout.styles.bgColor};\n      border-radius: ${l.layout.borderRadius.topL}px ${l.layout.borderRadius.topR}px ${l.layout.borderRadius.bottomR}px ${l.layout.borderRadius.bottomL}px;\n    }\n\n    #${o}.block .cozy-date {\n      margin-bottom: ${l.layout.marginBottom}px;\n    }\n\n    #${o} .cozy-time {\n      padding: ${l.time.padding.top}px ${l.time.padding.right}px ${l.time.padding.bottom}px ${l.time.padding.left}px;\n      font-size: ${l.time.styles.fontSize}px;\n      font-weight: ${l.time.styles.fontWeight};\n      color: ${l.time.styles.color};\n      background-color: ${l.time.styles.bgColor};\n      border-radius: ${l.time.borderRadius.topL}px ${l.time.borderRadius.topR}px ${l.time.borderRadius.bottomR}px ${l.time.borderRadius.bottomL}px;\n    }\n  `;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("style",{dangerouslySetInnerHTML:{__html:u}}),(0,e.createElement)("div",{className:`cozy-block-date-time ${l.layout.display}`,id:o,ref:i},l.date.enabled&&(0,e.createElement)("div",{className:"cozy-date"},"m-d-y"===l.date.format&&`${l.week.enabled?l.abbr?y.slice(0,3)+" ":y+" ":""}${l.abbr?s.slice(0,3):s} ${c}, ${m}`,"d-m-y"===l.date.format&&`${c} ${l.abbr?s.slice(0,3):s}, ${m}`),l.time.enabled&&(0,e.createElement)("div",{className:"cozy-time"},a.toLocaleTimeString("en-US",{hour12:l.time.timeFormat}))))})),s=JSON.parse('{"u2":"cozy-block/date-time","TN":"Date & Time"}');(0,t.registerBlockType)(s.u2,{title:(0,l.__)(s.TN,"cozy-addons"),description:(0,l.__)("Stay updated with our 'Date & Time' block, effortlessly displaying the current time and date to keep your audience informed and engaged.","cozy-addons"),icon:()=>(0,e.createElement)("svg",{width:"29",height:"24",viewBox:"0 0 29 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M25 6.5C25 6.77614 24.7761 7 24.5 7H3.5C3.22386 7 3 6.77614 3 6.5C3 6.22386 3.22386 6 3.5 6H24.5C24.7761 6 25 6.22386 25 6.5Z",fill:"#5566CA"}),(0,e.createElement)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.5 4C6.22386 4 6 3.77614 6 3.5L6 0.5C6 0.223858 6.22386 -3.39283e-08 6.5 -2.1857e-08C6.77614 -9.7857e-09 7 0.223858 7 0.5L7 3.5C7 3.77614 6.77614 4 6.5 4Z",fill:"#5566CA"}),(0,e.createElement)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M21.5 4C21.2239 4 21 3.77614 21 3.5L21 0.5C21 0.223858 21.2239 -3.39283e-08 21.5 -2.1857e-08C21.7761 -9.7857e-09 22 0.223858 22 0.5L22 3.5C22 3.77614 21.7761 4 21.5 4Z",fill:"#5566CA"}),(0,e.createElement)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M22.5 20C22.2239 20 22 19.7761 22 19.5L22 16.5C22 16.2239 22.2239 16 22.5 16C22.7761 16 23 16.2239 23 16.5L23 19.5C23 19.7761 22.7761 20 22.5 20Z",fill:"#36CFC6"}),(0,e.createElement)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M25 19.5C25 19.7761 24.7761 20 24.5 20H22.5C22.2239 20 22 19.7761 22 19.5C22 19.2239 22.2239 19 22.5 19H24.5C24.7761 19 25 19.2239 25 19.5Z",fill:"#36CFC6"}),(0,e.createElement)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M23 23C25.7614 23 28 20.7614 28 18C28 15.2386 25.7614 13 23 13C20.2386 13 18 15.2386 18 18C18 20.7614 20.2386 23 23 23ZM23 24C26.3137 24 29 21.3137 29 18C29 14.6863 26.3137 12 23 12C19.6863 12 17 14.6863 17 18C17 21.3137 19.6863 24 23 24Z",fill:"#36CFC6"}),(0,e.createElement)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.51432 3.2076C1.47602 3.40205 1.47251 3.64606 1.47267 3.99978L1.47267 18C1.47267 19.8915 2.05612 20.6948 2.6729 21.0742C3.34598 21.4884 4.1993 21.5001 4.97259 21.5H16.9727C17.2488 21.5 17.4727 21.7239 17.4727 22C17.4727 22.2761 17.2488 22.5 16.9727 22.5H4.97275C4.95914 22.5 4.94529 22.5 4.93138 22.5C4.20487 22.5004 3.08335 22.5009 2.14889 21.926C1.14018 21.3054 0.472671 20.1086 0.472671 18L0.472671 4.00009C0.472524 3.67065 0.472375 3.32299 0.53318 3.01432C0.59796 2.68548 0.73759 2.36508 1.03614 2.1083C1.32111 1.8632 1.70338 1.71764 2.17116 1.62887C2.64138 1.53965 3.24257 1.49986 4.00674 1.5H24C25.2926 1.50006 26.2262 1.75402 26.8035 2.42351C27.3645 3.07413 27.4746 3.99486 27.4746 5.00025V12.0002C27.4746 12.2764 27.2507 12.5002 26.9746 12.5002C26.6985 12.5002 26.4746 12.2764 26.4746 12.0002V5.00025C26.4746 4.00528 26.3474 3.42594 26.0461 3.07655C25.7611 2.74603 25.2074 2.50005 24 2.5H4.00674C3.26789 2.49986 2.73816 2.53913 2.35759 2.61134C1.97457 2.68402 1.78608 2.78228 1.68822 2.86645C1.60395 2.93894 1.54867 3.03325 1.51432 3.2076Z",fill:"#5566CA"}),(0,e.createElement)("circle",{cx:"6.5",cy:"10.5",r:"1.5",fill:"#B2BCF9"}),(0,e.createElement)("circle",{cx:"6.5",cy:"15.5",r:"1.5",fill:"#B2BCF9"}),(0,e.createElement)("circle",{cx:"11.5",cy:"10.5",r:"1.5",fill:"#36CFC6"}),(0,e.createElement)("circle",{cx:"11.5",cy:"15.5",r:"1.5",fill:"#B2BCF9"})),edit:function(t){const{attributes:r,setAttributes:s,clientId:c}=t;r.blockClientId=c;const m=(0,o.useBlockProps)({className:"cozy-block-wrapper"}),y=`cozyBlock_${c.replace(/-/gi,"_")}`,[u,p]=(0,n.useState)(!0),[b,g]=(0,n.useState)(!0),[C,h]=(0,n.useState)(!0),[_,f]=(0,n.useState)(!0),E=(e,t)=>{let l={...r.layout.padding};l={...l,top:Math.abs(t),right:Math.abs(t),bottom:Math.abs(t),left:Math.abs(t)},s(u?{...r,layout:{...r.layout,padding:l}}:{...r,layout:{...r.layout,padding:{...r.layout.padding,[e]:Math.abs(t)}}})},v=(e,t)=>{let l={...r.time.padding};l={...l,top:Math.abs(t),right:Math.abs(t),bottom:Math.abs(t),left:Math.abs(t)},s(b?{...r,time:{...r.time,padding:l}}:{...r,time:{...r.time,padding:{...r.time.padding,[e]:Math.abs(t)}}})},x=(e,t)=>{let l={...r.layout.borderRadius};l={...l,topL:Math.abs(t),topR:Math.abs(t),bottomL:Math.abs(t),bottomR:Math.abs(t)},s(C?{...r,layout:{...r.layout,borderRadius:l}}:{...r,layout:{...r.layout,borderRadius:{...r.layout.borderRadius,[e]:Math.abs(t)}}})},z=(e,t)=>{let l={...r.time.borderRadius};l={...l,topL:Math.abs(t),topR:Math.abs(t),bottomL:Math.abs(t),bottomR:Math.abs(t)},s(_?{...r,time:{...r.time,borderRadius:l}}:{...r,time:{...r.time,borderRadius:{...r.time.borderRadius,[e]:Math.abs(t)}}})};return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",{...m},"block"===r.layout.display&&(0,e.createElement)(o.BlockControls,null,(0,e.createElement)(o.AlignmentToolbar,{value:r.layout.textAlign,onChange:e=>s({...r,layout:{...r.layout,textAlign:e}})})),(0,e.createElement)(i,{clientId:c,attributes:r,blockId:y})),(0,e.createElement)(o.InspectorControls,{key:"setting",group:"settings"},(0,e.createElement)(a.PanelBody,{title:(0,l.__)("General","cozy-addons")},r.date.enabled&&r.time.enabled&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a.SelectControl,{label:(0,l.__)("Display Layout","cozy-addons"),options:[{label:(0,l.__)("Inline","cozy-addons"),value:"flex"},{label:(0,l.__)("Block","cozy-addons"),value:"block"}],value:r.layout.display,onChange:e=>s({...r,layout:{...r.layout,display:e}})}),"flex"===r.layout.display&&(0,e.createElement)(a.RangeControl,{label:(0,l.__)("Gap","cozy-addons"),min:1,max:50,step:1,value:r.layout.gap,onChange:e=>s({...r,layout:{...r.layout,gap:e}})}),"block"===r.layout.display&&(0,e.createElement)(a.RangeControl,{label:(0,l.__)("Gap","cozy-addons"),min:0,max:50,step:1,value:r.layout.marginBottom,onChange:e=>s({...r,layout:{...r.layout,marginBottom:e}})})),(0,e.createElement)(a.ToggleControl,{label:(0,l.__)("Enable Date","cozy-addons"),checked:r.date.enabled,onChange:e=>s({...r,date:{...r.date,enabled:e}})}),r.date.enabled&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a.ToggleControl,{label:(0,l.__)("Enable Week","cozy-addons"),checked:r.week.enabled,onChange:e=>s({...r,week:{...r.week,enabled:e}})}),(0,e.createElement)(a.SelectControl,{label:(0,l.__)("Date Format","cozy-addons"),options:[{label:(0,l.__)("M-D-Y","cozy-addons"),value:"m-d-y"},{label:(0,l.__)("D-M-Y","cozy-addons"),value:"d-m-y"}],value:r.date.format,onChange:e=>s({...r,date:{...r.date,format:e}})}),(0,e.createElement)(a.ToggleControl,{label:(0,l.__)("Abbreviate","cozy-addons"),checked:r.abbr,onChange:e=>s({...r,abbr:e})})),(0,e.createElement)(a.ToggleControl,{label:(0,l.__)("Enable Time","cozy-addons"),checked:r.time.enabled,onChange:e=>s({...r,time:{...r.time,enabled:e}})}),r.time.enabled&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a.ToggleControl,{label:(0,l.__)("Time Format","cozy-addons"),checked:r.time.timeFormat,onChange:e=>s({...r,time:{...r.time,timeFormat:e}}),help:(0,l.__)("Note: Disabling switches to 24 hour format.")}))),!cozyBlockAssets.isPremium&&(0,e.createElement)(d,null)),(0,e.createElement)(o.InspectorControls,{key:"style",group:"styles"},(0,e.createElement)(a.PanelBody,{title:(0,l.__)("Container Styles","cozy-addons")},(0,e.createElement)(a.BaseControl,null,(0,e.createElement)(a.BaseControl.VisualLabel,null,(0,l.__)("Container Padding","cozy-addons")),(0,e.createElement)("div",{style:{display:"flex",gap:"5px",height:"50px",position:"relative"}},(0,e.createElement)("button",{className:"cozy-link-styles "+(u?"":"cozy-attr-link-disabled"),onClick:()=>p(!u)},(0,e.createElement)("svg",{width:"10",height:"16",viewBox:"0 0 15 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("path",{d:"M6.18931 9.59516L6.18931 19.3466H8.70581V9.59516H6.18931Z",fill:"black"}),(0,e.createElement)("path",{d:"M0.0553284 7.88029L0.0553284 13.2126H2.53381L2.53381 7.88029C2.82201 4.53678 5.6079 3.53757 6.94321 3.4415C10.9203 3.15534 12.1019 6.00678 12.3901 7.88029V13.2126L14.8398 13.2126V7.88029C14.1251 1.90809 9.2776 0.780139 6.94321 0.962687C1.84791 1.30857 0.0553284 5.92031 0.0553284 7.88029Z",fill:"black"}),(0,e.createElement)("path",{d:"M0.0553284 20.9042L0.0553284 15.5718H2.53381L2.53381 20.9042C2.82201 24.2477 5.6079 25.2469 6.94321 25.343C10.9203 25.6291 12.1019 22.7777 12.3901 20.9042V15.5718L14.8398 15.5718V20.9042C14.1251 26.8764 9.2776 28.0043 6.94321 27.8218C1.84791 27.4759 0.0553284 22.8641 0.0553284 20.9042Z",fill:"black"}))),(0,e.createElement)(a.TextControl,{type:"number",step:1,label:(0,l.__)("Top","cozy-addons"),value:r.layout.padding.top,onChange:e=>E("top",e)}),(0,e.createElement)(a.TextControl,{type:"number",step:1,label:(0,l.__)("Right","cozy-addons"),value:r.layout.padding.right,onChange:e=>E("right",e)}),(0,e.createElement)(a.TextControl,{type:"number",step:1,label:(0,l.__)("Bottom","cozy-addons"),value:r.layout.padding.bottom,onChange:e=>E("bottom",e)}),(0,e.createElement)(a.TextControl,{type:"number",step:1,label:(0,l.__)("Left","cozy-addons"),value:r.layout.padding.left,onChange:e=>E("left",e)}))),(0,e.createElement)(a.SelectControl,{label:(0,l.__)("Font","cozy-addons"),options:cozyBlockAssets.fonts,value:r.layout.styles.fontFamily,onChange:e=>s({...r,layout:{...r.layout,styles:{...r.layout.styles,fontFamily:e}}})}),(0,e.createElement)(a.RangeControl,{label:(0,l.__)("Font Size","cozy-addons"),min:5,max:50,step:1,value:r.layout.styles.fontSize,onChange:e=>s({...r,layout:{...r.layout,styles:{...r.layout.styles,fontSize:e}}})}),(0,e.createElement)(a.SelectControl,{label:(0,l.__)("Font Weight","cozy-addons"),options:[{label:(0,l.__)("Thin","cozy-addons"),value:100},{label:(0,l.__)("Extra Light","cozy-addons"),value:200},{label:(0,l.__)("Light","cozy-addons"),value:300},{label:(0,l.__)("Normal","cozy-addons"),value:400},{label:(0,l.__)("Medium","cozy-addons"),value:500},{label:(0,l.__)("Semi Bold","cozy-addons"),value:600},{label:(0,l.__)("Bold","cozy-addons"),value:700},{label:(0,l.__)("Extra Bold","cozy-addons"),value:800}],value:r.layout.styles.fontWeight,onChange:e=>s({...r,layout:{...r.layout,styles:{...r.layout.styles,fontWeight:e}}})}),(0,e.createElement)(a.BaseControl,null,(0,e.createElement)(a.BaseControl.VisualLabel,null,(0,l.__)("Border Radius","cozy-addons")),(0,e.createElement)("div",{style:{display:"flex",gap:"5px",height:"50px",position:"relative"}},(0,e.createElement)("button",{className:"cozy-link-styles "+(C?"":"cozy-attr-link-disabled"),onClick:()=>h(!C)},(0,e.createElement)("svg",{width:"10",height:"16",viewBox:"0 0 15 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("path",{d:"M6.18931 9.59516L6.18931 19.3466H8.70581V9.59516H6.18931Z",fill:"black"}),(0,e.createElement)("path",{d:"M0.0553284 7.88029L0.0553284 13.2126H2.53381L2.53381 7.88029C2.82201 4.53678 5.6079 3.53757 6.94321 3.4415C10.9203 3.15534 12.1019 6.00678 12.3901 7.88029V13.2126L14.8398 13.2126V7.88029C14.1251 1.90809 9.2776 0.780139 6.94321 0.962687C1.84791 1.30857 0.0553284 5.92031 0.0553284 7.88029Z",fill:"black"}),(0,e.createElement)("path",{d:"M0.0553284 20.9042L0.0553284 15.5718H2.53381L2.53381 20.9042C2.82201 24.2477 5.6079 25.2469 6.94321 25.343C10.9203 25.6291 12.1019 22.7777 12.3901 20.9042V15.5718L14.8398 15.5718V20.9042C14.1251 26.8764 9.2776 28.0043 6.94321 27.8218C1.84791 27.4759 0.0553284 22.8641 0.0553284 20.9042Z",fill:"black"}))),(0,e.createElement)(a.TextControl,{type:"number",step:1,label:(0,l.__)("TopL","cozy-addons"),value:r.layout.borderRadius.topL,onChange:e=>x("topL",e)}),(0,e.createElement)(a.TextControl,{type:"number",step:1,label:(0,l.__)("TopR","cozy-addons"),value:r.layout.borderRadius.topR,onChange:e=>x("topR",e)}),(0,e.createElement)(a.TextControl,{type:"number",step:1,label:(0,l.__)("BottomL","cozy-addons"),value:r.layout.borderRadius.bottomL,onChange:e=>x("bottomL",e)}),(0,e.createElement)(a.TextControl,{type:"number",step:1,label:(0,l.__)("BottomR","cozy-addons"),value:r.layout.borderRadius.bottomR,onChange:e=>x("bottomR",e)}))),(0,e.createElement)(o.PanelColorSettings,{className:"cozy-color-control",title:(0,l.__)("Color Settings","cozy-addons"),colorSettings:[{value:r.layout.styles.bgColor,onChange:e=>s({...r,layout:{...r.layout,styles:{...r.layout.styles,bgColor:e}}}),label:(0,l.__)("Background Color","cozy-addons")},{value:r.layout.styles.color,onChange:e=>s({...r,layout:{...r.layout,styles:{...r.layout.styles,color:e}}}),label:(0,l.__)("Color","cozy-addons")}]})),r.time.enabled&&(0,e.createElement)(a.PanelBody,{title:(0,l.__)("Time Styles","cozy-addons"),initialOpen:!1},(0,e.createElement)(a.BaseControl,null,(0,e.createElement)(a.BaseControl.VisualLabel,null,(0,l.__)("Time Padding","cozy-addons")),(0,e.createElement)("div",{style:{display:"flex",gap:"5px",height:"50px",position:"relative"}},(0,e.createElement)("button",{className:"cozy-link-styles "+(b?"":"cozy-attr-link-disabled"),onClick:()=>g(!b)},(0,e.createElement)("svg",{width:"10",height:"16",viewBox:"0 0 15 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("path",{d:"M6.18931 9.59516L6.18931 19.3466H8.70581V9.59516H6.18931Z",fill:"black"}),(0,e.createElement)("path",{d:"M0.0553284 7.88029L0.0553284 13.2126H2.53381L2.53381 7.88029C2.82201 4.53678 5.6079 3.53757 6.94321 3.4415C10.9203 3.15534 12.1019 6.00678 12.3901 7.88029V13.2126L14.8398 13.2126V7.88029C14.1251 1.90809 9.2776 0.780139 6.94321 0.962687C1.84791 1.30857 0.0553284 5.92031 0.0553284 7.88029Z",fill:"black"}),(0,e.createElement)("path",{d:"M0.0553284 20.9042L0.0553284 15.5718H2.53381L2.53381 20.9042C2.82201 24.2477 5.6079 25.2469 6.94321 25.343C10.9203 25.6291 12.1019 22.7777 12.3901 20.9042V15.5718L14.8398 15.5718V20.9042C14.1251 26.8764 9.2776 28.0043 6.94321 27.8218C1.84791 27.4759 0.0553284 22.8641 0.0553284 20.9042Z",fill:"black"}))),(0,e.createElement)(a.TextControl,{type:"number",step:1,value:r.time.padding.top,label:(0,l.__)("Top","cozy-addons"),onChange:e=>v("top",e)}),(0,e.createElement)(a.TextControl,{type:"number",step:1,label:(0,l.__)("Right","cozy-addons"),value:r.time.padding.right,onChange:e=>v("right",e)}),(0,e.createElement)(a.TextControl,{type:"number",step:1,label:(0,l.__)("Bottom","cozy-addons"),value:r.time.padding.bottom,onChange:e=>v("bottom",e)}),(0,e.createElement)(a.TextControl,{type:"number",step:1,label:(0,l.__)("Left","cozy-addons"),value:r.time.padding.left,onChange:e=>v("left",e)}))),(0,e.createElement)(a.RangeControl,{label:(0,l.__)("Font Size","cozy-addons"),min:5,max:50,step:1,value:r.time.styles.fontSize,onChange:e=>s({...r,time:{...r.time,styles:{...r.time.styles,fontSize:e}}})}),(0,e.createElement)(a.SelectControl,{label:(0,l.__)("Font Weight","cozy-addons"),options:[{label:(0,l.__)("Thin","cozy-addons"),value:100},{label:(0,l.__)("Extra Light","cozy-addons"),value:200},{label:(0,l.__)("Light","cozy-addons"),value:300},{label:(0,l.__)("Normal","cozy-addons"),value:400},{label:(0,l.__)("Medium","cozy-addons"),value:500},{label:(0,l.__)("Semi Bold","cozy-addons"),value:600},{label:(0,l.__)("Bold","cozy-addons"),value:700},{label:(0,l.__)("Extra Bold","cozy-addons"),value:800}],value:r.time.styles.fontWeight,onChange:e=>s({...r,time:{...r.time,styles:{...r.time.styles,fontWeight:e}}})}),(0,e.createElement)(a.BaseControl,null,(0,e.createElement)(a.BaseControl.VisualLabel,null,(0,l.__)("Border Radius","cozy-addons")),(0,e.createElement)("div",{style:{display:"flex",gap:"5px",height:"50px",position:"relative"}},(0,e.createElement)("button",{className:"cozy-link-styles "+(_?"":"cozy-attr-link-disabled"),onClick:()=>f(!_)},(0,e.createElement)("svg",{width:"10",height:"16",viewBox:"0 0 15 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("path",{d:"M6.18931 9.59516L6.18931 19.3466H8.70581V9.59516H6.18931Z",fill:"black"}),(0,e.createElement)("path",{d:"M0.0553284 7.88029L0.0553284 13.2126H2.53381L2.53381 7.88029C2.82201 4.53678 5.6079 3.53757 6.94321 3.4415C10.9203 3.15534 12.1019 6.00678 12.3901 7.88029V13.2126L14.8398 13.2126V7.88029C14.1251 1.90809 9.2776 0.780139 6.94321 0.962687C1.84791 1.30857 0.0553284 5.92031 0.0553284 7.88029Z",fill:"black"}),(0,e.createElement)("path",{d:"M0.0553284 20.9042L0.0553284 15.5718H2.53381L2.53381 20.9042C2.82201 24.2477 5.6079 25.2469 6.94321 25.343C10.9203 25.6291 12.1019 22.7777 12.3901 20.9042V15.5718L14.8398 15.5718V20.9042C14.1251 26.8764 9.2776 28.0043 6.94321 27.8218C1.84791 27.4759 0.0553284 22.8641 0.0553284 20.9042Z",fill:"black"}))),(0,e.createElement)(a.TextControl,{type:"number",step:1,label:(0,l.__)("TopL","cozy-addons"),value:r.time.borderRadius.topL,onChange:e=>z("topL",e)}),(0,e.createElement)(a.TextControl,{type:"number",step:1,label:(0,l.__)("TopR","cozy-addons"),value:r.time.borderRadius.topR,onChange:e=>z("topR",e)}),(0,e.createElement)(a.TextControl,{type:"number",step:1,label:(0,l.__)("BottomL","cozy-addons"),value:r.time.borderRadius.bottomL,onChange:e=>z("bottomL",e)}),(0,e.createElement)(a.TextControl,{type:"number",step:1,label:(0,l.__)("BottomR","cozy-addons"),value:r.time.borderRadius.bottomR,onChange:e=>z("bottomR",e)}))),(0,e.createElement)(o.PanelColorSettings,{className:"cozy-color-control",title:(0,l.__)("Color Settings","cozy-addons"),colorSettings:[{value:r.time.styles.bgColor,onChange:e=>s({...r,time:{...r.time,styles:{...r.time.styles,bgColor:e}}}),label:(0,l.__)("Background Color","cozy-addons")},{value:r.time.styles.color,onChange:e=>s({...r,time:{...r.time,styles:{...r.time.styles,color:e}}}),label:(0,l.__)("Color","cozy-addons")}]}))))},save:function(t){const{attributes:l}=t,o=`cozyBlock_${l.blockClientId.replace(/-/gi,"_")}`,a=`\n    #${o} {\n      padding: ${l.layout.padding.top}px ${l.layout.padding.right}px ${l.layout.padding.bottom}px ${l.layout.padding.left}px;\n      display: ${l.layout.display};\n      gap: ${l.layout.gap}px;\n      text-align: ${l.layout.textAlign};\n      font-family: ${l.layout.styles.fontFamily}, "sans-serif";\n      font-size: ${l.layout.styles.fontSize}px;\n      font-weight: ${l.layout.styles.fontWeight};\n      color: ${l.layout.styles.color};\n      background-color: ${l.layout.styles.bgColor};\n      border-radius: ${l.layout.borderRadius.topL}px ${l.layout.borderRadius.topR}px ${l.layout.borderRadius.bottomR}px ${l.layout.borderRadius.bottomL}px;\n    }\n\n    #${o}.block .cozy-date {\n      margin-bottom: ${l.layout.marginBottom}px;\n    }\n\n    #${o} .cozy-time {\n      padding: ${l.time.padding.top}px ${l.time.padding.right}px ${l.time.padding.bottom}px ${l.time.padding.left}px;\n      font-size: ${l.time.styles.fontSize}px;\n      font-weight: ${l.time.styles.fontWeight};\n      color: ${l.time.styles.color};\n      background-color: ${l.time.styles.bgColor};\n      border-radius: ${l.time.borderRadius.topL}px ${l.time.borderRadius.topR}px ${l.time.borderRadius.bottomR}px ${l.time.borderRadius.bottomL}px;\n    }\n  `;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("style",{dangerouslySetInnerHTML:{__html:a}}),(0,e.createElement)("div",{className:`cozy-block-date-time ${l.layout.display}`,id:o},l.date.enabled&&(0,e.createElement)("div",{className:"cozy-date"}),l.time.enabled&&(0,e.createElement)("div",{className:"cozy-time"})))}})}},l={};function o(e){var a=l[e];if(void 0!==a)return a.exports;var n=l[e]={exports:{}};return t[e](n,n.exports,o),n.exports}o.m=t,e=[],o.O=(t,l,a,n)=>{if(!l){var r=1/0;for(c=0;c<e.length;c++){for(var[l,a,n]=e[c],d=!0,i=0;i<l.length;i++)(!1&n||r>=n)&&Object.keys(o.O).every((e=>o.O[e](l[i])))?l.splice(i--,1):(d=!1,n<r&&(r=n));if(d){e.splice(c--,1);var s=a();void 0!==s&&(t=s)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[l,a,n]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};o.O.j=t=>0===e[t];var t=(t,l)=>{var a,n,[r,d,i]=l,s=0;if(r.some((t=>0!==e[t]))){for(a in d)o.o(d,a)&&(o.m[a]=d[a]);if(i)var c=i(o)}for(t&&t(l);s<r.length;s++)n=r[s],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(c)},l=globalThis.webpackChunkcurrent_time=globalThis.webpackChunkcurrent_time||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var a=o.O(void 0,[431],(()=>o(878)));a=o.O(a)})();