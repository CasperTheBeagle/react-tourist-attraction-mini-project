import Tag from '../common/Tag';
import CopyLinkButton from '../common/CopyLinkButton';
import TripGallery from './TripGallery';

function TripCard({ trip, onTagClick }) {
  const truncateDescription = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <article className="flex gap-6 py-6 border-b border-gray-200">
      <div className="w-64 flex-shrink-0">
        <TripGallery photos={trip.photos} />
      </div>

      <div className="flex-1 flex flex-col">
        <h2 className="text-xl font-semibold mb-2">
          <a
            href={trip.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-cyan-500 transition-colors"
          >
            {trip.title}
          </a>
        </h2>

        <p className="text-gray-600 mb-2">
          {truncateDescription(trip.description)}{' '}
          <a
            href={trip.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-500 hover:underline"
          >
            อ่านต่อ
          </a>
        </p>

        <div className="flex items-center gap-2 mt-auto text-sm">
          <span className="text-gray-500">หมวด</span>
          {trip.tags.map((tag, index) => (
            <span key={tag}>
              <Tag label={tag} onClick={onTagClick} />
              {index < trip.tags.length - 1 && (
                <span className="text-gray-400"> </span>
              )}
            </span>
          ))}
        </div>
      </div>

      <div className="flex-shrink-0 self-center">
        <CopyLinkButton url={trip.url} />
      </div>
    </article>
  );
}

export default TripCard;
