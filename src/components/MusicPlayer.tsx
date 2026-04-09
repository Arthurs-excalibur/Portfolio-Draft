'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';
import VinylRecord from './VinylRecord';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.error("Audio playback failed:", err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    // Show tooltip initially to encourage interaction if autoplay fails
    const timer = setTimeout(() => setShowTooltip(true), 3000);

    const attemptPlay = () => {
      audioRef.current?.play().then(() => {
        setIsPlaying(true);
        setShowTooltip(false);
      }).catch(err => {
        console.log("Autoplay blocked, waiting for interaction.");
      });
    };

    // Initial attempt
    attemptPlay();

    // Fallback: play on first user interaction
    const handleFirstInteraction = () => {
      attemptPlay();
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-4 md:bottom-8 md:left-8 z-[var(--z-modal)] flex items-end gap-4 pointer-events-none">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && !isPlaying && (
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-16 left-0 md:bottom-20 bg-[var(--sunflower)] text-[var(--ink)] px-3 py-1 font-heading text-[10px] md:text-xs tracking-widest clip-manga shadow-lg whitespace-nowrap pointer-events-auto"
          >
            PLAY SOUNDTRACK?
            <div className="absolute top-full left-4 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[var(--sunflower)]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Player Widget */}
      <motion.div 
        className="flex items-center gap-2 md:gap-3 bg-[var(--ink-light)]/80 backdrop-blur-md border border-[var(--steel)]/20 p-1.5 md:p-2 rounded-full pr-4 md:pr-6 shadow-2xl pointer-events-auto"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Vinyl Toggle */}
        <button 
          onClick={() => {
            togglePlay();
            setShowTooltip(false);
          }}
          className="relative group focus:outline-none"
          data-hover
        >
          {/* Responsive vinyl size */}
          <div className="md:hidden">
            <VinylRecord size={40} spin={isPlaying} />
          </div>
          <div className="hidden md:block">
            <VinylRecord size={48} spin={isPlaying} />
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
            {isPlaying ? (
              <Pause size={14} fill="white" className="md:w-4 md:h-4" />
            ) : (
              <Play size={14} fill="white" className="ml-0.5 md:w-4 md:h-4" />
            )}
          </div>
        </button>

        {/* Track Info */}
        <div className="flex flex-col max-w-[80px] md:max-w-none">
          <div className="flex items-center gap-1.5 md:gap-2">
            <span className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[var(--sunflower)] ${isPlaying ? 'animate-pulse' : ''}`} />
            <span className="font-mono text-[7px] md:text-[8px] tracking-widest text-[var(--steel)] uppercase truncate">BGM</span>
          </div>
          <div className="overflow-hidden w-16 md:w-24">
            <motion.p 
              className="font-heading text-[10px] md:text-xs tracking-widest text-[var(--cream)] whitespace-nowrap"
              animate={isPlaying ? { x: [0, -100, 0] } : {}}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              Luv (Sic) Pt. 1 - Nujabes x Shing02
            </motion.p>
          </div>
        </div>

        {/* Mute Toggle - Hidden on mobile */}
        <button 
          onClick={toggleMute}
          className="hidden md:block ml-2 text-[var(--steel)] hover:text-[var(--sunflower)] transition-colors"
          data-hover
        >
          {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
        </button>
      </motion.div>

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src="/Luv (Sic) part 1 instrumental remix, intro loopedhookextended outro.mp3"
        loop
        autoPlay
      />

      <style jsx>{`
        .clip-manga {
          clip-path: polygon(0% 0%, 100% 0%, 95% 100%, 0% 100%);
        }
      `}</style>
    </div>
  );
}
