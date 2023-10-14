import "./PurchasesTable.scss";
import { formatCurrency } from "../utils";

const dummyData = [
  {
    id: 99,
    location:
      "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",
    purchaseDate: "2021-12-20T00:00:00.000Z",
    category: "Technology",
    description: "Lorem ipsum dolor sit amet consectetur",
    price: 245.95,
    name: "Apple",
  },
  {
    id: 1,
    location: "https://picsum.photos/id/0/200",
    purchaseDate: "2020-12-27T00:00:00.000Z",
    category: "Food",
    description:
      "connecting the card won't do anything, we need to back up the digital HDD driver!",
    price: 99882,
    name: "auxiliary generating microchip",
  },
  {
    id: 2,
    location: "https://picsum.photos/id/1/200",
    purchaseDate: "2020-12-28T00:00:00.000Z",
    category: "Technology",
    description:
      "I'll synthesize the primary SMTP firewall, that should monitor the ADP feed!",
    price: 69706,
    name: "1080p backing up port",
  },
  {
    id: 3,
    location: "https://picsum.photos/id/2/200",
    purchaseDate: "2020-12-29T00:00:00.000Z",
    category: "Footwear",
    description:
      "You can't reboot the feed without transmitting the back-end SMS pixel!",
    price: 8307,
    name: "auxiliary generating panel",
  },
];

export default function PurchasesTable() {
  return (
    <div className="purchases-table">
      <table>
        <thead>
          <tr>
            <th className="purchase-name">Name</th>
            <th className="purchase-location">Location</th>
            <th className="purchase-date">Purchase Date</th>
            <th className="purchase-category">Category</th>
            <th className="purchase-description">Description</th>
            <th className="purchase-price">Price</th>
            <th className="purchase-actions">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((purchase) => (
            <tr className="purchase" key={purchase.id}>
              <td className="purchase-name">{purchase.name}</td>
              <td className="purchase-location">
                <img src={purchase.location} alt={purchase.name} />
              </td>
              <td className="purchase-date">{purchase.purchaseDate}</td>
              <td className="purchase-category">{purchase.category}</td>
              <td className="purchase-description">{purchase.description}</td>
              <td className="purchase-price">
                {formatCurrency(purchase.price)}
              </td>
              <td className="purchase-actions">-</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
