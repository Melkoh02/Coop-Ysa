import Nav from '../components/organisims/Nav';
import Hero from '../components/organisims/Hero';
import CoreValues from '../components/organisims/CoreValues';
import AboutUs from '../components/organisims/AboutUs';
import Services from '../components/organisims/Services';
import TrustBanner from '../components/organisims/TrustBanner';
import Footer from '../components/organisims/Footer';

export default function HomeScreen() {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Nav />
      <main>
        <Hero />
        <CoreValues />
        <AboutUs />
        <Services />
        <TrustBanner />
      </main>
      <Footer />
    </div>
  );
}
