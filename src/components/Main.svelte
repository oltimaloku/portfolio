<script>
  import Step from "./Step.svelte";

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
        Hi! I'm <span class="poppins text-violet-400">Olti</span> Maloku <br />
        Full Stack
        <span class="poppins text-violet-400">Developer</span>
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        My <span class="text-violet-400">favourite tech</span> includes Javascript
        (NEXT.JS or SvelteKit), TailwindCSS, Node.js + Express.js & PostgreSQL or
        Firebase/Firestore!
      </p>
      <a
        class="blueShadow mx-auto lg:mr-auto text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer"
        href="https://www.linkedin.com/in/oltimaloku/"
        target="_blank"
      >
        <div
          class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
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
        Curious to <span class="poppins text-violet-400">see</span> my work?
      </h3>
    </div>
    <a
      href=""
      target="_blank"
      class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200"
    >
      <i class="fa-regular fa-circle-play" />
    </a>
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
          interactions akin to mainstream platforms.
        </p>
      </Step>
    </div>
  </section>
</main>
