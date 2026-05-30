import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Play, Pause, Sparkles } from "lucide-react";

const SCRIPT = [
  "Hi there! I'm Aprajita. Welcome to my portfolio.",
  "I'm an aspiring AI Engineer and Full Stack Developer passionate about Artificial Intelligence, Machine Learning, and Computer Vision.",
  "I've completed an AICTE internship in MERN Stack Development, where I built full-stack web applications using MongoDB, Express, React, and Node. I also finished a Yuva Machine Learning internship, working hands-on with Python and real-world ML workflows.",
  "My featured projects include a real-time Hand Gesture Recognition system built with Python and OpenCV, and an AI-powered Car Price Prediction model using machine learning regression techniques.",
  "My skill set spans C++, Java, Python, and JavaScript, along with React, Node, and the MERN stack, plus strong foundations in data structures, algorithms, and database systems.",
];

export function VoiceAssistant() {
  const [supported, setSupported] = useState(true);
  const [muted, setMuted] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const greetedRef = useRef(false);
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setSupported(false);
      return;
    }
    const pickVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      voiceRef.current =
        voices.find((v) => /female|samantha|zira|google uk english female|google us english/i.test(v.name)) ||
        voices.find((v) => v.lang?.startsWith("en")) ||
        voices[0] ||
        null;
    };
    pickVoice();
    window.speechSynthesis.onvoiceschanged = pickVoice;
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const speakAll = () => {
    if (!supported || muted) return;
    window.speechSynthesis.cancel();
    setSpeaking(true);
    setOpen(true);
    SCRIPT.forEach((line, idx) => {
      const u = new SpeechSynthesisUtterance(line);
      if (voiceRef.current) u.voice = voiceRef.current;
      u.rate = 1;
      u.pitch = 1.05;
      u.volume = 1;
      u.onstart = () => setCurrentLine(idx);
      if (idx === SCRIPT.length - 1) {
        u.onend = () => setSpeaking(false);
      }
      window.speechSynthesis.speak(u);
    });
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
  };

  const toggleMute = () => {
    if (!muted) {
      stop();
      setMuted(true);
    } else {
      setMuted(false);
    }
  };

  // Auto-greet on first user interaction (autoplay policy compliance)
  useEffect(() => {
    if (!supported) return;
    const trigger = () => {
      if (greetedRef.current || muted) return;
      greetedRef.current = true;
      setTimeout(speakAll, 400);
      window.removeEventListener("pointerdown", trigger);
      window.removeEventListener("keydown", trigger);
      window.removeEventListener("scroll", trigger);
    };
    window.addEventListener("pointerdown", trigger, { once: false });
    window.addEventListener("keydown", trigger, { once: false });
    window.addEventListener("scroll", trigger, { once: false });
    return () => {
      window.removeEventListener("pointerdown", trigger);
      window.removeEventListener("keydown", trigger);
      window.removeEventListener("scroll", trigger);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [supported, muted]);

  if (!supported) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      {open && (
        <div className="glass-card rounded-2xl p-4 max-w-xs w-[20rem] shadow-2xl animate-in fade-in slide-in-from-bottom-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="relative">
              <Sparkles className="h-4 w-4 text-[var(--neon-blue)]" />
              {speaking && (
                <span className="absolute -inset-1 rounded-full bg-[var(--neon-blue)]/30 animate-ping" />
              )}
            </div>
            <span className="text-xs font-semibold text-gradient">AI Assistant</span>
            <button
              onClick={() => setOpen(false)}
              className="ml-auto text-muted-foreground hover:text-foreground text-xs"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
          <p className="text-sm text-foreground/90 leading-relaxed min-h-[4rem]">
            {SCRIPT[currentLine]}
          </p>
          <div className="mt-3 flex gap-1">
            {SCRIPT.map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-all ${
                  i <= currentLine ? "bg-[var(--neon-blue)]" : "bg-white/10"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-2">
        <button
          onClick={toggleMute}
          className="glass h-11 w-11 rounded-full flex items-center justify-center hover:scale-105 transition"
          aria-label={muted ? "Unmute" : "Mute"}
          title={muted ? "Unmute assistant" : "Mute assistant"}
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4 text-[var(--neon-blue)]" />}
        </button>
        <button
          onClick={speaking ? stop : speakAll}
          className="btn-neon !py-2.5 !px-4 rounded-full animate-pulse-glow"
          aria-label={speaking ? "Stop" : "Play introduction"}
        >
          {speaking ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          <span className="text-xs font-semibold">
            {speaking ? "Speaking..." : "Meet Aprajita"}
          </span>
        </button>
      </div>
    </div>
  );
}
