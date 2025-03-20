<template>
  <section>
    <h2 class="text-center mb-5 text-brand-black">Top 3 proizvoda</h2>
    <div class="flex flex-wrap lg:flex-nowrap gap-4 justify-center items-center max-w-[1600px] w-11/12 mx-auto">
      <NuxtLink to="/proizvodi/plasticni-horizontalni-rezervoari" class="bg-white hover:scale-[1.03] pb-3 self-stretch lg:self-auto flex-grow transition-all text-brand-black order-2 lg:order-1 w-full sm:w-[45%] lg:w-[30%] text-center rounded-lg">
        <NuxtImg sizes="800px sm:300px md:600px" class="w-full object-cover rounded-t-lg mb-3 h-[200px]" src="/images/products/phr_plasticni_horizontalni_rezervoar_3_800.webp" alt="" />
        <h3 class="px-3">Plastični horizontalni rezervoari</h3>
      </NuxtLink>
      <NuxtLink to="/proizvodi/plasticni-vertikalni-rezervoari" class="bg-white hover:scale-[1.03] pb-3 self-stretch lg:self-auto flex-grow transition-all text-brand-black order-1 lg:order-2 w-full lg:w-[40%] text-center rounded-lg">
        <NuxtImg sizes="800px sm:300px md:600px" class="w-full object-cover rounded-t-lg mb-3 h-[300px]" src="/images/products/pvr_plasticni_vertikalni_rezervoari_3_800.webp" alt="" />
        <h3 class="px-3">Plastični vertikalni rezervoari</h3>
      </NuxtLink>
      <NuxtLink to="/proizvodi/plasticne-septicke-jame" class="bg-white hover:scale-[1.03] pb-3 self-stretch lg:self-auto flex-grow transition-all text-brand-black order-3 lg:order-3 w-full sm:w-[45%] lg:w-[30%] text-center rounded-lg">
        <NuxtImg sizes="800px sm:300px md:600px" class="w-full object-cover rounded-t-lg mb-3 h-[200px]" src="/images/products/psj_plasticna_septicka_jama_1_800.webp" alt="" />
        <h3 class="px-3">Plastične septicke jame</h3>
      </NuxtLink>
    </div>
    <NuxtLink to="/proizvodi" class="btn-2 block w-fit mx-auto mt-5 mb-10" active-class="" exact-active-class="">Svi proizvodi</NuxtLink>
  </section>
</template>

<script setup>

</script>
