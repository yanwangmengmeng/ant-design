webpackJsonp([48],{1769:function(n,a,s){n.exports={badge:s(2047),basic:s(2048),dynamic:s(2049),type:s(2050)}},2047:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u901a\u5e38\u7528\u4e8e\u6d88\u606f\u63d0\u793a\u3002"]],"en-US":[["p","Usually used for messages remind."]]},meta:{order:3,title:{"zh-CN":"\u5e26\u5fbd\u6807\u7684\u5934\u50cf","en-US":"With Badge"},filename:"components/avatar/demo/badge.md",id:"components-avatar-demo-badge"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Avatar<span class="token punctuation">,</span> Badge <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginRight<span class="token punctuation">:</span> <span class="token number">24</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">count</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">dot</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(9),s(30));return n.createElement("div",null,n.createElement("span",{style:{marginRight:24}},n.createElement(a.Badge,{count:1},n.createElement(a.Avatar,{shape:"square",icon:"user"}))),n.createElement("span",null,n.createElement(a.Badge,{dot:!0},n.createElement(a.Avatar,{shape:"square",icon:"user"}))))}}},2048:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u5934\u50cf\u6709\u4e09\u79cd\u5c3a\u5bf8\uff0c\u4e24\u79cd\u5f62\u72b6\u53ef\u9009\u3002"]],"en-US":[["p","Three sizes and two shapes are available."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/avatar/demo/basic.md",id:"components-avatar-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Avatar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">64</span><span class="token punctuation">}</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">64</span><span class="token punctuation">}</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(9),s(30));return n.createElement("div",null,n.createElement("div",null,n.createElement(a.Avatar,{size:64,icon:"user"}),n.createElement(a.Avatar,{size:"large",icon:"user"}),n.createElement(a.Avatar,{icon:"user"}),n.createElement(a.Avatar,{size:"small",icon:"user"})),n.createElement("div",null,n.createElement(a.Avatar,{shape:"square",size:64,icon:"user"}),n.createElement(a.Avatar,{shape:"square",size:"large",icon:"user"}),n.createElement(a.Avatar,{shape:"square",icon:"user"}),n.createElement(a.Avatar,{shape:"square",size:"small",icon:"user"})))},style:"\n#components-avatar-demo-basic .ant-avatar {\n  margin-top: 16px;\n  margin-right: 16px;\n}\n"}},2049:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u5bf9\u4e8e\u5b57\u7b26\u578b\u7684\u5934\u50cf\uff0c\u5f53\u5b57\u7b26\u4e32\u8f83\u957f\u65f6\uff0c\u5b57\u4f53\u5927\u5c0f\u53ef\u4ee5\u6839\u636e\u5934\u50cf\u5bbd\u5ea6\u81ea\u52a8\u8c03\u6574\u3002"]],"en-US":[["p","For letter type Avatar, when the letters are too long to display, the font size can be automatically adjusted according to the width of the Avatar."]]},meta:{order:2,title:{"zh-CN":"\u81ea\u52a8\u8c03\u6574\u5b57\u7b26\u5927\u5c0f","en-US":"Autoset Font Size"},filename:"components/avatar/demo/dynamic.md",id:"components-avatar-demo-dynamic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Avatar<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> UserList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'U\'</span><span class="token punctuation">,</span> <span class="token string">\'Lucy\'</span><span class="token punctuation">,</span> <span class="token string">\'Tom\'</span><span class="token punctuation">,</span> <span class="token string">\'Edward\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> colorList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'#f56a00\'</span><span class="token punctuation">,</span> <span class="token string">\'#7265e6\'</span><span class="token punctuation">,</span> <span class="token string">\'#ffbf00\'</span><span class="token punctuation">,</span> <span class="token string">\'#00a2ae\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Autoset</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      user<span class="token punctuation">:</span> UserList<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      color<span class="token punctuation">:</span> colorList<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  changeUser <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> index <span class="token operator">=</span> UserList<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      user<span class="token punctuation">:</span> index <span class="token operator">&lt;</span> UserList<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">?</span> UserList<span class="token punctuation">[</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">:</span> UserList<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      color<span class="token punctuation">:</span> index <span class="token operator">&lt;</span> colorList<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">?</span> colorList<span class="token punctuation">[</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">:</span> colorList<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>color<span class="token punctuation">,</span> verticalAlign<span class="token punctuation">:</span> <span class="token string">\'middle\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>user<span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Avatar</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">16</span><span class="token punctuation">,</span> verticalAlign<span class="token punctuation">:</span> <span class="token string">\'middle\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>changeUser<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          Change\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Autoset</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(9),function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}()),t=s(30);var p=["U","Lucy","Tom","Edward"],e=["#f56a00","#7265e6","#ffbf00","#00a2ae"],o=function(s){function o(n){!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,o);var a=function(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,n));return a.changeUser=function(){var n=p.indexOf(a.state.user);a.setState({user:n<p.length-1?p[n+1]:p[0],color:n<e.length-1?e[n+1]:e[0]})},a.state={user:p[0],color:e[0]},a}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(o,n.Component),a(o,[{key:"render",value:function(){return n.createElement("div",null,n.createElement(t.Avatar,{style:{backgroundColor:this.state.color,verticalAlign:"middle"},size:"large"},this.state.user),n.createElement(t.Button,{size:"small",style:{marginLeft:16,verticalAlign:"middle"},onClick:this.changeUser},"Change"))}}]),o}();return n.createElement(o,null)}}},2050:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u652f\u6301\u4e09\u79cd\u7c7b\u578b\uff1a\u56fe\u7247\u3001Icon \u4ee5\u53ca\u5b57\u7b26\uff0c\u5176\u4e2d Icon \u548c\u5b57\u7b26\u578b\u53ef\u4ee5\u81ea\u5b9a\u4e49\u56fe\u6807\u989c\u8272\u53ca\u80cc\u666f\u8272\u3002"]],"en-US":[["p","Image, Icon and letter are supported, and the latter two kinds avatar can have custom colors and background colors."]]},meta:{order:1,title:{"zh-CN":"\u7c7b\u578b","en-US":"Type"},filename:"components/avatar/demo/type.md",id:"components-avatar-demo-type"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Avatar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span><span class="token punctuation">></span></span>U<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Avatar</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span><span class="token punctuation">></span></span>USER<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Avatar</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">:</span> <span class="token string">\'#f56a00\'</span><span class="token punctuation">,</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#fde3cf\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>U<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Avatar</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#87d068\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(9),s(30));return n.createElement("div",null,n.createElement(a.Avatar,{icon:"user"}),n.createElement(a.Avatar,null,"U"),n.createElement(a.Avatar,null,"USER"),n.createElement(a.Avatar,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),n.createElement(a.Avatar,{style:{color:"#f56a00",backgroundColor:"#fde3cf"}},"U"),n.createElement(a.Avatar,{style:{backgroundColor:"#87d068"},icon:"user"}))},style:"\n#components-avatar-demo-type .ant-avatar {\n  margin-top: 16px;\n  margin-right: 16px;\n}\n"}}});