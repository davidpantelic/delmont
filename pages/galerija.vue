<template>
  <main id="main-content" class="products-page">
    <section class="text-center">
      <h1>Galerija</h1>
      <p>Pogledajte slike naših proizvoda, njihove izrade i montaže.</p>
      <p>Izrada po meri i prevoz na vašu adresu.</p>
      <div class="flex flex-wrap gap-3 justify-center py-5">
        <a href="tel:+381631871034" class="btn-2 block w-fit">Poziv</a>
        <a href="mailto:info@panic-plast.rs" class="btn-2 block w-fit">Email</a>
      </div>
    </section>
    <section class="flex flex-wrap items-center justify-center gap-2 p-2 mt-5">
      <img class="w-[350px] h-[350px] grow object-cover border border-brand-black" v-for="(image, index) in images" :key="index" :src="image" alt="" />
    </section>
    <section>
      <div class="flex flex-wrap gap-3 justify-center py-5">
        <NuxtLink to="/proizvodi/plasticni-horizontalni-rezervoari" class="btn-2 block w-fit">Plastični horiz. rezervoari</NuxtLink>
        <NuxtLink to="/proizvodi/plasticni-vertikalni-rezervoari" class="btn-2 block w-fit">Plastični vertik. rezervoari</NuxtLink>
        <NuxtLink to="/proizvodi/plasticne-septicke-jame" class="btn-2 block w-fit">Plastični septičke jame</NuxtLink>
        <NuxtLink to="/proizvodi/plasticni-separatori" class="btn-2 block w-fit">Plastični separatori</NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup>
// Use import.meta.glob to import all images from the directory
const images = ref([]);
const imageModules = import.meta.glob('@/assets/images/products/*.webp');

// Load all image URLs into the `images` array
for (const path in imageModules) {
  imageModules[path]().then((mod) => {
    images.value.push(mod.default);
  });
}
</script>