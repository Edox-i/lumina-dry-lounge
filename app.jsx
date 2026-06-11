/* global React */
const { useState, useEffect, useRef } = React;

// ---------- Drink data ----------
const U = (id, w = 800) => `https://images.unsplash.com/photo-${id}?w=${w}&auto=format&fit=crop&q=80`;
window.U = U;

const DRINKS = [
// Reimagined Classics
{
  cat: "classics",
  name: "The Midnight Negroni",
  original: "After the Negroni",
  price: "42 PLN",
  notes: "Lyre's zero-proof gin, a note of wormwood, blood orange, cinchona bitters.",
  img: U("1514361892635-6b07e31e75f9")
},
{
  cat: "classics",
  name: "Velvet Old Fashioned",
  original: "After the Old Fashioned",
  price: "44 PLN",
  notes: "Seedlip Spice 94, roasted oak essence, smoked maple, cherry bark, single ice diamond.",
  img: U("1514362545857-3bc16c4c7d1b")
},
{
  cat: "classics",
  name: "Glass Martini",
  original: "After the Martini",
  price: "40 PLN",
  notes: "Crystal-clear distilled botanicals, dry vermouth alternative, olive brine mist.",
  img: U("1712025853693-d16e904d0662")
},
// Polish Botanicals
{
  cat: "botanical",
  name: "Baltic Sea Buckthorn Spritz",
  original: "Polish Botanical",
  price: "36 PLN",
  notes: "Tart sea buckthorn cordial, sparkling spring water, a light rosemary smoke finish.",
  img: U("1560512823-829485b8bf24")
},
{
  cat: "botanical",
  name: "Elderflower & Forest Pine",
  original: "Polish Botanical",
  price: "34 PLN",
  notes: "Elderflower cordial, pine-needle infusion, white grape, dry tonic.",
  img: U("1546171753-97d7676e4602")
},
{
  cat: "botanical",
  name: "Forest Berry & Bay",
  original: "Polish Botanical",
  price: "34 PLN",
  notes: "Wild forest-berry reduction, bay leaf tincture, sloe shrub, soda lengthener.",
  img: U("1536935338788-846bb9981813")
},
// Adaptogenic
{
  cat: "boosters",
  name: "Focus Sour",
  original: "Adaptogenic Booster",
  price: "38 PLN",
  notes: "Bright lemon, fresh ginger, guayusa leaf extract — a smooth, jitter-free lift.",
  img: U("1470337458703-46ad1756a187")
},
{
  cat: "boosters",
  name: "Lion's Mane Espresso",
  original: "Adaptogenic Booster",
  price: "38 PLN",
  notes: "Double espresso, Lion's Mane extract for focus, vanilla bean, oat foam, cocoa dust.",
  img: U("1610632380989-680fe40816c6")
},
{
  cat: "boosters",
  name: "Ashwagandha Sundown",
  original: "Adaptogenic Booster",
  price: "40 PLN",
  notes: "Ashwagandha syrup, L-Theanine, hibiscus, bergamot, soft tonic finish.",
  img: U("1547595628-c61a29f496f0")
}];


const CATS = [
{ id: "all", label: "All", num: "01" },
{ id: "classics", label: "Reimagined Classics", num: "02" },
{ id: "botanical", label: "Polish Botanicals", num: "03" },
{ id: "boosters", label: "Mood Boosters", num: "04" }];


// ---------- Drink glyphs ----------
const Coupe = () =>
<svg viewBox="0 0 80 100" fill="none" stroke="currentColor" strokeWidth="0.8">
    <path d="M14 22 Q 40 60, 66 22 Z" fill="rgba(232,185,106,0.18)" />
    <path d="M14 22 Q 40 60, 66 22" />
    <line x1="40" y1="60" x2="40" y2="88" />
    <line x1="28" y1="92" x2="52" y2="92" />
    <circle cx="56" cy="20" r="3" fill="currentColor" opacity="0.5" />
  </svg>;

const Rocks = () =>
<svg viewBox="0 0 80 100" fill="none" stroke="currentColor" strokeWidth="0.8">
    <path d="M22 24 L26 84 L54 84 L58 24 Z" fill="rgba(232,185,106,0.18)" />
    <path d="M22 24 L26 84 L54 84 L58 24 Z" />
    <rect x="32" y="40" width="16" height="16" stroke="currentColor" fill="none" opacity="0.6" />
    <line x1="22" y1="24" x2="58" y2="24" />
  </svg>;

const Highball = () =>
<svg viewBox="0 0 80 100" fill="none" stroke="currentColor" strokeWidth="0.8">
    <path d="M28 16 L30 88 L50 88 L52 16 Z" fill="rgba(232,185,106,0.18)" />
    <path d="M28 16 L30 88 L50 88 L52 16 Z" />
    <line x1="28" y1="16" x2="52" y2="16" />
    <circle cx="40" cy="36" r="1.5" fill="currentColor" opacity="0.6" />
    <circle cx="36" cy="50" r="1.5" fill="currentColor" opacity="0.6" />
    <circle cx="44" cy="62" r="1.5" fill="currentColor" opacity="0.6" />
  </svg>;

const GLYPHS = [Coupe, Rocks, Highball];

// ---------- Nav ----------
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "")}>
      <a href="#top" className="nav-mark">
        <span className="mark-glyph"></span>
        LUMINA
      </a>
      <div className="nav-links">
        <a href="#concept">Concept</a>
        <a href="#menu">Menu</a>
        <a href="#experience">Experience</a>
        <a href="#events">Events</a>
        <a href="#about">About</a>
      </div>
      <a href="#reservations" className="nav-cta">Reserve</a>
    </nav>);

}

// ---------- Hero ----------
function Hero({ variant, tagline }) {
  return (
    <section className="hero" data-variant={variant} id="top" data-screen-label="01 Hero">
      <div className="hero-stage">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        {Array.from({ length: 8 }).map((_, i) =>
        <div
          key={i}
          className="streak"
          style={{
            left: `${(i * 13 + 5) % 100}%`,
            height: `${40 + i * 17 % 80}px`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${5 + i % 4}s`
          }} />

        )}
        <div className="grain"></div>
        <div className="vignette"></div>
      </div>

      <div className="shell hero-content">
        <div className="hero-copy">
          <span className="eyebrow">Powiśle, Warsaw · Est. 2026 · Fully Alcohol-Free</span>
          <h1 className="display" style={{ fontSize: "clamp(52px, 7vw, 110px)", fontWeight: "300" }}>
            Spirits, <em>reimagined.</em><br />
            The night, lucid.
          </h1>
          <p className="lede">
            {tagline}
          </p>
          <div className="hero-cta-row">
            <a href="#reservations" className="btn btn-primary">
              Reserve a Table <span className="arrow">→</span>
            </a>
            <a href="#menu" className="btn btn-ghost">
              View the Menu
            </a>
          </div>
        </div>

        {variant !== "typographic" &&
        <div className="hero-visual">
            <div className="hero-photo">
              <img
                src={U("1551751299-1b51cab2694c", 1200)}
                alt="Signature mocktail at Lumina"
                loading="eager"
              />
              <div className="hero-photo-frame"></div>
              <div className="hero-photo-caption">
                <span className="cap-num">№ 01</span>
                <span className="cap-name">The Midnight Negroni</span>
              </div>
              {Array.from({ length: 5 }).map((_, i) =>
              <div
                key={i}
                className="floating-bubble"
                style={{
                  width: `${6 + i * 2}px`,
                  height: `${6 + i * 2}px`,
                  left: `${15 + i * 18}%`,
                  animationDelay: `${i * 0.8}s`,
                  animationDuration: `${5 + i % 3}s`
                }} />
              )}
            </div>
          </div>
        }
      </div>

      <div className="hero-strip">
        <div className="marquee-pair">
          <span>00 Proof</span>
          <span>·</span>
          <span>Powiśle · Wisła Riverbank · Warsaw</span>
        </div>
        <div className="scroll-hint">
          <span className="line"></span>
          <span>Scroll</span>
        </div>
      </div>
    </section>);

}

// ---------- Concept ----------
function Concept() {
  return (
    <section className="concept" id="concept" data-screen-label="02 Concept">
      <div className="shell">
        <div className="concept-grid">
          <div>
            <span className="eyebrow">— 02 / Concept</span>
            <h2 className="display">Every <em>ritual</em>,<br />none of the regret.</h2>
          </div>
          <div className="concept-body reveal">
            <p>
              Lumina is a high-end lounge built on a single, quiet refusal: that sophistication should
              ever require a hangover. We pour spirits the way they were meant to taste — without
              the spirit. The room is dim. The glass is heavy. The night is yours to remember.
            </p>
            <p>
              Twenty drinks, three philosophies — Reimagined Classics, Polish Botanicals, and
              Adaptogenic Mood Boosters — built on a focused larder of fresh juices, house syrups,
              and ingredients you can pronounce.
            </p>
            <div className="concept-stats">
              <div className="stat">
                <span className="num">00<sup style={{ fontSize: '.5em', color: 'var(--ink-mute)' }}>%</sup></span>
                <span className="lbl">Alcohol</span>
              </div>
              <div className="stat">
                <span className="num">20</span>
                <span className="lbl">Signature Drinks</span>
              </div>
              <div className="stat">
                <span className="num">48</span>
                <span className="lbl">Seats, by Reservation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

// ---------- Menu ----------
function Menu() {
  const [cat, setCat] = useState("all");
  const list = cat === "all" ? DRINKS : DRINKS.filter((d) => d.cat === cat);
  return (
    <section className="menu" id="menu" data-screen-label="03 Menu">
      <div className="shell">
        <div className="menu-header">
          <div>
            <span className="eyebrow">— 03 / The Menu</span>
            <h2 className="display">Nine to <em>start</em>.</h2>
          </div>
          <p className="lede">
            A small selection from our list of twenty. Each drink references a classic — then walks away from it.
          </p>
        </div>

        <div className="category-tabs">
          {CATS.map((c) =>
          <button
            key={c.id}
            className={"cat-tab" + (cat === c.id ? " active" : "")}
            onClick={() => setCat(c.id)}>
            
              <span className="num">{c.num}</span>
              {c.label}
            </button>
          )}
        </div>

        <div className="menu-grid">
          {list.map((d, i) => {
            const Glyph = GLYPHS[i % GLYPHS.length];
            return (
              <article key={d.name} className="drink-card">
                <div className="index">
                  <span>№ {String(i + 1).padStart(2, "0")}</span>
                  <span className="price">{d.price}</span>
                </div>
                <div className="drink-photo">
                  <img src={d.img} alt={d.name} loading="lazy" />
                </div>
                <h3>{d.name}</h3>
                <div className="original">{d.original}</div>
                <p className="ingredients">{d.notes}</p>
              </article>);

          })}
        </div>
      </div>
    </section>);

}

// ---------- Experience ----------
function Experience() {
  const tiles = [
  {
    n: "I",
    title: "The Mixology Performance",
    body: "Every drink is built at the bar in front of you — hand-carved crystal ice, smoke, mist, citrus oil, the weight of Riedel crystal in hand.",
    img: U("1543007630-9710e4a00a20")
  },
  {
    n: "II",
    title: "Atmosphere by Candlelight",
    body: "Velvet banquettes, Riedel crystal glassware, a curated low-volume soundtrack. No televisions, no interruptions.",
    img: U("1572116469696-31de0f17cc34")
  },
  {
    n: "III",
    title: "Snacks, not a Menu",
    body: "Polish craft cheeses, rosemary olives, spiced nuts, and crudités with beet hummus or mint yogurt dip. A focused larder that lets the drinks lead.",
    img: U("1505575967455-40e256f73376")
  },
  {
    n: "IV",
    title: "Drive Home, Clearly",
    body: "Every guest leaves the way they arrived — sharp, present, ready for tomorrow morning.",
    img: U("1493514789931-586cb221d7a7")
  }];

  return (
    <section className="experience" id="experience" data-screen-label="04 Experience">
      <div className="shell">
        <div className="exp-intro">
          <div>
            <span className="eyebrow">— 04 / The Experience</span>
            <h2 className="display">A lounge, not a <em>juice bar</em>.</h2>
          </div>
          <p className="reveal">
            We borrowed everything from the world of fine cocktails — the choreography, the glassware,
            the unhurried pace of a great bar — and removed only one thing.
          </p>
        </div>
        <div className="exp-tiles">
          {tiles.map((t) =>
          <div className="exp-tile" key={t.title}>
              <span className="num">{t.n}</span>
              <h3>{t.title}</h3>
              <p>{t.body}</p>
              <div className="exp-photo">
                <img src={t.img} alt={t.title} loading="lazy" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ---------- Events ----------
function Events() {
  return (
    <section className="events" id="events" data-screen-label="05 Events">
      <div className="shell">
        <div className="events-grid">
          <div className="events-visual">
            <img
              src={U("1414235077428-338989a2e8c0", 1000)}
              alt="Private dining at Lumina"
              loading="lazy"
            />
            <div className="events-visual-overlay">
              <span>Private dining · Lumina</span>
            </div>
          </div>
          <div className="events-copy">
            <span className="eyebrow">— 05 / Private Events</span>
            <h2 className="display">Buyouts, <em>tastings</em>, after-hours.</h2>
            <p>
              Half-room buyouts from twenty guests. Full-room takeovers up to seventy. Bespoke tasting
              flights designed with our head mixologist around your evening.
            </p>
            <ul className="events-list">
              <li>
                <span className="ev-num">A</span>
                <span className="ev-name">Tasting Flight, Reimagined</span>
                <span className="ev-cap">Up to 12</span>
              </li>
              <li>
                <span className="ev-num">B</span>
                <span className="ev-name">Half-Room Buyout</span>
                <span className="ev-cap">20 – 35</span>
              </li>
              <li>
                <span className="ev-num">C</span>
                <span className="ev-name">Full Lounge Takeover</span>
                <span className="ev-cap">Up to 70</span>
              </li>
              <li>
                <span className="ev-num">D</span>
                <span className="ev-name">After-Hours Brand Activation</span>
                <span className="ev-cap">By inquiry</span>
              </li>
            </ul>
            <a href="#reservations" className="btn btn-ghost">
              Inquire <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>);

}

// ---------- Reservations ----------
function Reservations() {
  const [sent, setSent] = useState(false);
  return (
    <section className="reservations" id="reservations" data-screen-label="06 Reservations">
      <div className="shell">
        <div className="res-wrap">
          <div className="res-info">
            <span className="eyebrow">— 06 / Reservations</span>
            <h2 className="display">Hold a <em>table</em>.</h2>
            <p>
              Walk-ins welcome at the bar. For seated tables and the lounge banquettes, we recommend
              booking ahead — especially Thursday through Saturday.
            </p>
            <div className="res-meta">
              <div>
                <span className="lbl">Hours</span>
                <span className="val">Tue – Sun · 17:00 – 01:00</span>
              </div>
              <div>
                <span className="lbl">Address</span>
                <span className="val">Wybrzeże Kościuszkowskie 43, Powiśle</span>
              </div>
              <div>
                <span className="lbl">Reservations</span>
                <span className="val">+48 22 000 0000</span>
              </div>
              <div>
                <span className="lbl">Email</span>
                <span className="val">hello@luminadrylounge.com</span>
              </div>
            </div>
          </div>
          <form className="res-form" onSubmit={(e) => {e.preventDefault();setSent(true);}}>
            <h3>Reserve</h3>
            <p className="sub">We'll confirm by email within the hour.</p>
            <div className="res-row">
              <div className="res-field">
                <label>First name</label>
                <input type="text" required defaultValue="" />
              </div>
              <div className="res-field">
                <label>Last name</label>
                <input type="text" required defaultValue="" />
              </div>
            </div>
            <div className="res-row">
              <div className="res-field">
                <label>Date</label>
                <input type="date" required />
              </div>
              <div className="res-field">
                <label>Time</label>
                <select defaultValue="19:00">
                  <option>17:00</option><option>17:30</option><option>18:00</option>
                  <option>18:30</option><option>19:00</option><option>19:30</option>
                  <option>20:00</option><option>20:30</option><option>21:00</option>
                  <option>21:30</option><option>22:00</option>
                </select>
              </div>
            </div>
            <div className="res-row">
              <div className="res-field">
                <label>Party</label>
                <select defaultValue="2">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => <option key={n}>{n}</option>)}
                </select>
              </div>
              <div className="res-field">
                <label>Email</label>
                <input type="email" required />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              {sent ? "Sent — see you soon" : "Request Table"} <span className="arrow">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>);

}

// ---------- About ----------
function About() {
  return (
    <section className="about" id="about" data-screen-label="07 About">
      <div className="shell">
        <div className="about-grid">
          <div>
            <span className="eyebrow">— 07 / Our Story</span>
            <h2 className="display">Why a <em>dry</em><br />lounge?</h2>
          </div>
          <div>
            <p>
              We grew up in Warsaw bars — the late nights, the rituals, the friendships built one
              drink at a time. We also grew up with the mornings after, the canceled plans, the
              quiet calculus of how much a great evening cost the next day.
            </p>
            <p>
              Lumina is what happens when you keep the first part and let go of the second.
              A room that takes the sober-curious seriously — not as a diet, but as a way of
              showing up for your own life.
            </p>
            <div className="about-pull">
              "We want a guest to leave Lumina the same way they walked in: themselves,
              only a little more so."
            </div>
            <p>
              Our head mixologist trained in Berlin and London. Our larder is sourced from Polish
              farms wherever the season allows. Our license is short and proud: zero proof, zero
              compromise.
            </p>
            <div className="about-signature">
              <span className="sig-line"></span>
              The Lumina Team
            </div>
          </div>
        </div>
      </div>
    </section>);

}

// ---------- Footer ----------
function Footer() {
  return (
    <footer className="footer" id="contact" data-screen-label="08 Contact">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="display">Lumina <em>Dry</em><br />Lounge.</h2>
            <p>A premium alcohol-free lounge in central Warsaw. Spirits, reimagined.</p>
          </div>
          <div>
            <h4>Visit</h4>
            <ul>
              <li>Wybrzeże Kościuszkowskie 43</li>
              <li>00-379 Warsaw · Powiśle</li>
              <li>Tue – Sun · 17:00 – 01:00</li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:hello@luminadrylounge.com">hello@luminadrylounge.com</a></li>
              <li>+48 22 000 0000</li>
              <li><a href="#events">Private Events</a></li>
              <li><a href="#reservations">Reservations</a></li>
            </ul>
          </div>
          <div>
            <h4>Newsletter</h4>
            <ul>
              <li>Quarterly menu drops, tasting nights, and the occasional after-hours invitation.</li>
            </ul>
            <form
              style={{ display: "flex", gap: 8, marginTop: 16, borderBottom: "1px solid var(--hair)" }}
              onSubmit={(e) => e.preventDefault()}>
              
              <input
                type="email"
                placeholder="you@email.com"
                style={{
                  flex: 1, background: "transparent", border: "none",
                  color: "var(--ink)", fontFamily: "var(--sans)",
                  fontSize: 13, padding: "8px 0", outline: "none"
                }} />
              
              <button type="submit" style={{
                background: "transparent", border: "none", color: "var(--accent)",
                fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".18em",
                textTransform: "uppercase", padding: "8px 0"
              }}>Join →</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Lumina Dry Lounge · Warsaw</span>
          <div className="socials">
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
            <a href="#">Press</a>
          </div>
        </div>
      </div>
    </footer>);

}

// ---------- Tweaks ----------
function LuminaTweaks({ state, setTweak }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Color palette">
        <TweakRadio
          value={state.palette}
          onChange={(v) => setTweak("palette", v)}
          options={[
          { value: "midnight", label: "Midnight" },
          { value: "forest", label: "Forest" },
          { value: "plum", label: "Plum" },
          { value: "ivory", label: "Ivory" }]
          } />
        
      </TweakSection>
      <TweakSection title="Type pairing">
        <TweakRadio
          value={state.type}
          onChange={(v) => setTweak("type", v)}
          options={[
          { value: "default", label: "Cormorant + Inter" },
          { value: "modern", label: "Fraunces + DM Sans" },
          { value: "grotesk", label: "Space Grotesk" }]
          } />
        
      </TweakSection>
      <TweakSection title="Hero treatment">
        <TweakRadio
          value={state.hero}
          onChange={(v) => setTweak("hero", v)}
          options={[
          { value: "atmospheric", label: "Atmospheric" },
          { value: "split", label: "Split" },
          { value: "typographic", label: "Typographic" }]
          } />
        
      </TweakSection>
      <TweakSection title="Motion">
        <TweakRadio
          value={state.motion}
          onChange={(v) => setTweak("motion", v)}
          options={[
          { value: "high", label: "High" },
          { value: "low", label: "Low" },
          { value: "off", label: "Off" }]
          } />
        
      </TweakSection>
      <TweakSection title="Tagline">
        <TweakSelect
          value={state.tagline}
          onChange={(v) => setTweak("tagline", v)}
          options={[
          { value: "Luxury without liability — a premium nightlife built around what's in the glass, not what isn't.", label: "Luxury without liability" },
          { value: "Spirits, reimagined. The night, lucid. The morning, yours.", label: "Spirits, reimagined" },
          { value: "Every ritual, none of the regret. A lounge for the sober-curious.", label: "Every ritual, none of the regret" },
          { value: "The third place, dry. Where Warsaw goes out — and remembers it.", label: "The third place, dry" }]
          } />
        
      </TweakSection>
    </TweaksPanel>);

}

// ---------- App ----------
function App() {
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "palette": "midnight",
    "type": "default",
    "hero": "atmospheric",
    "motion": "high",
    "tagline": "Luxury without liability — a premium nightlife built around what's in the glass, not what isn't."
  } /*EDITMODE-END*/;

  const [state, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply data attrs to <html>
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.palette = state.palette;
    root.dataset.type = state.type;
    root.dataset.motion = state.motion;
  }, [state.palette, state.type, state.motion]);

  // Reveal-on-scroll
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("in");
      });
    }, { threshold: 0.1 });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <Hero variant={state.hero} tagline={state.tagline} />
      <Concept />
      <Menu />
      <Experience />
      <Events />
      <Reservations />
      <About />
      <Footer />
      <LuminaTweaks state={state} setTweak={setTweak} />
    </>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);