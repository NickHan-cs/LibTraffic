(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dcb112c0"],{"068e":function(t,a,e){"use strict";e("17ed")},"17ed":function(t,a,e){},8876:function(t,a,e){},b5f9:function(t,a,e){"use strict";e("8876")},cd95:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"content"},[e("div",{staticClass:"task-ranking"},[e("p",{staticClass:"task-name"},[t._v("交通状态预测")]),e("a-divider",{staticStyle:{margin:"10px 0","background-image":"linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6)"}}),e("rank-table-cn",{attrs:{rankdata:t.speed}}),e("br"),e("br"),e("p",{staticClass:"task-name"},[t._v("轨迹位置预测")]),e("a-divider",{staticStyle:{margin:"10px 0","background-image":"linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6)"}}),e("rank-table-cn",{attrs:{rankdata:t.location}}),e("br"),e("br")],1)])])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"header"},[e("div",{staticStyle:{"padding-top":"20px",color:"white"}},[e("p",{staticStyle:{margin:"20px 0 30px 130px","font-size":"60px"}},[t._v("排行榜")]),e("p",{staticStyle:{margin:"0px 0 20px 130px","font-size":"30px"}},[t._v(" LibTraffic在不同的数据集上测试了现有模型，"),e("br"),t._v(" 并展示了这些模型在每个数据集上的性能和排名。 ")])])])}],s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",[t._m(0),e("tbody",t._l(t.rankdata,(function(a){return e("tr",{key:a.dataset},[e("td",{attrs:{width:"15%"}},[e("a",{staticClass:"dataset",attrs:{href:a.datasetlink,target:"_blank"}},[t._v(t._s(a.dataset))])]),e("td",{attrs:{width:"15%"}},[e("a-icon",{staticStyle:{color:"gold","font-size":"20px"},attrs:{type:"crown"}}),e("a",{staticClass:"model",attrs:{href:a.mlink,target:"_blank"}},[t._v(t._s(a.best))])],1),e("td",{attrs:{width:"55%"}},[e("a",{staticClass:"paper",attrs:{href:a.plink,target:"_blank"}},[t._v(t._s(a.paper))])]),e("td",{attrs:{width:"15%"}},[e("a-button",{attrs:{type:"primary",shape:"round"},on:{click:function(e){return t.toDatasetRankingCN(a.dlink)}}},[t._v("See All")])],1)])})),0)])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",{staticStyle:{"font-size":"16px"}},[e("tr",[e("th",[t._v("数据集")]),e("th",[t._v("最佳方法")]),e("th",[t._v("论文")]),e("th",[t._v("模型比较")])])])}],l={name:"table",props:{rankdata:{type:Array,required:!0}},data:function(){return{}},methods:{toDatasetRankingCN:function(t){this.$router.push({name:t+"CN"})}}},d=l,o=(e("b5f9"),e("4ac2")),c=Object(o["a"])(d,s,n,!1,null,null,null),p=c.exports,f=[{dataset:"METR-LA",best:"MTGNN",paper:"Spatio-Temporal Graph Structure Learning for Traffic Forecasting",datasetlink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#metr-la",mlink:"#",plink:"https://arxiv.org/abs/2005.11650",dlink:"METR-LA"},{dataset:"PEMS-BAY",best:"GWNET",paper:"Graph Wavenet for Deep Spatial-Temporal Graph Modeling",datasetlink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pems-bay",mlink:"#",plink:"https://arxiv.org/abs/1906.00121",dlink:"PEMS-BAY"},{dataset:"PEMSD4",best:"GWNET",paper:"Graph Wavenet for Deep Spatial-Temporal Graph Modeling",datasetlink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd4",mlink:"#",plink:"https://arxiv.org/abs/1906.00121",dlink:"PEMSD4"},{dataset:"PEMSD8",best:"GWNET",paper:"Graph Wavenet for Deep Spatial-Temporal Graph Modeling",datasetlink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd8",mlink:"#",plink:"https://arxiv.org/abs/1906.00121",dlink:"PEMSD8"},{dataset:"T-Drive20150206",best:"MTGNN",paper:"Spatio-Temporal Graph Structure Learning for Traffic Forecasting",datasetlink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#t-drive20150206",mlink:"#",plink:"https://arxiv.org/abs/2005.11650",dlink:"T-Drive20150206"},{dataset:"TAXIBJ2015",best:"AGCRN",paper:"Adaptive Graph Convolutional Recurrent Network for Traffic Forecasting",datasetlink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#taxibj",mlink:"#",plink:"https://arxiv.org/abs/2007.02842",dlink:"TAXIBJ2015"},{dataset:"NYCTAXI202001-202003-3600",best:"DCRNN",paper:"Diffusion convolutional recurrent neural network: Data-driven traffic forecasting",datasetlink:"#",mlink:"#",plink:"https://arxiv.org/abs/1707.01926",dlink:"NYCTAXI202001-202003-3600"},{dataset:"NYCBike20140409",best:"MTGNN",paper:"Spatio-Temporal Graph Structure Learning for Traffic Forecasting",datasetlink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#nycbike20140409",mlink:"#",plink:"https://arxiv.org/abs/2005.11650",dlink:"NYCBike20140409"}],u=[{dataset:"foursqaure-tky",best:"DeepMove",paper:"DeepMove: Predicting Human Mobility with Attentional Recurrent Networks",datasetlink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#foursquare",mlink:"#",plink:"https://dl.acm.org/doi/10.1145/3178876.3186058",dlink:"foursqaure-tky"},{dataset:"Gowalla",best:"DeepMove",paper:"DeepMove: Predicting Human Mobility with Attentional Recurrent Networks",datasetlink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#gowalla",mlink:"#",plink:"https://dl.acm.org/doi/10.1145/3178876.3186058",dlink:"Gowalla"}],k={data:function(){return{speed:f,location:u}},components:{rankTableCn:p}},h=k,b=(e("068e"),Object(o["a"])(h,i,r,!1,null,"112c0ae9",null));a["default"]=b.exports}}]);
//# sourceMappingURL=chunk-dcb112c0.c35ef63b.js.map