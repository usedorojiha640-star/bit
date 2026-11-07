import React, { useEffect, useState } from 'react'
import { MANAGER_URL } from './config.js'

const FAQ = [
  { q: 'Как узнать актуальный курс?', a: 'Оставьте запрос менеджеру с указанием направления, актива и суммы. Он уточнит актуальные условия для вашего запроса. На сайте нет фиктивного онлайн-курса.' },
  { q: 'Какие направления обмена доступны?', a: 'Основные направления — криптовалюта в наличные и наличные в криптовалюту. Доступность конкретного актива и сети уточняется перед обменом.' },
  { q: 'Можно ли обменять в другом городе?', a: 'Укажите город в форме запроса. Менеджер сообщит, доступен ли подходящий формат в нужной локации. Размещение города на странице не означает наличие постоянного офиса.' },
  { q: 'Можно ли узнать условия заранее?', a: 'Да. Сначала согласуйте сумму, актив, город, курс, комиссии и формат операции с менеджером. Проводите обмен только после того, как все условия вам понятны.' },
  { q: 'Есть ли минимальная сумма?', a: 'Минимальная и максимальная сумма зависит от выбранного направления и условий конкретного запроса. Менеджер уточнит доступные лимиты.' },
  { q: 'Что делать, если мне нужна консультация?', a: 'Нажмите любую кнопку связи с менеджером. На этой странице нет платежей или запроса персональных финансовых данных.' },
]

function Arrow({ diagonal = false, size = 20 }) {
  return diagonal ? (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M7 5h12v12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
  )
}

function BoltMark({ size = 44, className = '' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 70 78" fill="none" aria-hidden="true">
      <path d="M40 3 8 42h23L20 75 65 28H41L54 3H40Z" fill="currentColor" />
      <path d="m8 42 23 0-6 20L40 45H20L40 3Z" fill="white" fillOpacity=".22" />
    </svg>
  )
}

function Logo({ light = false }) {
  return (
    <a className={'brand ' + (light ? 'brand-light' : '')} href="#home" aria-label="BitRush — наверх">
      <span className="brand-symbol"><BoltMark size={29} /></span>
      <span className="brand-type">BIT<span>RUSH</span><span className="brand-dot">.</span></span>
      <span className="brand-side">ONE<br/>EXCHANGE</span>
    </a>
  )
}

function Pill({ children, variant = '' }) {
  return <span className={'pill ' + variant}>{children}</span>
}

function GraphicArtwork() {
  return (
    <div className="art-scene" aria-label="Абстрактная неоновая эмблема скорости BitRush" role="img">
      <div className="art-corner tl">SYSTEM / ONLINE <span className="online-dot" /></div>
      <div className="art-corner tr">BR — 001 / 26</div>
      <div className="scene-grid" />
      <div className="velocity velocity-one" />
      <div className="velocity velocity-two" />
      <div className="velocity velocity-three" />
      <div className="art-shockwave one" />
      <div className="art-shockwave two" />
      <div className="art-core-glow" />
      <svg className="art-prism" viewBox="0 0 570 600" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="prismEdge" x1="70" y1="30" x2="530" y2="550" gradientUnits="userSpaceOnUse"><stop stopColor="#fafff3"/><stop offset=".23" stopColor="#9ba7bf"/><stop offset=".48" stopColor="#f5f9ff"/><stop offset=".64" stopColor="#566078"/><stop offset=".83" stopColor="#f9fff2"/><stop offset="1" stopColor="#78839a"/></linearGradient>
          <linearGradient id="darkFace" x1="118" y1="99" x2="468" y2="504" gradientUnits="userSpaceOnUse"><stop stopColor="#313b4f"/><stop offset=".43" stopColor="#151c2d"/><stop offset="1" stopColor="#070911"/></linearGradient>
          <linearGradient id="limeBlade" x1="280" y1="88" x2="277" y2="506" gradientUnits="userSpaceOnUse"><stop stopColor="#fbffcb"/><stop offset=".23" stopColor="#d7ff62"/><stop offset=".65" stopColor="#b2ff23"/><stop offset="1" stopColor="#63e742"/></linearGradient>
          <linearGradient id="purpleBlade" x1="268" y1="275" x2="444" y2="509" gradientUnits="userSpaceOnUse"><stop stopColor="#dfd3ff"/><stop offset="1" stopColor="#7552f9"/></linearGradient>
          <filter id="prismShadow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="15"/></filter>
          <filter id="boltGlow" x="-45%" y="-45%" width="190%" height="190%"><feGaussianBlur stdDeviation="10"/></filter>
        </defs>
        <path d="m109 145 211-61 156 103 4 235-213 115-164-124 6-268Z" fill="#b4ff30" opacity=".4" filter="url(#prismShadow)" />
        <path d="m88 139 233-75 180 130-9 234-234 117L77 408 88 139Z" fill="url(#prismEdge)" />
        <path d="m108 154 207-65 159 112-6 208-207 104L101 397l7-243Z" fill="url(#darkFace)" />
        <path d="m108 154 207-65 159 112-6 208-207 104L101 397l7-243Z" stroke="#d6dded" strokeWidth="3" />
        <path d="M105 155 259 269l2 243M314 89l-55 180 212-68" stroke="#7d899f" strokeWidth="1.6" opacity=".55"/>
        <path d="M95 172 261 288l199-69M259 512l11-220 190-76" stroke="#e4fff2" strokeWidth=".9" opacity=".19"/>
        <path d="m301 120-134 208h107l-27 168 173-260H306l50-116h-55Z" fill="#b1ff33" opacity=".65" filter="url(#boltGlow)"/>
        <path d="m305 114-144 219h113l-31 169 183-274H307l52-114h-54Z" fill="url(#limeBlade)" stroke="#f3ffd5" strokeWidth="4" strokeLinejoin="round" />
        <path d="M161 333h113l-31 169 183-274h-83L161 333Z" fill="url(#purpleBlade)" fillOpacity=".5" />
        <path d="m305 114-144 219h113l-31 169 183-274H307l52-114h-54Z" stroke="#efffc6" strokeWidth="3" opacity=".8"/>
        <path d="m159 337 106 0-22 143" stroke="white" strokeWidth="5" opacity=".65" />
        <path d="m315 125-124 191" stroke="white" strokeWidth="3" opacity=".7" />
      </svg>
      <div className="art-caption"><span>THE SPEED<br/>OF EXCHANGE</span><span className="art-caption-symbol"><Arrow diagonal size={18}/></span></div>
      <div className="art-index">01<span> / IN MOTION</span></div>
      <div className="art-base-strip"><span>BITRUSH // ENERGY ENGINE</span><span>SCROLL TO EXPLORE ↓</span></div>
    </div>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)
  useEffect(() => {
    const onEsc = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [])
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Logo />
        <nav className={'primary-nav ' + (menuOpen ? 'nav-open' : '')} id="primary-nav" aria-label="Навигация">
          <a onClick={close} href="#benefits">Преимущества</a>
          <a onClick={close} href="#directions">Направления</a>
          <a onClick={close} href="#process">Как работаем</a>
          <a onClick={close} href="#faq">FAQ</a>
          <a onClick={close} href="#contact" className="nav-mobile-cta">Связаться с менеджером <Arrow diagonal size={16}/></a>
        </nav>
        <div className="header-actions">
          <span className="header-online"><span className="online-dot"/> НА СВЯЗИ 24/7</span>
          <a className="header-cta" href={MANAGER_URL} target="_blank" rel="noopener noreferrer">СВЯЗАТЬСЯ <Arrow diagonal size={17}/></a>
        </div>
        <button type="button" className={'menu-toggle ' + (menuOpen ? 'active' : '')} onClick={() => setMenuOpen(v=>!v)} aria-label={menuOpen?'Закрыть меню':'Открыть меню'} aria-controls="primary-nav" aria-expanded={menuOpen}><span/><span/><span/></button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grain" aria-hidden="true"/>
      <div className="shell hero-layout">
        <div className="hero-copy">
          <div className="hero-eyebrow"><span className="eyebrow-number">/ 001</span><span className="eyebrow-rule" /> КРИПТОВАЛЮТА <span className="mini-cross">✳</span> НАЛИЧНЫЕ</div>
          <h1>ОБМЕН<br/><span className="hero-h1-mid">НА ПОЛНОЙ</span><br/><em>СКОРОСТИ<span className="hero-title-dot">.</span></em></h1>
          <p className="hero-sub">Когда важны скорость коммуникации, понятные условия и внимание к деталям. Вы задаёте маршрут — мы помогаем согласовать обмен.</p>
          <div className="hero-buttons">
            <a className="btn btn-lime btn-large" href={MANAGER_URL} target="_blank" rel="noopener noreferrer">УЗНАТЬ УСЛОВИЯ <span className="btn-icon"><Arrow diagonal size={22}/></span></a>
            <a className="hero-link" href="#directions">Смотреть направления <Arrow size={19}/></a>
          </div>
          <div className="hero-ministats">
            <div><strong>24<span>/</span>7</strong><small>ПРИЁМ ЗАПРОСОВ</small></div>
            <div className="ministat-divider" />
            <div><strong>02</strong><small>НАПРАВЛЕНИЯ</small></div>
            <div className="ministat-divider" />
            <div className="ministat-note"><span className="ministat-badge">↗</span><small>ПАРАМЕТРЫ ПОД<br/>ВАШ ЗАПРОС</small></div>
          </div>
        </div>
        <GraphicArtwork />
      </div>
      <div className="hero-bottom shell"><span>BITRUSH / MADE FOR MOTION</span><span className="hero-bottom-center">НЕОН. ЭНЕРГИЯ. ТОЧНОСТЬ.</span><span>01 / 06</span></div>
    </section>
  )
}

function Marquee() {
  return <div className="marquee" aria-label="BitRush — exchange in motion"><div className="marquee-track">{Array.from({ length: 6 }, (_, i) => <span key={i}>BITRUSH <span className="marquee-x">✳</span> EXCHANGE IN MOTION <span className="marquee-x">✳</span> </span>)}</div></div>
}

const benefits = [
  { n: '01', label: 'FAST RESPONSE', title: 'Ваша задача — наш фокус.', text: 'Без сложных анкет на сайте. Расскажите, что хотите обменять, и обсудите детали напрямую с менеджером.', cls: 'benefit-main' },
  { n: '02', label: 'PRIVATE DIALOGUE', title: 'Личный диалог вместо шаблонов.', text: 'Обсуждение суммы, города и формата без публичного размещения деталей.', cls: 'benefit-violet' },
  { n: '03', label: 'ALWAYS CONNECTED', title: 'В ритме 24/7.', text: 'Отправляйте запрос в удобное время. Срок ответа зависит от доступности менеджера.', cls: 'benefit-lime' },
  { n: '04', label: 'CLEAR TERMS', title: 'Сначала условия. Потом решение.', text: 'Курс, комиссии и порядок действий согласуются до операции — без выдуманных цифр на лендинге.', cls: 'benefit-dark' },
]

function Benefits() {
  return <section id="benefits" className="section benefits-section">
    <div className="shell">
      <div className="section-heading benefits-heading"><div><Pill>01 / КАК МЫ РАБОТАЕМ</Pill><h2>ДЕЛАЕМ СЛОЖНОЕ<br/><span className="outline-text">ПРОЩЕ.</span></h2></div><p>Никакого визуального шума в процессе. Только то, что важно для вашего обмена.</p></div>
      <div className="benefit-grid">
        {benefits.map((item) => <article className={'benefit-card '+item.cls} key={item.n}>
          <div className="benefit-card-top"><span>{item.n} / {item.label}</span><span className="benefit-arrow"><Arrow diagonal size={20}/></span></div>
          {item.n==='01' && <div className="benefit-main-visual" aria-hidden="true"><span className="visual-path p1"/><span className="visual-path p2"/><span className="visual-path p3"/><span className="visual-disc"><BoltMark size={77}/></span></div>}
          {item.n==='02' && <div className="benefit-orbit" aria-hidden="true"><span className="orbit-ring ring-a"/><span className="orbit-ring ring-b"/><span className="orbit-center">↗</span></div>}
          {item.n==='03' && <div className="time-art" aria-hidden="true">24<span>:</span>7<small>ALWAYS / ON</small></div>}
          {item.n==='04' && <div className="clarity-art" aria-hidden="true"><span className="clarity-line"><b>AMOUNT</b><i>•••••••••</i></span><span className="clarity-line"><b>ROUTE</b><i>DEFINED</i></span><span className="clarity-line"><b>STATUS</b><i>IN DIALOGUE</i></span></div>}
          <div className="benefit-content"><h3>{item.title}</h3><p>{item.text}</p></div>
        </article>)}
      </div>
    </div>
  </section>
}

function Directions({ onChoose }) {
  return <section id="directions" className="section directions-section">
    <div className="shell">
      <div className="section-heading direction-heading"><div><Pill>02 / НАПРАВЛЕНИЯ</Pill><h2>ДВА ПУТИ.<br/><span className="gradient-text">ОДИН ИМПУЛЬС.</span></h2></div><p>Выберите, куда движетесь. Следующий шаг — согласовать условия обмена.</p></div>
      <div className="direction-layout">
        <button type="button" className="direction-card direction-crypto" onClick={() => onChoose('crypto-cash')}>
          <span className="dc-index">01 / CONVERT TO CASH <Arrow diagonal size={21}/></span>
          <span className="dc-symbol">₿ <span>↗</span> $</span>
          <span className="dc-title">КРИПТО<br/><b>→ НАЛИЧНЫЕ</b></span>
          <span className="dc-foot"><span>USDT · BTC · ETH</span><span>ВЫБРАТЬ НАПРАВЛЕНИЕ <Arrow size={18}/></span></span>
        </button>
        <button type="button" className="direction-card direction-cash" onClick={() => onChoose('cash-crypto')}>
          <span className="dc-index">02 / CONVERT TO CRYPTO <Arrow diagonal size={21}/></span>
          <span className="dc-symbol dc-cash-symbol">$ <span>↗</span> ₮</span>
          <span className="dc-title">НАЛИЧНЫЕ<br/><b>→ КРИПТО</b></span>
          <span className="dc-foot"><span>УСЛОВИЯ ПО ЗАПРОСУ</span><span>ВЫБРАТЬ НАПРАВЛЕНИЕ <Arrow size={18}/></span></span>
        </button>
      </div>
    </div>
  </section>
}

function RequestForm({ direction, setDirection }) {
  const [asset, setAsset] = useState('USDT (TRC20)')
  const [amount, setAmount] = useState('')
  const [city, setCity] = useState('')
  const [copied, setCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)
  const message = `Здравствуйте! Интересует обмен через BitRush.\nНаправление: ${direction === 'crypto-cash' ? 'Криптовалюта → наличные' : 'Наличные → криптовалюта'}\nАктив: ${asset}\nСумма: ${amount.trim() || 'уточню'}\nГород: ${city.trim() || 'уточню'}\nПодскажите, пожалуйста, актуальный курс, комиссии и доступность.`
  const copyRequest = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        try {
          await navigator.clipboard.writeText(message)
        } catch {
          // Fallback for browsers with restricted clipboard permissions.
          const textarea = document.createElement('textarea')
          textarea.value = message
          textarea.style.cssText = 'position:fixed;opacity:0;left:-9999px'
          document.body.appendChild(textarea)
          textarea.select()
          const ok = document.execCommand('copy')
          textarea.remove()
          if (!ok) throw new Error('Clipboard unavailable')
        }
      } else {
        const textarea = document.createElement('textarea')
        textarea.value = message
        textarea.style.cssText = 'position:fixed;opacity:0;left:-9999px'
        document.body.appendChild(textarea)
        textarea.select()
        const ok = document.execCommand('copy')
        textarea.remove()
        if (!ok) throw new Error('Clipboard unavailable')
      }
      setCopied(true); setCopyError(false)
      window.setTimeout(() => setCopied(false), 3500)
    } catch {
      setCopyError(true)
    }
  }
  return <section id="contact" className="section contact-section">
    <div className="shell contact-layout">
      <div className="contact-copy"><Pill variant="pill-dark">03 / НАЧАТЬ ОБМЕН</Pill><h2>ВАШ МАРШРУТ.<br/><span>НАША СВЯЗЬ.</span></h2><p>Три параметра — и можно обсуждать детали. Мы не показываем выдуманные котировки: точные условия рассчитываются для конкретного запроса.</p><div className="contact-side-mark"><span className="contact-cross">✳</span><span>ПРЯМАЯ СВЯЗЬ<br/>БЕЗ ЛИШНИХ ЭКРАНОВ</span></div></div>
      <div className="request-card"><div className="request-top"><span><span className="online-dot"/> ПАРАМЕТРЫ ЗАПРОСА</span><span>BR / REQUEST.01</span></div>
        <div className="request-toggle" role="group" aria-label="Направление обмена"><button type="button" className={direction==='crypto-cash'?'selected':''} onClick={()=>setDirection('crypto-cash')}>Крипто → наличные</button><button type="button" className={direction==='cash-crypto'?'selected':''} onClick={()=>setDirection('cash-crypto')}>Наличные → крипто</button></div>
        <div className="form-grid"><label className="form-field"><span>АКТИВ / СЕТЬ</span><select value={asset} onChange={(e)=>setAsset(e.target.value)}><option>USDT (TRC20)</option><option>USDT (ERC20)</option><option>BTC</option><option>ETH</option><option>Другое (уточню)</option></select></label><label className="form-field"><span>СУММА</span><input type="text" inputMode="decimal" maxLength={32} autoComplete="off" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Например, 2 500 USDT"/></label><label className="form-field form-field-wide"><span>ГОРОД / ЛОКАЦИЯ</span><input type="text" maxLength={80} autoComplete="address-level2" value={city} onChange={(e)=>setCity(e.target.value)} placeholder="Укажите город для проверки доступности"/></label></div>
        <div className="request-note"><span>↗</span> Доступность, курс, комиссии и формат обмена подтверждает менеджер.</div>
        <div className="request-actions"><a className="btn btn-lime request-submit" href={MANAGER_URL} target="_blank" rel="noopener noreferrer">НАПИСАТЬ МЕНЕДЖЕРУ <Arrow diagonal size={21}/></a><button className="copy-button" type="button" onClick={copyRequest} aria-label="Скопировать текст запроса">{copied?'СКОПИРОВАНО ✓':'СКОПИРОВАТЬ ЗАПРОС'} <span>⧉</span></button></div>
        <p className="request-hint">Чтобы передать выбранные параметры, сначала скопируйте запрос и вставьте его в переписку. Данные не отправляются автоматически.</p>
        {copyError && <div className="copy-error" role="status">Не удалось скопировать автоматически. Можно вручную передать параметры менеджеру.</div>}
        <div className="request-foot">BITRUSH / PRIVATE REQUEST <span>NO LIVE RATES ON THIS PAGE</span></div>
      </div>
    </div>
  </section>
}

function Process() {
  return <section id="process" className="section process-section"><div className="shell">
    <div className="section-heading process-heading"><div><Pill>04 / ПРОЦЕСС</Pill><h2>ТРИ ШАГА.<br/><span className="outline-text">БЕЗ СУЕТЫ.</span></h2></div><p>Быстрый понятный путь от первого сообщения до согласования параметров.</p></div>
    <div className="timeline">
      <article className="timeline-step"><div className="step-head"><span>STEP 01</span><span className="step-icon">↗</span></div><div className="step-number">01</div><h3>ЗАДАЙТЕ<br/>НАПРАВЛЕНИЕ</h3><p>Напишите актив, сумму и город. Можно воспользоваться формой выше.</p></article>
      <article className="timeline-step"><div className="step-head"><span>STEP 02</span><span className="step-icon">⌘</span></div><div className="step-number">02</div><h3>СОГЛАСУЙТЕ<br/>УСЛОВИЯ</h3><p>Уточните курс, комиссии, лимиты, сроки и доступный формат операции.</p></article>
      <article className="timeline-step"><div className="step-head"><span>STEP 03</span><span className="step-icon">✓</span></div><div className="step-number">03</div><h3>ПРИМИТЕ<br/>РЕШЕНИЕ</h3><p>Переходите к обмену только после подтверждения всех деталей обеими сторонами.</p></article>
    </div>
  </div></section>
}

function Geo() {
  return <section className="geo-section"><div className="shell geo-inner">
    <div className="geo-copy"><Pill variant="pill-lime">05 / БЕЗ ГРАНИЦ</Pill><h2>ВАШ ГОРОД —<br/><em>НАША ТОЧКА<br/>ОТСЧЁТА.</em></h2><p>География обмена зависит от направления и локации. Назовите город — менеджер уточнит, какие варианты доступны.</p><a href={MANAGER_URL} target="_blank" rel="noopener noreferrer" className="geo-link">УТОЧНИТЬ ДОСТУПНОСТЬ <Arrow diagonal size={20}/></a></div>
    <div className="geo-graphic" aria-label="Декоративная карта сети, география уточняется по запросу">
      <div className="geo-graphic-lines"/><div className="radar radar-a"/><div className="radar radar-b"/><div className="radar radar-c"/>
      <div className="geo-orbit-ring"/>
      <div className="geo-node node-a"><b/></div><div className="geo-node node-b"><b/></div><div className="geo-node node-c"><b/></div><div className="geo-node node-d"><b/></div>
      <div className="geo-crosshair">✳</div><div className="geo-label geo-label-one">DESTINATION / YOUR CHOICE</div><div className="geo-label geo-label-two">LOCATION / BY REQUEST</div>
      <div className="geo-center"><BoltMark size={42}/></div>
    </div>
  </div></section>
}

function Faq() {
  const [openIndex, setOpenIndex] = useState(0)
  return <section id="faq" className="section faq-section"><div className="shell faq-layout">
    <div className="faq-intro"><Pill>06 / FAQ</Pill><h2>ЕСТЬ<br/><span className="outline-text">ВОПРОС?</span></h2><p>Ответы на основные вопросы перед обменом. Не нашли нужного? Напишите напрямую.</p><a href={MANAGER_URL} target="_blank" rel="noopener noreferrer" className="faq-contact">ЗАДАТЬ ВОПРОС <Arrow diagonal size={19}/></a></div>
    <div className="faq-list">{FAQ.map((item,index)=><article key={item.q} className={'faq-item '+(openIndex===index?'faq-open':'')}><button type="button" onClick={()=>setOpenIndex(openIndex===index?-1:index)} aria-expanded={openIndex===index}><span className="faq-n">0{index+1}</span><span className="faq-question">{item.q}</span><span className="faq-plus">{openIndex===index?'−':'+'}</span></button>{openIndex===index && <div className="faq-answer"><p>{item.a}</p></div>}</article>)}</div>
  </div></section>
}

function Footer() {
  return <footer className="site-footer"><div className="shell">
    <div className="footer-callout"><div><div className="footer-kicker"><span className="online-dot"/> YOUR NEXT MOVE STARTS HERE</div><h2>READY<br/><em>TO RUSH?</em></h2><p>Первый шаг — одно сообщение. Остальное обсудим.</p></div><a href={MANAGER_URL} target="_blank" rel="noopener noreferrer" className="footer-giant-cta" aria-label="Написать менеджеру"><Arrow diagonal size={62}/></a></div>
    <div className="footer-main"><Logo light/><div className="footer-nav"><a href="#home">Главная</a><a href="#directions">Направления</a><a href="#contact">Запрос</a><a href="#faq">FAQ</a></div><a className="footer-address" href="https://bitrush.one" target="_blank" rel="noopener noreferrer">BITRUSH.ONE <Arrow diagonal size={14}/></a></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} BITRUSH. ALL RIGHTS RESERVED.</span><span>САЙТ НЕ ПРИНИМАЕТ ПЛАТЕЖИ И НЕ ПУБЛИКУЕТ КОТИРОВКИ.</span><a href="#home">НАВЕРХ ↑</a></div>
  </div></footer>
}

export default function App() {
  const [direction, setDirection] = useState('crypto-cash')
  const choose = (next) => {
    setDirection(next)
    document.getElementById('contact')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' })
  }
  useEffect(() => {
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=> { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) } })
    }, { threshold: .1, rootMargin: '0px 0px -25px 0px' })
    document.querySelectorAll('.benefit-card,.direction-card,.timeline-step,.section-heading,.geo-inner,.contact-layout').forEach(el=>observer.observe(el))
    return ()=>observer.disconnect()
  }, [])
  return <><Header/><main><Hero/><Marquee/><Benefits/><Directions onChoose={choose}/><RequestForm direction={direction} setDirection={setDirection}/><Process/><Geo/><Faq/></main><Footer/></>
}
