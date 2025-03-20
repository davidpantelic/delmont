<template>
  <main class="home-page bg-brand-green">
    <section class="hp-cover w-full md:h-screen flex items-center justify-center flex-col bg-scroll md:bg-fixed bg-brand-black relative pt-40 pb-20" style="background-image: url('/images/products/pc_plasticna_cisterna_5_800.webp');">
      <h1 class="text-white text-center"><span class="block mb-2 text-[1.5em]">{{ actionWord }}</span> proizvodi od plastike</h1>
      <h2 class="mt-5 text-white uppercase">Delmont 014</h2>
      <div class="flex flex-wrap gap-3 justify-center items-center py-5 px-3">
        <NuxtLink to="/proizvodi" class="btn-1 !m-0" active-class="" exact-active-class="">Katalog proizvoda</NuxtLink>
        <a href="/#kontakt" class="btn-1 !m-0">Kontakt</a>
      </div>
      <Icon @click="scrollToNextSection()" name="solar:round-arrow-down-bold" class="absolute bottom-5 text-white text-5xl animate-bounce cursor-pointer"><span class="sr-only text-white">Skroluj na dole do sledeće sekcije</span></Icon>
    </section>

    <section id="main-content">
      <div class="prod-desc flex flex-wrap gap-5 md:gap-10 justify-between items-center px-5 pt-[4%] text-center max-w-[1700px] mx-auto text-brand-black">
        <article class="w-full md:w-1/4 order-2 xl:order-1">
          <h2 class="mb-5">Ekološki prihvatljivi</h2>
          <p>Razumemo važnost zaštite životne sredine, zbog čega smo posvećeni proizvodnji <strong>ekološki prihvatljivih</strong> proizvoda. Naši proizvodi su napravljeni od netoksičnih materijala koji se mogu reciklirati, što obezbeđuje minimalan uticaj na životnu sredinu.</p>
        </article>
        <article class="w-full xl:w-1/4 order-1 xl:order-2">
          <h2 class="mb-5">Proizvodi za farme, domove i drugo</h2>
          <p>Nudimo širok spektar visokokvalitetnih plastičnih proizvoda dizajniranih da izdrže najteže uslove. Naši proizvodi, uključujući <strong>rezervoare</strong>, <strong>septičke jame</strong>, <strong>prečistače otpadnih voda</strong>, <strong>pontone</strong>, (i još mnogo toga), se prave od najboljih i najotpornijih materijala dostupnih na tržištu.</p>
        </article>
        <article class="w-full md:w-1/4 order-3 xl:order-3">
          <h2 class="mb-5">Kvalitet i dugotrajnost</h2>
          <p>Naši proizvodi su <strong>napravljeni da traju</strong> i uvereni smo da će premašiti vaša očekivanja. Dizajnirani su tako da izdrže teške vremenske uslove, a otporni su i na UV zračenje, što im omogućava da tokom vremena zadrže izgled i funkcionalnost.</p>
        </article>
        <article class="w-full order-4">
          <p>Posvećeni smo pružanju <strong>našim klijentima</strong> najbolju moguću uslugu i ponosni smo na naše kvalitetne proizvode. Bilo da tražite septičku jamu za vaš dom, rezervoar za vašu farmu ili ponton za vaš splav ili dok, imamo savršen proizvod koji će zadovoljiti vaše potrebe.</p>
        </article>
      </div>
      <div class="flex flex-wrap gap-3 py-5 justify-center">
        <NuxtLink to="/o-nama" class="btn-2" active-class="" exact-active-class="">O nama</NuxtLink>
        <a href="/#kontakt" class="btn-2">Kontakt</a>
      </div>
    </section>

    <TopProds />

    <section class="black-text-box bg-brand-black text-brand-yellow p-[5%] flex gap-x-5 flex-col lg:flex-row text-center lg:text-left bg-scroll md:bg-fixed" :style="BTPCoverBackgroundStyles">
      <div class="flex flex-wrap gap-y-5 flex-col w-full lg:w-1/2 lg:flex-row justify-center">
        <article class="w-full">
          <h2 class="mb-3">Visok kvalitet</h2>
          <p>Naši proizvodi su napravljeni od najkvalitetnijih materijala i dizajnirani su da izdrže najteže uslove životne sredine. Takođe su dizajnirani da se lako instaliraju i održavaju, što garantuje da će trajati dugi niz godina.</p>
        </article>
        <article class="w-full">
          <h2 class="mb-3">Prevoz na vašu adresu</h2>
          <p>Nudimo vam i prevoz plastičnih proizvoda na vašu adresu. Pored prevoza takođe dobijate i instrukcije kako da montirate ili ukopate rezervoar, septičku jamu ili ponton.</p>
        </article>
      </div>
      <article class="w-full lg:w-1/2 flex-grow">
        <h2 class="mb-3">O proizvodima</h2>
        <p>Plastični rezervoari, septičke jame, pontoni i drugi proizvodi izrađuju se tehnologijom spiralnog namotavanja od polietilena (HDPE) i polipropilena (HDPP) visoke gustine. Otporan na udarce, agresivne hemikalije, pogodan za delimično ili potpuno ukopavanje i kao takav predstavlja idealnu i dugoročnu investiciju. Praktični su, laki za manipulisanje i ugradnju, a garantuju vodonepropusnost i dugotrajno rešenje, jer materijal gubi samo 5% svojih svojstava nakon 50 godina upotrebe. Svaki plastični proizvod može biti opremljen raznim dodacima kao što su ventili, slavine, pokazivači nivoa, spoljni ili unutrašnji navojni priključci, prelivi, revizioni otvori, prigušnice, nožice za sidrenje, ramovi za penjanje i sve ostalo prema vašim potrebama. <br> Pogledajte <NuxtLink to="/galerija" class="text-white hover:underline">Galeriju</NuxtLink> naših proizvoda.</p>
      </article>
    </section>

    <BigFooter />

  </main>
</template>

<script setup>

const img = useImage()
const BTPCoverBackgroundStyles = computed(() => {
  const imgUrl = img('/images/products/pvr_plasticni_vertikalni_rezervoari_4.webp', { width: 800 })
  return { backgroundImage: `url('${imgUrl}')` }
})

const actionWord = ref('Povoljni');

let intervalId;

const changeTitle = () => {
  intervalId = setInterval(() => {
    const actions = ['Povoljni', 'Kvalitetni', 'Dugotrajni', 'Ekološki'];
    actionWord.value = nextElementInList(actions, actionWord.value);
  }, 2000);
};

useHead({
  link: [
    { rel: 'preload', fetchpriority: 'high', as: 'image', href: '/images/products/pc_plasticna_cisterna_5_800.webp' },
  ],
});

onMounted(() => {
  changeTitle();
});

onUnmounted(() => {
  clearInterval(intervalId);
});

const scrollToNextSection = () => {
  const section = document.querySelector('main > section:not(:first-of-type)');
  section.scrollIntoView({ behavior: 'smooth' });
};
</script>