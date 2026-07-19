"use client";

import { useEffect, useRef, useState } from "react";
import { LiquidCursor } from "../liquid-cursor";
import { LiquidBackground } from "../liquid-background";

const boxes = [
  { name: "Pausa", type: "Esencial", price: "RD$ 1,250", tone: "terracotta", description: "Para regalarte una pausa cotidiana con intención.", items: ["Café de origen · 250 g", "Galletas artesanales", "Tarjeta de ritual"] },
  { name: "Encuentro", type: "Favorita", price: "RD$ 2,450", tone: "olive", description: "Una experiencia diseñada para compartir entre dos.", items: ["Dos cafés de origen · 250 g", "Dulces artesanales", "Dos tazas Kairós", "Tarjeta personalizada"] },
  { name: "Celebración", type: "Especial", price: "RD$ 3,850", tone: "cream", description: "Una selección completa para celebrar un gran momento.", items: ["Café reserva · 340 g", "Selección dulce y salada", "Taza de colección", "Vela aromática", "Mensaje personalizado"] },
  { name: "Personalizada", type: "A tu gusto", price: "Desde RD$ 1,000", tone: "custom", description: "Combina tus favoritos y crea una caja única.", items: [] },
];

export function CoffeeBoxExperience() {
  const scroller = useRef<HTMLElement>(null);
  const [active, setActive] = useState(1);
  const [section, setSection] = useState(0);
  const [coffee, setCoffee] = useState("Café clásico · 250 g");
  const [snack, setSnack] = useState("Galletas artesanales");
  const [detail, setDetail] = useState("Tarjeta personalizada");
  const [message, setMessage] = useState("");
  const [celebrationStyle, setCelebrationStyle] = useState<"classic" | "creative">("classic");

  useEffect(() => {
    const node = scroller.current;
    if (!node) return;
    let transitionLocked = false;
    const wheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      event.preventDefault();
      if (transitionLocked || Math.abs(event.deltaY) < 12) return;
      const current = Math.round(node.scrollLeft / node.clientWidth);
      const next = Math.max(0, Math.min(3, current + (event.deltaY > 0 ? 1 : -1)));
      if (next === current) return;
      transitionLocked = true;
      node.scrollTo({ left: next * node.clientWidth, behavior: "smooth" });
      window.setTimeout(() => { transitionLocked = false; }, 900);
    };
    const update = () => setSection(Math.round(node.scrollLeft / node.clientWidth));
    node.addEventListener("wheel", wheel, { passive: false });
    node.addEventListener("scroll", update, { passive: true });
    return () => { node.removeEventListener("wheel", wheel); node.removeEventListener("scroll", update); };
  }, []);

  const go = (index: number) => scroller.current?.scrollTo({ left: window.innerWidth * index, behavior: "smooth" });
  const selected = boxes[active];
  const celebrationItems = celebrationStyle === "creative" ? ["Café de origen · 250 g", "Lienzo preparado para pintar", "Set de pinturas acrílicas", "Pinceles y paleta", "Selección de bocadillos", "Tarjeta personalizada"] : selected.items;
  const selectedPrice = active === 2 && celebrationStyle === "creative" ? "RD$ 4,650" : selected.price;
  const customPrice = 1000 + (coffee.includes("Reserva") ? 450 : coffee.includes("Dos") ? 600 : 0) + (snack.includes("Mixta") ? 350 : snack.includes("Chocolate") ? 250 : 0) + (detail.includes("Taza") ? 650 : detail.includes("Vela") ? 450 : 0);
  const orderText = active === 3 ? `Quiero una Kairós Coffee Box personalizada. Café: ${coffee}. Acompañamiento: ${snack}. Detalle: ${detail}. Mensaje: ${message || "Sin mensaje"}. Total estimado: RD$ ${customPrice.toLocaleString("es-DO")}.` : active === 2 ? `Quiero ordenar la Kairós Coffee Box Celebración ${celebrationStyle === "creative" ? "Creativa (pintura y arte)" : "Clásica"}` : `Quiero ordenar la Kairós Coffee Box ${selected.name}`;
  const subject = encodeURIComponent(orderText);

  return (
    <main className="cbx-shell" ref={scroller}>
      <LiquidCursor />
      <header className="cbx-nav">
        <a className="cbx-brand" href="/"><span>K</span><div><strong>Kairós</strong><small>COFFEE BOX</small></div></a>
        <nav>{["Inicio", "La experiencia", "Colección", "Ordenar"].map((label, index) => <button key={label} className={section === index ? "active" : ""} onClick={() => go(index)}>{label}</button>)}</nav>
        <a className="cbx-studio" href="/">Kairós Studio ↗</a>
      </header>

      <section className="cbx-panel cbx-hero liquid-section">
        <LiquidBackground subtle />
        <div className="cbx-noise" />
        <div className="cbx-hero-copy">
          <p className="cbx-kicker"><span /> El ritual llega a ti</p>
          <h1>Tu momento.<br /><em>En una caja.</em></h1>
          <p>Una experiencia sensorial creada para transformar el café de cada día en una pausa que vale la pena recordar.</p>
          <button className="cbx-primary" onClick={() => go(1)}>Descubrir la experiencia <span>→</span></button>
        </div>
        <div className="cbx-stage">
          <div className="cbx-ring ring-a" /><div className="cbx-ring ring-b" />
          <div className="cbx-hero-box"><span className="cbx-seal">K</span><strong>KAIRÓS</strong><small>COFFEE BOX · SANTIAGO</small><i>El momento oportuno</i></div>
          <span className="cbx-chip chip-a">CAFÉ</span><span className="cbx-chip chip-b">PAUSA</span><span className="cbx-chip chip-c">RITUAL</span>
        </div>
        <div className="cbx-scroll-note">DESLIZA PARA EXPLORAR <span>→</span></div>
      </section>

      <section className="cbx-panel cbx-story liquid-section">
        <LiquidBackground subtle />
        <div className="cbx-story-title"><p className="cbx-kicker"><span /> 01 · La experiencia</p><h2>Todo empieza<br />con una <em>pausa.</em></h2><p>Cada elemento de la Coffee Box ha sido elegido para acompañar un pequeño ritual: abrir, preparar, respirar y disfrutar.</p></div>
        <div className="cbx-ingredients">
          <article><div className="ingredient-icon coffee">✦</div><span>01</span><h3>Café con carácter</h3><p>Granos seleccionados, tostados para resaltar su origen, aroma y equilibrio.</p></article>
          <article><div className="ingredient-icon sweet">◇</div><span>02</span><h3>Sabores que acompañan</h3><p>Detalles artesanales elegidos para crear una combinación completa.</p></article>
          <article><div className="ingredient-icon ritual">◌</div><span>03</span><h3>Un detalle inesperado</h3><p>Una pieza especial para llevar la esencia de Kairós más allá del café.</p></article>
        </div>
      </section>

      <section className="cbx-panel cbx-collection liquid-section">
        <LiquidBackground subtle />
        <div className="cbx-collection-head"><div><p className="cbx-kicker light"><span /> 02 · La colección</p><h2>Elige tu<br /><em>momento.</em></h2></div><p>Tres cajas, tres formas de detener el tiempo. Selecciona una para descubrir lo que contiene.</p></div>
        <div className="cbx-box-selector">
          {boxes.map((box, index) => <button key={box.name} onClick={() => setActive(index)} className={`cbx-option ${active === index ? "selected" : ""}`}><div className={`cbx-mini-product ${box.tone}`}><span>K</span><small>{box.type}</small></div><div><small>0{index + 1}</small><h3>{box.name}</h3><p>{box.price}</p></div></button>)}
        </div>
        {active !== 3 ? <div className={`cbx-detail ${active === 2 ? "with-variants" : ""}`}><div><small>{selected.type}</small><h3>{active === 2 && celebrationStyle === "creative" ? "Celebración Creativa" : selected.name}</h3><p>{active === 2 && celebrationStyle === "creative" ? "Café, arte y diversión para cumpleaños, reuniones y tardes de pintura." : selected.description}</p>{active === 2 && <div className="cbx-variant-switch"><button className={celebrationStyle === "classic" ? "active" : ""} onClick={() => setCelebrationStyle("classic")}>Clásica</button><button className={celebrationStyle === "creative" ? "active" : ""} onClick={() => setCelebrationStyle("creative")}>Arte & Pintura</button></div>}</div><ul>{(active === 2 ? celebrationItems : selected.items).map(item => <li key={item}><span>✓</span>{item}</li>)}</ul><div className="cbx-detail-order"><strong>{selectedPrice}</strong><a href={`mailto:hola@kairosstudio.do?subject=${subject}`}>Elegir esta caja <span>↗</span></a></div></div> : <div className="cbx-customizer">
          <label><span>1 · Elige el café</span><select value={coffee} onChange={e => setCoffee(e.target.value)}><option>Café clásico · 250 g</option><option>Café reserva · 340 g (+RD$450)</option><option>Dos cafés de origen (+RD$600)</option></select></label>
          <label><span>2 · Acompañamiento</span><select value={snack} onChange={e => setSnack(e.target.value)}><option>Galletas artesanales</option><option>Chocolate artesanal (+RD$250)</option><option>Selección mixta (+RD$350)</option></select></label>
          <label><span>3 · Detalle especial</span><select value={detail} onChange={e => setDetail(e.target.value)}><option>Tarjeta personalizada</option><option>Vela aromática (+RD$450)</option><option>Taza Kairós (+RD$650)</option></select></label>
          <label><span>4 · Mensaje</span><input value={message} onChange={e => setMessage(e.target.value)} placeholder="Escribe una dedicatoria…" maxLength={120}/></label>
          <div className="cbx-custom-total"><small>Total estimado</small><strong>RD$ {customPrice.toLocaleString("es-DO")}</strong><a href={`mailto:hola@kairosstudio.do?subject=${subject}`}>Ordenar <span>↗</span></a></div>
        </div>}
      </section>

      <section className="cbx-panel cbx-order liquid-section">
        <LiquidBackground subtle />
        <div className="cbx-order-card"><p className="cbx-kicker light"><span /> 03 · Tu próximo momento</p><h2>Hecha para regalar.<br /><em>También para ti.</em></h2><p>Selecciona tu caja, personaliza el mensaje y coordina la entrega con nuestro equipo.</p><div className="cbx-order-actions"><a href={`mailto:hola@kairosstudio.do?subject=${subject}`}>Ordenar {selected.name} <span>↗</span></a><button onClick={() => go(2)}>Cambiar selección</button></div></div>
        <div className="cbx-order-summary"><span>Tu selección</span><div className={`cbx-summary-box ${selected.tone}`}><i>K</i></div><h3>{selected.name}</h3><p>{selected.price}</p><small>Entrega disponible en Santiago</small></div>
        <footer><span>© 2026 Kairós Coffee Box</span><span>Santiago · República Dominicana</span><a href="/">Volver a Kairós Studio</a></footer>
      </section>

      <div className="cbx-progress"><span style={{ width: `${((section + 1) / 4) * 100}%` }} /></div>
    </main>
  );
}
