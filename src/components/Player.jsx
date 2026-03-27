/**
 * Player – Bettet den SoundCloud Widget-Player als iframe ein.
 *
 * Props:
 *   - trackUrl: SoundCloud Track/Set URL
 *   - title: Anzeigename der Show (für Accessibility)
 */
function Player({ trackUrl, title }) {
  if (!trackUrl) return null;

  /* SoundCloud oEmbed-URL für den Widget-Player */
  const embedUrl =
    `https://w.soundcloud.com/player/?url=${encodeURIComponent(trackUrl)}` +
    `&color=%23f97316&auto_play=true&hide_related=true&show_comments=false` +
    `&show_user=true&show_reposts=false&show_teaser=false&visual=true`;

  return (
    <div className="player-wrapper">
      <p className="player-title">{title}</p>
      <iframe
        title={title}
        width="100%"
        height="100%"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={embedUrl}
      />
    </div>
  );
}

export default Player;
