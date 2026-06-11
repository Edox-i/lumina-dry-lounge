/* global React */
const { useState, useEffect, useRef } = React;

// ---------- Image helper ----------
const U = (id, w = 800) => `https://images.unsplash.com/photo-${id}?w=${w}&auto=format&fit=crop&q=80`;
window.U = U;

// ---------- Drink data (locale-independent) ----------
const DRINKS = [
{ cat: "classics", name: "The Midnight Negroni", price: "42 PLN", img: U("1514361892635-6b07e31e75f9") },
{ cat: "classics", name: "Velvet Old Fashioned", price: "44 PLN", img: U("1514362545857-3bc16c4c7d1b") },
{ cat: "classics", name: "Glass Martini", price: "40 PLN", img: U("1712025853693-d16e904d0662") },
{ cat: "botanical", name: "Baltic Sea Buckthorn Spritz", price: "36 PLN", img: U("1560512823-829485b8bf24") },
{ cat: "botanical", name: "Elderflower & Forest Pine", price: "34 PLN", img: U("1546171753-97d7676e4602") },
{ cat: "botanical", name: "Forest Berry & Bay", price: "34 PLN", img: U("1536935338788-846bb9981813") },
{ cat: "boosters", name: "Focus Sour", price: "38 PLN", img: U("1470337458703-46ad1756a187") },
{ cat: "boosters", name: "Lion's Mane Espresso", price: "38 PLN", img: U("1610632380989-680fe40816c6") },
{ cat: "boosters", name: "Ashwagandha Sundown", price: "40 PLN", img: U("1547595628-c61a29f496f0") }];

const CAT_IDS = ["all", "classics", "botanical", "boosters"];
const CAT_NUMS = { all: "01", classics: "02", botanical: "03", boosters: "04" };

const EXP_IMGS = [
U("1543007630-9710e4a00a20"),
U("1572116469696-31de0f17cc34"),
U("1505575967455-40e256f73376"),
U("1493514789931-586cb221d7a7")];

const EXP_NUMS = ["I", "II", "III", "IV"];

// ---------- Rich text renderer ----------
// Segments: "plain text" or ["accented text"]; "\n" becomes <br/>
function Rich({ segs }) {
  const out = [];
  segs.forEach((seg, i) => {
    const isEm = Array.isArray(seg);
    const text = isEm ? seg[0] : seg;
    const parts = text.split("\n");
    const nodes = [];
    parts.forEach((p, j) => {
      if (j > 0) nodes.push(<br key={"b" + i + "-" + j} />);
      nodes.push(p);
    });
    out.push(isEm ?
    <em key={i}>{nodes}</em> :
    <React.Fragment key={i}>{nodes}</React.Fragment>);
  });
  return <React.Fragment>{out}</React.Fragment>;
}

// ---------- Language switcher ----------
function LangSwitch({ locale, setLocale }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);
  const cur = window.LANGS.find((l) => l.code === locale) || window.LANGS[0];
  return (
    <div className="lang-switch" ref={ref}>
      <button
        type="button"
        className="lang-btn"
        aria-label="Change language"
        aria-expanded={open}
        onClick={() => setOpen(!open)}>
        <img src={`https://flagcdn.com/w40/${cur.flag}.png`} alt={cur.label} />
        <span>{cur.code.toUpperCase()}</span>
        <span className="chev">{open ? "▴" : "▾"}</span>
      </button>
      {open &&
      <div className="lang-menu">
          {window.LANGS.map((l) =>
        <button
          type="button"
          key={l.code}
          className={"lang-opt" + (l.code === locale ? " active" : "")}
          onClick={() => {setLocale(l.code);setOpen(false);}}>
            <img src={`https://flagcdn.com/w40/${l.flag}.png`} alt="" />
            <span>{l.label}</span>
          </button>
        )}
        </div>
      }
    </div>);
}

// ---------- Nav ----------
function Nav({ L, locale, setLocale }) {
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
        <a href="#concept">{L.nav.concept}</a>
        <a href="#menu">{L.nav.menu}</a>
        <a href="#experience">{L.nav.experience}</a>
        <a href="#events">{L.nav.events}</a>
        <a href="#about">{L.nav.about}</a>
      </div>
      <div className="nav-right">
        <LangSwitch locale={locale} setLocale={setLocale} />
        <a href="#reservations" className="nav-cta">{L.nav.reserve}</a>
      </div>
    </nav>);
}

// ---------- Hero ----------
function Hero({ L, variant, taglineKey }) {
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
          <span className="eyebrow">{L.hero.eyebrow}</span>
          <h1 className="display" style={{ fontSize: "clamp(52px, 7vw, 110px)", fontWeight: "300" }}>
            <Rich segs={L.hero.h1} />
          </h1>
          <p className="lede">
            {L.hero.taglines[taglineKey] || L.hero.taglines.t1}
          </p>
          <div className="hero-cta-row">
            <a href="#reservations" className="btn btn-primary">
              {L.hero.reserveTable} <span className="arrow">→</span>
            </a>
            <a href="#menu" className="btn btn-ghost">
              {L.hero.viewMenu}
            </a>
          </div>
        </div>

        {variant !== "typographic" &&
        <div className="hero-visual">
            <div className="hero-photo">
              <img
              src={U("1551751299-1b51cab2694c", 1200)}
              alt="Signature mocktail at Lumina"
              loading="eager" />
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
          <span>{L.hero.proof}</span>
          <span>·</span>
          <span>{L.hero.marquee}</span>
        </div>
        <div className="scroll-hint">
          <span className="line"></span>
          <span>{L.hero.scroll}</span>
        </div>
      </div>
    </section>);
}

// ---------- Concept ----------
function Concept({ L }) {
  return (
    <section className="concept" id="concept" data-screen-label="02 Concept">
      <div className="shell">
        <div className="concept-grid">
          <div>
            <span className="eyebrow">{L.concept.eyebrow}</span>
            <h2 className="display"><Rich segs={L.concept.h2} /></h2>
          </div>
          <div className="concept-body reveal">
            <p>{L.concept.p1}</p>
            <p>{L.concept.p2}</p>
            <div className="concept-stats">
              <div className="stat">
                <span className="num">00<sup style={{ fontSize: ".5em", color: "var(--ink-mute)" }}>%</sup></span>
                <span className="lbl">{L.concept.stats.alcohol}</span>
              </div>
              <div className="stat">
                <span className="num">20</span>
                <span className="lbl">{L.concept.stats.drinks}</span>
              </div>
              <div className="stat">
                <span className="num">48</span>
                <span className="lbl">{L.concept.stats.seats}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
}

// ---------- Menu ----------
function Menu({ L }) {
  const [cat, setCat] = useState("all");
  const withT = DRINKS.map((d, i) => ({ ...d, ...L.menu.drinks[i] }));
  const list = cat === "all" ? withT : withT.filter((d) => d.cat === cat);
  return (
    <section className="menu" id="menu" data-screen-label="03 Menu">
      <div className="shell">
        <div className="menu-header">
          <div>
            <span className="eyebrow">{L.menu.eyebrow}</span>
            <h2 className="display"><Rich segs={L.menu.h2} /></h2>
          </div>
          <p className="lede">{L.menu.lede}</p>
        </div>

        <div className="category-tabs">
          {CAT_IDS.map((id) =>
          <button
            key={id}
            className={"cat-tab" + (cat === id ? " active" : "")}
            onClick={() => setCat(id)}>
              <span className="num">{CAT_NUMS[id]}</span>
              {L.menu.cats[id]}
            </button>
          )}
        </div>

        <div className="menu-grid">
          {list.map((d, i) =>
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
            </article>
          )}
        </div>
      </div>
    </section>);
}

// ---------- Experience ----------
function Experience({ L }) {
  return (
    <section className="experience" id="experience" data-screen-label="04 Experience">
      <div className="shell">
        <div className="exp-intro">
          <div>
            <span className="eyebrow">{L.exp.eyebrow}</span>
            <h2 className="display"><Rich segs={L.exp.h2} /></h2>
          </div>
          <p className="reveal">{L.exp.intro}</p>
        </div>
        <div className="exp-tiles">
          {L.exp.tiles.map((t, i) =>
          <div className="exp-tile" key={i}>
              <span className="num">{EXP_NUMS[i]}</span>
              <h3>{t.title}</h3>
              <p>{t.body}</p>
              <div className="exp-photo">
                <img src={EXP_IMGS[i]} alt={t.title} loading="lazy" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);
}

// ---------- Events ----------
function Events({ L }) {
  return (
    <section className="events" id="events" data-screen-label="05 Events">
      <div className="shell">
        <div className="events-grid">
          <div className="events-visual">
            <img
              src={U("1414235077428-338989a2e8c0", 1000)}
              alt="Private dining at Lumina"
              loading="lazy" />
            <div className="events-visual-overlay">
              <span>{L.events.overlay}</span>
            </div>
          </div>
          <div className="events-copy">
            <span className="eyebrow">{L.events.eyebrow}</span>
            <h2 className="display"><Rich segs={L.events.h2} /></h2>
            <p>{L.events.p}</p>
            <ul className="events-list">
              {L.events.list.map((ev, i) =>
              <li key={i}>
                  <span className="ev-num">{["A", "B", "C", "D"][i]}</span>
                  <span className="ev-name">{ev.name}</span>
                  <span className="ev-cap">{ev.cap}</span>
                </li>
              )}
            </ul>
            <a href="#reservations" className="btn btn-ghost">
              {L.events.inquire} <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>);
}

// ---------- Reservations ----------
function Reservations({ L }) {
  const [sent, setSent] = useState(false);
  return (
    <section className="reservations" id="reservations" data-screen-label="06 Reservations">
      <div className="shell">
        <div className="res-wrap">
          <div className="res-info">
            <span className="eyebrow">{L.res.eyebrow}</span>
            <h2 className="display"><Rich segs={L.res.h2} /></h2>
            <p>{L.res.p}</p>
            <div className="res-meta">
              <div>
                <span className="lbl">{L.res.meta.hours}</span>
                <span className="val">{L.res.meta.hoursVal}</span>
              </div>
              <div>
                <span className="lbl">{L.res.meta.address}</span>
                <span className="val">Wybrzeże Kościuszkowskie 43, Powiśle</span>
              </div>
              <div>
                <span className="lbl">{L.res.meta.reservations}</span>
                <span className="val">+48 22 000 0000</span>
              </div>
              <div>
                <span className="lbl">{L.res.meta.email}</span>
                <span className="val">hello@luminadrylounge.com</span>
              </div>
            </div>
          </div>
          <form className="res-form" onSubmit={(e) => {e.preventDefault();setSent(true);}}>
            <h3>{L.res.form.title}</h3>
            <p className="sub">{L.res.form.sub}</p>
            <div className="res-row">
              <div className="res-field">
                <label>{L.res.form.first}</label>
                <input type="text" required defaultValue="" />
              </div>
              <div className="res-field">
                <label>{L.res.form.last}</label>
                <input type="text" required defaultValue="" />
              </div>
            </div>
            <div className="res-row">
              <div className="res-field">
                <label>{L.res.form.date}</label>
                <input type="date" required />
              </div>
              <div className="res-field">
                <label>{L.res.form.time}</label>
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
                <label>{L.res.form.party}</label>
                <select defaultValue="2">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => <option key={n}>{n}</option>)}
                </select>
              </div>
              <div className="res-field">
                <label>{L.res.form.email}</label>
                <input type="email" required />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              {sent ? L.res.form.sent : L.res.form.submit} <span className="arrow">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>);
}

// ---------- About ----------
function About({ L }) {
  return (
    <section className="about" id="about" data-screen-label="07 About">
      <div className="shell">
        <div className="about-grid">
          <div>
            <span className="eyebrow">{L.about.eyebrow}</span>
            <h2 className="display"><Rich segs={L.about.h2} /></h2>
          </div>
          <div>
            <p>{L.about.p1}</p>
            <p>{L.about.p2}</p>
            <div className="about-pull">{L.about.pull}</div>
            <p>{L.about.p3}</p>
            <div className="about-signature">
              <span className="sig-line"></span>
              {L.about.sig}
            </div>
          </div>
        </div>
      </div>
    </section>);
}

// ---------- Footer ----------
function Footer({ L }) {
  return (
    <footer className="footer" id="contact" data-screen-label="08 Contact">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="display">Lumina <em>Dry</em><br />Lounge.</h2>
            <p>{L.footer.brandP}</p>
          </div>
          <div>
            <h4>{L.footer.visit}</h4>
            <ul>
              <li>Wybrzeże Kościuszkowskie 43</li>
              <li>00-379 Warsaw · Powiśle</li>
              <li>{L.footer.hoursLine}</li>
            </ul>
          </div>
          <div>
            <h4>{L.footer.contact}</h4>
            <ul>
              <li><a href="mailto:hello@luminadrylounge.com">hello@luminadrylounge.com</a></li>
              <li>+48 22 000 0000</li>
              <li><a href="#events">{L.footer.privateEvents}</a></li>
              <li><a href="#reservations">{L.footer.reservations}</a></li>
            </ul>
          </div>
          <div>
            <h4>{L.footer.newsletter}</h4>
            <ul>
              <li>{L.footer.newsText}</li>
            </ul>
            <form
              style={{ display: "flex", gap: 8, marginTop: 16, borderBottom: "1px solid var(--hair)" }}
              onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={L.footer.emailPh}
                style={{
                  flex: 1, background: "transparent", border: "none",
                  color: "var(--ink)", fontFamily: "var(--sans)",
                  fontSize: 13, padding: "8px 0", outline: "none"
                }} />
              <button type="submit" style={{
                background: "transparent", border: "none", color: "var(--accent)",
                fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".18em",
                textTransform: "uppercase", padding: "8px 0"
              }}>{L.footer.join} →</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{L.footer.copyright}</span>
          <div className="socials">
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
            <a href="#">{L.footer.press}</a>
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
          { value: "t1", label: "Luxury without liability" },
          { value: "t2", label: "Spirits, reimagined" },
          { value: "t3", label: "Every ritual, none of the regret" },
          { value: "t4", label: "The third place, dry" }]
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
    "tagline": "t1"
  } /*EDITMODE-END*/;

  const [state, setTweak] = useTweaks(TWEAK_DEFAULTS);

  const [locale, setLocaleState] = useState(() => {
    try {
      const saved = localStorage.getItem("lumina-locale");
      if (saved && window.I18N[saved]) return saved;
    } catch (e) {}
    return "en";
  });
  const setLocale = (code) => {
    setLocaleState(code);
    try { localStorage.setItem("lumina-locale", code); } catch (e) {}
  };
  const L = window.I18N[locale] || window.I18N.en;

  // Migrate legacy tagline values (full sentences) to keys
  const rawTagline = state.tagline || "t1";
  const taglineKey = ["t1", "t2", "t3", "t4"].includes(rawTagline) ?
  rawTagline :
  rawTagline.startsWith("Spirits") ? "t2" :
  rawTagline.startsWith("Every") ? "t3" :
  rawTagline.startsWith("The third") ? "t4" : "t1";

  // Apply data attrs + lang to <html>
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.palette = state.palette;
    root.dataset.type = state.type;
    root.dataset.motion = state.motion;
  }, [state.palette, state.type, state.motion]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

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
    <React.Fragment>
      <Nav L={L} locale={locale} setLocale={setLocale} />
      <Hero L={L} variant={state.hero} taglineKey={taglineKey} />
      <Concept L={L} />
      <Menu L={L} />
      <Experience L={L} />
      <Events L={L} />
      <Reservations L={L} />
      <About L={L} />
      <Footer L={L} />
      <LuminaTweaks state={state} setTweak={setTweak} />
    </React.Fragment>);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
