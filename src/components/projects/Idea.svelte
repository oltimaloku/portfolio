<div>
  <div class="p-4">
    <div class="flex justify-center w-full">
      <div class="flex flex-col items-center justify-between">
        <h1 class="text-5xl">IDEA</h1>
        <p class="font-bold">January 2023 - October 2023</p>
      </div>
    </div>
  </div>
  <div class="m-4">
    <h1 style="font-size: 30px; margin-bottom: 20px; font-weight: bold;">
      The Project
    </h1>

    <p style="margin-bottom: 20px">
      I embarked on an exciting project called IDEA (Interactive Daily Epilepsy
      Assistant) while working as a Product Manager Intern and Software Engineer
      Intern at [Edee Care](https://www.edeecare.com/), a startup dedicated to
      creating solutions for people with epilepsy. The mobile app, IDEA, was
      developed to help users track their seizures, triggers, and medication. It
      was not only technically demanding but also incredibly impactful, aiming
      to improve the quality of life for those living with epilepsy.
    </p>

    <h1 style="font-size: 30px; margin-bottom: 20px;font-weight: bold;">
      The Development Journey
    </h1>

    <p style="margin-bottom: 20px">
      As the sole software developer on this project, I faced the task of
      building the app using Flutter for the frontend, Node.js for the backend,
      and MongoDB for data management. Despite my limited prior experience with
      these technologies, I was committed to learning them from scratch. This
      required a deep understanding of not only the technical aspects but also
      how to integrate them seamlessly into a functional and user-friendly
      application.
    </p>
    <p style="margin-bottom: 20px">
      The most valuable skill I honed during this project was adaptability in
      technology. Quickly assimilating new programming languages and frameworks
      was essential. The experience of developing an app single-handedly that
      positively impacted the real world was immensely gratifying and a
      significant milestone in my career.
    </p>

    <h1 style="font-size: 30px; margin-bottom: 20px;font-weight: bold;">
      Project Phases
    </h1>

    <h2 style="font-size: 20px; margin-bottom: 20px;font-weight: bold;">
      1. IDEA SMS Pilot Program
    </h2>

    <p style="margin-bottom: 20px">
      The project started with the IDEA SMS pilot program, a test to both gather
      market information and validate the company's value proposition. It
      utilized Heymarket to manage SMS communications, sending periodic text
      messages to users as a personalized assistant and prompting them to
      complete a Typeform survey twice a day. My role was to manage the data
      collected from users and create weekly reports detailing their condition.
      I also conducted interviews with our initial users. The success of this
      trial led us to begin phase 2: the IDEA mobile application V1.
    </p>

    <h2 style="font-size: 30px; margin-bottom: 20px;">
      2. IDEA Mobile Application V1
    </h2>

    <p style="margin-bottom: 20px">
      The project started with the IDEA SMS pilot program, a test to both gather
      market information and validate the company's value proposition. It
      utilized Heymarket to manage SMS communications, sending periodic text
      messages to users as a personalized assistant and prompting them to
      complete a Typeform survey twice a day. My role was to manage the data
      collected from users and create weekly reports detailing their condition.
      I also conducted interviews with our initial users. The success of this
      trial led us to begin phase 2: the IDEA mobile application V1.
    </p>

    <p style="margin-bottom: 20px; font-weight: bold;">Key Skills Developed</p>

    - Understanding and implementing an effective file structure. - Proficiency
    in using Git for version control. - Mastery in state management techniques.
    - Implementing robust authentication mechanisms. - Gaining expertise in
    NodeJS and API development. - Developing a strong foundation in MongoDB
    usage.

    <h2 style="font-size: 30px; margin-bottom: 20px;">3. A Major Overhaul</h2>

    <p style="margin-bottom: 20px">
      The second iteration of the IDEA app marked our most significant change,
      catalyzed by the addition of two new UX designers and valuable insights
      from V1 testing. We embarked on implementing Edee Care’s new visual style,
      encompassing a redesign of fonts, colors, and components. Leveraging
      lessons learned from V1, I decided to rewrite the majority of the frontend
      code, enabling the integration of these enhancements without risking
      breaking changes.
    </p>

    <h4 style="font-size: 20px; margin-bottom: 20px;">
      Transition to Scalable State Management
    </h4>

    <p style="margin-bottom: 20px">
      Initially, our app architecture relied on "parameter passing" for state
      management, a method good for smaller applications but less suitable for
      our expanding project. This technique, akin to passing data from parent to
      child components through props in React, was becoming cumbersome. To
      address this, I shifted to using Provider, a package that centralizes data
      access and facilitates state management within the application. This
      change not only improved scalability but also minimized the coupling
      between widgets, making them more independent and test-friendly. With
      Provider, only UI components listening to state changes needed to rebuild,
      enhancing performance.
    </p>

    <h4 style="font-size: 20px; margin-bottom: 20px;">
      Architectural Shift to MVVM with Provider:
    </h4>

    <p style="margin-bottom: 20px">
      To fully leverage Provider's capabilities, I transitioned our
      application's architecture from MVC to MVVM. This change complemented
      Provider’s design, which is geared towards efficient state distribution in
      Flutter. MVVM’s reactive programming style, supported by
      ChangeNotifierProvider, allows UI components to automatically update in
      response to ViewModel state changes. This architecture enhanced the
      separation between business logic and UI code, improving testability and
      maintainability.
    </p>

    <h2 style="font-size: 30px; margin-bottom: 20px;">
      Rethinking the Database Schema for Customization
    </h2>

    <p style="margin-bottom: 20px">
      The original database design in MongoDB centered around a "User" object.
      This object encapsulated essential information like email, password, and
      name. Additionally, it linked to other related objects such as Medication,
      Seizure_event, and Triggers. For instance, within the "User" object, a
      field named 'seizures' held an array of ObjectIDs, each pointing to a
      distinct seizure event. We utilized Mongoose on the server to enforce and
      manage this schema effectively.
    </p>

    <h4 style="font-size: 20px; margin-bottom: 20px;">
      Choice of MongoDB for Flexibility:
    </h4>

    <p style="margin-bottom: 20px">
      Our preference for a NoSQL database like MongoDB was driven by its
      inherent flexibility. As our application was poised for continuous
      evolution, the ability to effortlessly add new fields or modify the
      existing schema was crucial. MongoDB's dynamic nature perfectly suited our
      needs for adaptability.
    </p>

    <h4 style="font-size: 20px; margin-bottom: 20px;">
      Customization for Individual User Needs:
    </h4>

    <p style="margin-bottom: 20px">
      Given the specific requirements of a health application, particularly one
      focused on epilepsy, we recognized the need for greater personalization. A
      one-size-fits-all approach was insufficient, as each user's condition and
      triggers are unique. This realization became particularly evident when our
      initial user, participating in the pilot program, reported specific
      triggers related to Fibromyalgia.
    </p>

    <h4 style="font-size: 20px; margin-bottom: 20px;">
      Incorporating User-Defined Types:
    </h4>

    <p style="margin-bottom: 20px">
      To enhance customization, we introduced the concept of user-defined types.
      While we had a standard set of triggers applicable to all users (like
      alcohol, sunlight, and heat), we also wanted users to have the ability to
      add specific triggers unique to their condition, such as Fibromyalgia.
      However, integrating this feature within the existing schema presented
      challenges.
    </p>

    <h4 style="font-size: 20px; margin-bottom: 20px;">
      Choice of MongoDB for Flexibility:
    </h4>

    <p style="margin-bottom: 20px">
      Our preference for a NoSQL database like MongoDB was driven by its
      inherent flexibility. As our application was poised for continuous
      evolution, the ability to effortlessly add new fields or modify the
      existing schema was crucial. MongoDB's dynamic nature perfectly suited our
      needs for adaptability.
    </p>

    <h4 style="font-size: 20px; margin-bottom: 20px;">
      Collaborative Schema Development:
    </h4>

    <p style="margin-bottom: 20px">
      Working alongside the CTO and our Machine Learning engineer, we crafted a
      new schema that aligned with our vision of a highly personalized user
      experience. This revised schema included a collection named 'constants',
      consisting of 'type' and 'value' fields. For example, under a 'triggers'
      collection, a 'lookup_name' field would reference an ObjectID
      corresponding to a 'constant'. This constant would define a specific
      trigger, such as Fibromyalgia (type: Trigger, value: Fibromyalgia). This
      approach was also applied to other constant types like Journal Categories,
      Medications, and Chronic Conditions.
    </p>

    <p style="margin-bottom: 20px">
      Our overarching goal was to create a mobile application that could provide
      tailored journal prompts, specifically catering to the individual user's
      condition. This revamped database schema was a pivotal step in realizing
      our ambition of a customizable and user-centric mobile health application.
    </p>

    <h2 style="font-size: 30px; margin-bottom: 20px;">
      Transitioning the Backend to TypeScript
    </h2>

    <p style="margin-bottom: 20px">
      A key decision in our development process was the transition from
      JavaScript to TypeScript for our NodeJS server. Recognizing TypeScript's
      growing popularity and its array of benefits, I saw our project's
      transitional phase as an great moment to adopt this technology. Given the
      relative simplicity of our server architecture, the shift to TypeScript
      was a smooth and straightforward process. For MongoDB schema
      implementation, we utilized Typegoose, which seamlessly integrated with
      TypeScript.
    </p>

    <h4 style="font-size: 20px; margin-bottom: 20px;">
      Key Benefits of Using TypeScript:
    </h4>

    <p style="margin-bottom: 20px">
      Enhanced Developer Experience: The switch to TypeScript marked a
      significant improvement in our development workflow. TypeScript's robust
      type system provided improved autocompletion, more precise IntelliSense,
      and superior code navigation capabilities. These features not only
      streamlined coding but also reduced the likelihood of errors. Increased
      Code Reliability: TypeScript's strict typing instilled greater confidence
      in the accuracy of our code. By ensuring type correctness, TypeScript
      substantially minimized common coding mistakes. This level of reliability
      was particularly beneficial for debugging, making the process more
      efficient and less prone to errors.
    </p>

    <h2 style="font-size: 30px; margin-bottom: 20px;">
      Enhanced Onboarding and Health Integration Process
    </h2>

    <p style="margin-bottom: 20px">
      Aligned with our commitment to delivering a highly customizable user
      experience, we implemented a thorough onboarding process for the IDEA app.
      This process was designed to gather essential user information, creating a
      comprehensive profile. It encompassed the collection of basic personal
      details such as the user's name and age, alongside specific
      epilepsy-related information. Crucially, it also provided users with the
      opportunity to define their personal health goals, tailoring the app to
      their unique needs and preferences.
    </p>

    <h4 style="font-size: 20px; margin-bottom: 20px;">
      Integration with Health Applications:
    </h4>

    <p style="margin-bottom: 20px">
      A pivotal component of our application was the integration with users’
      mobile device health applications. This feature was central to one of our
      primary objectives: the acquisition of real-time health data through
      smartwatches. To facilitate this, I utilized a health package that enabled
      seamless integration with major health platforms like Apple Health and
      Google Fit. This integration was an initial step towards developing a
      robust system for real-time health data tracking. While the current
      implementation showed promising functionality, it exhibited some minor
      bugs. Addressing these issues and enhancing the system's capabilities will
      be a key focus in our ongoing development, ensuring we evolve towards a
      sophisticated health tracking solution.
    </p>
  </div>
</div>
