import TripCard from './TripCard';

function TripList({ trips, onTagClick }) {
  if (!trips || trips.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        ไม่พบสถานที่ท่องเที่ยว
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      {trips.map((trip) => (
        <TripCard key={trip.eid} trip={trip} onTagClick={onTagClick} />
      ))}
    </div>
  );
}

export default TripList;
