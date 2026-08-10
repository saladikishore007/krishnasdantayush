import { createFileRoute } from "@tanstack/react-router";
const logoImg = "/images/logo.png";
const case1Before = "/images/case1-before.png";
const case1After = "/images/case1-after.png";
const case2Before = "/images/case2-before.png";
const case2After = "/images/case2-after.png";
const drMonikaImg = "/images/dr-monica.png";
const drGuruImg = "/images/dr-guru.png";
const cert1 = "/images/cert-1.png";
const cert2 = "/images/cert-2.png";
const cert3 = "/images/cert-3.png";
const cert4 = "/images/cert-4.png";


const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Best Dental Clinic in Madhapur, Hyderabad | Krishna's Dant Ayush</title>
<meta name="description" content="Krishna's Dant Ayush — top-rated family dental clinic in Madhapur, Hyderabad. Root canal, implants, braces, teeth whitening, kids dentistry & more. Book on WhatsApp: +91 70133 38012." />
<meta name="keywords" content="dental clinic Madhapur, dentist Hyderabad, best dentist Madhapur, root canal Madhapur, dental implants Hyderabad, teeth whitening Madhapur, kids dentist Hyderabad, orthodontist Madhapur, Tulasi Nagar dentist, Krishna's Dant Ayush" />
<meta name="author" content="Krishna's Dant Ayush" />
<meta name="robots" content="index, follow, max-image-preview:large" />
<link rel="canonical" href="https://krishnasdantayush.lovable.app/" />
<meta name="geo.region" content="IN-TG" />
<meta name="geo.placename" content="Madhapur, Hyderabad" />
<meta name="geo.position" content="17.4483;78.3915" />
<meta name="ICBM" content="17.4483, 78.3915" />
<meta property="og:title" content="Krishna's Dant Ayush — Best Dental Clinic in Madhapur, Hyderabad" />
<meta property="og:description" content="Gentle, modern dental care in Madhapur. Root canals, implants, braces, kids dentistry. Book on WhatsApp: +91 70133 38012." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://krishnasdantayush.lovable.app/" />
<meta property="og:locale" content="en_IN" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Krishna's Dant Ayush — Dental Clinic in Madhapur" />
<meta name="twitter:description" content="Trusted family dentist in Madhapur, Hyderabad. Book on WhatsApp." />
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Krishna's Dant Ayush",
  "image": "https://krishnasdantayush.lovable.app/og.jpg",
  "url": "https://krishnasdantayush.lovable.app/",
  "telephone": "+917013338012",
  "priceRange": "₹₹",
  "description": "Family dental clinic in Madhapur, Hyderabad offering root canal, dental implants, braces, teeth whitening, kids dentistry, oral surgery and periodontics.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Parvatha Nagar Temple Road, Tulasi Nagar, Madhapur",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "500081",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 17.4483,
    "longitude": 78.3915
  },
  "hasMap": "https://maps.app.goo.gl/sDeJqhEZEUfAokdV8",
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "10:30",
    "closes": "20:30"
  }],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150"
  },
  "areaServed": [
    {"@type":"Place","name":"Madhapur"},
    {"@type":"Place","name":"HITEC City"},
    {"@type":"Place","name":"Kondapur"},
    {"@type":"Place","name":"Gachibowli"},
    {"@type":"Place","name":"Jubilee Hills"},
    {"@type":"Place","name":"Hyderabad"}
  ],
  "medicalSpecialty": ["Dentistry","Periodontics","OralAndMaxillofacialSurgery"],
  "sameAs": ["https://maps.app.goo.gl/sDeJqhEZEUfAokdV8"]
}
</script>
<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"WebSite",
  "name":"Krishna's Dant Ayush",
  "url":"https://krishnasdantayush.lovable.app/"
}
</script>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
<style>
:root{
  --bg:#fbfaf7;
  --surface:#ffffff;
  --ink:#0d2b2e;
  --ink-soft:#3f5a5d;
  --muted:#6b7f82;
  --line:#e8eae4;
  --primary:#0f3d3e;      /* deep teal */
  --primary-2:#1a5d5e;
  --primary-ink:#ffffff;
  --gold:#c9a24b;         /* warm gold */
  --mint:#cfe6d9;         /* soft mint */
  --shadow-sm:0 2px 8px rgba(13,43,46,.05);
  --shadow-md:0 10px 30px -12px rgba(13,43,46,.15);
  --shadow-lg:0 30px 60px -25px rgba(13,43,46,.22);
  --radius:18px;
  --radius-sm:12px;
  --maxw:1180px;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{
  font-family:'Inter',system-ui,-apple-system,sans-serif;
  background:var(--bg);
  color:var(--ink);
  line-height:1.6;
  -webkit-font-smoothing:antialiased;
  overflow-x:hidden;
}
h1,h2,h3,h4{font-family:'Outfit',sans-serif;color:var(--ink);letter-spacing:-.02em;line-height:1.15}
h1{font-size:clamp(2.2rem,5vw,3.6rem);font-weight:700}
h2{font-size:clamp(1.7rem,3.6vw,2.5rem);font-weight:700}
h3{font-size:1.15rem;font-weight:600}
p{color:var(--ink-soft)}
a{color:inherit;text-decoration:none}
img{max-width:100%;display:block}
.container{max-width:var(--maxw);margin:0 auto;padding:0 22px}
.section{padding:88px 0;position:relative}
.eyebrow{display:inline-block;font-size:.78rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--primary-2);background:var(--mint);padding:6px 12px;border-radius:999px;margin-bottom:16px}
.section-head{max-width:680px;margin-bottom:48px}
.section-head p{margin-top:12px;font-size:1.05rem}
.center{text-align:center;margin-left:auto;margin-right:auto}

/* Buttons */
.btn{display:inline-flex;align-items:center;gap:8px;padding:14px 22px;border-radius:999px;font-weight:600;font-size:.95rem;border:1px solid transparent;cursor:pointer;transition:transform .2s ease,box-shadow .2s ease,background .2s ease;font-family:inherit}
.btn-primary{background:var(--primary);color:var(--primary-ink);box-shadow:var(--shadow-md)}
.btn-primary:hover{transform:translateY(-2px);background:var(--primary-2);box-shadow:var(--shadow-lg)}
.btn-secondary{background:transparent;color:var(--primary);border-color:var(--primary)}
.btn-secondary:hover{background:var(--primary);color:#fff}
.btn-gold{background:var(--gold);color:#1a1a1a}
.btn-gold:hover{transform:translateY(-2px);filter:brightness(1.05)}
.btn svg{width:18px;height:18px}

/* Header */
.header{position:sticky;top:0;z-index:100;background:rgba(251,250,247,.85);backdrop-filter:saturate(180%) blur(12px);border-bottom:1px solid transparent;transition:border-color .3s,box-shadow .3s}
.header.scrolled{border-color:var(--line);box-shadow:var(--shadow-sm)}
.nav{display:flex;align-items:center;justify-content:space-between;padding:16px 0;gap:18px}
.brand{display:flex;align-items:center;gap:10px;font-family:'Outfit',sans-serif;font-weight:700;color:var(--primary);font-size:1.1rem;line-height:1.1}
.brand-mark{width:38px;height:38px;border-radius:12px;background:linear-gradient(135deg,var(--primary),var(--primary-2));display:grid;place-items:center;color:#fff;font-weight:700;font-family:'Outfit';box-shadow:var(--shadow-sm)}
.brand-mark svg{width:22px;height:22px}
.brand-logo{width:38px;height:38px;object-fit:contain;background:none;border:0;display:block;flex-shrink:0}
.brand small{display:block;font-size:.7rem;color:var(--muted);font-weight:500;letter-spacing:.1em;text-transform:uppercase}
.nav-links{display:flex;align-items:center;gap:28px}
.nav-links a{font-size:.95rem;color:var(--ink);font-weight:500;position:relative;padding:6px 0}
.nav-links a::after{content:"";position:absolute;left:0;bottom:0;width:100%;height:2px;background:var(--gold);transform:scaleX(0);transform-origin:right;transition:transform .3s}
.nav-links a:hover::after{transform:scaleX(1);transform-origin:left}
.nav-cta{display:flex;align-items:center;gap:10px}
.icon-call{width:42px;height:42px;border-radius:50%;display:grid;place-items:center;border:1px solid var(--line);background:#fff;color:var(--primary);transition:all .2s}
.icon-call:hover{background:var(--primary);color:#fff;transform:translateY(-1px)}
.icon-call svg{width:18px;height:18px}
.hamburger{display:none;background:none;border:none;width:42px;height:42px;cursor:pointer;color:var(--ink)}
.hamburger svg{width:24px;height:24px}
.mobile-menu{display:none;position:fixed;top:68px;left:0;right:0;bottom:0;background:var(--bg);padding:20px 22px calc(120px + env(safe-area-inset-bottom,0px));flex-direction:column;gap:8px;z-index:99;overflow-y:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain}
.mobile-menu.open{display:flex;animation:fadeIn .25s ease}
.mobile-menu a{padding:14px 18px;border-radius:12px;background:#fff;font-weight:500;border:1px solid var(--line);font-size:.98rem}
.mobile-menu .btn{margin-top:10px;justify-content:center}

@keyframes fadeIn{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}

/* Hero */
.hero{padding:60px 0 100px;position:relative;overflow:hidden}
.hero::before{content:"";position:absolute;top:-20%;right:-10%;width:600px;height:600px;background:radial-gradient(circle,rgba(207,230,217,.6),transparent 70%);z-index:0}
.hero::after{content:"";position:absolute;bottom:-20%;left:-10%;width:500px;height:500px;background:radial-gradient(circle,rgba(201,162,75,.15),transparent 70%);z-index:0}
.hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:60px;align-items:center;position:relative;z-index:1}
.hero-copy .eyebrow{margin-bottom:20px}
.hero-copy h1{margin-bottom:20px}
.hero-copy h1 .accent{background:linear-gradient(120deg,var(--primary) 0%,var(--gold) 100%);-webkit-background-clip:text;background-clip:text;color:transparent}
.hero-copy .lead{font-size:1.15rem;color:var(--ink-soft);margin-bottom:14px;max-width:520px}
.hero-copy .trust{display:inline-flex;align-items:center;gap:8px;font-size:.9rem;color:var(--primary);font-weight:500;margin-bottom:28px}
.hero-copy .trust svg{width:18px;height:18px;color:var(--gold)}
.hero-ctas{display:flex;gap:12px;flex-wrap:wrap}
.hero-visual{position:relative}
.hero-image{position:relative;border-radius:28px;overflow:hidden;box-shadow:var(--shadow-lg);aspect-ratio:4/5;background:linear-gradient(160deg,#e8f0ec 0%,#f6f2e8 100%);will-change:transform}
.hero-image svg{width:100%;height:100%;display:block}
.hero-badge{position:absolute;background:#fff;padding:14px 18px;border-radius:16px;box-shadow:var(--shadow-md);display:flex;align-items:center;gap:12px;font-size:.85rem}
.hero-badge-1{bottom:24px;left:-20px;animation:float 6s ease-in-out infinite}
.hero-badge-2{top:32px;right:-20px;animation:float 6s ease-in-out infinite 3s}
.hero-badge .dot{width:36px;height:36px;border-radius:50%;background:var(--mint);display:grid;place-items:center;color:var(--primary)}
.hero-badge .dot svg{width:18px;height:18px}
.hero-badge strong{display:block;color:var(--ink);font-weight:600}
.hero-badge span{color:var(--muted);font-size:.78rem}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}

/* Trust bar */
.trust-bar{background:var(--primary);color:#fff;padding:56px 0;border-radius:24px;margin:0 22px;box-shadow:var(--shadow-lg)}
.trust-inner{max-width:var(--maxw);margin:0 auto;padding:0 22px;display:grid;grid-template-columns:repeat(4,1fr);gap:24px}
.stat{text-align:center}
.stat .num{font-family:'Outfit',sans-serif;font-size:clamp(2rem,4vw,2.8rem);font-weight:700;color:var(--gold);line-height:1;display:block}
.stat .label{margin-top:8px;font-size:.9rem;color:rgba(255,255,255,.75);font-weight:500}

/* About */
.about{background:var(--bg)}
.about-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:56px;align-items:center}
.about-visual{position:relative;aspect-ratio:1/1.15;border-radius:24px;overflow:hidden;box-shadow:var(--shadow-md);background:linear-gradient(160deg,#e0ece7 0%,#f4ecd8 100%)}
.about-visual svg{width:100%;height:100%}
.about-copy p{margin-bottom:16px;font-size:1.02rem}
.values{display:flex;gap:12px;flex-wrap:wrap;margin-top:20px}
.value{display:inline-flex;align-items:center;gap:8px;padding:8px 14px;background:#fff;border:1px solid var(--line);border-radius:999px;font-size:.85rem;font-weight:500;color:var(--primary)}
.value svg{width:16px;height:16px;color:var(--gold)}

/* Doctors */
.doctors{margin-top:64px}
.doctors-head{max-width:680px;margin-bottom:28px}
.doctors-head h3{font-family:'Outfit',sans-serif;font-size:1.6rem;font-weight:700;color:var(--ink);margin-bottom:8px;letter-spacing:-.01em}
.doctors-head p{font-size:1rem}
.doctors-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:22px}
.doctor-card{background:#fff;border:1px solid var(--line);border-radius:var(--radius);padding:22px;display:flex;gap:20px;align-items:center;box-shadow:var(--shadow-sm);transition:transform .3s ease,box-shadow .3s ease,border-color .3s}
.doctor-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-md);border-color:transparent}
.doctor-photo{width:120px;height:120px;border-radius:20px;object-fit:cover;flex-shrink:0;background:var(--mint);border:2px solid #fff;box-shadow:var(--shadow-sm)}
.doctor-info{min-width:0}
.doctor-info h4{font-family:'Outfit',sans-serif;font-size:1.15rem;font-weight:700;color:var(--ink);margin-bottom:4px;line-height:1.2}
.doctor-quals{font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;color:var(--gold);font-weight:700;margin-bottom:6px}
.doctor-spec{font-size:.92rem;color:var(--ink-soft)}

/* Services */
.services-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px}
.service-card{background:#fff;padding:28px 24px;border-radius:var(--radius);border:1px solid var(--line);transition:transform .3s ease,box-shadow .3s ease,border-color .3s;cursor:default}
.service-card:hover{transform:translateY(-6px);box-shadow:var(--shadow-md);border-color:transparent}
.service-icon{width:52px;height:52px;border-radius:14px;background:var(--mint);display:grid;place-items:center;color:var(--primary);margin-bottom:18px;transition:background .3s}
.service-card:hover .service-icon{background:var(--primary);color:#fff}
.service-icon svg{width:26px;height:26px}
.service-card h3{margin-bottom:8px}
.service-card p{font-size:.92rem}

/* Why */
.why{background:linear-gradient(180deg,var(--bg) 0%,#f3ede0 100%)}
.why-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px}
.why-card{background:#fff;padding:32px 26px;border-radius:var(--radius);text-align:left;border:1px solid var(--line)}
.why-card .num{font-family:'Outfit';font-size:2rem;color:var(--gold);font-weight:700;display:block;margin-bottom:10px}

/* Booking */
.booking{background:var(--primary);color:#fff;border-radius:32px;margin:0 22px;padding:64px 22px;position:relative;overflow:hidden}
.booking::before{content:"";position:absolute;top:-40%;right:-10%;width:500px;height:500px;background:radial-gradient(circle,rgba(201,162,75,.2),transparent 70%)}
.booking-inner{max-width:var(--maxw);margin:0 auto;display:grid;grid-template-columns:1fr 1.1fr;gap:56px;align-items:center;position:relative;z-index:1}
.booking h2,.booking p{color:#fff}
.booking p{color:rgba(255,255,255,.8);margin-bottom:24px}
.booking .eyebrow{background:rgba(255,255,255,.15);color:var(--gold)}
.booking-info li{list-style:none;display:flex;align-items:center;gap:10px;margin-bottom:12px;color:rgba(255,255,255,.9);font-size:.95rem}
.booking-info svg{width:20px;height:20px;color:var(--gold);flex-shrink:0}
.booking-form{background:#fff;color:var(--ink);padding:32px;border-radius:20px;box-shadow:var(--shadow-lg)}
.booking-form h3{font-size:1.3rem;margin-bottom:6px}
.booking-form .sub{color:var(--muted);font-size:.9rem;margin-bottom:20px}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px}
.field{display:flex;flex-direction:column;gap:6px;margin-bottom:12px}
.field label{font-size:.82rem;font-weight:500;color:var(--ink)}
.field input,.field select,.field textarea{padding:12px 14px;border:1px solid var(--line);border-radius:10px;font-family:inherit;font-size:.95rem;background:#fbfaf7;transition:border-color .2s,background .2s;color:var(--ink)}
.field input:focus,.field select:focus,.field textarea:focus{outline:none;border-color:var(--primary);background:#fff}
.field textarea{resize:vertical;min-height:80px}
.booking-form .btn{width:100%;justify-content:center;margin-top:6px}

/* Reviews */
.reviews-head{display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap;margin-bottom:36px}
.google-rating{display:flex;align-items:center;gap:14px;background:#fff;padding:14px 20px;border-radius:16px;border:1px solid var(--line);box-shadow:var(--shadow-sm)}
.g-icon{width:36px;height:36px;flex-shrink:0}
.google-rating strong{font-family:'Outfit';font-size:1.3rem;color:var(--ink)}
.google-rating small{color:var(--muted);font-size:.8rem;display:block}
.stars{display:inline-flex;gap:2px;color:#f5a623}
.stars svg{width:16px;height:16px;fill:currentColor}
.reviews-carousel{position:relative}
.reviews-track{display:flex;gap:20px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;padding-bottom:8px;-webkit-overflow-scrolling:touch;scrollbar-width:none}
.reviews-track::-webkit-scrollbar{display:none}
.review-card{flex:0 0 360px;background:#fff;padding:26px;border-radius:var(--radius);border:1px solid var(--line);scroll-snap-align:start}
.review-head{display:flex;align-items:center;gap:12px;margin-bottom:14px}
.avatar{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,var(--primary),var(--gold));color:#fff;display:grid;place-items:center;font-weight:600;font-family:'Outfit'}
.review-head .name{font-weight:600;color:var(--ink)}
.review-head .date{font-size:.78rem;color:var(--muted)}
.review-head .g-mini{margin-left:auto;width:20px;height:20px}
.review-card p{font-size:.94rem;color:var(--ink-soft)}
.reviews-actions{display:flex;justify-content:space-between;align-items:center;margin-top:24px;gap:16px;flex-wrap:wrap}
.arrows{display:flex;gap:8px}
.arrow{width:42px;height:42px;border-radius:50%;border:1px solid var(--line);background:#fff;cursor:pointer;display:grid;place-items:center;color:var(--primary);transition:all .2s}
.arrow:hover{background:var(--primary);color:#fff}
.arrow svg{width:18px;height:18px}

/* Feedback */
.feedback{background:linear-gradient(180deg,#f3ede0 0%,var(--bg) 100%)}
.feedback-card{max-width:640px;margin:0 auto;background:#fff;padding:40px;border-radius:24px;box-shadow:var(--shadow-md);border:1px solid var(--line)}
.rating-input{display:flex;gap:6px;margin-top:6px}
.rating-input button{width:44px;height:44px;border-radius:10px;border:1px solid var(--line);background:#fff;cursor:pointer;color:#d5d5d5;transition:all .2s;display:grid;place-items:center}
.rating-input button svg{width:22px;height:22px;fill:currentColor}
.rating-input button.active,.rating-input button:hover{color:#f5a623;border-color:#f5a623;background:#fffaf0}
.thankyou{display:none;text-align:center;padding:24px}
.thankyou.show{display:block;animation:fadeIn .4s}
.thankyou .check{width:64px;height:64px;border-radius:50%;background:var(--mint);color:var(--primary);display:grid;place-items:center;margin:0 auto 16px}
.thankyou .check svg{width:32px;height:32px}
.thankyou h3{margin-bottom:8px;color:var(--primary)}

/* FAQ */
.faq-list{max-width:780px;margin:0 auto;display:flex;flex-direction:column;gap:12px}
.faq-item{background:#fff;border:1px solid var(--line);border-radius:16px;overflow:hidden;transition:border-color .2s,box-shadow .2s}
.faq-item.open{border-color:var(--primary);box-shadow:var(--shadow-sm)}
.faq-q{width:100%;background:none;border:none;padding:20px 24px;text-align:left;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:16px;font-family:'Outfit';font-size:1.05rem;font-weight:500;color:var(--ink)}
.faq-q .plus{width:28px;height:28px;border-radius:50%;background:var(--mint);color:var(--primary);display:grid;place-items:center;flex-shrink:0;transition:transform .3s,background .3s}
.faq-item.open .plus{background:var(--primary);color:#fff;transform:rotate(45deg)}
.faq-a{max-height:0;overflow:hidden;transition:max-height .4s ease,padding .3s}
.faq-a-inner{padding:0 24px 22px;color:var(--ink-soft);font-size:.96rem}
.faq-item.open .faq-a{max-height:400px}

/* Gallery */
.gallery{background:linear-gradient(180deg,#f2ece0 0%,var(--bg) 100%)}
.gallery-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px}
.gallery-single{max-width:640px;margin:0 auto}
.privacy-copy{max-width:820px;margin:0 auto;background:#fff;border:1px solid var(--line);border-radius:var(--radius);box-shadow:var(--shadow-sm);padding:36px}
.privacy-copy h4{font-family:'Outfit',sans-serif;font-size:1.02rem;font-weight:600;color:var(--ink);margin-bottom:8px}
.privacy-copy h4+p{margin-bottom:20px}
.privacy-copy p{color:var(--ink-soft);font-size:.95rem;line-height:1.75}
.privacy-copy p:last-child{margin-bottom:0}
.privacy-copy a{color:var(--primary);font-weight:600}
@media (max-width:640px){.privacy-copy{padding:24px 20px}}
.ba-card{background:#fff;border:1px solid var(--line);border-radius:20px;overflow:hidden;box-shadow:var(--shadow-sm);transition:transform .3s ease,box-shadow .3s ease}
.ba-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-md)}
.ba-slider{position:relative;aspect-ratio:4/3;overflow:hidden;cursor:ew-resize;user-select:none;background:#eee}
.ba-slider img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none}
.ba-slider .after-wrap{position:absolute;top:0;right:0;bottom:0;overflow:hidden;width:50%}
.ba-slider .after-wrap img{position:absolute;top:0;right:0;height:100%;width:calc(100%/0.5)}
.ba-handle{position:absolute;top:0;bottom:0;left:50%;width:3px;background:#fff;box-shadow:0 0 0 1px rgba(0,0,0,.15);transform:translateX(-50%);pointer-events:none}
.ba-handle::after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:38px;height:38px;border-radius:50%;background:#fff;box-shadow:0 4px 14px rgba(0,0,0,.25);background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230f3d3e' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'><polyline points='15 6 9 12 15 18'/><polyline points='9 6 15 12 9 18' transform='translate(6 0)'/></svg>");background-repeat:no-repeat;background-position:center;background-size:22px}
.ba-tag{position:absolute;top:12px;padding:5px 12px;border-radius:999px;font-size:.72rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#fff;backdrop-filter:blur(6px);pointer-events:none}
.ba-tag.before{left:12px;background:rgba(13,43,46,.6)}
.ba-tag.after{right:12px;background:rgba(201,162,75,.9);color:#1a1a1a}
.ba-caption{padding:18px 20px}
.ba-caption h3{font-size:1.02rem;font-weight:600;margin-bottom:4px}
.ba-caption p{font-size:.88rem;color:var(--muted)}
.gallery-note{text-align:center;margin-top:32px;font-size:.88rem;color:var(--muted)}

/* Certifications */
.certs{background:var(--bg)}
.certs-viewport{position:relative;overflow:hidden;padding:4px 0 8px}
.certs-track{display:flex;gap:22px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;padding:4px 4px 20px;-webkit-overflow-scrolling:touch;scrollbar-width:none;cursor:grab}
.certs-track:active{cursor:grabbing}
.certs-track::-webkit-scrollbar{display:none}
.cert-card{flex:0 0 calc((100% - 44px)/2.4);scroll-snap-align:start;background:#fff;border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow-sm);transition:transform .3s ease,box-shadow .3s ease;display:flex;flex-direction:column}
.cert-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-md)}
.cert-img{aspect-ratio:3/4;overflow:hidden;background:#f4ecd8}
.cert-img img{width:100%;height:100%;object-fit:cover;object-position:top center;display:block}
.cert-caption{padding:16px 18px}
.cert-caption h4{font-family:'Outfit',sans-serif;font-size:.98rem;font-weight:600;margin-bottom:4px;color:var(--ink)}
.cert-caption p{font-size:.83rem;color:var(--muted);line-height:1.5}
.certs-actions{display:flex;justify-content:center;align-items:center;gap:14px;margin-top:22px}
.certs-dots{display:flex;gap:8px}
.certs-dots button{width:9px;height:9px;border-radius:50%;background:var(--line);border:none;cursor:pointer;padding:0;transition:background .2s,transform .2s}
.certs-dots button.active{background:var(--primary);transform:scale(1.3)}
@media (max-width:960px){.cert-card{flex-basis:calc((100% - 22px)/1.6)}}
@media (max-width:640px){.cert-card{flex-basis:86%}}

/* Chatbot */
.chatbot-fab{position:fixed;bottom:22px;right:94px;width:60px;height:60px;border-radius:50%;background:var(--primary);color:#fff;display:grid;place-items:center;box-shadow:0 10px 30px rgba(13,43,46,.35);z-index:98;transition:transform .2s,background .2s;border:none;cursor:pointer}
.chatbot-fab:hover{transform:scale(1.08);background:var(--primary-2)}
.chatbot-fab svg{width:28px;height:28px}
.chatbot-fab .cb-badge{position:absolute;top:-2px;right:-2px;width:14px;height:14px;border-radius:50%;background:var(--gold);border:2px solid var(--bg)}
.chatbot-panel{position:fixed;bottom:94px;right:22px;width:360px;max-width:calc(100vw - 44px);height:520px;max-height:calc(100vh - 130px);background:#fff;border-radius:20px;box-shadow:0 30px 60px -15px rgba(13,43,46,.35);z-index:99;display:none;flex-direction:column;overflow:hidden;border:1px solid var(--line);transform-origin:bottom right;animation:cbPop .25s ease}
.chatbot-panel.open{display:flex}
@keyframes cbPop{from{opacity:0;transform:scale(.9) translateY(10px)}to{opacity:1;transform:none}}
.cb-header{background:linear-gradient(135deg,var(--primary),var(--primary-2));color:#fff;padding:16px 18px;display:flex;align-items:center;gap:12px}
.cb-header .cb-avatar{width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.15);display:grid;place-items:center;flex-shrink:0}
.cb-header .cb-avatar svg{width:22px;height:22px}
.cb-header h4{font-family:'Outfit',sans-serif;font-size:1rem;color:#fff;margin:0;line-height:1.2}
.cb-header small{font-size:.75rem;color:rgba(255,255,255,.75);display:flex;align-items:center;gap:6px}
.cb-header small::before{content:"";width:7px;height:7px;border-radius:50%;background:#4ade80;display:inline-block}
.cb-close{margin-left:auto;background:rgba(255,255,255,.15);border:none;color:#fff;width:32px;height:32px;border-radius:50%;cursor:pointer;display:grid;place-items:center}
.cb-close:hover{background:rgba(255,255,255,.25)}
.cb-close svg{width:16px;height:16px}
.cb-messages{flex:1;overflow-y:auto;padding:18px;display:flex;flex-direction:column;gap:10px;background:var(--bg)}
.cb-msg{max-width:82%;padding:10px 14px;border-radius:14px;font-size:.9rem;line-height:1.5;animation:cbIn .25s ease;white-space:pre-line}
@keyframes cbIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.cb-msg.bot{background:#fff;border:1px solid var(--line);color:var(--ink);border-bottom-left-radius:4px;align-self:flex-start}
.cb-msg.user{background:var(--primary);color:#fff;border-bottom-right-radius:4px;align-self:flex-end}
.cb-msg a{color:var(--primary);text-decoration:underline;font-weight:600}
.cb-msg.user a{color:#fff}
.cb-chips{display:flex;flex-wrap:wrap;gap:6px;padding:0 18px 10px;background:var(--bg)}
.cb-chip{background:#fff;border:1px solid var(--line);border-radius:999px;padding:6px 12px;font-size:.78rem;color:var(--primary);cursor:pointer;font-family:inherit;transition:all .2s}
.cb-chip:hover{background:var(--primary);color:#fff;border-color:var(--primary)}
.cb-input{display:flex;gap:8px;padding:12px;border-top:1px solid var(--line);background:#fff}
.cb-input input{flex:1;padding:10px 14px;border:1px solid var(--line);border-radius:999px;font-family:inherit;font-size:.9rem;background:var(--bg);outline:none;color:var(--ink)}
.cb-input input:focus{border-color:var(--primary);background:#fff}
.cb-input button{width:40px;height:40px;border-radius:50%;background:var(--primary);color:#fff;border:none;cursor:pointer;display:grid;place-items:center;flex-shrink:0}
.cb-input button:hover{background:var(--primary-2)}
.cb-input svg{width:18px;height:18px}
@media (max-width:520px){.chatbot-panel{right:12px;bottom:88px;width:calc(100vw - 24px);height:70vh}.chatbot-fab{right:88px;width:54px;height:54px}}

/* Contact */
.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:36px}
.map-wrap{position:relative;border-radius:24px;overflow:hidden;border:1px solid var(--line);box-shadow:var(--shadow-sm);min-height:420px}
.map-wrap iframe{width:100%;height:100%;border:0;min-height:420px;display:block}
.map-open{position:absolute;bottom:14px;left:14px;display:inline-flex;align-items:center;gap:8px;background:#fff;color:var(--primary);padding:10px 14px;border-radius:999px;font-size:.85rem;font-weight:600;box-shadow:var(--shadow-md);transition:transform .2s ease}
.map-open:hover{transform:translateY(-2px)}
.map-open svg{width:16px;height:16px}
.contact-info{display:flex;flex-direction:column;gap:16px}
.info-card{background:#fff;padding:24px;border-radius:16px;border:1px solid var(--line);display:flex;gap:16px;align-items:flex-start}
.info-card .ic{width:46px;height:46px;border-radius:12px;background:var(--mint);color:var(--primary);display:grid;place-items:center;flex-shrink:0}
.info-card .ic svg{width:22px;height:22px}
.info-card h4{font-family:'Outfit';font-size:1rem;font-weight:600;margin-bottom:4px;color:var(--ink)}
.info-card p,.info-card a{font-size:.94rem;color:var(--ink-soft)}
.info-card a:hover{color:var(--primary)}

/* Footer */
.footer{background:#0a2325;color:rgba(255,255,255,.75);padding:64px 0 24px;margin-top:80px}
.footer-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:36px;margin-bottom:40px}
.footer h4{color:#fff;font-family:'Outfit';font-size:1rem;margin-bottom:16px}
.footer a{color:rgba(255,255,255,.7);font-size:.9rem;display:block;padding:5px 0;transition:color .2s}
.footer a:hover{color:var(--gold)}
.footer .brand{color:#fff;margin-bottom:16px}
.footer .brand small{color:rgba(255,255,255,.6)}
.footer p{color:rgba(255,255,255,.7);font-size:.9rem;line-height:1.7}
.socials{display:flex;gap:10px;margin-top:16px}
.socials a{width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.08);display:grid;place-items:center;padding:0}
.socials a:hover{background:var(--gold);color:#0a2325}
.socials svg{width:18px;height:18px}
.footer-bottom{border-top:1px solid rgba(255,255,255,.1);padding-top:22px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;font-size:.8rem;color:rgba(255,255,255,.5)}
.footer-bottom a{display:inline;color:rgba(255,255,255,.6)}
.footer-bottom a:hover{color:var(--gold)}

/* Floating WhatsApp */
.fab{position:fixed;bottom:22px;right:22px;width:60px;height:60px;border-radius:50%;background:#25D366;color:#fff;display:grid;place-items:center;box-shadow:0 10px 30px rgba(37,211,102,.45);z-index:98;transition:transform .2s}
.fab:hover{transform:scale(1.08)}
.fab svg{width:32px;height:32px}
.fab::before{content:"";position:absolute;inset:0;border-radius:50%;background:#25D366;opacity:.5;animation:pulse 2.2s ease-out infinite;z-index:-1}
@keyframes pulse{0%{transform:scale(1);opacity:.5}100%{transform:scale(1.6);opacity:0}}

/* Scroll reveal */
.reveal{opacity:0;transform:translateY(24px);transition:opacity .8s cubic-bezier(.2,.7,.2,1),transform .8s cubic-bezier(.2,.7,.2,1)}
.reveal.visible{opacity:1;transform:none}
.reveal.delay-1{transition-delay:.08s}
.reveal.delay-2{transition-delay:.16s}
.reveal.delay-3{transition-delay:.24s}

/* Responsive */
@media (max-width:960px){
  .nav-links{display:none}
  .hamburger{display:grid;place-items:center}
  .hero{padding:32px 0 60px}
  .hero-grid{grid-template-columns:1fr;gap:40px}
  .hero-visual{max-width:420px;margin:0 auto}
  .hero-badge-1{left:8px}
  .hero-badge-2{right:8px}
  .trust-inner{grid-template-columns:repeat(2,1fr);gap:32px}
  .about-grid{grid-template-columns:1fr;gap:32px}
  .services-grid{grid-template-columns:repeat(2,1fr)}
  .why-grid{grid-template-columns:repeat(2,1fr)}
  .booking-inner{grid-template-columns:1fr;gap:32px}
  .contact-grid{grid-template-columns:1fr}
  .footer-grid{grid-template-columns:1fr 1fr;gap:28px}
  .gallery-grid{grid-template-columns:repeat(2,1fr);gap:20px}
  .section{padding:64px 0}
  .nav-cta .btn-primary span{display:none}
  .nav-cta .btn-primary{padding:12px}
}
@media (max-width:520px){
  .services-grid,.why-grid,.gallery-grid,.doctors-grid{grid-template-columns:1fr}
  .doctor-card{flex-direction:column;text-align:center;align-items:center}
  .form-row{grid-template-columns:1fr}
  .footer-grid{grid-template-columns:1fr}
  .review-card{flex-basis:82vw}
  .booking{margin:0 12px;padding:44px 20px;border-radius:24px}
  .trust-bar{margin:0 12px;border-radius:20px}
  .feedback-card{padding:28px 22px}
}
</style>
</head>
<body>

<!-- ============ HEADER ============ -->
<header class="header" id="header">
  <div class="container nav">
    <a href="#home" class="brand">
      <img class="brand-logo" src="${logoImg}" alt="Krishna's Dant Ayush Dental Clinic logo" width="38" height="38" />
      <div>
        Krishna's Dant Ayush
        <small>Dental Clinic</small>
      </div>
    </a>
    <nav class="nav-links">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#gallery">Gallery</a>
      <a href="#reviews">Reviews</a>
      <a href="#book">Book</a>
      <a href="#contact">Contact</a>
    </nav>
    <div class="nav-cta">
      <a href="tel:+917013338012" class="icon-call" aria-label="Call clinic">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </a>
      <a href="https://wa.me/917013338012?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Krishna%27s%20Dant%20Ayush." target="_blank" rel="noopener" class="btn btn-primary">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.7.4 3.4 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.2.8.8-3.1-.2-.3C3.8 15 3.4 13.5 3.4 12c0-4.7 3.9-8.6 8.6-8.6s8.6 3.9 8.6 8.6-3.9 8.3-8.6 8.3z"/></svg>
        <span>Book on WhatsApp</span>
      </a>
      <button class="hamburger" id="hamburger" aria-label="Menu">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
    </div>
  </div>
  <div class="mobile-menu" id="mobileMenu">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#gallery">Gallery</a>
    <a href="#reviews">Reviews</a>
    <a href="#book">Book Appointment</a>
    <a href="#contact">Contact</a>
    <a href="https://wa.me/917013338012" class="btn btn-primary" target="_blank" rel="noopener">Book on WhatsApp</a>
  </div>
</header>

<!-- ============ HERO ============ -->
<section class="hero" id="home">
  <div class="container hero-grid">
    <div class="hero-copy reveal">
      <span class="eyebrow">Family Dental Care · Madhapur</span>
      <h1>Gentle dental care, <span class="accent">rooted in trust.</span></h1>
      <p class="lead">Krishna's Dant Ayush is a neighbourhood dental clinic in Madhapur caring for families across Hyderabad — from your child's first checkup to a confident new smile.</p>
      <div class="trust">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6.5 7 .9-5.2 4.7 1.5 7-6.3-3.6-6.3 3.6 1.5-7L2 9.4l7-.9z"/></svg>
        Rated 4.9 / 5 by patients on Google
      </div>
      <div class="hero-ctas">
        <a href="https://wa.me/917013338012?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Krishna%27s%20Dant%20Ayush." target="_blank" rel="noopener" class="btn btn-primary">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 1.7.4 3.4 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
          Book on WhatsApp
        </a>
        <a href="tel:+917013338012" class="btn btn-secondary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Call Now
        </a>
      </div>
    </div>
    <div class="hero-visual reveal delay-1">
      <div class="hero-image" id="heroImg">
        <!-- Inline illustration of a modern dental setup -->
        <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bg1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="#e8f0ec"/>
              <stop offset="1" stop-color="#f6f2e8"/>
            </linearGradient>
            <linearGradient id="chair" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="#0f3d3e"/>
              <stop offset="1" stop-color="#1a5d5e"/>
            </linearGradient>
          </defs>
          <rect width="400" height="500" fill="url(#bg1)"/>
          <!-- window -->
          <rect x="40" y="40" width="140" height="120" rx="12" fill="#ffffff" opacity=".8"/>
          <line x1="110" y1="40" x2="110" y2="160" stroke="#cfe6d9" stroke-width="2"/>
          <line x1="40" y1="100" x2="180" y2="100" stroke="#cfe6d9" stroke-width="2"/>
          <!-- plant -->
          <rect x="220" y="90" width="50" height="70" rx="6" fill="#c9a24b" opacity=".7"/>
          <path d="M245 90 Q220 60 235 40 Q250 60 245 90 Q270 60 260 30 Q245 55 245 90" fill="#0f3d3e" opacity=".7"/>
          <!-- lamp arm -->
          <path d="M320 60 Q340 140 300 210" stroke="#0f3d3e" stroke-width="6" fill="none" stroke-linecap="round"/>
          <circle cx="300" cy="215" r="22" fill="#ffffff" stroke="#c9a24b" stroke-width="3"/>
          <circle cx="300" cy="215" r="10" fill="#fff8e1"/>
          <!-- dental chair -->
          <rect x="80" y="240" width="240" height="40" rx="20" fill="url(#chair)"/>
          <rect x="80" y="280" width="240" height="120" rx="20" fill="url(#chair)"/>
          <rect x="100" y="200" width="120" height="55" rx="22" fill="url(#chair)"/>
          <!-- base -->
          <rect x="160" y="400" width="80" height="60" rx="8" fill="#0a2325"/>
          <rect x="120" y="450" width="160" height="14" rx="7" fill="#0a2325"/>
          <!-- small tools tray -->
          <rect x="290" y="290" width="70" height="40" rx="6" fill="#ffffff" stroke="#cfe6d9" stroke-width="2"/>
          <circle cx="305" cy="310" r="4" fill="#c9a24b"/>
          <circle cx="325" cy="310" r="4" fill="#0f3d3e"/>
          <circle cx="345" cy="310" r="4" fill="#c9a24b"/>
        </svg>
      </div>
      <div class="hero-badge hero-badge-1">
        <div class="dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></div>
        <div><strong>Painless Treatment</strong><span>Modern equipment</span></div>
      </div>
      <div class="hero-badge hero-badge-2">
        <div class="dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"/></svg></div>
        <div><strong>Hygiene Certified</strong><span>Sterilised tools</span></div>
      </div>
    </div>
  </div>
</section>

<!-- ============ TRUST BAR ============ -->
<div class="trust-bar reveal">
  <div class="trust-inner">
    <div class="stat"><span class="num" data-count="14">0</span><span style="color:var(--gold)">+</span><div class="label">Years of Experience</div></div>
    <div class="stat"><span class="num" data-count="5271">0</span><span style="color:var(--gold)">+</span><div class="label">Happy Patients Treated</div></div>
    <div class="stat"><span class="num" data-count="15">0</span><span style="color:var(--gold)">+</span><div class="label">Treatments Offered</div></div>
    <div class="stat"><span class="num" data-count="100">0</span><span style="color:var(--gold)">%</span><div class="label">Hygiene Certified</div></div>
  </div>
</div>

<!-- ============ ABOUT ============ -->
<section class="section about" id="about">
  <div class="container about-grid">
    <div class="about-visual reveal">
      <svg viewBox="0 0 500 560" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ab" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e0ece7"/><stop offset="1" stop-color="#f4ecd8"/></linearGradient>
        </defs>
        <rect width="500" height="560" fill="url(#ab)"/>
        <circle cx="250" cy="220" r="90" fill="#ffffff"/>
        <path d="M250 160 C280 160 300 190 300 230 C300 280 275 320 250 320 C225 320 200 280 200 230 C200 190 220 160 250 160Z" fill="#0f3d3e"/>
        <circle cx="230" cy="220" r="6" fill="#fff"/>
        <circle cx="270" cy="220" r="6" fill="#fff"/>
        <path d="M215 260 Q250 285 285 260" stroke="#c9a24b" stroke-width="4" fill="none" stroke-linecap="round"/>
        <rect x="120" y="360" width="260" height="140" rx="18" fill="#ffffff"/>
        <rect x="140" y="380" width="180" height="10" rx="5" fill="#cfe6d9"/>
        <rect x="140" y="400" width="220" height="10" rx="5" fill="#cfe6d9"/>
        <rect x="140" y="420" width="140" height="10" rx="5" fill="#cfe6d9"/>
        <circle cx="340" cy="440" r="18" fill="#c9a24b"/>
        <path d="M334 440 L338 444 L348 434" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="about-copy reveal delay-1">
      <span class="eyebrow">About the Clinic</span>
      <h2>A neighbourhood dental clinic where every patient is remembered by name.</h2>
      <p>Welcome to Krishna's Dant Ayush, Centre for Advanced Dentistry & implantology. We, at Dant Ayush, aim to provide a comprehensive dental treatment according to needs of the patients. We understand, the fear and anxiety of a patient to visit a dental clinic. Hence, we aim at being good listeners and plan a treatment plan that will be only helpfull to the patient. The services offered here are all types of dental problems that any person may face during his life time. We have in- house periodontist to deal with all your gum problems and in-house Oral surgeon to take care of tooth removal, jaw fracture, facial scars, etc. Also we have consultants to provide you best treatment in their respective speciality.</p>
      <div class="values">
        <span class="value"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6.5 7 .9-5.2 4.7 1.5 7-6.3-3.6-6.3 3.6 1.5-7L2 9.4l7-.9z"/></svg>Painless Treatment</span>
        <span class="value"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6.5 7 .9-5.2 4.7 1.5 7-6.3-3.6-6.3 3.6 1.5-7L2 9.4l7-.9z"/></svg>Strict Hygiene</span>
        <span class="value"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6.5 7 .9-5.2 4.7 1.5 7-6.3-3.6-6.3 3.6 1.5-7L2 9.4l7-.9z"/></svg>Personal Attention</span>
        <span class="value"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6.5 7 .9-5.2 4.7 1.5 7-6.3-3.6-6.3 3.6 1.5-7L2 9.4l7-.9z"/></svg>Transparent Pricing</span>
      </div>
    </div>
    </div>
    <div class="container doctors">
      <div class="doctors-head reveal">
        <span class="eyebrow">Meet the Doctors</span>
        <h3>Led by experienced specialists who treat you like family.</h3>
        <p>Our clinical team brings together deep expertise in gum care and oral surgery — with the patience to explain every step.</p>
      </div>
      <div class="doctors-grid">
        <div class="doctor-card reveal">
          <img class="doctor-photo" src="${drMonikaImg}" alt="Dr. Monika Bajaj" loading="lazy" />
          <div class="doctor-info">
            <h4>Dr. Monika Bajaj</h4>
            <div class="doctor-quals">BDS, MDS</div>
            <div class="doctor-spec">Periodontist — gum health, deep cleaning, and laser gum treatments.</div>
          </div>
        </div>
        <div class="doctor-card reveal delay-1">
          <img class="doctor-photo" src="${drGuruImg}" alt="Dr. Guru Charan" loading="lazy" />
          <div class="doctor-info">
            <h4>Dr. Guru Charan</h4>
            <div class="doctor-quals">BDS, MDS</div>
            <div class="doctor-spec">Oral & Maxillofacial Surgeon — implants, wisdom tooth surgery, and complex extractions.</div>
          </div>
        </div>
      </div>
    </div>
</section>

<!-- ============ SERVICES ============ -->
<section class="section" id="services">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">Our Services</span>
      <h2>Complete dental care under one roof.</h2>
      <p>From routine checkups to advanced cosmetic work, our clinic offers the full spectrum of dental treatments for every age.</p>
    </div>
    <div class="services-grid">
      ${service("syringe","Root Canal Treatment","Save your natural tooth with modern, single-sitting root canal therapy.")}
      ${service("sparkles","Teeth Whitening","Safe, in-clinic whitening for a brighter, healthier-looking smile.")}
      ${service("brush","Scaling & Root Planing","Deep cleaning that lifts stains, tartar and keeps your gums pink and firm.")}
      ${service("scissors","Gum Surgery","Precise, gentle gum surgery to restore healthy tissue and stop bleeding.")}
      ${service("layers","Crowns & Bridges","Natural-looking crowns and bridges that rebuild strength and confidence.")}
      ${service("anchor","Dental Implants","Permanent tooth replacements that look, feel and bite like the real thing.")}
      ${service("dot","Tooth-Colored Fillings","Discreet, tooth-matched fillings that repair decay without dark metal.")}
      ${service("grid","Partial & Complete Dentures","Comfortable, well-fitted dentures crafted to help you chew and smile freely.")}
      ${service("wind","Wisdom Tooth Removal","Careful wisdom tooth removal with proper anaesthesia and quick recovery.")}
      ${service("align","Teeth Alignment & Aligners","Braces and nearly invisible clear aligners to gently straighten crowded or shifted teeth — on a schedule that fits you.")}
      ${service("gem","Tooth Jewellery","Sparkling, safe tooth jewels for a little extra shine when you smile.")}
      ${service("heart","Elderly Patient Care","Patient, unhurried dental care designed around senior comfort and mobility.")}
      ${service("baby","Kids' Treatment","A calm, friendly experience — so your child grows up unafraid of the dentist.")}
    </div>
  </div>
</section>

<!-- ============ WHY US ============ -->
<section class="section why">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">Why Choose Us</span>
      <h2>Care you can feel from the first visit.</h2>
    </div>
    <div class="why-grid">
      <div class="why-card reveal"><span class="num">01</span><h3>Experienced Care</h3><p>Over a decade treating families in Madhapur — you're in hands that have seen it all.</p></div>
      <div class="why-card reveal delay-1"><span class="num">02</span><h3>Modern Technology</h3><p>Digital X-rays, RVG, painless anaesthesia and sterilised, single-use tools.</p></div>
      <div class="why-card reveal delay-2"><span class="num">03</span><h3>Personalised Plans</h3><p>Treatment paced around your comfort and budget — never rushed, never oversold.</p></div>
      <div class="why-card reveal delay-3"><span class="num">04</span><h3>Comfortable Clinic</h3><p>Clean, welcoming space with strict hygiene protocols and a calming atmosphere.</p></div>
    </div>
  </div>
</section>

<!-- ============ BOOKING ============ -->
<div class="section" id="book">
<section class="booking reveal">
  <div class="booking-inner">
    <div>
      <span class="eyebrow">Book an Appointment</span>
      <h2>Send us your details on WhatsApp — we'll confirm within minutes.</h2>
      <p>Fill in a few quick details and we'll open WhatsApp with your message ready to send. No calls, no waiting — just a real reply from our front desk.</p>
      <ul class="booking-info">
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>Parvatha Nagar Temple Road, Tulasi Nagar, Madhapur</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>Mon – Sat · 10:30 AM – 8:30 PM</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>+91 70133 38012</li>
      </ul>
    </div>
    <form class="booking-form" id="bookingForm" onsubmit="return sendToWhatsApp(event)">
      <h3>Quick appointment request</h3>
      <p class="sub">We'll send this straight to our clinic on WhatsApp.</p>
      <div class="form-row">
        <div class="field"><label>Full Name</label><input required name="name" placeholder="Your name" /></div>
        <div class="field"><label>Phone</label><input required name="phone" type="tel" placeholder="+91..." /></div>
      </div>
      <div class="form-row">
        <div class="field"><label>Preferred Date</label><input required name="date" type="date" /></div>
        <div class="field"><label>Preferred Time</label><input required name="time" type="time" /></div>
      </div>
      <div class="field">
        <label>Service Needed</label>
        <select name="service" required>
          <option value="">Select a service</option>
          <option>General Checkup</option>
          <option>Root Canal Treatment</option>
          <option>Cleaning &amp; Scaling</option>
          <option>Tooth Extraction</option>
          <option>Braces / Orthodontics</option>
          <option>Dental Implants</option>
          <option>Smile Makeover</option>
          <option>Kids Dental Care</option>
          <option>Other</option>
        </select>
      </div>
      <div class="field"><label>Message (optional)</label><textarea name="message" placeholder="Anything we should know?"></textarea></div>
      <button type="submit" class="btn btn-gold">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 1.7.4 3.4 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
        Book via WhatsApp
      </button>
    </form>
  </div>
</section>
</div>

<!-- ============ GALLERY (Before & After) ============ -->
<!--
  Placeholder before/after images from Unsplash. Swap the src URLs with
  real patient photos (with written consent). Recommended size: 800x600,
  same crop/lighting for before and after so the slider comparison feels honest.
-->
<section class="section gallery" id="gallery">
  <div class="container">
    <div class="section-head center reveal">
      <span class="eyebrow">Patient Gallery</span>
      <h2>Real smiles, real results.</h2>
      <p>Before-and-after moments from our patients. Drag the slider to see each transformation.</p>
    </div>
    <div class="gallery-grid">
      ${ba("Smile Restoration","Reshaped and restored — completed in-clinic",case1Before,case1After)}
      ${ba("Full Upper Rehabilitation","Missing and worn teeth rebuilt for a confident bite",case2Before,case2After)}
    </div>
    <p class="gallery-note reveal">Every photo shared with the patient's consent. Individual results vary — we'll walk you through realistic expectations at your consultation.</p>
  </div>
</section>

<!-- ============ CERTIFICATIONS & AWARDS ============ -->
<section class="section certs" id="certifications">
  <div class="container">
    <div class="section-head center reveal">
      <span class="eyebrow">Credentials You Can Trust</span>
      <h2>Certifications &amp; Awards</h2>
      <p>Formal training and recognitions earned by our clinical team over the years.</p>
    </div>
    <div class="certs-viewport reveal">
      <div class="certs-track" id="certsTrack">
        ${cert(cert1)}
        ${cert(cert2)}
        ${cert(cert3)}
        ${cert(cert4)}
      </div>
      <div class="certs-actions">
        <div class="arrows">
          <button class="arrow" id="certPrev" aria-label="Previous certificate"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg></button>
          <button class="arrow" id="certNext" aria-label="Next certificate"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg></button>
        </div>
        <div class="certs-dots" id="certsDots"></div>
      </div>
    </div>
  </div>
</section>

<!-- ============ REVIEWS ============ -->

<!--
  NOTE: These are placeholder reviews styled to match real Google reviews.
  Swap this section with a live widget (e.g. Elfsight Google Reviews,
  Trustindex, or a custom Google Places API integration) for real-time reviews.
  Public Google Business Profile URL should replace REPLACE_WITH_GOOGLE_URL below.
-->
<section class="section" id="reviews">
  <div class="container">
    <div class="reviews-head reveal">
      <div>
        <span class="eyebrow">Patient Reviews</span>
        <h2 style="margin-top:8px">What our patients say on Google.</h2>
      </div>
      <div class="google-rating">
        <svg class="g-icon" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34.5 6.2 29.6 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.3-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34.5 6.2 29.6 4 24 4 16 4 9.2 8.5 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.5 0 10.4-2.1 14.1-5.6l-6.5-5.5C29.6 34.4 26.9 35.5 24 35.5c-5.3 0-9.7-3.4-11.3-8L6.1 32.6C9 39 15.9 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4 5.5l6.5 5.5C42 34 44 29.4 44 24c0-1.3-.1-2.3-.4-3.5z"/></svg>
        <div>
          <div class="stars" aria-label="4.9 out of 5">
            ${star()}${star()}${star()}${star()}${star()}
          </div>
          <strong>4.9 / 5</strong>
          <small>Based on 200+ Google reviews</small>
        </div>
      </div>
    </div>
    <div class="reviews-carousel reveal delay-1">
      <div class="reviews-track" id="reviewsTrack">
        ${review("Priya Sharma","2 weeks ago","Dr. Monika Bajaj and the team are wonderful. I was terrified of my root canal — turned out to be completely painless. They explained every step and never made me feel rushed. Highly recommend for anyone in Madhapur.")}
        ${review("Rahul Verma","1 month ago","Took my 6-year-old for his first dental visit. The staff was so patient and friendly with him that he actually wants to go back. Clean clinic, honest advice, fair prices. Found our family dentist.")}
        ${review("Anitha Reddy","3 weeks ago","Got my braces done here. The consultation was thorough, they showed me all my options with real pricing (no upsell). Follow-up visits are always on time. Very professional.")}
        ${review("Vikram Nair","2 months ago","Had my dental cleaning and a chipped tooth fixed on the same visit. Modern equipment, super hygienic, and the doctor genuinely cares. Booking on WhatsApp made everything easy.")}
        ${review("Sneha Patel","1 week ago","Best dental experience I've had in Hyderabad. Dr. Guru Charan took time to understand my concerns before jumping to treatment. My smile makeover results look completely natural. Thank you!")}
      </div>
      <div class="reviews-actions">
        <div class="arrows">
          <button class="arrow" id="revPrev" aria-label="Previous"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg></button>
          <button class="arrow" id="revNext" aria-label="Next"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg></button>
        </div>
        <a href="https://www.google.com/search?q=Krishna%27s+Dant+Ayush+Madhapur" target="_blank" rel="noopener" class="btn btn-secondary">Read more reviews on Google</a>
      </div>
    </div>
  </div>
</section>

<!-- ============ FEEDBACK ============ -->
<section class="section feedback">
  <div class="container">
    <div class="section-head center reveal">
      <span class="eyebrow">We're Listening</span>
      <h2>Share your experience</h2>
      <p>Your feedback helps us keep improving the care we give every patient.</p>
    </div>
    <div class="feedback-card reveal">
      <!-- Netlify Forms: form data captured automatically once deployed on Netlify -->
      <form id="feedbackForm" name="feedback" method="POST" data-netlify="true" netlify-honeypot="bot-field" onsubmit="return handleFeedback(event)">
        <input type="hidden" name="form-name" value="feedback" />
        <p style="display:none"><label>Don't fill this out: <input name="bot-field" /></label></p>
        <div class="field"><label>Your Name</label><input required name="name" placeholder="Your name" /></div>
        <div class="field">
          <label>Your Rating</label>
          <div class="rating-input" id="ratingInput">
            ${[1,2,3,4,5].map(i=>`<button type="button" data-val="${i}" aria-label="${i} stars"><svg viewBox="0 0 24 24"><path d="M12 2l3 6.5 7 .9-5.2 4.7 1.5 7-6.3-3.6-6.3 3.6 1.5-7L2 9.4l7-.9z"/></svg></button>`).join("")}
          </div>
          <input type="hidden" name="rating" id="ratingValue" required />
        </div>
        <div class="field"><label>Comments</label><textarea required name="comments" placeholder="Tell us how your visit went..."></textarea></div>
        <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center">Send Feedback</button>
      </form>
      <div class="thankyou" id="thankyou">
        <div class="check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></div>
        <h3>Thank you!</h3>
        <p>We've received your feedback and truly appreciate you taking the time. See you at your next visit.</p>
      </div>
    </div>
  </div>
</section>

<!-- ============ FAQ ============ -->
<section class="section" id="faq">
  <div class="container">
    <div class="section-head center reveal">
      <span class="eyebrow">Common Questions</span>
      <h2>Answers before you visit</h2>
    </div>
    <div class="faq-list">
      ${faq("Do you treat children?","Yes — we love our little patients. We have a dedicated approach to kids dental care that keeps them calm and comfortable, from first-tooth checkups to cavity fillings and braces.")}
      ${faq("Is dental treatment painful at your clinic?","Almost never. We use modern local anaesthesia and minimally invasive techniques. Most patients tell us they felt nothing during procedures like root canals, cleanings and extractions.")}
      ${faq("Do you accept walk-ins?","We do our best to accommodate walk-ins, but a quick WhatsApp booking helps us reserve time for you and avoid waiting. For emergencies, just call us — we'll fit you in.")}
      ${faq("What are your clinic timings?","We are open Monday to Saturday, 10:30 AM to 8:30 PM. Closed on Sundays and public holidays. WhatsApp messages are usually answered within the hour on working days.")}
      ${faq("Is parking available?","Yes, free two-wheeler parking is available right outside the clinic. Car parking is available on the temple road with easy access.")}
      ${faq("Do you offer EMI or payment plans?","For larger treatments like implants, braces or full smile makeovers, we can arrange flexible payment plans. Just ask during your consultation — no pressure.")}
    </div>
  </div>
</section>

<!-- ============ CONTACT ============ -->
<section class="section" id="contact" style="background:linear-gradient(180deg,var(--bg) 0%,#e8f0ec 100%)">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">Visit Us</span>
      <h2>Find the clinic</h2>
      <p>We're just off Parvatha Nagar Temple Road in Tulasi Nagar, easy to reach from HITEC City and Kondapur.</p>
    </div>
    <div class="contact-grid">
      <div class="map-wrap reveal">
        <iframe
          src="https://www.google.com/maps?q=Krishna's+Dant+Ayush,+Parvatha+Nagar+Temple+Road,+Tulasi+Nagar,+Madhapur,+Hyderabad&z=17&output=embed"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Krishna's Dant Ayush location"></iframe>
        <a class="map-open" href="https://maps.app.goo.gl/sDeJqhEZEUfAokdV8" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          Open in Google Maps
        </a>
      </div>
      <div class="contact-info reveal delay-1">
        <div class="info-card">
          <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
          <div>
            <h4>Address</h4>
            <p>Parvatha Nagar Temple Road, Tulasi Nagar,<br/>Madhapur, Hyderabad, Telangana 500081</p>
          </div>
        </div>
        <div class="info-card">
          <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
          <div>
            <h4>Clinic Hours</h4>
            <p>Monday – Saturday: 10:30 AM – 8:30 PM<br/>Sunday: Closed</p>
          </div>
        </div>
        <div class="info-card">
          <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
          <div>
            <h4>Call or WhatsApp</h4>
            <p><a href="tel:+917013338012">+91 70133 38012</a></p>
            <a href="https://wa.me/917013338012" target="_blank" rel="noopener" class="btn btn-primary" style="margin-top:10px">Message on WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============ PRIVACY ============ -->
<section class="section" id="privacy">
  <div class="container">
    <div class="section-head center reveal">
      <span class="eyebrow">Your Data, Your Trust</span>
      <h2>Privacy Policy</h2>
      <p>How Krishna's Dant Ayush Dental Clinic collects, uses, and protects the information you share with us.</p>
    </div>
    <div class="privacy-copy reveal">
      <h4>What we collect</h4>
      <p>When you book an appointment, send a WhatsApp message, or submit the feedback form, we collect only what we need to help you — your name, phone number, preferred date and time, and anything you choose to tell us about your dental concern.</p>
      <h4>How we use it</h4>
      <p>Your details are used solely to confirm appointments, follow up on treatment, and reply to your questions. We never sell, rent, or share your personal or medical information with advertisers or third parties.</p>
      <h4>Medical records &amp; photographs</h4>
      <p>Clinical records are kept confidential and accessed only by our treating doctors and clinical staff. Before-and-after photographs are published on this website only with the patient's written consent, and consent can be withdrawn at any time.</p>
      <h4>This website</h4>
      <p>Our site does not run advertising trackers. Embedded services such as Google Maps and WhatsApp are governed by their own privacy policies once you interact with them.</p>
      <h4>Your choices</h4>
      <p>You may ask us to correct or delete your details, or to remove your photographs from this website, at any time. Write to us or call <a href="tel:+917013338012">+91 70133 38012</a> and we will action your request promptly.</p>
    </div>
  </div>
</section>

<!-- ============ FOOTER ============ -->
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="brand"><img class="brand-logo" src="${logoImg}" alt="Krishna's Dant Ayush Dental Clinic logo" width="38" height="38" /><div>Krishna's Dant Ayush<small>Family Dental Clinic</small></div></div>
        <p>Gentle, honest dental care in the heart of Madhapur. Trusted by families across Hyderabad for over a decade.</p>
        <div class="socials">
          <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
          <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.87v-6.98H7.9V12h2.5V9.8c0-2.47 1.47-3.83 3.72-3.83 1.08 0 2.2.19 2.2.19v2.42h-1.24c-1.22 0-1.6.76-1.6 1.54V12h2.72l-.43 2.89h-2.29v6.98A10 10 0 0 0 22 12z"/></svg></a>
          <a href="https://wa.me/917013338012" target="_blank" rel="noopener" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 1.7.4 3.4 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg></a>
        </div>
      </div>
      <div>
        <h4>Explore</h4>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#reviews">Reviews</a>
        <a href="#faq">FAQs</a>
        <a href="#privacy">Privacy Policy</a>
      </div>
      <div>
        <h4>Services</h4>
        <a href="#services">Root Canal</a>
        <a href="#services">Braces</a>
        <a href="#services">Implants</a>
        <a href="#services">Kids Dentistry</a>
      </div>
      <div>
        <h4>Contact</h4>
        <p style="font-size:.88rem">Parvatha Nagar Temple Road, Tulasi Nagar, Madhapur, Hyderabad 500081</p>
        <a href="tel:+917013338012">+91 70133 38012</a>
        <a href="https://wa.me/917013338012" target="_blank" rel="noopener">WhatsApp us</a>
      </div>
    </div>
    <div class="footer-bottom">
      <div>© <span id="year"></span> Krishna's Dant Ayush. All rights reserved.</div>
      <div>Website by <a href="https://webdesign4you.framer.website" target="_blank" rel="noopener">Web Design 4 You</a></div>
    </div>
  </div>
</footer>

<!-- Chatbot -->
<button class="chatbot-fab" id="chatbotFab" aria-label="Open chat assistant">
  <span class="cb-badge"></span>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/></svg>
</button>
<div class="chatbot-panel" id="chatbotPanel" role="dialog" aria-label="Chat assistant">
  <div class="cb-header">
    <div class="cb-avatar">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c-3.5 0-6 2-6 5.5 0 2 .8 3.6 1.4 4.9.4.9.6 1.4.6 2.1v3.5c0 1.4.9 3 2 3 .9 0 1.2-1.2 1.5-2.6.3-1.5.4-2.4 1-2.4.5 0 .7 1 1 2.4.3 1.4.6 2.6 1.5 2.6 1.1 0 2-1.6 2-3v-3.5c0-.7.2-1.2.6-2.1C17.2 11.1 18 9.5 18 7.5 18 4 15.5 2 12 2Z"/></svg>
    </div>
    <div>
      <h4>Dant Ayush Assistant</h4>
      <small>Online now</small>
    </div>
    <button class="cb-close" id="chatbotClose" aria-label="Close chat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
  </div>
  <div class="cb-messages" id="cbMessages"></div>
  <div class="cb-chips" id="cbChips"></div>
  <form class="cb-input" id="cbForm" autocomplete="off">
    <input type="text" id="cbInput" placeholder="Ask about services, timings, fees..." aria-label="Your message"/>
    <button type="submit" aria-label="Send"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button>
  </form>
</div>

<!-- Floating WhatsApp -->
<a href="https://wa.me/917013338012" target="_blank" rel="noopener" class="fab" aria-label="Chat on WhatsApp">
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.7.4 3.4 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.2.8.8-3.1-.2-.3C3.8 15 3.4 13.5 3.4 12c0-4.7 3.9-8.6 8.6-8.6s8.6 3.9 8.6 8.6-3.9 8.3-8.6 8.3z"/></svg>
</a>

<script>
document.getElementById('year').textContent = new Date().getFullYear();

// Header shadow on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 8);
}, {passive:true});

// Mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  });
}, {threshold:.12, rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Animated counters
const countObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = +el.dataset.count;
    const duration = 1400;
    const start = performance.now();
    const tick = (t) => {
      const p = Math.min(1,(t-start)/duration);
      const eased = 1 - Math.pow(1-p, 3);
      el.textContent = Math.floor(eased * target).toLocaleString();
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target.toLocaleString();
    };
    requestAnimationFrame(tick);
    countObs.unobserve(el);
  });
}, {threshold:.5});
document.querySelectorAll('[data-count]').forEach(el => countObs.observe(el));

// Parallax hero image
const heroImg = document.getElementById('heroImg');
window.addEventListener('scroll', () => {
  if (!heroImg || window.innerWidth < 960) return;
  const y = Math.min(window.scrollY, 400);
  heroImg.style.transform = 'translateY(' + (y * 0.06) + 'px)';
}, {passive:true});

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    document.querySelectorAll('.faq-item.open').forEach(o => { if (o !== item) o.classList.remove('open'); });
    item.classList.toggle('open');
  });
});

// Reviews carousel arrows
const track = document.getElementById('reviewsTrack');
document.getElementById('revPrev').addEventListener('click', () => track.scrollBy({left:-380, behavior:'smooth'}));
document.getElementById('revNext').addEventListener('click', () => track.scrollBy({left: 380, behavior:'smooth'}));

// Before/After sliders
document.querySelectorAll('[data-ba]').forEach(slider => {
  const afterWrap = slider.querySelector('.after-wrap');
  const afterImg = slider.querySelector('.ba-after');
  const handle = slider.querySelector('.ba-handle');
  let dragging = false;
  const setPos = (clientX) => {
    const rect = slider.getBoundingClientRect();
    let pct = ((clientX - rect.left) / rect.width) * 100;
    pct = Math.max(0, Math.min(100, pct));
    afterWrap.style.width = (100 - pct) + '%';
    afterImg.style.width = (100 / ((100 - pct)/100 || 0.0001)) + '%';
    handle.style.left = pct + '%';
  };
  slider.addEventListener('mousedown', e => { dragging = true; setPos(e.clientX); });
  window.addEventListener('mousemove', e => { if (dragging) setPos(e.clientX); });
  window.addEventListener('mouseup', () => dragging = false);
  slider.addEventListener('touchstart', e => { dragging = true; setPos(e.touches[0].clientX); }, {passive:true});
  slider.addEventListener('touchmove', e => { if (dragging) setPos(e.touches[0].clientX); }, {passive:true});
  slider.addEventListener('touchend', () => dragging = false);
});

// Rating input
const ratingInput = document.getElementById('ratingInput');
const ratingValue = document.getElementById('ratingValue');
ratingInput.querySelectorAll('button').forEach(b => {
  b.addEventListener('click', () => {
    const v = +b.dataset.val;
    ratingValue.value = v;
    ratingInput.querySelectorAll('button').forEach(x => x.classList.toggle('active', +x.dataset.val <= v));
  });
});

// Booking -> WhatsApp
function sendToWhatsApp(e){
  e.preventDefault();
  const f = e.target;
  const d = new FormData(f);
  const msg = \`Hello Krishna's Dant Ayush, I'd like to book an appointment.

Name: \${d.get('name')}
Phone: \${d.get('phone')}
Preferred Date: \${d.get('date')}
Preferred Time: \${d.get('time')}
Service: \${d.get('service')}
Message: \${d.get('message') || '-'}\`;
  const url = 'https://wa.me/917013338012?text=' + encodeURIComponent(msg);
  window.open(url, '_blank');
  return false;
}

// Feedback form (Netlify Forms handles submission; show thank-you)
function handleFeedback(e){
  const form = e.target;
  if (!ratingValue.value) { e.preventDefault(); alert('Please select a rating.'); return false; }
  // Let Netlify capture in production; in dev, prevent default and just show thanks.
  const isNetlify = /netlify/.test(location.host) || location.host.includes('netlify.app');
  if (!isNetlify) {
    e.preventDefault();
  }
  form.style.display='none';
  document.getElementById('thankyou').classList.add('show');
  return isNetlify;
}

// Certifications carousel (drag/swipe + arrows + dots)
(function(){
  const track = document.getElementById('certsTrack');
  if (!track) return;
  const prev = document.getElementById('certPrev');
  const next = document.getElementById('certNext');
  const dotsWrap = document.getElementById('certsDots');
  const cards = track.querySelectorAll('.cert-card');
  const step = () => (cards[0] ? cards[0].getBoundingClientRect().width + 22 : 300);
  prev.addEventListener('click', () => track.scrollBy({left:-step(), behavior:'smooth'}));
  next.addEventListener('click', () => track.scrollBy({left: step(), behavior:'smooth'}));
  // dots
  cards.forEach((_,i) => {
    const b = document.createElement('button');
    b.setAttribute('aria-label','Go to certificate '+(i+1));
    b.addEventListener('click', () => track.scrollTo({left: i * step(), behavior:'smooth'}));
    dotsWrap.appendChild(b);
  });
  const updateDots = () => {
    const idx = Math.round(track.scrollLeft / step());
    dotsWrap.querySelectorAll('button').forEach((d,i) => d.classList.toggle('active', i===idx));
  };
  track.addEventListener('scroll', updateDots, {passive:true});
  updateDots();
  // drag to swipe (mouse)
  let isDown=false, startX=0, startScroll=0;
  track.addEventListener('mousedown', e => { isDown=true; startX=e.pageX; startScroll=track.scrollLeft; });
  window.addEventListener('mouseup', () => isDown=false);
  window.addEventListener('mousemove', e => { if(!isDown) return; e.preventDefault(); track.scrollLeft = startScroll - (e.pageX - startX); });
})();

// AI chatbot (rule-based FAQ)
(function(){
  const fab = document.getElementById('chatbotFab');
  const panel = document.getElementById('chatbotPanel');
  const closeBtn = document.getElementById('chatbotClose');
  const messages = document.getElementById('cbMessages');
  const chips = document.getElementById('cbChips');
  const form = document.getElementById('cbForm');
  const input = document.getElementById('cbInput');
  const waLink = '<a href="https://wa.me/917013338012" target="_blank" rel="noopener">+91 70133 38012</a>';
  const escapeHTML = (s) => s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[c]));
  const addMsg = (text, who) => {
    const el = document.createElement('div');
    el.className = 'cb-msg ' + who;
    el.innerHTML = who === 'user' ? escapeHTML(text) : text;
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
  };
  const rules = [
    { k:['hour','time','timing','open','close','when','sunday','holiday','working'],
      a: "We're open <b>Monday to Saturday, 10:30 AM – 8:30 PM</b>. Closed on Sundays." },
    { k:['fee','fees','cost','price','consult','consultation','op','charge','charges'],
      a: "Our consultation / OP fee is <b>₹350</b>. Treatment costs are shared transparently after your check-up — no surprises." },
    { k:['doctor','dentist','who','team','specialist','monica','guru','charan','bajaj','periodont','surgeon','maxillofacial'],
      a: "You'll be cared for by:<br/>• <b>Dr. Monika Bajaj</b> (BDS, MDS — Periodontist)<br/>• <b>Dr. Guru Charan</b> (BDS, MDS — Oral &amp; Maxillofacial Surgeon)" },
    { k:['service','treatment','offer','what do you','procedures','list'],
      a: "We offer 13 treatments: Root Canal, Teeth Whitening, Scaling &amp; Root Planing, Gum Surgery, Crowns &amp; Bridges, Dental Implants, Tooth-Colored Fillings, Partial &amp; Complete Dentures, Wisdom Tooth Removal, Teeth Alignment &amp; Aligners, Tooth Jewellery, Elderly Patient Care, and Kids' Treatment." },
    { k:['root canal','rct'], a: "Yes, we do <b>Root Canal Treatments</b> — modern, virtually painless, usually completed in 1–2 sittings." },
    { k:['whitening','bleach','yellow'], a: "Yes — in-clinic <b>Teeth Whitening</b> is available and gives visible results in a single visit." },
    { k:['implant'], a: "Yes, we place <b>Dental Implants</b>. Dr. Guru Charan is trained in Implant Dentistry (CDE, Al-Badar) and Oral &amp; Maxillofacial Surgery." },
    { k:['brace','aligner','align','crooked','straighten','invisible'], a: "We offer <b>Teeth Alignment &amp; Aligners</b> — traditional braces and nearly invisible clear aligners. Consult us to see what suits you best." },
    { k:['wisdom','extract','remove','pull'], a: "Yes — <b>Wisdom Tooth Removal</b> and extractions are performed by our oral surgeon in-house." },
    { k:['gum','bleed','swollen','periodont','scaling','cleaning','polish'], a: "Absolutely. <b>Scaling &amp; Root Planing</b> and <b>Gum Surgery</b> are handled by our periodontist Dr. Monika Bajaj." },
    { k:['crown','bridge','cap'], a: "Yes, we offer <b>Crowns &amp; Bridges</b> to restore broken, discolored, or missing teeth." },
    { k:['filling','cavity','decay'], a: "Yes — <b>Tooth-Colored Fillings</b> that blend naturally with your tooth." },
    { k:['denture'], a: "Yes, both <b>Partial and Complete Dentures</b> are made in-clinic for a comfortable fit." },
    { k:['jewel','jewellery','decor'], a: "Yes! <b>Tooth Jewellery</b> is a quick, painless cosmetic add-on we offer." },
    { k:['kid','child','baby','pediatric','pedodont'], a: "Yes, we have dedicated <b>Kids' Treatment</b> — gentle, unhurried, and geared to make little patients comfortable." },
    { k:['elder','senior','old age','geriatric'], a: "Yes — <b>Elderly Patient Care</b> is one of our specialties, including dentures, gum care, and gentle procedures." },
    { k:['location','address','where','reach','directions','madhapur','tulasi','parvatha'],
      a: 'We are at <b>Parvatha Nagar Temple Road, Tulasi Nagar, Madhapur, Hyderabad, Telangana 500081</b>. <a href="https://maps.app.goo.gl/sDeJqhEZEUfAokdV8" target="_blank" rel="noopener">Open in Google Maps</a>.' },
    { k:['contact','phone','call','number','whatsapp','reach out'],
      a: "You can call or WhatsApp us at " + waLink + "." },
    { k:['book','appointment','schedule','slot','reserve'],
      a: 'You can book instantly on <a href="https://wa.me/917013338012" target="_blank" rel="noopener">WhatsApp</a> or call ' + waLink + '. Same-day slots are often available.' },
    { k:['park','parking','vehicle','car','bike'],
      a: "Free <b>two-wheeler parking</b> is available right outside. <b>Car parking</b> is available on the temple road." },
    { k:['pain','painless','hurt','anaesthesia','anesthesia','numb','scared','afraid'],
      a: "You're in safe hands. We use <b>modern local anaesthesia</b> and minimally invasive techniques — most patients feel nothing at all during treatment." },
    { k:['emi','payment plan','installment','instalment','finance','plan'],
      a: "Yes — we offer <b>flexible EMI / payment plans</b> for larger treatments like implants, braces and smile makeovers. Ask us at your consultation." },
    { k:['walk in','walk-in','walkin','without appointment','emergency'],
      a: "Walk-ins are accommodated when possible, but WhatsApp booking is recommended to avoid waiting. <b>Emergencies are always fitted in</b> — just call " + waLink + "." },
    { k:['rating','review','google','star'],
      a: "We're rated <b>4.9 / 5 on Google</b> with <b>150+ reviews</b> from our patients. Thank you for the love ❤️" },
    { k:['hi','hello','hey','namaste','good morning','good evening','good afternoon'],
      a: "Hi there! 👋 How can I help you today — services, timings, fees, or booking?" },
    { k:['thank','thanks','thx'], a: "You're most welcome! Anything else I can help with?" },
    { k:['bye','goodbye','see you'], a: "Take care! We're here on WhatsApp anytime at " + waLink + "." },
  ];
  const fallback = "I don't have that detail handy — please call or WhatsApp us at " + waLink + " and our team will help right away.";
  const answer = (q) => {
    const t = q.toLowerCase();
    for (const r of rules) if (r.k.some(k => t.indexOf(k) !== -1)) return r.a;
    return fallback;
  };
  const quickChips = ['Timings', 'Consultation fee', 'Doctors', 'Book appointment', 'Location', 'Parking'];
  const renderChips = () => {
    chips.innerHTML = '';
    quickChips.forEach(label => {
      const b = document.createElement('button');
      b.className = 'cb-chip';
      b.type = 'button';
      b.textContent = label;
      b.addEventListener('click', () => { handleUser(label); });
      chips.appendChild(b);
    });
  };
  const handleUser = (text) => {
    if (!text.trim()) return;
    addMsg(text, 'user');
    input.value = '';
    setTimeout(() => addMsg(answer(text), 'bot'), 350);
  };
  let opened = false;
  const openPanel = () => {
    panel.classList.add('open');
    if (!opened) {
      opened = true;
      addMsg("Hi! I'm here to help with any questions about Krishna's Dant Ayush. Ask me about our services, doctors, timings, or fees.", 'bot');
      renderChips();
    }
    setTimeout(() => input.focus(), 200);
  };
  fab.addEventListener('click', () => panel.classList.contains('open') ? panel.classList.remove('open') : openPanel());
  closeBtn.addEventListener('click', () => panel.classList.remove('open'));
  form.addEventListener('submit', (e) => { e.preventDefault(); handleUser(input.value); });
})();
</script>

</body>
</html>`;

// Small helpers used above (template-literal only; produce plain HTML strings)
function service(icon: string, title: string, desc: string) {
  const L = (paths: string) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
  const icons: Record<string, string> = {
    syringe: L('<path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"/><path d="m9 11 4 4"/><path d="m5 19-3 3"/><path d="m14 4 6 6"/>'),
    sparkles: L('<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/>'),
    brush: L('<path d="m11 10 3 3"/><path d="M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z"/><path d="M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031"/>'),
    scissors: L('<circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/>'),
    layers: L('<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>'),
    anchor: L('<path d="M12 6v16"/><path d="m19 13 2-1a9 9 0 0 1-18 0l2 1"/><path d="M9 11h6"/><circle cx="12" cy="4" r="2"/>'),
    dot: L('<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="1"/>'),
    grid: L('<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/>'),
    wind: L('<path d="M12.8 19.6A2 2 0 1 0 14 16H2"/><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"/><path d="M9.8 4.4A2 2 0 1 1 11 8H2"/>'),
    align: L('<path d="M21 5H3"/><path d="M17 12H7"/><path d="M19 19H5"/>'),
    sliders: L('<path d="M10 5H3"/><path d="M12 19H3"/><path d="M14 3v4"/><path d="M16 17v4"/><path d="M21 12h-9"/><path d="M21 19h-5"/><path d="M21 5h-7"/><path d="M8 10v4"/><path d="M8 12H3"/>'),
    gem: L('<path d="M10.5 3 8 9l4 13 4-13-2.5-6"/><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"/><path d="M2 9h20"/>'),
    heart: L('<path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"/>'),
    baby: L('<path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M15 12h.01"/><path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/><path d="M9 12h.01"/>'),
  };
  return `<div class="service-card reveal"><div class="service-icon">${icons[icon]}</div><h3>${title}</h3><p>${desc}</p></div>`;
}
function star() {
  return '<svg viewBox="0 0 24 24"><path d="M12 2l3 6.5 7 .9-5.2 4.7 1.5 7-6.3-3.6-6.3 3.6 1.5-7L2 9.4l7-.9z"/></svg>';
}
function review(name: string, date: string, text: string) {
  const initial = name.split(" ").map(n=>n[0]).join("").slice(0,2);
  return `<div class="review-card"><div class="review-head"><div class="avatar">${initial}</div><div><div class="name">${name}</div><div class="date">${date}</div></div><svg class="g-mini" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34.5 6.2 29.6 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.3-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34.5 6.2 29.6 4 24 4 16 4 9.2 8.5 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.5 0 10.4-2.1 14.1-5.6l-6.5-5.5C29.6 34.4 26.9 35.5 24 35.5c-5.3 0-9.7-3.4-11.3-8L6.1 32.6C9 39 15.9 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4 5.5l6.5 5.5C42 34 44 29.4 44 24c0-1.3-.1-2.3-.4-3.5z"/></svg></div><div class="stars">${star().repeat(5)}</div><p style="margin-top:10px">${text}</p></div>`;
}
function faq(q: string, a: string) {
  return `<div class="faq-item"><button class="faq-q">${q}<span class="plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span></button><div class="faq-a"><div class="a-inner faq-a-inner">${a}</div></div></div>`;
}
function ba(title: string, desc: string, before: string, after: string) {
  const placeholder = (label: string) => `<div style="position:absolute;inset:0;display:grid;place-items:center;background:linear-gradient(135deg,#e8eae4,#f4ecd8);color:#6b7f82;font-family:'Outfit',sans-serif;font-size:.95rem;text-align:center;padding:20px;pointer-events:none"><div><div style="font-size:2rem;margin-bottom:6px;opacity:.4">📷</div><div style="font-weight:600;color:#0f3d3e">${label} photo</div><div style="font-size:.8rem;color:#6b7f82;margin-top:4px">Coming soon</div></div></div>`;
  const beforeImg = before ? `<img class="ba-before" src="${before}" alt="${title} before" loading="lazy"/>` : placeholder("Before");
  const afterImg = after ? `<img class="ba-after" src="${after}" alt="${title} after" loading="lazy"/>` : `<div class="ba-after" style="width:200%;height:100%;position:relative">${placeholder("After")}</div>`;
  return `<div class="ba-card reveal"><div class="ba-slider" data-ba>${beforeImg}<div class="after-wrap">${afterImg}</div><span class="ba-tag before">Before</span><span class="ba-tag after">After</span><div class="ba-handle"></div></div><div class="ba-caption"><h3>${title}</h3><p>${desc}</p></div></div>`;
}
function cert(src: string) {
  return `<div class="cert-card reveal"><div class="cert-img"><img src="${src}" alt="Certification awarded to our clinical team" loading="lazy" draggable="false"/></div></div>`;
}

export const Route = createFileRoute("/")({
  server: {
    handlers: {
      GET: () =>
        new Response(html, {
          headers: { "Content-Type": "text/html; charset=utf-8" },
        }),
    },
  },
});
