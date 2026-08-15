import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom'
import {
  ArrowRight, Award, BadgeCheck, Building2, CalendarDays, Check, ChevronRight,
  CircleCheck, Factory, Mail, MapPin, Menu,
  MessageCircle, PanelsTopLeft, Phone, Quote, ShieldCheck, Sparkles, Users, X,
} from 'lucide-react'

const media = {
  hero: '/images/hero.jpg',
  meeting: '/images/meeting.jpg',
  handshake: '/images/handshake.jpg',
  office: '/images/office.jpg',
  house: '/images/house.jpg',
  tower: '/images/tower.jpg',
  interior: '/images/interior.jpg',
  event: '/images/event.jpg',
  security: '/images/security.jpg',
  industrial: '/images/industrial.jpg',
}

const services = [
  { slug: 'seguranca-privada', icon: ShieldCheck, title: 'Protecção & Vigilância', short: 'Estratégias de segurança inteligentes e gestão de activos.', text: 'Protecção integrada de pessoas, património e operações, com equipas qualificadas, supervisão contínua e protocolos feitos à medida.', image: media.security, points: ['Vigilância patrimonial', 'Protecção de instalações', 'Planos de risco personalizados'] },
  { slug: 'investimento-imobiliario', icon: Building2, title: 'Investimento Imobiliário', short: 'Curadoria de imóveis e terrenos com alto potencial.', text: 'Acompanhamento especializado na compra, venda e arrendamento, da identificação da oportunidade à conclusão segura do negócio.', image: media.tower, points: ['Pesquisa e avaliação', 'Mediação e negociação', 'Acompanhamento documental'] },
  { slug: 'caixilharia-aluminio', icon: PanelsTopLeft, title: 'Caixilharia de Alumínio', short: 'Soluções duráveis, inovadoras e de precisão.', text: 'Concepção, fabrico e instalação de sistemas de alumínio com excelente isolamento, acabamento e durabilidade.', image: media.office, points: ['Janelas e fachadas', 'Soluções personalizadas', 'Montagem especializada'] },
  { slug: 'design-interiores', icon: Sparkles, title: 'Design & Interiores', short: 'Curadoria estética que reflecte identidade e sofisticação.', text: 'Criamos espaços funcionais e elegantes, combinando conceito, mobiliário e execução num processo simples e rigoroso.', image: media.interior, points: ['Conceito e projecto', 'Mobiliário e decoração', 'Gestão de execução'] },
  { slug: 'limpeza-industrial', icon: Factory, title: 'Limpeza Industrial', short: 'Higienização profunda e manutenção com padrões elevados.', text: 'Equipas e processos especializados para ambientes industriais, corporativos e residenciais, com foco em segurança e consistência.', image: media.industrial, points: ['Limpeza técnica', 'Manutenção programada', 'Protocolos de segurança'] },
  { slug: 'gestao-eventos', icon: CalendarDays, title: 'Gestão de Eventos', short: 'Planeamento e execução de eventos memoráveis.', text: 'Produção integral de eventos corporativos e sociais, da ideia à experiência final, com controlo de cada detalhe.', image: media.event, points: ['Conceito e planeamento', 'Produção e fornecedores', 'Coordenação no local'] },
]

const projects = [
  { title: 'Sede corporativa Atlântico', category: 'Empresarial', location: 'Luanda', image: media.office },
  { title: 'Residência Horizonte', category: 'Residencial', location: 'Talatona', image: media.house },
  { title: 'Torre Miramar', category: 'Comercial', location: 'Luanda', image: media.tower },
  { title: 'Apartamento Sereno', category: 'Interiores', location: 'Talatona', image: media.interior },
  { title: 'Gala de Excelência', category: 'Eventos', location: 'Ilha de Luanda', image: media.event },
  { title: 'Centro de monitorização', category: 'Segurança', location: 'Viana', image: media.security },
  { title: 'Unidade logística Norte', category: 'Industrial', location: 'Viana', image: media.industrial },
]

function Logo({ light = false }) {
  return <Link className={`logo ${light ? 'logo-light' : ''}`} to="/" aria-label="FRC Global">
    <span className="logo-mark"><i /><i /><i /><i /></span>
    <span><b>FRC</b> GLOBAL<small>Transformamos a dor em solução</small></span>
  </Link>
}

function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => setOpen(false), [location.pathname])
  return <header className="header">
    <div className="shell header-inner">
      <Logo />
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Abrir menu">{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'nav open' : 'nav'}>
        {[["/", 'Início'], ['/sobre', 'Sobre nós'], ['/servicos', 'Serviços'], ['/portfolio', 'Portfólio'], ['/clientes', 'Clientes'], ['/contacto', 'Contacto']].map(([to, label]) => <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>)}
        <a className="nav-cta" href="https://wa.me/244923456789" target="_blank" rel="noreferrer"><MessageCircle size={17} /> Fale connosco</a>
      </nav>
    </div>
  </header>
}

function Footer() {
  return <footer className="footer">
    <div className="shell footer-grid">
      <div><Logo light /><p>Soluções integradas para empresas e famílias, com rigor, proximidade e excelência operacional.</p><div className="socials"><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="Instagram">ig</a></div></div>
      <div><h4>Navegação</h4>{[['/', 'Início'], ['/sobre', 'Sobre nós'], ['/servicos', 'Serviços'], ['/portfolio', 'Portfólio'], ['/contacto', 'Contacto']].map(([to, t]) => <Link key={to} to={to}>{t}</Link>)}</div>
      <div><h4>Serviços</h4>{services.slice(0, 5).map(s => <Link key={s.slug} to={`/servicos/${s.slug}`}>{s.title}</Link>)}</div>
      <div><h4>Contactos</h4><a href="tel:+244923456789"><Phone /> +244 923 456 789</a><a href="mailto:geral@frcglobal.ao"><Mail /> geral@frcglobal.ao</a><span><MapPin /> Talatona, Luanda - Angola</span></div>
      <div><h4>Newsletter</h4><p>Receba novidades e conteúdos exclusivos da FRC Global.</p><form className="newsletter" onSubmit={e => e.preventDefault()}><input type="email" placeholder="O seu email" aria-label="Email" required /><button><ArrowRight /></button></form></div>
    </div>
    <div className="shell footer-bottom"><span>© 2026 FRC Global. Todos os direitos reservados.</span><span>Política de Privacidade · Termos de Uso</span></div>
  </footer>
}

function SectionTitle({ eyebrow, title, text, center = false }) {
  return <div className={`section-title ${center ? 'center' : ''}`}><span>{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>
}

function ServiceGrid({ limit }) {
  const items = limit ? services.slice(0, limit) : services
  return <div className="service-grid">{items.map(({ slug, icon: Icon, title, short }) => <Link className="service-card" to={`/servicos/${slug}`} key={slug}><span className="icon-box"><Icon /></span><h3>{title}</h3><p>{short}</p><span className="card-link">Explorar serviço <ArrowRight /></span></Link>)}</div>
}

function ProjectGrid({ items = projects }) {
  return <div className="project-grid">{items.map((p, i) => <article className={`project-card ${i === 0 ? 'project-wide' : ''}`} key={p.title}><img src={p.image} alt={p.title} /><div><span>{p.category}</span><h3>{p.title}</h3><p>{p.location}</p></div></article>)}</div>
}

function CTA() {
  return <section className="cta shell"><div className="cta-image"><img src={media.handshake} alt="Parceria profissional" /></div><div className="cta-copy"><span>O próximo passo começa aqui</span><h2>Vamos transformar o seu projecto em realidade?</h2><p>Fale com os nossos especialistas e receba uma consultoria personalizada.</p><div className="contact-line"><Phone /><a href="tel:+244923456789">+244 923 456 789</a></div><div className="contact-line"><Mail /><a href="mailto:geral@frcglobal.ao">geral@frcglobal.ao</a></div><Link className="button button-light" to="/contacto">Solicitar consultoria <ArrowRight /></Link></div></section>
}

function Home() {
  return <>
    <section className="hero"><img src={media.hero} alt="Interior contemporâneo" /><div className="hero-shade" /><div className="shell hero-content"><span className="eyebrow">Excelência em cada detalhe</span><h1>Soluções integradas<br />para empresas<br />e famílias</h1><p>Curadoria especializada em segurança, imobiliário, alumínio e design. Transformamos necessidades em resultados concretos.</p><div className="hero-actions"><Link className="button" to="/contacto">Solicitar consultoria <ArrowRight /></Link><Link className="text-link" to="/servicos">Conheça os serviços <ChevronRight /></Link></div><div className="hero-proof"><span><b>6+</b> eixos de actuação</span><span><b>100+</b> clientes satisfeitos</span><span><b>5+</b> anos de experiência</span></div></div></section>
    <section className="section shell"><SectionTitle eyebrow="Os nossos pilares" title="Soluções que geram valor real" center /><ServiceGrid /></section>
    <section className="quality"><div className="shell quality-grid"><div className="seal"><Award /><b>Selo de<br />Qualidade</b><span>FRC</span></div><div><BadgeCheck /><h3>Rigor técnico</h3><p>Processos certificados e equipas qualificadas.</p></div><div><CircleCheck /><h3>Compromisso total</h3><p>Acompanhamento dedicado do início ao fim.</p></div><div><Sparkles /><h3>Excelência operacional</h3><p>Padrões elevados para os melhores resultados.</p></div></div></section>
    <section className="section shell"><SectionTitle eyebrow="Portfólio de referência" title="Projectos que reflectem a nossa excelência" center /><div className="project-strip">{projects.map(p => <Link to="/portfolio" key={p.title}><img src={p.image} alt={p.category} /><span>{p.category}</span></Link>)}</div><div className="center-action"><Link className="button button-outline" to="/portfolio">Ver todos os projectos <ArrowRight /></Link></div></section>
    <section className="section section-soft"><div className="shell split"><div><SectionTitle eyebrow="Sobre nós" title="Transformamos necessidades em resultados concretos" /><p className="lead">Somos uma empresa de serviços múltiplos e consultoria, focada em entregar soluções à medida para clientes corporativos e particulares.</p><div className="stats"><span><b>6+</b>Eixos de actuação</span><span><b>100+</b>Clientes satisfeitos</span><span><b>5+</b>Anos de experiência</span></div><Link className="button" to="/sobre">Sobre a FRC Global <ArrowRight /></Link></div><div className="value-panel"><h4>Os nossos valores</h4>{[['Excelência', 'Rigor e qualidade máxima em cada detalhe e projecto.'], ['Versatilidade', 'Capacidade de adaptação rápida para desafios complexos.'], ['Integridade', 'Actuação ética, transparente e responsável.'], ['Foco no cliente', 'Dedicação total à compreensão de cada necessidade.']].map(([a,b]) => <div key={a}><Check /><p><b>{a}</b>{b}</p></div>)}</div></div></section>
    <Testimonials />
    <CTA />
  </>
}

function Testimonials() {
  const testimonials = [
    ['A FRC Global cuidou de todo o processo com profissionalismo e atenção aos detalhes. Resultado acima das nossas expectativas.', 'Director de Operações', 'Empresa de Serviços'],
    ['Trabalhar com a FRC Global é ter a garantia de um parceiro comprometido com prazos, qualidade e inovação.', 'Gestor de Projectos', 'Sector Imobiliário'],
    ['Equipa altamente especializada e soluções sob medida que trouxeram segurança e eficiência ao nosso negócio.', 'Administrador', 'Grupo Empresarial'],
  ]
  return <section className="section shell"><SectionTitle eyebrow="O que os nossos clientes dizem" title="Parcerias que constroem histórias de sucesso" center /><div className="testimonial-grid">{testimonials.map(([q,n,r]) => <article key={n}><Quote /><p>{q}</p><b>{n}</b><span>{r}</span></article>)}</div></section>
}

function PageHero({ eyebrow, title, text, image = media.office }) {
  return <section className="page-hero"><img src={image} alt="" /><div className="page-hero-shade" /><div className="shell"><span>{eyebrow}</span><h1>{title}</h1><p>{text}</p></div></section>
}

function About() {
  return <><PageHero eyebrow="Quem somos" title="Construímos confiança através de resultados" text="Uma visão integrada para desafios que exigem rigor, criatividade e execução." image={media.meeting} />
    <section className="section shell split about-split"><div><SectionTitle eyebrow="FRC Global" title="Um parceiro para o crescimento e bem-estar" /><p className="lead">Com sede em Talatona, Luanda, destacamo-nos pela curadoria e gestão integrada de projectos. Combinamos versatilidade, rigor técnico e excelência operacional.</p><p>Seja na modernização de espaços, segurança patrimonial ou gestão de activos e eventos, reunimos as pessoas e competências certas para entregar soluções de alta qualidade.</p></div><div className="about-image"><img src={media.office} alt="Escritório contemporâneo" /><div><b>5+</b><span>anos a transformar desafios em soluções</span></div></div></section>
    <section className="section section-soft"><div className="shell"><SectionTitle eyebrow="O que nos orienta" title="Princípios claros, impacto duradouro" center /><div className="principles"><article><span>01</span><h3>Missão</h3><p>Entregar soluções personalizadas, eficientes e de alto padrão que gerem valor real.</p></article><article><span>02</span><h3>Visão</h3><p>Ser referência angolana em serviços integrados e gestão de projectos multidisciplinares.</p></article><article><span>03</span><h3>Compromisso</h3><p>Actuar com transparência, proximidade e atenção rigorosa a cada detalhe.</p></article></div></div></section>
    <section className="section shell"><div className="numbers"><div><b>100+</b><span>Clientes satisfeitos</span></div><div><b>6</b><span>Áreas especializadas</span></div><div><b>25+</b><span>Profissionais parceiros</span></div><div><b>96%</b><span>Índice de recomendação</span></div></div></section><CTA /></>
}

function Services() {
  return <><PageHero eyebrow="Soluções integradas" title="Especialistas em cada detalhe" text="Seis áreas de actuação, uma única equipa dedicada ao seu resultado." image={media.interior} /><section className="section shell"><SectionTitle eyebrow="Os nossos serviços" title="Da estratégia à execução" text="Escolha uma área para conhecer como podemos responder ao seu desafio." /><ServiceGrid /></section><section className="section section-soft"><div className="shell process"><SectionTitle eyebrow="Como trabalhamos" title="Um processo simples e transparente" /><div className="process-grid">{[['01','Escutamos','Compreendemos o contexto, as prioridades e os resultados esperados.'],['02','Desenhamos','Criamos uma solução integrada, clara e ajustada ao orçamento.'],['03','Executamos','Coordenamos equipas, prazos e qualidade em cada fase.'],['04','Acompanhamos','Medimos resultados e permanecemos próximos depois da entrega.']].map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section><CTA /></>
}

function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find(s => s.slug === slug) || services[0]
  const Icon = service.icon
  return <><PageHero eyebrow="Serviço especializado" title={service.title} text={service.short} image={service.image} /><section className="section shell service-detail"><div><span className="icon-box large"><Icon /></span><SectionTitle eyebrow="Visão geral" title="Uma solução pensada para si" /><p className="lead">{service.text}</p><ul>{service.points.map(p => <li key={p}><CircleCheck />{p}</li>)}</ul><Link className="button" to="/contacto">Pedir proposta <ArrowRight /></Link></div><aside><h3>Todos os serviços</h3>{services.map(s => <Link className={s.slug === service.slug ? 'active' : ''} to={`/servicos/${s.slug}`} key={s.slug}>{s.title}<ChevronRight /></Link>)}</aside></section><CTA /></>
}

function Portfolio() {
  const [filter, setFilter] = useState('Todos')
  const cats = ['Todos', ...new Set(projects.map(p => p.category))]
  const filtered = filter === 'Todos' ? projects : projects.filter(p => p.category === filter)
  return <><PageHero eyebrow="Portfólio" title="Projectos com propósito" text="Espaços, experiências e operações concebidos para gerar valor duradouro." image={media.tower} /><section className="section shell"><div className="filter-bar">{cats.map(c => <button className={filter === c ? 'active' : ''} onClick={() => setFilter(c)} key={c}>{c}</button>)}</div><ProjectGrid items={filtered} /></section><CTA /></>
}

function Clients() {
  const names = ['ATLÂNTICO', 'NOVA VIDA', 'KILAMBA', 'MERIDIAN', 'TRÓPICO', 'HORIZONTE', 'VITRINE', 'LUMEN']
  return <><PageHero eyebrow="Clientes" title="Relações que crescem connosco" text="A confiança de quem procura consistência, discrição e excelência." image={media.meeting} /><section className="section shell"><SectionTitle eyebrow="Parcerias" title="Experiência em diferentes sectores" center /><div className="logo-cloud">{names.map((n,i) => <div key={n}><span>{String(i+1).padStart(2,'0')}</span>{n}</div>)}</div></section><section className="section section-soft"><div className="shell split"><div><SectionTitle eyebrow="Porquê a FRC" title="Um único parceiro, múltiplas competências" /><p className="lead">Reduzimos complexidade ao reunir especialistas e gestão num único ponto de contacto.</p></div><div className="client-benefits">{['Resposta rápida e próxima','Soluções feitas à medida','Rede qualificada de especialistas','Acompanhamento ponta a ponta'].map(t => <div key={t}><CircleCheck /><span>{t}</span></div>)}</div></div></section><Testimonials /><CTA /></>
}

function Contact() {
  const [sent, setSent] = useState(false)
  return <><PageHero eyebrow="Contacto" title="Vamos conversar sobre o seu projecto" text="Conte-nos o que precisa. A nossa equipa responde em até um dia útil." image={media.handshake} /><section className="section shell contact-layout"><div><SectionTitle eyebrow="Fale connosco" title="Estamos próximos" /><p className="lead">Escolha o canal mais conveniente ou visite-nos em Talatona.</p><div className="contact-list"><a href="tel:+244923456789"><span><Phone /></span><p><small>Telefone</small>+244 923 456 789</p></a><a href="mailto:geral@frcglobal.ao"><span><Mail /></span><p><small>Email</small>geral@frcglobal.ao</p></a><div><span><MapPin /></span><p><small>Escritório</small>Talatona, Luanda - Angola</p></div></div></div><form className="contact-form" onSubmit={e => {e.preventDefault(); setSent(true)}}><h3>Contacto personalizado</h3>{sent ? <div className="success"><CircleCheck /><h3>Mensagem recebida</h3><p>Obrigado. Entraremos em contacto brevemente.</p><button type="button" className="text-link" onClick={() => setSent(false)}>Enviar outra mensagem</button></div> : <><div className="form-row"><label>Nome completo<input required placeholder="Como devemos tratar-lhe?" /></label><label>Email<input required type="email" placeholder="nome@empresa.ao" /></label></div><label>Telefone<input required type="tel" placeholder="+244" /></label><label>Serviço de interesse<select defaultValue=""><option value="" disabled>Seleccione uma opção</option>{services.map(s => <option key={s.slug}>{s.title}</option>)}</select></label><label>Mensagem<textarea required rows="5" placeholder="Fale-nos um pouco sobre o projecto" /></label><button className="button">Enviar mensagem <ArrowRight /></button></>}</form></section><section className="map-section"><div className="shell"><MapPin /><div><b>Talatona, Luanda</b><span>Atendimento de segunda a sexta, das 08h às 17h</span></div></div></section></>
}

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  return <><ScrollTop /><Header /><main><Routes><Route path="/" element={<Home />} /><Route path="/sobre" element={<About />} /><Route path="/servicos" element={<Services />} /><Route path="/servicos/:slug" element={<ServiceDetail />} /><Route path="/portfolio" element={<Portfolio />} /><Route path="/clientes" element={<Clients />} /><Route path="/contacto" element={<Contact />} /><Route path="*" element={<Home />} /></Routes></main><Footer /></>
}
