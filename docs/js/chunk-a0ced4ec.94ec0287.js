(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a0ced4ec"],{"165b":function(e,t,r){"use strict";var a=r("e3bf"),s=r("f8dc"),n=r("6d8c"),i=r("7623"),o=r("89cb"),p=r("0c82"),c=r("ba34"),l=r("944c"),f=r("aab3"),u=r("19da"),m=r("68ea"),h=r("6711"),d=[],_=d.sort,v=p((function(){d.sort(void 0)})),k=p((function(){d.sort(null)})),g=l("sort"),w=!p((function(){if(m)return m<70;if(!(f&&f>3)){if(u)return!0;if(h)return h<603;var e,t,r,a,s="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(a=0;a<47;a++)d.push({k:t+a,v:r})}for(d.sort((function(e,t){return t.v-e.v})),a=0;a<d.length;a++)t=d[a].k.charAt(0),s.charAt(s.length-1)!==t&&(s+=t);return"DGBEFHACIJK"!==s}})),x=v||!k||!g||!w,y=function(e){return function(t,r){return void 0===r?-1:void 0===t?1:void 0!==e?+e(t,r)||0:o(t)>o(r)?1:-1}};a({target:"Array",proto:!0,forced:x},{sort:function(e){void 0!==e&&s(e);var t=n(this);if(w)return void 0===e?_.call(t):_.call(t,e);var r,a,o=[],p=i(t.length);for(a=0;a<p;a++)a in t&&o.push(t[a]);o=c(o,y(e)),r=o.length,a=0;while(a<r)t[a]=o[a++];while(a<p)delete t[a++];return t}})},"16ee":function(e,t,r){var a=r("2235"),s=r("4f3a"),n=r("7eb2"),i=n("species");e.exports=function(e){var t;return s(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!s(t.prototype)?a(t)&&(t=t[i],null===t&&(t=void 0)):t=void 0),void 0===t?Array:t}},"19da":function(e,t,r){var a=r("a3d7");e.exports=/MSIE|Trident/.test(a)},2308:function(e,t,r){},"27da":function(e,t,r){"use strict";var a=r("e3bf"),s=r("916f"),n=r("fe50"),i=r("bcec"),o=r("0c82"),p=1..toFixed,c=Math.floor,l=function(e,t,r){return 0===t?r:t%2===1?l(e,t-1,r*e):l(e*e,t/2,r)},f=function(e){var t=0,r=e;while(r>=4096)t+=12,r/=4096;while(r>=2)t+=1,r/=2;return t},u=function(e,t,r){var a=-1,s=r;while(++a<6)s+=t*e[a],e[a]=s%1e7,s=c(s/1e7)},m=function(e,t){var r=6,a=0;while(--r>=0)a+=e[r],e[r]=c(a/t),a=a%t*1e7},h=function(e){var t=6,r="";while(--t>=0)if(""!==r||0===t||0!==e[t]){var a=String(e[t]);r=""===r?a:r+i.call("0",7-a.length)+a}return r},d=p&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){p.call({})}));a({target:"Number",proto:!0,forced:d},{toFixed:function(e){var t,r,a,o,p=n(this),c=s(e),d=[0,0,0,0,0,0],_="",v="0";if(c<0||c>20)throw RangeError("Incorrect fraction digits");if(p!=p)return"NaN";if(p<=-1e21||p>=1e21)return String(p);if(p<0&&(_="-",p=-p),p>1e-21)if(t=f(p*l(2,69,1))-69,r=t<0?p*l(2,-t,1):p/l(2,t,1),r*=4503599627370496,t=52-t,t>0){u(d,0,r),a=c;while(a>=7)u(d,1e7,0),a-=7;u(d,l(10,a,1),0),a=t-1;while(a>=23)m(d,1<<23),a-=23;m(d,1<<a),u(d,1,1),m(d,2),v=h(d)}else u(d,0,r),u(d,1<<-t,0),v=h(d)+i.call("0",c);return c>0?(o=v.length,v=_+(o<=c?"0."+i.call("0",c-o)+v:v.slice(0,o-c)+"."+v.slice(o-c))):v=_+v,v}})},"35d3":function(e,t,r){"use strict";var a=r("aacd").forEach,s=r("944c"),n=s("forEach");e.exports=n?[].forEach:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}},"4f3a":function(e,t,r){var a=r("4893");e.exports=Array.isArray||function(e){return"Array"==a(e)}},"5b3c":function(e,t,r){var a=r("16ee");e.exports=function(e,t){return new(a(e))(0===t?0:t)}},6711:function(e,t,r){var a=r("a3d7"),s=a.match(/AppleWebKit\/(\d+)\./);e.exports=!!s&&+s[1]},"944c":function(e,t,r){"use strict";var a=r("0c82");e.exports=function(e,t){var r=[][e];return!!r&&a((function(){r.call(null,t||function(){throw 1},1)}))}},"99e7":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e._m(0),r("div",{staticClass:"content"},[r("div",{staticClass:"metric"},[e._v(" 视角 "),r("a-select",{staticStyle:{width:"180px","font-size":"14px","margin-left":"10px"},attrs:{"default-value":"MAE3"},on:{change:e.metricsChange}},[r("a-select-option",{attrs:{value:"MAE3"}},[e._v(" MAE @ 3 STEP ")]),r("a-select-option",{attrs:{value:"RMSE3"}},[e._v(" RMSE @ 3 STEP ")])],1)],1),r("div",{staticClass:"model-ranking"},[r("table",[r("thead",{staticStyle:{"font-size":"16px"}},[r("tr",[r("th",[e._v("排名")]),r("th",[e._v("模型")]),r("th",[e._v("论文")]),r("th",[e._v("年份")]),r("th",[e._v("1 STEP"),r("a-button",{staticStyle:{color:"white"},attrs:{type:"link",icon:"caret-down",size:"small"},on:{click:e.sortBy1}})],1),r("th",[e._v("2 STEP"),r("a-button",{staticStyle:{color:"white"},attrs:{type:"link",icon:"caret-down",size:"small"},on:{click:e.sortBy2}})],1),r("th",[e._v("3 STEP"),r("a-button",{staticStyle:{color:"white"},attrs:{type:"link",icon:"caret-down",size:"small"},on:{click:e.sortBy3}})],1)])]),r("tbody",e._l(e.rankingData,(function(t){return r("tr",{key:t.model},[r("td",{attrs:{width:"6%"}},[e._v(e._s(t.rank))]),r("td",{attrs:{width:"8%"}},[r("a",{attrs:{href:t.mlink,target:"_blank"}},[e._v(e._s(t.model))])]),r("td",{attrs:{width:"39%"}},[r("a",{staticClass:"paper",attrs:{href:t.plink,target:"_blank"}},[e._v(e._s(t.paper))])]),r("td",{attrs:{width:"5%"}},[e._v(e._s(t.year))]),r("td",{attrs:{width:"14%"}},[e._v(e._s(t.step1))]),r("td",{attrs:{width:"14%"}},[e._v(e._s(t.step2))]),r("td",{attrs:{width:"14%"}},[e._v(e._s(t.step3))])])})),0)])]),r("br"),r("br")])])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("div",{staticStyle:{"padding-top":"20px",color:"white"}},[r("p",{staticStyle:{margin:"20px 0 30px 130px","font-size":"60px"}},[e._v("NYCBike20140409")])])])}],n=(r("165b"),r("cd8f"),r("27da"),[{rank:0,model:"MTGNN",mlink:"#",paper:"Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks",plink:"https://arxiv.org/abs/2005.11650",year:"2020",step1:2.143260479,step2:2.33476758,step3:2.464412689,mae_step1:2.143260479,mae_step2:2.33476758,mae_step3:2.464412689,rmse_step1:4.542957306,rmse_step2:5.211518288,rmse_step3:5.602479458},{rank:0,model:"AE",mlink:"#",paper:"Generalized Autoencoder: A Neural Network Framework for Dimensionality Reduction",plink:"https://ieeexplore.ieee.org/document/6910027",year:"2014",step1:5.878780842,step2:6.115393639,step3:6.232180119,mae_step1:5.878780842,mae_step2:6.115393639,mae_step3:6.232180119,rmse_step1:8.191333771,rmse_step2:8.632707596,rmse_step3:8.908828735},{rank:0,model:"AGCRN",mlink:"#",paper:"Adaptive Graph Convolutional Recurrent Network for Traffic Forecasting",plink:"https://arxiv.org/abs/2007.02842",year:"2018",step1:2.247055292,step2:2.46105361,step3:2.576159954,mae_step1:2.247055292,mae_step2:2.46105361,mae_step3:2.576159954,rmse_step1:4.83513546,rmse_step2:5.48606205,rmse_step3:5.808804989},{rank:0,model:"GWNET",mlink:"#",paper:"Graph Wavenet for Deep Spatial-Temporal Graph Modeling",plink:"https://arxiv.org/abs/1906.00121",year:"2019",step1:2.31951189,step2:2.483286619,step3:2.609655619,mae_step1:2.31951189,mae_step2:2.483286619,mae_step3:2.609655619,rmse_step1:4.968844414,rmse_step2:5.463748932,rmse_step3:5.69130373},{rank:0,model:"DCRNN",mlink:"#",paper:"Diffusion convolutional recurrent neural network: Data-driven traffic forecasting",plink:"https://arxiv.org/abs/1707.01926",year:"2018",step1:2.218071461,step2:2.431840897,step3:2.571331024,mae_step1:2.218071461,mae_step2:2.431840897,mae_step3:2.571331024,rmse_step1:4.747207642,rmse_step2:5.564044476,rmse_step3:5.946798801},{rank:0,model:"STGCN",mlink:"#",paper:"Spatio-temporal graph convolutional networks: A deep learning framework for traffic forecasting",plink:"https://www.ijcai.org/Proceedings/2018/0505",year:"2018",step1:2.318903208,step2:2.494077921,step3:2.593971252,mae_step1:2.318903208,mae_step2:2.494077921,mae_step3:2.593971252,rmse_step1:5.284862995,rmse_step2:5.865840435,rmse_step3:6.140215874},{rank:0,model:"STResNet",mlink:"#",paper:"Deep Spatio-Temporal Residual Networks for Citywide Crowd Flows Prediction",plink:"https://arxiv.org/abs/1610.00081",year:"2017",step1:2.438241482,step2:2.562749386,step3:2.651359797,mae_step1:2.438241482,mae_step2:2.562749386,mae_step3:2.651359797,rmse_step1:5.141583443,rmse_step2:5.5783391,rmse_step3:5.84324789},{rank:0,model:"ACFM",mlink:"#",paper:"Attentive Crowd Flow Machines",plink:"https://dl.acm.org/doi/10.1145/3240508.3240681",year:"2018",step1:2.713757277,step2:2.86116457,step3:2.966455936,mae_step1:2.713757277,mae_step2:2.86116457,mae_step3:2.966455936,rmse_step1:5.243505478,rmse_step2:5.677444458,rmse_step3:5.954552174},{rank:0,model:"Seq2Seq",mlink:"#",paper:"Sequence to Sequence Learning with Neural Networks",plink:"https://papers.nips.cc/paper/2014/hash/a14ac55a4f27472c5d894ec1c3c743d2-Abstract.html",year:"2014",step1:2.503537655,step2:2.579678774,step3:2.744087696,mae_step1:2.503537655,mae_step2:2.579678774,mae_step3:2.744087696,rmse_step1:5.462153912,rmse_step2:5.850692272,rmse_step3:6.408093452},{rank:0,model:"STG2Seq",mlink:"#",paper:"STG2Seq: Spatial-temporal Graph to Sequence Model for Multi-step Passenger Demand Forecasting",plink:"https://arxiv.org/abs/1905.10069",year:"2019",step1:2.541454792,step2:2.709347248,step3:2.966525555,mae_step1:2.541454792,mae_step2:2.709347248,mae_step3:2.966525555,rmse_step1:5.286739349,rmse_step2:5.987214565,rmse_step3:6.638397217},{rank:0,model:"ASTGCN",mlink:"#",paper:"Attention based spatial-temporal graph convolutional networks for traffic flow forecasting",plink:"https://ojs.aaai.org//index.php/AAAI/article/view/3881",year:"2019",step1:3.250409603,step2:3.110226393,step3:3.376706362,mae_step1:3.250409603,mae_step2:3.110226393,mae_step3:3.376706362,rmse_step1:7.681100368,rmse_step2:7.22376442,rmse_step3:7.944788456},{rank:0,model:"TGCN",mlink:"#",paper:"T-gcn: A temporal graph convolutional network for traffic prediction",plink:"https://ieeexplore.ieee.org/abstract/document/8809901/",year:"2020",step1:3.099831343,step2:3.339026928,step3:3.564884663,mae_step1:3.099831343,mae_step2:3.339026928,mae_step3:3.564884663,rmse_step1:6.727505684,rmse_step2:7.477781296,rmse_step3:7.925302505}]),i={data:function(){return{NYCBike20140409_origin:n,rankingData:[],metrics:"MAE3"}},mounted:function(){this.rankingData=n,this.metricsChange("MAE3")},methods:{sortBy1:function(){this.rankingData.sort((function(e,t){return e.step1-t.step1}));var e=0;this.rankingData.forEach((function(t){e+=1,t.rank=e}))},sortBy2:function(){this.rankingData.sort((function(e,t){return e.step2-t.step2}));var e=0;this.rankingData.forEach((function(t){e+=1,t.rank=e}))},sortBy3:function(){this.rankingData.sort((function(e,t){return e.step3-t.step3}));var e=0;this.rankingData.forEach((function(t){e+=1,t.rank=e}))},metricsChange:function(e){"MAE3"==e?this.rankingData.forEach((function(e){e.step1=e.mae_step1.toFixed(5),e.step2=e.mae_step2.toFixed(5),e.step3=e.mae_step3.toFixed(5)})):"RMSE3"==e&&this.rankingData.forEach((function(e){e.step1=e.rmse_step1.toFixed(5),e.step2=e.rmse_step2.toFixed(5),e.step3=e.rmse_step3.toFixed(5)})),this.sortBy3()}}},o=i,p=(r("e526"),r("cba8")),c=Object(p["a"])(o,a,s,!1,null,"ae115404",null);t["default"]=c.exports},aab3:function(e,t,r){var a=r("a3d7"),s=a.match(/firefox\/(\d+)/i);e.exports=!!s&&+s[1]},aacd:function(e,t,r){var a=r("98a1"),s=r("8c7a"),n=r("6d8c"),i=r("7623"),o=r("5b3c"),p=[].push,c=function(e){var t=1==e,r=2==e,c=3==e,l=4==e,f=6==e,u=7==e,m=5==e||f;return function(h,d,_,v){for(var k,g,w=n(h),x=s(w),y=a(d,_,3),b=i(x.length),S=0,E=v||o,A=t?E(h,b):r||u?E(h,0):void 0;b>S;S++)if((m||S in x)&&(k=x[S],g=y(k,S,w),e))if(t)A[S]=g;else if(g)switch(e){case 3:return!0;case 5:return k;case 6:return S;case 2:p.call(A,k)}else switch(e){case 4:return!1;case 7:p.call(A,k)}return f?-1:c||l?l:A}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterReject:c(7)}},ba34:function(e,t){var r=Math.floor,a=function(e,t){var i=e.length,o=r(i/2);return i<8?s(e,t):n(a(e.slice(0,o),t),a(e.slice(o),t),t)},s=function(e,t){var r,a,s=e.length,n=1;while(n<s){a=n,r=e[n];while(a&&t(e[a-1],r)>0)e[a]=e[--a];a!==n++&&(e[a]=r)}return e},n=function(e,t,r){var a=e.length,s=t.length,n=0,i=0,o=[];while(n<a||i<s)n<a&&i<s?o.push(r(e[n],t[i])<=0?e[n++]:t[i++]):o.push(n<a?e[n++]:t[i++]);return o};e.exports=a},bcec:function(e,t,r){"use strict";var a=r("916f"),s=r("89cb"),n=r("ff7a");e.exports=function(e){var t=s(n(this)),r="",i=a(e);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(r+=t);return r}},cd8f:function(e,t,r){var a=r("6c1a"),s=r("3e36"),n=r("35d3"),i=r("6e1f");for(var o in s){var p=a[o],c=p&&p.prototype;if(c&&c.forEach!==n)try{i(c,"forEach",n)}catch(l){c.forEach=n}}},e526:function(e,t,r){"use strict";r("2308")},fe50:function(e,t){var r=1..valueOf;e.exports=function(e){return r.call(e)}}}]);
//# sourceMappingURL=chunk-a0ced4ec.94ec0287.js.map