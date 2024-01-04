<script>
  import Main from "../components/Main.svelte";
  import { onMount } from "svelte";
  import { base } from "$app/paths";
  const particlesUrl = base + "/assets/particles.json";
  onMount(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js";
    script.integrity =
      "sha512-Kef5sc7gfTacR7TZKelcrRs15ipf7+t+n7Zh6mKNJbmW+/RRdCW9nwfLn4YX0s2nO6Kv5Y2ChqgIakaC6PW09A==";
    script.crossOrigin = "anonymous";
    script.onload = () => {
      window.particlesJS.load("particles-js", particlesUrl, () => {
        console.log("particles.js config loaded");
      });
    };
    document.head.appendChild(script);
  });
</script>

<Main />

<div id="particles-js" class="particles-container"></div>

<style>
  .particles-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; /* Ensure it's behind other content */
  }
</style>
