import dayjs from 'dayjs';
import './ResponsiveDate.scss';

/**
 * Renders a date as an inline element that will collapse to a short
 * format on smaller screens. Probably could be done in a more
 * straightforward way, but I was having fun with pseudo elements on
 * this one.
 */
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
