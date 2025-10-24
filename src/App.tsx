import { Header } from './components/Header';
import { PageLoader } from './components/PageLoader';
import { NewsTickerSection } from './components/NewsTickerSection';
import { HeroSection } from './components/HeroSection';
import { SubmitTipSection } from './components/SubmitTipSection';
import { AboutSection } from './components/AboutSection';
import { HelpSection } from './components/HelpSection';
import { AwarenessSection } from './components/AwarenessSection';
import { InteractiveQuizSection } from './components/InteractiveQuizSection';
import { SuccessStoriesSection } from './components/SuccessStoriesSection';
import { InitiativesSection } from './components/InitiativesSection';
import { ImpactStatsSection } from './components/ImpactStatsSection';
import { BeAYoddhaSection } from './components/BeAYoddhaSection';
import { SocialShareSection } from './components/SocialShareSection';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="size-full">
      <PageLoader />
      <Header />
      <NewsTickerSection />
      <main>
        {/* a. Hero section (with image, emergency, girl photo) */}
        <HeroSection />
        
        {/* b. Submit an Anonymous Tip */}
        {/* c. Report Securely (part of SubmitTipSection) */}
        <SubmitTipSection />
        
        {/* d. About YODDHA */}
        <AboutSection />
        
        {/* e. How You Can Help */}
        <HelpSection />
        
        {/* f. Devastating Effects of Drugs */}
        <AwarenessSection />
        
        {/* g. Test Your Knowledge */}
        <InteractiveQuizSection />
        
        {/* h. Warriors Who Won */}
        <SuccessStoriesSection />
        
        {/* i. Our Joint Initiatives */}
        <InitiativesSection />
        
        {/* j. Our Impact in Numbers */}
        <ImpactStatsSection />
        
        {/* k. Pledge */}
        <BeAYoddhaSection />
        
        <SocialShareSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
