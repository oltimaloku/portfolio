import{s as V,d as Z,u as ee,g as te,e as se,n as G}from"../chunks/scheduler.7XQgmEE1.js";import{S as N,i as R,g as h,s as C,m as K,h as g,j as k,f as v,c as j,n as X,x as S,k as p,a as M,y as u,o as Y,d as D,t as H,z as ae,r as L,u as A,v as B,w as P}from"../chunks/index.P3tU8r6o.js";import{e as q}from"../chunks/each.-oqiv04n.js";import{b as F}from"../chunks/paths.0fKLra9U.js";function J(r,e,s){const t=r.slice();return t[3]=e[s],t}function Q(r){let e,s=q(r[0].technologies),t=[];for(let l=0;l<s.length;l+=1)t[l]=W(J(r,s,l));return{c(){e=h("div");for(let l=0;l<t.length;l+=1)t[l].c()},l(l){e=g(l,"DIV",{});var i=k(e);for(let a=0;a<t.length;a+=1)t[a].l(i);i.forEach(v)},m(l,i){M(l,e,i);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null)},p(l,i){if(i&1){s=q(l[0].technologies);let a;for(a=0;a<s.length;a+=1){const x=J(l,s,a);t[a]?t[a].p(x,i):(t[a]=W(x),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=s.length}},d(l){l&&v(e),ae(t,l)}}}function W(r){let e,s,t,l,i,a=r[3].name+"",x,$;return{c(){e=h("div"),s=h("i"),l=C(),i=h("p"),x=K(a),$=C(),this.h()},l(d){e=g(d,"DIV",{class:!0});var f=k(e);s=g(f,"I",{class:!0}),k(s).forEach(v),l=j(f),i=g(f,"P",{class:!0});var I=k(i);x=X(I,a),I.forEach(v),$=j(f),f.forEach(v),this.h()},h(){p(s,"class",t=r[3].class+" text-5xl hover:"+r[3].color),p(i,"class","absolute left-1/2 transform -translate-x-1/2 -translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-transform transition-opacity text-xs mt-2"),p(e,"class","group relative px-4 inline-block text-center")},m(d,f){M(d,e,f),u(e,s),u(e,l),u(e,i),u(i,x),u(e,$)},p(d,f){f&1&&t!==(t=d[3].class+" text-5xl hover:"+d[3].color)&&p(s,"class",t),f&1&&a!==(a=d[3].name+"")&&Y(x,a)},d(d){d&&v(e)}}}function le(r){let e,s,t,l,i,a,x=r[0].name+"",$,d,f,I,_,T='<div class="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:h-0 after:right-full after:w-full after:h-full after:bg-white after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"><p class="relative z-4">Go to →</p></div>',y,b,c=r[0].technologies&&Q(r);const z=r[2].default,m=Z(z,r,r[1],null);return{c(){e=h("a"),s=h("div"),t=h("i"),i=C(),a=h("h3"),$=K(x),d=C(),c&&c.c(),f=C(),m&&m.c(),I=C(),_=h("div"),_.innerHTML=T,this.h()},l(n){e=g(n,"A",{href:!0,class:!0});var o=k(e);s=g(o,"DIV",{class:!0});var E=k(s);t=g(E,"I",{class:!0}),k(t).forEach(v),E.forEach(v),i=j(o),a=g(o,"H3",{class:!0});var w=k(a);$=X(w,x),w.forEach(v),d=j(o),c&&c.l(o),f=j(o),m&&m.l(o),I=j(o),_=g(o,"DIV",{class:!0,"data-svelte-h":!0}),S(_)!=="svelte-dui1rj"&&(_.innerHTML=T),o.forEach(v),this.h()},h(){p(t,"class",l=r[0].icon),p(s,"class","bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 mx-auto duration-200"),p(a,"class","font-medium text-xl sm:text-2xl md:text-3xl"),p(_,"class","flex-1 flex justify-between gap-4 items-center"),p(e,"href",y=`${F}/projects${r[0].href}`),p(e,"class","p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-red-700 text-center group cursor-pointer hover:border-red-400 duration-200")},m(n,o){M(n,e,o),u(e,s),u(s,t),u(e,i),u(e,a),u(a,$),u(e,d),c&&c.m(e,null),u(e,f),m&&m.m(e,null),u(e,I),u(e,_),b=!0},p(n,[o]){(!b||o&1&&l!==(l=n[0].icon))&&p(t,"class",l),(!b||o&1)&&x!==(x=n[0].name+"")&&Y($,x),n[0].technologies?c?c.p(n,o):(c=Q(n),c.c(),c.m(e,f)):c&&(c.d(1),c=null),m&&m.p&&(!b||o&2)&&ee(m,z,n,n[1],b?se(z,n[1],o,null):te(n[1]),null),(!b||o&1&&y!==(y=`${F}/projects${n[0].href}`))&&p(e,"href",y)},i(n){b||(D(m,n),b=!0)},o(n){H(m,n),b=!1},d(n){n&&v(e),c&&c.d(),m&&m.d(n)}}}function ne(r,e,s){let{$$slots:t={},$$scope:l}=e,{step:i}=e;return r.$$set=a=>{"step"in a&&s(0,i=a.step),"$$scope"in a&&s(1,l=a.$$scope)},[i,l,t]}class O extends N{constructor(e){super(),R(this,e,ne,le,V,{step:0})}}function oe(r){let e,s=`A cross-platform mobile application designed to integrate with Apple
          Health and Google Fit for seamless data collection. Enables users to
          journal key metrics like stress, sleep, and medication, aiding in
          precise seizure tracking. Features include seizure logging, visual
          displays of seizure patterns, and timely notifications. Ideal for
          comprehensive epilepsy self-management.`;return{c(){e=h("p"),e.textContent=s,this.h()},l(t){e=g(t,"P",{class:!0,"data-svelte-h":!0}),S(e)!=="svelte-royu5p"&&(e.textContent=s),this.h()},h(){p(e,"class","py-8")},m(t,l){M(t,e,l)},p:G,d(t){t&&v(e)}}}function re(r){let e,s=`A cross-platform mobile application enabling users to create and share
          location-based picture galleries. Users craft "Geo Spheres" tied to
          specific locations, like dorm rooms or houses. When friends enter
          these zones, they're prompted to capture a photo, seamlessly
          contributing to that Geo Sphere's communal photo collection. An
          innovative way to chronicle memories, linked to the very spaces they
          were made.`;return{c(){e=h("p"),e.textContent=s,this.h()},l(t){e=g(t,"P",{class:!0,"data-svelte-h":!0}),S(e)!=="svelte-9833d9"&&(e.textContent=s),this.h()},h(){p(e,"class","py-8")},m(t,l){M(t,e,l)},p:G,d(t){t&&v(e)}}}function ie(r){let e,s=`A robust database management system crafted for a social media
          platform inspired by Reddit. Developed using SQL and Java, the system
          facilitates user functionalities such as creating posts, joining
          communities, and awarding commendations. The project primarily
          emphasizes proficient database handling, ensuring seamless
          interactions.`;return{c(){e=h("p"),e.textContent=s,this.h()},l(t){e=g(t,"P",{class:!0,"data-svelte-h":!0}),S(e)!=="svelte-1bjxh3n"&&(e.textContent=s),this.h()},h(){p(e,"class","py-8")},m(t,l){M(t,e,l)},p:G,d(t){t&&v(e)}}}function ce(r){let e,s,t=`<div class="flex flex-col lg:justify-center text-center gap-6 md:gap-8 lg:gap-10"><h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">Hi! I&#39;m <span class="poppins text-red-400">Olti</span> Maloku <br/>
        Full Stack
        <span class="poppins text-red-400">Developer</span></h2> <p class="text-base sm:text-lg md:text-xl">I&#39;m currently studying <span class="text-red-400">Computer Science</span>
        and <span class="text-red-400">Business</span>
        at the University of British Columbia!</p> <a class="blueShadow mx-auto lg:mr-auto text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer" href="https://www.linkedin.com/in/oltimaloku/" target="_blank"><div class="absolute top-0 right-full w-full h-full bg-red-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9">Get in touch →</h4></a></div>`,l,i,a,x='<h6 class="text-lg sm:text-xl md:text-2xl">A few of my creative endeavors.</h6> <h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">Curious to <span class="poppins text-red-400">see</span> my work?</h3>',$,d,f,I,_,T,y,b,c,z=`<h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl my-4">About me</h3> <div class="flex justify-center my-8"><div class="border h-64 w-64 overflow-hidden rounded-full flex flex-col justify-center items-center"><img src="${F}/assets/profile_photo.png" class="object-cover w-full h-full rounded-full"/></div></div> <div class="space-y-4 lg:mx-64 md:mx-16 sm:mx-8 text-large"><h6 class="">I am currently in my third year of studies at the University of British
        Columbia. Some of my passions outside of school include soccer, music,
        travelling, and fitness.</h6> <h6 class="">Beyond these interests, my fascination with the world of technology
        plays a significant role in my pursuits. My technical interests
        primarily focus on mobile app development and web development. Recently,
        I have found myself drawn to the space of virtual reality. These areas
        not only captivate my curiosity but also fuel my ambition to build and
        create innovative solutions.</h6> <h6 class="">Being part of <span class="text-red-400"><a href="https://www.ubclaunchpad.com" target="_blank">Launch Pad</a></span>, UBC&#39;s software engineering club, is one of my current pursuits.
        Collaborating with like-minded peers in a dynamic setting not only
        fosters a deeper connection with the university community but also helps
        build long-lasting relationships.</h6> <h6 class="">For a detailed overview of my professional journey and projects, feel
        free to explore my resume <span class="text-red-400"><a href="${F}/assets/Resume-Olti-December27.pdf" target="_blank">here</a></span>!</h6></div>`,m;return f=new O({props:{step:r[0][0],$$slots:{default:[oe]},$$scope:{ctx:r}}}),_=new O({props:{step:r[0][1],$$slots:{default:[re]},$$scope:{ctx:r}}}),y=new O({props:{step:r[0][2],$$slots:{default:[ie]},$$scope:{ctx:r}}}),{c(){e=h("main"),s=h("section"),s.innerHTML=t,l=C(),i=h("section"),a=h("div"),a.innerHTML=x,$=C(),d=h("div"),L(f.$$.fragment),I=C(),L(_.$$.fragment),T=C(),L(y.$$.fragment),b=C(),c=h("section"),c.innerHTML=z,this.h()},l(n){e=g(n,"MAIN",{class:!0});var o=k(e);s=g(o,"SECTION",{id:!0,class:!0,"data-svelte-h":!0}),S(s)!=="svelte-jze33o"&&(s.innerHTML=t),l=j(o),i=g(o,"SECTION",{id:!0,class:!0});var E=k(i);a=g(E,"DIV",{class:!0,"data-svelte-h":!0}),S(a)!=="svelte-su0oaz"&&(a.innerHTML=x),$=j(E),d=g(E,"DIV",{class:!0});var w=k(d);A(f.$$.fragment,w),I=j(w),A(_.$$.fragment,w),T=j(w),A(y.$$.fragment,w),w.forEach(v),E.forEach(v),b=j(o),c=g(o,"SECTION",{id:!0,class:!0,"data-svelte-h":!0}),S(c)!=="svelte-1rpwu3z"&&(c.innerHTML=z),o.forEach(v),this.h()},h(){p(s,"id","introPage"),p(s,"class","grid grid-cols-1 lg:grid-cols-1 gap-10 py-8 sm:py-14"),p(a,"class","flex flex-col gap-2 text-center"),p(d,"class","grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10"),p(i,"id","projects"),p(i,"class","py-20 lg:py-32 flex flex-col gap-24"),p(c,"id","about"),p(c,"class","text-center justify-center items-center mb-40"),p(e,"class","flex flex-col flex-1 p-4")},m(n,o){M(n,e,o),u(e,s),u(e,l),u(e,i),u(i,a),u(i,$),u(i,d),B(f,d,null),u(d,I),B(_,d,null),u(d,T),B(y,d,null),u(e,b),u(e,c),m=!0},p(n,[o]){const E={};o&2&&(E.$$scope={dirty:o,ctx:n}),f.$set(E);const w={};o&2&&(w.$$scope={dirty:o,ctx:n}),_.$set(w);const U={};o&2&&(U.$$scope={dirty:o,ctx:n}),y.$set(U)},i(n){m||(D(f.$$.fragment,n),D(_.$$.fragment,n),D(y.$$.fragment,n),m=!0)},o(n){H(f.$$.fragment,n),H(_.$$.fragment,n),H(y.$$.fragment,n),m=!1},d(n){n&&v(e),P(f),P(_),P(y)}}}function de(r){return[[{name:"IDEA",icon:"fa-solid fa-notes-medical",href:"/idea",technologies:[{name:"Flutter",class:"devicon-flutter-plain colored"},{name:"TypeScript",class:"devicon-typescript-plain colored"},{name:"MongoDB",class:"devicon-mongodb-plain colored"},{name:"Node.js",class:"devicon-nodejs-plain colored"}]},{name:"Geo Real",icon:"fa-solid fa-earth-americas",href:"/georeal",technologies:[{name:"Flutter",class:"devicon-flutter-plain colored"},{name:"Python",class:"devicon-python-plain colored"},{name:"Firebase",class:"devicon-firebase-plain colored"}]},{name:"Reddit DBMS",icon:"fa-brands fa-reddit",href:"/reddit-dbms",technologies:[{name:"Java",class:"devicon-java-plain colored"},{name:"MySQL",class:"devicon-mysql-plain colored"},{name:"Oracle",class:"devicon-oracle-plain colored"}]}]]}class fe extends N{constructor(e){super(),R(this,e,de,ce,V,{})}}function ue(r){let e,s;return e=new fe({}),{c(){L(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,l){B(e,t,l),s=!0},p:G,i(t){s||(D(e.$$.fragment,t),s=!0)},o(t){H(e.$$.fragment,t),s=!1},d(t){P(e,t)}}}class ve extends N{constructor(e){super(),R(this,e,null,ue,V,{})}}export{ve as component};