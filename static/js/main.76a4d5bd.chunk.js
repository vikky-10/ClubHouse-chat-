(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{129:function(e,t,n){},316:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(28),s=n.n(r),i=(n(129),n(49)),u=n(6),o=n(30),h=n(29),b=(n(130),h.a.initializeApp({apiKey:"AIzaSyAlO3ckqcH5cdVbj0QpxchsRMWiZ_-Yhcg",authDomain:"clubhouse-22a0c.firebaseapp.com",projectId:"clubhouse-22a0c",storageBucket:"clubhouse-22a0c.appspot.com",messagingSenderId:"458800362352",appId:"1:458800362352:web:9c1f118e19f049ba4615b5"}).auth()),j=n(3),p=a.a.createContext();function d(e){var t=e.children,n=Object(c.useState)(!0),a=Object(o.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(),h=Object(o.a)(i,2),d=h[0],l=h[1],f=Object(u.f)();Object(c.useEffect)((function(){b.onAuthStateChanged((function(e){l(e),s(!1),f.push("/chats")}))}),[d,f]);var O={user:d};return Object(j.jsx)(p.Provider,{value:O,children:!r&&t})}var l=n(31),f=n.n(l),O=n(72),g=n(5),x=n.n(g),v=n(123);function m(){var e=Object(c.useRef)(!1),t=Object(c.useState)(!0),n=Object(o.a)(t,2),a=n[0],r=n[1],s=Object(c.useContext)(p).user,i=Object(u.f)();function h(){return(h=Object(O.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.signOut();case 2:i.push("/");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=Object(O.a)(f.a.mark((function e(t){var n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.blob();case 5:return c=e.sent,e.abrupt("return",new File([c],"test.jpg",{type:"image/jpeg"}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){if(!e.current){if(e.current=!0,!s||null===s)return void i.push("/");x.a.get("https://api.chatengine.io/users/me/",{headers:{"project-id":"720fdef6-0709-463c-9ba0-8976c8d3ca4b","user-name":s.email,"user-secret":s.uid}}).then((function(){return r(!1)})).catch((function(e){var t=new FormData;t.append("email",s.email),t.append("username",s.email),t.append("secret",s.uid),function(e){return d.apply(this,arguments)}(s.photoURL).then((function(e){t.append("avatar",e,e.name),x.a.post("https://api.chatengine.io/users/",t,{headers:{"private-key":"4e64699b-d30a-4198-b3d4-88622817001a"}}).then((function(){return r(!1)})).catch((function(e){return console.log("e",e.response)}))}))}))}}),[s,i]),!s||a?Object(j.jsx)("div",{}):Object(j.jsxs)("div",{className:"chats-page",children:[Object(j.jsxs)("div",{className:"nav-bar",children:[Object(j.jsx)("div",{className:"logo-tab",children:"ClubHouse"}),Object(j.jsx)("div",{onClick:function(){return h.apply(this,arguments)},className:"logout-tab",children:"Logout"})]}),Object(j.jsx)(v.d,{height:"calc(100vh - 66px)",projectID:"720fdef6-0709-463c-9ba0-8976c8d3ca4b",userName:s.email,userSecret:s.uid})]})}var w=n(318),k=n(319);function y(){return Object(j.jsx)("div",{id:"login-page",children:Object(j.jsxs)("div",{id:"login-card",children:[Object(j.jsx)("h2",{children:"Welcome to ClubHouse!"}),Object(j.jsxs)("div",{className:"login-button google",onClick:function(){return b.signInWithRedirect(new h.a.auth.GoogleAuthProvider)},children:[Object(j.jsx)(w.a,{})," Sign In with Google"]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"login-button facebook",onClick:function(){return b.signInWithPopup(new h.a.auth.GithubAuthProvider)},children:[Object(j.jsx)(k.a,{})," Sign In with github"]})]})})}var I=function(){return Object(j.jsx)("div",{style:{fontFamily:"Avenir"},children:Object(j.jsx)(i.a,{children:Object(j.jsx)(d,{children:Object(j.jsxs)(u.c,{children:[Object(j.jsx)(u.a,{path:"/chats",component:m}),Object(j.jsx)(u.a,{path:"/",component:y})]})})})})};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root"))}},[[316,1,2]]]);
//# sourceMappingURL=main.76a4d5bd.chunk.js.map