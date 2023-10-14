import './Badge.scss';
import { ReactNode } from 'react';

export type BadgeVariant = 'gray' | 'red' | 'green' | 'blue';

type BadgeProps = {
  variant: BadgeVariant;
  children: ReactNode;
};

export default function Badge({ variant, children }: BadgeProps) {
  return <span className={`badge badge-${variant}`}>{children}</span>;
}
