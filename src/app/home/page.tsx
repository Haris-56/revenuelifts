import PortfolioHero from "@/components/PortfolioHero";
import PortfolioProjects from "@/components/PortfolioProjects";
import PortfolioSkills from "@/components/PortfolioSkills";
import PortfolioExperience from "@/components/PortfolioExperience";
import PortfolioContact from "@/components/PortfolioContact";

export default function Home() {
    return (
        <main className="min-h-screen">
            <PortfolioHero />
            <PortfolioProjects />
            <PortfolioSkills />
            <PortfolioExperience />
            <PortfolioContact />
        </main>
    );
}
