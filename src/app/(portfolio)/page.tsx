import { HeroSection } from "./_components/hero-section";
import { SkillsSection } from "./_components/skills-section";
import { FooterSection } from "./_components/footer-section";

export default function PortfolioPage() {
  return (
    <div className="flex flex-1 flex-col">
      <HeroSection />
      <SkillsSection />
      {/* <FooterSection /> */}
    </div>
  );
}
