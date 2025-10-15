import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SubmitTipSection } from './components/SubmitTipSection';
import { BeAYoddhaSection } from './components/BeAYoddhaSection';
import { AboutSection } from './components/AboutSection';
import { AwarenessSection } from './components/AwarenessSection';
import { InteractiveQuizSection } from './components/InteractiveQuizSection';
import { InitiativesSection } from './components/InitiativesSection';
import { HelpSection } from './components/HelpSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="size-full">
      <Header />
      <main>
        <HeroSection />
        <SubmitTipSection />
        <BeAYoddhaSection />
        <AboutSection />
        <AwarenessSection />
        <InteractiveQuizSection />
        <InitiativesSection />
        <HelpSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
