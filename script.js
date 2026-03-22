/* ============================================
   AgereArt — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- All Product Data ---
  const products = {
    agat: {
      name: 'Biały Agat',
      subtitle: 'Czysty Spokój',
      desc: 'Subtelna, elegancka i pełna światła. Biały Agat jest nazywany kamieniem nadziei. Sprzyja wyciszeniu, pomaga pozbyć się stresu i wprowadza łagodną energię do Twojego otoczenia. Idealna dla osób szukających wewnętrznego ukojenia.',
      price: '65 zł',
      image: 'images/AGAT_1_1_1.jpg',
      images: ['images/AGAT_1_1_1.jpg', 'images/AGAT_1_1_2.jpg'],
      tags: ['Wyciszenie', 'Nadzieja', 'Harmonia']
    },
    agat_lawa: {
      name: 'Agat i Lawa',
      subtitle: 'Pierwotna Równowaga',
      desc: 'Mieszanka ziemskiego spokoju i wulkanicznego temperamentu. Agat to kamień harmonii, który uspokaja emocje, a porowata Lawa symbolizuje odrodzenie i siłę ognia. Idealna, by stać twardo na ziemi, nie tracąc przy tym wewnętrznej pasji.',
      price: '65 zł',
      image: 'images/AGATILAWA_2_1_1.jpg',
      images: ['images/AGATILAWA_2_1_1.jpg', 'images/AGATILAWA_2_1_2.jpg'],
      tags: ['Harmonia', 'Odrodzenie', 'Pasja']
    },
    labradoryt: {
      name: 'Labradoryt',
      subtitle: 'Kamień Gwiazd',
      desc: 'Samodzielny Labradoryt to biżuteria pełna tajemnic. Nazywany „świątynią gwiazd", pomaga odnaleźć drogę w momentach niepewności i chroni aurę przed utratą energii. Każdy kamień jest inny, tak jak Twoja unikalna historia.',
      price: '65 zł',
      image: 'images/LABRADORYT_4_1_1.jpg',
      images: ['images/LABRADORYT_4_1_1.jpg', 'images/LABRADORYT_4_1_2.jpg'],
      tags: ['Tajemnica', 'Ochrona', 'Intuicja']
    },
    labradoryt_agat: {
      name: 'Labradoryt i Agat',
      subtitle: 'Intuicja i Ugruntowanie',
      desc: 'Mistyczny Labradoryt z jego niebiesko-zielonymi błyskami to kamień wizjonerów, który rozbudza kreatywność. W połączeniu z solidnym Agatem, pozwala bezpiecznie stąpać po ziemi, jednocześnie nie przestając marzyć.',
      price: '65 zł',
      image: 'images/LABRADORYTIAGAT_5_1_1.jpg',
      images: ['images/LABRADORYTIAGAT_5_1_1.jpg', 'images/LABRADORYTIAGAT_5_1_2.jpg'],
      tags: ['Kreatywność', 'Wizja', 'Stabilność']
    },
    lawa: {
      name: 'Lawa Wulkaniczna',
      subtitle: 'Surowa Siła Odrodzenia',
      desc: 'Ta bransoletka to czysta energia żywiołów zamknięta w porowatej strukturze kamienia. Lawa wulkaniczna powstaje z zastygłej magmy — łączy w sobie potęgę ognia i stabilność ziemi. Jest to kamień dla osób, które potrzebują solidnego fundamentu, a jednocześnie chcą spalić to, co stare, by zrobić miejsce na nowe.',
      price: '65 zł',
      image: 'images/LAWA_3_1_1.jpg',
      images: ['images/LAWA_3_1_1.jpg', 'images/LAWA_3_1_2.jpg'],
      tags: ['Ogień', 'Ziemia', 'Odrodzenie']
    },
    lawa_tygrysie: {
      name: 'Lawa i Tygrysie Oko',
      subtitle: 'Surowa Energia',
      desc: 'Połączenie żywiołów Ziemi i Ognia. Szorstka tekstura Lawy stabilizuje energię, a złociste Tygrysie Oko dodaje motywacji do działania. Bransoletka dla osób dynamicznych, które potrzebują codziennego zastrzyku pewności siebie.',
      price: '65 zł',
      image: 'images/LAWAITYGRYSIEOKO_6_1_1.jpg',
      images: ['images/LAWAITYGRYSIEOKO_6_1_1.jpg', 'images/LAWAITYGRYSIEOKO_6_1_2.jpg'],
      tags: ['Pewność siebie', 'Motywacja', 'Żywioły']
    },
    lawa_malachit: {
      name: 'Lawa i Malachit',
      subtitle: 'Ogień i Natura',
      desc: 'Niesamowity kontrast czarnej, surowej Lawy i soczyście zielonego Malachitu. Lawa pomaga spalać negatywne emocje, a Malachit otwiera na transformację i nowe możliwości. To połączenie dla tych, którzy chcą odważnie iść przez życie.',
      price: '65 zł',
      image: 'images/LAWAIMALACHIT_7_1_1.jpg',
      images: ['images/LAWAIMALACHIT_7_1_1.jpg', 'images/LAWAIMALACHIT_7_1_2.jpg'],
      tags: ['Transformacja', 'Odwaga', 'Nowe możliwości']
    },
    onyks_fasetowany: {
      name: 'Onyks Fasetowany',
      subtitle: 'Szlifowana Wytrwałość',
      desc: 'Klasyka w najbardziej luksusowym wydaniu. Onyks fasetowany dzięki swoim licznym ściankom odbija światło, symbolizując wielowymiarowość ludzkiego charakteru. To kamień dla liderów — wzmacnia autorytet i pomaga przejąć kontrolę nad własnym losem.',
      price: '65 zł',
      image: 'images/ONYKS_8_1_1.jpg',
      images: ['images/ONYKS_8_1_1.jpg', 'images/ONYKS_8_1_2.jpg'],
      tags: ['Autorytet', 'Kontrola', 'Luksus']
    },
    onyks_matowy: {
      name: 'Onyks Matowy',
      subtitle: 'Głęboka Cisza i Wewnętrzna Moc',
      desc: 'Onyks w wersji matowej to kwintesencja surowej elegancji. Pozbawiony blasku, skupia całą swoją energię wewnątrz, emanując spokojem i niezachwianą pewnością siebie. To kamień dla tych, którzy nie potrzebują blichtru, by zaznaczyć swoją obecność — ich siła płynie z charakteru i autentyczności.',
      price: '65 zł',
      image: 'images/ONYKS_8_2_1.jpg',
      images: ['images/ONYKS_8_2_1.jpg', 'images/ONYKS_8_2_2.jpg', 'images/ONYKS_8_2_3.jpg'],
      tags: ['Spokój', 'Pewność', 'Autentyczność']
    },
    onyks_krysztal: {
      name: 'Onyks i Kryształ Górski',
      subtitle: 'Jasność Umysłu',
      desc: 'Połączenie nocy i światła. Onyks buduje Twoją wewnętrzną dyscyplinę, podczas gdy Kryształ Górski działa jak wzmacniacz — oczyszcza umysł i potęguje energię innych kamieni. To duet dla osób poszukujących balansu i absolutnego skupienia.',
      price: '65 zł',
      image: 'images/ONYKSIKRYSZTALGORSKI_11_1_1.jpg',
      images: ['images/ONYKSIKRYSZTALGORSKI_11_1_1.jpg', 'images/ONYKSIKRYSZTALGORSKI_11_1_2.jpg'],
      tags: ['Dyscyplina', 'Oczyszczenie', 'Fokus']
    },
    onyks_agat_fioletowy: {
      name: 'Onyks & Agat Fioletowy',
      subtitle: 'Królewska Intuicja',
      desc: 'Biżuteria, która łączy w sobie ziemską siłę z energią ducha. Głęboka, migocząca czerń fasetowanego onyksu stanowi idealną ramę dla hipnotyzujących odcieni fioletowego agatu. To zestawienie dla osób, które szukają w życiu czegoś więcej — harmonii między logiką a intuicją.',
      price: '65 zł',
      image: 'images/ONYKSIAGAT_9_1_1.jpg',
      images: ['images/ONYKSIAGAT_9_1_1.jpg', 'images/ONYKSIAGAT_9_1_2.jpg'],
      tags: ['Harmonia', 'Logika', 'Intuicja']
    },
    onyks_jaspis: {
      name: 'Onyks & Jaspis Różowy',
      subtitle: 'Siła i Łagodność',
      desc: 'Bransoletka, która łączy w sobie siłę i zdecydowanie z empatią i wewnętrznym ciepłem. Głęboka, lśniąca czerń fasetowanego onyksu spotyka się tu z pudrowymi, ziemistymi odcieniami różowego jaspisu, tworząc duet pełen klasy i wdzięku.',
      price: '65 zł',
      image: 'images/ONYKSIJAPIS_10_1_1.jpg',
      images: ['images/ONYKSIJAPIS_10_1_1.jpg', 'images/ONYKSIJAPIS_10_1_2.jpg'],
      tags: ['Empatia', 'Ciepło', 'Klasa']
    },
    onyks_labradoryt: {
      name: 'Onyks & Labradoryt',
      subtitle: 'Mistyczna Noc',
      desc: 'Odkryj biżuterię, która skrywa w sobie tajemnicę. Połączenie głębokiej, aksamitnej czerni matowego onyksu z hipnotyzującym labradorytem to zestawienie dla osób o silnej intuicji, które cenią sobie dodatki nieoczywiste i pełne klasy. To bransoletka, która przyciąga spojrzenia nie blaskiem, lecz swoją głębią.',
      price: '65 zł',
      image: 'images/LABRADORYTIONYKS_14_1_1.jpg',
      images: ['images/LABRADORYTIONYKS_14_1_1.jpg', 'images/LABRADORYTIONYKS_14_1_2.jpg', 'images/LABRADORYTIONYKS_14_1_3.jpg'],
      tags: ['Tajemnica', 'Głębia', 'Klasa']
    },
    onyks_malachit: {
      name: 'Onyks & Malachit',
      subtitle: 'Elegancka Transformacja',
      desc: 'Wyrafinowane połączenie głębokiego, czarnego onyksu z intensywnie zielonym malachitem. Onyks zapewnia wewnętrzną siłę i ochronę, a malachit otwiera na pozytywne zmiany i transformację. Bransoletka dla osób gotowych na nowy rozdział życia.',
      price: '65 zł',
      image: 'images/ONYKSIMALACHIT_13_1_1.jpg',
      images: ['images/ONYKSIMALACHIT_13_1_1.jpg', 'images/ONYKSIMALACHIT_13_1_2.jpg'],
      tags: ['Ochrona', 'Przemiana', 'Natura']
    },
    onyks_tygrysie: {
      name: 'Onyks & Tygrysie Oko',
      subtitle: 'Niezłomna Wola',
      desc: 'Potężne połączenie dwóch kamieni o silnej energii ochronnej. Czarny onyks daje fundament wewnętrznej siły, a złociste tygrysie oko dodaje odwagi i determinacji w dążeniu do celów. Bransoletka idealna dla osób stawiających czoła wyzwaniom.',
      price: '65 zł',
      image: 'images/ONYKSITYGRYSIEOKO_17_1_1.jpg',
      images: ['images/ONYKSITYGRYSIEOKO_17_1_1.jpg', 'images/ONYKSITYGRYSIEOKO_17_1_2.jpg', 'images/ONYKSITYGRYSIEOKO_17_1_3.jpg'],
      tags: ['Siła', 'Odwaga', 'Determinacja']
    },
    onyks_piasek: {
      name: 'Onyks & Piasek Pustyni',
      subtitle: 'Złote Piaski',
      desc: 'Kontrast ciemnego onyksu i ciepłego, złocistego piaskowca pustyni tworzy bransoletkę o wyjątkowej harmonii kolorów. Piasek pustyni to sztuczny kamień o migotliwym połysku, który w zestawieniu z eleganckim onyksem prezentuje się luksusowo i nowocześnie.',
      price: '65 zł',
      image: 'images/ONYKSIPIASEKPUSTYNI_15_1_1.jpg',
      images: ['images/ONYKSIPIASEKPUSTYNI_15_1_1.jpg', 'images/ONYKSIPIASEKPUSTYNI_15_1_2.jpg', 'images/ONYKSIPIASEKPUSTYNI_15_1_3.jpg'],
      tags: ['Ciepło', 'Elegancja', 'Światło']
    },
    kwarc_onyks: {
      name: 'Różowy Kwarc & Onyks',
      subtitle: 'Miłość i Ochrona',
      desc: 'Subtelne połączenie miłości i ochrony. Różowy kwarc pomaga odnaleźć równowagę emocji, spokój oraz harmonię serca. Onyks dodaje wewnętrznej siły i pewności siebie. Razem tworzą bransoletkę, która otula ciepłem i daje poczucie bezpieczeństwa.',
      price: '65 zł',
      image: 'images/ONYKSIROZOWYKWARC_16_1_1.jpg',
      images: ['images/ONYKSIROZOWYKWARC_16_1_1.jpg'],
      tags: ['Miłość', 'Równowaga', 'Serce']
    },
    onyks_tygrysie2: {
      name: 'Onyks & Tygrysie Oko II',
      subtitle: 'Złoty Wojownik',
      desc: 'Druga odsłona popularnego połączenia onyksu z tygrysim okiem. Ta wersja kładzie nacisk na złociste akcenty tygrysiego oka, które dodają bransoletce ciepłego blasku. Kamień ambicji i ochrony — dla osób, które wiedzą, czego chcą.',
      price: '65 zł',
      image: 'images/ONYKSITYGRYSIEOKO_17_2_1.jpg',
      images: ['images/ONYKSITYGRYSIEOKO_17_2_1.jpg', 'images/ONYKSITYGRYSIEOKO_17_2_2.jpg', 'images/ONYKSITYGRYSIEOKO_17_2_3.jpg'],
      tags: ['Ochrona', 'Ambicja', 'Energia']
    },
    agat_lawa_2: {
      name: 'Agat i Lawa II',
      subtitle: 'Pierwotna Równowaga',
      desc: 'Mieszanka ziemskiego spokoju i wulkanicznego temperamentu w drugim wzorze. Agat harmonizuje emocje, a porowata Lawa symbolizuje odrodzenie i siłę ognia.',
      price: '65 zł',
      image: 'images/AGATILAWA_2_2_1.jpg',
      images: ['images/AGATILAWA_2_2_1.jpg', 'images/AGATILAWA_2_2_2.jpg'],
      tags: ['Harmonia', 'Odrodzenie', 'Pasja']
    },
    agat_lawa_3: {
      name: 'Agat i Lawa III',
      subtitle: 'Pierwotna Równowaga',
      desc: 'Trzecia odsłona klasycznego połączenia agatu i lawy. Idealna, by stać twardo na ziemi, nie tracąc wewnętrznej pasji.',
      price: '65 zł',
      image: 'images/AGATILAWA_2_3_1.jpg',
      images: ['images/AGATILAWA_2_3_1.jpg', 'images/AGATILAWA_2_3_2.jpg'],
      tags: ['Harmonia', 'Odrodzenie', 'Pasja']
    },
    lawa_2: {
      name: 'Lawa Wulkaniczna II',
      subtitle: 'Surowa Siła Odrodzenia',
      desc: 'Czysta energia żywiołów zamknięta w porowatej strukturze kamienia w nowym wzorze. Potęga ognia i stabilność ziemi w jednej bransoletce.',
      price: '65 zł',
      image: 'images/LAWA_3_2_1.jpg',
      images: ['images/LAWA_3_2_1.jpg', 'images/LAWA_3_2_2.jpg'],
      tags: ['Ogień', 'Ziemia', 'Odrodzenie']
    },
    labradoryt_agat_2: {
      name: 'Labradoryt i Agat II',
      subtitle: 'Intuicja i Ugruntowanie',
      desc: 'Mistyczny Labradoryt z jego niebiesko-zielonymi błyskami razem z solidnym Agatem — drugi wzór tego niezrównanego połączenia kamienia wizjonerów z kamieniem ziemi.',
      price: '65 zł',
      image: 'images/LABRADORYTIAGAT_5_2_1.jpg',
      images: ['images/LABRADORYTIAGAT_5_2_1.jpg', 'images/LABRADORYTIAGAT_5_2_2.jpg'],
      tags: ['Kreatywność', 'Wizja', 'Stabilność']
    },
    lawa_tygrysie_2: {
      name: 'Lawa i Tygrysie Oko II',
      subtitle: 'Surowa Energia',
      desc: 'Drugi wzór energetycznego połączenia żywiołów Ziemi i Ognia. Lawa stabilizuje, Tygrysie Oko dodaje pewności siebie i motywacji.',
      price: '65 zł',
      image: 'images/LAWAITYGRYSIEOKO_6_2_1.jpg',
      images: ['images/LAWAITYGRYSIEOKO_6_2_1.jpg', 'images/LAWAITYGRYSIEOKO_6_2_2.jpg', 'images/LAWAITYGRYSIEOKO_6_2_3.jpg'],
      tags: ['Pewność siebie', 'Motywacja', 'Żywioły']
    },
    lawa_tygrysie_3: {
      name: 'Lawa i Tygrysie Oko III',
      subtitle: 'Surowa Energia',
      desc: 'Trzecia odsłona popularnego połączenia lawy i tygrysiego oka. Bransoletka dla osób dynamicznych, które potrzebują codziennego zastrzyku energii.',
      price: '65 zł',
      image: 'images/LAWAITYGRYSIEOKO_6_3_1.jpg',
      images: ['images/LAWAITYGRYSIEOKO_6_3_1.jpg', 'images/LAWAITYGRYSIEOKO_6_3_2.jpg'],
      tags: ['Pewność siebie', 'Motywacja', 'Żywioły']
    },
    onyks_3: {
      name: 'Onyks — wzór III',
      subtitle: 'Wewnętrzna Moc',
      desc: 'Elegancja onyksu w trzecim unikalnym wzorze. Kamień siły i samodyscypliny, ręcznie wykonany z dbałością o każdy detal.',
      price: '65 zł',
      image: 'images/ONYKS_8_3_1.jpg',
      images: ['images/ONYKS_8_3_1.jpg', 'images/ONYKS_8_3_2.jpg'],
      tags: ['Autorytet', 'Kontrola', 'Luksus']
    },
    onyks_4: {
      name: 'Onyks — wzór IV',
      subtitle: 'Wewnętrzna Moc',
      desc: 'Czwarta odsłona kolekcji onyksowej. Surowa elegancja kamienia, który skupia całą swoją energię wewnątrz, emanując spokojem i pewnością siebie.',
      price: '65 zł',
      image: 'images/ONYKS_8_4_1.jpg',
      images: ['images/ONYKS_8_4_1.jpg', 'images/ONYKS_8_4_2.jpg'],
      tags: ['Autorytet', 'Kontrola', 'Luksus']
    },
    onyks_krysztal_2: {
      name: 'Onyks i Kryształ Górski II',
      subtitle: 'Jasność Umysłu',
      desc: 'Drugi wzór duetu nocy i światła. Onyks buduje wewnętrzną dyscyplinę, Kryształ Górski oczyszcza umysł i wzmacnia energię.',
      price: '65 zł',
      image: 'images/ONYKSIKRYSZTALGORSKI_11_2_1.jpg',
      images: ['images/ONYKSIKRYSZTALGORSKI_11_2_1.jpg', 'images/ONYKSIKRYSZTALGORSKI_11_2_2.jpg'],
      tags: ['Dyscyplina', 'Oczyszczenie', 'Fokus']
    },
    onyks_krysztal_3: {
      name: 'Onyks i Kryształ Górski III',
      subtitle: 'Jasność Umysłu',
      desc: 'Trzecia odsłona dla osób poszukujących balansu i absolutnego skupienia. Połączenie dyscypliny z jasnością umysłu.',
      price: '65 zł',
      image: 'images/ONYKSIKRYSZTALGORSKI_11_3_1.jpg',
      images: ['images/ONYKSIKRYSZTALGORSKI_11_3_1.jpg', 'images/ONYKSIKRYSZTALGORSKI_11_3_2.jpg'],
      tags: ['Dyscyplina', 'Oczyszczenie', 'Fokus']
    },
    onyks_krysztal_cytryn: {
      name: 'Onyks, Kryształ & Cytryn',
      subtitle: 'Światło i Obfitość',
      desc: 'Wyjątkowe trójkowe połączenie — głęboki Onyks, przejrzysty Kryształ Górski i ciepły, złocisty Cytryn. Cytryn znany jest jako kamień słońca, radości i obfitości. Razem tworzą bransoletkę pełną dynamicznej, pozytywnej energii.',
      price: '65 zł',
      image: 'images/ONYKSIKRYSZTALGORSKIICYTRYN_12_1_1.jpg',
      images: ['images/ONYKSIKRYSZTALGORSKIICYTRYN_12_1_1.jpg', 'images/ONYKSIKRYSZTALGORSKIICYTRYN_12_1_2.jpg'],
      tags: ['Obfitość', 'Jasność', 'Radość']
    },
    onyks_malachit_2: {
      name: 'Onyks & Malachit II',
      subtitle: 'Elegancka Transformacja',
      desc: 'Wyrafinowane połączenie głębokiego onyksu z intensywnie zielonym malachitem w drugim wzorze. Otwiera na pozytywne zmiany i transformację.',
      price: '65 zł',
      image: 'images/ONYKSIMALACHIT_13_2_1.jpg',
      images: ['images/ONYKSIMALACHIT_13_2_1.jpg', 'images/ONYKSIMALACHIT_13_2_2.jpg'],
      tags: ['Ochrona', 'Przemiana', 'Natura']
    },
    onyks_malachit_3: {
      name: 'Onyks & Malachit III',
      subtitle: 'Elegancka Transformacja',
      desc: 'Trzecia odsłona połączenia czarnego onyksu i zielonego malachitu. Dla osób gotowych na nowy rozdział życia.',
      price: '65 zł',
      image: 'images/ONYKSIMALACHIT_13_3_1.jpg',
      images: ['images/ONYKSIMALACHIT_13_3_1.jpg', 'images/ONYKSIMALACHIT_13_3_2.jpg'],
      tags: ['Ochrona', 'Przemiana', 'Natura']
    },
    onyks_malachit_4: {
      name: 'Onyks & Malachit IV',
      subtitle: 'Elegancka Transformacja',
      desc: 'Czwarty wzór wyrafinowanego połączenia onyksu z malachitem. Onyks zapewnia wewnętrzną siłę i ochronę, malachit inspiruje do zmian.',
      price: '65 zł',
      image: 'images/ONYKSIMALACHIT_13_4_1.jpg',
      images: ['images/ONYKSIMALACHIT_13_4_1.jpg', 'images/ONYKSIMALACHIT_13_4_2.jpg'],
      tags: ['Ochrona', 'Przemiana', 'Natura']
    },
    onyks_malachit_5: {
      name: 'Onyks & Malachit V',
      subtitle: 'Elegancka Transformacja',
      desc: 'Piąta odsłona klasycznej pary. Soczysta zieleń malachitu i aksamitna czerń onyksu tworzą ponadczasowy duet.',
      price: '65 zł',
      image: 'images/ONYKSIMALACHIT_13_5_1.jpg',
      images: ['images/ONYKSIMALACHIT_13_5_1.jpg', 'images/ONYKSIMALACHIT_13_5_2.jpg'],
      tags: ['Ochrona', 'Przemiana', 'Natura']
    },
    onyks_malachit_6: {
      name: 'Onyks & Malachit VI',
      subtitle: 'Elegancka Transformacja',
      desc: 'Szósta odsłona połączenia ochrony i transformacji. Każdy wzór jest unikalny, każda bransoletka — inna.',
      price: '65 zł',
      image: 'images/ONYKSIMALACHIT_13_6_1.jpg',
      images: ['images/ONYKSIMALACHIT_13_6_1.jpg', 'images/ONYKSIMALACHIT_13_6_2.jpg'],
      tags: ['Ochrona', 'Przemiana', 'Natura']
    },
    onyks_malachit_7: {
      name: 'Onyks & Malachit VII',
      subtitle: 'Elegancka Transformacja',
      desc: 'Siódma odsłona ulubionego połączenia. Kontrastujące kolory malachitu i onyksu tworzą bransoletkę, która przyciąga wzrok.',
      price: '65 zł',
      image: 'images/ONYKSIMALACHIT_13_7_1.jpg',
      images: ['images/ONYKSIMALACHIT_13_7_1.jpg', 'images/ONYKSIMALACHIT_13_7_2.jpg'],
      tags: ['Ochrona', 'Przemiana', 'Natura']
    },
    onyks_malachit_8: {
      name: 'Onyks & Malachit VIII',
      subtitle: 'Elegancka Transformacja',
      desc: 'Ósma wersja tego wyrafinowanego połączenia. Onyks i malachit — dwa kamienie transformacji w harmonijnej kompozycji.',
      price: '65 zł',
      image: 'images/ONYKSIMALACHIT_13_8_1.jpg',
      images: ['images/ONYKSIMALACHIT_13_8_1.jpg', 'images/ONYKSIMALACHIT_13_8_2.jpg', 'images/ONYKSIMALACHIT_13_8_3.jpg'],
      tags: ['Ochrona', 'Przemiana', 'Natura']
    },
    onyks_malachit_9: {
      name: 'Onyks & Malachit IX',
      subtitle: 'Elegancka Transformacja',
      desc: 'Dziewiąta odsłona połączenia głębokiego onyksu z żywym zielonym malachitem. Dla tych, którzy cenią unikalność i jakość rzemiosła.',
      price: '65 zł',
      image: 'images/ONYKSIMALACHIT_13_9_1.jpg',
      images: ['images/ONYKSIMALACHIT_13_9_1.jpg', 'images/ONYKSIMALACHIT_13_9_2.jpg'],
      tags: ['Ochrona', 'Przemiana', 'Natura']
    },
    onyks_malachit_10: {
      name: 'Onyks & Malachit X',
      subtitle: 'Elegancka Transformacja',
      desc: 'Dziesiąta i wyjątkowa odsłona kolekcji Onyks & Malachit. Każda bransoletka ręcznie wykonana, każdy wzór niepowtarzalny.',
      price: '65 zł',
      image: 'images/ONYKSIMALACHIT_13_10_1.jpg',
      images: ['images/ONYKSIMALACHIT_13_10_1.jpg', 'images/ONYKSIMALACHIT_13_10_2.jpg'],
      tags: ['Ochrona', 'Przemiana', 'Natura']
    },
    onyks_piasek_2: {
      name: 'Onyks & Piasek Pustyni II',
      subtitle: 'Złote Piaski',
      desc: 'Drugi wzór harmonijnego kontrastu ciemnego onyksu i ciepłego piaskowca pustyni. Eleganckie, nowoczesne, luksusowe.',
      price: '65 zł',
      image: 'images/ONYKSIPIASEKPUSTYNI_15_2_1.jpg',
      images: ['images/ONYKSIPIASEKPUSTYNI_15_2_1.jpg', 'images/ONYKSIPIASEKPUSTYNI_15_2_2.jpg'],
      tags: ['Ciepło', 'Elegancja', 'Światło']
    },
    kwarc_onyks_2: {
      name: 'Onyks & Różowy Kwarc II',
      subtitle: 'Miłość i Ochrona',
      desc: 'Drugi wzór subtelnego połączenia miłości i ochrony. Różowy kwarc i onyks razem otulają ciepłem i dają poczucie bezpieczeństwa.',
      price: '65 zł',
      image: 'images/ONYKSIROZOWYKWARC_16_2_1.jpg',
      images: ['images/ONYKSIROZOWYKWARC_16_2_1.jpg'],
      tags: ['Miłość', 'Równowaga', 'Serce']
    },
    kwarc_onyks_3: {
      name: 'Onyks & Różowy Kwarc III',
      subtitle: 'Miłość i Ochrona',
      desc: 'Trzecia odsłona połączenia serca i siły. Różowy kwarc harmonizuje emocje, onyks dodaje pewności siebie.',
      price: '65 zł',
      image: 'images/ONYKSIROZOWYKWARC_16_3_1.jpg',
      images: ['images/ONYKSIROZOWYKWARC_16_3_1.jpg', 'images/ONYKSIROZOWYKWARC_16_3_2.jpg'],
      tags: ['Miłość', 'Równowaga', 'Serce']
    },
    onyks_tygrysie3: {
      name: 'Onyks & Tygrysie Oko III',
      subtitle: 'Niezłomna Wola',
      desc: 'Trzecia odsłona potężnego połączenia ochrony i determinacji. Czarny onyks i złociste tygrysie oko — duet dla osób stawiających czoła wyzwaniom.',
      price: '65 zł',
      image: 'images/ONYKSITYGRYSIEOKO_17_3_1.jpg',
      images: ['images/ONYKSITYGRYSIEOKO_17_3_1.jpg', 'images/ONYKSITYGRYSIEOKO_17_3_2.jpg', 'images/ONYKSITYGRYSIEOKO_17_3_3.jpg'],
      tags: ['Siła', 'Odwaga', 'Determinacja']
    },
    onyks_tygrysie4: {
      name: 'Onyks & Tygrysie Oko IV',
      subtitle: 'Niezłomna Wola',
      desc: 'Czwarta wersja nieodparcie silnego połączenia. Onyks fundamentem, tygrysie oko kompasem na drodze do celu.',
      price: '65 zł',
      image: 'images/ONYKSITYGRYSIEOKO_17_4_1.jpg',
      images: ['images/ONYKSITYGRYSIEOKO_17_4_1.jpg', 'images/ONYKSITYGRYSIEOKO_17_4_2.jpg'],
      tags: ['Siła', 'Odwaga', 'Determinacja']
    },
    onyks_tygrysie5: {
      name: 'Onyks & Tygrysie Oko V',
      subtitle: 'Niezłomna Wola',
      desc: 'Piąta odsłona duetu siły. Złocisty blask tygrysiego oka ożywia głęboką czerń onyksu.',
      price: '65 zł',
      image: 'images/ONYKSITYGRYSIEOKO_17_5_1.jpg',
      images: ['images/ONYKSITYGRYSIEOKO_17_5_1.jpg', 'images/ONYKSITYGRYSIEOKO_17_5_2.jpg'],
      tags: ['Siła', 'Odwaga', 'Determinacja']
    },
    onyks_tygrysie6: {
      name: 'Onyks & Tygrysie Oko VI',
      subtitle: 'Niezłomna Wola',
      desc: 'Szósta wersja popularnego połączenia ochrony i ambicji. Dla osób, które wiedzą, czego chcą i konsekwentnie dążą do celu.',
      price: '65 zł',
      image: 'images/ONYKSITYGRYSIEOKO_17_6_1.jpg',
      images: ['images/ONYKSITYGRYSIEOKO_17_6_1.jpg', 'images/ONYKSITYGRYSIEOKO_17_6_2.jpg', 'images/ONYKSITYGRYSIEOKO_17_6_3.jpg'],
      tags: ['Siła', 'Odwaga', 'Determinacja']
    },
    onyks_tygrysie7: {
      name: 'Onyks & Tygrysie Oko VII',
      subtitle: 'Niezłomna Wola',
      desc: 'Siódma odsłona kolekcji. Każdy wzór ręcznie wykonany, każda bransoletka niepowtarzalna.',
      price: '65 zł',
      image: 'images/ONYKSITYGRYSIEOKO_17_7_1.jpg',
      images: ['images/ONYKSITYGRYSIEOKO_17_7_1.jpg', 'images/ONYKSITYGRYSIEOKO_17_7_2.jpg', 'images/ONYKSITYGRYSIEOKO_17_7_3.jpg'],
      tags: ['Siła', 'Odwaga', 'Determinacja']
    },
    onyks_tygrysie8: {
      name: 'Onyks & Tygrysie Oko VIII',
      subtitle: 'Niezłomna Wola',
      desc: 'Ósma wersja tego energetycznego połączenia. Onyks i tygrysie oko — kamienie, które wzmacniają i chronią.',
      price: '65 zł',
      image: 'images/ONYKSITYGRYSIEOKO_17_8_1.jpg',
      images: ['images/ONYKSITYGRYSIEOKO_17_8_1.jpg', 'images/ONYKSITYGRYSIEOKO_17_8_2.jpg', 'images/ONYKSITYGRYSIEOKO_17_8_3.jpg'],
      tags: ['Siła', 'Odwaga', 'Determinacja']
    },
    onyks_tygrysie9: {
      name: 'Onyks & Tygrysie Oko IX',
      subtitle: 'Niezłomna Wola',
      desc: 'Dziewiąta odsłona niezłomnej woli. Połączenie dwóch kamieni o silnej energii ochronnej w kolejnym wyjątkowym wzorze.',
      price: '65 zł',
      image: 'images/ONYKSITYGRYSIEOKO_17_9_1.jpg',
      images: ['images/ONYKSITYGRYSIEOKO_17_9_1.jpg', 'images/ONYKSITYGRYSIEOKO_17_9_2.jpg'],
      tags: ['Siła', 'Odwaga', 'Determinacja']
    },
    onyks_tygrysie10: {
      name: 'Onyks & Tygrysie Oko X',
      subtitle: 'Niezłomna Wola',
      desc: 'Dziesiąta i wyjątkowa odsłona kolekcji Onyks & Tygrysie Oko. Kompletna kolekcja dla prawdziwych koneserów.',
      price: '65 zł',
      image: 'images/ONYKSITYGRYSIEOKO_17_10_1.jpg',
      images: ['images/ONYKSITYGRYSIEOKO_17_10_1.jpg', 'images/ONYKSITYGRYSIEOKO_17_10_2.jpg'],
      tags: ['Siła', 'Odwaga', 'Determinacja']
    },
    knait_kunzyt: {
      name: 'Kyanit i Kunzyt',
      subtitle: 'Spokój Serca',
      desc: 'Rzadkie i wyjątkowe połączenie dwóch szlachetnych minerałów. Kyanit o hipnotyzującym błękicie wspomaga komunikację i samoekspresję, a delikatny różowy Kunzyt — zwany kamieniem miłości — otwiera serce na bezwarunkowe uczucie. Bransoletka dla osób poszukujących harmonii duszy.',
      price: '65 zł',
      image: 'images/Kyanit_i_Kunzyt_1.jpg',
      images: ['images/Kyanit_i_Kunzyt_1.jpg'],
      tags: ['Komunikacja', 'Miłość', 'Dusza']
    },
    szmaragd: {
      name: 'Szmaragd',
      subtitle: 'Kamień Mądrości',
      desc: 'Jeden z najcenniejszych kamieni szlachetnych świata, znany od starożytności. Soczysta, głęboka zieleń szmaragdu symbolizuje wzrost, mądrość i odnowę. Kleopatra i Aleksander Wielki cenili go ponad złoto. Każdy szmaragd jest absolutnie unikalny. Bransoletka dla tych, którzy wybierają wyjątkowość.',
      price: '65 zł',
      image: 'images/Szmaragd_1.jpg',
      images: ['images/Szmaragd_1.jpg'],
      tags: ['Mądrość', 'Wzrost', 'Wyjątkowość']
    },
    szafir: {
      name: 'Szafir',
      subtitle: 'Szlachetny Błękit',
      desc: 'Symbol królewskiej lojalności, prawdy i mądrości od tysiącleci. Głęboki, niebiański błękit szafiru działa jak kotwica umysłu — pomaga zachować spokój w chwilach chaosu i wspiera jasność myślenia. Kamień przeznaczenia i ochrony. Dla tych, którzy wierzą w swoją drogę.',
      price: '65 zł',
      image: 'images/Szafir_1.jpg',
      images: ['images/Szafir_1.jpg'],
      tags: ['Mądrość', 'Lojalność', 'Jasność']
    },
    turmalin_rozowy_kwarc: {
      name: 'Turmalin i Różowy Kwarc',
      subtitle: 'Miłość i Energia',
      desc: 'Połączenie dwóch wyjątkowych minerałów o silnym działaniu na serce. Turmalin — kamień o szerokim spektrum barw — chroni i oczyszcza pole energetyczne, a delikatny Różowy Kwarc otwiera serce na miłość, współczucie i wewnętrzne ciepło. Razem tworzą bransoletkę o niezwykłej harmonii.',
      price: '65 zł',
      image: 'images/TURMALINIROZOWYKWARC_18_1_1.jpg',
      images: ['images/TURMALINIROZOWYKWARC_18_1_1.jpg'],
      tags: ['Miłość', 'Ochrona', 'Harmonia']
    },
    szmaragd_kunzyt: {
      name: 'Szmaragd i Kunzyt',
      subtitle: 'Serce i Mądrość',
      desc: 'Rzadkie połączenie dwóch kamieni o głęboko serdecznej energii. Szmaragd — kamień Wenus i symbol wiecznej miłości — łączy się z delikatnym Kunzytem, zwanym „kamieniem miłości", który otwiera serce na bezwarunkowe uczucie. To biżuteria dla osób, które żyją sercem i kierują się intuicją.',
      price: '165 zł',
      image: 'images/SZMARAGDIKUNZYT_19_1_1.jpg',
      images: ['images/SZMARAGDIKUNZYT_19_1_1.jpg', 'images/SZMARAGDIKUNZYT_19_1_2.jpg', 'images/SZMARAGDIKUNZYT_19_1_3.jpg', 'images/SZMARAGDIKUNZYT_19_1_4.jpg'],
      tags: ['Miłość', 'Mądrość', 'Intuicja']
    },
    szafir_kyanit: {
      name: 'Szafir i Kyanit',
      subtitle: 'Niebiańska Jasność',
      desc: 'Dwa błękitne kamienie o mistycznej głębi połączone w jednej bransoletce. Szafir — symbol królewskiej mądrości i lojalności — współgra z Kyanytem, który oczyszcza umysł i wspomaga komunikację. To zestawienie dla osób poszukujących jasności myśli i głębokiego spokoju.',
      price: '165 zł',
      image: 'images/SZAFIRIKYANIT_21_1_1.jpg',
      images: ['images/SZAFIRIKYANIT_21_1_1.jpg', 'images/SZAFIRIKYANIT_21_1_2.jpg', 'images/SZAFIRIKYANIT_21_1_3.jpg'],
      tags: ['Jasność', 'Mądrość', 'Spokój']
    },
    turmalin_kunzyt: {
      name: 'Turmalin i Kunzyt',
      subtitle: 'Ochrona Serca',
      desc: 'Turmalin, jeden z najbardziej energetycznych minerałów, tworzy potężną tarczę ochronną, a Kunzyt — różowy kamień serca — wypełnia ją bezwarunkową miłością i łagodnością. Ta bransoletka jest jak uścisk — chroni i jednocześnie otula ciepłem.',
      price: '65 zł',
      image: 'images/TURMALINIKUNZYT_22_1_1.jpg',
      images: ['images/TURMALINIKUNZYT_22_1_1.jpg', 'images/TURMALINIKUNZYT_22_1_2.jpg', 'images/TURMALINIKUNZYT_22_1_3.jpg'],
      tags: ['Ochrona', 'Miłość', 'Łagodność']
    },
    rubin_kunzyt: {
      name: 'Rubin i Kunzyt',
      subtitle: 'Ogień i Miłość',
      desc: 'Rubin — kamień królewskiej pasji, odwagi i żywotności — spotyka się z delikatnym, różowym Kunzytem. Ognisty temperament rubinu łagodzi Kunzyt, tworząc wyjątkowy duet: energia i miłość, namiętność i czułość. Bransoletka dla serc pełnych życia.',
      price: '165 zł',
      image: 'images/RUBINIKUNZYT_23_1_1.jpg',
      images: ['images/RUBINIKUNZYT_23_1_1.jpg', 'images/RUBINIKUNZYT23_1_2.jpg', 'images/RUBINIKUNZYT23_1_3.jpg', 'images/RUBINIKUNZYT23_1_4.jpg'],
      tags: ['Pasja', 'Miłość', 'Żywotność']
    },
    turmalin_rubin: {
      name: 'Turmalin i Rubin',
      subtitle: 'Ognista Ochrona',
      desc: 'Połączenie dwóch kamieni o niezwykłej mocy. Turmalin buduje niewidzialną tarczę, która odpędza negatywną energię, a Rubin rozgrzewa serce i pobudza do odważnego działania. To bransoletka dla tych, którzy idą przez życie z głową wysoko, nie bojąc się wyzwań.',
      price: '85 zł',
      image: 'images/TURMALINIRUBIN_24_1_1.jpg',
      images: ['images/TURMALINIRUBIN_24_1_1.jpg', 'images/TURMALINIRUBIN_24_1_2.jpg', 'images/TURMALINIRUBIN_24_1_3.jpg'],
      tags: ['Ochrona', 'Odwaga', 'Siła']
    },
    turmalin_rubin_2: {
      name: 'Turmalin i Rubin II',
      subtitle: 'Ognista Ochrona',
      desc: 'Druga odsłona potężnego połączenia Turmalinu i Rubinu. Każdy wzór jest unikalny, każda bransoletka ręcznie wykonana. Ten sam żar i ochrona — w nowej kompozycji.',
      price: '85 zł',
      image: 'images/TURMALINIRUBIN_24_2_1.jpg',
      images: ['images/TURMALINIRUBIN_24_2_1.jpg', 'images/TURMALINIRUBIN_24_2_2.jpg', 'images/TURMALINIRUBIN_24_2_3.jpg'],
      tags: ['Ochrona', 'Odwaga', 'Siła']
    },
    kyanit_rubin: {
      name: 'Kyanit i Rubin',
      subtitle: 'Błękit i Ogień',
      desc: 'Kontrast, który urzeka. Lodowaty, spokojny błękit Kyanitu zderza się z ognistą czerwienią Rubinu, tworząc bransoletkę pełną napięcia i harmonii jednocześnie. Kyanit chłodzi umysł i wspomaga komunikację, Rubin rozgrzewa serce i dodaje odwagi. Dla tych, którzy lubią żyć pełnią życia.',
      price: '165 zł',
      image: 'images/KYANITIRUBIN_25_1_1.jpg',
      images: ['images/KYANITIRUBIN_25_1_1.jpg', 'images/KYANITIRUBIN_25_1_2.jpg', 'images/KYANITIRUBIN_25_1_3.jpg'],
      tags: ['Komunikacja', 'Odwaga', 'Równowaga']
    }
  };

  // --- Allegro URLs per product ---
  const allegroUrls = {
    agat:                   'https://allegro.pl/oferta/bransoletka-z-kamieni-naturalnych-idealna-na-prezent-18395473145',
    agat_lawa:              '',
    agat_lawa_2:            '',
    agat_lawa_3:            'https://allegro.pl/produkt/bransoletka-z-agatu-i-lawy-elegancja-z-charakterem-8687219e-f9af-4de5-8cc6-940c5e2e45d0?offerId=18357201981',
    labradoryt:             '',
    labradoryt_agat:        '',
    labradoryt_agat_2:      '',
    lawa:                   '',
    lawa_2:                 '',
    lawa_tygrysie:          '',
    lawa_tygrysie_2:        '',
    lawa_tygrysie_3:        '',
    lawa_malachit:          '',
    onyks_fasetowany:       '',
    onyks_matowy:           '',
    onyks_krysztal:         '',
    onyks_krysztal_2:       '',
    onyks_krysztal_3:       '',
    onyks_krysztal_cytryn:  '',
    onyks_agat_fioletowy:   '',
    onyks_jaspis:           '',
    onyks_labradoryt:       '',
    onyks_malachit:         'https://allegro.pl/oferta/bransoletka-z-kamieni-naturalnych-idealna-na-prezent-18353048845',
    onyks_malachit_2:       'https://allegro.pl/oferta/bransoletka-z-kamieni-naturalnych-idealna-na-prezent-18353048845',
    onyks_malachit_3:       'https://allegro.pl/oferta/bransoletka-z-kamieni-naturalnych-idealna-na-prezent-18353048845',
    onyks_malachit_4:       'https://allegro.pl/oferta/bransoletka-z-kamieni-naturalnych-idealna-na-prezent-18353048845',
    onyks_malachit_5:       'https://allegro.pl/oferta/bransoletka-z-kamieni-naturalnych-idealna-na-prezent-18353048845',
    onyks_malachit_6:       'https://allegro.pl/oferta/bransoletka-z-kamieni-naturalnych-idealna-na-prezent-18353048845',
    onyks_malachit_7:       'https://allegro.pl/oferta/bransoletka-z-kamieni-naturalnych-idealna-na-prezent-18353048845',
    onyks_malachit_8:       'https://allegro.pl/oferta/bransoletka-z-kamieni-naturalnych-idealna-na-prezent-18353048845',
    onyks_malachit_9:       'https://allegro.pl/oferta/bransoletka-z-kamieni-naturalnych-idealna-na-prezent-18353048845',
    onyks_malachit_10:      'https://allegro.pl/oferta/bransoletka-z-kamieni-naturalnych-idealna-na-prezent-18353048845',
    onyks_piasek:           '',
    onyks_piasek_2:         '',
    onyks_tygrysie:         '',
    onyks_tygrysie2:        '',
    onyks_tygrysie3:        '',
    onyks_tygrysie4:        '',
    onyks_tygrysie5:        '',
    onyks_tygrysie6:        '',
    onyks_tygrysie7:        '',
    onyks_tygrysie8:        '',
    onyks_tygrysie9:        '',
    onyks_tygrysie10:       '',
    onyks_3:                '',
    onyks_4:                '',
    kwarc_onyks:            '',
    kwarc_onyks_2:          '',
    kwarc_onyks_3:          '',
    knait_kunzyt:           '',
    szmaragd:               '',
    szafir:                 '',
    turmalin_rozowy_kwarc:  '',
    szmaragd_kunzyt:        '',
    szafir_kyanit:          '',
    turmalin_kunzyt:        '',
    rubin_kunzyt:           '',
    turmalin_rubin:         'https://allegro.pl/produkt/bransoletka-z-kamieni-szlachetnych-i-naturalnych-idealna-na-prezent-8f67147f-7207-4ea1-8427-1ae9a049be1b?offerId=18418861361',
    turmalin_rubin_2:       '',
    kyanit_rubin:           'https://allegro.pl/produkt/bransoletka-z-kamieni-szlachetnych-idealna-na-prezent-6cd66526-5b64-4023-82d6-beff713f8680?offerId=18419364344',
  };

  // --- Header Scroll Effect ---
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.pageYOffset > 50);
  }, { passive: true });

  // --- Mobile Navigation Toggle ---
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      mainNav.classList.toggle('open');
      document.body.style.overflow = mainNav.classList.contains('open') ? 'hidden' : '';
    });
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        mainNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // --- About Slideshow ---
  (() => {
    const container = document.getElementById('about-slideshow');
    const progressBar = document.getElementById('slideshow-progress-bar');
    if (!container) return;

    const INTERVAL = 3500;
    const images = Object.values(products).map(p => ({ src: p.image, alt: p.name }));

    images.forEach((img, i) => {
      const slide = document.createElement('div');
      slide.className = 'about-slide' + (i === 0 ? ' active' : '');
      slide.innerHTML = `<img src="${img.src}" alt="${img.alt}" loading="${i === 0 ? 'eager' : 'lazy'}">`;
      container.appendChild(slide);
    });

    const slides = container.querySelectorAll('.about-slide');
    let current = 0;
    let progressStart = null;
    let rafId = null;

    const animateProgress = (timestamp) => {
      if (!progressStart) progressStart = timestamp;
      const elapsed = timestamp - progressStart;
      progressBar.style.width = Math.min((elapsed / INTERVAL) * 100, 100) + '%';
      if (elapsed < INTERVAL) {
        rafId = requestAnimationFrame(animateProgress);
      }
    };

    const goTo = (index) => {
      slides[current].classList.remove('active');
      current = (index + slides.length) % slides.length;
      slides[current].classList.add('active');
      progressBar.style.transition = 'none';
      progressBar.style.width = '0%';
      progressStart = null;
      cancelAnimationFrame(rafId);
      requestAnimationFrame(animateProgress);
    };

    requestAnimationFrame(animateProgress);
    setInterval(() => goTo(current + 1), INTERVAL);
  })();

  // --- Scroll Reveal ---
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // --- Smooth Scroll ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
      }
    });
  });

  // --- Shop Toggle (expand/collapse) ---
  const shopToggleBtn = document.getElementById('shop-toggle-btn');
  const productsWrapper = document.getElementById('products-grid-wrapper');

  const expandShop = () => {
    productsWrapper.style.height = productsWrapper.scrollHeight + 'px';
    shopToggleBtn.classList.add('open');
    shopToggleBtn.setAttribute('aria-expanded', 'true');
    productsWrapper.addEventListener('transitionend', () => {
      productsWrapper.style.height = 'auto';
    }, { once: true });
  };

  const collapseShop = () => {
    productsWrapper.style.height = productsWrapper.scrollHeight + 'px';
    requestAnimationFrame(() => {
      productsWrapper.style.height = '0';
    });
    shopToggleBtn.classList.remove('open');
    shopToggleBtn.setAttribute('aria-expanded', 'false');
  };

  if (shopToggleBtn) {
    shopToggleBtn.addEventListener('click', () => {
      if (shopToggleBtn.classList.contains('open')) {
        collapseShop();
        // Scroll back up to the section heading
        setTimeout(() => {
          document.getElementById('kolekcja').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 350);
      } else {
        expandShop();
      }
    });
  }

  // --- Shop Filter Pills ---
  const productCards = document.querySelectorAll('.product-card');

  // ============================================
  // STONE MAP — which products contain each stone
  // ============================================
  const STONE_MAP = {
    agat:       ['agat','agat_lawa','agat_lawa_2','agat_lawa_3','labradoryt_agat','labradoryt_agat_2','onyks_agat_fioletowy'],
    lawa:       ['agat_lawa','agat_lawa_2','agat_lawa_3','lawa','lawa_2','lawa_tygrysie','lawa_tygrysie_2','lawa_tygrysie_3','lawa_malachit'],
    labradoryt: ['labradoryt','labradoryt_agat','labradoryt_agat_2','onyks_labradoryt'],
    onyks:      ['onyks_fasetowany','onyks_matowy','onyks_3','onyks_4','onyks_krysztal','onyks_krysztal_2','onyks_krysztal_3','onyks_agat_fioletowy','onyks_jaspis','onyks_labradoryt','onyks_malachit','onyks_malachit_2','onyks_malachit_3','onyks_malachit_4','onyks_malachit_5','onyks_malachit_6','onyks_malachit_7','onyks_malachit_8','onyks_malachit_9','onyks_malachit_10','onyks_tygrysie','onyks_tygrysie2','onyks_tygrysie3','onyks_tygrysie4','onyks_tygrysie5','onyks_tygrysie6','onyks_tygrysie7','onyks_tygrysie8','onyks_tygrysie9','onyks_tygrysie10','onyks_piasek','onyks_piasek_2','kwarc_onyks','kwarc_onyks_2','kwarc_onyks_3','onyks_krysztal_cytryn'],
    tygrysie:   ['lawa_tygrysie','lawa_tygrysie_2','lawa_tygrysie_3','onyks_tygrysie','onyks_tygrysie2','onyks_tygrysie3','onyks_tygrysie4','onyks_tygrysie5','onyks_tygrysie6','onyks_tygrysie7','onyks_tygrysie8','onyks_tygrysie9','onyks_tygrysie10'],
    malachit:   ['lawa_malachit','onyks_malachit','onyks_malachit_2','onyks_malachit_3','onyks_malachit_4','onyks_malachit_5','onyks_malachit_6','onyks_malachit_7','onyks_malachit_8','onyks_malachit_9','onyks_malachit_10'],
    kwarc:      ['kwarc_onyks','kwarc_onyks_2','kwarc_onyks_3','turmalin_rozowy_kwarc'],
    krysztal:   ['onyks_krysztal','onyks_krysztal_2','onyks_krysztal_3','onyks_krysztal_cytryn'],
    cytryn:     ['onyks_krysztal_cytryn'],
    szmaragd:   ['szmaragd_kunzyt'],
    szafir:     ['szafir_kyanit'],
    kyanit:     ['szafir_kyanit','kyanit_rubin'],
    turmalin:   ['turmalin_rozowy_kwarc','turmalin_kunzyt','turmalin_rubin','turmalin_rubin_2'],
    rubin:      ['rubin_kunzyt','turmalin_rubin','turmalin_rubin_2','kyanit_rubin'],
    kunzyt:     ['szmaragd_kunzyt','turmalin_kunzyt','rubin_kunzyt'],
    jaspis:     ['onyks_jaspis'],
  };

  let activeEnergyFilter = 'all';
  let activeStoneFilter  = 'all';

  function applyFilters() {
    productCards.forEach(card => {
      const matchEnergy = activeEnergyFilter === 'all' || card.dataset.category === activeEnergyFilter;
      const matchStone  = activeStoneFilter === 'all' || (STONE_MAP[activeStoneFilter] || []).includes(card.dataset.product);
      const show = matchEnergy && matchStone;
      card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      if (show) {
        card.style.display = '';
        requestAnimationFrame(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; });
      } else {
        card.style.opacity = '0'; card.style.transform = 'translateY(20px)';
        setTimeout(() => { if (card.style.opacity === '0') card.style.display = 'none'; }, 400);
      }
    });
  }

  window.applyEnergyFilter = function(value) {
    activeEnergyFilter = value;
    document.querySelectorAll('#energy-filter-pills .filter-pill').forEach(p => {
      p.classList.toggle('active', p.dataset.energy === value);
    });
    if (shopToggleBtn && !shopToggleBtn.classList.contains('open')) expandShop();
    applyFilters();
  };

  window.applyStoneFilter = function(value) {
    activeStoneFilter = value;
    document.querySelectorAll('#stone-filter-pills .filter-pill').forEach(p => {
      p.classList.toggle('active', p.dataset.stone === value);
    });
    if (shopToggleBtn && !shopToggleBtn.classList.contains('open')) expandShop();
    applyFilters();
  };

  document.querySelectorAll('#energy-filter-pills .filter-pill').forEach(btn => {
    btn.addEventListener('click', () => window.applyEnergyFilter(btn.dataset.energy));
  });

  document.querySelectorAll('#stone-filter-pills .filter-pill').forEach(btn => {
    btn.addEventListener('click', () => window.applyStoneFilter(btn.dataset.stone));
  });

  // ============================================
  // ENERGY GUIDE → COLLECTION FILTER LINKS
  // ============================================
  document.querySelectorAll('.energy-card--link[data-stone]').forEach(card => {
    card.addEventListener('click', () => {
      window.applyStoneFilter(card.dataset.stone);
      document.getElementById('kolekcja')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ============================================
  // CART STATE
  // ============================================
  const CART_KEY = 'agereartCart';
  let cart = [];
  let customerData = null;

  const loadCart = () => {
    try { cart = JSON.parse(localStorage.getItem(CART_KEY) || '[]'); } catch { cart = []; }
  };
  const saveCart = () => localStorage.setItem(CART_KEY, JSON.stringify(cart));
  const cartTotal = () => cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const cartItemCount = () => cart.reduce((sum, i) => sum + i.qty, 0);
  const parsePrice = (priceStr) => parseInt(priceStr);

  loadCart();

  // ============================================
  // CART DRAWER
  // ============================================
  const cartDrawer = document.getElementById('cart-drawer');
  const cartBadge = document.getElementById('cart-badge');
  const cartItemsList = document.getElementById('cart-items-list');
  const cartEmptyState = document.getElementById('cart-empty-state');
  const cartPanelFooter = document.getElementById('cart-panel-footer');
  const cartPanelCount = document.getElementById('cart-panel-count');
  const cartSubtotal = document.getElementById('cart-subtotal');

  const openCartDrawer = () => {
    cartDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const closeCartDrawer = () => {
    cartDrawer.classList.remove('open');
    document.body.style.overflow = '';
  };

  document.getElementById('cart-icon-btn').addEventListener('click', openCartDrawer);
  document.getElementById('cart-panel-close').addEventListener('click', closeCartDrawer);
  document.getElementById('cart-backdrop').addEventListener('click', closeCartDrawer);

  const renderCart = () => {
    const count = cartItemCount();
    const total = cartTotal();
    const isEmpty = cart.length === 0;

    // Badge
    cartBadge.textContent = count > 0 ? count : '';
    cartBadge.classList.toggle('visible', count > 0);

    // Empty / items state
    cartEmptyState.style.display = isEmpty ? 'flex' : 'none';
    cartPanelFooter.style.display = isEmpty ? 'none' : 'flex';
    cartPanelCount.textContent = count > 0 ? `(${count})` : '';

    // Render items
    cartItemsList.innerHTML = cart.map(item => `
      <div class="cart-item" data-key="${item.key}">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" loading="lazy">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-size">25 cm (regulowana)</div>
          ${item.personalisation ? `<div class="cart-item-personalisation">✦ ${item.personalisation}</div>` : ''}
          <div class="cart-item-price">${item.price * item.qty} zł</div>
        </div>
        <div class="cart-item-controls">
          <button class="qty-btn" data-action="dec" aria-label="Zmniejsz ilość">−</button>
          <span class="qty-value">${item.qty}</span>
          <button class="qty-btn" data-action="inc" aria-label="Zwiększ ilość">+</button>
        </div>
        <button class="cart-item-remove" aria-label="Usuń produkt">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
    `).join('');

    // Qty controls
    cartItemsList.querySelectorAll('.qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const { key } = btn.closest('.cart-item').dataset;
        const item = cart.find(i => i.key === key);
        if (!item) return;
        if (btn.dataset.action === 'inc') {
          item.qty++;
        } else {
          item.qty--;
          if (item.qty <= 0) cart = cart.filter(i => i.key !== key);
        }
        saveCart();
        renderCart();
      });
    });

    // Remove buttons
    cartItemsList.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        const { key } = btn.closest('.cart-item').dataset;
        cart = cart.filter(i => i.key !== key);
        saveCart();
        renderCart();
      });
    });

    // Totals
    cartSubtotal.textContent = `${total} zł`;

  };

  const addToCart = (key) => {
    const p = products[key];
    if (!p) return;
    const personalisationInput = document.getElementById('modal-personalisation');
    const personalisation = personalisationInput ? personalisationInput.value.trim() : '';
    const existing = cart.find(i => i.key === key);
    if (existing) {
      existing.qty++;
    } else {
      cart.push({ key, name: p.name, price: parsePrice(p.price), image: p.images ? p.images[0] : p.image, personalisation, qty: 1 });
    }
    saveCart();
    renderCart();
    openCartDrawer();
  };

  // Clicking the add-to-cart button on a card opens the quick-view (for size selection)
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.product-card');
      const quickViewBtn = card.querySelector('.product-quick-view');
      if (quickViewBtn) quickViewBtn.click();
    });
  });

  // ============================================
  // CARD GALLERY
  // ============================================
  const initCardGalleries = () => {
    document.querySelectorAll('.product-card[data-product]').forEach(card => {
      const key = card.dataset.product;
      const p = products[key];
      if (!p || !p.images || p.images.length <= 1) return;

      const imgEl = card.querySelector('.product-image img');
      const imageDiv = card.querySelector('.product-image');
      if (!imgEl || !imageDiv) return;

      let currentIdx = 0;

      // Inject nav buttons
      const prevBtn = document.createElement('button');
      prevBtn.className = 'card-gallery-btn card-gallery-prev';
      prevBtn.innerHTML = '&#8249;';
      prevBtn.setAttribute('aria-label', 'Poprzednie zdjęcie');

      const nextBtn = document.createElement('button');
      nextBtn.className = 'card-gallery-btn card-gallery-next';
      nextBtn.innerHTML = '&#8250;';
      nextBtn.setAttribute('aria-label', 'Następne zdjęcie');

      // Inject dots
      const dotsEl = document.createElement('div');
      dotsEl.className = 'card-gallery-dots';
      dotsEl.innerHTML = p.images.map((_, i) =>
        `<span class="card-gallery-dot${i === 0 ? ' active' : ''}" data-idx="${i}"></span>`
      ).join('');

      imageDiv.appendChild(prevBtn);
      imageDiv.appendChild(nextBtn);
      imageDiv.appendChild(dotsEl);

      const goTo = (idx) => {
        currentIdx = (idx + p.images.length) % p.images.length;
        imgEl.src = p.images[currentIdx];
        dotsEl.querySelectorAll('.card-gallery-dot').forEach((d, i) => d.classList.toggle('active', i === currentIdx));
      };

      prevBtn.addEventListener('click', (e) => { e.stopPropagation(); goTo(currentIdx - 1); });
      nextBtn.addEventListener('click', (e) => { e.stopPropagation(); goTo(currentIdx + 1); });
      dotsEl.addEventListener('click', (e) => {
        const dot = e.target.closest('.card-gallery-dot');
        if (dot) { e.stopPropagation(); goTo(parseInt(dot.dataset.idx)); }
      });
    });
  };

  initCardGalleries();

  renderCart();

  // ============================================
  // MODAL / QUICK VIEW
  // ============================================
  const modal = document.querySelector('.modal-overlay');
  const modalClose = document.querySelector('.modal-close');

  document.querySelectorAll('.product-quick-view').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.closest('.product-card').dataset.product;
      const p = products[key];
      if (p && modal) {
        const galleryImgs = p.images || [p.image];
        modal._galleryImages = galleryImgs;
        modal._galleryIdx = 0;
        modal.querySelector('.modal-image').src = galleryImgs[0];
        modal.querySelector('.stone-name').textContent = p.name;
        modal.querySelector('.stone-subtitle').textContent = p.subtitle;
        modal.querySelector('.stone-desc').textContent = p.desc;
        modal.querySelector('.modal-price').textContent = p.price;
        modal.querySelector('.modal-add-btn').dataset.product = key;
        const allegroBtn = modal.querySelector('.modal-allegro-btn');
        const allegroUrl = allegroUrls[key] || '';
        allegroBtn.href = allegroUrl;
        allegroBtn.classList.toggle('visible', !!allegroUrl);
        const propsContainer = modal.querySelector('.modal-properties');
        propsContainer.innerHTML = p.tags.map(t => `<span class="stone-prop-tag">${t}</span>`).join('');
        // Gallery prev/next visibility
        const prevBtn = modal.querySelector('.modal-gallery-prev');
        const nextBtn = modal.querySelector('.modal-gallery-next');
        const hasMultiple = galleryImgs.length > 1;
        if (prevBtn) prevBtn.style.display = hasMultiple ? 'flex' : 'none';
        if (nextBtn) nextBtn.style.display = hasMultiple ? 'flex' : 'none';
        // Thumbnail strip
        const thumbsEl = modal.querySelector('.modal-gallery-thumbs');
        if (thumbsEl) {
          thumbsEl.innerHTML = galleryImgs.map((src, i) =>
            `<img class="modal-thumb${i === 0 ? ' active' : ''}" src="${src}" data-idx="${i}" alt="Zdjęcie ${i + 1}" loading="lazy">`
          ).join('');
        }
        // Reset personalisation
        const personalisationInput = document.getElementById('modal-personalisation');
        if (personalisationInput) personalisationInput.value = '';
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Modal gallery navigation
  const modalGalleryPrev = document.querySelector('.modal-gallery-prev');
  const modalGalleryNext = document.querySelector('.modal-gallery-next');
  const modalGalleryThumbs = document.querySelector('.modal-gallery-thumbs');

  const modalGoTo = (idx) => {
    const imgs = modal._galleryImages;
    if (!imgs) return;
    modal._galleryIdx = (idx + imgs.length) % imgs.length;
    modal.querySelector('.modal-image').src = imgs[modal._galleryIdx];
    modal.querySelectorAll('.modal-thumb').forEach((t, i) => t.classList.toggle('active', i === modal._galleryIdx));
  };

  if (modalGalleryPrev) modalGalleryPrev.addEventListener('click', () => modalGoTo((modal._galleryIdx || 0) - 1));
  if (modalGalleryNext) modalGalleryNext.addEventListener('click', () => modalGoTo((modal._galleryIdx || 0) + 1));
  if (modalGalleryThumbs) modalGalleryThumbs.addEventListener('click', (e) => {
    const thumb = e.target.closest('.modal-thumb');
    if (thumb) modalGoTo(parseInt(thumb.dataset.idx));
  });

  const closeModal = () => {
    modal && modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeModal(); closeCartDrawer(); closeCheckout(); } });

  // Add to cart from modal
  const modalAddBtn = document.querySelector('.modal-add-btn');
  if (modalAddBtn) {
    modalAddBtn.addEventListener('click', () => {
      const key = modalAddBtn.dataset.product;
      addToCart(key);
      closeModal();
    });
  }

  // ============================================
  // CHECKOUT
  // ============================================
  const checkoutOverlay = document.getElementById('checkout-overlay');
  const checkoutForm = document.getElementById('checkout-form');

  const openCheckout = () => {
    if (cart.length === 0) return;
    closeCartDrawer();
    checkoutOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    showCheckoutPane('pane-details');
  };

  const closeCheckout = () => {
    checkoutOverlay && checkoutOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  document.getElementById('cart-checkout-btn').addEventListener('click', openCheckout);
  document.getElementById('checkout-close-btn').addEventListener('click', closeCheckout);
  checkoutOverlay.addEventListener('click', e => { if (e.target === checkoutOverlay) closeCheckout(); });

  const showCheckoutPane = (paneId) => {
    document.querySelectorAll('.checkout-pane').forEach(p => p.classList.remove('active'));
    document.getElementById(paneId).classList.add('active');

    const isPayment = paneId === 'pane-payment';
    const isSuccess = paneId === 'pane-success';
    const backBtn = document.getElementById('checkout-back-btn');
    backBtn.style.display = isPayment ? 'flex' : 'none';

    const titles = { 'pane-details': 'Dane dostawy', 'pane-payment': 'Płatność', 'pane-success': 'Potwierdzenie' };
    document.getElementById('checkout-title').textContent = titles[paneId] || '';

    document.getElementById('dot-2').classList.toggle('active', isPayment || isSuccess);
    document.getElementById('step-line-fill').style.width = (isPayment || isSuccess) ? '100%' : '0%';
  };

  document.getElementById('checkout-back-btn').addEventListener('click', () => showCheckoutPane('pane-details'));

  // Payment method switching
  document.querySelectorAll('.payment-method-card').forEach(card => {
    card.addEventListener('click', () => {
      selectedPaymentMethod = card.dataset.method;
      document.querySelectorAll('.payment-method-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      document.querySelectorAll('.payment-panel').forEach(p => p.classList.remove('active'));
      document.getElementById(`panel-${selectedPaymentMethod}`).classList.add('active');

      if (selectedPaymentMethod === 'transfer') {
        renderOrderReview(true);
        const total = cartTotal() + SHIPPING_COST;
        document.getElementById('transfer-total').textContent = `${total} zł`;
        document.getElementById('transfer-reference').textContent = currentReference;
      } else {
        renderOrderReview(false);
      }
    });
  });

  checkoutForm.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(checkoutForm);
    customerData = Object.fromEntries(data.entries());
    if (!customerData.fullName || !customerData.email || !customerData.address || !customerData.city || !customerData.postal) return;
    currentReference = generateReference();
    selectedPaymentMethod = 'allegro';
    document.querySelectorAll('.payment-method-card').forEach(c => c.classList.remove('active'));
    document.querySelector('.payment-method-card[data-method="allegro"]').classList.add('active');
    document.querySelectorAll('.payment-panel').forEach(p => p.classList.remove('active'));
    document.getElementById('panel-allegro').classList.add('active');
    showCheckoutPane('pane-payment');
    renderOrderReview(false);
  });

  const SHIPPING_COST = 12;

  const generateReference = () => {
    const year = new Date().getFullYear();
    const rand = Math.floor(1000 + Math.random() * 9000);
    return `AA-${year}-${rand}`;
  };

  let currentReference = '';
  let selectedPaymentMethod = 'allegro';

  const renderOrderReview = (includeShipping = false) => {
    const productTotal = cartTotal();
    const total = includeShipping ? productTotal + SHIPPING_COST : productTotal;
    document.getElementById('checkout-order-review').innerHTML = `
      <div class="order-review-items">
        ${cart.map(item => `
          <div class="order-review-item">
            <img src="${item.image}" alt="${item.name}">
            <div>
              <span>${item.name}</span>
              <small>25 cm (reg.) · ${item.qty} szt.${item.personalisation ? ` · Dedykacja: „${item.personalisation}"` : ''}</small>
            </div>
            <span>${item.price * item.qty} zł</span>
          </div>
        `).join('')}
        ${includeShipping ? `
          <div class="order-review-item">
            <div style="width:40px;height:40px;flex-shrink:0;"></div>
            <div><span>Wysyłka</span><small>Kurier / Paczkomat</small></div>
            <span>${SHIPPING_COST} zł</span>
          </div>
        ` : ''}
      </div>
      <div class="order-review-total">
        <span>Łącznie</span>
        <strong>${total} zł</strong>
      </div>
    `;
  };

  // Bank transfer confirmation
  document.getElementById('confirm-transfer-btn').addEventListener('click', () => {
    const btn = document.getElementById('confirm-transfer-btn');
    btn.disabled = true;
    btn.querySelector('span').textContent = 'Wysyłanie…';

    const orderData = {
      reference: currentReference,
      timestamp: new Date().toISOString(),
      name: customerData.fullName,
      email: customerData.email,
      phone: customerData.phone || '',
      address: customerData.address,
      city: customerData.city,
      postal: customerData.postal,
      items: cart.map(i => `${i.name} x${i.qty}`).join(', '),
      productTotal: cartTotal(),
      shipping: SHIPPING_COST,
      total: cartTotal() + SHIPPING_COST,
    };

    // Submit to Google Sheets — fire and forget
    const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwPGofDdwWj3gqBHP96fHKHG5DMxams_AzY7enNjc3JVkRH9erCfysJP3d8M297p2KiSA/exec';
    fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData),
    }).catch(() => {});

    // Email notification via Formspree — fire and forget
    fetch('https://formspree.io/f/xkoqkaea', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        _subject: `Nowe zamówienie ${currentReference} — AgereArt`,
        Referencja: currentReference,
        Klient: orderData.name,
        Email: orderData.email,
        Telefon: orderData.phone || '—',
        Adres: `${orderData.address}, ${orderData.postal} ${orderData.city}`,
        Produkty: orderData.items,
        'Suma produktów': `${orderData.productTotal} zł`,
        Wysyłka: `${orderData.shipping} zł`,
        'Do zapłaty': `${orderData.total} zł`,
      }),
    }).catch(() => {});

    // Show success
    document.getElementById('checkout-success-msg').textContent =
      `Dziękujemy, ${customerData.fullName.split(' ')[0]}! Twój numer referencyjny to ${currentReference}. Prosimy o dokonanie przelewu — po zaksięgowaniu wysyłamy w 1–2 dni robocze.`;
    document.getElementById('success-transfer-details').style.display = 'block';
    document.getElementById('success-reference').textContent = currentReference;
    document.getElementById('success-amount').textContent = `${cartTotal() + SHIPPING_COST} zł`;

    cart = [];
    saveCart();
    updateCartUI();
    showCheckoutPane('pane-success');

    btn.disabled = false;
    btn.querySelector('span').textContent = 'Potwierdzam zamówienie';
  });

  document.getElementById('checkout-done-btn').addEventListener('click', closeCheckout);

  // ============================================
  // CONTACT FORM — native Formspree submission
  // ============================================

  // ============================================
  // NEWSLETTER FORM
  // ============================================

  // --- Parallax Hero ---
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg && window.matchMedia('(min-width: 769px)').matches) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset < window.innerHeight) heroBg.style.transform = `translateY(${window.pageYOffset * 0.3}px)`;
    }, { passive: true });
  }

  // --- Counter Animation ---
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const startTime = performance.now();
        const animate = (now) => {
          const progress = Math.min((now - startTime) / 1500, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(eased * target) + suffix;
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        statsObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-number').forEach(el => statsObserver.observe(el));

  // --- Magnetic Hover ---
  if (window.matchMedia('(min-width: 769px)').matches) {
    document.querySelectorAll('.hero-cta, .form-submit').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        btn.style.transform = `translate(${(e.clientX - rect.left - rect.width / 2) * 0.15}px, ${(e.clientY - rect.top - rect.height / 2) * 0.15}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = ''; btn.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
        setTimeout(() => btn.style.transition = '', 400);
      });
    });
  }

  // --- Year ---
  const yearEl = document.querySelector('.current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // --- Floating Energy Particles in Hero ---
  const heroEl = document.querySelector('.hero');
  if (heroEl) {
    const colors = [
      'rgba(201,169,110,0.75)',
      'rgba(225,195,130,0.6)',
      'rgba(184,135,61,0.65)',
      'rgba(255,215,120,0.45)',
      'rgba(210,175,100,0.5)',
    ];
    for (let i = 0; i < 28; i++) {
      const p = document.createElement('div');
      p.className = 'hero-particle';
      const size = Math.random() * 5 + 2;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const duration = Math.random() * 9 + 7;
      const delay = -(Math.random() * duration);
      const rise = -(Math.random() * 200 + 120);
      const left = Math.random() * 100;
      p.style.cssText = `
        width:${size}px; height:${size}px;
        left:${left}%; bottom:${Math.random() * 30}%;
        background: radial-gradient(circle, ${color} 0%, transparent 70%);
        box-shadow: 0 0 ${size * 2}px ${color};
        --duration:${duration}s; --delay:${delay}s; --rise:${rise}px;
        animation-delay:${delay}s;
      `;
      heroEl.appendChild(p);
    }
  }

  // ============================================
  //  STONE QUIZ
  // ============================================
  const quizIntro     = document.getElementById('quiz-intro');
  const quizQuestions = document.getElementById('quiz-questions');
  const quizResult    = document.getElementById('quiz-result');
  const quizStartBtn  = document.getElementById('quiz-start-btn');
  const quizRetakeBtn = document.getElementById('quiz-retake-btn');
  const progressFill  = document.getElementById('quiz-progress-fill');
  const progressText  = document.getElementById('quiz-progress-text');
  const questionText  = document.getElementById('quiz-question-text');
  const optionsEl     = document.getElementById('quiz-options');
  const quizParticles = document.querySelector('.quiz-particles');

  if (!quizStartBtn) return;

  const QUESTIONS = [
    {
      text: 'Jakiego uczucia teraz potrzebujesz?',
      options: [
        { icon: '🌿', main: 'Spokoju i harmonii',      sub: 'Wyciszenie, balans, cisza',           cat: 'spokój' },
        { icon: '🔥', main: 'Siły i pewności siebie',  sub: 'Energia, determinacja, moc',          cat: 'siła' },
        { icon: '🌀', main: 'Przemiany i odwagi',       sub: 'Zmiany, nowe początki, wzrost',       cat: 'transformacja' },
        { icon: '✦',  main: 'Intuicji i mądrości',     sub: 'Głębia, wizja, tajemnica',            cat: 'intuicja' },
        { icon: '💗', main: 'Miłości i ciepła',        sub: 'Bliskość, czułość, połączenie',       cat: 'miłość' },
        { icon: '💎', main: 'Wyjątkowości',             sub: 'Prestiż, doskonałość, piękno',        cat: 'szlachetne' },
      ]
    },
    {
      text: 'Który krajobraz przemawia do Twojej duszy?',
      options: [
        { icon: '🏔️', main: 'Spokojna tafla jeziora', sub: 'O świcie, mgła, cisza',              cat: 'spokój' },
        { icon: '⛰️', main: 'Szczyt górski w słońcu',  sub: 'Orzeźwiające powietrze, siła widoku', cat: 'siła' },
        { icon: '🌋', main: 'Wulkan i dżungla',        sub: 'Żywioły, dzikość, odrodzenie',        cat: 'transformacja' },
        { icon: '🌌', main: 'Rozgwieżdżone niebo',     sub: 'Bezkres, tajemnica, kosmos',          cat: 'intuicja' },
        { icon: '🌸', main: 'Kwitnący ogród',           sub: 'Zapach kwiatów, ciepło, piękno',      cat: 'miłość' },
        { icon: '🪨', main: 'Jaskinia kryształów',      sub: 'Blask, głębia, doskonałość',          cat: 'szlachetne' },
      ]
    },
    {
      text: 'Co chcesz przyciągnąć do swojego życia?',
      options: [
        { icon: '🌙', main: 'Równowagę i spokój',      sub: 'Mniej chaosu, więcej harmonii',       cat: 'spokój' },
        { icon: '⚡', main: 'Sukces i determinację',    sub: 'Cel, działanie, wytrwałość',          cat: 'siła' },
        { icon: '🦋', main: 'Odwagę do zmian',         sub: 'Nowy rozdział, świeży start',         cat: 'transformacja' },
        { icon: '🔭', main: 'Jasność i wnikliwość',    sub: 'Lepsza intuicja, trafne decyzje',     cat: 'intuicja' },
        { icon: '🤍', main: 'Piękną relację',           sub: 'Miłość, bliskość, zrozumienie',       cat: 'miłość' },
        { icon: '✨', main: 'Wyjątkowe przeżycia',     sub: 'Coś, co zostaje na zawsze',           cat: 'szlachetne' },
      ]
    },
    {
      text: 'Zamknij oczy. Wyobraź sobie, że nosisz swoją bransoletkę. Jak się czujesz?',
      options: [
        { icon: '😌', main: 'Lekko i spokojnie',       sub: 'Myśli cichną, oddech się wyrównuje',  cat: 'spokój' },
        { icon: '💪', main: 'Pewnie i silnie',          sub: 'Wiesz, że dasz radę',                 cat: 'siła' },
        { icon: '🌱', main: 'Gotowo na nowe',           sub: 'Coś ważnego właśnie się zaczyna',     cat: 'transformacja' },
        { icon: '🌀', main: 'Przenikliwie i wyczulenie', sub: 'Widzisz to, czego inni nie widzą',  cat: 'intuicja' },
        { icon: '🥰', main: 'Ciepło i z miłością',     sub: 'Serce się otwiera',                   cat: 'miłość' },
        { icon: '👑', main: 'Olśniewająco',             sub: 'Wiedzą, że jesteś kimś wyjątkowym',   cat: 'szlachetne' },
      ]
    },
  ];

  const RESULTS = {
    spokój: {
      name: 'Biały Agat',
      stone: 'Czysty Spokój',
      keywords: 'Wyciszenie · Nadzieja · Harmonia',
      tag: 'Spokój',
      img: 'images/AGAT_1_1_1.jpg',
      desc: 'Biały Agat to kamień absolutnego wyciszenia. Koi chaos myśli, przywraca równowagę i otwiera na nowe możliwości. Nosi go ten, kto chce zatrzymać się i odetchnąć pełną piersią.',
      filter: 'spokój',
      product: 'agat',
      glow: 'rgba(245, 240, 232, 0.6)',
    },
    siła: {
      name: 'Lawa i Tygrysie Oko',
      stone: 'Surowa Energia',
      keywords: 'Pewność siebie · Motywacja · Żywioły',
      tag: 'Siła',
      img: 'images/LAWAITYGRYSIEOKO_6_1_1.jpg',
      desc: 'Połączenie lawy wulkanicznej i tygrysiego oka to symbol niezłomnej woli. Ten kamień nosi ten, kto zmierza po swoje — zdecydowany, skupiony i pełen ognia.',
      filter: 'siła',
      product: 'lawa_tygrysie',
      glow: 'rgba(184, 100, 40, 0.7)',
    },
    transformacja: {
      name: 'Lawa i Malachit',
      stone: 'Ogień i Natura',
      keywords: 'Transformacja · Odwaga · Nowe możliwości',
      tag: 'Transformacja',
      img: 'images/LAWAIMALACHIT_7_1_1.jpg',
      desc: 'Lawa rodzi nową ziemię, malachit ją pokrywa zielenią. Ten kamień towarzyszy tym, którzy są w przełomowym momencie życia — odważnym wystarczy go dotknąć.',
      filter: 'transformacja',
      product: 'lawa_malachit',
      glow: 'rgba(40, 130, 60, 0.6)',
    },
    intuicja: {
      name: 'Labradoryt',
      stone: 'Kamień Gwiazd',
      keywords: 'Tajemnica · Ochrona · Intuicja',
      tag: 'Intuicja',
      img: 'images/LABRADORYT_4_1_1.jpg',
      desc: 'Labradoryt mieni się jak zorza polarna — jeden ruch i kryje w sobie całe niebo. To kamień tych, którzy czują więcej, niż widzą, i ufają swojemu wewnętrznemu głosowi.',
      filter: 'intuicja',
      product: 'labradoryt',
      glow: 'rgba(80, 120, 200, 0.6)',
    },
    miłość: {
      name: 'Różowy Kwarc i Onyks',
      stone: 'Miłość i Ochrona',
      keywords: 'Miłość · Równowaga · Serce',
      tag: 'Miłość',
      img: 'images/ONYKSIROZOWYKWARC_16_1_1.jpg',
      desc: 'Delikatny różowy kwarc w towarzystwie onyksu — serce otwarte i jednocześnie chronione. Dla tych, którzy miłość traktują poważnie i noszą ją dumnie.',
      filter: 'miłość',
      product: 'kwarc_onyks',
      glow: 'rgba(210, 120, 140, 0.6)',
    },
    szlachetne: {
      name: 'Szmaragd i Kunzyt',
      stone: 'Serce i Mądrość',
      keywords: 'Miłość · Mądrość · Intuicja',
      tag: 'Szlachetny',
      img: 'images/SZMARAGDIKUNZYT_19_1_1.jpg',
      desc: 'Prawdziwy szmaragd i kunzyt — dwa kamienie szlachetne zebrane w jedną bransoletkę. Dla wyjątkowych osób, które wiedzą, że noszą coś, co będzie pamiętane.',
      filter: 'szlachetne',
      product: 'szmaragd_kunzyt',
      glow: 'rgba(40, 160, 90, 0.65)',
    },
  };

  // Spawn particles
  const PARTICLE_COLORS = ['rgba(201,169,110,0.7)', 'rgba(245,240,232,0.5)', 'rgba(184,135,61,0.6)', 'rgba(255,255,255,0.3)'];
  for (let i = 0; i < 28; i++) {
    const p = document.createElement('div');
    p.className = 'quiz-particle';
    const size = 2 + Math.random() * 3;
    const color = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random() * 100}%;
      top:${20 + Math.random() * 70}%;
      background:${color};
      --dur:${7 + Math.random() * 10}s;
      --delay:${Math.random() * 8}s;
      --rise:-${80 + Math.random() * 120}px;
      --op:${0.3 + Math.random() * 0.5};
    `;
    quizParticles.appendChild(p);
  }

  let scores = { spokój: 0, siła: 0, transformacja: 0, intuicja: 0, miłość: 0, szlachetne: 0 };
  let currentQ = 0;

  function showScreen(id) {
    [quizIntro, quizQuestions, quizResult].forEach(el => el.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  }

  function renderQuestion() {
    const q = QUESTIONS[currentQ];
    progressFill.style.width = `${(currentQ / QUESTIONS.length) * 100}%`;
    progressText.textContent = `Pytanie ${currentQ + 1} z ${QUESTIONS.length}`;

    questionText.textContent = q.text;
    optionsEl.innerHTML = '';

    // Re-trigger animation
    const wrap = document.getElementById('quiz-question-wrap');
    wrap.style.animation = 'none';
    void wrap.offsetWidth;
    wrap.style.animation = '';

    q.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quiz-option';
      btn.innerHTML = `
        <span class="quiz-option-icon">${opt.icon}</span>
        <span class="quiz-option-main">${opt.main}</span>
        <span class="quiz-option-sub">${opt.sub}</span>
      `;
      btn.addEventListener('click', () => {
        optionsEl.querySelectorAll('.quiz-option').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        scores[opt.cat] += 2;
        setTimeout(() => {
          currentQ++;
          if (currentQ < QUESTIONS.length) {
            renderQuestion();
          } else {
            showResult();
          }
        }, 420);
      });
      optionsEl.appendChild(btn);
    });
  }

  function showResult() {
    progressFill.style.width = '100%';
    const winner = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
    const r = RESULTS[winner];

    document.getElementById('quiz-result-image').src = r.img;
    document.getElementById('quiz-result-image').alt = r.name;
    document.getElementById('quiz-result-energy-tag').textContent = r.tag;
    document.getElementById('quiz-result-name').textContent = r.name;
    document.getElementById('quiz-result-stone').textContent = r.stone;
    document.getElementById('quiz-result-keywords').textContent = r.keywords;
    document.getElementById('quiz-result-desc').textContent = r.desc;
    document.getElementById('quiz-result-glow').style.background = `radial-gradient(circle, ${r.glow} 0%, transparent 70%)`;

    const btn = document.getElementById('quiz-result-btn');
    // Replace btn to remove any previously attached listeners
    const freshBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(freshBtn, btn);
    freshBtn.href = '#kolekcja';

    freshBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const card = document.querySelector(`.product-card[data-product="${r.product}"]`);
      const wrapper = document.getElementById('products-grid-wrapper');
      const shopToggle = document.getElementById('shop-toggle-btn');

      // Reset both filters so the target card is guaranteed visible
      window.applyEnergyFilter('all');
      window.applyStoneFilter('all');

      const scrollToCard = () => {
        if (!card) return;
        document.querySelectorAll('.product-card--quiz-highlight').forEach(el => {
          el.classList.remove('product-card--quiz-highlight');
        });
        card.style.display = '';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        card.classList.add('product-card--quiz-highlight');
        setTimeout(() => card.classList.remove('product-card--quiz-highlight'), 2200);
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      };

      if (shopToggle && !shopToggle.classList.contains('open')) {
        expandShop();
        wrapper.addEventListener('transitionend', scrollToCard, { once: true });
      } else {
        // Wait for filter animation to clear before scrolling
        setTimeout(scrollToCard, 450);
      }
    });

    showScreen('quiz-result');
  }

  quizStartBtn.addEventListener('click', () => {
    scores = { spokój: 0, siła: 0, transformacja: 0, intuicja: 0, miłość: 0, szlachetne: 0 };
    currentQ = 0;
    showScreen('quiz-questions');
    renderQuestion();
  });

  quizRetakeBtn.addEventListener('click', () => {
    scores = { spokój: 0, siła: 0, transformacja: 0, intuicja: 0, miłość: 0, szlachetne: 0 };
    currentQ = 0;
    showScreen('quiz-intro');
  });

  // ============================================
  // MOBILE EFFECTS
  // ============================================

  // --- Scroll Progress Bar ---
  const progressBar = document.createElement('div');
  progressBar.id = 'scroll-progress';
  document.body.prepend(progressBar);

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    progressBar.style.transform = `scaleX(${scrolled})`;
  }, { passive: true });

  // --- Touch Ripple on Tap ---
  function createRipple(e) {
    const touch = e.touches ? e.touches[0] : e;
    const ripple = document.createElement('span');
    ripple.className = 'touch-ripple';
    ripple.style.left = touch.clientX + 'px';
    ripple.style.top  = touch.clientY + 'px';
    document.body.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  }
  document.addEventListener('touchstart', createRipple, { passive: true });

  // --- Hero Parallax on Scroll (mobile-friendly, RAF-throttled) ---
  const heroContent = document.querySelector('.hero-content');
  const heroSection = document.querySelector('.hero');
  if (heroContent && heroSection) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          const heroH = heroSection.offsetHeight;
          if (scrolled < heroH) {
            heroContent.style.transform = `translateY(${scrolled * 0.25}px)`;
            heroContent.style.opacity = 1 - (scrolled / heroH) * 1.2;
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // --- Product Card Scale-In on Mobile ---
  if (window.innerWidth <= 768) {
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${(i % 3) * 60}ms`;
          entry.target.classList.add('card-visible');
          cardObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.product-card').forEach(card => cardObserver.observe(card));
  }

  // --- Section Fade-Slide on Mobile ---
  if (window.innerWidth <= 768) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-in');
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('section').forEach(s => {
      s.classList.add('section-mobile');
      sectionObserver.observe(s);
    });
  }

});
