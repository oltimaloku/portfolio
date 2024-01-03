<script>
  import Idea from "../../../components/projects/Idea.svelte";
  import GeoReal from "../../../components/projects/GeoReal.svelte";
  import Dbms from "../../../components/projects/Dbms.svelte";

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

<svelte:component this={ComponentToRender} />
