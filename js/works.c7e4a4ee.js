(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["works"],{1822:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"workcontent"}},[t._m(0),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},t._l(t.works,(function(t){return r("div",{key:t._id,staticClass:"col-6 col-md-4 col-lg-3"},[r("WorkCard",{attrs:{work:t}})],1)})),0),t._m(1)])])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"title",attrs:{id:"title"}},[r("h1",{staticClass:"text-center"},[t._v("Illustrations")]),r("h5",{staticClass:"text-center title_style"},[t._v("A selection of my illustration and design work.")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col text-center"},[r("p",{staticStyle:{color:"#555760","margin-top":"5.5rem","font-size":"12%"}},[t._v("© 2021 wundo studio. All Rights Reserved")])])])}],o=r("1da1"),c=(r("96cf"),r("d81d"),r("99af"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card-group",[r("b-card",{staticClass:"work-card mt-5 mr-2 text-dark",attrs:{overlay:"","img-top":"","img-src":t.work.image,"bg-variant":"default"}})],1)}),i=[],s={name:"WorkCard",props:{work:{type:Object,required:!0}}},l=s,u=r("2877"),d=Object(u["a"])(l,c,i,!1,null,null,null),f=d.exports,p={data:function(){return{works:[]}},components:{WorkCard:f},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.get("/works");case 3:r=e.sent,n=r.data,t.works=n.result.map((function(t){return t.image="".concat("https://wundo-studio.herokuapp.com","/files/").concat(t.image),t})),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"Wrong",text:"取得作品失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},m=p,v=(r("9e28"),Object(u["a"])(m,n,a,!1,null,"28aa7fa6",null));e["default"]=v.exports},"3c9d":function(t,e,r){},"99af":function(t,e,r){"use strict";var n=r("23e7"),a=r("d039"),o=r("e8b5"),c=r("861d"),i=r("7b0b"),s=r("50c4"),l=r("8418"),u=r("65f0"),d=r("1dde"),f=r("b622"),p=r("2d00"),m=f("isConcatSpreadable"),v=9007199254740991,w="Maximum allowed index exceeded",h=p>=51||!a((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),g=d("concat"),k=function(t){if(!c(t))return!1;var e=t[m];return void 0!==e?!!e:o(t)},b=!h||!g;n({target:"Array",proto:!0,forced:b},{concat:function(t){var e,r,n,a,o,c=i(this),d=u(c,0),f=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?c:arguments[e],k(o)){if(a=s(o.length),f+a>v)throw TypeError(w);for(r=0;r<a;r++,f++)r in o&&l(d,f,o[r])}else{if(f>=v)throw TypeError(w);l(d,f++,o)}return d.length=f,d}})},"9e28":function(t,e,r){"use strict";r("3c9d")},d81d:function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").map,o=r("1dde"),c=o("map");n({target:"Array",proto:!0,forced:!c},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=works.c7e4a4ee.js.map