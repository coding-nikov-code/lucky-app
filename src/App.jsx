import Player from "./components/Player";
import ShuffleButton from "./components/ShuffleButton";
import useRandomShow from "./hooks/useRandomShow";
import "./App.css";

/**
 * App – Hauptkomponente der Lucky App.
 * Zeigt den SoundCloud Player oben und den Shuffle-Button unten.
 */
function App() {
  const { currentShow, shuffle } = useRandomShow();

  return (
    <div className="app">
      <main className="app-main">
        {currentShow && (
          <Player trackUrl={currentShow.url} title={currentShow.title} />
        )}

        <ShuffleButton onClick={shuffle} />
      </main>
    </div>
  );
}

export default App;
