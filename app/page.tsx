import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import BlueprintStore from '@/components/BlueprintStore'; // Installed Store
import ProjectForm from '@/components/ProjectForm';       // Installed Form

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <BlueprintStore />
      <ProjectForm />
    </>
  );
}