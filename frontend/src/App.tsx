import React, { useState, useEffect } from 'react';
import './App.css';

interface Itinerary {
  id: number;
  title: string;
  description: string;
}

function App() {
  const [itineraries, setItineraries] = useState<Itinerary[]>([]);

  useEffect(() => {
    // Here you would fetch itineraries from your backend
    // This is just a placeholder
    setItineraries([
      { id: 1, title: 'Trip to Paris', description: 'Visiting the Eiffel Tower' },
      { id: 2, title: 'New York Adventure', description: 'Exploring Central Park' },
    ]);
  }, []);

  return (
    <div className="App">
      <h1>Travel Itinerary</h1>
      <button onClick={() => window.location.href = '/auth/google'}>
        Login with Google
      </button>
      <ul>
        {itineraries.map(itinerary => (
          <li key={itinerary.id}>
            <h2>{itinerary.title}</h2>
            <p>{itinerary.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;