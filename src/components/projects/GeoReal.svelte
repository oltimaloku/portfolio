<script>
  import ProjectHeader from "../ProjectHeader.svelte";
  let title = "Geo Real";
  let date = "October 2022, August 2023 - September 2023";
</script>

<div class="lg:mx-32 md:mx-16 mx-8 my-4">
  <ProjectHeader {title} {date} />
  <h1 class="leading-tight">Project Overview</h1>
  <p>
    Geo Real is a cross-platform mobile application that allows users to create
    and share location-based picture galleries. Users create 'Geo-Spheres' at
    specific locations like dorm rooms or houses. When friends enter these
    zones, they're prompted to capture a photo, contributing to the communal
    photo collection of that Geo Sphere. This innovative approach offers a
    unique way to chronicle memories linked to the places where they're made.
  </p>

  <h1 class="leading-tight">Origins</h1>
  <p>
    The project originated at a hackathon at the University of Washington called
    DubHacks. As a newcomer to programming, I found this hackathon to be a
    significant learning experience. Although my initial contributions were
    limited, the high-pressure environment of the hackathon highlighted the
    areas I needed to focus on and motivated me to enhance my skills.
  </p>

  <h1 class="leading-tight">Development and Technical Challenges</h1>
  <p>
    Initially, Geo Real was an Android app built with Java, featuring a Python
    Flask backend. About eight months later, after learning Flutter, I revisited
    the project to develop a new frontend using my newly acquired Flutter
    skills. A major challenge was implementing location-based tracking, achieved
    by leveraging the Google Maps API.
  </p>

  <h1 class="leading-tight">Future Enhancements</h1>
  <p>
    A current challenge is enabling the app to track location when the phone is
    turned off. Due to the limitations of the Apple ecosystem and its
    integration with Flutter, this feature has been particularly challenging to
    implement. Continued work in this area is a key focus for future
    development.
  </p>
</div>

<style>
  h1 {
    font-size: 35px;
    padding-top: 20px;
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
