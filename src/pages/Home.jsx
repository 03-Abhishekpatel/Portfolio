
import ToogleTheme from '../components/ToogleTheme';
import StarBackground from '../components/StarBackground';
import {Navbar} from '../components/Navbar';
import {HeroSection} from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';


function Home() {
    return (
        <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
            <ToogleTheme />

            <StarBackground />

            <Navbar />

            <main>
                <HeroSection />
                <AboutSection />
                <ProjectsSection />
                <SkillsSection />
                <ContactSection />
            </main>

            {/* Footer */}
            <Footer />
        </div>

    )
}

export default Home;