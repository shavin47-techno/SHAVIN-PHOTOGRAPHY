// ===== EDIT ME =====
export const SITE={
  name:'Shavim Photography',
  url:'https://YOURUSERNAME.github.io',
  formEndpoint:'',   // Paste your Formspree/Web3Forms endpoint, e.g. https://formspree.io/f/xxxxxx
  whatsapp:'',       // e.g. 255700000000 (no + or spaces)
  email:'',
  instagram:'',      // full URL
};
// ===== IMAGES =====
// Put files in /public/images/ and add one line per photo. Delete a line to remove a photo; reorder lines to reorder.
// category: wildlife|corporate|fashion|portraits|editorial|weddings   featured:true shows it on the homepage
export const IMAGES=[
 {file:'wildlife-elephant-serengeti.jpg',category:'wildlife',title:'Elephant, Serengeti',alt:'African elephant walking across the Serengeti plains, Tanzania',featured:true},
 {file:'wildlife-lion-ngorongoro.jpg',category:'wildlife',title:'Lion, Ngorongoro',alt:'Lion resting in Ngorongoro Crater, Tanzania'},
 {file:'wildlife-giraffe-plains.jpg',category:'wildlife',title:'Giraffes at Dusk',alt:'Giraffes on the plains of Tanzania at dusk'},
 {file:'corporate-team-portrait-arusha.jpg',category:'corporate',title:'Team Portrait',alt:'Corporate team portrait photographed in Arusha',featured:true},
 {file:'corporate-event-tanzania.jpg',category:'corporate',title:'Conference Moment',alt:'Corporate event photography in Tanzania'},
 {file:'fashion-editorial-arusha.jpg',category:'fashion',title:'Editorial Study',alt:'Fashion editorial photograph shot in Arusha',featured:true},
 {file:'fashion-campaign-detail.jpg',category:'fashion',title:'Campaign Detail',alt:'Fashion campaign detail photograph'},
 {file:'portrait-studio-arusha.jpg',category:'portraits',title:'Studio Portrait',alt:'Studio portrait by Shavim Photography'},
 {file:'editorial-story-tanzania.jpg',category:'editorial',title:'Editorial Story',alt:'Editorial photograph from Tanzania'},
 {file:'wedding-ceremony-arusha.jpg',category:'weddings',title:'The Ceremony',alt:'Wedding ceremony photographed in Arusha'},
];
export const CATEGORIES=['all','wildlife','corporate','fashion','portraits','editorial','weddings'];
export const COLLECTIONS={
 wildlife:{eyebrow:'Wildlife & Nature',title:'Wild Africa Through My Lens',card:'Wild & Nature',
  desc:'Serengeti, Ngorongoro and the wild heart of Tanzania, presented as fine art.',
  themes:['Serengeti Wildlife Collection','Ngorongoro Landscape and Wildlife','African Elephants','Lions and Other Predators','Giraffes and Plains Wildlife','Wildlife Conservation Stories','Fine Art Print Collections'],
  cta:'Inquire about wildlife & safari assignments',service:'Wildlife & Nature Photography',
  seo:'Wildlife Photographer Tanzania | Safari Photographer | Shavim Photography'},
 corporate:{eyebrow:'Corporate & Commercial',title:'Precision, Presence, Brand',card:'Corporate & Commercial',
  desc:'Executive portraits, events and commercial imagery that make your brand look as good as it works.',
  themes:['Executive & Team Portraits','Corporate Events & Conferences','Brand & Commercial Campaigns','Tourism & Hospitality','Workplace Photography'],
  cta:'Inquire about corporate assignments',service:'Corporate & Commercial Photography',
  seo:'Corporate Photographer Tanzania | Commercial Photography | Shavim Photography'},
 fashion:{eyebrow:'Fashion & Editorial',title:'Style, Story, Silhouette',card:'Fashion & Editorial',
  desc:'Editorial and campaign photography with a distinctive creative perspective.',
  themes:['Editorial Shoots','Brand Lookbooks & Campaigns','Designer & Model Portfolios','Location Shoots in Arusha','Creative Direction'],
  cta:'Inquire about fashion shoots',service:'Fashion & Editorial Photography',
  seo:'Fashion Photographer Arusha | Editorial Photography | Shavim Photography'},
};
export const SERVICES=[
 {name:'Corporate & Commercial Photography',desc:'Polished imagery for businesses, tourism brands and organisations.',types:['Executive portraits','Corporate events','Brand campaigns','Hospitality & tourism'],gets:['Edited high-resolution images','Online delivery gallery','Usage guidance']},
 {name:'Wildlife & Nature Photography',desc:'Safari and conservation photography for operators, publishers and collectors.',types:['Safari assignments','Conservation stories','Editorial wildlife','Fine art prints'],gets:['Curated selects','Print-ready files','Usage guidance']},
 {name:'Fashion & Editorial Photography',desc:'Creative, story-led shoots for designers, models and publications.',types:['Editorial shoots','Lookbooks','Model portfolios','Campaigns'],gets:['Retouched hero images','Online gallery','Usage guidance']},
];
export const SERVICE_OPTIONS=[...SERVICES.map(s=>s.name),'Event Photography','Portraits','Other'];
// ===== TESTIMONIALS =====
// Replace the placeholders with REAL client feedback (with permission). Delete a block to remove it.
export const TESTIMONIALS=[
 {quote:'[Edit: paste a real client testimonial here.]',name:'[Client name]',role:'[Company or role]'},
 {quote:'[Edit: paste a second real client testimonial here.]',name:'[Client name]',role:'[Company or role]'},
 {quote:'[Edit: paste a third real client testimonial here.]',name:'[Client name]',role:'[Company or role]'},
];
