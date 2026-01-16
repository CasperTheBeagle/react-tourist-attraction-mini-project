import { useState } from 'react';
import "./App.css";
import Header from './components/layout/Header';
import TripList from './components/trip/TripList';
import useTrips from './hooks/useTrips';

function App() {
  const [searchText, setSearchText] = useState('');
  const { trips, isLoading, error } = useTrips(searchText);

  const handleSearchChange = (value) => {
    setSearchText(value);
  };

  const handleTagClick = (tag) => {
    const currentTags = searchText.trim().split(' ').filter(Boolean);
    if (!currentTags.includes(tag)) {
      setSearchText((prev) => (prev ? `${prev} ${tag}` : tag));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header searchText={searchText} onSearchChange={handleSearchChange} />
      <main>
        {isLoading && (
          <div className="text-center text-gray-500 py-8">กำลังโหลด...</div>
        )}
        {error && (
          <div className="text-center text-red-500 py-8">เกิดข้อผิดพลาด: {error}</div>
        )}
        {!isLoading && !error && (
          <TripList trips={trips} onTagClick={handleTagClick} />
        )}
      </main>
    </div>
  );
}

export default App;
