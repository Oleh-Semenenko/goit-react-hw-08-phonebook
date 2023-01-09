"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[82],{82:function(n,e,t){t.r(e),t.d(e,{default:function(){return W}});var r=t(791),i=t(434),o=t(880),u="NOT_FOUND";var a=function(n,e){return n===e};function c(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,i=void 0===r?a:r,o=t.maxSize,c=void 0===o?1:o,s=t.resultEqualityCheck,l=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,i=0;i<r;i++)if(!n(e[i],t[i]))return!1;return!0}}(i),f=1===c?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:u},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var i=t[r];return r>0&&(t.splice(r,1),t.unshift(i)),i.value}return u}return{get:r,put:function(e,i){r(e)===u&&(t.unshift({key:e,value:i}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(c,l);function p(){var e=f.get(arguments);if(e===u){if(e=n.apply(null,arguments),s){var t=f.getEntries(),r=t.find((function(n){return s(n.value,e)}));r&&(e=r.value)}f.put(arguments,e)}return e}return p.clearCache=function(){return f.clear()},p}function s(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function l(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var i=function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o,u=0,a={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(a=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=a,f=l.memoizeOptions,p=void 0===f?t:f,d=Array.isArray(p)?p:[p],h=s(r),x=n.apply(void 0,[function(){return u++,c.apply(null,arguments)}].concat(d)),m=n((function(){for(var n=[],e=h.length,t=0;t<e;t++)n.push(h[t].apply(null,arguments));return o=x.apply(null,n)}));return Object.assign(m,{resultFunc:c,memoizedResultFunc:x,dependencies:h,lastResult:function(){return o},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),m};return i}var f,p,d,h,x,m,v,g,y,b,Z,j,k,w=l(c),C=function(n){return n.contacts.items},z=function(n){return n.contacts.isLoading},A=function(n){return n.contacts.error},E=w([function(n){return n.filter},C],(function(n,e){var t=n.toLowerCase();return e.filter((function(n){return n.name.toLowerCase().includes(t)})).sort((function(n,e){return e.id-n.id}))})),S=t(439),q=t(168),F=t(934),I=F.Z.form(f||(f=(0,q.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 15px 20px;\n  border: 1px solid grey;\n"]))),N=F.Z.label(p||(p=(0,q.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n"]))),O=F.Z.input(d||(d=(0,q.Z)(["\n    width: 300px;\n"]))),_=F.Z.button(h||(h=(0,q.Z)(["\n  width: 150px;\n  border-radius: 16px;\n  padding: 6px 10px;\n  border: none;\n  cursor: pointer;\n  :hover {\n    background-color: #4287f5;\n    color: #fff;\n  }\n"]))),R=t(184),D=function(){var n=(0,r.useState)(""),e=(0,S.Z)(n,2),t=e[0],u=e[1],a=(0,r.useState)(""),c=(0,S.Z)(a,2),s=c[0],l=c[1],f=(0,i.v9)(C),p=(0,i.I0)(),d=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":u(r);break;case"number":l(r);break;default:return}};return(0,R.jsxs)(I,{onSubmit:function(n){n.preventDefault();var e=n.target,t=e.elements.name.value,r=e.elements.number.value;f.find((function(n){return n.name===t}))?alert("".concat(t," is already in contacts")):(p((0,o.uK)({name:t,number:r})),u(""),l(""),e.reset())},children:[(0,R.jsxs)(N,{children:[(0,R.jsx)("span",{children:"Name"}),(0,R.jsx)(O,{type:"text",name:"name",onChange:d,value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,R.jsxs)(N,{children:[(0,R.jsx)("span",{children:"Number"}),(0,R.jsx)(O,{type:"tel",name:"number",onChange:d,value:s,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,R.jsx)(_,{type:"submit",children:"Add contact"})]})},L=F.Z.li(x||(x=(0,q.Z)([""]))),K=F.Z.span(m||(m=(0,q.Z)(["\n  margin-right: 10px;\n  font-size: 20px;\n"]))),P=F.Z.button(v||(v=(0,q.Z)(["\n  border-radius: 10px;\n  border: none;\n  font-size: 16px;\n  padding: 4px 10px;\n  cursor: pointer;\n  :hover {\n    background-color: #4287f5;\n    color: #fff;\n  }\n"]))),T=function(n){var e=n.id,t=n.name,r=n.phone,u=(0,i.I0)();return(0,R.jsxs)(L,{children:[(0,R.jsxs)(K,{children:[t,":"]}),(0,R.jsx)(K,{children:r}),(0,R.jsx)(P,{type:"button",onClick:function(){return u((0,o.GK)(e))},children:"Delete"})]})},B=F.Z.ul(g||(g=(0,q.Z)(["\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding-left: 15px;\n\n"]))),G=function(){var n=(0,i.v9)(E);return(0,R.jsx)(B,{children:n.map((function(n){var e=n.id,t=n.name,r=n.phone;return(0,R.jsx)(T,{id:e,name:t,phone:r},e)}))})},J=F.Z.label(y||(y=(0,q.Z)(["\n    font-size: 20px;\n"]))),M=F.Z.input(b||(b=(0,q.Z)(["\n    margin-left: 10px;\n"]))),U=t(808),$=function(){var n=(0,i.I0)();return(0,R.jsxs)(J,{children:["Find contacts by name:",(0,R.jsx)(M,{type:"text",name:"filter",onChange:function(e){var t=e.currentTarget.value;n((0,U.h)(t))}})]})},H=F.Z.div(Z||(Z=(0,q.Z)(["\n  margin: 0 auto;\n  max-width: 500px;\n"]))),Q=F.Z.h1(j||(j=(0,q.Z)(["\n  text-align: center;\n"]))),V=F.Z.h2(k||(k=(0,q.Z)(["\n  font-size: 24px;\n"])));function W(){var n=(0,i.I0)(),e=(0,i.v9)(z),t=(0,i.v9)(A);return(0,r.useEffect)((function(){n((0,o.yF)())}),[n]),(0,R.jsxs)(H,{children:[(0,R.jsx)(Q,{children:"Phonebook"}),(0,R.jsx)(D,{}),(0,R.jsx)(V,{children:"Contacts"}),(0,R.jsx)($,{}),e&&!t&&(0,R.jsx)("p",{children:"Request in progress...."}),t&&(0,R.jsx)("p",{children:"Something goes wrong"}),(0,R.jsx)(G,{})]})}}}]);
//# sourceMappingURL=82.50b1eaa9.chunk.js.map