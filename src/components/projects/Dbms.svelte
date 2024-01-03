<script>
  import ProjectHeader from "../ProjectHeader.svelte";
  let title = "Social Media Database Management System";
  let date = "September 2023 - December 2023";
</script>

<ProjectHeader {title} {date} />

<div class="m-8">
  <h1>Project Overview</h1>
  <p>
    As part of the Introduction to Relational Databases course (CPSC 213) at the
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
  <img src="../../src/assets/Er_diagram.png" />
  <p>
    This is an example of what our database management system looks like with
    some test data:
  </p>
  <img src="../../src/assets/database_image.png" />

  <h2>Technical Implementation</h2>
  <p>
    We built the project using the Oracle database with SQL*Plus and implemented
    it in Java, utilizing JDBC for database access. Key features of our
    application included:
  </p>
  <ul>
    <li>
      Development of an intuitive Java Swing interface for seamless database
      interactions and real-time data visualization.
    </li>
    <li>
      Utilization of advanced SQL features like nested statements, division, and
      aggregation using group-by and having clauses.
    </li>
    <li>
      Effective integration of the ER diagram into the application to ensure
      robust database integrity.
    </li>
  </ul>

  <h2>Future Enhancements</h2>
  <p>
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
