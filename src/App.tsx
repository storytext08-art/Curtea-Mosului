import { Navbar, Hero, About, Events, Gallery, MuseumFeature, Reviews, Footer } from './components/Sections';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-gold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <Gallery />
        <MuseumFeature />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
