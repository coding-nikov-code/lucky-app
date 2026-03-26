import Player from "./components/Player";
import ShuffleButton from "./components/ShuffleButton";
import useRandomShow from "./hooks/useRandomShow";
import "./App.css";

/**
 * App – Hauptkomponente der Lucky App.
 * Zeigt den Shuffle-Button und den SoundCloud Player.
 */
function App() {
  const { currentShow, shuffle } = useRandomShow();

  return (
    <div className="app">
      <main className="app-main">
        <ShuffleButton onClick={shuffle} />

        {currentShow && (
          <Player trackUrl={currentShow.url} title={currentShow.title} />
        )}
      </main>

      <footer className="app-footer">
        <p>Lucky App &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
