import { createFileRoute } from "@tanstack/react-router";

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Krishna's Dant Ayush — Trusted Family Dental Clinic in Madhapur, Hyderabad</title>
<meta name="description" content="Krishna's Dant Ayush is a family dental clinic in Madhapur, Hyderabad offering gentle, modern dental care — checkups, root canals, implants, braces, kids dentistry and more. Book on WhatsApp." />
<meta property="og:title" content="Krishna's Dant Ayush — Family Dental Clinic in Madhapur" />
<meta property="og:description" content="Gentle dental care rooted in trust. Madhapur, Hyderabad. Book on WhatsApp: +91 70133 38012." />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
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
.mobile-menu{display:none;position:fixed;inset:72px 0 0 0;background:var(--bg);padding:32px 22px;flex-direction:column;gap:8px;z-index:99;overflow-y:auto}
.mobile-menu.open{display:flex;animation:fadeIn .25s ease}
.mobile-menu a{padding:16px 18px;border-radius:12px;background:#fff;font-weight:500;border:1px solid var(--line)}
.mobile-menu .btn{margin-top:12px;justify-content:center}

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

/* Contact */
.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:36px}
.map-wrap{border-radius:24px;overflow:hidden;border:1px solid var(--line);box-shadow:var(--shadow-sm);min-height:420px}
.map-wrap iframe{width:100%;height:100%;border:0;min-height:420px;display:block}
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
  .section{padding:64px 0}
  .nav-cta .btn-primary span{display:none}
  .nav-cta .btn-primary{padding:12px}
}
@media (max-width:520px){
  .services-grid,.why-grid{grid-template-columns:1fr}
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
      <div class="brand-mark">K</div>
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
    <div class="stat"><span class="num" data-count="12">0</span><span style="color:var(--gold)">+</span><div class="label">Years of Experience</div></div>
    <div class="stat"><span class="num" data-count="8500">0</span><span style="color:var(--gold)">+</span><div class="label">Happy Patients Treated</div></div>
    <div class="stat"><span class="num" data-count="15">0</span><span style="color:var(--gold)">+</span><div class="label">Modern Treatments Offered</div></div>
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
      <h2>A neighbourhood clinic where every patient is remembered by name.</h2>
      <p>Krishna's Dant Ayush was built on a simple idea — that going to the dentist shouldn't be something you dread. For over a decade, families across Madhapur have trusted us for honest advice, unhurried appointments, and treatment that's as gentle as it is thorough.</p>
      <p>We combine modern dental technology with the warmth of a family practice. From your first cleaning to a full smile makeover, every plan is built around you — your comfort, your budget, and your long-term dental health.</p>
      <p>Walk in as a patient. Leave feeling like family.</p>
      <div class="values">
        <span class="value"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6.5 7 .9-5.2 4.7 1.5 7-6.3-3.6-6.3 3.6 1.5-7L2 9.4l7-.9z"/></svg>Painless Treatment</span>
        <span class="value"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6.5 7 .9-5.2 4.7 1.5 7-6.3-3.6-6.3 3.6 1.5-7L2 9.4l7-.9z"/></svg>Strict Hygiene</span>
        <span class="value"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6.5 7 .9-5.2 4.7 1.5 7-6.3-3.6-6.3 3.6 1.5-7L2 9.4l7-.9z"/></svg>Personal Attention</span>
        <span class="value"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6.5 7 .9-5.2 4.7 1.5 7-6.3-3.6-6.3 3.6 1.5-7L2 9.4l7-.9z"/></svg>Transparent Pricing</span>
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
      ${service("check","General Checkup","A thorough oral exam plus honest advice on what your teeth actually need.")}
      ${service("root","Root Canal Treatment","Save your natural tooth with modern, single-sitting root canal therapy.")}
      ${service("clean","Cleaning & Scaling","Professional scaling and polishing that leaves your teeth feeling brand-new.")}
      ${service("tooth","Tooth Extraction","Careful, low-pain extractions using proper anaesthesia and aftercare.")}
      ${service("braces","Braces & Orthodontics","Metal, ceramic and clear aligners to gently straighten teeth at any age.")}
      ${service("implant","Dental Implants","Permanent tooth replacements that look, feel and function like the real thing.")}
      ${service("smile","Smile Makeover","Whitening, veneers and cosmetic reshaping designed for your face and smile.")}
      ${service("kids","Kids Dental Care","A calm, friendly experience — so your child grows up unafraid of the dentist.")}
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
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>Mon – Sat · 10:00 AM – 8:00 PM</li>
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
        ${review("Priya Sharma","2 weeks ago","Dr. Krishna and the team are wonderful. I was terrified of my root canal — turned out to be completely painless. They explained every step and never made me feel rushed. Highly recommend for anyone in Madhapur.")}
        ${review("Rahul Verma","1 month ago","Took my 6-year-old for his first dental visit. The staff was so patient and friendly with him that he actually wants to go back. Clean clinic, honest advice, fair prices. Found our family dentist.")}
        ${review("Anitha Reddy","3 weeks ago","Got my braces done here. The consultation was thorough, they showed me all my options with real pricing (no upsell). Follow-up visits are always on time. Very professional.")}
        ${review("Vikram Nair","2 months ago","Had my dental cleaning and a chipped tooth fixed on the same visit. Modern equipment, super hygienic, and the doctor genuinely cares. Booking on WhatsApp made everything easy.")}
        ${review("Sneha Patel","1 week ago","Best dental experience I've had in Hyderabad. Dr. Krishna took time to understand my concerns before jumping to treatment. My smile makeover results look completely natural. Thank you!")}
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
      ${faq("What are your clinic timings?","We are open Monday to Saturday, 10:00 AM to 8:00 PM. Closed on Sundays and public holidays. WhatsApp messages are usually answered within the hour on working days.")}
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
          src="https://www.google.com/maps?q=Parvatha+Nagar+Temple+Road,+Tulasi+Nagar,+Madhapur,+Hyderabad,+Telangana+500081&output=embed"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Krishna's Dant Ayush location"></iframe>
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
            <p>Monday – Saturday: 10:00 AM – 8:00 PM<br/>Sunday: Closed</p>
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

<!-- ============ FOOTER ============ -->
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="brand"><div class="brand-mark">K</div><div>Krishna's Dant Ayush<small>Family Dental Clinic</small></div></div>
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
</script>

</body>
</html>`;

// Small helpers used above (template-literal only; produce plain HTML strings)
function service(icon: string, title: string, desc: string) {
  const icons: Record<string, string> = {
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
    root: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c-4 0-6 3-6 7 0 4 2 5 2 9 0 2 1 4 2 4s1-3 2-3 1 3 2 3 2-2 2-4c0-4 2-5 2-9 0-4-2-7-6-7z"/></svg>',
    clean: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l4-4"/><path d="M7 17l8-8"/><rect x="14" y="2" width="6" height="10" rx="2" transform="rotate(45 17 7)"/></svg>',
    tooth: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c-4 0-6 3-6 7 0 4 2 5 2 9 0 2 1 4 2 4s1-3 2-3 1 3 2 3 2-2 2-4c0-4 2-5 2-9 0-4-2-7-6-7z"/><line x1="15" y1="7" x2="20" y2="2"/></svg>',
    braces: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="9" width="18" height="6" rx="2"/><line x1="7" y1="9" x2="7" y2="15"/><line x1="12" y1="9" x2="12" y2="15"/><line x1="17" y1="9" x2="17" y2="15"/></svg>',
    implant: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v6"/><path d="M9 9h6l-1 4h-4z"/><path d="M11 13v4l-1 3M13 13v4l1 3"/></svg>',
    smile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',
    kids: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>',
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
