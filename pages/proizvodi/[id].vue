<template>
  <main id="main-content" class="single-product-page">
    <section class="text-center max-w-[1100px] mx-auto px-5">
      <h1>{{ productsJson[productId].name_sr }}</h1>
      <p>{{ productsJson[productId].long_desc_sr }}</p>
      <br>
      <p>Za više informacija kontaktirajte nas:</p>
      <div class="flex flex-wrap gap-3 justify-center py-5">
        <a href="tel:+381654441560" class="btn-2 block w-fit">Poziv</a>
        <NuxtLink to="/proizvodi" class="btn-2 block w-fit">Svi proizvodi</NuxtLink>
      </div>
    </section>
    <section class="flex flex-wrap items-center justify-center gap-2 p-2 mt-5">
      <img class="w-1/4 object-cover border border-brand-black" v-for="(image, index) in images" :key="index" :src="image" alt="" />
    </section>
  </main>
</template>

<script setup>
import productsJson from '~/assets/products_db.json';

const route = useRoute()
const productId = transformToAcronym(route.params.id);

// Use import.meta.glob to import all images from the directory
const images = ref([]);
const imageModules = import.meta.glob('@/assets/images/products/*.webp');

// Load all image URLs into the `images` array
for (const path in imageModules) {
  imageModules[path]().then((mod) => {
    if (mod.default.includes(productId)) {
      images.value.push(mod.default);
    }
  });
}
</script>