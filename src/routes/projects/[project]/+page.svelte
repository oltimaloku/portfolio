<script>
  import Dbms from "../../../components/projects/Dbms.svelte";
  import GeoReal from "../../../components/projects/GeoReal.svelte";
  import Idea from "../../../components/projects/Idea.svelte";

  export let data;

  let ComponentToRender;
  $: {
    if (data?.project === "idea") {
      ComponentToRender = Idea;
      console.log("hello");
    } else if (data?.project === "georeal") {
      ComponentToRender = GeoReal;
    } else if (data?.project === "reddit-dbms") {
      ComponentToRender = Dbms;
    } else {
      ComponentToRender = null; // or some default component
    }
  }
</script>

<div class="my-4 text-center md:text-left mx-auto max-w-screen-xl">
  <svelte:component this={ComponentToRender} />
</div>
