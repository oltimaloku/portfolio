<script>
  import ProjectHeader from "../ProjectHeader.svelte";
  import { base } from "$app/paths";
  let title = "Geo Real";
  let date = "October 2022, August 2023 - September 2023";
</script>

<ProjectHeader {title} {date} />
<div class="flex items-center flex-col lg:flex-row">
  <div class="pr-8">
    <h1 class="leading-tight mt-8 md:mt-4 lg:mt-2">Project Overview</h1>
    <p class="mb-10">
      Geo Real is a cross-platform mobile application that allows users to
      create and share location-based picture galleries. Users create
      'Geo-Spheres' at specific locations like dorm rooms or houses. When
      friends enter these zones, they're prompted to capture a photo,
      contributing to the communal photo collection of that Geo Sphere. This
      innovative approach offers a unique way to chronicle memories linked to
      the places where they're made.
    </p>

    <h1 class="leading-tight">Origins</h1>
    <p class="mb-10">
      The project originated at a hackathon at the University of Washington
      called DubHacks. As a newcomer to programming, I found this hackathon to
      be a significant learning experience. Although my initial contributions
      were limited, the high-pressure environment of the hackathon highlighted
      the areas I needed to focus on and motivated me to enhance my skills.
    </p>

    <h1 class="leading-tight">Development and Technical Challenges</h1>
    <p>
      Initially, Geo Real was an Android app built with Java, featuring a Python
      Flask backend. About eight months later, after learning Flutter, I
      revisited the project to develop a new frontend using my newly acquired
      Flutter skills. A major challenge was implementing location-based
      tracking, achieved by leveraging the Google Maps API.
    </p>
  </div>
  <div class="flex justify-center">
    <img
      src="{base}/assets/geo-real.PNG"
      class="object-contain md:px-32 sm:px-32 lg:px-2 mx-8"
    />
  </div>
</div>
<div class="flex items-center flex-col lg:flex-row">
  <div class="flex justify-center">
    <img
      src="{base}/assets/georeal_gallery.PNG"
      class="object-contain md:px-32 sm:px-32 lg:px-2 mx-8"
    />
  </div>
  <div class="pr-8">
    <h1 class="leading-tight">Features</h1>
    <p class="mb-8">
      The app features a user-friendly interface that allows users to create,
      share and view geo-fenced picture galleries. The application tracks the
      location and identifies when they have entered a Geo-Sphere. Users are
      then prompted to take a photo, which is then added to the communal
      gallery. The app also features a map view that displays the location of
      all Geo-Spheres. Users can decide between a list view and a map view to
      see geo-spheres near them.
    </p>
    <h1 class="leading-tight">Future Enhancements</h1>
    <p class="mb-8">
      A current challenge is enabling the app to track location when the phone
      is turned off. Due to the limitations of the Apple ecosystem and its
      integration with Flutter, this feature has been particularly challenging
      to implement. Continued work in this area is a key focus for future
      development.
    </p>
  </div>
</div>

<style>
  h1 {
    font-size: 35px;

    font-weight: bold;
    padding-bottom: 20px;
  }

  h2 {
    font-size: 24px;
    padding-top: 20px;
    font-weight: 600;
    padding-bottom: 20px;
  }

  h4 {
    font-size: 22px;
    padding-top: 20px;
    padding-bottom: 5px;
    font-weight: 500;
  }

  p {
    padding-bottom: 10px;
  }
</style>
