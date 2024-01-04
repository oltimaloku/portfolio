<script>
  import Step from "./Step.svelte";
  import { base } from "$app/paths";
  let steps = [
    {
      name: "IDEA",
      icon: "fa-solid fa-notes-medical",
      href: "/idea",
      technologies: [
        {
          name: "Flutter",
          class: "devicon-flutter-plain colored",
        },
        {
          name: "TypeScript",
          class: "devicon-typescript-plain colored",
        },
        {
          name: "MongoDB",
          class: "devicon-mongodb-plain colored",
        },
        {
          name: "Node.js",
          class: "devicon-nodejs-plain colored",
        },
      ],
    },
    {
      name: "Geo Real",
      icon: "fa-solid fa-earth-americas",
      href: "/georeal",
      technologies: [
        {
          name: "Flutter",
          class: "devicon-flutter-plain colored",
        },
        {
          name: "Python",
          class: "devicon-python-plain colored",
        },
        {
          name: "Firebase",
          class: "devicon-firebase-plain colored",
        },
      ],
    },
    {
      name: "Reddit DBMS",
      icon: "fa-brands fa-reddit",
      href: "/reddit-dbms",
      technologies: [
        {
          name: "Java",
          class: "devicon-java-plain colored",
        },
        {
          name: "MySQL",
          class: "devicon-mysql-plain colored",
        },
        {
          name: "Oracle",
          class: "devicon-oracle-plain colored",
        },
      ],
    },
  ];
</script>

<main class="flex flex-col flex-1 p-4">
  <section
    id="introPage"
    class="grid grid-cols-1 lg:grid-cols-1 gap-10 py-8 sm:py-14"
  >
    <div
      class="flex flex-col lg:justify-center text-center gap-6 md:gap-8 lg:gap-10"
    >
      <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Hi! I'm <span class="poppins text-red-400">Olti</span> Maloku <br />
        Full Stack
        <span class="poppins text-red-400">Developer</span>
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        I'm currently studying <span class="text-red-400">
          Computer Science</span
        >
        and <span class="text-red-400">Business</span>
        at the University of British Columbia!
      </p>
      <a
        class="blueShadow mx-auto lg:mr-auto text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer"
        href="https://www.linkedin.com/in/oltimaloku/"
        target="_blank"
      >
        <div
          class="absolute top-0 right-full w-full h-full bg-red-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
        />
        <h4 class="relative z-9">Get in touch &rarr;</h4>
      </a>
    </div>
  </section>
  <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-lg sm:text-xl md:text-2xl">
        A few of my creative endeavors.
      </h6>
      <h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
        Curious to <span class="poppins text-red-400">see</span> my work?
      </h3>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
      <Step step={steps[0]}>
        <p class="py-8">
          A cross-platform mobile application designed to integrate with Apple
          Health and Google Fit for seamless data collection. Enables users to
          journal key metrics like stress, sleep, and medication, aiding in
          precise seizure tracking. Features include seizure logging, visual
          displays of seizure patterns, and timely notifications. Ideal for
          comprehensive epilepsy self-management.
        </p>
      </Step>
      <Step step={steps[1]}>
        <p class="py-8">
          A cross-platform mobile application enabling users to create and share
          location-based picture galleries. Users craft "Geo Spheres" tied to
          specific locations, like dorm rooms or houses. When friends enter
          these zones, they're prompted to capture a photo, seamlessly
          contributing to that Geo Sphere's communal photo collection. An
          innovative way to chronicle memories, linked to the very spaces they
          were made.
        </p>
      </Step>
      <Step step={steps[2]}>
        <p class="py-8">
          A robust database management system crafted for a social media
          platform inspired by Reddit. Developed using SQL and Java, the system
          facilitates user functionalities such as creating posts, joining
          communities, and awarding commendations. The project primarily
          emphasizes proficient database handling, ensuring seamless
          interactions.
        </p>
      </Step>
    </div>
  </section>
  <section id="about" class="text-center justify-center items-center mb-40">
    <h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl my-4">
      About me
    </h3>
    <div class="flex justify-center my-8">
      <div
        class="border border-red-600 hover:border-red-400 duration-200 h-64 w-64 overflow-hidden rounded-full flex flex-col justify-center items-center"
      >
        <img
          src="{base}/assets/profile_photo.png"
          class="object-cover w-full h-full rounded-full"
        />
      </div>
    </div>
    <div class="space-y-4 lg:mx-64 md:mx-16 sm:mx-8 text-large">
      <h6 class="">
        I am currently in my third year of studies at the University of British
        Columbia. Some of my passions outside of school include soccer, music,
        travelling, and fitness.
      </h6>
      <h6 class="">
        Beyond these interests, my fascination with the world of technology
        plays a significant role in my pursuits. My technical interests
        primarily focus on mobile app development and web development. Recently,
        I have found myself drawn to the space of virtual reality. These areas
        not only captivate my curiosity but also fuel my ambition to build and
        create innovative solutions.
      </h6>
      <h6 class="">
        Being part of <span class="text-red-400"
          ><a href="https://www.ubclaunchpad.com" target="_blank">Launch Pad</a
          ></span
        >, UBC's software engineering club, is one of my current pursuits.
        Collaborating with like-minded peers in a dynamic setting not only
        fosters a deeper connection with the university community but also helps
        build long-lasting relationships.
      </h6>
      <h6 class="">
        For a detailed overview of my professional journey and projects, feel
        free to explore my resume <span class="text-red-400"
          ><a href="{base}/assets/Resume-Olti-December27.pdf" target="_blank"
            >here</a
          ></span
        >!
      </h6>
    </div>
  </section>
  <h3 class="pb-20 text-center">
    This website was built using SvelteKit and Tailwind CSS!
  </h3>
</main>
