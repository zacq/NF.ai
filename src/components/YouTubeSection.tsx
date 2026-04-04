import { useEffect, useRef, useState } from "react";

export default function YouTubeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Pause by unmounting iframe when scrolled away
          setIsVisible(false);
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Build src with autoplay only when visible
  const src = isVisible
    ? "https://www.youtube.com/embed?listType=user_uploads&list=Neuralab-v6b&autoplay=1&mute=1&rel=0"
    : "";

  return (
    <section ref={sectionRef} className="py-12 border-t border-white/5 bg-brand-navy" aria-labelledby="neuraflow-youtube-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h2
          id="neuraflow-youtube-heading"
          className="text-2xl sm:text-3xl font-semibold text-white mb-4"
        >
          Watch NeuraFlow in action
        </h2>
        <p className="text-white/50 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
          Deep dives, live builds, and system breakdowns from the Neuralab channel.
          New content on attention infrastructure and AI sales systems every week.
        </p>
        <div className="aspect-video w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40 bg-black">
          {isVisible && (
            <iframe
              key={src}
              className="w-full h-full"
              src={src}
              title="Neuralab YouTube player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
          {!isVisible && (
            <div className="w-full h-full flex items-center justify-center bg-black/60">
              <svg viewBox="0 0 24 24" className="w-16 h-16 text-white/20" fill="currentColor">
                <path d="M23.5 6.18s-.23-1.64-.95-2.36c-.9-.95-1.9-.96-2.37-1.02C16.98 2.5 12 2.5 12 2.5h-.01s-4.98 0-8.18.3c-.47.06-1.47.07-2.37 1.02C.73 4.54.5 6.18.5 6.18S.27 8.1.27 10.01v1.96C.27 13.9.5 15.82.5 15.82s.23 1.64.95 2.36c.9.95 2.08.92 2.61 1.02 1.9.2 7.94.29 7.94.29s4.98-.01 8.18-.31c.47-.06 1.47-.07 2.37-1.02.72-.72.95-2.36.95-2.36s.23-1.92.23-3.85v-1.96c0-1.91-.23-3.83-.23-3.83ZM9.75 14.85V7.15l6.23 3.85-6.23 3.85Z" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
