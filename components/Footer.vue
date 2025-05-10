<template>
  <footer>
    <div class="bg-brand-black text-brand-orange w-full p-5 !text-center">
      <div class="flex flex-wrap gap-x-3 justify-center items-center">
        <p class="p-0">
          <NuxtLink to="/smart-home" class="hover:underline"
            >Smart home</NuxtLink
          >
        </p>
        <p class="p-0">
          <NuxtLink to="/solarni-paneli" class="hover:underline"
            >Solarni paneli</NuxtLink
          >
        </p>
        <p class="p-0">
          <NuxtLink to="/video-nadzor" class="hover:underline"
            >Video nadzor</NuxtLink
          >
        </p>
        <p class="p-0">
          <NuxtLink to="/alarmni-sistemi" class="hover:underline"
            >Alarmni sistemi</NuxtLink
          >
        </p>
        <p class="p-0">
          <NuxtLink to="/kontrola-pristupa" class="hover:underline"
            >Kontrola pristupa</NuxtLink
          >
        </p>
        <p class="p-0">
          <NuxtLink to="/elektro-instalacije" class="hover:underline"
            >Elektro instalacije</NuxtLink
          >
        </p>
        <p class="p-0">
          <NuxtLink to="/o-nama" class="hover:underline">O nama</NuxtLink>
        </p>
        <p class="p-0">
          <NuxtLink to="/politika-privatnosti" class="hover:underline"
            >Politika privatnosti</NuxtLink
          >
        </p>
      </div>
      <div class="flex flex-wrap gap-3 justify-center items-center my-3">
        <UTooltip text="Ovaj veb-sajt je pristupačan svima.">
          <NuxtImg
            class="w-auto h-20"
            src="/accessibility_icon_yellow.png"
            alt="Pristupačnost bedž"
          />
        </UTooltip>
        <UTooltip text="Webdak - izrada web sajtova i aplikacija.">
          <NuxtImg
            class="w-auto h-20"
            src="/webdak_logo.png"
            alt="Pristupačnost bedž"
          />
        </UTooltip>
      </div>
      <p>
        Izrada web sajtova i aplikacija -
        <a href="mailto:info@webdak.rs" class="hover:underline">Webdak</a>
      </p>
      <p>&copy; {{ getCurrentYear }} Delmont 014. Sva prava zadržana.</p>
    </div>
  </footer>
</template>

<script setup>
const getCurrentYear = computed(() => {
  return new Date().getFullYear();
});
</script>
