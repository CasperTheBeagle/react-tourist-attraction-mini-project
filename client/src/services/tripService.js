const API_BASE_URL = 'http://localhost:4001';

export async function searchTrips(keyword = '') {
  const response = await fetch(`${API_BASE_URL}/trips?keywords=${encodeURIComponent(keyword)}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch trips');
  }
  
  const data = await response.json();
  return data.data;
}
