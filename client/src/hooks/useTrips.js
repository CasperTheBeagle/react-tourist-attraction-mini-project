import { useState, useEffect } from 'react';
import { searchTrips } from '../services/tripService';

function useTrips(keyword) {
  const [trips, setTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrips = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const data = await searchTrips(keyword);
        setTrips(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrips();
  }, [keyword]);

  return { trips, isLoading, error };
}

export default useTrips;
