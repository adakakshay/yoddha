import { Header } from './components/Header';
import { PageLoader } from './components/PageLoader';
import { NewsTickerSection } from './components/NewsTickerSection';
import { HeroSection } from './components/HeroSection';
import { ImpactStatsSection } from './components/ImpactStatsSection';
import { SubmitTipSection } from './components/SubmitTipSection';
import { BeAYoddhaSection } from './components/BeAYoddhaSection';
import { AboutSection } from './components/AboutSection';
import { AwarenessSection } from './components/AwarenessSection';
import { InteractiveQuizSection } from './components/InteractiveQuizSection';
import { SuccessStoriesSection } from './components/SuccessStoriesSection';
import { InitiativesSection } from './components/InitiativesSection';
import { HelpSection } from './components/HelpSection';
import { SocialShareSection } from './components/SocialShareSection';
import { FloatingHelpButton } from './components/FloatingHelpButton';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="size-full">
      <PageLoader />
      <Header />
      <NewsTickerSection />
      <main>
        <HeroSection />
        <SubmitTipSection />
        <BeAYoddhaSection />
        <AboutSection />
        <AwarenessSection />
        <InteractiveQuizSection />
        <SuccessStoriesSection />
        <InitiativesSection />
        <ImpactStatsSection />
        <HelpSection />
        <SocialShareSection />
      </main>
      <FloatingHelpButton />
      <Footer />
      <Toaster />
    </div>
  );
}
