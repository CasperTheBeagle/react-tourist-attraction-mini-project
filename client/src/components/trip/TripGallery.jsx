function TripGallery({ photos }) {
  const mainPhoto = photos[0];
  const thumbnails = photos.slice(1, 4);

  return (
    <div className="flex flex-col gap-2">
      <img
        src={mainPhoto}
        alt="Main trip photo"
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="flex gap-2">
        {thumbnails.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Trip photo ${index + 2}`}
            className="w-1/3 h-16 object-cover rounded-md"
          />
        ))}
      </div>
    </div>
  );
}

export default TripGallery;
