import{s as G,n as z,h as de,o as fe}from"../chunks/scheduler.7XQgmEE1.js";import{S as O,i as R,g as d,m as he,s as f,h,j as T,n as pe,f as j,c as v,k as l,a as U,y as i,o as ue,r as q,u as N,x as w,v as V,d as H,t as F,w as B,q as ge,e as me,b as ve,p as ye}from"../chunks/index.P3tU8r6o.js";import{b as E}from"../chunks/paths.0fKLra9U.js";async function be({params:p}){return{project:p.project}}const Be=Object.freeze(Object.defineProperty({__proto__:null,load:be},Symbol.toStringTag,{value:"Module"}));function we(p){let e,t,n,a,c,o,s,g;return{c(){e=d("div"),t=d("div"),n=d("div"),a=d("h1"),c=he(p[0]),o=f(),s=d("p"),g=he(p[1]),this.h()},l(y){e=h(y,"DIV",{class:!0});var u=T(e);t=h(u,"DIV",{class:!0});var _=T(t);n=h(_,"DIV",{class:!0});var x=T(n);a=h(x,"H1",{class:!0});var m=T(a);c=pe(m,p[0]),m.forEach(j),o=v(x),s=h(x,"P",{class:!0});var b=T(s);g=pe(b,p[1]),b.forEach(j),x.forEach(j),_.forEach(j),u.forEach(j),this.h()},h(){l(a,"class","text-2xl svelte-6ltriu"),l(s,"class","font-bold text-xl p-2"),l(n,"class","flex flex-col items-center justify-between"),l(t,"class","flex justify-center w-full"),l(e,"class","p-8 border rounded border-solid border-red-700")},m(y,u){U(y,e,u),i(e,t),i(t,n),i(n,a),i(a,c),i(n,o),i(n,s),i(s,g)},p(y,[u]){u&1&&ue(c,y[0]),u&2&&ue(g,y[1])},i:z,o:z,d(y){y&&j(e)}}}function xe(p,e,t){let{title:n}=e,{date:a}=e;return p.$$set=c=>{"title"in c&&t(0,n=c.title),"date"in c&&t(1,a=c.date)},[n,a]}class te extends O{constructor(e){super(),R(this,e,xe,we,G,{title:0,date:1})}}function je(p){let e,t,n,a,c="Project Overview",o,s,g=`As part of the Introduction to Relational Databases course (CPSC 304) at the
    University of British Columbia, I participated in a group project to develop
    a Database Management System (DBMS) for a Reddit-styled social media
    platform. This project focused on providing comprehensive database
    management for an application with various features, including user
    interactions, communities, awards, and admin functionalities.`,y,u,_="Development Process",x,m,b=`The initial phase of the project involved creating an Entity-Relationship
    (ER) diagram to outline the database structure. The ER diagram, which laid
    the foundation for our database design, is illustrated below:`,J,P,ae,W,C,ie=`This is an example of what a projection query on users looks like with some
    test data:`,Q,$,se,K,I,ne="Technical Implementation",X,S,oe=`We built the project using the Oracle database with SQL*Plus and implemented
    it in Java, utilizing JDBC for database access. Key features of our
    application included:`,Y,A,re=`<li>Development of an intuitive Java Swing interface for seamless database
      interactions and real-time data visualization.</li> <li>Utilization of advanced SQL features like nested statements, division, and
      aggregation using group-by and having clauses.</li> <li>Effective integration of the ER diagram into the application to ensure
      robust database integrity.</li>`,Z,M,le="Future Enhancements",ee,D,ce=`Moving forward, the next steps for this project include refining the user
    interface and enhancing the flexibility of the database queries to make them
    more customizable.`,L;return t=new te({props:{title:ke,date:_e}}),{c(){e=d("div"),q(t.$$.fragment),n=f(),a=d("h1"),a.textContent=c,o=f(),s=d("p"),s.textContent=g,y=f(),u=d("h1"),u.textContent=_,x=f(),m=d("p"),m.textContent=b,J=f(),P=d("img"),W=f(),C=d("p"),C.textContent=ie,Q=f(),$=d("img"),K=f(),I=d("h1"),I.textContent=ne,X=f(),S=d("p"),S.textContent=oe,Y=f(),A=d("ul"),A.innerHTML=re,Z=f(),M=d("h1"),M.textContent=le,ee=f(),D=d("p"),D.textContent=ce,this.h()},l(k){e=h(k,"DIV",{class:!0});var r=T(e);N(t.$$.fragment,r),n=v(r),a=h(r,"H1",{class:!0,"data-svelte-h":!0}),w(a)!=="svelte-17dn134"&&(a.textContent=c),o=v(r),s=h(r,"P",{class:!0,"data-svelte-h":!0}),w(s)!=="svelte-18xtbe7"&&(s.textContent=g),y=v(r),u=h(r,"H1",{class:!0,"data-svelte-h":!0}),w(u)!=="svelte-13yjc7y"&&(u.textContent=_),x=v(r),m=h(r,"P",{class:!0,"data-svelte-h":!0}),w(m)!=="svelte-104uqwt"&&(m.textContent=b),J=v(r),P=h(r,"IMG",{src:!0,class:!0}),W=v(r),C=h(r,"P",{class:!0,"data-svelte-h":!0}),w(C)!=="svelte-1mj70g1"&&(C.textContent=ie),Q=v(r),$=h(r,"IMG",{src:!0,class:!0}),K=v(r),I=h(r,"H1",{class:!0,"data-svelte-h":!0}),w(I)!=="svelte-1j7a28v"&&(I.textContent=ne),X=v(r),S=h(r,"P",{class:!0,"data-svelte-h":!0}),w(S)!=="svelte-1eu47bu"&&(S.textContent=oe),Y=v(r),A=h(r,"UL",{"data-svelte-h":!0}),w(A)!=="svelte-16jt8bs"&&(A.innerHTML=re),Z=v(r),M=h(r,"H1",{class:!0,"data-svelte-h":!0}),w(M)!=="svelte-18tmwyc"&&(M.textContent=le),ee=v(r),D=h(r,"P",{class:!0,"data-svelte-h":!0}),w(D)!=="svelte-vp6v5j"&&(D.textContent=ce),r.forEach(j),this.h()},h(){l(a,"class","svelte-2akoly"),l(s,"class","svelte-2akoly"),l(u,"class","svelte-2akoly"),l(m,"class","svelte-2akoly"),de(P.src,ae=E+"/assets/Er_diagram.png")||l(P,"src",ae),l(P,"class","border-2 border-red-400"),l(C,"class","mt-4 svelte-2akoly"),de($.src,se=E+"/assets/database_image.png")||l($,"src",se),l($,"class","border-2 border-red-400"),l(I,"class","svelte-2akoly"),l(S,"class","svelte-2akoly"),l(M,"class","svelte-2akoly"),l(D,"class","mb-8 svelte-2akoly"),l(e,"class","lg:mx-32 md:mx-16 mx-8 my-4 text-center md:text-left")},m(k,r){U(k,e,r),V(t,e,null),i(e,n),i(e,a),i(e,o),i(e,s),i(e,y),i(e,u),i(e,x),i(e,m),i(e,J),i(e,P),i(e,W),i(e,C),i(e,Q),i(e,$),i(e,K),i(e,I),i(e,X),i(e,S),i(e,Y),i(e,A),i(e,Z),i(e,M),i(e,ee),i(e,D),L=!0},p:z,i(k){L||(H(t.$$.fragment,k),L=!0)},o(k){F(t.$$.fragment,k),L=!1},d(k){k&&j(e),B(t)}}}let ke="Social Media Database Management System",_e="September 2023 - December 2023";class Te extends O{constructor(e){super(),R(this,e,null,je,G,{})}}function Ce(p){let e,t,n,a,c=`<div class="pr-8"><h1 class="leading-tight mt-8 md:mt-4 lg:mt-2 svelte-e4g5hf">Project Overview</h1> <p class="mb-10 svelte-e4g5hf">Geo Real is a cross-platform mobile application that allows users to
        create and share location-based picture galleries. Users create
        &#39;Geo-Spheres&#39; at specific locations like dorm rooms or houses. When
        friends enter these zones, they&#39;re prompted to capture a photo,
        contributing to the communal photo collection of that Geo Sphere. This
        innovative approach offers a unique way to chronicle memories linked to
        the places where they&#39;re made.</p> <h1 class="leading-tight svelte-e4g5hf">Origins</h1> <p class="mb-10 svelte-e4g5hf">The project originated at a hackathon at the University of Washington
        called DubHacks. As a newcomer to programming, I found this hackathon to
        be a significant learning experience. Although my initial contributions
        were limited, the high-pressure environment of the hackathon highlighted
        the areas I needed to focus on and motivated me to enhance my skills.</p> <h1 class="leading-tight svelte-e4g5hf">Development and Technical Challenges</h1> <p class="svelte-e4g5hf">Initially, Geo Real was an Android app built with Java, featuring a
        Python Flask backend. About eight months later, after learning Flutter,
        I revisited the project to develop a new frontend using my newly
        acquired Flutter skills. A major challenge was implementing
        location-based tracking, achieved by leveraging the Google Maps API.</p></div> <div class="flex justify-center"><img src="${E}/assets/geo-real.PNG" class="object-contain md:px-32 sm:px-32 lg:px-2 mx-8"/></div>`,o,s,g="Future Enhancements",y,u,_=`A current challenge is enabling the app to track location when the phone is
    turned off. Due to the limitations of the Apple ecosystem and its
    integration with Flutter, this feature has been particularly challenging to
    implement. Continued work in this area is a key focus for future
    development.`,x;return t=new te({props:{title:Ie,date:Se}}),{c(){e=d("div"),q(t.$$.fragment),n=f(),a=d("div"),a.innerHTML=c,o=f(),s=d("h1"),s.textContent=g,y=f(),u=d("p"),u.textContent=_,this.h()},l(m){e=h(m,"DIV",{class:!0});var b=T(e);N(t.$$.fragment,b),n=v(b),a=h(b,"DIV",{class:!0,"data-svelte-h":!0}),w(a)!=="svelte-1nnlfjq"&&(a.innerHTML=c),o=v(b),s=h(b,"H1",{class:!0,"data-svelte-h":!0}),w(s)!=="svelte-fyppg8"&&(s.textContent=g),y=v(b),u=h(b,"P",{class:!0,"data-svelte-h":!0}),w(u)!=="svelte-xmtgho"&&(u.textContent=_),b.forEach(j),this.h()},h(){l(a,"class","flex items-center flex-col lg:flex-row"),l(s,"class","leading-tight svelte-e4g5hf"),l(u,"class","mb-8 svelte-e4g5hf"),l(e,"class","lg:mx-32 md:mx-16 mx-8 my-4 text-center md:text-left")},m(m,b){U(m,e,b),V(t,e,null),i(e,n),i(e,a),i(e,o),i(e,s),i(e,y),i(e,u),x=!0},p:z,i(m){x||(H(t.$$.fragment,m),x=!0)},o(m){F(t.$$.fragment,m),x=!1},d(m){m&&j(e),B(t)}}}let Ie="Geo Real",Se="October 2022, August 2023 - September 2023";class Me extends O{constructor(e){super(),R(this,e,null,Ce,G,{})}}function De(p){let e,t,n,a,c=`<div class="flex flex-col lg:flex-row items-center"><div class="pr-8"><h1 class="leading-tight svelte-1tja3d4">Project Overview</h1> <p class="lg:mb-4 xl:mb-16 svelte-1tja3d4">I embarked on an exciting project called IDEA (Interactive Daily
          Epilepsy Assistant) while working as a Product Manager Intern and
          Software Engineer Intern at <a class="text-red-400" href="https://www.edeecare.com/" target="_blank">Edee Care</a>, a startup dedicated to creating solutions for people with epilepsy.
          The mobile app, IDEA, was developed to help users track their
          seizures, triggers, and medication. Leading the development of this
          project was not only technically demanding but also incredibly
          impactful, aiming to improve the quality of life for those living with
          epilepsy.</p> <h1 class="leading-tight svelte-1tja3d4">The Development Journey</h1> <p class="svelte-1tja3d4">As the sole software developer on this project, I faced the task of
          building the app using Flutter for the frontend, Node.js for the
          backend, and MongoDB for data management. Despite my limited prior
          experience with these technologies, I was committed to learning them
          from scratch. This required a deep understanding of not only the
          technical aspects but also how to integrate them seamlessly into a
          functional and user-friendly application.</p> <p class="svelte-1tja3d4">The most valuable skill I honed during this project was adaptability
          in technology. Quickly assimilating new programming languages and
          frameworks was essential. The experience of developing an app
          single-handedly that positively impacted the real world was immensely
          gratifying and a significant milestone in my career.</p></div> <div class="flex justify-center"><img src="${E}/assets/journal1.png" class="object-contain md:px-32 sm:px-32 lg:px-2 mx-8 my-6"/></div></div> <h1 class="leading-tight svelte-1tja3d4">Project Phases</h1> <h2 class="svelte-1tja3d4">1. IDEA SMS Pilot Program</h2> <p class="svelte-1tja3d4">The project started with the IDEA SMS pilot program, a test to both gather
      market information and validate the company&#39;s value proposition. It
      utilized Heymarket to manage SMS communications, sending periodic text
      messages to users as a personalized assistant and prompting them to
      complete a Typeform survey twice a day. My role was to manage the data
      collected from users and create weekly reports detailing their condition.
      I also conducted interviews with our initial users. The success of this
      trial led us to begin phase 2: the IDEA mobile application V1.</p> <h2 class="pt-5 svelte-1tja3d4">2. IDEA Mobile Application V1</h2> <p class="svelte-1tja3d4">After months of piloting our SMS program, we leveraged our insights to
      develop the initial version of our mobile application. As the lead
      developer, I opted for Flutter, valuing its cross-platform functionality,
      and integrated it with a Node.js and JavaScript backend, utilizing Express
      for efficient routing and MongoDB with Mongoose for effective data
      management. This initial MVP featured core functionalities like recording
      seizure incidents, identifying triggers, and tracking medications. Though
      basic, it was instrumental in launching the app on Apple TestFlight for
      user trials. This process was not only pivotal in introducing the app to
      users but also in enhancing my understanding of Flutter, Node, and
      MongoDB. Initially unfamiliar with these technologies, I navigated through
      early challenges and was now ready to apply these valuable lessons to the
      forthcoming iteration of the mobile MVP.</p> <img src="${E}/assets/old_ui.PNG"/> <h4 class="svelte-1tja3d4">Key Skills Developed</h4> <li>Understanding and implementing an effective file structure.</li> <li>Proficiency in using Git for version control.</li> <li>Developed effective state management techniques.</li> <li>Implementing robust authentication mechanisms utilizing <span class="text-red-400"><a href="https://www.npmjs.com/package/bcrypt" target="_blank">Bcrypt</a></span>.</li> <li>Gaining expertise in NodeJS and API development.</li> <li>Developing a strong foundation in MongoDB usage.</li> <h2 class="pt-5 svelte-1tja3d4">3. A Major Overhaul</h2> <p class="svelte-1tja3d4">The second iteration of the IDEA app marked a significant transformation,
      initiated by feedback from V1 testing and the addition of new UX
      designers. This phase included a revamp of Edee Care’s visual style,
      resulting in a major rewrite of the frontend code for better integration
      of design changes, and <a href="#SManagement" class="text-red-400">improvements in state management</a>
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
        application. This change not only improved scalability but also
        minimized the coupling between widgets, making them more independent and
        test-friendly. With Provider, only UI components listening to state
        changes needed to rebuild, enhancing performance.</p> <h4 class="svelte-1tja3d4">Architectural Shift to MVVM with Provider</h4> <p class="svelte-1tja3d4">To fully leverage Provider&#39;s capabilities, I transitioned our
        application&#39;s architecture from MVC (Model View Controller) to MVVM
        (Model View ViewModel). This change complemented Provider’s design,
        which is geared towards efficient state distribution in Flutter. MVVM’s
        reactive programming style, supported by ChangeNotifierProvider, allows
        UI components to automatically update in response to ViewModel state
        changes. This architecture enhanced the separation between business
        logic and UI code, improving testability and maintainability.</p> <h1 id="Database" class="leading-tight svelte-1tja3d4">Rethinking the Database Schema for Customization</h1> <p class="svelte-1tja3d4">The original database design in MongoDB centered around a &quot;User&quot; object.
        This object encapsulated essential information like email, password, and
        name. Additionally, it linked to other related objects such as
        Medication, Seizure_event, and Triggers. For instance, within the &quot;User&quot;
        object, a field named &#39;seizures&#39; held an array of ObjectIDs, each
        pointing to a distinct seizure event. We utilized
        <span class="text-red-400"><a href="https://mongoosejs.com/" target="_blank">Mongoose</a></span>
        on the server to enforce and manage this schema effectively.</p> <p class="svelte-1tja3d4">Our preference for a NoSQL database like MongoDB was driven by its
        inherent flexibility. As our application was poised for continuous
        evolution, the ability to effortlessly add new fields or modify the
        existing schema was crucial. MongoDB&#39;s dynamic nature perfectly suited
        our needs for adaptability.</p> <h4 class="svelte-1tja3d4">Customization for Individual User Needs</h4> <p class="svelte-1tja3d4">Given the specific requirements of a health application, particularly
        one focused on epilepsy, we recognized the need for greater
        personalization. A one-size-fits-all approach was insufficient, as each
        user&#39;s condition and triggers are unique. This became particularly
        evident with our first user in the pilot program, who reported specific
        triggers related to Fibromyalgia.</p> <p class="svelte-1tja3d4">To enhance customization, we introduced the concept of user-defined
        types. While we had a standard set of triggers applicable to all users
        (like alcohol, sunlight, and heat), we also wanted users to have the
        ability to add specific triggers unique to their condition, such as
        Fibromyalgia. However, integrating this feature within the existing
        schema presented challenges.</p> <h4 class="svelte-1tja3d4">Collaborative Schema Development</h4> <p class="svelte-1tja3d4">Working alongside the CTO and our machine learning engineer, we crafted
        a new schema that aligned with our vision of a highly personalized user
        experience. This revised schema included a collection named &#39;constants&#39;,
        consisting of &#39;type&#39; and &#39;value&#39; fields. For example, under a &#39;triggers&#39;
        collection, a &#39;lookup_name&#39; field would reference an ObjectID
        corresponding to a &#39;constant&#39;. This constant would define a specific
        trigger, such as Fibromyalgia (type: Trigger, value: Fibromyalgia). This
        approach was also applied to other constant types like Journal
        Categories, Medications, and Chronic Conditions.</p> <p class="svelte-1tja3d4">Our overarching goal was to create a mobile application that could
        provide tailored journal prompts, specifically catering to the
        individual user&#39;s condition. This revamped database schema was a pivotal
        step in realizing our ambition of a customizable and user-centric mobile
        health application.</p> <h1 id="Backend" class="leading-tight svelte-1tja3d4">Transitioning the Backend to TypeScript</h1> <p class="svelte-1tja3d4">A key decision in our development process was the transition from
        JavaScript to TypeScript for our NodeJS server. Recognizing TypeScript&#39;s
        growing popularity and its array of benefits, I saw our project&#39;s
        transitional phase as an great moment to adopt this technology. Given
        the relative simplicity of our server architecture, the shift to
        TypeScript was a smooth and straightforward process. For MongoDB schema
        implementation, we utilized <span class="text-red-400"><a href="https://typegoose.github.io/typegoose/" target="_blank">Typegoose</a> </span>, which seamlessly integrated with TypeScript.</p> <h4 class="svelte-1tja3d4">Key Benefits of Using TypeScript</h4> <p class="svelte-1tja3d4"><span class="font-bold">Enhanced Developer Experience:</span> The switch
        to TypeScript marked a significant improvement in our development workflow.
        TypeScript&#39;s robust type system provided improved autocompletion, more precise
        IntelliSense, and superior code navigation capabilities. These features not
        only streamlined coding but also reduced the likelihood of errors.</p> <p class="svelte-1tja3d4"><span class="font-bold">Increased Code Reliability:</span>
        TypeScript&#39;s strict typing instilled greater confidence in the accuracy of
        our code. By ensuring type correctness, TypeScript substantially minimized
        common coding mistakes. This level of reliability was particularly beneficial
        for debugging, making the process more efficient and less prone to errors.</p> <div class="lg:flex lg:items-center"><img src="${E}/assets/health_ui.PNG" class="lg:w-1/2"/> <div class="lg:w-1/2"><h1 id="Health" class="leading-tight svelte-1tja3d4">Enhanced Onboarding and Health Integration Process</h1> <p class="svelte-1tja3d4">Aligned with our commitment to delivering a highly customizable user
            experience, we implemented a thorough onboarding process for the
            IDEA app. This process was designed to gather essential user
            information, creating a comprehensive profile. It encompassed the
            collection of basic personal details such as the user&#39;s name and
            age, alongside specific epilepsy-related information. Crucially, it
            also provided users with the opportunity to define their personal
            health goals, tailoring the app to their unique needs and
            preferences.</p> <h4 class="svelte-1tja3d4">Integration with Health Applications</h4> <p class="svelte-1tja3d4">A pivotal component of our application was the integration with
            users’ mobile device health applications. This feature was central
            to one of our primary objectives: the acquisition of real-time
            health data through smartwatches. To facilitate this, I utilized a
            health package that enabled seamless integration with major health
            platforms like Apple Health and Google Fit. This integration was an
            initial step towards developing a robust system for real-time health
            data tracking. While the current implementation showed promising
            functionality, it exhibited some minor bugs. Addressing these issues
            and enhancing the system&#39;s capabilities will be a key focus in our
            ongoing development, ensuring we evolve towards a sophisticated
            health tracking solution.</p></div></div> <h1 class="svelte-1tja3d4">Conclusion</h1> <p class="mb-2 svelte-1tja3d4">Working on the IDEA project at Edee Care has been the largest and most
        enriching project I&#39;ve undertaken in my career thus far. Working in both
        Product Management and Software Engineering as an intern, I navigated
        new technologies and complex problem-solving, gaining invaluable skills.
        This project, significant in its impact on epilepsy care, not only
        sharpened my technical abilities but also deepened my insight into
        user-focused design and innovation.</p> <p class="mb-10 svelte-1tja3d4">Be sure to check out <a class="text-red-400" href="https://www.edeecare.com/" target="_blank">Edee Care</a> for updates on their product!</p></div>`,o;return t=new te({props:{title:Ee,date:Pe}}),{c(){e=d("div"),q(t.$$.fragment),n=f(),a=d("div"),a.innerHTML=c,this.h()},l(s){e=h(s,"DIV",{class:!0});var g=T(e);N(t.$$.fragment,g),n=v(g),a=h(g,"DIV",{class:!0,"data-svelte-h":!0}),w(a)!=="svelte-jacprs"&&(a.innerHTML=c),g.forEach(j),this.h()},h(){l(a,"class","space-y-4"),l(e,"class","lg:mx-32 md:mx-16 mx-8 my-4 text-center md:text-left")},m(s,g){U(s,e,g),V(t,e,null),i(e,n),i(e,a),o=!0},p:z,i(s){o||(H(t.$$.fragment,s),o=!0)},o(s){F(t.$$.fragment,s),o=!1},d(s){s&&j(e),B(t)}}}let Ee="IDEA",Pe="January 2023 - October 2023";function $e(p){const e=()=>{};return fe(()=>(window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)})),[]}class Ae extends O{constructor(e){super(),R(this,e,$e,De,G,{})}}function ze(p){let e,t,n;var a=p[0];function c(o,s){return{}}return a&&(e=ge(a,c())),{c(){e&&q(e.$$.fragment),t=me()},l(o){e&&N(e.$$.fragment,o),t=me()},m(o,s){e&&V(e,o,s),U(o,t,s),n=!0},p(o,[s]){if(s&1&&a!==(a=o[0])){if(e){ye();const g=e;F(g.$$.fragment,1,0,()=>{B(g,1)}),ve()}a?(e=ge(a,c()),q(e.$$.fragment),H(e.$$.fragment,1),V(e,t.parentNode,t)):e=null}},i(o){n||(e&&H(e.$$.fragment,o),n=!0)},o(o){e&&F(e.$$.fragment,o),n=!1},d(o){o&&j(t),e&&B(e,o)}}}function qe(p,e,t){let{data:n}=e,a;return p.$$set=c=>{"data"in c&&t(1,n=c.data)},p.$$.update=()=>{p.$$.dirty&2&&(n?.project==="idea"?(t(0,a=Ae),console.log("hello")):n?.project==="georeal"?t(0,a=Me):n?.project==="reddit-dbms"?t(0,a=Te):t(0,a=null))},[a,n]}class Ge extends O{constructor(e){super(),R(this,e,qe,ze,G,{data:1})}}export{Ge as component,Be as universal};
