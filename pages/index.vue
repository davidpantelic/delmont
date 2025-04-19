<template>
  <main class="home-page bg-white">
    <section class="hp-cover w-full md:h-screen min-h-fit flex items-center justify-center flex-col bg-scroll md:bg-fixed bg-brand-black relative px-3 pt-24 sm:pt-40 pb-20">
      <h1 class="text-white text-center"><span class="block mb-2 text-[1.5em]">Smart home - solarni paneli</span> video nadzor - alarmni sistemi - elektricne instalacije</h1>
      <h2>Ugradnja i odrzavanje</h2>
      <h3 class="mt-2 sm:mt-5 text-white uppercase mb-2">Delmont 014</h3>
      <div class="flex flex-wrap gap-3 justify-center items-center py-3">
        <a href="tel:+381631871034" class="btn-1 !m-0">Pozovi</a>
        <a href="/#kontakt" class="btn-1 !m-0">Posalji poruku</a>
      </div>
      <div class="flex flex-wrap gap-3 justify-center items-center">
        <NuxtLink to="/smart-home" class="btn-1 !m-0" active-class="" exact-active-class="">Smart home</NuxtLink>
        <NuxtLink to="/solarni-paneli" class="btn-1 !m-0" active-class="" exact-active-class="">Solarni paneli</NuxtLink>
        <NuxtLink to="/video-nadzor" class="btn-1 !m-0" active-class="" exact-active-class="">Video nadzor</NuxtLink>
      </div>
      <Icon @click="scrollToNextSection()" name="solar:round-arrow-down-bold" class="absolute bottom-5 text-white text-5xl animate-bounce cursor-pointer"><span class="sr-only text-white">Skroluj na dole do sledeće sekcije</span></Icon>
    </section>

    <section id="main-content" class="bg-brand-black lg:px-5 lg:py-10 flex flex-col lg:flex-row">
      <img src="public/images/struja_12.webp" alt="" class="w-full lg:w-1/3 object-cover rounded" />
      <article class="max-w-[1400px] mx-auto py-5 px-5 lg:px-10 text-center lg:text-left">
        <h1>Pouzdana rešenja za modernu elektrifikaciju i automatizaciju</h1>
        <h2 class="my-5">Ugradnja i održavanje električnih i elektronskih sistema – sigurnost, ušteda i komfor na dohvat ruke</h2>
        <p>Bilo da želite unaprediti svoj dom pametnim sistemima, obezbediti sigurnost video nadzorom, smanjiti troškove uz solarne panele ili modernizovati električne instalacije, mi vam nudimo kompletna rešenja. Naš tim stručnjaka brine o svemu – od projektovanja i instalacije do redovnog održavanja i servisa.</p>
        <br>
        <h3>Vaš dom, pametniji i sigurniji uz moderna tehnološka rešenja</h3>
        <NuxtLink to="/smart-home" class="btn-1 mt-5" active-class="" exact-active-class="">Smart home</NuxtLink>
      </article>
    </section>

    <section class="bg-brand-black lg:px-5 lg:py-10 flex flex-col lg:flex-row-reverse">
      <img src="public/images/struja_11.webp" alt="" class="w-full lg:w-1/3 object-cover rounded" />
      <article class="max-w-[1400px] mx-auto py-5 px-5 lg:px-10 text-center lg:text-right">
        <h1>Tehnologija u službi vašeg doma i poslovnog prostora</h1>
        <h2 class="my-5">Integrisana rešenja za uštedu energije, sigurnost i automatizaciju</h2>
        <p>U svetu moderne tehnologije, važno je imati sisteme koji rade za vas. Od pametnih kuća i video nadzora do solarnih panela i električnih instalacija, naša usluga obuhvata sve – od planiranja i instalacije do održavanja. Sa nama dobijate sigurnost, efikasnost i dugotrajna rešenja.</p>
        <br>
        <h3>Sigurnost, ušteda i komfor kroz najnovija tehnološka rešenja</h3>
        <NuxtLink to="/video-nadzor" class="btn-1 mt-5" active-class="" exact-active-class="">Video nadzor</NuxtLink>
      </article>
    </section>

    <section class="black-overlay" :style="BTPCoverBackgroundStyles">
      <article class="text-center px-5 py-10">
        <h1>Precizno planiranje za sigurna i efikasna rešenja</h1>
        <h2>Profesionalno projektovanje – temelj kvalitetne instalacije</h2>
        <p>Svaka uspešna instalacija počinje dobrim planom. Naš tim stručnjaka izrađuje detaljne projekte električnih i elektronskih sistema, prilagođene vašim potrebama i standardima. Bez obzira da li je u pitanju Smart Home sistem, video nadzor, solarni paneli ili kompletna električna instalacija, precizno projektovanje osigurava maksimalnu efikasnost, sigurnost i dug vek trajanja sistema.</p>
      </article>
    </section>

    <BigFooter />

  </main>
</template>

<script setup>

const img = useImage()
const BTPCoverBackgroundStyles = computed(() => {
  const imgUrl = img('/images/struja_6.webp', { width: 800 })
  return { backgroundImage: `url('${imgUrl}')` }
})

useHead({
  link: [
    { rel: 'preload', fetchpriority: 'high', as: 'image', href: '/images/cover.webp' },
  ],
});

const scrollToNextSection = () => {
  const section = document.querySelector('main > section:not(:first-of-type)');
  section.scrollIntoView({ behavior: 'smooth' });
};
</script>