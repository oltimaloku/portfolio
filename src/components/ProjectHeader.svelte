<script>
  export let title;
  export let date;
</script>

<div class="p-8 border rounded border-solid border-violet-700">
  <div class="flex justify-center w-full">
    <div class="flex flex-col items-center justify-between">
      <h1 class="text-2xl">{title}</h1>
      <p class="font-bold text-xl p-2">{date}</p>
    </div>
  </div>
</div>

<style>
  h1 {
    font-size: 35px;
  }
</style>
