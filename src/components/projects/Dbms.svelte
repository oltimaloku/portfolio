<script>
  import ProjectHeader from "../ProjectHeader.svelte";
  let title = "Social Media Database Management System";
  let date = "September 2023 - December 2023";
  import { base } from "$app/paths";
</script>

<div
  class="lg:mx-32 md:mx-16 mx-8 my-4 text-center md:text-left max-w-screen-2xl"
>
  <ProjectHeader {title} {date} />
  <h1>Project Overview</h1>
  <p>
    As part of the Introduction to Relational Databases course (CPSC 304) at the
    University of British Columbia, I participated in a group project to develop
    a Database Management System (DBMS) for a Reddit-styled social media
    platform. This project focused on providing comprehensive database
    management for an application with various features, including user
    interactions, communities, awards, and admin functionalities.
  </p>

  <h1>Development Process</h1>
  <p>
    The initial phase of the project involved creating an Entity-Relationship
    (ER) diagram to outline the database structure. The ER diagram, which laid
    the foundation for our database design, is illustrated below:
  </p>
  <img src="{base}/assets/Er_diagram.png" class="border-2 border-red-400" />
  <p class="mt-4">
    This is an example of what a projection query on users looks like with some
    test data:
  </p>
  <img src="{base}/assets/database_image.png" class="border-2 border-red-400" />

  <h1>Technical Implementation</h1>
  <p>
    We built the project using the Oracle database with SQL*Plus and implemented
    it in Java, utilizing JDBC for database access. Key features of our
    application included:
  </p>
  <ul>
    <li>
      - Development of an intuitive Java Swing interface for seamless database
      interactions and real-time data visualization.
    </li>
    <li>
      - Utilization of advanced SQL features like nested statements, division,
      and aggregation using group-by and having clauses.
    </li>
    <li>
      - Effective integration of the ER diagram into the application to ensure
      robust database integrity.
    </li>
  </ul>

  <h1>Future Enhancements</h1>
  <p class="mb-8">
    Moving forward, the next steps for this project include refining the user
    interface and enhancing the flexibility of the database queries to make them
    more customizable.
  </p>
</div>

<style>
  h1 {
    font-size: 35px;
    padding-top: 20px;
    font-weight: bold;
    padding-bottom: 20px;
    line-height: 1.25;
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
