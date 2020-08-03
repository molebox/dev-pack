import { LazyImage } from './image';
import { useSearch } from 'use-cloudinary';
export default function SavedImages({ endpoint }) {
  const { search, data, isLoading, isError, error } = useSearch({ endpoint });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;
  // OPTION 1: To mirror Cloudinary's Node SDK's search expression, we've provided direct support for crafting custom search queries
  const expressionSearch = search({ expression: 'resource_type:image' });
  // OPTION 2: Also included is a few opinionated object configurations to more easily craft search based off of user interaction. This includes publicId search, folder search, and more.
  const customConfigSearch = search({ resourceType: 'image' });
  return (
    <div>
      <button onClick={() => expressionSearch()}>Load</button>
      <div>
        {data &&
          data.resources.map((image) => (
            <LazyImage
              publicId={image.public_id}
              width="80px"
              height="80px"
              transforms={{ height: 0.2, border: '2px_solid_black' }}
              cloudName="devpack-dev"
            />
          ))}
      </div>
    </div>
  );
}
