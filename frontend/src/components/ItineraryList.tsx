import React, { useEffect, useState } from 'react';
import { Itinerary } from '../types';

const ItineraryList: React.FC = () => {
  const [itineraries, setItineraries] = useState<Itinerary[]>([]);

  useEffect(() => {
    fetchItineraries();
  }, []);

  const fetchItineraries = async () => {
    try {
      const response = await fetch('/api/itineraries');
      const data = await response.json();
      setItineraries(data);
    } catch (error) {
      console.error('Error fetching itineraries:', error);
    }
  };

  return (
    <div>
      <h2>Your Itineraries</h2>
      {itineraries.map((itinerary) => (
        <div key={itinerary.id}>
          <h3>{itinerary.title}</h3>
          <p>{itinerary.description}</p>
          <p>From: {new Date(itinerary.startDate).toLocaleDateString()}</p>
          <p>To: {new Date(itinerary.endDate).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default ItineraryList;