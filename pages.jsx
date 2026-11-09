import {useEffect} from 'react';
import {SITE,IMAGES,COLLECTIONS,SERVICES} from './data/site.js';
import {Link,Photo,Reveal,Gallery,BookingForm,Testimonials} from './components.jsx';
const first=c=>IMAGES.find(i=>i.category===c);
const CTA=({to='/contact',children="Let’s work together"})=><Link to={to} className="btn btn-solid">{children}</Link>;
const Band=()=><section className="px-6 py-28 text-center"><Reveal><h2 className="h2 mx-auto max-w-3xl">Have a story worth capturing?</h2><div className="mt-10"><CTA/></div></Reveal></section>;

export function Home(){return <>
 <section className="relative flex min-h-screen items-end"><Photo file="hero.jpg" alt="Shavim Photography cinematic hero image" eager className="absolute inset-0"/><div className="absolute inset-0 bg-gradient-to-t from-char via-char/40 to-char/30"/>
  <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-40"><p className="eyebrow">Shavim Photography · Arusha, Tanzania</p>
   <h1 className="h1 mt-6 max-w-4xl">Telling stories through the art of photography</h1>
   <p className="mt-6 max-w-xl text-lg text-ivory/80">Professional photography rooted in Arusha, Tanzania, creating powerful visual stories across wildlife, corporate, and fashion photography.</p>
   <div className="mt-10 flex flex-wrap gap-4"><Link to="/portfolio" className="btn btn-solid">Explore portfolio</Link><Link to="/contact" className="btn btn-line">Book a photographer</Link></div></div></section>
 <section className="mx-auto max-w-7xl px-6 py-28"><div className="grid gap-6 md:grid-cols-3">{Object.entries(COLLECTIONS).map(([k,c])=><Reveal key={k}><Link to={'/'+k} className="zoom group relative block aspect-[3/4]"><Photo file={first(k)?.file} alt={first(k)?.alt||c.card} className="absolute inset-0"/><div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10"/>
  <div className="absolute inset-x-0 bottom-0 p-7"><p className="eyebrow">{c.eyebrow}</p><h3 className="mt-2 font-serif text-3xl">{c.card}</h3><p className="mt-3 text-sm text-ivory/75">{c.desc}</p><span className="nav-link active mt-5 inline-block text-xs uppercase tracking-[.2em] text-gold">Explore</span></div></Link></Reveal>)}</div></section>
 <section className="bg-ivory px-6 py-28 text-char"><Reveal className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
  <Photo file="photographer-portrait.jpg" alt="Portrait of the photographer behind Shavim Photography" className="aspect-[4/5]"/>
  <div><p className="eyebrow !text-[#8a7347]">About</p><h2 className="h2 mt-4">Behind the lens</h2><p className="mt-6 text-char/75">Shavim Photography is a creative photography brand based in Arusha, Tanzania, with a passion for capturing authentic moments, powerful stories, and extraordinary visual experiences.</p><Link to="/about" className="btn mt-8 border-char text-char hover:bg-char hover:text-ivory">About me</Link></div></Reveal></section>
 <section className="mx-auto max-w-7xl px-6 py-28"><Reveal><p className="eyebrow">Selected work</p><h2 className="h2 mt-4 mb-12">Featured work</h2></Reveal>
  <Gallery items={IMAGES.filter(i=>i.featured)} filters={false}/><div className="mt-10"><Link to="/portfolio" className="btn btn-line">View full portfolio</Link></div></section>
 <Testimonials/>
 <Band/></>}

export function About(){return <div className="mx-auto max-w-7xl px-6 pb-24 pt-40">
 <div className="grid gap-14 md:grid-cols-2"><Photo file="photographer-portrait.jpg" alt="Portrait of the photographer behind Shavim Photography" className="aspect-[4/5]"/>
  <Reveal><p className="eyebrow">About Shavim Photography</p><h1 className="h1 mt-4">Behind the lens</h1>
   <p className="mt-8 text-lg text-ivory/85">Photography is more than capturing an image. It is about preserving emotions, documenting stories, and creating visual experiences that remain timeless.</p>
   <p className="mt-5 text-mist">Based in Arusha, Tanzania, Shavim Photography explores the beauty of wildlife, the energy of corporate environments, and the creativity of fashion through a distinctive photographic perspective.</p></Reveal></div>
 <div className="mt-24 grid gap-12 md:grid-cols-3">{[['Philosophy','[Edit: describe your photography philosophy in your own words.]'],['Creative approach','[Edit: describe how you plan, direct and shoot an assignment.]'],['Experience & specialization','Wildlife and nature · Corporate and commercial · Fashion and editorial. [Edit: add your experience details.]']].map(([t,p])=><Reveal key={t}><h2 className="font-serif text-3xl text-gold">{t}</h2><p className="mt-4 text-mist">{p}</p></Reveal>)}</div>
 <p className="mt-20 text-mist">Based in Arusha, Tanzania · Available throughout Tanzania and internationally.</p><div className="mt-8"><CTA/></div></div>}

export const Portfolio=()=><div className="mx-auto max-w-7xl px-6 pb-24 pt-40"><p className="eyebrow">Portfolio</p><h1 className="h1 mt-4 mb-14">Selected photography</h1><Gallery items={IMAGES}/></div>;

export function Collection({id}){const c=COLLECTIONS[id];const items=IMAGES.filter(i=>i.category===id);return <>
 <section className="relative flex min-h-[85vh] items-end"><Photo file={first(id)?.file} alt={first(id)?.alt||c.eyebrow} eager className="absolute inset-0"/><div className="absolute inset-0 bg-gradient-to-t from-char via-char/30 to-transparent"/>
  <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-40"><p className="eyebrow">{c.eyebrow}</p><h1 className="h1 mt-4 max-w-4xl">{c.title}</h1><p className="mt-6 max-w-xl text-lg text-ivory/80">{c.desc}</p></div></section>
 <section className="mx-auto max-w-7xl px-6 py-24"><div className="mb-20 grid gap-x-10 gap-y-3 border-y border-white/10 py-8 font-serif text-2xl md:grid-cols-2">{c.themes.map(t=><Reveal key={t}><p>{t}</p></Reveal>)}</div><Gallery items={items} filters={false}/>
  <div className="mt-16 text-center"><CTA to={'/services?service='+encodeURIComponent(c.service)}>{c.cta}</CTA></div></section></>}

export function Services({service}){return <div className="mx-auto max-w-7xl px-6 pb-24 pt-40"><p className="eyebrow">Services</p><h1 className="h1 mt-4">Photography, tailored to your story</h1>
 <p className="mt-6 max-w-2xl text-mist">Every assignment is unique. Share your project and receive a customised quotation.</p>
 <div className="mt-16 grid gap-6 md:grid-cols-3">{SERVICES.map(s=><Reveal key={s.name}><div className="h-full border border-white/10 p-8"><h2 className="font-serif text-3xl">{s.name}</h2><p className="mt-4 text-mist">{s.desc}</p>
  <h3 className="eyebrow mt-8">Assignments</h3><ul className="mt-2 space-y-1 text-sm text-ivory/80">{s.types.map(t=><li key={t}>{t}</li>)}</ul>
  <h3 className="eyebrow mt-6">You receive</h3><ul className="mt-2 space-y-1 text-sm text-ivory/80">{s.gets.map(t=><li key={t}>{t}</li>)}</ul>
  <Link to={'/services?service='+encodeURIComponent(s.name)+'#book'} className="btn btn-line mt-8">Inquire</Link></div></Reveal>)}</div>
 <section id="book" className="mt-28 max-w-4xl"><h2 className="h2 mb-10">Request a quotation</h2><BookingForm key={service} service={service}/></section></div>}

export const Contact=()=><div className="mx-auto max-w-4xl px-6 pb-24 pt-40"><p className="eyebrow">Contact</p><h1 className="h1 mt-4">Let’s create something timeless</h1>
 <p className="mt-6 text-mist">Based in Arusha, Tanzania. Serving clients throughout Tanzania and internationally.</p>
 <div className="mt-6 flex flex-wrap gap-6 text-gold">{SITE.whatsapp&&<a href={`https://wa.me/${SITE.whatsapp}`} rel="noopener">WhatsApp</a>}{SITE.email&&<a href={`mailto:${SITE.email}`}>{SITE.email}</a>}</div>
 <div className="mt-14"><BookingForm/></div></div>;
