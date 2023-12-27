<script>
  import { onMount } from "svelte";

  // `htmlContent` is directly exported from the `load` function
  export let data;

  // Debugging
  let html;
  onMount(() => {
    fetchHtml();
  });
  const fetchHtml = async () => {
    html = await data.htmlContent;
  };

  /*
  export let data;
  */
</script>

<!--
<article>
  <h1>{data.title}</h1>
  <p>Published: {data.date}</p>
  <svelte:component this={data.content} />
</article>
-->

<div>
  {@html html}
</div>
