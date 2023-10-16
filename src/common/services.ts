import { purchasesSchema } from './schemas';
import { decode } from 'html-entities';

/**
 * Fetch purchases from hard-coded endpoint, parse them with zod
 * to ensure it's formatted as expected, and decode HTML entities
 * from the response values as these are not needed.
 */
export const fetchPurchases = async () => {
  const response = await fetch(
    'https://storage.googleapis.com/marketplace-prod-7728-shop-cdn-e5e2/interview/data.json'
  );
  const data = await response.json();
  const parsed = purchasesSchema.parse(data);

  // Remove HTML entities encoding from name and description
  const processed = parsed.map((purchase) => ({
    ...purchase,
    name: decode(purchase.name),
    description: decode(purchase.description),
  }));
  return processed;
};
