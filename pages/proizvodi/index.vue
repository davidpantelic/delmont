<template>
  <main id="main-content" class="products-page">
    <section class="text-center">
      <h1>Proizvodi</h1>
      <p>Ovde možete naći kompletan asortiman naših plastičnih proizvoda.</p>
      <p>Izrada po meri i postavljanje raznih dodataka kao sto su priključci, ventili, odušci, nivokazi, revizije, otvori, merdevine, nogare i drugo.</p>
      <p>Svaki proizvod može biti isporučen na vašu adresu.</p>
      <div class="flex flex-wrap gap-3 justify-center py-5">
        <a href="tel:+381654441560" class="btn-2 block w-fit">Poziv</a>
        <a href="mailto:info@panic-plast.rs" class="btn-2 block w-fit">Email</a>
      </div>
    </section>

    <section class="products-wrapper py-10 px-5 max-w-[1800px] mx-auto flex flex-wrap items-center justify-center gap-5">
      <article v-for="(product, index) in productsJson" :key="index" class="bg-brand-yellow text-brand-black rounded w-full xs:w-1/3 xl:w-1/4 self-stretch flex-grow overflow-hidden hover:scale-[1.03] transition-all">
        <NuxtLink :to="'/proizvodi/' + product.url" class="flex h-full flex-col lg:flex-row">
          <NuxtImg sizes="800px sm:300px md:600px" :src="'/images/products/' + product.main_image" alt="" class="w-full h-60 lg:h-auto lg:w-1/3 object-cover rounded-tl rounded-bl" />
          <div class="p-5 w-full lg:w-2/3 flex flex-col justify-center text-center lg:text-left">
            <h2 class="text-inherit">{{ product.name_sr }}</h2>
            <p>{{ product.short_desc_sr }}</p>
          </div>
        </NuxtLink>
      </article>
    </section>
  </main>
</template>

<script setup>
import productsJson from '~/assets/products_db.json';

</script>