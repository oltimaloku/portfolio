<script>
  export let step;
  import { base } from "$app/paths";
</script>

<a
  href={`${base}/projects${step.href}`}
  class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-red-700 text-center group cursor-pointer hover:border-red-400 duration-200"
>
  <div
    class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 mx-auto duration-200"
  >
    <i class={step.icon} />
  </div>
  <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">{step.name}</h3>
  {#if step.technologies}
    <div>
      {#each step.technologies as tech}
        <div class="group relative px-4 inline-block text-center">
          <i class="{tech.class} text-5xl hover:{tech.color}" />
          <p
            class="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-transform transition-opacity text-xs mt-2"
          >
            {tech.name}
          </p>
        </div>
      {/each}
    </div>
  {/if}
  <slot />
  <div class="flex-1 flex justify-between gap-4 items-center">
    <div
      class="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:h-0 after:right-full after:w-full after:h-full after:bg-white after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"
    >
      <p class="relative z-4">Go to &rarr;</p>
    </div>
  </div>
</a>
