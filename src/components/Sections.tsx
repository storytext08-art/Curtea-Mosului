import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const Reveal = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-cream/90 backdrop-blur-sm border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
        <div className="text-2xl md:text-3xl font-serif text-brand-forest">
          Curtea Moșului
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em]">
          <a href="#about" className="text-brand-ink hover:text-brand-gold transition-colors">Despre Noi</a>
          <a href="#events" className="text-brand-ink hover:text-brand-gold transition-colors">Evenimente</a>
          <a href="#gallery" className="text-brand-ink hover:text-brand-gold transition-colors">Galerie</a>
          <a href="#testimonials" className="text-brand-ink hover:text-brand-gold transition-colors">Recenzii</a>
          <a href="#contact" className="text-brand-ink hover:text-brand-gold transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex gap-4">
            <a href="https://www.instagram.com/curteamosului/" target="_blank" rel="noopener noreferrer" className="text-brand-forest hover:text-brand-gold transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/Curteamosului/" target="_blank" rel="noopener noreferrer" className="text-brand-forest hover:text-brand-gold transition-colors">
              <Facebook size={20} />
            </a>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-brand-gold font-bold text-[10px] tracking-widest uppercase flex items-center gap-2"
          >
            {isOpen ? 'Închide' : 'Meniu'}
            <div className="w-4 h-4 relative">
                <span className={`absolute h-0.5 bg-brand-gold transition-all duration-300 ${isOpen ? 'rotate-45 w-full top-1.5' : 'w-full top-0'}`} />
                <span className={`absolute h-0.5 bg-brand-gold transition-all duration-300 w-full top-1.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute h-0.5 bg-brand-gold transition-all duration-300 ${isOpen ? '-rotate-45 w-full top-1.5' : 'w-full top-3'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div 
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="lg:hidden overflow-hidden bg-brand-cream border-t border-black/5"
      >
        <div className="flex flex-col p-8 gap-6 text-[12px] font-bold uppercase tracking-[0.3em] text-center">
            <a href="#about" onClick={() => setIsOpen(false)} className="py-2">Despre Noi</a>
            <a href="#events" onClick={() => setIsOpen(false)} className="py-2">Evenimente</a>
            <a href="#gallery" onClick={() => setIsOpen(false)} className="py-2">Galerie</a>
            <a href="#testimonials" onClick={() => setIsOpen(false)} className="py-2">Recenzii</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="py-2">Contact</a>
            
            <div className="flex justify-center gap-6 pt-4 border-t border-black/5">
                <a href="https://www.instagram.com/curteamosului/" target="_blank" rel="noopener noreferrer" className="text-brand-forest">
                    <Instagram size={24} />
                </a>
                <a href="https://www.facebook.com/Curteamosului/" target="_blank" rel="noopener noreferrer" className="text-brand-forest">
                    <Facebook size={24} />
                </a>
            </div>
        </div>
      </motion.div>
    </nav>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen pt-24 md:pt-32 px-6 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero.jpg" 
          alt="Curtea Moșului Panorama" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-cream/40" />
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-center">
        <div className="relative bg-[#E8E4DA] p-8 md:p-20 aspect-square flex flex-col justify-end overflow-hidden group">
          <div className="absolute inset-0 z-0">
             <img 
              src="https://www.image2url.com/r2/default/images/1776589280472-84cd0b87-be00-4169-a113-c5b4f0e0ef63.jpg" 
              alt="Curtea Moșului Exterior" 
              className="w-full h-full object-cover opacity-20 transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute top-[-80px] right-[-80px] w-80 h-80 bg-brand-forest/10 rounded-[50%_0_50%_50%]" />
          
          <div className="absolute top-8 left-8 md:top-12 md:left-12 px-4 py-2 md:px-5 md:py-3 bg-brand-gold text-white text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg z-10">
            Experiență Autentică
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[50px] md:text-[120px] font-serif leading-[0.9] md:leading-[0.85] text-brand-forest mb-6 md:mb-8 relative z-10"
          >
            Curtea<br/>Moșului
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-2xl font-serif italic text-brand-forest/80 border-l-2 border-brand-gold pl-4 md:pl-6 relative z-10"
          >
            O moștenire a ospitalității în inima Chișinăului.
          </motion.p>
        </div>

        <div className="space-y-8 md:space-y-10">
          <div className="space-y-4">
            <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.1em]">Despre Domeniu</span>
            <p className="text-base md:text-xl text-brand-ink/70 leading-relaxed font-light">
              Situat pe strada Nicolae Milescu Spătaru, sanctuarul nostru îmbină tradiția rustică moldovenească cu seninătatea unei grădini secrete. Ideal pentru nunți, botezuri și momentele de neuitat.
            </p>
          </div>
          
          <ul className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {["Grădină spațioasă cu iazuri și nuferi", "Arhitectură tradițională din piatră și lemn", "Terase în aer liber primitoare", "Meniuri de banchet personalizabile"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-xs md:text-sm font-medium text-brand-ink/80">
                <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-brand-gold" />
                {item}
              </li>
            ))}
          </ul>

          <div className="pt-4 md:pt-6">
            <a 
              href="#contact" 
              className="inline-block w-full sm:w-auto text-center px-10 md:px-12 py-4 md:py-5 bg-brand-forest text-white text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-brand-gold transition-all duration-300 shadow-xl"
            >
              Rezervă Acum
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 rotate-90 text-[10px] uppercase tracking-[0.5em] opacity-20 font-bold hidden xl:block">
        Tradiții din 2024
      </div>
    </section>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
      <Reveal>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="order-2 lg:order-1 space-y-8 md:space-y-12">
          <div className="space-y-4">
            <span className="text-brand-gold font-serif italic text-xl md:text-2xl">Atmosfera Noastră</span>
            <h2 className="text-4xl md:text-7xl font-serif leading-[1.1] md:leading-[1] text-brand-forest">
              Unde natura întâlnește sufletul.
            </h2>
          </div>
          <p className="text-brand-ink/70 leading-relaxed text-base md:text-lg font-light">
            Strada Nicolae Milescu Spătaru 38 este mai mult decât o adresă; este un refugiu. Oaspeții se pot bucura de vederi pitorești cu iazuri liniștite, decoruri tradiționale și o evadare relaxantă din agitația orașului.
          </p>
          <div className="grid grid-cols-2 gap-8 md:gap-12 border-t border-black/5 pt-8 md:pt-10">
              <div className="space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest opacity-40">Locație</span>
                  <div className="flex items-center gap-2 md:gap-3 text-brand-forest font-medium text-sm md:text-base">
                      <MapPin size={14} className="text-brand-gold" />
                      <span>Chișinău, Moldova</span>
                  </div>
              </div>
               <div className="space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest opacity-40">Program</span>
                  <div className="flex items-center gap-2 md:gap-3 text-brand-forest font-medium text-sm md:text-base">
                      <Clock size={14} className="text-brand-gold" />
                      <span>Zilnic până la 18:00</span>
                  </div>
              </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative group flex justify-center w-full">
          <div className="w-full aspect-[4/5] min-h-[300px] md:min-h-[400px] bg-[#D6D1C4] overflow-hidden rounded-sm shadow-2xl relative">
            <img 
              src="https://lh3.googleusercontent.com/p/AF1QipNeSVwhGQyKTlFuoZozHHoIAn2JOyDgDX_D44pJ=s680-w680-h510-rw" 
              alt="Grădina Curtea Moșului" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 relative z-10"
              referrerPolicy="no-referrer"
              loading="eager"
            />
            <div className="absolute inset-0 flex items-center justify-center text-[10px] text-brand-forest/20 uppercase tracking-widest font-bold">
                Încărcare Imagine...
            </div>
          </div>
          <div className="absolute -bottom-8 -left-8 bg-brand-forest p-10 hidden xl:block z-10">
             <div className="text-brand-cream border-l border-brand-gold pl-6 space-y-2">
                <span className="text-3xl font-serif">Est. 2024</span>
                <p className="text-[10px] uppercase tracking-widest opacity-60">Păstrăm Tradiția</p>
             </div>
          </div>
        </div>
      </div>
    </Reveal>
    </section>
  );
};

export const Events = () => {
    const eventTypes = [
        { title: "Nunți", desc: "Un cadru unde timpul stă în loc. Grădina noastră grandioasă și sălile elegante oferă fundalul perfect pentru povestea voastră de dragoste.", image: "https://www.image2url.com/r2/default/images/1776589717438-f896e1a3-472b-49e2-85dc-f15fe3cf83fb.webp" },
        { title: "Botezuri", desc: "Sărbătoriți noile începuturi alături de familie într-o atmosferă caldă și tradițională care vă face să vă simțiți ca acasă.", image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFDA3YVStnNvVlyRUI9UKH7jx99uZGBp00LglSbCxeerwzPfpfkFHyLY_-06mpiIePaBecd-x1_d-3KsDPffSQPOOFyHZzCyg7JNLp8_p_2lelHjMBu_RVorzYyITsnsopZORaM=s680-w680-h510-rw" },
        { title: "Aniversări", desc: "Zile de naștere sau jubilee—ne ocupăm de fiecare detaliu pentru ca voi să vă concentrați pe crearea amintirilor frumoase.", image: "https://www.image2url.com/r2/default/images/1776589886627-81c815e1-90a3-449d-8276-963e627c0676.jpg" }
    ];

    return (
        <section id="events" className="py-20 md:py-32 px-6 bg-[#E8E4DA]/20">
            <Reveal>
                <div className="max-w-7xl mx-auto">
                <div className="text-left mb-12 md:mb-20 space-y-4">
                    <span className="text-brand-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Evenimente & Banchete</span>
                    <h2 className="text-4xl md:text-7xl text-brand-forest italic">Pilonii Bucuriei</h2>
                </div>
                
                <div className="grid md:grid-cols-3 gap-12 md:gap-16 lg:gap-24">
                    {eventTypes.map((event, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.4, duration: 1.2 }}
                            className="space-y-6 md:space-y-8"
                        >
                            <div className="aspect-[3/4] min-h-[250px] md:min-h-[300px] bg-[#E8E4DA] overflow-hidden transition-all duration-700 shadow-xl border border-brand-gold/5 text-center">
                                <img 
                                    src={event.image} 
                                    alt={`Eveniment ${event.title}`} 
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <div className="space-y-3 md:space-y-4">
                                <h3 className="text-xl md:text-2xl font-serif text-brand-forest border-b border-brand-gold/20 pb-3 md:pb-4 inline-block">{event.title}</h3>
                                <p className="text-brand-ink/60 text-xs md:text-sm leading-relaxed font-light">{event.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Reveal>
        </section>
    );
};

export const Gallery = () => {
    const images = [
        "https://www.image2url.com/r2/default/images/1776590260062-bb7d20a4-537a-435f-9eb9-6c9b85b00fab.jpg",
        "https://lh3.googleusercontent.com/p/AF1QipN7IJdeV0LsT1G4R51YLIONDHZcQMGwo3mRxFod=s680-w680-h510-rw",
        "https://lh3.googleusercontent.com/p/AF1QipNGHkSoxkcGoI_Jb9Q1fQ8bJgMqsilEvoOhAuJu=s680-w680-h510-rw",
        "https://ais-v-ext.s3.amazonaws.com/6mwxy4u3hsxfp2qbikpxwi/794472348952/input_file_9.png",
        "https://ais-v-ext.s3.amazonaws.com/6mwxy4u3hsxfp2qbikpxwi/794472348952/input_file_3.png",
        "https://ais-v-ext.s3.amazonaws.com/6mwxy4u3hsxfp2qbikpxwi/794472348952/input_file_11.png",
    ];

    return (
        <section id="gallery" className="py-20 md:py-32 px-6 bg-brand-cream">
            <Reveal>
                <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-4">
                    <div className="space-y-2 md:space-y-4">
                        <span className="text-brand-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Moștenirea Noastră</span>
                        <h2 className="text-3xl md:text-6xl font-serif italic text-brand-forest">Momente Capturate</h2>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-bold opacity-30">Glisați pentru a explora</span>
                </div>
                <div className="flex gap-6 md:gap-10 overflow-x-auto pb-8 md:pb-12 scrollbar-hide snap-x perspective-1000">
                    {images.map((img, i) => (
                        <div key={i} className="shrink-0 w-72 md:w-[450px] aspect-[4/5] min-h-[350px] md:min-h-[400px] bg-[#E8E4DA] overflow-hidden snap-center transition-all duration-700 shadow-2xl">
                            <img 
                                src={img} 
                                alt={`Galerie Foto ${i + 1}`} 
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Reveal>
        </section>
    );
};

export const MuseumFeature = () => {
    return (
        <section id="museum" className="py-20 md:py-32 px-6">
            <Reveal>
                <div className="max-w-7xl mx-auto flex justify-center">
                <div className="bg-brand-forest text-brand-cream p-10 md:p-24 w-full max-w-5xl shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-brand-gold opacity-10 rounded-full group-hover:scale-110 transition-transform duration-1000" />
                    
                    <div className="relative z-10 grid md:grid-cols-[1.5fr_1fr] gap-12 md:gap-16 items-center">
                        <div className="space-y-8 md:space-y-10 text-center md:text-left">
                            <div className="space-y-4">
                                <span className="text-brand-gold uppercase tracking-[0.4em] text-[9px] md:text-[10px] font-bold">Rafinament & Stil</span>
                                <h2 className="text-4xl md:text-7xl font-serif italic leading-tight">Săli și Terase Elegante</h2>
                            </div>
                            <p className="text-brand-cream/70 text-base md:text-lg leading-relaxed font-light">
                                Curtea Moșului vă oferă o varietate de spații amenajate cu grijă, de la interioare rustice pline de căldură până la terase înconjurate de verdeață.
                            </p>
                            <div className="flex justify-center md:justify-start gap-8 md:gap-12 pt-2 md:pt-4">
                                <div className="space-y-1">
                                    <span className="text-3xl md:text-4xl font-serif text-brand-gold">300+</span>
                                    <p className="text-[9px] md:text-[10px] uppercase tracking-widest opacity-40 text-center">Capacitate Oaspeți</p>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-3xl md:text-4xl font-serif text-brand-gold">100%</span>
                                    <p className="text-[9px] md:text-[10px] uppercase tracking-widest opacity-40 text-center">Evenimente Reușite</p>
                                </div>
                            </div>
                        </div>
                        <div className="aspect-square min-h-[250px] md:min-h-[300px] bg-white/10 border border-brand-gold/20 overflow-hidden shadow-2xl">
                            <img 
                                src="https://lh3.googleusercontent.com/p/AF1QipNa1Bonk0Yurg1NY3RRK9pi8hkGhs-8Dv2KRXw5=s680-w680-h510-rw" 
                                alt="Amenajare spațiu evenimente"
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Reveal>
        </section>
    );
};

export const Reviews = () => {
    const reviews = [
        { name: "Valeria Codreanu", text: "Personal excelent și un loc uimitor. O grădină enormă, cu două iazuri mici și multe decorațiuni tradiționale și retro!" },
        { name: "George", text: "Unul dintre cele mai bune locuri din Chișinău pentru a simți rădăcinile unei civilizații străvechi exprimate în mâncare, băuturi și peisaj." },
        { name: "Adrian Tugui", text: "Este cel mai minunat loc din Chișinău pentru nunți și petreceri de naștere." },
        { name: "Valentina V.", text: "Loc frumos cu mâncare națională delicioasă. Atmosferă excelentă." }
    ];

    return (
        <section id="testimonials" className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
            <Reveal>
                <div className="text-left mb-12 md:mb-20 space-y-4">
                <span className="text-brand-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Gastronomie & Suflet</span>
                <h2 className="text-4xl md:text-7xl text-brand-forest italic text-center md:text-left">Ecouri de Încântare</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
                {reviews.map((r, i) => (
                    <div key={i} className="space-y-6 text-center md:text-left">
                        <div className="flex justify-center md:justify-start gap-1 text-brand-gold scale-75 origin-left md:origin-left">
                            {[...Array(5)].map((_, j) => <span key={j}>★</span>)}
                        </div>
                        <p className="text-brand-ink/80 text-[13px] md:text-sm italic leading-relaxed">"{r.text}"</p>
                        <div className="h-px bg-brand-gold/20 w-12 mx-auto md:mx-0" />
                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest block opacity-40">{r.name}</span>
                    </div>
                ))}
            </div>
        </Reveal>
        </section>
    );
};

export const Footer = () => {
    return (
        <footer id="contact" className="bg-brand-cream text-brand-ink py-32 px-6 border-t border-black/5">
            <div className="max-w-7xl mx-auto">
                <div className="w-full h-[450px] mb-20 bg-gray-100 shadow-inner overflow-hidden rounded-sm border border-black/5">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2717.373432095904!2d28.898634376481747!3d47.05260177114479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97d54b8d7ebb3%3A0xe5a14d8d1e3d6f1f!2sStrada%20Nicolae%20Milescu%20Sp%C4%83taru%2038%2C%20Chi%C8%99in%C4%83u%2C%20Moldova!5e0!3m2!1sro!2sro!4v1713430000000!5m2!1sro!2sro" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Locație Curtea Moșului"
                    />
                </div>

                <div className="grid lg:grid-cols-[1.5fr_1fr_1fr] gap-12 md:gap-20">
                    <div className="space-y-8 md:space-y-12 text-center lg:text-left">
                        <div className="text-3xl md:text-5xl font-serif text-brand-forest italic">
                            Curtea Moșului
                        </div>
                        <div className="flex justify-center lg:justify-start gap-8">
                            <a href="https://www.instagram.com/curteamosului/" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:opacity-70 transition-opacity">
                              <Instagram size={28} />
                            </a>
                            <a href="https://www.facebook.com/Curteamosului/" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:opacity-70 transition-opacity">
                              <Facebook size={28} />
                            </a>
                        </div>
                        <p className="text-[10px] uppercase tracking-[0.3em] opacity-30 font-bold">
                            Amintiri Create din 2024
                        </p>
                    </div>
                    
                    <div className="space-y-8 md:space-y-10 text-center lg:text-left border-t lg:border-t-0 border-black/5 pt-12 lg:pt-0">
                        <span className="text-brand-gold text-[10px] uppercase font-bold tracking-widest">Conectați-vă</span>
                        <ul className="space-y-8">
                            <li className="flex flex-col gap-2">
                                <span className="text-[10px] uppercase opacity-40 font-bold">Vizitați-ne</span>
                                <span className="text-sm font-light leading-relaxed">Strada Nicolae Milescu Spătaru 38<br/>Chișinău, Moldova</span>
                            </li>
                            <li className="flex flex-col gap-2">
                                <span className="text-[10px] uppercase opacity-40 font-bold">Sunați</span>
                                <span className="text-xl md:text-2xl font-serif text-brand-forest">+373 603 21 616</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="space-y-8 md:space-y-10 text-center lg:text-left border-t lg:border-t-0 border-black/5 pt-12 lg:pt-0">
                         <span className="text-brand-gold text-[10px] uppercase font-bold tracking-widest">Informații</span>
                         <div className="space-y-6">
                             <p className="text-xs md:text-sm font-light leading-relaxed opacity-60 italic">
                                Pentru rezervări și detalii, ne puteți scrie oricând pe pagina noastră oficială.
                             </p>
                             <a 
                                href="https://www.facebook.com/Curteamosului/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full py-5 bg-brand-forest text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-brand-gold transition-colors shadow-lg block text-center rounded-sm"
                             >
                                Mesaj pe Facebook
                             </a>
                         </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
