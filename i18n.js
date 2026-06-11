/* Lumina Dry Lounge translations. Headings are segment arrays: plain strings render
   as-is, [bracketed] strings render as accented <em>, "\n" becomes a line break. */

window.LANGS = [
  { code: "en", label: "English", flag: "gb" },
  { code: "pl", label: "Polski", flag: "pl" },
  { code: "es", label: "Español", flag: "es" },
  { code: "de", label: "Deutsch", flag: "de" },
  { code: "fr", label: "Français", flag: "fr" }
];

window.I18N = {
  /* ---------------- ENGLISH ---------------- */
  en: {
    nav: { concept: "Concept", menu: "Menu", experience: "Experience", events: "Events", about: "About", reserve: "Reserve" },
    hero: {
      eyebrow: "Powiśle, Warsaw · Est. 2026 · Fully Alcohol-Free",
      h1: ["Spirits, ", ["reimagined."], "\nThe night, lucid."],
      taglines: {
        t1: "Luxury without liability: premium nightlife built around what's in the glass, not what isn't.",
        t2: "Spirits, reimagined. The night, lucid. The morning, yours.",
        t3: "Every ritual, none of the regret. A lounge for the sober-curious.",
        t4: "The third place, dry. Where Warsaw goes out, and remembers it."
      },
      reserveTable: "Reserve a Table", viewMenu: "View the Menu",
      proof: "00 Proof", marquee: "Powiśle · Wisła Riverbank · Warsaw", scroll: "Scroll"
    },
    concept: {
      eyebrow: "02 / Concept",
      h2: ["Every ", ["ritual"], ",\nnone of the regret."],
      p1: "Lumina is a high-end lounge built on a single, quiet refusal: that sophistication should ever require a hangover. We pour spirits the way they were meant to taste, just without the spirit. The room is dim. The glass is heavy. The night is yours to remember.",
      p2: "Twenty drinks, three philosophies: Reimagined Classics, Polish Botanicals, and Adaptogenic Mood Boosters, built on a focused larder of fresh juices, house syrups, and ingredients you can pronounce.",
      stats: { alcohol: "Alcohol", drinks: "Signature Drinks", seats: "Seats, by Reservation" }
    },
    menu: {
      eyebrow: "03 / The Menu",
      h2: ["Nine to ", ["start"], "."],
      lede: "A small selection from our list of twenty. Each drink references a classic, then walks away from it.",
      cats: { all: "All", classics: "Reimagined Classics", botanical: "Polish Botanicals", boosters: "Mood Boosters" },
      drinks: [
        { original: "After the Negroni", notes: "Lyre's zero-proof gin, a note of wormwood, blood orange, cinchona bitters." },
        { original: "After the Old Fashioned", notes: "Seedlip Spice 94, roasted oak essence, smoked maple, cherry bark, single ice diamond." },
        { original: "After the Martini", notes: "Crystal-clear distilled botanicals, dry vermouth alternative, olive brine mist." },
        { original: "Polish Botanical", notes: "Tart sea buckthorn cordial, sparkling spring water, a light rosemary smoke finish." },
        { original: "Polish Botanical", notes: "Elderflower cordial, pine-needle infusion, white grape, dry tonic." },
        { original: "Polish Botanical", notes: "Wild forest-berry reduction, bay leaf tincture, sloe shrub, soda lengthener." },
        { original: "Adaptogenic Booster", notes: "Bright lemon, fresh ginger, guayusa leaf extract for a smooth, jitter-free lift." },
        { original: "Adaptogenic Booster", notes: "Double espresso, Lion's Mane extract for focus, vanilla bean, oat foam, cocoa dust." },
        { original: "Adaptogenic Booster", notes: "Ashwagandha syrup, L-Theanine, hibiscus, bergamot, soft tonic finish." }
      ]
    },
    exp: {
      eyebrow: "04 / The Experience",
      h2: ["A lounge, not a ", ["juice bar"], "."],
      intro: "We borrowed everything from the world of fine cocktails: the choreography, the glassware, the unhurried pace of a great bar. We removed only one thing.",
      tiles: [
        { title: "The Mixology Performance", body: "Every drink is built at the bar in front of you: hand-carved crystal ice, smoke, mist, citrus oil, the weight of Riedel crystal in hand." },
        { title: "Atmosphere by Candlelight", body: "Velvet banquettes, Riedel crystal glassware, a curated low-volume soundtrack. No televisions, no interruptions." },
        { title: "Snacks, not a Menu", body: "Polish craft cheeses, rosemary olives, spiced nuts, and crudités with beet hummus or mint yogurt dip. A focused larder that lets the drinks lead." },
        { title: "Drive Home, Clearly", body: "Every guest leaves the way they arrived: sharp, present, ready for tomorrow morning." }
      ]
    },
    events: {
      eyebrow: "05 / Private Events",
      h2: ["Buyouts, ", ["tastings"], ", after-hours."],
      p: "Half-room buyouts from twenty guests. Full-room takeovers up to seventy. Bespoke tasting flights designed with our head mixologist around your evening.",
      list: [
        { name: "Tasting Flight, Reimagined", cap: "Up to 12" },
        { name: "Half-Room Buyout", cap: "20 - 35" },
        { name: "Full Lounge Takeover", cap: "Up to 70" },
        { name: "After-Hours Brand Activation", cap: "By inquiry" }
      ],
      inquire: "Inquire", overlay: "Private dining · Lumina"
    },
    res: {
      eyebrow: "06 / Reservations",
      h2: ["Hold a ", ["table"], "."],
      p: "Walk-ins welcome at the bar. For seated tables and the lounge banquettes, we recommend booking ahead, especially Thursday through Saturday.",
      meta: { hours: "Hours", hoursVal: "Tue - Sun · 17:00 - 01:00", address: "Address", reservations: "Reservations", email: "Email" },
      form: { title: "Reserve", sub: "We'll confirm by email within the hour.", first: "First name", last: "Last name", date: "Date", time: "Time", party: "Party", email: "Email", submit: "Request Table", sent: "Sent. See you soon" }
    },
    about: {
      eyebrow: "07 / Our Story",
      h2: ["Why a ", ["dry"], "\nlounge?"],
      p1: "We grew up in Warsaw bars: the late nights, the rituals, the friendships built one drink at a time. We also grew up with the mornings after, the canceled plans, the quiet calculus of how much a great evening cost the next day.",
      p2: "Lumina is what happens when you keep the first part and let go of the second. A room that takes the sober-curious seriously: not as a diet, but as a way of showing up for your own life.",
      pull: "\"We want a guest to leave Lumina the same way they walked in: themselves, only a little more so.\"",
      p3: "Our head mixologist trained in Berlin and London. Our larder is sourced from Polish farms wherever the season allows. Our license is short and proud: zero proof, zero compromise.",
      sig: "The Lumina Team"
    },
    footer: {
      brandP: "A premium alcohol-free lounge in central Warsaw. Spirits, reimagined.",
      visit: "Visit", hoursLine: "Tue - Sun · 17:00 - 01:00",
      contact: "Contact", privateEvents: "Private Events", reservations: "Reservations",
      newsletter: "Newsletter",
      newsText: "Quarterly menu drops, tasting nights, and the occasional after-hours invitation.",
      emailPh: "you@email.com", join: "Join",
      copyright: "© 2026 Lumina Dry Lounge · Warsaw", press: "Press"
    }
  },

  /* ---------------- POLSKI ---------------- */
  pl: {
    nav: { concept: "Koncept", menu: "Menu", experience: "Doświadczenie", events: "Eventy", about: "O nas", reserve: "Rezerwuj" },
    hero: {
      eyebrow: "Powiśle, Warszawa · Od 2026 · Całkowicie bezalkoholowo",
      h1: ["Koktajle, ", ["od nowa."], "\nNoc, klarowna."],
      taglines: {
        t1: "Luksus bez konsekwencji: nocne życie premium zbudowane wokół tego, co jest w kieliszku, a nie tego, czego w nim nie ma.",
        t2: "Koktajle, od nowa. Noc, klarowna. Poranek, Twój.",
        t3: "Każdy rytuał, zero żalu. Lounge dla sober-curious.",
        t4: "Trzecie miejsce, na trzeźwo. Tu Warszawa wychodzi wieczorem i to pamięta."
      },
      reserveTable: "Zarezerwuj stolik", viewMenu: "Zobacz menu",
      proof: "00 Proof", marquee: "Powiśle · Nad Wisłą · Warszawa", scroll: "Przewiń"
    },
    concept: {
      eyebrow: "02 / Koncept",
      h2: ["Każdy ", ["rytuał"], ",\nzero żalu."],
      p1: "Lumina to lounge z wyższej półki, zbudowany na jednej cichej odmowie: że wyrafinowanie miałoby kiedykolwiek wymagać kaca. Serwujemy koktajle takie, jakie powinny smakować, tylko bez alkoholu. Światło jest przyciemnione. Szkło jest ciężkie. Noc należy do Ciebie i ją zapamiętasz.",
      p2: "Dwadzieścia drinków, trzy filozofie: Klasyki na nowo, Polskie botaniki i Adaptogeny, oparte na spiżarni świeżych soków, domowych syropów i składników, które umiesz wymówić.",
      stats: { alcohol: "Alkoholu", drinks: "Autorskich drinków", seats: "Miejsc, na rezerwację" }
    },
    menu: {
      eyebrow: "03 / Menu",
      h2: ["Dziewięć na ", ["początek"], "."],
      lede: "Niewielki wybór z naszej listy dwudziestu. Każdy drink nawiązuje do klasyka, a potem idzie własną drogą.",
      cats: { all: "Wszystkie", classics: "Klasyki na nowo", botanical: "Polskie botaniki", boosters: "Adaptogeny" },
      drinks: [
        { original: "Inspirowane Negroni", notes: "Bezalkoholowy gin Lyre's, nuta piołunu, czerwona pomarańcza, bittery chinowe." },
        { original: "Inspirowane Old Fashioned", notes: "Seedlip Spice 94, esencja palonego dębu, wędzony klon, kora wiśni, jeden lodowy diament." },
        { original: "Inspirowane Martini", notes: "Krystalicznie czyste destylowane botaniki, alternatywa wytrawnego wermutu, mgiełka z solanki oliwkowej." },
        { original: "Polska botanika", notes: "Cierpki kordiał z rokitnika, musująca woda źródlana, lekki finisz dymnego rozmarynu." },
        { original: "Polska botanika", notes: "Kordiał z kwiatu bzu, napar z igieł sosny, białe winogrono, wytrawny tonik." },
        { original: "Polska botanika", notes: "Redukcja z leśnych jagód, tynktura z liścia laurowego, shrub z tarniny, dopełnione wodą sodową." },
        { original: "Adaptogenny booster", notes: "Świeża cytryna, imbir i ekstrakt z guayusy: gładki zastrzyk energii, bez drżenia." },
        { original: "Adaptogenny booster", notes: "Podwójne espresso, ekstrakt z soplówki dla skupienia, wanilia, owsiana pianka, pył kakaowy." },
        { original: "Adaptogenny booster", notes: "Syrop z ashwagandhy, L-teanina, hibiskus, bergamotka, delikatny finisz toniku." }
      ]
    },
    exp: {
      eyebrow: "04 / Doświadczenie",
      h2: ["Lounge, nie ", ["bar z sokami"], "."],
      intro: "Zapożyczyliśmy wszystko ze świata wielkich koktajli: choreografię, szkło, niespieszny rytm dobrego baru. Usunęliśmy tylko jedno.",
      tiles: [
        { title: "Pokaz miksologii", body: "Każdy drink powstaje przy barze na Twoich oczach: ręcznie ciosany lód, dym, mgiełka, olejek cytrusowy i ciężar kryształu Riedel w dłoni." },
        { title: "Atmosfera przy świecach", body: "Aksamitne loże, kryształowe szkło Riedel i starannie dobrana, cicha muzyka. Żadnych telewizorów, żadnych rozpraszaczy." },
        { title: "Przekąski, nie karta dań", body: "Polskie sery rzemieślnicze, oliwki z rozmarynem, korzenne orzechy i warzywa z hummusem z buraka lub jogurtem miętowym. Spiżarnia, która pozwala drinkom prowadzić." },
        { title: "Wracaj jasno", body: "Każdy gość wychodzi tak, jak przyszedł: przytomny, obecny, gotowy na jutrzejszy poranek." }
      ]
    },
    events: {
      eyebrow: "05 / Eventy prywatne",
      h2: ["Wynajmy, ", ["degustacje"], ", po godzinach."],
      p: "Wynajem połowy sali od dwudziestu gości. Cała sala do siedemdziesięciu. Autorskie degustacje projektowane z naszym głównym miksologiem wokół Twojego wieczoru.",
      list: [
        { name: "Degustacja, na nowo", cap: "Do 12" },
        { name: "Wynajem połowy sali", cap: "20 - 35" },
        { name: "Cała sala na wyłączność", cap: "Do 70" },
        { name: "Event marki po godzinach", cap: "Na zapytanie" }
      ],
      inquire: "Zapytaj", overlay: "Kolacje prywatne · Lumina"
    },
    res: {
      eyebrow: "06 / Rezerwacje",
      h2: ["Zarezerwuj ", ["stolik"], "."],
      p: "Przy barze bez rezerwacji. Na stoliki i loże polecamy rezerwację, szczególnie od czwartku do soboty.",
      meta: { hours: "Godziny", hoursVal: "Wt - Nd · 17:00 - 01:00", address: "Adres", reservations: "Rezerwacje", email: "E-mail" },
      form: { title: "Rezerwacja", sub: "Potwierdzimy e-mailem w ciągu godziny.", first: "Imię", last: "Nazwisko", date: "Data", time: "Godzina", party: "Osoby", email: "E-mail", submit: "Poproś o stolik", sent: "Wysłano. Do zobaczenia" }
    },
    about: {
      eyebrow: "07 / Nasza historia",
      h2: ["Dlaczego ", ["dry"], "\nlounge?"],
      p1: "Dorastaliśmy w warszawskich barach: późne noce, rytuały, przyjaźnie budowane drink po drinku. Dorastaliśmy też z porankami po, z odwołanymi planami i cichym liczeniem, ile świetny wieczór kosztował następnego dnia.",
      p2: "Lumina to to, co się dzieje, gdy zostawiasz pierwszą część i odpuszczasz drugą. Miejsce, które traktuje sober-curious poważnie: nie jako dietę, ale jako sposób bycia obecnym we własnym życiu.",
      pull: "\"Chcemy, żeby gość wychodził z Luminy taki, jaki przyszedł: sobą, tylko trochę bardziej.\"",
      p3: "Nasz główny miksolog szkolił się w Berlinie i Londynie. Spiżarnię zaopatrujemy w polskich gospodarstwach, kiedy tylko pozwala sezon. Nasza licencja jest krótka i dumna: zero procent, zero kompromisów.",
      sig: "Zespół Lumina"
    },
    footer: {
      brandP: "Bezalkoholowy lounge premium w centrum Warszawy. Koktajle, od nowa.",
      visit: "Odwiedź", hoursLine: "Wt - Nd · 17:00 - 01:00",
      contact: "Kontakt", privateEvents: "Eventy prywatne", reservations: "Rezerwacje",
      newsletter: "Newsletter",
      newsText: "Kwartalne nowości w menu, wieczory degustacyjne i od czasu do czasu zaproszenie po godzinach.",
      emailPh: "ty@email.com", join: "Dołącz",
      copyright: "© 2026 Lumina Dry Lounge · Warszawa", press: "Prasa"
    }
  },

  /* ---------------- ESPAÑOL ---------------- */
  es: {
    nav: { concept: "Concepto", menu: "Carta", experience: "Experiencia", events: "Eventos", about: "Nosotros", reserve: "Reservar" },
    hero: {
      eyebrow: "Powiśle, Varsovia · Desde 2026 · Totalmente sin alcohol",
      h1: ["Cócteles, ", ["reinventados."], "\nLa noche, lúcida."],
      taglines: {
        t1: "Lujo sin facturas pendientes: vida nocturna premium construida en torno a lo que hay en la copa, no a lo que falta.",
        t2: "Cócteles, reinventados. La noche, lúcida. La mañana, tuya.",
        t3: "Todo el ritual, ningún remordimiento. Un lounge para los sober-curious.",
        t4: "El tercer lugar, en seco. Donde Varsovia sale de noche y lo recuerda."
      },
      reserveTable: "Reservar mesa", viewMenu: "Ver la carta",
      proof: "00 Proof", marquee: "Powiśle · Orilla del Vístula · Varsovia", scroll: "Desliza"
    },
    concept: {
      eyebrow: "02 / Concepto",
      h2: ["Todo el ", ["ritual"], ",\nningún remordimiento."],
      p1: "Lumina es un lounge de alta gama construido sobre una única y silenciosa negativa: que la sofisticación exija resaca. Servimos los destilados como deberían saber, solo que sin el alcohol. La luz es tenue. El vaso pesa. La noche es tuya para recordarla.",
      p2: "Veinte bebidas, tres filosofías: Clásicos reinventados, Botánicos polacos y Potenciadores adaptógenos, sobre una despensa de zumos frescos, siropes caseros e ingredientes que puedes pronunciar.",
      stats: { alcohol: "Alcohol", drinks: "Bebidas de autor", seats: "Plazas, con reserva" }
    },
    menu: {
      eyebrow: "03 / La carta",
      h2: ["Nueve para ", ["empezar"], "."],
      lede: "Una pequeña selección de nuestra lista de veinte. Cada bebida cita a un clásico y luego se aleja de él.",
      cats: { all: "Todas", classics: "Clásicos reinventados", botanical: "Botánicos polacos", boosters: "Adaptógenos" },
      drinks: [
        { original: "Tras el Negroni", notes: "Ginebra sin alcohol Lyre's, una nota de ajenjo, naranja sanguina, bíteres de quina." },
        { original: "Tras el Old Fashioned", notes: "Seedlip Spice 94, esencia de roble tostado, arce ahumado, corteza de cereza, un diamante de hielo." },
        { original: "Tras el Martini", notes: "Botánicos destilados cristalinos, alternativa al vermut seco, bruma de salmuera de aceituna." },
        { original: "Botánico polaco", notes: "Cordial ácido de espino amarillo, agua de manantial con gas, un final ligero de romero ahumado." },
        { original: "Botánico polaco", notes: "Cordial de flor de saúco, infusión de agujas de pino, uva blanca, tónica seca." },
        { original: "Botánico polaco", notes: "Reducción de frutos del bosque, tintura de laurel, shrub de endrina, alargado con soda." },
        { original: "Potenciador adaptógeno", notes: "Limón fresco, jengibre y extracto de guayusa: un impulso suave, sin nervios." },
        { original: "Potenciador adaptógeno", notes: "Doble espresso, extracto de melena de león para el enfoque, vainilla, espuma de avena, polvo de cacao." },
        { original: "Potenciador adaptógeno", notes: "Sirope de ashwagandha, L-teanina, hibisco, bergamota, final suave de tónica." }
      ]
    },
    exp: {
      eyebrow: "04 / La experiencia",
      h2: ["Un lounge, no un ", ["bar de zumos"], "."],
      intro: "Tomamos prestado todo del mundo de la alta coctelería: la coreografía, la cristalería, el ritmo pausado de un gran bar. Solo quitamos una cosa.",
      tiles: [
        { title: "La mixología en vivo", body: "Cada bebida se prepara en la barra frente a ti: hielo tallado a mano, humo, bruma, aceite de cítricos y el peso del cristal Riedel en la mano." },
        { title: "Ambiente a la luz de las velas", body: "Banquetas de terciopelo, cristalería Riedel y una banda sonora cuidada a bajo volumen. Sin televisores, sin interrupciones." },
        { title: "Picoteo, no una carta", body: "Quesos artesanos polacos, aceitunas al romero, frutos secos especiados y crudités con hummus de remolacha o yogur a la menta. Una despensa que deja mandar a las bebidas." },
        { title: "Vuelve a casa, lúcido", body: "Cada invitado se va como llegó: despierto, presente, listo para mañana." }
      ]
    },
    events: {
      eyebrow: "05 / Eventos privados",
      h2: ["Eventos, ", ["catas"], ", after-hours."],
      p: "Reservas de media sala desde veinte invitados. Sala completa hasta setenta. Catas a medida diseñadas con nuestro mixólogo jefe en torno a tu velada.",
      list: [
        { name: "Cata, reinventada", cap: "Hasta 12" },
        { name: "Media sala", cap: "20 - 35" },
        { name: "Sala completa", cap: "Hasta 70" },
        { name: "Activación de marca after-hours", cap: "Bajo consulta" }
      ],
      inquire: "Consultar", overlay: "Cena privada · Lumina"
    },
    res: {
      eyebrow: "06 / Reservas",
      h2: ["Reserva una ", ["mesa"], "."],
      p: "Sin reserva en la barra. Para mesas y banquetas recomendamos reservar, sobre todo de jueves a sábado.",
      meta: { hours: "Horario", hoursVal: "Mar - Dom · 17:00 - 01:00", address: "Dirección", reservations: "Reservas", email: "Correo" },
      form: { title: "Reservar", sub: "Confirmaremos por correo en una hora.", first: "Nombre", last: "Apellidos", date: "Fecha", time: "Hora", party: "Personas", email: "Correo", submit: "Pedir mesa", sent: "Enviado. Hasta pronto" }
    },
    about: {
      eyebrow: "07 / Nuestra historia",
      h2: ["¿Por qué un ", ["lounge seco"], "?"],
      p1: "Crecimos en los bares de Varsovia: las noches largas, los rituales, las amistades construidas copa a copa. También crecimos con las mañanas siguientes, los planes cancelados y el cálculo silencioso de cuánto costó una gran noche al día siguiente.",
      p2: "Lumina es lo que pasa cuando te quedas con la primera parte y sueltas la segunda. Un lugar que se toma en serio lo sober-curious: no como una dieta, sino como una forma de estar presente en tu propia vida.",
      pull: "\"Queremos que cada invitado salga de Lumina igual que entró: siendo él mismo, solo un poco más.\"",
      p3: "Nuestro mixólogo jefe se formó en Berlín y Londres. Nuestra despensa viene de granjas polacas siempre que la temporada lo permite. Nuestra licencia es corta y orgullosa: cero grados, cero concesiones.",
      sig: "El equipo de Lumina"
    },
    footer: {
      brandP: "Un lounge premium sin alcohol en el centro de Varsovia. Cócteles, reinventados.",
      visit: "Visítanos", hoursLine: "Mar - Dom · 17:00 - 01:00",
      contact: "Contacto", privateEvents: "Eventos privados", reservations: "Reservas",
      newsletter: "Boletín",
      newsText: "Novedades de carta trimestrales, noches de cata y alguna invitación after-hours.",
      emailPh: "tu@email.com", join: "Únete",
      copyright: "© 2026 Lumina Dry Lounge · Varsovia", press: "Prensa"
    }
  },

  /* ---------------- DEUTSCH ---------------- */
  de: {
    nav: { concept: "Konzept", menu: "Karte", experience: "Erlebnis", events: "Events", about: "Über uns", reserve: "Reservieren" },
    hero: {
      eyebrow: "Powiśle, Warschau · Seit 2026 · Komplett alkoholfrei",
      h1: ["Cocktails, ", ["neu gedacht."], "\nDie Nacht, klar."],
      taglines: {
        t1: "Luxus ohne Reue: Premium-Nachtleben rund um das, was im Glas ist, nicht um das, was fehlt.",
        t2: "Cocktails, neu gedacht. Die Nacht, klar. Der Morgen, deiner.",
        t3: "Jedes Ritual, kein Bedauern. Eine Lounge für die Sober-Curious.",
        t4: "Der dritte Ort, trocken. Wo Warschau ausgeht und sich daran erinnert."
      },
      reserveTable: "Tisch reservieren", viewMenu: "Zur Karte",
      proof: "00 Proof", marquee: "Powiśle · Weichselufer · Warschau", scroll: "Scrollen"
    },
    concept: {
      eyebrow: "02 / Konzept",
      h2: ["Jedes ", ["Ritual"], ",\nkein Bedauern."],
      p1: "Lumina ist eine gehobene Lounge, gebaut auf einer einzigen, leisen Weigerung: dass Raffinesse je einen Kater verlangen sollte. Wir servieren Spirituosen so, wie sie schmecken sollten, nur ohne den Alkohol. Das Licht ist gedämpft. Das Glas ist schwer. Die Nacht gehört dir, und du wirst dich an sie erinnern.",
      p2: "Zwanzig Drinks, drei Philosophien: Neu gedachte Klassiker, Polnische Botanicals und adaptogene Mood Booster, auf Basis frischer Säfte, hausgemachter Sirupe und Zutaten, die man aussprechen kann.",
      stats: { alcohol: "Alkohol", drinks: "Signature Drinks", seats: "Plätze, mit Reservierung" }
    },
    menu: {
      eyebrow: "03 / Die Karte",
      h2: ["Neun zum ", ["Auftakt"], "."],
      lede: "Eine kleine Auswahl aus unserer Liste von zwanzig. Jeder Drink zitiert einen Klassiker und geht dann eigene Wege.",
      cats: { all: "Alle", classics: "Klassiker, neu gedacht", botanical: "Polnische Botanicals", boosters: "Mood Booster" },
      drinks: [
        { original: "Nach dem Negroni", notes: "Alkoholfreier Gin von Lyre's, eine Note Wermutkraut, Blutorange, Chinarinden-Bitter." },
        { original: "Nach dem Old Fashioned", notes: "Seedlip Spice 94, geröstete Eichenessenz, geräucherter Ahorn, Kirschrinde, ein Eisdiamant." },
        { original: "Nach dem Martini", notes: "Kristallklare destillierte Botanicals, Alternative zu trockenem Wermut, ein Hauch Olivenlake." },
        { original: "Polnisches Botanical", notes: "Herber Sanddorn-Cordial, sprudelndes Quellwasser, ein leichtes Finish aus Rosmarinrauch." },
        { original: "Polnisches Botanical", notes: "Holunderblüten-Cordial, Kiefernnadel-Aufguss, weiße Traube, trockenes Tonic." },
        { original: "Polnisches Botanical", notes: "Waldbeeren-Reduktion, Lorbeer-Tinktur, Schlehen-Shrub, mit Soda verlängert." },
        { original: "Adaptogener Booster", notes: "Frische Zitrone, Ingwer und Guayusa-Extrakt: ein sanfter Schub, ohne Zittern." },
        { original: "Adaptogener Booster", notes: "Doppelter Espresso, Lion's-Mane-Extrakt für den Fokus, Vanille, Haferschaum, Kakaostaub." },
        { original: "Adaptogener Booster", notes: "Ashwagandha-Sirup, L-Theanin, Hibiskus, Bergamotte, weiches Tonic-Finish." }
      ]
    },
    exp: {
      eyebrow: "04 / Das Erlebnis",
      h2: ["Eine Lounge, keine ", ["Saftbar"], "."],
      intro: "Wir haben uns alles aus der Welt großer Cocktails geliehen: die Choreografie, das Glas, das unaufgeregte Tempo einer guten Bar. Entfernt haben wir nur eines.",
      tiles: [
        { title: "Die Mixology-Show", body: "Jeder Drink entsteht an der Bar vor deinen Augen: handgeschnittenes Eis, Rauch, Nebel, Zitrusöl und das Gewicht von Riedel-Kristall in der Hand." },
        { title: "Atmosphäre bei Kerzenlicht", body: "Samtbänke, Riedel-Kristallglas und ein kuratierter, leiser Soundtrack. Keine Fernseher, keine Unterbrechungen." },
        { title: "Snacks, keine Speisekarte", body: "Polnischer Handwerkskäse, Rosmarin-Oliven, würzige Nüsse und Crudités mit Rote-Bete-Hummus oder Minzjoghurt. Eine Vorratskammer, die die Drinks führen lässt." },
        { title: "Klar nach Hause", body: "Jeder Gast geht so, wie er gekommen ist: wach, präsent, bereit für morgen früh." }
      ]
    },
    events: {
      eyebrow: "05 / Private Events",
      h2: ["Buyouts, ", ["Tastings"], ", After-Hours."],
      p: "Halbe Räume ab zwanzig Gästen. Komplette Übernahmen bis siebzig. Maßgeschneiderte Tasting-Flights, entworfen mit unserem Head-Mixologen rund um deinen Abend.",
      list: [
        { name: "Tasting Flight, neu gedacht", cap: "Bis 12" },
        { name: "Halber Raum", cap: "20 - 35" },
        { name: "Komplette Lounge", cap: "Bis 70" },
        { name: "After-Hours Brand-Event", cap: "Auf Anfrage" }
      ],
      inquire: "Anfragen", overlay: "Private Dining · Lumina"
    },
    res: {
      eyebrow: "06 / Reservierungen",
      h2: ["Tisch ", ["reservieren"], "."],
      p: "An der Bar ohne Reservierung. Für Tische und Logen empfehlen wir eine Buchung, besonders Donnerstag bis Samstag.",
      meta: { hours: "Zeiten", hoursVal: "Di - So · 17:00 - 01:00", address: "Adresse", reservations: "Reservierungen", email: "E-Mail" },
      form: { title: "Reservieren", sub: "Wir bestätigen innerhalb einer Stunde per E-Mail.", first: "Vorname", last: "Nachname", date: "Datum", time: "Uhrzeit", party: "Personen", email: "E-Mail", submit: "Tisch anfragen", sent: "Gesendet. Bis bald" }
    },
    about: {
      eyebrow: "07 / Unsere Geschichte",
      h2: ["Warum eine ", ["trockene"], "\nLounge?"],
      p1: "Wir sind in Warschauer Bars groß geworden: die langen Nächte, die Rituale, die Freundschaften, Drink für Drink. Und mit den Morgen danach, den abgesagten Plänen, der leisen Rechnung, was ein großartiger Abend am nächsten Tag kostet.",
      p2: "Lumina ist, was passiert, wenn man den ersten Teil behält und den zweiten loslässt. Ein Raum, der Sober-Curious ernst nimmt: nicht als Diät, sondern als Art, im eigenen Leben anwesend zu sein.",
      pull: "\"Ein Gast soll Lumina so verlassen, wie er gekommen ist: als er selbst, nur ein wenig mehr.\"",
      p3: "Unser Head-Mixologe hat in Berlin und London gelernt. Unsere Vorratskammer kommt von polnischen Höfen, wann immer die Saison es erlaubt. Unsere Lizenz ist kurz und stolz: null Prozent, null Kompromisse.",
      sig: "Das Lumina-Team"
    },
    footer: {
      brandP: "Eine alkoholfreie Premium-Lounge im Zentrum Warschaus. Cocktails, neu gedacht.",
      visit: "Besuch", hoursLine: "Di - So · 17:00 - 01:00",
      contact: "Kontakt", privateEvents: "Private Events", reservations: "Reservierungen",
      newsletter: "Newsletter",
      newsText: "Vierteljährliche Menü-Drops, Tasting-Abende und gelegentlich eine After-Hours-Einladung.",
      emailPh: "du@email.com", join: "Anmelden",
      copyright: "© 2026 Lumina Dry Lounge · Warschau", press: "Presse"
    }
  },

  /* ---------------- FRANÇAIS ---------------- */
  fr: {
    nav: { concept: "Concept", menu: "Carte", experience: "Expérience", events: "Événements", about: "À propos", reserve: "Réserver" },
    hero: {
      eyebrow: "Powiśle, Varsovie · Depuis 2026 · Entièrement sans alcool",
      h1: ["Les cocktails, ", ["réinventés."], "\nLa nuit, lucide."],
      taglines: {
        t1: "Le luxe sans l'addition du lendemain: une vie nocturne premium centrée sur ce qu'il y a dans le verre, pas sur ce qui manque.",
        t2: "Les cocktails, réinventés. La nuit, lucide. Le matin, à vous.",
        t3: "Tout le rituel, aucun regret. Un lounge pour les sober-curious.",
        t4: "Le troisième lieu, sans alcool. Là où Varsovie sort, et s'en souvient."
      },
      reserveTable: "Réserver une table", viewMenu: "Voir la carte",
      proof: "00 Proof", marquee: "Powiśle · Rives de la Vistule · Varsovie", scroll: "Défiler"
    },
    concept: {
      eyebrow: "02 / Concept",
      h2: ["Tout le ", ["rituel"], ",\naucun regret."],
      p1: "Lumina est un lounge haut de gamme bâti sur un seul refus, discret: que le raffinement exige une gueule de bois. Nous servons les spiritueux tels qu'ils devraient avoir du goût, simplement sans l'alcool. La lumière est tamisée. Le verre est lourd. La nuit est à vous, et vous vous en souviendrez.",
      p2: "Vingt boissons, trois philosophies: Classiques réinventés, Botaniques polonaises et Boosters adaptogènes, sur une base de jus frais, de sirops maison et d'ingrédients que l'on sait prononcer.",
      stats: { alcohol: "Alcool", drinks: "Créations signature", seats: "Places, sur réservation" }
    },
    menu: {
      eyebrow: "03 / La carte",
      h2: ["Neuf pour ", ["commencer"], "."],
      lede: "Une petite sélection de notre carte de vingt. Chaque boisson cite un classique, puis s'en éloigne.",
      cats: { all: "Tout", classics: "Classiques réinventés", botanical: "Botaniques polonaises", boosters: "Adaptogènes" },
      drinks: [
        { original: "Après le Negroni", notes: "Gin sans alcool Lyre's, une note d'absinthe, orange sanguine, bitters de quinquina." },
        { original: "Après l'Old Fashioned", notes: "Seedlip Spice 94, essence de chêne torréfié, érable fumé, écorce de cerisier, un diamant de glace." },
        { original: "Après le Martini", notes: "Botaniques distillées cristallines, alternative au vermouth sec, brume de saumure d'olive." },
        { original: "Botanique polonaise", notes: "Cordial acidulé d'argousier, eau de source pétillante, une fine note de romarin fumé." },
        { original: "Botanique polonaise", notes: "Cordial de fleur de sureau, infusion d'aiguilles de pin, raisin blanc, tonic sec." },
        { original: "Botanique polonaise", notes: "Réduction de baies des bois, teinture de laurier, shrub de prunelle, allongé au soda." },
        { original: "Booster adaptogène", notes: "Citron frais, gingembre et extrait de guayusa: un élan tout en douceur, sans nervosité." },
        { original: "Booster adaptogène", notes: "Double espresso, extrait de crinière de lion pour la concentration, vanille, mousse d'avoine, poudre de cacao." },
        { original: "Booster adaptogène", notes: "Sirop d'ashwagandha, L-théanine, hibiscus, bergamote, finale douce au tonic." }
      ]
    },
    exp: {
      eyebrow: "04 / L'expérience",
      h2: ["Un lounge, pas un ", ["bar à jus"], "."],
      intro: "Nous avons tout emprunté au monde des grands cocktails: la chorégraphie, la verrerie, le rythme posé d'un grand bar. Nous n'avons retiré qu'une seule chose.",
      tiles: [
        { title: "La mixologie en direct", body: "Chaque boisson est préparée au bar devant vous: glace taillée à la main, fumée, brume, huile d'agrumes et le poids du cristal Riedel en main." },
        { title: "Ambiance aux chandelles", body: "Banquettes de velours, cristal Riedel et une bande-son choisie, à bas volume. Pas de télévisions, pas d'interruptions." },
        { title: "Des en-cas, pas une carte", body: "Fromages artisanaux polonais, olives au romarin, noix épicées et crudités avec houmous de betterave ou yaourt à la menthe. Un garde-manger qui laisse les boissons mener." },
        { title: "Rentrez lucide", body: "Chaque invité repart comme il est arrivé: vif, présent, prêt pour demain matin." }
      ]
    },
    events: {
      eyebrow: "05 / Événements privés",
      h2: ["Privatisations, ", ["dégustations"], ", after."],
      p: "Privatisation de demi-salle dès vingt invités. Salle entière jusqu'à soixante-dix. Dégustations sur mesure conçues avec notre chef mixologue autour de votre soirée.",
      list: [
        { name: "Dégustation, réinventée", cap: "Jusqu'à 12" },
        { name: "Demi-salle", cap: "20 - 35" },
        { name: "Salle entière", cap: "Jusqu'à 70" },
        { name: "Activation de marque after", cap: "Sur demande" }
      ],
      inquire: "Demander", overlay: "Dîner privé · Lumina"
    },
    res: {
      eyebrow: "06 / Réservations",
      h2: ["Réservez une ", ["table"], "."],
      p: "Sans réservation au bar. Pour les tables et les banquettes, nous recommandons de réserver, surtout du jeudi au samedi.",
      meta: { hours: "Horaires", hoursVal: "Mar - Dim · 17:00 - 01:00", address: "Adresse", reservations: "Réservations", email: "E-mail" },
      form: { title: "Réserver", sub: "Confirmation par e-mail sous une heure.", first: "Prénom", last: "Nom", date: "Date", time: "Heure", party: "Convives", email: "E-mail", submit: "Demander une table", sent: "Envoyé. À bientôt" }
    },
    about: {
      eyebrow: "07 / Notre histoire",
      h2: ["Pourquoi un ", ["lounge sec"], "?"],
      p1: "Nous avons grandi dans les bars de Varsovie: les nuits longues, les rituels, les amitiés construites verre après verre. Et aussi avec les lendemains, les plans annulés, le calcul silencieux de ce qu'une grande soirée coûte le jour suivant.",
      p2: "Lumina, c'est ce qui arrive quand on garde la première partie et qu'on lâche la seconde. Un lieu qui prend le sober-curious au sérieux: pas comme un régime, mais comme une façon d'être présent à sa propre vie.",
      pull: "\"Nous voulons qu'un invité quitte Lumina comme il est entré: lui-même, juste un peu plus.\"",
      p3: "Notre chef mixologue s'est formé à Berlin et à Londres. Notre garde-manger vient de fermes polonaises dès que la saison le permet. Notre licence est courte et fière: zéro degré, zéro compromis.",
      sig: "L'équipe Lumina"
    },
    footer: {
      brandP: "Un lounge premium sans alcool au centre de Varsovie. Les cocktails, réinventés.",
      visit: "Visite", hoursLine: "Mar - Dim · 17:00 - 01:00",
      contact: "Contact", privateEvents: "Événements privés", reservations: "Réservations",
      newsletter: "Newsletter",
      newsText: "Nouveautés de carte trimestrielles, soirées dégustation et parfois une invitation after.",
      emailPh: "vous@email.com", join: "Rejoindre",
      copyright: "© 2026 Lumina Dry Lounge · Varsovie", press: "Presse"
    }
  }
};
