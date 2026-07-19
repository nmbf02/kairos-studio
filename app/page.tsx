import { MotionEffects } from "./motion-effects";
import { LiquidBackground } from "./liquid-background";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main className="horizontal-scroll" data-horizontal-scroll>
      <MotionEffects />
      <header className="nav-shell">
        <a className="brand" href="#inicio" aria-label="Kairós Studio, inicio">
          <span className="brand-mark">K</span>
          <span>Kairós Studio</span>
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#experiencia">Experiencia</a>
          <a href="#espacios">Espacios</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#coffee-box">Coffee Box</a>
        </nav>
        <a className="nav-cta" href="#contacto">Reservar <Arrow /></a>
      </header>

      <section className="hero liquid-section" id="inicio">
        <LiquidBackground />
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="hero-grain" />
        <div className="hero-content">
          <p className="eyebrow light"><span /> Santiago · República Dominicana</p>
          <h1>El momento<br />perfecto <em>para crear.</em></h1>
          <div className="hero-bottom">
            <p>Un punto de encuentro donde el café, el arte y la fotografía conviven para despertar nuevas ideas.</p>
            <a className="round-link" href="#espacios" aria-label="Explorar los espacios">↓</a>
          </div>
        </div>
        <div className="vertical-note">KAIRÓS · EL TIEMPO OPORTUNO</div>
      </section>

      <section className="intro liquid-section" id="experiencia">
        <LiquidBackground subtle />
        <div>
          <p className="eyebrow"><span /> La experiencia</p>
          <p className="section-number">01</p>
        </div>
        <div className="intro-copy">
          <h2>No es solo un lugar.<br />Es una <em>pausa con intención.</em></h2>
          <p>Kairós nace para quienes buscan algo más que una mesa: un ambiente que invita a conversar, concentrarse, imaginar y crear a su propio ritmo.</p>
          <div className="pill-row">
            <span>Café de especialidad</span><span>Arte local</span><span>Estudio creativo</span>
          </div>
        </div>
      </section>

      <section className="spaces liquid-section" id="espacios">
        <LiquidBackground subtle />
        <div className="spaces-heading">
          <div><p className="eyebrow light"><span /> Tres niveles, una experiencia</p><p className="section-number light-text">02</p></div>
          <h2>Cada planta,<br /><em>un nuevo ritmo.</em></h2>
        </div>
        <div className="space-grid">
          <article className="space-card cafe">
            <div className="card-art"><span>☕</span></div>
            <p>PLANTA 01</p><h3>Café & encuentro</h3>
            <span className="card-description">Sabores honestos, luz cálida y mesas para quedarse.</span>
          </article>
          <article className="space-card gallery">
            <div className="card-art"><span>◇</span></div>
            <p>PLANTA 02</p><h3>Galería & ideas</h3>
            <span className="card-description">Exhibiciones, talleres y conversaciones que conectan.</span>
          </article>
          <article className="space-card studio">
            <div className="card-art"><span>◉</span></div>
            <p>PLANTA 03</p><h3>Estudio & enfoque</h3>
            <span className="card-description">Un espacio flexible para producir, retratar y colaborar.</span>
          </article>
        </div>
      </section>

      <section className="about liquid-section" id="nosotros">
        <LiquidBackground subtle />
        <div className="arch-visual"><div className="sun" /><span>K</span></div>
        <div className="about-copy">
          <p className="eyebrow"><span /> Nuestra filosofía</p>
          <p className="section-number">03</p>
          <h2>Crear también es<br /><em>saber detenerse.</em></h2>
          <p>En griego, <strong>kairós</strong> es el instante adecuado: ese momento especial en el que algo importante sucede. Diseñamos cada rincón para ayudarte a encontrarlo.</p>
          <a className="text-link" href="#contacto">Conoce nuestra historia <Arrow /></a>
        </div>
      </section>

      <section className="coffee-teaser liquid-section" id="coffee-box">
        <LiquidBackground subtle />
        <div className="coffee-orbit orbit-one" />
        <div className="coffee-orbit orbit-two" />
        <div className="coffee-teaser-copy">
          <p className="eyebrow light"><span /> Una experiencia para llevar</p>
          <p className="section-number light-text">04</p>
          <h2>Kairós<br /><em>Coffee Box.</em></h2>
          <p>Una selección de café, detalles y pequeños rituales creados para convertir cualquier pausa en tu momento Kairós.</p>
          <a className="coffee-button" href="/coffee-box">Descubrir la Coffee Box <Arrow /></a>
        </div>
        <div className="coffee-box-art" aria-hidden="true">
          <div className="box-lid"><span>KAIRÓS</span><small>COFFEE BOX</small></div>
          <div className="box-shadow" />
          <span className="bean bean-a">●</span><span className="bean bean-b">●</span><span className="bean bean-c">●</span>
        </div>
        <p className="coffee-side-note">CAFÉ · DETALLES · MOMENTOS</p>
      </section>

      <section className="contact liquid-section" id="contacto">
        <LiquidBackground subtle />
        <p className="eyebrow light centered"><span /> Tu próximo momento empieza aquí <span /></p>
        <h2>Ven a vivir<br /><em>Kairós.</em></h2>
        <p className="contact-lead">Reserva el estudio, inscríbete en una experiencia o simplemente ven por un buen café.</p>
        <div className="contact-actions">
          <a className="primary-button" href="mailto:hola@kairosstudio.do">Escríbenos <Arrow /></a>
          <a className="secondary-button" href="#inicio">Ver ubicación</a>
        </div>
        <footer>
          <a className="brand footer-brand" href="#inicio"><span className="brand-mark">K</span><span>Kairós Studio</span></a>
          <div><p>Santiago, República Dominicana</p><p>Lun–Sáb · 8:00 AM–8:00 PM</p></div>
          <div><a href="#">Instagram</a><a href="#">TikTok</a><a href="mailto:hola@kairosstudio.do">Email</a></div>
          <span>© 2026 Kairós Studio</span>
        </footer>
      </section>
    </main>
  );
}
