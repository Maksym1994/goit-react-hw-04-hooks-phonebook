(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactForm_form__1AJR2",input:"ContactForm_input__19YBo",labelTitle:"ContactForm_labelTitle__1Ou8z",button:"ContactForm_button__3vNrN"}},,,function(t,e,n){t.exports={itemText:"ContactList_itemText__3NX-i",contactItem:"ContactList_contactItem__3zPGg",itemName:"ContactList_itemName__2DAln",deleteBtn:"ContactList_deleteBtn__HR1s4"}},,,function(t,e,n){t.exports={titleFilter:"Filter_titleFilter__27d88",inputFilter:"Filter_inputFilter__VRs1_"}},function(t,e,n){t.exports={title:"App_title__342bs"}},,,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),i=n(10),r=n.n(i),s=(n(16),n(11)),o=n(3),l=n(2),u=n.n(l),m=n(0);var b=function(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(o.a)(n,2),i=c[0],r=c[1],s=Object(a.useState)(""),l=Object(o.a)(s,2),b=l[0],j=l[1],d=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":r(a);break;case"number":j(a)}},h=function(){r(""),j("")};return Object(m.jsxs)("form",{className:u.a.form,onSubmit:function(t){t.preventDefault(),e(i,b),h()},children:[Object(m.jsxs)("label",{children:[Object(m.jsx)("h2",{className:u.a.labelTitle,children:"Name"}),Object(m.jsx)("input",{className:u.a.input,value:i,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:d})]}),Object(m.jsxs)("label",{children:[Object(m.jsx)("h2",{className:u.a.labelTitle,children:"Number"}),Object(m.jsx)("input",{className:u.a.input,value:b,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:d})]}),Object(m.jsx)("button",{className:u.a.button,type:"submit",children:"Add to contacts"})]})},j=n(5),d=n.n(j),h=function(t){var e=t.contacts,n=t.deleteContacts;return Object(m.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(m.jsxs)("li",{className:d.a.contactItem,children:[Object(m.jsxs)("p",{className:d.a.itemName,children:["Name: ",a]}),Object(m.jsxs)("p",{className:d.a.itemName,children:["Number: ",c]}),Object(m.jsx)("button",{className:d.a.deleteBtn,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})},f=n(8),O=n.n(f),p=function(t){var e=t.filter,n=t.onChange;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h3",{className:O.a.titleFilter,children:"Find contacts by name"}),Object(m.jsx)("input",{className:O.a.inputFilter,type:"text",value:e,onChange:n})]})},_=n(20),x=n(9),N=n.n(x);var C=function(){var t=Object(a.useState)((function(){var t;return null!==(t=JSON.parse(localStorage.getItem("Contacts")))&&void 0!==t?t:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]})),e=Object(o.a)(t,2),n=e[0],c=e[1],i=Object(a.useState)(""),r=Object(o.a)(i,2),l=r[0],u=r[1];return Object(a.useEffect)((function(){localStorage.setItem("Contacts",JSON.stringify(n))}),[n]),Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{className:N.a.title,children:"Phonebook"}),Object(m.jsx)(b,{onSubmit:function(t,e){if(n.some((function(e){return e.name===t})))alert("".concat(t," is already in contacts."));else{var a={name:t,number:e,id:Object(_.a)()};c((function(t){return[a].concat(Object(s.a)(t))}))}}}),n.length>1&&Object(m.jsx)(p,{filter:l,onChange:function(t){u(t.target.value)}}),Object(m.jsx)("h2",{className:N.a.title,children:"Contacts"}),Object(m.jsx)(h,{contacts:n.filter((function(t){return t.name.toLowerCase().includes(l.toLowerCase())})),deleteContacts:function(t){c((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.38bc614c.chunk.js.map