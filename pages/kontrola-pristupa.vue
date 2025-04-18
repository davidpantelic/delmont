<template>
  <main id="main-content">
    <section class="text-left max-w-7xl mx-auto px-5">
      <h1>Kontrola pristupa</h1>
      <h2>Sigurnosno rešenje za zaštitu objekata</h2>
      <!-- <p>Kontrola pristupa je sistem koji omogućava ograničavanje i praćenje ulaska i izlaska iz određenih prostora. Ova tehnologija se koristi u poslovnim objektima, industrijskim postrojenjima, stambenim zgradama i drugim lokacijama gde je potrebna visok nivo sigurnosti.</p>
      <br>
      <h3>Postoje različite vrste sistema koji omogućavaju regulaciju pristupa:</h3>
      <p><b>Kartični sistemi</b> – Korisnici koriste RFID ili magnetne kartice za ulazak.</p>
      <p><b>Biometrijski sistemi</b> – Pristup se odobrava pomoću otiska prsta, skeniranja lica ili šarenice oka.</p>
      <p><b>PIN kodovi i lozinke</b> – Korisnici unose kod na tastaturi kako bi dobili pristup.</p>
      <p><b>Mobilne aplikacije</b> – Omogućavaju daljinsku kontrolu pristupa putem pametnih telefona.</p>
      <br>
      <h3>Prednosti kontrole pristupa</h3>
      <p><b>Povećana sigurnost</b> – Sprečava neovlašćen ulazak u zaštićene zone.</p>
      <p><b>Praćenje i evidencija</b> – Beleži ko i kada je pristupio objektu.</p>
      <p><b>Fleksibilnost</b> – Mogućnost podešavanja različitih nivoa pristupa za zaposlene ili goste.</p>
      <p><b>Integracija sa drugim sistemima</b> – Može se povezati sa video nadzorom, alarmima i pametnim zgradama.</p>
      <br>
      <h3>Gde se koristi kontrola pristupa?</h3>
      <p><b>Poslovni objekti i korporacije</b> – Ograničava ulaz zaposlenima i posetiocima.</p>
      <p><b>Industrijska postrojenja</b> – Štiti osetljive delove proizvodnje i skladišta.</p>
      <p><b>Stambene zgrade</b> – Omogućava bezbedan ulazak stanarima i gostima.</p>
      <p><b>Zdravstvene ustanove</b> – Kontroliše pristup medicinskim prostorijama i podacima.</p>
      <p>Implementacija sistema kontrole pristupa poboljšava sigurnost, povećava efikasnost i smanjuje rizik od neovlašćenog pristupa. Za najbolje rešenje prilagođeno vašim potrebama, konsultujte se sa stručnjacima.</p> -->
      <p>Kontrola pristupa je sigurnosna tehnologija koja se koristi za regulisanje i upravljanje pristupom određenim prostorima, resursima ili informacijama. Cilj sistema kontrole pristupa je osiguranje da samo ovlašćene osobe imaju pristup određenim područjima ili podacima, čime se povećava sigurnost, privatnost i zaštita imovine.</p>
      <h2>Osnovni principi kontrole pristupa:</h2>
      <ol class="list-decimal list-inside">
        <li class="mb-2"><p class="inline"><b>Identifikacija:</b> Proces u kojem korisnik mora dokazati ko je on. To može biti putem korisničkog imena, kartice ili biometrijskih podataka (poput otiska prsta ili skeniranja oka).</p></li>
        <li class="mb-2"><p class="inline"><b>Autentifikacija:</b> Nakon identifikacije, sistem proverava da li korisnik zaista ima pravo pristupa. To se obično vrši pomoću lozinke, PIN-a, fizičkog uređaja (kao što je kartica ili token), ili biometrijskih karakteristika.</p></li>
        <li class="mb-2"><p class="inline"><b>Autorizacija:</b> Ovaj korak određuje koji nivo pristupa korisnik ima na osnovu prethodne identifikacije i autentifikacije. Na primer, neki korisnici mogu imati pristup samo određenim prostorijama ili podacima, dok drugi mogu imati širi pristup.</p></li>
      </ol>
      <h2>Tipovi sistema kontrole pristupa:</h2>
      <ol class="list-decimal list-inside">
        <li class="mb-2">
          <p><b>Fizička kontrola pristupa:</b> Ovi sistemi se koriste za regulisanje fizičkog pristupa određenim prostorijama, zgradama ili objektima. Najčešće se koriste u poslovnim, industrijskim i vladinim objektima, kao i u privatnim domovima.</p>
          <p><b>Elektronske brave:</b> Elektronske brave koriste kodove, kartice ili biometrijske podatke za omogućavanje ili odbijanje pristupa. Na primer, kartica koja se koristi za otključavanje vrata je jedan od najpoznatijih metoda fizičke kontrole pristupa.</p>
          <p><b>Biometrijski sistemi:</b> Ovi sistemi koriste jedinstvene fizičke karakteristike korisnika, kao što su otisci prstiju, skeniranje lica, skeneri očiju (iris ili retina), kako bi potvrdili identitet. Biometrijski sistemi nude visoki nivo sigurnosti jer su fizičke karakteristike gotovo nemoguće da se repliciraju.</p>
          <p><b>PIN kodovi:</b> Tradicionalni PIN kodovi, obično u kombinaciji sa karticama, omogućavaju korisnicima da dobiju pristup određenim prostorima. Ovaj sistem je jednostavan, ali može biti manje siguran ako korisnik otkrije ili zaboravi PIN.</p>
        </li>
        <li class="mb-2">
          <p><b>Logička (digitalna) kontrola pristupa:</b> Ovi sistemi regulišu pristup računarima, mrežama i aplikacijama. Korišćenje sigurnosnih pravila i mehanizama autentifikacije pomaže u zaštiti od neovlašćenog pristupa podacima ili IT resursima.</p>
          <p><b>Lozinke i korisnička imena:</b> Najosnovniji oblik kontrole pristupa za računarske sisteme. Korisnici moraju uneti ispravan korisnički naziv i lozinku kako bi pristupili sistemu ili aplikaciji.</p>
          <p><b>Tokeni i dvofaktorska autentifikacija (2FA):</b> Tokeni su fizički uređaji ili aplikacije koje generišu jednokratne lozinke. Dvofaktorska autentifikacija (2FA) dodaje dodatni nivo sigurnosti, zahtevajući korisniku da pruži dva oblika autentifikacije – npr. lozinku i kod koji dolazi na mobilni telefon.</p>
          <p><b>Digitalni sertifikati i javni ključ (PKI):</b> U digitalnim sistemima, sigurnost se može postaviti koristeći javne i privatne ključeve. Digitalni sertifikati omogućavaju bezbednu komunikaciju i autentifikaciju između korisnika i sistema.</p>
        </li>
      </ol>
      <h2>Tehnologije kontrole pristupa:</h2>
      <ol class="list-decimal list-inside">
        <li class="mb-2">
          <p class="inline"><b>Kartični sistemi:</b></p>
          <p><b>Proximity kartice (RFID):</b> Ove kartice koriste radio frekvencijsku identifikaciju (RFID) za beskontaktno otključavanje vrata ili sistema. Korisnik samo treba da priđe čitaču da bi aktivirao pristup.</p>
          <p><b>Magnetne kartice:</b> Magnetne kartice sadrže podatke na magnetnom traku koji omogućavaju pristup kada se kartica provuče kroz čitač.</p>
        </li>
        <li class="mb-2">
          <p class="inline"><b>Biometrijski sistemi:</b></p>
          <p><b>Otisci prstiju:</b> Koristeći skener otisaka prstiju, ovi sistemi autentifikuju korisnike na osnovu jedinstvenih karakteristika njihovih otisaka.</p>
          <p><b>Prepoznavanje lica:</b> Sistemi za prepoznavanje lica koriste kamere i napredne algoritme da identifikuju osobe, često u kombinaciji sa drugim faktorima autentifikacije.</p>
          <p><b>Skeniranje oka (iris ili retina):</b> Ovi sistemi koriste jedinstvene obrasce u oku za verifikaciju identiteta korisnika.</p>
        </li>
        <li class="mb-2">
          <p class="inline"><b>Biometrijski pristup sa više faktora:</b> Kombinacija biometrijskih podataka, kartica i PIN-ova čini sisteme sigurnijim, jer se koristi više metoda autentifikacije.</p>
        </li>
      </ol>
      <h2>Prednosti sistema kontrole pristupa:</h2>
      <p><b>Sigurnost:</b> Smanjuje rizik od neovlašćenog pristupa i napada. Biometrijski podaci i višefaktorska autentifikacija pružaju vrlo visok nivo sigurnosti.</p>
      <p><b>Jednostavnost i brzina:</b> Elektronski sistemi omogućavaju brz pristup i lakšu kontrolu, eliminirajući potrebu za fizičkim ključevima ili memorisanjem složenih lozinki.</p>
      <p><b>Praćenje i evidentiranje:</b> Mnogi sistemi omogućavaju praćenje svih aktivnosti pristupa, stvarajući izveštaje o tome ko je i kada imao pristup određenim oblastima.</p>
      <p><b>Fleksibilnost:</b> Moguće je prilagoditi nivoe pristupa korisnicima, omogućavajući različite privilegije pristupa na osnovu uloga ili potrebama organizacije.</p>
      <h2>Nedostaci sistema kontrole pristupa:</h2>
      <p><b>Trošak:</b> Instalacija i održavanje sistema kontrole pristupa, posebno biometrijskih ili sofisticiranih kartičnih sistema, može biti skupa.</p>
      <p><b>Tehnička zavisnost:</b> Kao i sa svim tehnologijama, kvarovi u sistemu mogu blokirati pristup korisnicima ili izazvati nesigurnost.</p>
      <p><b>Privatnost i sigurnost podataka:</b> Biometrijski podaci, ako nisu dobro zaštićeni, mogu predstavljati sigurnosnu pretnju. U slučaju hakovanja, biometrijski podaci se ne mogu promeniti, za razliku od lozinki ili kartica.</p>
      <h2>Primeri upotrebe sistema kontrole pristupa:</h2>
      <ol class="list-decimal list-inside">
        <li class="mb-2"><p class="inline"><b>Komercijalne zgrade i kancelarije:</b> Pomoću elektronskih kartica ili biometrijskih sistema, kompanije mogu ograničiti pristup osetljivim područjima kao što su server sobe, sefovi, laboratorije i sl.</p></li>
        <li class="mb-2"><p class="inline"><b>Javne ustanove:</b> U bolnicama, školama i vladinim zgradama, sistemi kontrole pristupa mogu se koristiti za zaštitu od neovlašćenog pristupa ili za praćenje kretanja osoba u specifičnim prostorijama.</p></li>
        <li class="mb-2"><p class="inline"><b>Pametni domovi:</b> U privatnim domovima, pametni sistemi kontrole pristupa mogu obuhvatiti pametne brave, senzore pokreta i biometrijske sisteme, omogućavajući vlasnicima da kontroliraju pristup domu putem mobilnih aplikacija.</p></li>
      </ol>
      <p>Sistemi kontrole pristupa sve više postaju deo svakodnevnog života, sa širim primenama u poslovanju, industriji i javnim institucijama. Tehnologija napreduje, pa možemo očekivati još sofisticiranije i sigurnije sisteme u budućnosti.</p>
      <div class="flex flex-wrap gap-3 py-5">
        <a href="tel:+381631871034" class="btn-2 block w-fit">Poziv</a>
        <a href="mailto:info@delmont014.rs" class="btn-2 block w-fit">Email</a>
      </div>
      <div class="flex flex-wrap gap-1 py-5">
        <img src="/public/images/struja_13.webp" alt="" class="flex-grow w-[30%] object-cover rounded aspect-1">
        <img src="/public/images/struja_14.webp" alt="" class="flex-grow w-[30%] object-cover rounded aspect-1">
      </div>
    </section>
  </main>
</template>