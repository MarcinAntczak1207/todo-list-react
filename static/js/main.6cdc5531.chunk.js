(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),s=n(7),i=n.n(s),a=(n(13),n(8)),r=n(4),u=n(3),d=(n(14),n(0)),l=function(e){var t=e.addNewTask,n=Object(c.useState)(""),o=Object(u.a)(n,2),s=o[0],i=o[1];return Object(d.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),""!==s.trim()&&(t(s.trim()),i(""))},children:[Object(d.jsx)("input",{value:s,className:"form__input",placeholder:"Co jest do zrobienia?",autoFocus:!0,required:!0,onChange:function(e){return i(e.target.value)}}),Object(d.jsx)("button",{className:"form__button",children:"Dodaj zadanie"})]})},j=(n(16),function(e){var t=e.tasks,n=e.hideDone,c=e.removeTask,o=e.toggleTaskDone;return Object(d.jsx)("ul",{className:"tasks",children:t.map((function(e){return Object(d.jsxs)("li",{className:"tasks__item".concat(e.done&&n?" tasks__item--hidden":""),children:[Object(d.jsx)("button",{className:"tasks__button tasks__button--toggleDone",onClick:function(){return o(e.id)},children:e.done?"\u2714":""}),Object(d.jsx)("span",{className:"tasks__content".concat(e.done?" tasks__content--done":""),children:e.content}),Object(d.jsx)("button",{className:"tasks__button tasks__button--remove",onClick:function(){return c(e.id)},children:"\ud83d\uddd1\ufe0f"})]},e.id)}))})}),b=(n(17),function(e){var t=e.tasks,n=e.hideDone,c=e.toggleHideDone,o=e.setAllDone;return t.length>0&&Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{onClick:c,className:"section__buttons",children:n?"Poka\u017c uko\u0144czone":"Ukryj uko\u0144czone"}),Object(d.jsx)("button",{onClick:o,className:"section__buttons",disabled:t.every((function(e){return e.done})),children:"Uko\u0144cz wszystkie"})]})}),f=(n(18),function(e){var t=e.title,n=e.body,c=e.extraHeaderContent;return Object(d.jsxs)("section",{className:"section",children:[Object(d.jsxs)("div",{className:"section__container",children:[Object(d.jsx)("h2",{className:"section__header",children:t}),c]}),Object(d.jsx)("div",{className:"section__item",children:n})]})}),h=(n(19),function(e){var t=e.title,n=e.body;return Object(d.jsxs)("section",{className:"section",children:[Object(d.jsx)("h2",{className:"section__header",children:t}),Object(d.jsx)("div",{className:"section__item",children:n})]})}),m=(n(20),function(e){var t=e.title;return Object(d.jsx)("h1",{className:"container__header",children:t})}),O=(n(21),function(e){var t=e.children;return Object(d.jsx)("main",{className:"container",children:t})});var _=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],o=t[1],s=Object(c.useState)([{id:1,content:"przej\u015b\u0107 na reacta",done:!1},{id:2,content:"zje\u015b\u0107 obiad",done:!0}]),i=Object(u.a)(s,2),_=i[0],k=i[1];return Object(d.jsxs)(O,{children:[Object(d.jsx)(m,{title:"Lista zada\u0144"}),Object(d.jsx)(h,{title:"Dodaj nowe zadanie",body:Object(d.jsx)(l,{addNewTask:function(e){k((function(t){return[].concat(Object(a.a)(t),[{content:e,done:!1,id:0===t.length?1:t[t.length-1].id+1}])}))}})}),Object(d.jsx)(f,{title:"Lista zada\u0144",body:Object(d.jsx)(j,{tasks:_,hideDone:n,removeTask:function(e){k((function(t){return t.filter((function(t){return t.id!==e}))}))},toggleTaskDone:function(e){k((function(t){return t.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{done:!t.done}):t}))}))}}),extraHeaderContent:Object(d.jsx)(b,{tasks:_,hideDone:n,toggleHideDone:function(){o((function(e){return!e}))},setAllDone:function(){k((function(e){return e.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{done:!0})}))}))}})})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(_,{})}),document.getElementById("root")),k()}],[[22,1,2]]]);
//# sourceMappingURL=main.6cdc5531.chunk.js.map