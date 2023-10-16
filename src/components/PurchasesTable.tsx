import './PurchasesTable.scss';
import { formatCurrency } from '../common/utils';
import ResponsiveDate from './ResponsiveDate';
import Badge from './Badge';
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid';
import type { Purchase } from '../common/schemas';

// If I had more time here, I'd make this select a deterministic
// variant based on the purchase category string. For now, I'm just
// cycling through the variants based on the purchase ID.
const badgeVariants = ['gray', 'red', 'green', 'blue'] as const;
const getBadgeVariant = (seed: number) =>
  badgeVariants[seed % badgeVariants.length];

// Type safety enforced by our zod schema
type PurchasesTableProps = {
  purchases: Purchase[];
};

export default function PurchasesTable({ purchases }: PurchasesTableProps) {
  return (
    <div className="purchases-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th className="col-center">Purchase Date</th>
            <th className="col-center">Category</th>
            <th>Description</th>
            <th>Price</th>
            <th>
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {purchases.map((purchase) => (
            <tr className="purchase" key={purchase.id}>
              <td className="purchase-name">
                <strong>{purchase.name}</strong>
              </td>
              <td className="purchase-location">
                <img src={purchase.location} alt={purchase.name} />
              </td>
              <td
                className="purchase-date col-center"
                data-responsive-label="Purchase Date"
              >
                <ResponsiveDate date={purchase.purchaseDate} />
              </td>
              <td className="purchase-category col-center">
                <Badge variant={getBadgeVariant(purchase.id)}>
                  {purchase.category}
                </Badge>
              </td>
              <td className="purchase-description">{purchase.description}</td>
              <td className="purchase-price">
                {/* I'm making an assumption that "price" is in cents not dollars */}
                <strong>{formatCurrency(purchase.price / 100)}</strong>
              </td>
              <td className="purchase-actions">
                {/* If I had time, I'd make this open up a disclosure menu or something */}
                <button>
                  <EllipsisVerticalIcon className="icon" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
