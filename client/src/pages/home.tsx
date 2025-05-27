import { useEffect } from "react";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Navigation from "@/components/ui/Navigation";
import LaunchPoint from "@/components/sections/LaunchPoint";
import DiveMode from "@/components/sections/DiveMode";
import WindCurrents from "@/components/sections/WindCurrents";
import SkyMarkings from "@/components/sections/SkyMarkings";
import NestView from "@/components/sections/NestView";
import SignalToSkies from "@/components/sections/SignalToSkies";
import useKonamiCode from "@/hooks/useKonamiCode";

export default function Home() {
  const { triggerEasterEgg } = useKonamiCode();

  useEffect(() => {
    const handleFalconCry = (e: KeyboardEvent) => {
      if (e.code === 'KeyF') {
        document.body.style.filter = 'brightness(1.2)';
        setTimeout(() => {
          document.body.style.filter = '';
        }, 200);
      }
    };

    document.addEventListener('keydown', handleFalconCry);
    return () => document.removeEventListener('keydown', handleFalconCry);
  }, []);

  return (
    <div className="relative">
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      
      <main>
        <LaunchPoint />
        <DiveMode />
        <WindCurrents />
        <SkyMarkings />
        <NestView />
        <SignalToSkies />
      </main>

      {/* Footer */}
      <footer className="bg-falcon-night border-t border-falcon-steel/20 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <i className="fas fa-feather text-falcon-sky text-2xl"></i>
            <span className="font-orbitron font-bold text-2xl text-falcon-cloud">PROJECT PEREGRINE</span>
          </div>
          <p className="text-falcon-steel mb-4">Born to fall. Built to fly. Ready to soar together.</p>
          <div className="flex justify-center space-x-6 text-falcon-steel">
            <span>© 2024 Project Peregrine</span>
            <span>•</span>
            <span>Crafted with precision</span>
            <span>•</span>
            <span>Powered by passion</span>
          </div>
        </div>
      </footer>

      {/* Audio Controls */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          className="w-12 h-12 bg-falcon-storm hover:bg-falcon-blue rounded-full flex items-center justify-center text-falcon-sky hover:text-white transition-all duration-300 cursor-feather shadow-lg"
          onClick={() => {
            // TODO: Implement ambient audio toggle
            console.log('Audio toggle clicked');
          }}
        >
          <i className="fas fa-volume-mute"></i>
        </button>
      </div>
    </div>
  );
}
