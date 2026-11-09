import {useEffect,useState} from 'react';
import {Navbar,Footer,BackToTop} from './components.jsx';
import {Home,About,Portfolio,Collection,Services,Contact} from './pages.jsx';
import {SITE,COLLECTIONS} from './data/site.js';
const BASE=import.meta.env.BASE_URL.replace(/\/$/,'');
const read=()=>({path:(location.pathname.slice(BASE.length).replace(/\/$/,'')||'/'),q:new URLSearchParams(location.search)});
const SEO={'/':['Shavim Photography | Professional Photographer in Arusha, Tanzania','Discover Shavim Photography, professional photography brand based in Arusha, Tanzania, specializing in wildlife, corporate events, fashion, and editorial photography.'],
'/about':['About | Photographer in Arusha, Tanzania | Shavim Photography','Behind the lens at Shavim Photography: a professional photographer in Arusha, Tanzania.'],
'/portfolio':['Portfolio | Event & Commercial Photography Tanzania | Shavim Photography','Selected wildlife, corporate, fashion, portrait, editorial and wedding photography by Shavim Photography.'],
'/services':['Services & Booking | Event Photographer Arusha | Shavim Photography','Corporate, wildlife and fashion photography services in Arusha and across Tanzania. Request a custom quotation.'],
'/contact':['Contact | Professional Photographer in Arusha | Shavim Photography','Book Shavim Photography for your next assignment in Tanzania or internationally.']};
Object.entries(COLLECTIONS).forEach(([k,c])=>SEO['/'+k]=[c.seo,c.desc]);
const meta=(sel,attr,val)=>{let e=document.querySelector(sel);if(!e){e=document.createElement(sel.startsWith('link')?'link':'meta');document.head.appendChild(e)}
 sel.startsWith('link')?(e.rel='canonical',e.href=val):(e.setAttribute(attr[0],attr[1]),e.content=val)};
export default function App(){
 const [r,setR]=useState(read);
 useEffect(()=>{const f=()=>setR(read());addEventListener('nav',f);addEventListener('popstate',f);return()=>{removeEventListener('nav',f);removeEventListener('popstate',f)}},[]);
 const {path,q}=r;const [t,d]=SEO[path]||['Page not found | Shavim Photography','This page could not be found.'];
 useEffect(()=>{document.title=t;meta('meta[name=description]',['name','description'],d);meta('meta[property="og:title"]',['property','og:title'],t);meta('meta[property="og:description"]',['property','og:description'],d);meta('link[rel=canonical]',null,SITE.url+(path==='/'?'/':path))},[t,d,path]);
 let page;
 if(path==='/')page=<Home/>;else if(path==='/about')page=<About/>;else if(path==='/portfolio')page=<Portfolio/>;
 else if(COLLECTIONS[path.slice(1)])page=<Collection id={path.slice(1)}/>;
 else if(path==='/services')page=<Services service={q.get('service')||''}/>;else if(path==='/contact')page=<Contact/>;
 else page=<div className="px-6 pb-24 pt-48 text-center"><h1 className="h1">Page not found</h1><a href={BASE+'/'} className="btn btn-solid mt-10">Back home</a></div>;
 return <><a href="#main" className="sr-only focus:not-sr-only">Skip to content</a><Navbar path={path}/><main id="main" key={path} className="page min-h-screen">{page}</main><Footer/><BackToTop/></>}
