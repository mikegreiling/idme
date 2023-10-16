import './Badge.scss';
import { ReactNode } from 'react';

// With more time, I'd probably put this into an immutable Set
// and infer the type, so we can keep things DRY and not re-define
// the list within PurchasesTable.tsx
export type BadgeVariant = 'gray' | 'red' | 'green' | 'blue';

type BadgeProps = {
  variant: BadgeVariant;
  children: ReactNode;
};

export default function Badge({ variant, children }: BadgeProps) {
  return <span className={`badge badge-${variant}`}>{children}</span>;
}
