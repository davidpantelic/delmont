<template>
  <ul class="flex items-center gap-1 md:gap-2 z-50">
    <li v-for="icon in socIcons" :key="icon.name">
      <a :href="icon.path" :target="icon.target" class="text-3xl p-1 flex justify-center items-center hover:text-brand-black hover:bg-brand-orange rounded"><Icon :name="icon.name"></Icon><span class="sr-only">{{ icon.text }}</span></a>
    </li>
  </ul>
</template>

<script setup>
const socIcons = computed(() => [
  {
    name: 'ic:baseline-facebook',
    path: 'https://www.facebook.com/panicplast/',
    target: '_blank',
    text: 'Facebook stranica'
  },
  {
    name: 'ic:outline-email',
    path: 'mailto:info@panic-plast.rs',
    target: '_self',
    text: 'Email adresa'
  },
  {
    name: 'iconoir:phone',
    path: 'tel:+381631871034',
    target: '_self',
    text: 'Kontakt telefon'
  },
  // {
  //   name: 'hugeicons:location-01',
  //   path: 'https://maps.app.goo.gl/S8mzyqiAnDoXDYcHA',
  //   target: '_blank',
  //   text: 'Lokacija na Google Maps - Dragijevica bb, 14253 Osečina, Srbija - otvara se u novom tabu'
  // },
]);
</script>
