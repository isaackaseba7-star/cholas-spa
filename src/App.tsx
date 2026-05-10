/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="relative antialiased selection:bg-gold selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
