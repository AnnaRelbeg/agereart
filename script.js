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
      price: '89 zł',
      image: 'images/Agat_bransoletka.jpg',
      tags: ['Wyciszenie', 'Nadzieja', 'Harmonia']
    },
    agat_lawa: {
      name: 'Agat i Lawa',
      subtitle: 'Pierwotna Równowaga',
      desc: 'Mieszanka ziemskiego spokoju i wulkanicznego temperamentu. Agat to kamień harmonii, który uspokaja emocje, a porowata Lawa symbolizuje odrodzenie i siłę ognia. Idealna, by stać twardo na ziemi, nie tracąc przy tym wewnętrznej pasji.',
      price: '99 zł',
      image: 'images/Agat_i_Lawa1.jpg',
      tags: ['Harmonia', 'Odrodzenie', 'Pasja']
    },
    labradoryt: {
      name: 'Labradoryt',
      subtitle: 'Kamień Gwiazd',
      desc: 'Samodzielny Labradoryt to biżuteria pełna tajemnic. Nazywany „świątynią gwiazd", pomaga odnaleźć drogę w momentach niepewności i chroni aurę przed utratą energii. Każdy kamień jest inny, tak jak Twoja unikalna historia.',
      price: '109 zł',
      image: 'images/Labradoryt_1.jpg',
      tags: ['Tajemnica', 'Ochrona', 'Intuicja']
    },
    labradoryt_agat: {
      name: 'Labradoryt i Agat',
      subtitle: 'Intuicja i Ugruntowanie',
      desc: 'Mistyczny Labradoryt z jego niebiesko-zielonymi błyskami to kamień wizjonerów, który rozbudza kreatywność. W połączeniu z solidnym Agatem, pozwala bezpiecznie stąpać po ziemi, jednocześnie nie przestając marzyć.',
      price: '119 zł',
      image: 'images/Labradoryt_i_Agat_1.jpg',
      tags: ['Kreatywność', 'Wizja', 'Stabilność']
    },
    lawa: {
      name: 'Lawa Wulkaniczna',
      subtitle: 'Surowa Siła Odrodzenia',
      desc: 'Ta bransoletka to czysta energia żywiołów zamknięta w porowatej strukturze kamienia. Lawa wulkaniczna powstaje z zastygłej magmy — łączy w sobie potęgę ognia i stabilność ziemi. Jest to kamień dla osób, które potrzebują solidnego fundamentu, a jednocześnie chcą spalić to, co stare, by zrobić miejsce na nowe.',
      price: '89 zł',
      image: 'images/Lawa_Wulkaniczna_1.jpg',
      tags: ['Ogień', 'Ziemia', 'Odrodzenie']
    },
    lawa_tygrysie: {
      name: 'Lawa i Tygrysie Oko',
      subtitle: 'Surowa Energia',
      desc: 'Połączenie żywiołów Ziemi i Ognia. Szorstka tekstura Lawy stabilizuje energię, a złociste Tygrysie Oko dodaje motywacji do działania. Bransoletka dla osób dynamicznych, które potrzebują codziennego zastrzyku pewności siebie.',
      price: '109 zł',
      image: 'images/Lawa_i_Tygrysie_Oko_1.jpg',
      tags: ['Pewność siebie', 'Motywacja', 'Żywioły']
    },
    lawa_malachit: {
      name: 'Lawa i Malachit',
      subtitle: 'Ogień i Natura',
      desc: 'Niesamowity kontrast czarnej, surowej Lawy i soczyście zielonego Malachitu. Lawa pomaga spalać negatywne emocje, a Malachit otwiera na transformację i nowe możliwości. To połączenie dla tych, którzy chcą odważnie iść przez życie.',
      price: '119 zł',
      image: 'images/Lawa_i_Malachit_1.jpg',
      tags: ['Transformacja', 'Odwaga', 'Nowe możliwości']
    },
    onyks_fasetowany: {
      name: 'Onyks Fasetowany',
      subtitle: 'Szlifowana Wytrwałość',
      desc: 'Klasyka w najbardziej luksusowym wydaniu. Onyks fasetowany dzięki swoim licznym ściankom odbija światło, symbolizując wielowymiarowość ludzkiego charakteru. To kamień dla liderów — wzmacnia autorytet i pomaga przejąć kontrolę nad własnym losem.',
      price: '99 zł',
      image: 'images/Onyks_Fasetowany_1.jpg',
      tags: ['Autorytet', 'Kontrola', 'Luksus']
    },
    onyks_matowy: {
      name: 'Onyks Matowy',
      subtitle: 'Głęboka Cisza i Wewnętrzna Moc',
      desc: 'Onyks w wersji matowej to kwintesencja surowej elegancji. Pozbawiony blasku, skupia całą swoją energię wewnątrz, emanując spokojem i niezachwianą pewnością siebie. To kamień dla tych, którzy nie potrzebują blichtru, by zaznaczyć swoją obecność — ich siła płynie z charakteru i autentyczności.',
      price: '95 zł',
      image: 'images/Onyks_Matowy_1.jpg',
      tags: ['Spokój', 'Pewność', 'Autentyczność']
    },
    onyks_krysztal: {
      name: 'Onyks i Kryształ Górski',
      subtitle: 'Jasność Umysłu',
      desc: 'Połączenie nocy i światła. Onyks buduje Twoją wewnętrzną dyscyplinę, podczas gdy Kryształ Górski działa jak wzmacniacz — oczyszcza umysł i potęguje energię innych kamieni. To duet dla osób poszukujących balansu i absolutnego skupienia.',
      price: '109 zł',
      image: 'images/Onyks_i_Krysztal_Gorski_1.jpg',
      tags: ['Dyscyplina', 'Oczyszczenie', 'Fokus']
    },
    onyks_agat_fioletowy: {
      name: 'Onyks & Agat Fioletowy',
      subtitle: 'Królewska Intuicja',
      desc: 'Biżuteria, która łączy w sobie ziemską siłę z energią ducha. Głęboka, migocząca czerń fasetowanego onyksu stanowi idealną ramę dla hipnotyzujących odcieni fioletowego agatu. To zestawienie dla osób, które szukają w życiu czegoś więcej — harmonii między logiką a intuicją.',
      price: '119 zł',
      image: 'images/Onyks_Fasetowan_2.jpg',
      tags: ['Harmonia', 'Logika', 'Intuicja']
    },
    onyks_jaspis: {
      name: 'Onyks & Jaspis Różowy',
      subtitle: 'Siła i Łagodność',
      desc: 'Bransoletka, która łączy w sobie siłę i zdecydowanie z empatią i wewnętrznym ciepłem. Głęboka, lśniąca czerń fasetowanego onyksu spotyka się tu z pudrowymi, ziemistymi odcieniami różowego jaspisu, tworząc duet pełen klasy i wdzięku.',
      price: '119 zł',
      image: 'images/Onyks_Fasetowan_i_Japis_rozowy_1.jpg',
      tags: ['Empatia', 'Ciepło', 'Klasa']
    },
    onyks_labradoryt: {
      name: 'Onyks & Labradoryt',
      subtitle: 'Mistyczna Noc',
      desc: 'Odkryj biżuterię, która skrywa w sobie tajemnicę. Połączenie głębokiej, aksamitnej czerni matowego onyksu z hipnotyzującym labradorytem to zestawienie dla osób o silnej intuicji, które cenią sobie dodatki nieoczywiste i pełne klasy. To bransoletka, która przyciąga spojrzenia nie blaskiem, lecz swoją głębią.',
      price: '129 zł',
      image: 'images/Onyks_Matow1_i_labradoryt_1.jpg',
      tags: ['Tajemnica', 'Głębia', 'Klasa']
    },
    onyks_malachit: {
      name: 'Onyks & Malachit',
      subtitle: 'Elegancka Transformacja',
      desc: 'Wyrafinowane połączenie głębokiego, czarnego onyksu z intensywnie zielonym malachitem. Onyks zapewnia wewnętrzną siłę i ochronę, a malachit otwiera na pozytywne zmiany i transformację. Bransoletka dla osób gotowych na nowy rozdział życia.',
      price: '119 zł',
      image: 'images/Onyks__Malachit.jpg',
      tags: ['Ochrona', 'Przemiana', 'Natura']
    },
    onyks_tygrysie: {
      name: 'Onyks & Tygrysie Oko',
      subtitle: 'Niezłomna Wola',
      desc: 'Potężne połączenie dwóch kamieni o silnej energii ochronnej. Czarny onyks daje fundament wewnętrznej siły, a złociste tygrysie oko dodaje odwagi i determinacji w dążeniu do celów. Bransoletka idealna dla osób stawiających czoła wyzwaniom.',
      price: '119 zł',
      image: 'images/ONYKS_i_T_O_1.jpg',
      tags: ['Siła', 'Odwaga', 'Determinacja']
    },
    onyks_piasek: {
      name: 'Onyks & Piasek Pustyni',
      subtitle: 'Złote Piaski',
      desc: 'Kontrast ciemnego onyksu i ciepłego, złocistego piaskowca pustyni tworzy bransoletkę o wyjątkowej harmonii kolorów. Piasek pustyni to sztuczny kamień o migotliwym połysku, który w zestawieniu z eleganckim onyksem prezentuje się luksusowo i nowocześnie.',
      price: '109 zł',
      image: 'images/Anyks__Piasek_Pustyni.jpg',
      tags: ['Ciepło', 'Elegancja', 'Światło']
    },
    kwarc_onyks: {
      name: 'Różowy Kwarc & Onyks',
      subtitle: 'Miłość i Ochrona',
      desc: 'Subtelne połączenie miłości i ochrony. Różowy kwarc pomaga odnaleźć równowagę emocji, spokój oraz harmonię serca. Onyks dodaje wewnętrznej siły i pewności siebie. Razem tworzą bransoletkę, która otula ciepłem i daje poczucie bezpieczeństwa.',
      price: '119 zł',
      image: 'images/Rozowy_Kwarc_i_Onyks_2.jpg',
      tags: ['Miłość', 'Równowaga', 'Serce']
    },
    onyks_tygrysie2: {
      name: 'Onyks & Tygrysie Oko II',
      subtitle: 'Złoty Wojownik',
      desc: 'Druga odsłona popularnego połączenia onyksu z tygrysim okiem. Ta wersja kładzie nacisk na złociste akcenty tygrysiego oka, które dodają bransoletce ciepłego blasku. Kamień ambicji i ochrony — dla osób, które wiedzą, czego chcą.',
      price: '115 zł',
      image: 'images/Onyks_i_Tygrysie_Oko.jpg',
      tags: ['Ochrona', 'Ambicja', 'Energia']
    },
    knait_kunzyt: {
      name: 'Kyanit i Kunzyt',
      subtitle: 'Spokój Serca',
      desc: 'Rzadkie i wyjątkowe połączenie dwóch szlachetnych minerałów. Kyanit o hipnotyzującym błękicie wspomaga komunikację i samoekspresję, a delikatny różowy Kunzyt — zwany kamieniem miłości — otwiera serce na bezwarunkowe uczucie. Bransoletka dla osób poszukujących harmonii duszy.',
      price: '249 zł',
      image: 'images/Kyanit_i_Kunzyt_1.jpg',
      tags: ['Komunikacja', 'Miłość', 'Dusza']
    },
    szmaragd: {
      name: 'Szmaragd',
      subtitle: 'Kamień Mądrości',
      desc: 'Jeden z najcenniejszych kamieni szlachetnych świata, znany od starożytności. Soczysta, głęboka zieleń szmaragdu symbolizuje wzrost, mądrość i odnowę. Kleopatra i Aleksander Wielki cenili go ponad złoto. Każdy szmaragd jest absolutnie unikalny. Bransoletka dla tych, którzy wybierają wyjątkowość.',
      price: '349 zł',
      image: 'images/Szmaragd_1.jpg',
      tags: ['Mądrość', 'Wzrost', 'Wyjątkowość']
    },
    szafir: {
      name: 'Szafir',
      subtitle: 'Szlachetny Błękit',
      desc: 'Symbol królewskiej lojalności, prawdy i mądrości od tysiącleci. Głęboki, niebiański błękit szafiru działa jak kotwica umysłu — pomaga zachować spokój w chwilach chaosu i wspiera jasność myślenia. Kamień przeznaczenia i ochrony. Dla tych, którzy wierzą w swoją drogę.',
      price: '399 zł',
      image: 'images/Szafir_1.jpg',
      tags: ['Mądrość', 'Lojalność', 'Jasność']
    }
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

  // --- Shop Filter ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      productCards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        if (show) {
          card.style.display = '';
          requestAnimationFrame(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; });
        } else {
          card.style.opacity = '0'; card.style.transform = 'translateY(20px)';
          setTimeout(() => { card.style.display = 'none'; }, 400);
        }
      });
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
  const cartShippingFill = document.getElementById('cart-shipping-fill');
  const cartShippingText = document.getElementById('cart-shipping-text');

  const FREE_SHIPPING_AT = 150;

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

    // Shipping progress bar
    const remaining = FREE_SHIPPING_AT - total;
    const progress = Math.min((total / FREE_SHIPPING_AT) * 100, 100);
    cartShippingFill.style.width = `${progress}%`;
    if (remaining > 0) {
      cartShippingText.textContent = `Brakuje ${remaining} zł do darmowej wysyłki`;
      cartShippingText.style.color = '';
    } else {
      cartShippingText.textContent = 'Masz darmową wysyłkę!';
      cartShippingText.style.color = 'var(--color-gold)';
    }
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
      cart.push({ key, name: p.name, price: parsePrice(p.price), image: p.image, personalisation, qty: 1 });
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
        modal.querySelector('.modal-image').src = p.image;
        modal.querySelector('.stone-name').textContent = p.name;
        modal.querySelector('.stone-subtitle').textContent = p.subtitle;
        modal.querySelector('.stone-desc').textContent = p.desc;
        modal.querySelector('.modal-price').textContent = p.price;
        modal.querySelector('.modal-add-btn').dataset.product = key;
        const propsContainer = modal.querySelector('.modal-properties');
        propsContainer.innerHTML = p.tags.map(t => `<span class="stone-prop-tag">${t}</span>`).join('');
        // Reset personalisation
        const personalisationInput = document.getElementById('modal-personalisation');
        if (personalisationInput) personalisationInput.value = '';
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
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

  checkoutForm.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(checkoutForm);
    customerData = Object.fromEntries(data.entries());
    if (!customerData.fullName || !customerData.email || !customerData.address || !customerData.city || !customerData.postal) return;
    showCheckoutPane('pane-payment');
    renderOrderReview();
    initPayPal();
  });

  const renderOrderReview = () => {
    const total = cartTotal();
    const freeShipping = total >= FREE_SHIPPING_AT;
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
      </div>
      <div class="order-review-total">
        <span>Łącznie${freeShipping ? ' (darmowa wysyłka)' : ''}</span>
        <strong>${total} zł</strong>
      </div>
    `;
  };

  const initPayPal = () => {
    const container = document.getElementById('paypal-button-container');
    container.innerHTML = '';

    // PayPal not yet configured — show setup instructions
    if (typeof paypal === 'undefined' || container.closest('[data-paypal-unconfigured]')) {
      container.innerHTML = `
        <div class="paypal-setup-msg">
          <p>Aby aktywować płatności PayPal, wykonaj dwa kroki:</p>
          <ol>
            <li>Utwórz konto na <a href="https://www.paypal.com/pl/business" target="_blank">paypal.com/pl/business</a></li>
            <li>Pobierz swój Client ID na <a href="https://developer.paypal.com" target="_blank">developer.paypal.com</a> i zastąp <code>YOUR_PAYPAL_CLIENT_ID</code> w tagu skryptu PayPal w pliku <code>index.html</code></li>
          </ol>
        </div>`;
      return;
    }

    paypal.Buttons({
      createOrder: (data, actions) => {
        const total = cartTotal();
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: total.toFixed(2),
              currency_code: 'PLN',
              breakdown: { item_total: { value: total.toFixed(2), currency_code: 'PLN' } }
            },
            items: cart.map(item => ({
              name: item.personalisation ? `${item.name} (dedyk.: ${item.personalisation.substring(0, 30)})` : item.name,
              unit_amount: { value: item.price.toFixed(2), currency_code: 'PLN' },
              quantity: String(item.qty)
            })),
            shipping: customerData ? {
              name: { full_name: customerData.fullName },
              address: {
                address_line_1: customerData.address,
                admin_area_2: customerData.city,
                postal_code: customerData.postal,
                country_code: 'PL'
              }
            } : undefined
          }]
        });
      },
      onApprove: (data, actions) => {
        return actions.order.capture().then(details => {
          cart = [];
          saveCart();
          renderCart();
          const givenName = details.payer.name.given_name;
          document.getElementById('checkout-success-msg').textContent =
            `Dziękujemy, ${givenName}! Potwierdzenie zamówienia zostanie wysłane na adres ${customerData.email}. Realizacja: 1–3 dni robocze.`;
          showCheckoutPane('pane-success');
        });
      },
      onError: () => {
        container.insertAdjacentHTML('beforeend', '<p class="paypal-error">Wystąpił błąd płatności. Spróbuj ponownie.</p>');
      },
      style: { layout: 'vertical', color: 'gold', shape: 'rect', label: 'pay' }
    }).render('#paypal-button-container');
  };

  document.getElementById('checkout-done-btn').addEventListener('click', closeCheckout);

  // ============================================
  // CONTACT FORM
  // ============================================
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(contactForm).entries());
      if (!data.name || !data.email || !data.message) { alert('Proszę wypełnić wszystkie wymagane pola.'); return; }
      const submitBtn = contactForm.querySelector('.form-submit');
      const orig = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span>Wysyłanie...</span>'; submitBtn.disabled = true;
      setTimeout(() => { submitBtn.innerHTML = '<span>✓ Wysłano!</span>'; contactForm.reset(); setTimeout(() => { submitBtn.innerHTML = orig; submitBtn.disabled = false; }, 2500); }, 1500);
    });
  }

  // ============================================
  // NEWSLETTER FORM
  // ============================================
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input');
      if (input.value.trim() && input.value.includes('@')) {
        const btn = newsletterForm.querySelector('button');
        btn.textContent = '✓ Zapisano!'; input.value = '';
        setTimeout(() => btn.textContent = 'Zapisz się', 2500);
      }
    });
  }

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
});
