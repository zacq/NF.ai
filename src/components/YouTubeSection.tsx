export default function YouTubeSection() {
  return (
    <section className="py-20 border-t border-white/5 bg-[#050510]" aria-labelledby="neuraflow-youtube-heading">
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
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed?listType=user_uploads&list=Neuralab-v6b"
            title="Neuralab YouTube player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
