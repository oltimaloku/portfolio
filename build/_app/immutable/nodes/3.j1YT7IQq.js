import{s as O,n as q,h as ce,o as me}from"../chunks/scheduler.7XQgmEE1.js";import{S as R,i as U,g,m as de,s as y,h as f,j as z,n as he,f as n,c as b,k as m,a as l,y as A,o as pe,r as V,u as Z,x as w,v as H,d as F,t as B,w as G,q as ue,b as ge,p as fe}from"../chunks/index.P3tU8r6o.js";import{b as E}from"../chunks/paths.EYkk8AdU.js";async function ve({params:u}){return{project:u.project}}const He=Object.freeze(Object.defineProperty({__proto__:null,load:ve},Symbol.toStringTag,{value:"Module"}));function ye(u){let e,a,i,r,c,s,p,v;return{c(){e=g("div"),a=g("div"),i=g("div"),r=g("h1"),c=de(u[0]),s=y(),p=g("p"),v=de(u[1]),this.h()},l(d){e=f(d,"DIV",{class:!0});var x=z(e);a=f(x,"DIV",{class:!0});var k=z(a);i=f(k,"DIV",{class:!0});var o=z(i);r=f(o,"H1",{class:!0});var j=z(r);c=he(j,u[0]),j.forEach(n),s=b(o),p=f(o,"P",{class:!0});var M=z(p);v=he(M,u[1]),M.forEach(n),o.forEach(n),k.forEach(n),x.forEach(n),this.h()},h(){m(r,"class","text-2xl svelte-6ltriu"),m(p,"class","font-bold text-xl p-2"),m(i,"class","flex flex-col items-center justify-between"),m(a,"class","flex justify-center w-full"),m(e,"class","p-8 border rounded border-solid border-red-700")},m(d,x){l(d,e,x),A(e,a),A(a,i),A(i,r),A(r,c),A(i,s),A(i,p),A(p,v)},p(d,[x]){x&1&&pe(c,d[0]),x&2&&pe(v,d[1])},i:q,o:q,d(d){d&&n(e)}}}function be(u,e,a){let{title:i}=e,{date:r}=e;return u.$$set=c=>{"title"in c&&a(0,i=c.title),"date"in c&&a(1,r=c.date)},[i,r]}class ee extends R{constructor(e){super(),U(this,e,be,ye,O,{title:0,date:1})}}function we(u){let e,a,i,r="Project Overview",c,s,p=`As part of the Introduction to Relational Databases course (CPSC 304) at the
  University of British Columbia, I participated in a group project to develop a
  Database Management System (DBMS) for a Reddit-styled social media platform.
  This project focused on providing comprehensive database management for an
  application with various features, including user interactions, communities,
  awards, and admin functionalities.`,v,d,x="Development Process",k,o,j=`The initial phase of the project involved creating an Entity-Relationship (ER)
  diagram to outline the database structure. The ER diagram, which laid the
  foundation for our database design, is illustrated below:`,M,D,te,L,T,ae=`This is an example of what a projection query on users looks like with some
  test data:`,J,P,ie,N,_,se="Technical Implementation",W,C,ne=`We built the project using the Oracle database with SQL*Plus and implemented
  it in Java, utilizing JDBC for database access. Key features of our
  application included:`,Q,$,oe=`<li>- Development of an intuitive Java Swing interface for seamless database
    interactions and real-time data visualization.</li> <li>- Utilization of advanced SQL features like nested statements, division, and
    aggregation using group-by and having clauses.</li> <li>- Effective integration of the ER diagram into the application to ensure
    robust database integrity.</li>`,K,I,le="Future Enhancements",X,S,re=`Moving forward, the next steps for this project include refining the user
  interface and enhancing the flexibility of the database queries to make them
  more customizable.`,Y;return e=new ee({props:{title:xe,date:je}}),{c(){V(e.$$.fragment),a=y(),i=g("h1"),i.textContent=r,c=y(),s=g("p"),s.textContent=p,v=y(),d=g("h1"),d.textContent=x,k=y(),o=g("p"),o.textContent=j,M=y(),D=g("img"),L=y(),T=g("p"),T.textContent=ae,J=y(),P=g("img"),N=y(),_=g("h1"),_.textContent=se,W=y(),C=g("p"),C.textContent=ne,Q=y(),$=g("ul"),$.innerHTML=oe,K=y(),I=g("h1"),I.textContent=le,X=y(),S=g("p"),S.textContent=re,this.h()},l(t){Z(e.$$.fragment,t),a=b(t),i=f(t,"H1",{class:!0,"data-svelte-h":!0}),w(i)!=="svelte-17dn134"&&(i.textContent=r),c=b(t),s=f(t,"P",{class:!0,"data-svelte-h":!0}),w(s)!=="svelte-1krieur"&&(s.textContent=p),v=b(t),d=f(t,"H1",{class:!0,"data-svelte-h":!0}),w(d)!=="svelte-13yjc7y"&&(d.textContent=x),k=b(t),o=f(t,"P",{class:!0,"data-svelte-h":!0}),w(o)!=="svelte-7e4bah"&&(o.textContent=j),M=b(t),D=f(t,"IMG",{src:!0,class:!0}),L=b(t),T=f(t,"P",{class:!0,"data-svelte-h":!0}),w(T)!=="svelte-15cof7l"&&(T.textContent=ae),J=b(t),P=f(t,"IMG",{src:!0,class:!0}),N=b(t),_=f(t,"H1",{class:!0,"data-svelte-h":!0}),w(_)!=="svelte-1j7a28v"&&(_.textContent=se),W=b(t),C=f(t,"P",{class:!0,"data-svelte-h":!0}),w(C)!=="svelte-noqzh6"&&(C.textContent=ne),Q=b(t),$=f(t,"UL",{"data-svelte-h":!0}),w($)!=="svelte-unicd3"&&($.innerHTML=oe),K=b(t),I=f(t,"H1",{class:!0,"data-svelte-h":!0}),w(I)!=="svelte-18tmwyc"&&(I.textContent=le),X=b(t),S=f(t,"P",{class:!0,"data-svelte-h":!0}),w(S)!=="svelte-1i1gb7b"&&(S.textContent=re),this.h()},h(){m(i,"class","svelte-2akoly"),m(s,"class","svelte-2akoly"),m(d,"class","svelte-2akoly"),m(o,"class","svelte-2akoly"),ce(D.src,te=E+"/assets/Er_diagram.png")||m(D,"src",te),m(D,"class","border-2 border-red-400"),m(T,"class","mt-4 svelte-2akoly"),ce(P.src,ie=E+"/assets/database_image.png")||m(P,"src",ie),m(P,"class","border-2 border-red-400"),m(_,"class","svelte-2akoly"),m(C,"class","svelte-2akoly"),m(I,"class","svelte-2akoly"),m(S,"class","mb-8 svelte-2akoly")},m(t,h){H(e,t,h),l(t,a,h),l(t,i,h),l(t,c,h),l(t,s,h),l(t,v,h),l(t,d,h),l(t,k,h),l(t,o,h),l(t,M,h),l(t,D,h),l(t,L,h),l(t,T,h),l(t,J,h),l(t,P,h),l(t,N,h),l(t,_,h),l(t,W,h),l(t,C,h),l(t,Q,h),l(t,$,h),l(t,K,h),l(t,I,h),l(t,X,h),l(t,S,h),Y=!0},p:q,i(t){Y||(F(e.$$.fragment,t),Y=!0)},o(t){B(e.$$.fragment,t),Y=!1},d(t){t&&(n(a),n(i),n(c),n(s),n(v),n(d),n(k),n(o),n(M),n(D),n(L),n(T),n(J),n(P),n(N),n(_),n(W),n(C),n(Q),n($),n(K),n(I),n(X),n(S)),G(e,t)}}}let xe="Social Media Database Management System",je="September 2023 - December 2023";class ke extends R{constructor(e){super(),U(this,e,null,we,O,{})}}function Te(u){let e,a,i,r=`<div class="pr-8"><h1 class="leading-tight mt-8 md:mt-4 lg:mt-2 svelte-e4g5hf">Project Overview</h1> <p class="mb-10 svelte-e4g5hf">Geo Real is a cross-platform mobile application that allows users to
      create and share location-based picture galleries. Users create
      &#39;Geo-Spheres&#39; at specific locations like dorm rooms or houses. When
      friends enter these zones, they&#39;re prompted to capture a photo,
      contributing to the communal photo collection of that Geo Sphere. This
      innovative approach offers a unique way to chronicle memories linked to
      the places where they&#39;re made.</p> <h1 class="leading-tight svelte-e4g5hf">Origins</h1> <p class="mb-10 svelte-e4g5hf">The project originated at a hackathon at the University of Washington
      called DubHacks. As a newcomer to programming, I found this hackathon to
      be a significant learning experience. Although my initial contributions
      were limited, the high-pressure environment of the hackathon highlighted
      the areas I needed to focus on and motivated me to enhance my skills.</p> <h1 class="leading-tight svelte-e4g5hf">Development and Technical Challenges</h1> <p class="svelte-e4g5hf">Initially, Geo Real was an Android app built with Java, featuring a Python
      Flask backend. About eight months later, after learning Flutter, I
      revisited the project to develop a new frontend using my newly acquired
      Flutter skills. A major challenge was implementing location-based
      tracking, achieved by leveraging the Google Maps API.</p></div> <div class="flex justify-center"><img src="${E}/assets/geo-real.PNG" class="object-contain md:px-32 sm:px-32 lg:px-2 mx-8"/></div>`,c,s,p="Future Enhancements",v,d,x=`A current challenge is enabling the app to track location when the phone is
  turned off. Due to the limitations of the Apple ecosystem and its integration
  with Flutter, this feature has been particularly challenging to implement.
  Continued work in this area is a key focus for future development.`,k;return e=new ee({props:{title:_e,date:Ce}}),{c(){V(e.$$.fragment),a=y(),i=g("div"),i.innerHTML=r,c=y(),s=g("h1"),s.textContent=p,v=y(),d=g("p"),d.textContent=x,this.h()},l(o){Z(e.$$.fragment,o),a=b(o),i=f(o,"DIV",{class:!0,"data-svelte-h":!0}),w(i)!=="svelte-1j1t5ya"&&(i.innerHTML=r),c=b(o),s=f(o,"H1",{class:!0,"data-svelte-h":!0}),w(s)!=="svelte-fyppg8"&&(s.textContent=p),v=b(o),d=f(o,"P",{class:!0,"data-svelte-h":!0}),w(d)!=="svelte-1dhcb1m"&&(d.textContent=x),this.h()},h(){m(i,"class","flex items-center flex-col lg:flex-row"),m(s,"class","leading-tight svelte-e4g5hf"),m(d,"class","mb-8 svelte-e4g5hf")},m(o,j){H(e,o,j),l(o,a,j),l(o,i,j),l(o,c,j),l(o,s,j),l(o,v,j),l(o,d,j),k=!0},p:q,i(o){k||(F(e.$$.fragment,o),k=!0)},o(o){B(e.$$.fragment,o),k=!1},d(o){o&&(n(a),n(i),n(c),n(s),n(v),n(d)),G(e,o)}}}let _e="Geo Real",Ce="October 2022, August 2023 - September 2023";class Ie extends R{constructor(e){super(),U(this,e,null,Te,O,{})}}function Se(u){let e,a,i,r=`<div class="flex flex-col lg:flex-row items-center"><div class="pr-8"><h1 class="leading-tight svelte-1tja3d4">Project Overview</h1> <p class="lg:mb-4 xl:mb-16 svelte-1tja3d4">I embarked on an exciting project called IDEA (Interactive Daily
        Epilepsy Assistant) while working as a Product Manager Intern and
        Software Engineer Intern at <a class="text-red-400" href="https://www.edeecare.com/" target="_blank">Edee Care</a>, a startup dedicated to creating solutions for people with epilepsy.
        The mobile app, IDEA, was developed to help users track their seizures,
        triggers, and medication. Leading the development of this project was
        not only technically demanding but also incredibly impactful, aiming to
        improve the quality of life for those living with epilepsy.</p> <h1 class="leading-tight svelte-1tja3d4">The Development Journey</h1> <p class="svelte-1tja3d4">As the sole software developer on this project, I faced the task of
        building the app using Flutter for the frontend, Node.js for the
        backend, and MongoDB for data management. Despite my limited prior
        experience with these technologies, I was committed to learning them
        from scratch. This required a deep understanding of not only the
        technical aspects but also how to integrate them seamlessly into a
        functional and user-friendly application.</p> <p class="svelte-1tja3d4">The most valuable skill I honed during this project was adaptability in
        technology. Quickly assimilating new programming languages and
        frameworks was essential. The experience of developing an app
        single-handedly that positively impacted the real world was immensely
        gratifying and a significant milestone in my career.</p></div> <div class="flex justify-center"><img src="${E}/assets/journal1.png" class="object-contain md:px-32 sm:px-32 lg:px-2 mx-8 my-6"/></div></div> <h1 class="leading-tight svelte-1tja3d4">Project Phases</h1> <h2 class="svelte-1tja3d4">1. IDEA SMS Pilot Program</h2> <p class="svelte-1tja3d4">The project started with the IDEA SMS pilot program, a test to both gather
    market information and validate the company&#39;s value proposition. It utilized
    Heymarket to manage SMS communications, sending periodic text messages to
    users as a personalized assistant and prompting them to complete a Typeform
    survey twice a day. My role was to manage the data collected from users and
    create weekly reports detailing their condition. I also conducted interviews
    with our initial users. The success of this trial led us to begin phase 2:
    the IDEA mobile application V1.</p> <h2 class="pt-5 svelte-1tja3d4">2. IDEA Mobile Application V1</h2> <p class="svelte-1tja3d4">After months of piloting our SMS program, we leveraged our insights to
    develop the initial version of our mobile application. As the lead
    developer, I opted for Flutter, valuing its cross-platform functionality,
    and integrated it with a Node.js and JavaScript backend, utilizing Express
    for efficient routing and MongoDB with Mongoose for effective data
    management. This initial MVP featured core functionalities like recording
    seizure incidents, identifying triggers, and tracking medications. Though
    basic, it was instrumental in launching the app on Apple TestFlight for user
    trials. This process was not only pivotal in introducing the app to users
    but also in enhancing my understanding of Flutter, Node, and MongoDB.
    Initially unfamiliar with these technologies, I navigated through early
    challenges and was now ready to apply these valuable lessons to the
    forthcoming iteration of the mobile MVP.</p> <img src="${E}/assets/old_ui.PNG"/> <h4 class="svelte-1tja3d4">Key Skills Developed</h4> <li>Understanding and implementing an effective file structure.</li> <li>Proficiency in using Git for version control.</li> <li>Developed effective state management techniques.</li> <li>Implementing robust authentication mechanisms utilizing <span class="text-red-400"><a href="https://www.npmjs.com/package/bcrypt" target="_blank">Bcrypt</a></span>.</li> <li>Gaining expertise in NodeJS and API development.</li> <li>Developing a strong foundation in MongoDB usage.</li> <h2 class="pt-5 svelte-1tja3d4">3. A Major Overhaul</h2> <p class="svelte-1tja3d4">The second iteration of the IDEA app marked a significant transformation,
    initiated by feedback from V1 testing and the addition of new UX designers.
    This phase included a revamp of Edee Care’s visual style, resulting in a
    major rewrite of the frontend code for better integration of design changes,
    and <a href="#SManagement" class="text-red-400">improvements in state management</a>
    for enhanced performance and scalability. We also updated our
    <a href="#Database" class="text-red-400">database schema </a>for greater
    user customization,
    <a href="#Backend" class="text-red-400">transitioned our backend</a>
    from JavaScript to TypeScript for increased robustness, and refined the
    <a href="#Health" class="text-red-400">onboarding and health integration</a>
    processes to better cater to individual user needs.</p> <img src="${E}/assets/new_ui.PNG"/> <div><h1 id="SManagement" class="leading-tight svelte-1tja3d4">Transition to Scalable State Management</h1> <p class="svelte-1tja3d4">Initially, our app architecture relied on &quot;parameter passing&quot; for state
      management, a method good for smaller applications but less suitable for
      our expanding project. This simple technique, however, was becoming
      cumbersome. To address this, I shifted to using Provider, a package that
      centralizes data access and facilitates state management within the
      application. This change not only improved scalability but also minimized
      the coupling between widgets, making them more independent and
      test-friendly. With Provider, only UI components listening to state
      changes needed to rebuild, enhancing performance.</p> <h4 class="svelte-1tja3d4">Architectural Shift to MVVM with Provider</h4> <p class="svelte-1tja3d4">To fully leverage Provider&#39;s capabilities, I transitioned our
      application&#39;s architecture from MVC (Model View Controller) to MVVM (Model
      View ViewModel). This change complemented Provider’s design, which is
      geared towards efficient state distribution in Flutter. MVVM’s reactive
      programming style, supported by ChangeNotifierProvider, allows UI
      components to automatically update in response to ViewModel state changes.
      This architecture enhanced the separation between business logic and UI
      code, improving testability and maintainability.</p> <h1 id="Database" class="leading-tight svelte-1tja3d4">Rethinking the Database Schema for Customization</h1> <p class="svelte-1tja3d4">The original database design in MongoDB centered around a &quot;User&quot; object.
      This object encapsulated essential information like email, password, and
      name. Additionally, it linked to other related objects such as Medication,
      Seizure_event, and Triggers. For instance, within the &quot;User&quot; object, a
      field named &#39;seizures&#39; held an array of ObjectIDs, each pointing to a
      distinct seizure event. We utilized
      <span class="text-red-400"><a href="https://mongoosejs.com/" target="_blank">Mongoose</a></span>
      on the server to enforce and manage this schema effectively.</p> <p class="svelte-1tja3d4">Our preference for a NoSQL database like MongoDB was driven by its
      inherent flexibility. As our application was poised for continuous
      evolution, the ability to effortlessly add new fields or modify the
      existing schema was crucial. MongoDB&#39;s dynamic nature perfectly suited our
      needs for adaptability.</p> <h4 class="svelte-1tja3d4">Customization for Individual User Needs</h4> <p class="svelte-1tja3d4">Given the specific requirements of a health application, particularly one
      focused on epilepsy, we recognized the need for greater personalization. A
      one-size-fits-all approach was insufficient, as each user&#39;s condition and
      triggers are unique. This became particularly evident with our first user
      in the pilot program, who reported specific triggers related to
      Fibromyalgia.</p> <p class="svelte-1tja3d4">To enhance customization, we introduced the concept of user-defined types.
      While we had a standard set of triggers applicable to all users (like
      alcohol, sunlight, and heat), we also wanted users to have the ability to
      add specific triggers unique to their condition, such as Fibromyalgia.
      However, integrating this feature within the existing schema presented
      challenges.</p> <h4 class="svelte-1tja3d4">Collaborative Schema Development</h4> <p class="svelte-1tja3d4">Working alongside the CTO and our machine learning engineer, we crafted a
      new schema that aligned with our vision of a highly personalized user
      experience. This revised schema included a collection named &#39;constants&#39;,
      consisting of &#39;type&#39; and &#39;value&#39; fields. For example, under a &#39;triggers&#39;
      collection, a &#39;lookup_name&#39; field would reference an ObjectID
      corresponding to a &#39;constant&#39;. This constant would define a specific
      trigger, such as Fibromyalgia (type: Trigger, value: Fibromyalgia). This
      approach was also applied to other constant types like Journal Categories,
      Medications, and Chronic Conditions.</p> <p class="svelte-1tja3d4">Our overarching goal was to create a mobile application that could provide
      tailored journal prompts, specifically catering to the individual user&#39;s
      condition. This revamped database schema was a pivotal step in realizing
      our ambition of a customizable and user-centric mobile health application.</p> <h1 id="Backend" class="leading-tight svelte-1tja3d4">Transitioning the Backend to TypeScript</h1> <p class="svelte-1tja3d4">A key decision in our development process was the transition from
      JavaScript to TypeScript for our NodeJS server. Recognizing TypeScript&#39;s
      growing popularity and its array of benefits, I saw our project&#39;s
      transitional phase as an great moment to adopt this technology. Given the
      relative simplicity of our server architecture, the shift to TypeScript
      was a smooth and straightforward process. For MongoDB schema
      implementation, we utilized <span class="text-red-400"><a href="https://typegoose.github.io/typegoose/" target="_blank">Typegoose</a> </span>, which seamlessly integrated with TypeScript.</p> <h4 class="svelte-1tja3d4">Key Benefits of Using TypeScript</h4> <p class="svelte-1tja3d4"><span class="font-bold">Enhanced Developer Experience:</span> The switch to
      TypeScript marked a significant improvement in our development workflow. TypeScript&#39;s
      robust type system provided improved autocompletion, more precise IntelliSense,
      and superior code navigation capabilities. These features not only streamlined
      coding but also reduced the likelihood of errors.</p> <p class="svelte-1tja3d4"><span class="font-bold">Increased Code Reliability:</span>
      TypeScript&#39;s strict typing instilled greater confidence in the accuracy of
      our code. By ensuring type correctness, TypeScript substantially minimized
      common coding mistakes. This level of reliability was particularly beneficial
      for debugging, making the process more efficient and less prone to errors.</p> <div class="lg:flex lg:items-center"><img src="${E}/assets/health_ui.PNG" class="lg:w-1/2"/> <div class="lg:w-1/2"><h1 id="Health" class="leading-tight svelte-1tja3d4">Enhanced Onboarding and Health Integration Process</h1> <p class="svelte-1tja3d4">Aligned with our commitment to delivering a highly customizable user
          experience, we implemented a thorough onboarding process for the IDEA
          app. This process was designed to gather essential user information,
          creating a comprehensive profile. It encompassed the collection of
          basic personal details such as the user&#39;s name and age, alongside
          specific epilepsy-related information. Crucially, it also provided
          users with the opportunity to define their personal health goals,
          tailoring the app to their unique needs and preferences.</p> <h4 class="svelte-1tja3d4">Integration with Health Applications</h4> <p class="svelte-1tja3d4">A pivotal component of our application was the integration with users’
          mobile device health applications. This feature was central to one of
          our primary objectives: the acquisition of real-time health data
          through smartwatches. To facilitate this, I utilized a health package
          that enabled seamless integration with major health platforms like
          Apple Health and Google Fit. This integration was an initial step
          towards developing a robust system for real-time health data tracking.
          While the current implementation showed promising functionality, it
          exhibited some minor bugs. Addressing these issues and enhancing the
          system&#39;s capabilities will be a key focus in our ongoing development,
          ensuring we evolve towards a sophisticated health tracking solution.</p></div></div> <h1 class="svelte-1tja3d4">Conclusion</h1> <p class="mb-2 svelte-1tja3d4">Working on the IDEA project at Edee Care has been the largest and most
      enriching project I&#39;ve undertaken in my career thus far. Working in both
      Product Management and Software Engineering as an intern, I navigated new
      technologies and complex problem-solving, gaining invaluable skills. This
      project, significant in its impact on epilepsy care, not only sharpened my
      technical abilities but also deepened my insight into user-focused design
      and innovation.</p> <p class="mb-10 svelte-1tja3d4">Be sure to check out <a class="text-red-400" href="https://www.edeecare.com/" target="_blank">Edee Care</a> for updates on their product!</p></div>`,c;return e=new ee({props:{title:Me,date:De}}),{c(){V(e.$$.fragment),a=y(),i=g("div"),i.innerHTML=r,this.h()},l(s){Z(e.$$.fragment,s),a=b(s),i=f(s,"DIV",{class:!0,"data-svelte-h":!0}),w(i)!=="svelte-4f9lie"&&(i.innerHTML=r),this.h()},h(){m(i,"class","space-y-4")},m(s,p){H(e,s,p),l(s,a,p),l(s,i,p),c=!0},p:q,i(s){c||(F(e.$$.fragment,s),c=!0)},o(s){B(e.$$.fragment,s),c=!1},d(s){s&&(n(a),n(i)),G(e,s)}}}let Me="IDEA",De="January 2023 - October 2023";function Pe(u){const e=()=>{};return me(()=>(window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)})),[]}class $e extends R{constructor(e){super(),U(this,e,Pe,Se,O,{})}}function Ae(u){let e,a,i;var r=u[0];function c(s,p){return{}}return r&&(a=ue(r,c())),{c(){e=g("div"),a&&V(a.$$.fragment),this.h()},l(s){e=f(s,"DIV",{class:!0});var p=z(e);a&&Z(a.$$.fragment,p),p.forEach(n),this.h()},h(){m(e,"class","my-4 text-center md:text-left mx-auto max-w-screen-xl")},m(s,p){l(s,e,p),a&&H(a,e,null),i=!0},p(s,[p]){if(p&1&&r!==(r=s[0])){if(a){fe();const v=a;B(v.$$.fragment,1,0,()=>{G(v,1)}),ge()}r?(a=ue(r,c()),V(a.$$.fragment),F(a.$$.fragment,1),H(a,e,null)):a=null}},i(s){i||(a&&F(a.$$.fragment,s),i=!0)},o(s){a&&B(a.$$.fragment,s),i=!1},d(s){s&&n(e),a&&G(a)}}}function Ee(u,e,a){let{data:i}=e,r;return u.$$set=c=>{"data"in c&&a(1,i=c.data)},u.$$.update=()=>{u.$$.dirty&2&&(i?.project==="idea"?(a(0,r=$e),console.log("hello")):i?.project==="georeal"?a(0,r=Ie):i?.project==="reddit-dbms"?a(0,r=ke):a(0,r=null))},[r,i]}class Fe extends R{constructor(e){super(),U(this,e,Ee,Ae,O,{data:1})}}export{Fe as component,He as universal};
