import { siteConfig } from '@/config/content.config';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import MissionSection from '@/components/sections/MissionSection';
import NewsletterSection from '@/components/sections/NewsletterSection';

/**
 * Main landing page
 * Assembles all sections using configuration from content.config.ts
 */
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header
        logo={siteConfig.logo.main}
        siteName={siteConfig.name}
        navigation={siteConfig.navigation}
      />
      
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          headline={siteConfig.hero.headline}
          subheadline={siteConfig.hero.subheadline}
          cta={siteConfig.hero.cta}
          ctaLink={siteConfig.hero.ctaLink}
        />
        
        {/* Problem Section */}
        <ProblemSection
          title={siteConfig.problem.title}
          intro={siteConfig.problem.intro}
          examples={siteConfig.problem.examples}
          closingText={siteConfig.problem.closingText}
        />
        
        {/* Mission Section */}
        <MissionSection
          title={siteConfig.mission.title}
          intro={siteConfig.mission.intro}
          pillars={siteConfig.mission.pillars}
        />
        
        {/* Newsletter Section */}
        <NewsletterSection
          title={siteConfig.newsletter.title}
          description={siteConfig.newsletter.description}
          buttonText={siteConfig.newsletter.buttonText}
          successMessage={siteConfig.newsletter.successMessage}
          errorMessage={siteConfig.newsletter.errorMessage}
        />
      </main>
      
      {/* Footer */}
      <Footer
        logo={siteConfig.logo.footer || siteConfig.logo.main}
        siteName={siteConfig.name}
        sections={siteConfig.footer.sections}
        copyright={siteConfig.footer.copyright}
      />
    </div>
  );
}
