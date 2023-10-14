import dayjs from 'dayjs';
import './ResponsiveDate.scss';

export default function ResponsiveDate({ date }: { date: string }) {
  const formatter = dayjs(date);
  const longDate = formatter.format('MMMM DD, YYYY');
  const shortDate = formatter.format('MMM DD, YYYY');

  return (
    <span className="responsive-date" data-short-date={shortDate}>
      <span>{longDate}</span>
    </span>
  );
}
