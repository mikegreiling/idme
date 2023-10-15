import './PurchasesTable.scss';
import { formatCurrency } from '../utils';
import ResponsiveDate from './ResponsiveDate';
import Badge from './Badge';

const dummyData = [
  {
    id: 99,
    location:
      'https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png',
    purchaseDate: '2021-12-20T00:00:00.000Z',
    category: 'Technology',
    description: 'Lorem ipsum dolor sit amet consectetur',
    price: 245.95,
    name: 'Apple',
  },
  {
    id: 1,
    location: 'https://picsum.photos/id/0/200',
    purchaseDate: '2020-12-27T00:00:00.000Z',
    category: 'Food',
    description:
      "connecting the card won't do anything, we need to back up the digital HDD driver!",
    price: 99882,
    name: 'auxiliary generating microchip',
  },
  {
    id: 2,
    location: 'https://picsum.photos/id/1/200',
    purchaseDate: '2020-12-28T00:00:00.000Z',
    category: 'Technology',
    description:
      "I'll synthesize the primary SMTP firewall, that should monitor the ADP feed!",
    price: 69706,
    name: '1080p backing up port',
  },
  {
    id: 3,
    location: 'https://picsum.photos/id/2/200',
    purchaseDate: '2020-12-29T00:00:00.000Z',
    category: 'Footwear',
    description:
      "You can't reboot the feed without transmitting the back-end SMS pixel!",
    price: 8307,
    name: 'auxiliary generating panel',
  },
];

const badgeVariants = ['gray', 'red', 'green', 'blue'] as const;
const getBadgeVariant = (seed: number) => badgeVariants[seed % 4];

export default function PurchasesTable() {
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
          {dummyData.map((purchase) => (
            <tr className="purchase" key={purchase.id}>
              <td className="purchase-name">
                <strong>{purchase.name}</strong>
              </td>
              <td className="purchase-location">
                <img src={purchase.location} alt={purchase.name} />
              </td>
              <td
                className="purchase-date col-center"
                data-label="Purchase Date"
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
                <strong>{formatCurrency(purchase.price)}</strong>
              </td>
              <td className="purchase-actions">-</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
