import {useEffect,useRef,useState} from 'react';
import {SITE,IMAGES,CATEGORIES} from './data/site.js';
const BASE=import.meta.env.BASE_URL;
export const imgUrl=f=>`${BASE}images/${f}`;
export const go=to=>{history.pushState({},'',BASE.replace(/\/$/,'')+to);window.dispatchEvent(new Event('nav'));window.scrollTo(0,0)};
export const Link=({to,children,className='',...p})=>(
 <a href={BASE.replace(/\/$/,'')+to} className={className} {...p} onClick={e=>{if(e.metaKey||e.ctrlKey)return;e.preventDefault();go(to)}}>{children}</a>);

export function Reveal({children,className=''}){
 const r=useRef();const [on,set]=useState(false);
 useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){set(true);o.disconnect()}},{threshold:.12});o.observe(r.current);return()=>o.disconnect()},[]);
 return <div ref={r} className={`reveal ${on?'in':''} ${className}`}>{children}</div>}

// Photo with graceful placeholder if the file hasn't been added yet
export function Photo({file,alt,className='',eager}){
 const [bad,setBad]=useState(false);
 return <div className={`ph relative overflow-hidden ${className}`}>{!bad&&file&&<img src={imgUrl(file)} alt={alt} loading={eager?'eager':'lazy'} decoding="async" onError={()=>setBad(true)} className="absolute inset-0 h-full w-full object-cover"/>}</div>}

const NAV=[['/','Home'],['/about','About'],['/portfolio','Portfolio'],['/wildlife','Wildlife'],['/corporate','Corporate'],['/fashion','Fashion'],['/services','Services'],['/contact','Contact']];
export function Navbar({path}){
 const [open,setOpen]=useState(false);const [solid,setSolid]=useState(false);
 useEffect(()=>{const f=()=>setSolid(scrollY>40);f();addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[]);
 useEffect(()=>setOpen(false),[path]);
 return <header className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${solid||open?'bg-char/95 backdrop-blur':''}`}>
  <nav aria-label="Main" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
   <Link to="/" className="font-serif text-2xl tracking-wide">Shavim <span className="text-gold">Photography</span></Link>
   <ul className="hidden gap-8 text-xs uppercase tracking-[.2em] lg:flex">{NAV.map(([t,l])=><li key={t}><Link to={t} className={`nav-link ${path===t?'active':''}`}>{l}</Link></li>)}</ul>
   <button className="lg:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={()=>setOpen(!open)}><span className="block h-px w-7 bg-ivory mb-2"/><span className="block h-px w-7 bg-ivory"/></button>
  </nav>
  {open&&<ul className="space-y-5 px-6 pb-8 text-sm uppercase tracking-[.2em] lg:hidden">{NAV.map(([t,l])=><li key={t}><Link to={t} className={path===t?'text-gold':''}>{l}</Link></li>)}</ul>}
 </header>}

export function Footer(){return <footer className="border-t border-white/10 px-6 py-14 text-sm text-mist"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
 <div><p className="font-serif text-2xl text-ivory">Shavim Photography</p><p className="mt-3">Professional photographer in Arusha, Tanzania. Available across Tanzania and internationally.</p></div>
 <ul className="space-y-2">{NAV.map(([t,l])=><li key={t}><Link to={t} className="hover:text-gold">{l}</Link></li>)}</ul>
 <div className="space-y-2"><p>Arusha, Tanzania</p>{SITE.email&&<p>{SITE.email}</p>}{SITE.instagram&&<a className="text-gold" href={SITE.instagram} rel="noopener">Instagram</a>}<p className="pt-6 text-xs">© {new Date().getFullYear()} Shavim Photography</p></div></div></footer>}

export function BackToTop(){const [s,set]=useState(false);
 useEffect(()=>{const f=()=>set(scrollY>600);addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[]);
 return s?<button aria-label="Back to top" onClick={()=>scrollTo({top:0,behavior:'smooth'})} className="fixed bottom-6 right-6 z-30 h-11 w-11 border border-gold bg-char text-gold hover:bg-gold hover:text-char">↑</button>:null}

export function Gallery({items,filters=true}){
 const [cat,setCat]=useState('all');const [i,setI]=useState(null);
 const list=items.filter(x=>cat==='all'||x.category===cat);
 useEffect(()=>{if(i===null)return;const k=e=>{if(e.key==='Escape')setI(null);if(e.key==='ArrowRight')setI(v=>(v+1)%list.length);if(e.key==='ArrowLeft')setI(v=>(v-1+list.length)%list.length)};addEventListener('keydown',k);document.body.style.overflow='hidden';return()=>{removeEventListener('keydown',k);document.body.style.overflow=''}},[i,list.length]);
 return <div>
  {filters&&<div className="mb-10 flex flex-wrap gap-x-6 gap-y-3 text-xs uppercase tracking-[.2em]" role="tablist">{CATEGORIES.map(c=><button key={c} onClick={()=>setCat(c)} className={`nav-link ${cat===c?'active text-gold':'text-mist'}`}>{c==='all'?'All Work':c}</button>)}</div>}
  <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">{list.map((x,n)=><button key={x.file} onClick={()=>setI(n)} className="zoom group relative mb-4 block w-full break-inside-avoid text-left">
   <Photo file={x.file} alt={x.alt} className={n%3===0?'aspect-[4/5]':'aspect-[4/3]'}/><span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 p-4 text-sm opacity-0 transition-opacity group-hover:opacity-100">{x.title}</span></button>)}</div>
  {!list.length&&<p className="text-mist">No images in this category yet.</p>}
  {i!==null&&list[i]&&<div role="dialog" aria-modal="true" aria-label="Image viewer" className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4" onClick={()=>setI(null)}>
   <button aria-label="Close" className="absolute right-5 top-4 text-3xl" onClick={()=>setI(null)}>×</button>
   <button aria-label="Previous" className="absolute left-4 text-4xl" onClick={e=>{e.stopPropagation();setI((i-1+list.length)%list.length)}}>‹</button>
   <figure onClick={e=>e.stopPropagation()} className="max-h-full"><img src={imgUrl(list[i].file)} alt={list[i].alt} onError={e=>e.target.style.display='none'} className="max-h-[80vh] max-w-full object-contain"/><figcaption className="mt-3 text-center text-sm text-mist">{list[i].title}</figcaption></figure>
   <button aria-label="Next" className="absolute right-4 text-4xl" onClick={e=>{e.stopPropagation();setI((i+1)%list.length)}}>›</button></div>}
 </div>}

export function BookingForm({service=''}){
 const [st,setSt]=useState('idle');
 const submit=async e=>{e.preventDefault();
  if(!SITE.formEndpoint){setSt('unconfigured');return}
  setSt('sending');
  try{const r=await fetch(SITE.formEndpoint,{method:'POST',headers:{Accept:'application/json'},body:new FormData(e.target)});setSt(r.ok?'ok':'error')}catch{setSt('error')}};
 if(st==='ok')return <div role="status" className="border border-gold p-10 text-center"><p className="h2">Thank you.</p><p className="mt-4 text-mist">Your inquiry has been received. Shavim Photography will respond with a customised quotation shortly.</p></div>;
 const f="w-full border-b border-white/25 bg-transparent py-3 text-ivory outline-none focus:border-gold placeholder:text-mist/60";
 return <form onSubmit={submit} className="grid gap-6 md:grid-cols-2">
  {[['name','Full name','text',1],['email','Email address','email',1],['whatsapp','WhatsApp number','tel',1],['company','Company / organization (optional)','text',0]].map(([n,l,t,r])=><label key={n} className="text-xs uppercase tracking-widest text-mist">{l}<input name={n} type={t} required={!!r} className={f}/></label>)}
  <label className="text-xs uppercase tracking-widest text-mist">Photography service<select name="service" required defaultValue={service} className={f+' bg-char'}><option value="" disabled>Select…</option>{[...new Set([service,...['Corporate & Commercial Photography','Wildlife & Nature Photography','Fashion & Editorial Photography','Event Photography','Portraits','Other']])].filter(Boolean).map(o=><option key={o}>{o}</option>)}</select></label>
  <label className="text-xs uppercase tracking-widest text-mist">Event / shoot date<input name="date" type="date" className={f}/></label>
  <label className="text-xs uppercase tracking-widest text-mist">Location<input name="location" className={f}/></label>
  <label className="text-xs uppercase tracking-widest text-mist">Budget range<input name="budget" placeholder="e.g. your estimated range" className={f}/></label>
  <label className="text-xs uppercase tracking-widest text-mist md:col-span-2">Project description<textarea name="message" rows="4" required className={f}/></label>
  <div className="md:col-span-2"><button disabled={st==='sending'} className="btn btn-solid">{st==='sending'?'Sending…':'Request a quotation'}</button>
   {st==='unconfigured'&&<p role="alert" className="mt-4 text-sm text-gold">This form isn’t connected yet. Add your form endpoint in src/data/site.js.</p>}
   {st==='error'&&<p role="alert" className="mt-4 text-sm text-gold">Something went wrong. Please try again or contact us via WhatsApp.</p>}</div></form>}

import {TESTIMONIALS} from './data/site.js';
export function Testimonials(){
 if(!TESTIMONIALS.length)return null;
 return <section aria-labelledby="t-h" className="border-y border-white/10 px-6 py-28"><div className="mx-auto max-w-7xl">
  <Reveal><p className="eyebrow">Kind words</p><h2 id="t-h" className="h2 mt-4 mb-14">Client testimonials</h2></Reveal>
  <div className="grid gap-10 md:grid-cols-3">{TESTIMONIALS.map((t,i)=><Reveal key={i}><figure className="h-full border-l border-gold pl-6">
   <blockquote className="font-serif text-2xl leading-snug text-ivory/90">“{t.quote}”</blockquote>
   <figcaption className="mt-6 text-sm text-mist"><span className="text-ivory">{t.name}</span><br/>{t.role}</figcaption></figure></Reveal>)}</div></div></section>}
