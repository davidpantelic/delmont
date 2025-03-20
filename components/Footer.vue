<template>
  <footer>
    <div class="bg-brand-black text-brand-orange w-full p-5 text-center">
      <p>Copyright &copy; {{ getCurrentYear }} Delmont 014. Sva prava zadržana.</p>
      <div class="flex flex-wrap gap-3 justify-center items-center">
        <p><NuxtLink to="/proizvodi" class="hover:underline">Smart home</NuxtLink></p>
        <p><NuxtLink to="/proizvodi" class="hover:underline">Solarni paneli</NuxtLink></p>
        <p><NuxtLink to="/proizvodi" class="hover:underline">Video nadzor</NuxtLink></p>
        <p><NuxtLink to="/proizvodi" class="hover:underline">Elektro instalacije</NuxtLink></p>
        <p><NuxtLink to="/o-nama" class="hover:underline">O nama</NuxtLink></p>
        <p><NuxtLink to="/politika-privatnosti" class="hover:underline">Politika privatnosti</NuxtLink></p>
      </div>
      <UTooltip text="Ovaj veb-sajt je pristupačan svima." class="w-20 mt-6">
        <NuxtImg class="w-20 h-20" src="/accessibility_icon_yellow.png" alt="Pristupačnost bedž" />
      </UTooltip>
    </div>
  </footer>
</template>

<script setup>
const getCurrentYear = computed(() => {
  return new Date().getFullYear();
})
</script>
