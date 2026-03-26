import { useState, useCallback } from "react";
import shows from "../data/shows";

/**
 * Custom Hook: wählt eine zufällige Show aus der kuratierten Liste.
 *
 * Gibt zurück:
 *   - currentShow: die aktuell ausgewählte Show (oder null)
 *   - shuffle: Funktion, um eine neue zufällige Show zu laden
 *              (vermeidet Wiederholung der gleichen Show hintereinander)
 */
function useRandomShow() {
  const [currentShow, setCurrentShow] = useState(null);

  const shuffle = useCallback(() => {
    if (shows.length === 0) return;

    if (shows.length === 1) {
      setCurrentShow(shows[0]);
      return;
    }

    setCurrentShow((prev) => {
      let next;
      do {
        const index = Math.floor(Math.random() * shows.length);
        next = shows[index];
      } while (prev && next.id === prev.id);
      return next;
    });
  }, []);

  return { currentShow, shuffle };
}

export default useRandomShow;
