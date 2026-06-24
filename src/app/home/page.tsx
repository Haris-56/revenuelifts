import PortfolioHero from "@/components/PortfolioHero";
import PortfolioProjects from "@/components/PortfolioProjects";
import PortfolioSkills from "@/components/PortfolioSkills";
import PortfolioExperience from "@/components/PortfolioExperience";
import PortfolioContact from "@/components/PortfolioContact";
import GsapEnhancer from "@/components/GsapEnhancer";

export default function Home() {
    return (
        <main className="min-h-screen">
            <GsapEnhancer />
            <PortfolioHero />
            <PortfolioProjects />
            <PortfolioSkills />
            <PortfolioExperience />
            <PortfolioContact />
        </main>
    );
}
